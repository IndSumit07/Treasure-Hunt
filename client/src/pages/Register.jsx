import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserPlus, Mail, Lock, User, Eye, EyeOff, Sparkles, Shield } from 'lucide-react';
import DecorativeLine from '../components/DecorativeLine';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Registration attempt:', formData);
  };

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const getPasswordStrength = (password) => {
    if (!password) return { strength: 0, label: '', color: '' };
    
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[^a-zA-Z\d]/.test(password)) strength++;

    const labels = ['Weak', 'Fair', 'Good', 'Strong'];
    const colors = ['bg-red-500', 'bg-yellow-500', 'bg-blue-500', 'bg-green-500'];
    
    return {
      strength: (strength / 4) * 100,
      label: labels[strength - 1] || '',
      color: colors[strength - 1] || 'bg-gray-300',
    };
  };

  const passwordStrength = getPasswordStrength(formData.password);

  return (
    <div className="min-h-screen pt-16 pb-16 px-4 flex items-center justify-center relative overflow-hidden">{/* Reduced pt from 24 to 16 since navbar is hidden */}
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-40 h-40 bg-mystical-blue rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gold-medium rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-mystical-purple rounded-full opacity-5 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-md w-full relative z-10 animate-reveal">
        {/* Card */}
        <div className="bg-gradient-to-br from-parchment-light to-parchment-medium p-8 md:p-10 rounded-xl border-3 border-gold-medium shadow-mystical-lg">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-mystical-purple to-mystical-blue rounded-full flex items-center justify-center shadow-mystical animate-mystical-glow">
                <UserPlus className="text-parchment-light" size={32} />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl mb-4">Join the Quest</h1>
            <DecorativeLine />
            <p className="text-ink-brown mt-4">
              Create your account and begin your legendary adventure
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Username Field */}
            <div className="relative group">
              <label htmlFor="username" className="block text-brown-dark font-medievalSharp mb-2">
                Hunter Name
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-brown-medium group-focus-within:text-gold-medium transition-colors">
                  <User size={20} />
                </div>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 bg-parchment-dark border-2 border-gold-dark rounded-lg font-cinzel text-ink-black focus:outline-none focus:border-gold-medium focus:shadow-gold-glow transition-all"
                  placeholder="Sir Galahad"
                />
              </div>
            </div>

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
              {/* Password Strength Indicator */}
              {formData.password && (
                <div className="mt-2">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex-1 h-2 bg-parchment-dark rounded-full overflow-hidden">
                      <div
                        className={`h-full ${passwordStrength.color} transition-all duration-300`}
                        style={{ width: `${passwordStrength.strength}%` }}
                      ></div>
                    </div>
                    <span className="text-xs font-cinzel text-ink-brown">{passwordStrength.label}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Confirm Password Field */}
            <div className="relative group">
              <label htmlFor="confirmPassword" className="block text-brown-dark font-medievalSharp mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-brown-medium group-focus-within:text-gold-medium transition-colors">
                  <Shield size={20} />
                </div>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-12 py-3 bg-parchment-dark border-2 border-gold-dark rounded-lg font-cinzel text-ink-black focus:outline-none focus:border-gold-medium focus:shadow-gold-glow transition-all"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-brown-medium hover:text-gold-medium transition-colors"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Terms Checkbox */}
            <label className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                required
                className="mt-1 w-4 h-4 border-2 border-gold-dark rounded accent-gold-medium cursor-pointer"
              />
              <span className="text-sm text-ink-brown group-hover:text-brown-dark transition-colors">
                I agree to the <a href="#" className="text-burgundy hover:text-gold-dark">Terms of Service</a> and <a href="#" className="text-burgundy hover:text-gold-dark">Privacy Policy</a>
              </span>
            </label>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full btn-medieval flex items-center justify-center gap-2"
              disabled={!formData.agreeToTerms}
            >
              <Sparkles size={20} />
              Begin Your Journey
              <Sparkles size={20} />
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t-2 border-gold-dark/30"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-parchment-light text-ink-brown font-cinzel">
                Already have an account?
              </span>
            </div>
          </div>

          {/* Login Link */}
          <div className="text-center">
            <Link
              to="/login"
              className="inline-block text-burgundy hover:text-gold-dark transition-colors font-medievalSharp text-lg"
            >
              Sign In →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
