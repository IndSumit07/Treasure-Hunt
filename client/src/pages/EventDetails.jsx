import React from 'react';
import { eventDetails, faqs } from '../data/mockData';
import { Link, useNavigate } from 'react-router-dom';
import Icons from '../components/Icons';
import { useAuth } from '../context/AuthContext';

const EventDetails = () => {
  const { user, profile } = useAuth();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    
    if (!user) {
      navigate('/login', { state: { from: '/register' } });
      return;
    }

    // Check if profile is fully complete (all fields filled, no nulls)
    const isProfileComplete = profile && 
      profile.full_name && profile.full_name.trim() !== '' &&
      profile.email && profile.email.trim() !== '' &&
      profile.phone && profile.phone.trim() !== '' &&
      profile.college_name && profile.college_name.trim() !== '' &&
      profile.branch_name && profile.branch_name.trim() !== '' &&
      profile.year_of_study && profile.year_of_study.trim() !== '';

    if (!isProfileComplete) {
      navigate('/complete-profile', { state: { from: '/register' } });
    } else {
      navigate('/register');
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-16 px-4 relative bg-page-light">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-10 w-96 h-96 bg-primary-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-treasure-gold/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="bg-white border border-gray-200 px-4 py-1.5 rounded-full flex items-center gap-2 shadow-sm">
              <Icons.Info className="w-4 h-4 text-primary-500" />
              <span className="text-sm font-bold text-gray-600 font-heading">Event Information</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4 font-heading text-gray-900">
            {eventDetails.title}
          </h1>
          <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto">
            {eventDetails.subtitle}
          </p>
        </div>

        {/* Description */}
        <div className="paper-card p-8 md:p-12 mb-12 relative overflow-hidden animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
            <Icons.Compass className="w-40 h-40 text-gray-900" />
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center space-x-3 font-heading">
              <Icons.Map className="w-8 h-8 text-treasure-bronze" />
              <span>The Legend Begins...</span>
            </h2>
            <div className="prose prose-lg max-w-none">
              {eventDetails.description.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-600 leading-relaxed mb-4 text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Rules Section */}
        <div className="mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center space-x-3 font-heading">
            <Icons.CheckCircle className="w-8 h-8 text-primary-600" />
            <span>Rules of Engagement</span>
          </h2>
          <div className="paper-card p-8">
            <ul className="space-y-6">
              {eventDetails.rules.map((rule, index) => (
                <li key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold shadow-sm border border-primary-200">
                    {index + 1}
                  </div>
                  <p className="text-gray-600 text-lg pt-1">{rule}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Rewards Section */}
        <div className="mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center space-x-3 font-heading">
            <Icons.Trophy className="w-8 h-8 text-treasure-gold" />
            <span>Treasure Awaits</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {eventDetails.rewards.map((reward, index) => (
              <div
                key={index}
                className={`paper-card p-6 transition-all duration-300 hover:scale-[1.02] ${
                  index === 0 ? 'md:col-span-2 border-treasure-gold/30 bg-treasure-gold/5 shadow-gold' : ''
                }`}
              >
                <div className="flex items-center space-x-6">
                  <div className="text-5xl">{reward.icon}</div>
                  <div className="flex-1">
                    <h3 className={`text-2xl font-bold mb-2 font-heading ${index === 0 ? 'text-treasure-bronze' : 'text-gray-900'}`}>
                      {reward.place}
                    </h3>
                    <p className={`font-bold text-xl font-heading ${index === 0 ? 'text-treasure-gold' : 'text-gray-500'}`}>
                      {reward.prize}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs Section */}
        <div className="mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center space-x-3 font-heading">
            <Icons.Info className="w-8 h-8 text-primary-600" />
            <span>Frequently Asked Questions</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="paper-card p-6 cursor-pointer group hover:bg-gray-50 transition-colors"
              >
                <summary className="font-bold text-gray-900 text-lg list-none flex items-center justify-between font-heading">
                  <span>{faq.question}</span>
                  <Icons.ChevronDown className="w-5 h-5 text-gray-400 transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed pl-4 border-l-2 border-gray-200">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>

        {/* Event Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <div className="paper-card p-6 text-center hover:-translate-y-2 transition-transform duration-300">
            <Icons.Calendar className="w-12 h-12 mx-auto mb-4 text-primary-500" />
            <h3 className="font-bold text-gray-900 mb-1 font-heading">Date</h3>
            <p className="text-gray-500">{eventDetails.date}</p>
          </div>

          <div className="paper-card p-6 text-center hover:-translate-y-2 transition-transform duration-300">
            <Icons.Clock className="w-12 h-12 mx-auto mb-4 text-treasure-bronze" />
            <h3 className="font-bold text-gray-900 mb-1 font-heading">Time</h3>
            <p className="text-gray-500">{eventDetails.time}</p>
          </div>

          <div className="paper-card p-6 text-center hover:-translate-y-2 transition-transform duration-300">
            <Icons.Location className="w-12 h-12 mx-auto mb-4 text-treasure-gold" />
            <h3 className="font-bold text-gray-900 mb-1 font-heading">Location</h3>
            <p className="text-gray-500">{eventDetails.location}</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="paper-card p-8 md:p-12 text-center relative overflow-hidden bg-gradient-to-br from-primary-900 to-primary-700 animate-slide-up" style={{ animationDelay: '0.6s' }}>
           {/* Abstract Lines */}
           <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
               <svg width="100%" height="100%">
                   <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                       <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                   </pattern>
                   <rect width="100%" height="100%" fill="url(#grid)" />
               </svg>
           </div>
           
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-white font-heading">
              Ready to Join the Adventure?
            </h2>
            <p className="text-lg md:text-xl mb-8 text-primary-100">
              Don't miss out on this epic treasure hunt experience!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={handleRegister} className="bg-white text-primary-900 font-heading font-bold py-3 px-8 rounded-xl hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2 text-lg">
                  <span>Register Now</span>
                  <Icons.ArrowRight className="w-5 h-5" />
              </button>
              <Link to="/timeline" className="bg-primary-800/50 backdrop-blur-md border border-white/20 text-white font-heading font-bold py-3 px-8 rounded-xl hover:bg-primary-800/70 transition-all duration-300 flex items-center justify-center space-x-2 text-lg">
                  <Icons.Calendar className="w-5 h-5" />
                  <span>View Timeline</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
