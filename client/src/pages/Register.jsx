import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icons from '../components/Icons';

const Register = () => {
  const [formData, setFormData] = useState({
    teamName: '',
    teamLeaderName: '',
    teamLeaderEmail: '',
    teamSize: 1,
    teammates: []
  });

  const [showSuccess, setShowSuccess] = useState(false);

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
    if (formData.teamSize === 1) return 299;
    return formData.teamSize * 250;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
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

        {/* Registration Form */}
        <div className="paper-card p-8 md:p-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
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
                  <span className="font-semibold text-gray-900">₹{formData.teamSize === 1 ? 299 : 250}</span>
                </div>
                
                <div className="border-t border-treasure-gold/20 pt-3 mt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-gray-900 font-heading">Total Amount:</span>
                    <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-treasure-bronze to-treasure-gold font-heading">₹{calculatePrice()}</span>
                  </div>
                </div>

                {formData.teamSize > 1 && (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-3 mt-3">
                    <p className="text-sm text-green-700 font-semibold text-center">
                      💰 Save ₹{(299 - 250) * formData.teamSize} with team registration!
                    </p>
                  </div>
                )}
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
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="paper-card p-6 text-center">
            <Icons.Calendar className="w-10 h-10 text-treasure-bronze mx-auto mb-3" />
            <h3 className="font-bold mb-2 text-gray-900 font-heading">Event Date</h3>
            <p className="text-gray-500 text-sm">March 15, 2024</p>
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

      {/* Success Message */}
      {showSuccess && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 animate-slide-up">
          <div className="paper-card px-8 py-4 shadow-gold flex items-center space-x-3 border-l-4 border-treasure-gold">
            <Icons.CheckCircle className="w-6 h-6 text-treasure-gold" />
            <span className="font-bold text-lg text-gray-900">Registration Successful! Check your email.</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
