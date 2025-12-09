import React from 'react';
import Icons from '../components/Icons';
import DecorativeLine from '../components/DecorativeLine';

const Leaderboard = () => {
  const topHunters = [
    { rank: 1, name: 'Sir Galahad', score: 9850, treasures: 47, level: 'Legend' },
    { rank: 2, name: 'Lady Morgana', score: 9420, treasures: 43, level: 'Legend' },
    { rank: 3, name: 'Lord Percival', score: 8990, treasures: 41, level: 'Master' },
    { rank: 4, name: 'Dame Isabella', score: 8650, treasures: 38, level: 'Master' },
    { rank: 5, name: 'Sir Lancelot', score: 8320, treasures: 36, level: 'Master' },
    { rank: 6, name: 'Lady Guinevere', score: 7890, treasures: 34, level: 'Expert' },
    { rank: 7, name: 'Lord Arthur', score: 7550, treasures: 32, level: 'Expert' },
    { rank: 8, name: 'Sir Tristan', score: 7210, treasures: 30, level: 'Expert' },
    { rank: 9, name: 'Lady Elaine', score: 6880, treasures: 28, level: 'Adventurer' },
    { rank: 10, name: 'Sir Gawain', score: 6550, treasures: 26, level: 'Adventurer' },
  ];

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1:
        return <Icons.Trophy className="text-yellow-500 w-8 h-8" />;
      case 2:
        return <Icons.Award className="text-gray-400 w-7 h-7" />;
      case 3:
        return <Icons.Award className="text-orange-700 w-7 h-7" />;
      default:
        return <Icons.Trophy className="text-treasure-bronze w-6 h-6 opacity-50" />;
    }
  };

  const getRankBadgeColor = (rank) => {
    switch (rank) {
      case 1:
        return 'bg-gradient-to-br from-yellow-300 to-yellow-500 shadow-gold';
      case 2:
        return 'bg-gradient-to-br from-gray-300 to-gray-400';
      case 3:
        return 'bg-gradient-to-br from-orange-400 to-orange-600';
      default:
        return 'bg-gray-200';
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-16 px-4 md:px-8 bg-page-light">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-40 left-20 w-96 h-96 bg-treasure-gold/5 rounded-full blur-3xl animate-pulse-gold"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-primary-100/50 rounded-full blur-3xl" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Icons.Trophy className="text-treasure-gold w-12 h-12" />
            <h1 className="text-5xl md:text-6xl font-black font-heading text-gray-900">Leaderboard</h1>
            <Icons.Trophy className="text-treasure-gold w-12 h-12" />
          </div>
          <DecorativeLine />
          <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
            The greatest treasure hunters of the realm. Will your name join the legends?
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { label: 'Total Hunters', value: '1,247', icon: Icons.Users, color: 'from-treasure-bronze to-red-900' },
            { label: 'Treasures Found', value: '3,891', icon: Icons.Star, color: 'from-treasure-gold to-yellow-600' },
            { label: 'Active Quests', value: '156', icon: Icons.Map, color: 'from-primary-600 to-blue-800' },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${stat.color} p-6 rounded-2xl shadow-lg text-center animate-slide-up text-white`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                   <Icon className="text-white w-6 h-6" />
                </div>
                <div className="text-3xl font-black mb-1 font-heading">
                  {stat.value}
                </div>
                <div className="text-white/80 font-bold uppercase tracking-wide text-sm">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Leaderboard Table */}
        <div className="paper-card rounded-3xl overflow-hidden animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {/* Table Header */}
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
            <div className="grid grid-cols-12 gap-4 text-gray-500 font-bold uppercase tracking-wider text-xs md:text-sm font-heading">
              <div className="col-span-2 md:col-span-1 text-center">Rank</div>
              <div className="col-span-6 md:col-span-4">Hunter</div>
              <div className="col-span-3 md:col-span-2 text-center hidden md:block">
                Level
              </div>
              <div className="col-span-3 md:col-span-2 text-center hidden sm:block">
                Treasures
              </div>
              <div className="col-span-4 sm:col-span-3 md:col-span-3 text-right md:text-center">Score</div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-100">
            {topHunters.map((hunter, index) => (
              <div
                key={hunter.rank}
                className={`px-6 py-4 hover:bg-gray-50 transition-all duration-300 group ${
                  hunter.rank <= 3 ? 'bg-gradient-to-r from-treasure-gold/5 to-transparent' : ''
                }`}
              >
                <div className="grid grid-cols-12 gap-4 items-center">
                  {/* Rank */}
                  <div className="col-span-2 md:col-span-1 flex justify-center">
                    <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full ${getRankBadgeColor(hunter.rank)} flex items-center justify-center text-white font-bold shadow-sm ring-2 ring-white`}>
                       <span className="text-sm md:text-base">{hunter.rank}</span>
                    </div>
                  </div>

                  {/* Hunter Name */}
                  <div className="col-span-6 md:col-span-4 flex items-center gap-3">
                    <div>
                      <div className="font-bold text-base md:text-lg text-gray-900 group-hover:text-treasure-bronze transition-colors font-heading">
                        {hunter.name}
                      </div>
                    </div>
                  </div>

                  {/* Level Badge */}
                  <div className="col-span-3 md:col-span-2 text-center hidden md:block">
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-bold border border-gray-200">
                      {hunter.level}
                    </span>
                  </div>

                  {/* Treasures */}
                  <div className="col-span-3 md:col-span-2 text-center hidden sm:block">
                    <div className="flex items-center justify-center gap-1 text-gray-600">
                      <Icons.Star className="w-4 h-4 text-treasure-gold" />
                      <span className="font-bold">
                        {hunter.treasures}
                      </span>
                    </div>
                  </div>

                  {/* Score */}
                  <div className="col-span-4 sm:col-span-3 md:col-span-3 text-right md:text-center">
                    <div className="text-lg md:text-xl font-black text-gray-900 group-hover:text-treasure-bronze transition-colors font-heading">
                      {hunter.score.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-xl text-gray-500 mb-6">
            Think you have what it takes to reach the top?
          </p>
          <button className="btn-primary flex items-center gap-2 mx-auto">
             <Icons.Users className="w-5 h-5" />
             <span>Join the Hunt</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
