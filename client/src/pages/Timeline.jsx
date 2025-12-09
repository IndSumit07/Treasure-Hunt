import React, { useState } from 'react';
import { timeline } from '../data/mockData';
import Icons from '../components/Icons';
import { Link } from 'react-router-dom';

const Timeline = () => {
  const [expandedId, setExpandedId] = useState(null);

  const getIcon = (iconType) => {
    switch (iconType) {
      case 'scroll':
        return <Icons.Map className="w-8 h-8" />;
      case 'compass':
        return <Icons.Compass className="w-8 h-8" />;
      case 'map':
        return <Icons.Location className="w-8 h-8" />;
      default:
        return <Icons.Star className="w-8 h-8" />;
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-16 px-4 bg-page-light">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
           <div className="inline-flex items-center justify-center mb-6">
            <div className="bg-white border border-gray-200 px-4 py-1.5 rounded-full flex items-center gap-2 shadow-sm">
              <Icons.Calendar className="w-4 h-4 text-primary-500" />
              <span className="text-sm font-bold text-gray-600 font-heading">Event Schedule</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 font-heading">
            Journey Timeline
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Your step-by-step guide through the treasure hunt adventure
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-treasure-gold via-treasure-bronze to-treasure-gold/20 transform md:-translate-x-1/2 rounded-full opacity-30"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={item.id}
                className={`relative animate-slide-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Desktop Layout Alternating */}
                <div className={`flex flex-col md:flex-row items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    
                    {/* Spacer for other side */}
                    <div className="hidden md:block w-1/2"></div>
                    
                    {/* Timeline Dot */}
                    <div className="absolute left-8 md:left-1/2 w-16 h-16 rounded-2xl bg-white border-4 border-gray-100 shadow-lg flex items-center justify-center text-treasure-bronze transform -translate-x-1/2 z-10 transition-transform duration-300 hover:scale-110">
                        {getIcon(item.icon)}
                    </div>

                    {/* Content Card */}
                    <div className={`w-full md:w-1/2 pl-24 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                        <div
                            className={`paper-card relative p-6 cursor-pointer group hover:bg-gray-50 transition-all duration-300 ${expandedId === item.id ? 'ring-2 ring-treasure-gold/30' : ''}`}
                            onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                        >
                            {/* Direction Arrow for Desktop */}
                            <div className={`hidden md:block absolute top-6 w-4 h-4 bg-white border-t border-r border-gray-200 transform rotate-45 ${index % 2 === 0 ? '-right-2' : '-left-2 border-r-0 border-t-0 border-b border-l'}`}></div>

                            {/* Time Badge */}
                            <div className="inline-block bg-primary-50 text-primary-700 px-3 py-1 rounded-full font-bold text-xs uppercase tracking-wider mb-3 border border-primary-100 font-heading">
                            {item.time}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-gray-900 mb-2 font-heading">
                            {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-500 mb-3 text-sm">{item.description}</p>

                            {/* Expand/Collapse Indicator */}
                            <div className="flex items-center justify-between mt-4">
                            <span className="text-xs font-bold text-treasure-bronze uppercase tracking-wide group-hover:underline">
                                {expandedId === item.id ? 'Collapse Details' : 'View Details'}
                            </span>
                            <Icons.ChevronDown
                                className={`w-4 h-4 text-treasure-gold transition-transform duration-300 ${
                                expandedId === item.id ? 'rotate-180' : ''
                                }`}
                            />
                            </div>

                            {/* Expanded Details */}
                            {expandedId === item.id && (
                            <div className="mt-4 pt-4 border-t border-gray-100 animate-fade-in">
                                <p className="text-gray-600 leading-relaxed text-sm">
                                {item.details}
                                </p>
                            </div>
                            )}
                        </div>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center animate-slide-up">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 md:p-12 shadow-2xl relative overflow-hidden">
             {/* Abstract Pattern */}
             <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
             
             <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-4 font-heading">
                Ready to Start Your Adventure?
                </h2>
                <p className="text-gray-300 mb-8 max-w-lg mx-auto">
                Mark your calendar and prepare for an unforgettable journey into the code!
                </p>
                <Link to="/register" className="bg-white text-gray-900 font-heading font-bold py-3 px-8 rounded-xl hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2 text-lg mx-auto">
                    <span>Register Now</span>
                    <Icons.ArrowRight className="w-5 h-5" />
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
