import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LogIn, Mail, Lock, Eye, EyeOff, Sparkles } from 'lucide-react';
import DecorativeLine from '../components/DecorativeLine';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-16 pb-16 px-4 flex items-center justify-center relative overflow-hidden">{/* Reduced pt from 24 to 16 since navbar is hidden */}
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-40 h-40 bg-mystical-purple rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gold-medium rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-mystical-blue rounded-full opacity-5 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-md w-full relative z-10 animate-reveal">
        {/* Card */}
        <div className="bg-gradient-to-br from-parchment-light to-parchment-medium p-8 md:p-10 rounded-xl border-3 border-gold-medium shadow-mystical-lg">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-gold-medium to-gold-dark rounded-full flex items-center justify-center shadow-gold-glow animate-pulse-glow">
                <LogIn className="text-parchment-light" size={32} />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl mb-4">Welcome Back</h1>
            <DecorativeLine />
            <p className="text-ink-brown mt-4">
              Enter the realm and continue your quest
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div className="relative group">
              <label htmlFor="email" className="block text-brown-dark font-medievalSharp mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-brown-medium group-focus-within:text-gold-medium transition-colors">
                  <Mail size={20} />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 bg-parchment-dark border-2 border-gold-dark rounded-lg font-cinzel text-ink-black focus:outline-none focus:border-gold-medium focus:shadow-gold-glow transition-all"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="relative group">
              <label htmlFor="password" className="block text-brown-dark font-medievalSharp mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-brown-medium group-focus-within:text-gold-medium transition-colors">
                  <Lock size={20} />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-12 py-3 bg-parchment-dark border-2 border-gold-dark rounded-lg font-cinzel text-ink-black focus:outline-none focus:border-gold-medium focus:shadow-gold-glow transition-all"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-brown-medium hover:text-gold-medium transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  className="w-4 h-4 border-2 border-gold-dark rounded accent-gold-medium cursor-pointer"
                />
                <span className="text-ink-brown group-hover:text-brown-dark transition-colors">
                  Remember me
                </span>
              </label>
              <a href="#" className="text-burgundy hover:text-gold-dark transition-colors font-medievalSharp">
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full btn-medieval flex items-center justify-center gap-2"
            >
              <Sparkles size={20} />
              Enter the Realm
              <Sparkles size={20} />
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t-2 border-gold-dark/30"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-parchment-light text-ink-brown font-cinzel">
                New to the quest?
              </span>
            </div>
          </div>

          {/* Register Link */}
          <div className="text-center">
            <Link
              to="/register"
              className="inline-block text-burgundy hover:text-gold-dark transition-colors font-medievalSharp text-lg"
            >
              Create an Account →
            </Link>
          </div>
        </div>

        {/* Bottom Text */}
        <p className="text-center text-ink-brown mt-6 text-sm">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Login;
