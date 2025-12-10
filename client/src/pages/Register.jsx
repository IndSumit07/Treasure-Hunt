import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Icons from '../components/Icons';
import showToast from '../utils/toast';
import { useAuth } from '../context/AuthContext';
import supabase from '../lib/Supabase';

const Register = () => {
  const { user, profile, fetchProfile, loading: authLoading } = useAuth(); // rename loading to avoid conflict if any, though none here
  const navigate = useNavigate();
  
  const [profileLoading, setProfileLoading] = useState(false);
  const [profileFormData, setProfileFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    college_name: '',
    branch_name: '',
    year_of_study: ''
  });

  // Pre-fill profile form if data exists
  React.useEffect(() => {
    if (user) {
      setProfileFormData(prev => ({
        ...prev,
        full_name: profile?.full_name || user.user_metadata?.full_name || '',
        email: profile?.email || user.email || '',
        phone: profile?.phone || '',
        college_name: profile?.college_name || '',
        branch_name: profile?.branch_name || '',
        year_of_study: profile?.year_of_study || ''
      }));
    }
  }, [user, profile]);

  // Track if profile has been saved in this session
  const [profileSaved, setProfileSaved] = React.useState(false);

  const isProfileComplete = profile && 
        profile.full_name && profile.full_name.trim() !== '' &&
        profile.email && profile.email.trim() !== '' &&
        profile.phone && 
        profile.college_name && 
        profile.branch_name && 
        profile.year_of_study;

  // Determine what to show: Always show profile form first, then registration after save
  const showRegistrationForm = profileSaved || isProfileComplete;

  // Enforce login
  React.useEffect(() => {
    if (!authLoading && !user) {
       navigate('/login', { state: { from: '/register' } });
    }
  }, [user, authLoading, navigate]);

  const handleProfileChange = (e) => {
    setProfileFormData({
      ...profileFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    setProfileLoading(true);
    const loadingToast = showToast.loading('Updating your profile...');

    try {
      console.log('Updating profile with data:', profileFormData);
      console.log('User ID:', user.id);

      const profileData = {
        user_id: user.id,
        full_name: profileFormData.full_name,
        email: profileFormData.email,
        phone: profileFormData.phone,
        college_name: profileFormData.college_name,
        branch_name: profileFormData.branch_name,
        year_of_study: profileFormData.year_of_study
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
      
      await fetchProfile(user.id);

      showToast.dismiss(loadingToast);
      showToast.success('Profile updated successfully!');
      
      // Mark profile as saved to show registration form
      setProfileSaved(true);
    } catch (error) {
      console.error('Profile update error:', error);
      showToast.dismiss(loadingToast);
      showToast.error(error.message);
    } finally {
      setProfileLoading(false);
    }
  };

  const [formData, setFormData] = useState({
    teamName: '',
    teamLeaderName: '',
    teamLeaderEmail: '',
    teamSize: 1,
    teammates: []
  });

  // Pre-fill registration form with user details
  React.useEffect(() => {
    if (user || profile) {
      setFormData(prev => ({
        ...prev,
        teamLeaderName: profile?.full_name || '',
        teamLeaderEmail: user?.email || '',
      }));
    }
  }, [user, profile]);

  // Removed showSuccess state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleTeamSizeChange = (e) => {
    const size = parseInt(e.target.value);
    const teammates = Array(Math.max(0, size - 1)).fill('');
    setFormData({
      ...formData,
      teamSize: size,
      teammates
    });
  };

  const handleTeammateChange = (index, value) => {
    const newTeammates = [...formData.teammates];
    newTeammates[index] = value;
    setFormData({
      ...formData,
      teammates: newTeammates
    });
  };

  const calculatePrice = () => {
    return formData.teamSize * 49;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    showToast.success('Registration Successful! Check your email.');
    console.log('Registration:', formData);
  };

  return (
    <div className="min-h-screen pt-32 pb-16 px-4 bg-page-light">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-5xl md:text-6xl font-black mb-4 font-heading text-gray-900">
            Register Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-treasure-bronze to-treasure-gold">Team</span>
          </h1>
          <p className="text-xl text-gray-500">
            Join the epic treasure hunt adventure
          </p>
        </div>

        {/* Forms Container */}
        <div className="paper-card p-8 md:p-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          
          {/* Profile Completion Form (Show if profile not saved yet) */}
          {!authLoading && !showRegistrationForm && (
            <div>
              <div className="mb-8 border-b border-gray-100 pb-6">
                 <h2 className="text-2xl font-bold mb-2 flex items-center space-x-3 text-gray-800 font-heading">
                  <Icons.User className="w-7 h-7 text-treasure-bronze" />
                  <span>Complete Your Profile</span>
                </h2>
                <p className="text-gray-500">We need a few more details before you can register your team.</p>
              </div>

              <form onSubmit={handleProfileSubmit} className="space-y-5">
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
                      value={profileFormData.phone}
                      onChange={handleProfileChange}
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
                      value={profileFormData.college_name}
                      onChange={handleProfileChange}
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
                      value={profileFormData.branch_name}
                      onChange={handleProfileChange}
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
                      value={profileFormData.year_of_study}
                      onChange={handleProfileChange}
                      placeholder="Third Year"
                      className="input-field pl-14"
                      required
                    />
                  </div>
                </div>

                 {/* Role */}
                 <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 font-heading">
                    Role
                  </label>
                  <div className="relative">
                     <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Icons.Briefcase className="w-5 h-5 text-gray-400" />
                    </div>
                    <select
                      name="role"
                      value={profileFormData.role}
                      onChange={handleProfileChange}
                      className="input-field pl-14 appearance-none"
                    >
                      <option value="student">Student</option>
                      <option value="faculty">Faculty</option>
                      <option value="alumni">Alumni</option>
                    </select>
                     <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                      <Icons.ChevronDown className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={profileLoading}
                  className="btn-primary w-full text-lg flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span>{profileLoading ? 'Saving...' : 'Continue to Registration'}</span>
                  {!profileLoading && <Icons.ArrowRight className="w-5 h-5" />}
                </button>
              </form>
            </div>
          )}

          {/* Registration Form (Show only after profile is saved) */}
          {!authLoading && showRegistrationForm && (
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Team Information Section */}
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center space-x-3 text-gray-800 font-heading">
                <Icons.Team className="w-7 h-7 text-treasure-bronze" />
                <span>Team Information</span>
              </h2>
              
              <div className="space-y-6">
                {/* Team Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 font-heading">
                    Team Name *
                  </label>
                  <input
                    type="text"
                    name="teamName"
                    value={formData.teamName}
                    onChange={handleChange}
                    placeholder="The Code Pirates"
                    className="input-field"
                    required
                  />
                </div>

                {/* Team Size */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 font-heading">
                    Team Size (1-6 members) *
                  </label>
                  <select
                    name="teamSize"
                    value={formData.teamSize}
                    onChange={handleTeamSizeChange}
                    className="input-field"
                    required
                  >
                    {[1, 2, 3, 4, 5, 6].map(size => (
                      <option key={size} value={size}>{size} {size === 1 ? 'Member' : 'Members'}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Team Leader Section */}
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center space-x-3 text-gray-800 font-heading">
                <Icons.User className="w-7 h-7 text-treasure-bronze" />
                <span>Team Leader Details</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 font-heading">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="teamLeaderName"
                    value={formData.teamLeaderName}
                    onChange={handleChange}
                    placeholder="Captain Jack"
                    className="input-field"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 font-heading">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="teamLeaderEmail"
                    value={formData.teamLeaderEmail}
                    onChange={handleChange}
                    placeholder="captain@treasurehunt.com"
                    className="input-field"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Team Members Section */}
            {formData.teamSize > 1 && (
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center space-x-3 text-gray-800 font-heading">
                  <Icons.Users className="w-7 h-7 text-treasure-bronze" />
                  <span>Team Members ({formData.teamSize - 1})</span>
                </h2>
                
                <div className="space-y-4">
                  {formData.teammates.map((email, index) => (
                    <div key={index}>
                      <label className="block text-sm font-semibold text-gray-700 mb-2 font-heading">
                        Member {index + 1} Email *
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => handleTeammateChange(index, e.target.value)}
                        placeholder={`member${index + 1}@example.com`}
                        className="input-field"
                        required
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Price Summary */}
            <div className="bg-treasure-gold/5 rounded-2xl p-6 border border-treasure-gold/20">
              <h3 className="text-xl font-bold mb-4 flex items-center space-x-3 text-gray-900 font-heading">
                <Icons.Trophy className="w-6 h-6 text-treasure-gold" />
                <span>Registration Summary</span>
              </h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Team Size:</span>
                  <span className="font-semibold text-gray-900">{formData.teamSize} {formData.teamSize === 1 ? 'Member' : 'Members'}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Price per person:</span>
                  <span className="font-semibold text-gray-900">₹49</span>
                </div>
                
                <div className="border-t border-treasure-gold/20 pt-3 mt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-gray-900 font-heading">Total Amount:</span>
                    <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-treasure-bronze to-treasure-gold font-heading">₹{calculatePrice()}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button type="submit" className="btn-primary flex-1 text-lg flex items-center justify-center space-x-2">
                <Icons.CheckCircle className="w-6 h-6" />
                <span>Complete Registration</span>
                <Icons.ArrowRight className="w-5 h-5" />
              </button>
              <Link to="/" className="btn-secondary flex-1 text-lg flex items-center justify-center space-x-2">
                <span>Cancel</span>
              </Link>
            </div>
          </form>
          )}
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="paper-card p-6 text-center">
            <Icons.Calendar className="w-10 h-10 text-treasure-bronze mx-auto mb-3" />
            <h3 className="font-bold mb-2 text-gray-900 font-heading">Event Date</h3>
            <p className="text-gray-500 text-sm">January 15, 2026</p>
          </div>
          
          <div className="paper-card p-6 text-center">
            <Icons.Clock className="w-10 h-10 text-treasure-gold mx-auto mb-3" />
            <h3 className="font-bold mb-2 text-gray-900 font-heading">Duration</h3>
            <p className="text-gray-500 text-sm">10:00 AM - 6:00 PM</p>
          </div>
          
          <div className="paper-card p-6 text-center">
            <Icons.Trophy className="w-10 h-10 text-treasure-bronze mx-auto mb-3" />
            <h3 className="font-bold mb-2 text-gray-900 font-heading">Prize Pool</h3>
            <p className="text-gray-500 text-sm">₹1,00,000+</p>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Register;
