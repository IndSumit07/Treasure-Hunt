import React from 'react';
import { Link } from 'react-router-dom';
import Icons from '../components/Icons';

const Dashboard = () => {
  // Mock user data
  const userData = {
    teamName: 'The Black Pearl Crew',
    teamSize: 4,
    members: [
      { name: 'Captain Jack', email: 'jack@treasurehunt.com', status: 'confirmed' },
      { name: 'Will Turner', email: 'will@treasurehunt.com', status: 'confirmed' },
      { name: 'Elizabeth Swann', email: 'elizabeth@treasurehunt.com', status: 'pending' },
      { name: 'Hector Barbossa', email: 'hector@treasurehunt.com', status: 'confirmed' }
    ],
    paymentStatus: 'completed',
    amountPaid: 1000,
    registrationDate: 'March 1, 2024',
    eventDate: 'March 15, 2024'
  };

  return (
    <div className="min-h-screen pt-32 pb-16 px-4 bg-page-light">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 font-heading">
            Ahoy, Captain! ⚓
          </h1>
          <p className="text-lg text-gray-600">
            Welcome to your treasure hunt dashboard
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="paper-card rounded-2xl p-6 animate-float-slow">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">
                <Icons.Users className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-bold uppercase tracking-wide">Team Size</p>
                <p className="text-2xl font-black text-gray-900 font-heading">{userData.teamSize}</p>
              </div>
            </div>
          </div>

          <div className="paper-card rounded-2xl p-6 animate-float-medium">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <Icons.CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-bold uppercase tracking-wide">Payment Status</p>
                <p className="text-2xl font-black text-emerald-600 capitalize font-heading">
                  {userData.paymentStatus}
                </p>
              </div>
            </div>
          </div>

          <div className="paper-card rounded-2xl p-6 animate-float-fast">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-treasure-gold/20 text-treasure-honey flex items-center justify-center">
                <Icons.Trophy className="w-6 h-6 text-treasure-gold" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-bold uppercase tracking-wide">Amount Paid</p>
                <p className="text-2xl font-black text-treasure-bronze font-heading">₹{userData.amountPaid}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Information */}
        <div className="paper-card rounded-3xl p-8 mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
            <h2 className="text-2xl font-bold text-gray-900 font-heading">Team Information</h2>
            <div className="px-4 py-2 bg-gradient-to-r from-treasure-gold/20 to-treasure-bronze/10 rounded-full border border-treasure-gold/20">
              <span className="font-bold text-treasure-bronze font-heading">{userData.teamName}</span>
            </div>
          </div>

          <div className="space-y-4">
            {userData.members.map((member, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors border border-gray-100"
              >
                <div className="flex items-center space-x-4 mb-3 sm:mb-0">
                  <div className="w-10 h-10 rounded-full bg-white text-gray-500 flex items-center justify-center font-bold shadow-sm border border-gray-200">
                    {member.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 font-heading">{member.name}</p>
                    <p className="text-sm text-gray-500">{member.email}</p>
                  </div>
                </div>
                <div>
                  {member.status === 'confirmed' ? (
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-wide border border-emerald-200">
                      Confirmed
                    </span>
                  ) : (
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-bold uppercase tracking-wide border border-amber-200">
                      Pending
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* QR Code & Event Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* QR Code */}
          <div className="paper-card rounded-3xl p-8 text-center flex flex-col items-center justify-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading">Event Pass</h3>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-200 mb-6 w-56 h-56 flex items-center justify-center">
              {/* Mock QR Code */}
              <div className="w-full h-full bg-gray-900 opacity-90 rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 border-4 border-white border-dashed opacity-20"></div>
                <Icons.QrCode className="w-32 h-32 text-white" />
              </div>
            </div>
            <p className="text-sm text-gray-500 mb-6">
              Show this QR code at the event entrance
            </p>
            <button className="btn-secondary w-full sm:w-auto">
              Download Pass
            </button>
          </div>

          {/* Event Details */}
          <div className="paper-card rounded-3xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 font-heading">Event Details</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0 text-orange-600">
                    <Icons.Calendar className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-bold uppercase">Event Date</p>
                  <p className="text-lg font-bold text-gray-900">{userData.eventDate}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0 text-blue-600">
                    <Icons.Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-bold uppercase">Time</p>
                  <p className="text-lg font-bold text-gray-900">10:00 AM - 6:00 PM</p>
                </div>
              </div>

               <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600">
                    <Icons.Location className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-bold uppercase">Location</p>
                  <p className="text-lg font-bold text-gray-900">Tech Campus, Building A</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0 text-purple-600">
                    <Icons.CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-bold uppercase">Registration Date</p>
                  <p className="text-lg font-bold text-gray-900">{userData.registrationDate}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link to="/timeline" className="btn-primary flex-1 flex justify-center items-center gap-2">
            <Icons.Calendar className="w-5 h-5" />
            <span>View Timeline</span>
          </Link>
          <Link to="/map" className="btn-secondary flex-1 flex justify-center items-center gap-2">
            <Icons.Map className="w-5 h-5" />
            <span>View Map</span>
          </Link>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-8 rounded-xl transition-all duration-300 flex-1 flex justify-center items-center gap-2">
            <Icons.Help className="w-5 h-5" />
            <span>Contact Support</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
