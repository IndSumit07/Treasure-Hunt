import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import showToast from '../utils/toast';
import Icons from '../components/Icons';
import supabase from '../lib/Supabase';

const CompleteProfile = () => {
  const { user, fetchProfile, profile, loading: authLoading } = useAuth(); // Add authLoading
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    college_name: '',
    branch_name: '',
    year_of_study: ''
  });

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
    
    // Pre-fill data
    setFormData(prev => ({
      ...prev,
      full_name: profile?.full_name || user.user_metadata?.full_name || '',
      email: profile?.email || user.email || '',
      phone: profile?.phone || '',
      college_name: profile?.college_name || '',
      branch_name: profile?.branch_name || '',
      year_of_study: profile?.year_of_study || ''
    }));
  }, [user, profile, navigate]);

  // Check if specific fields are already filled to decide if inputs should be read-only
  const isNameFilled = !!(profile?.full_name || user.user_metadata?.full_name);
  const isEmailFilled = !!(profile?.email || user.email);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const loadingToast = showToast.loading('Updating your profile...');

    try {
      console.log('Updating profile with data:', formData);
      console.log('User ID:', user.id);

      const profileData = {
        user_id: user.id,
        full_name: formData.full_name,
        email: formData.email,
        phone: formData.phone,
        college_name: formData.college_name,
        branch_name: formData.branch_name,
        year_of_study: formData.year_of_study
      };

      // Check if profile exists
      const { data: existingProfile } = await supabase
        .from('profiles')
        .select('id')
        .eq('user_id', user.id)
        .single();

      let data, error;

      if (existingProfile) {
        // Update existing profile
        console.log('Updating existing profile...');
        const result = await supabase
          .from('profiles')
          .update(profileData)
          .eq('user_id', user.id)
          .select();
        data = result.data;
        error = result.error;
      } else {
        // Insert new profile
        console.log('Inserting new profile...');
        const result = await supabase
          .from('profiles')
          .insert([profileData])
          .select();
        data = result.data;
        error = result.error;
      }

      console.log('Operation response:', { data, error });

      if (error) throw error;

      showToast.dismiss(loadingToast);
      showToast.success('Profile updated successfully!');
      
      // Update profile in context
      await fetchProfile(user.id);
      
      const from = location.state?.from || '/';
      navigate(from);
    } catch (error) {
      console.error('Profile update error:', error);
      showToast.dismiss(loadingToast);
      showToast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  // Check if profile is complete (all fields filled)
  const isProfileComplete = profile && 
    profile.full_name && profile.full_name.trim() !== '' &&
    profile.email && profile.email.trim() !== '' &&
    profile.phone && profile.phone.trim() !== '' &&
    profile.college_name && profile.college_name.trim() !== '' &&
    profile.branch_name && profile.branch_name.trim() !== '' &&
    profile.year_of_study && profile.year_of_study.trim() !== '';

  // If profile is complete, redirect to intended destination
  React.useEffect(() => {
    if (!authLoading && isProfileComplete) {
      const from = location.state?.from || '/';
      navigate(from);
    }
  }, [isProfileComplete, authLoading, navigate, location]);

  // Don't render form if profile is complete
  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

  if (isProfileComplete) {
    return null; // Will redirect via useEffect
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 relative overflow-hidden bg-page-light">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-treasure-gold/10 rounded-full blur-3xl animate-pulse-gold"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary-100/40 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-md relative z-10">
         <div className="text-center mb-8 animate-slide-up">
           <div className="inline-flex items-center space-x-3 mb-4 group">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-treasure-gold to-treasure-bronze flex items-center justify-center shadow-lg">
              <Icons.User className="w-8 h-8 text-white" />
            </div>
           </div>
          <h2 className="text-3xl font-black text-gray-900 font-heading">
            Complete Profile
          </h2>
          <p className="text-gray-500 mt-2">Just a few more details to get you started</p>
        </div>

        <div className="paper-card p-8 shadow-card animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
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
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="input-field pl-14"
                  required
                />
              </div>
            </div>

            {/* Email */}
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
                  placeholder="john@example.com"
                  className="input-field pl-14"
                  required
                  readOnly={isEmailFilled} // Read only if pre-filled, otherwise editable
                  className={`input-field pl-14 ${isEmailFilled ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                />
              </div>
            </div>

             {/* Phone Input */}
             <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 font-heading">
                Phone Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Icons.Phone className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 99999 99999"
                  className="input-field pl-14"
                  required
                />
              </div>
            </div>

            {/* College Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 font-heading">
                College Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Icons.Building className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="college_name"
                  value={formData.college_name}
                  onChange={handleChange}
                  placeholder="Imperial Academy of Mines"
                  className="input-field pl-14"
                  required
                />
              </div>
            </div>

            {/* Branch Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 font-heading">
                Branch
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Icons.Book className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="branch_name"
                  value={formData.branch_name}
                  onChange={handleChange}
                  placeholder="Computer Science"
                  className="input-field pl-14"
                  required
                />
              </div>
            </div>

            {/* Year of Study */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 font-heading">
                Year of Study
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Icons.Calendar className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="year_of_study"
                  value={formData.year_of_study}
                  onChange={handleChange}
                  placeholder="Third Year"
                  className="input-field pl-14"
                  required
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="btn-primary w-full text-lg flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <span>{loading ? 'Saving...' : 'Complete Profile'}</span>
              {!loading && <Icons.CheckCircle className="w-5 h-5" />}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompleteProfile;
