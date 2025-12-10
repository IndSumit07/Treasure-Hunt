import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Icons from '../components/Icons';
import { useAuth } from '../context/AuthContext';
import showToast from '../utils/toast';

const Signup = () => {
  const { signUp, signInWithGoogle, signInWithGithub } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showForm, setShowForm] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleGoogleSignup = async () => {
    const loadingToast = showToast.loading("Preparing to board via Google...");
    try {
      const { error } = await signInWithGoogle();
      if (error) throw error;
      showToast.dismiss(loadingToast);
      showToast.success("Course plotted! Redirecting to Google...");
    } catch (error) {
      showToast.dismiss(loadingToast);
      showToast.error(error.message);
    }
  };

  const handleGithubSignup = async () => {
    const loadingToast = showToast.loading("Preparing to board via GitHub...");
    try {
      const { error } = await signInWithGithub();
      if (error) throw error;
      showToast.dismiss(loadingToast);
      showToast.success("Course plotted! Redirecting to GitHub...");
    } catch (error) {
      showToast.dismiss(loadingToast);
      showToast.error(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      showToast.error('Passwords do not match!');
      return;
    }
    const loadingToast = showToast.loading('Creating your account...');
    try {
      // We still pass full_name so it gets into the initial profile
      const metaData = {
        full_name: formData.name,
      };

      const { error } = await signUp(formData.email, formData.password, metaData);
      showToast.dismiss(loadingToast);
      
      if (error) throw error;
      showToast.success('Signup successful! Please complete your profile.');
      // Redirect to the profile completion page
      navigate('/complete-profile');
    } catch (error) {
      showToast.dismiss(loadingToast);
      showToast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 relative overflow-hidden bg-page-light">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-treasure-gold/10 rounded-full blur-3xl animate-pulse-gold"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary-100/40 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Logo/Brand */}
        <div className="text-center mb-8 animate-slide-up">
          <Link to="/" className="inline-flex items-center space-x-3 mb-4 group">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-treasure-gold to-treasure-bronze flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Icons.Compass className="w-8 h-8 text-white" />
            </div>
          </Link>
          <h2 className="text-3xl font-black text-gray-900 font-heading">
            Treasure Hunt
          </h2>
        </div>

        {/* Signup Card */}
        <div className="paper-card p-8 shadow-card animate-slide-up" style={{ animationDelay: '0.1s' }}>
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2 font-heading">Join the Adventure!</h1>
            <p className="text-gray-500">Create your account to get started</p>
          </div>

          {!showForm ? (
            <div className="space-y-4">
               {/* Social Signup */}
               <button 
                 onClick={handleGoogleSignup}
                 className="w-full flex items-center justify-center space-x-3 px-6 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 text-gray-600 transition-all duration-300 font-semibold group bg-white">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                <span>Sign up with Google</span>
              </button>

              <button
                onClick={handleGithubSignup} 
                className="w-full flex items-center justify-center space-x-3 px-6 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 text-gray-600 transition-all duration-300 font-semibold group bg-white">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span>Sign up with GitHub</span>
              </button>

               <button 
                 onClick={() => setShowForm(true)}
                 className="w-full flex items-center justify-center space-x-3 px-6 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 text-gray-600 transition-all duration-300 font-semibold group bg-white"
               >
                 <Icons.Mail className="w-5 h-5 text-gray-600" />
                 <span>Sign up with Email</span>
               </button>
            </div>
          ) : (
            <div className="animate-fade-in">
              <button 
                onClick={() => setShowForm(false)} 
                className="mb-8 flex items-center text-sm text-gray-500 hover:text-treasure-bronze transition-colors font-medium"
              >
                <Icons.ArrowRight className="w-4 h-4 rotate-180 mr-1" />
                Back to options
              </button>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 font-heading">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Icons.User className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="input-field pl-14"
                      required
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 font-heading">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Icons.Mail className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="input-field pl-14"
                      required
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 font-heading">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Icons.Lock className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Create a strong password"
                      className="input-field pl-14"
                      required
                    />
                  </div>
                </div>

                {/* Confirm Password Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 font-heading">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Icons.CheckCircle className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirm your password"
                      className="input-field pl-14"
                      required
                    />
                  </div>
                </div>

                {/* Terms & Conditions */}
                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id="terms"
                    className="w-4 h-4 mt-1 rounded border-gray-300 text-treasure-gold focus:ring-treasure-gold"
                    required
                  />
                  <label htmlFor="terms" className="text-sm text-gray-500">
                    I agree to the{' '}
                    <a href="#" className="text-treasure-bronze font-semibold hover:text-treasure-gold transition-colors">
                      Terms & Conditions
                    </a>{' '}
                    and{' '}
                    <a href="#" className="text-treasure-bronze font-semibold hover:text-treasure-gold transition-colors">
                      Privacy Policy
                    </a>
                  </label>
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn-primary w-full text-lg flex items-center justify-center space-x-2">
                  <span>Create Account</span>
                  <Icons.ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          )}

          {/* Login Link */}
          <div className="mt-8 text-center bg-gray-50 rounded-xl py-4 border border-gray-100">
            <p className="text-gray-500">
              Already have an account?{' '}
              <Link to="/login" className="text-treasure-bronze font-bold hover:text-treasure-gold transition-colors inline-block ml-1">
                Sign in here
              </Link>
            </p>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-8 text-center">
          <Link to="/" className="inline-flex items-center space-x-2 text-gray-500 hover:text-treasure-bronze transition-colors font-medium">
            <Icons.ArrowRight className="w-4 h-4 rotate-180" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};


export default Signup;
