import React from 'react';
import { Trophy, Medal, Crown, Sword, Star, TrendingUp } from 'lucide-react';
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
        return <Crown className="text-gold-light" size={32} />;
      case 2:
        return <Medal className="text-gray-400" size={28} />;
      case 3:
        return <Medal className="text-amber-700" size={28} />;
      default:
        return <Trophy className="text-brown-medium" size={24} />;
    }
  };

  const getRankBadgeColor = (rank) => {
    switch (rank) {
      case 1:
        return 'bg-gradient-to-br from-gold-medium to-gold-light shadow-gold-glow animate-pulse-glow';
      case 2:
        return 'bg-gradient-to-br from-gray-300 to-gray-400 shadow-medieval';
      case 3:
        return 'bg-gradient-to-br from-amber-600 to-amber-800 shadow-medieval';
      default:
        return 'bg-gradient-to-br from-brown-medium to-brown-light shadow-medieval';
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-16 px-4 md:px-8">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-40 left-20 w-40 h-40 bg-gold-medium rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-mystical-purple rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-down">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Trophy className="text-gold-medium" size={48} />
            <h1 className="text-5xl md:text-6xl">Leaderboard</h1>
            <Trophy className="text-gold-medium" size={48} />
          </div>
          <DecorativeLine />
          <p className="text-xl text-ink-brown mt-6 max-w-2xl mx-auto">
            The greatest treasure hunters of the realm. Will your name join the legends?
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { label: 'Total Hunters', value: '1,247', icon: Sword, color: 'from-burgundy to-red-800' },
            { label: 'Treasures Found', value: '3,891', icon: Star, color: 'from-gold-dark to-gold-medium' },
            { label: 'Active Quests', value: '156', icon: TrendingUp, color: 'from-brown-dark to-brown-medium' },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${stat.color} p-6 rounded-lg shadow-medieval-lg text-center animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon className="text-parchment-light mx-auto mb-3" size={32} />
                <div className="text-3xl font-bold text-parchment-light mb-1">
                  {stat.value}
                </div>
                <div className="text-parchment-medium font-cinzel">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Leaderboard Table */}
        <div className="bg-gradient-to-br from-parchment-light to-parchment-medium rounded-xl border-3 border-gold-medium shadow-medieval-lg overflow-hidden">
          {/* Table Header */}
          <div className="bg-gradient-to-r from-brown-dark to-brown-medium px-6 py-4 border-b-3 border-gold-medium">
            <div className="grid grid-cols-12 gap-4 text-parchment-light font-medievalSharp text-sm md:text-base">
              <div className="col-span-1 text-center">Rank</div>
              <div className="col-span-5 md:col-span-4">Hunter</div>
              <div className="col-span-3 md:col-span-2 text-center hidden md:block">
                Level
              </div>
              <div className="col-span-3 md:col-span-2 text-center">
                Treasures
              </div>
              <div className="col-span-3 md:col-span-3 text-center">Score</div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y-2 divide-gold-dark/30">
            {topHunters.map((hunter, index) => (
              <div
                key={hunter.rank}
                className={`px-6 py-4 hover:bg-parchment-dark transition-all duration-300 group animate-slide-in-left ${
                  hunter.rank <= 3 ? 'bg-gradient-to-r from-gold-medium/10 to-transparent' : ''
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="grid grid-cols-12 gap-4 items-center">
                  {/* Rank */}
                  <div className="col-span-1 flex justify-center">
                    <div className={`w-12 h-12 rounded-full ${getRankBadgeColor(hunter.rank)} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      {getRankIcon(hunter.rank)}
                    </div>
                  </div>

                  {/* Hunter Name */}
                  <div className="col-span-5 md:col-span-4 flex items-center gap-3">
                    <div>
                      <div className="font-medieval text-lg text-brown-dark group-hover:text-gold-dark transition-colors">
                        {hunter.name}
                      </div>
                    </div>
                  </div>

                  {/* Level Badge */}
                  <div className="col-span-3 md:col-span-2 text-center hidden md:block">
                    <span className="inline-block px-3 py-1 bg-burgundy text-parchment-light rounded-full text-xs font-medievalSharp">
                      {hunter.level}
                    </span>
                  </div>

                  {/* Treasures */}
                  <div className="col-span-3 md:col-span-2 text-center">
                    <div className="flex items-center justify-center gap-1">
                      <Star className="text-gold-medium" size={16} />
                      <span className="font-cinzel font-bold text-brown-dark">
                        {hunter.treasures}
                      </span>
                    </div>
                  </div>

                  {/* Score */}
                  <div className="col-span-3 md:col-span-3 text-center">
                    <div className="text-xl font-bold text-brown-dark group-hover:text-gold-dark transition-colors">
                      {hunter.score.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-ink-brown mb-6">
            Think you have what it takes to reach the top?
          </p>
          <button className="btn-medieval">Join the Hunt</button>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
