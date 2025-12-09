import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { eventDetails } from '../data/mockData';
import Icons from '../components/Icons';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Icons.Code className="w-10 h-10" />,
      title: 'Epic Coding Challenges',
      description: 'Solve real-world problems and showcase your programming prowess',
      color: 'bg-primary-50 text-primary-600',
      border: 'border-primary-100'
    },
    {
      icon: <Icons.Trophy className="w-10 h-10" />,
      title: '₹1 Lakh Prize Pool',
      description: 'Compete for massive rewards and exclusive recognition',
      color: 'bg-treasure-gold/10 text-treasure-bronze',
      border: 'border-treasure-gold/20'
    },
    {
      icon: <Icons.Team className="w-10 h-10" />,
      title: 'Team Collaboration',
      description: 'Unite with 1-6 brilliant minds to conquer challenges together',
      color: 'bg-jungle-light/10 text-jungle-deep',
      border: 'border-jungle-light/20'
    },
    {
      icon: <Icons.Puzzle className="w-10 h-10" />,
      title: 'Full Stack Mastery',
      description: 'Frontend, backend, databases, APIs - master them all',
      color: 'bg-purple-50 text-purple-600',
      border: 'border-purple-100'
    }
  ];

  const stats = [
    { number: '₹1L+', label: 'Prize Money', icon: <Icons.Trophy className="w-6 h-6" /> },
    { number: '6', label: 'Checkpoints', icon: <Icons.Map className="w-6 h-6" /> },
    { number: '8', label: 'Hours', icon: <Icons.Clock className="w-6 h-6" /> },
    { number: '500+', label: 'Participants', icon: <Icons.Users className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-page-light">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-32 pb-16">
        
        {/* Decorative Background Elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-treasure-gold/5 rounded-full blur-3xl -z-10 animate-pulse-gold"></div>
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-primary-100/50 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
            
            {/* Badge */}
            <div className={`inline-flex items-center justify-center mb-8 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="bg-white border border-treasure-gold/30 px-6 py-2 rounded-full shadow-sm flex items-center gap-2">
                <Icons.Star className="w-4 h-4 text-treasure-gold" />
                <span className="font-heading font-bold text-gray-700 text-sm tracking-wide">March 15, 2024 • 10:00 AM - 6:00 PM</span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className={`text-6xl md:text-8xl font-black mb-6 font-heading text-gray-900 tracking-tight transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              The Great <span className="text-transparent bg-clip-text bg-gradient-to-r from-treasure-bronze via-treasure-gold to-treasure-bronze animate-shine bg-[length:200%_auto]">Treasure Hunt</span>
            </h1>
            
            <p className={`text-2xl md:text-3xl text-gray-600 mb-6 font-heading font-medium transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {eventDetails.subtitle}
            </p>
            
            <p className={`text-lg md:text-xl text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Embark on an epic 8-hour coding odyssey where technology meets adventure. Solve challenges, unlock treasures, and claim glory!
            </p>

            {/* Event Info Pills */}
            <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="bg-white px-6 py-3 rounded-xl border border-gray-100 shadow-sm flex items-center space-x-3 text-gray-700">
                <Icons.Location className="w-5 h-5 text-primary-600" />
                <span className="font-bold font-heading">{eventDetails.location}</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-xl border border-gray-100 shadow-sm flex items-center space-x-3 text-gray-700">
                <Icons.Users className="w-5 h-5 text-purple-600" />
                <span className="font-bold font-heading">1-6 Team Members</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-xl border border-gray-100 shadow-sm flex items-center space-x-3 text-gray-700">
                <Icons.Gift className="w-5 h-5 text-treasure-bronze" />
                <span className="font-bold font-heading">Amazing Prizes</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <Link to="/register" className="btn-primary flex items-center space-x-3 text-lg group">
                  <Icons.Anchor className="w-5 h-5" />
                  <span>Join the Hunt</span>
                  <Icons.ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/event-details" className="btn-secondary flex items-center space-x-3 text-lg">
                  <Icons.Info className="w-5 h-5" />
                  <span>Explore Details</span>
              </Link>
            </div>

            {/* Floating Graphics */}
            <div className={`relative inline-block transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
               <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white shadow-floating flex items-center justify-center animate-float-slow relative z-10 border-4 border-white">
                 <div className="absolute inset-0 rounded-full border border-gray-100"></div>
                 <Icons.Ship className="w-16 h-16 text-treasure-bronze" />
               </div>
               
               {/* Orbital elements */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 border border-dashed border-treasure-gold/30 rounded-full animate-spin-slow -z-10"></div>
               <div className="absolute top-0 right-0 animate-float-medium delay-700">
                  <div className="bg-white p-3 rounded-xl shadow-lg transform rotate-12">
                     <Icons.Code className="w-6 h-6 text-primary-500" />
                  </div>
               </div>
               <div className="absolute bottom-0 left-0 animate-float-fast delay-1000">
                  <div className="bg-white p-3 rounded-xl shadow-lg transform -rotate-12">
                     <Icons.Map className="w-6 h-6 text-emerald-500" />
                  </div>
               </div>
            </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 relative bg-page-dark/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-center group border border-gray-100"
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-primary-50 transition-colors duration-300">
                   <div className="text-gray-400 group-hover:text-primary-600 transition-colors duration-300">
                    {stat.icon}
                   </div>
                </div>
                <div className="text-4xl font-black mb-2 text-gray-900 font-heading">{stat.number}</div>
                <div className="text-sm font-bold text-gray-500 uppercase tracking-widest font-heading">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 font-heading text-gray-900">
              Why Join This Epic Quest?
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Experience the ultimate fusion of competition, learning, and adventure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="paper-card p-8 group hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-2xl ${feature.color} ${feature.border} border flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 font-heading group-hover:text-treasure-bronze transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-4 relative bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-black mb-6 font-heading text-gray-900">
              Your Journey Begins Here
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-0.5 bg-gray-100 -z-0"></div>

            {[
              { step: '01', title: 'Register Team', desc: 'Form your crew of 1-6 members', icon: <Icons.Users className="w-6 h-6" /> },
              { step: '02', title: 'Get Briefed', desc: 'Attend opening ceremony & map', icon: <Icons.Map className="w-6 h-6" /> },
              { step: '03', title: 'Solve Challenges', desc: 'Navigate checkpoints & code', icon: <Icons.Code className="w-6 h-6" /> },
              { step: '04', title: 'Claim Victory', desc: 'Complete challenges & win', icon: <Icons.Trophy className="w-6 h-6" /> }
            ].map((item, index) => (
              <div key={index} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-white border-4 border-gray-100 flex items-center justify-center mb-6 shadow-sm group-hover:border-treasure-gold transition-colors">
                    <span className="font-black text-gray-300">{item.step}</span>
                </div>
                
                <div className="bg-page-light p-6 rounded-2xl w-full hover:shadow-card transition-all duration-300 border border-gray-50">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-treasure-bronze/10 text-treasure-bronze flex items-center justify-center">
                        {item.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 font-heading text-gray-900">{item.title}</h3>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section className="py-24 px-4 relative bg-page-dark/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 font-heading text-gray-900">
               Treasure Awaits
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
            {[
              { place: '2nd Place', prize: '₹30,000', icon: '🥈', accent: 'border-slate-300 bg-slate-50', text: 'text-slate-600', height: '' },
              { place: '1st Place', prize: '₹50,000', icon: '🏆', accent: 'border-yellow-200 bg-yellow-50 shadow-gold', text: 'text-yellow-600', height: 'md:-mb-8 md:pb-16 z-10' },
              { place: '3rd Place', prize: '₹20,000', icon: '🥉', accent: 'border-orange-200 bg-orange-50', text: 'text-orange-700', height: '' }
            ].map((prize, index) => (
              <div key={index} className={`paper-card p-8 text-center border-2 ${prize.accent} ${prize.height} transform hover:scale-105 transition-all duration-300`}>
                <div className="text-6xl mb-6">{prize.icon}</div>
                <h3 className={`text-2xl font-bold mb-2 font-heading text-gray-900`}>{prize.place}</h3>
                <div className={`text-4xl font-black mb-4 font-heading ${prize.text}`}>
                  {prize.prize}
                </div>
                <p className="text-gray-500 font-medium">+ Trophy & Swag Kit</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
           <div className="bg-gradient-to-br from-treasure-bronze to-treasure-gold rounded-3xl p-12 md:p-16 shadow-2xl relative overflow-hidden">
             
             {/* Abstract Lines */}
             <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                 <svg width="100%" height="100%">
                     <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                         <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                     </pattern>
                     <rect width="100%" height="100%" fill="url(#grid)" />
                 </svg>
             </div>

             <h2 className="text-4xl md:text-5xl font-black mb-6 font-heading text-white relative z-10">
               Ready to Set Sail?
             </h2>
             <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto relative z-10">
               Assemble your crew of brilliant minds and embark on the coding adventure of a lifetime. Glory, prizes, and unforgettable memories await!
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
               <Link to="/register" className="bg-white text-treasure-bronze font-heading font-bold py-4 px-8 rounded-xl hover:bg-gray-50 hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2">
                   <Icons.Users className="w-5 h-5" />
                   <span>Register Your Team</span>
               </Link>
               <Link to="/timeline" className="bg-treasure-bronze/20 backdrop-blur-md border border-white/30 text-white font-heading font-bold py-4 px-8 rounded-xl hover:bg-treasure-bronze/30 transition-all duration-300 flex items-center justify-center space-x-2">
                   <Icons.Calendar className="w-5 h-5" />
                   <span>Event Schedule</span>
               </Link>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
