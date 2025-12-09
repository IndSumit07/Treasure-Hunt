import React, { useEffect, useRef, useState } from "react";
import {
  Calendar,
  Clock,
  Users,
  Coins,
  Crown,
  Sparkles,
  Zap,
  Star,
} from "lucide-react";
import DecorativeLine from "./DecorativeLine";

const Timeline = () => {
  const [isVisible, setIsVisible] = useState(false);
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-reveal");
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = timelineRef.current?.querySelectorAll(".timeline-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const pricingTiers = [
    {
      name: "Single Player",
      price: "₹49",
      icon: Users,
      features: [
        "Individual treasure hunt access",
        "All riddles & puzzles",
        "Personal leaderboard ranking",
        "Digital achievement certificate",
        "Solo quest rewards",
        "Community forum access",
      ],
      color: "from-gold-dark to-gold-medium",
      glow: "shadow-gold-glow animate-pulse-glow",
    },
    {
      name: "Team Adventure",
      price: "₹149",
      priceNote: "for 4 members",
      icon: Crown,
      popular: true,
      features: [
        "All Single Player features",
        "Team of up to 4 members",
        "Collaborative challenges",
        "Team leaderboard ranking",
        "Exclusive team rewards",
        "Priority support",
        "Team achievement badges",
      ],
      color: "from-burgundy to-red-900",
      glow: "shadow-gold-glow animate-pulse-glow",
    },
  ];

  const eventPhases = [
    {
      phase: "Start: Football Ground",
      date: "January 15, 2026",
      time: "9:00 AM",
      icon: Users,
      description: "Gather for briefing and team allocation",
    },
    {
      phase: "CP 1: KC Ground",
      date: "January 15, 2026",
      time: "10:30 AM",
      icon: Map,
      description: "Physical & Logic challenges await",
    },
    {
      phase: "CP 2: AB 10",
      date: "January 15, 2026",
      time: "12:00 PM",
      icon: Zap,
      description: "Debug the broken code snippets",
    },
    {
      phase: "CP 3: CSED",
      date: "January 15, 2026",
      time: "2:00 PM",
      icon: Crown,
      description: "Algorithm optimization tasks",
    },
    {
      phase: "CP 4: AB 1",
      date: "January 15, 2026",
      time: "3:30 PM",
      icon: Star,
      description: "System design & architecture",
    },
    {
      phase: "Finale: Chai Ki Tapri",
      date: "January 15, 2026",
      time: "5:00 PM",
      icon: Sparkles,
      description: "Celebration & Prize Distribution",
    },
  ];

  return (
    <section
      id="timeline"
      className="py-24 px-4 md:px-8 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, rgba(107, 31, 31, 0.05) 0%, transparent 50%, rgba(139, 92, 246, 0.05) 100%)",
      }}
    >
      {/* Mystical Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-22 left-10 w-32 h-32 bg-mystical-purple rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-40 h-40 bg-gold-medium rounded-full opacity-10 blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10" ref={timelineRef}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl mb-6 animate-fade-in-down">
            Event Timeline & Pricing
          </h2>
          <DecorativeLine />
          <p className="text-xl text-ink-brown mt-6 max-w-3xl mx-auto">
            Join the greatest treasure hunt of the realm. Choose your path and
            embark on an unforgettable adventure.
          </p>
        </div>

        {/* Event Phases Timeline */}
        <div className="mb-20">
          <h3 className="text-4xl text-center mb-12 text-brown-dark">
            Quest Timeline
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventPhases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <div
                  key={index}
                  className="timeline-card bg-gradient-to-br from-parchment-light to-parchment-medium p-6 rounded-lg border-2 border-gold-dark relative group hover:scale-105 transition-all duration-300 animate-fade-in-up flex flex-col items-center z-10 !overflow-visible"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-shimmer-gradient bg-[length:200%_100%] opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity rounded-lg pointer-events-none"></div>

                  {/* Connecting Lines */}
                  {index < eventPhases.length - 1 && (
                    <>
                      {/* Desktop Horizontal Line */}
                      <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-1 bg-gray-400 z-20 transform -translate-y-1/2">
                        <div 
                          className={`h-full bg-gradient-to-r from-treasure-gold to-treasure-bronze shadow-[0_0_10px_rgba(212,175,55,0.8)] transition-all duration-1000 ease-out`}
                          style={{ 
                            width: isVisible ? '100%' : '0%',
                            transitionDelay: `${(index * 0.2) + 0.5}s`
                          }}
                        />
                      </div>

                      {/* Mobile Vertical Line */}
                      <div className="lg:hidden absolute -bottom-6 left-1/2 w-1 h-12 bg-gray-400 z-20 transform -translate-x-1/2">
                         <div 
                          className={`w-full bg-gradient-to-b from-treasure-gold to-treasure-bronze shadow-[0_0_10px_rgba(212,175,55,0.8)] transition-all duration-1000 ease-out`}
                          style={{ 
                            height: isVisible ? '100%' : '0%',
                            transitionDelay: `${(index * 0.2) + 0.5}s`
                          }}
                        />
                      </div>
                    </>
                  )}

                  <div className="relative z-10 flex flex-col items-center w-full">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gold-medium to-gold-dark rounded-full mb-4 shadow-gold-glow">
                      <Icon className="text-parchment-light" size={28} />
                    </div>
                    <h4 className="text-xl font-medieval text-brown-dark text-center mb-2">
                      {phase.phase}
                    </h4>
                    <div className="flex items-center justify-center gap-2 text-burgundy mb-1">
                      <Calendar size={16} />
                      <span className="font-cinzel text-sm">{phase.date}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-burgundy mb-3">
                      <Clock size={16} />
                      <span className="font-cinzel text-sm">{phase.time}</span>
                    </div>
                    <p className="text-center text-ink-brown text-sm">
                      {phase.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pricing Tiers */}
        <div>
          <h3 className="text-4xl text-center mb-12 text-brown-dark">
            Choose Your Adventure
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Changed from md:grid-cols-3 to md:grid-cols-2 */}
            {pricingTiers.map((tier, index) => {
              const Icon = tier.icon;
              return (
                <div
                  key={index}
                  className={`timeline-card relative bg-gradient-to-br ${tier.color} p-8 rounded-xl border-3 border-gold-medium overflow-hidden group hover:-translate-y-3 transition-all duration-500 ${tier.glow} animate-fade-in-up`}
                  style={{ animationDelay: `${(index + 4) * 0.1}s` }}
                >
                  {/* Popular Badge */}
                  {tier.popular && (
                    <div className="absolute top-4 right-4 bg-burgundy text-parchment-light px-3 py-1 rounded-full text-xs font-medievalSharp animate-pulse">
                      MOST POPULAR
                    </div>
                  )}

                  {/* Sparkle Effects */}
                  <div className="absolute top-10 left-10 w-2 h-2 bg-gold-light rounded-full animate-sparkle"></div>
                  <div
                    className="absolute bottom-20 right-10 w-2 h-2 bg-gold-light rounded-full animate-sparkle"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                  <div
                    className="absolute top-1/2 right-20 w-2 h-2 bg-gold-light rounded-full animate-sparkle"
                    style={{ animationDelay: "1s" }}
                  ></div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="flex items-center justify-center w-20 h-20 bg-parchment-light rounded-full mb-6 mx-auto shadow-medieval">
                      <Icon className="text-brown-dark" size={36} />
                    </div>

                    {/* Tier Name */}
                    <h4
                      className={`text-3xl font-medieval text-center mb-4 ${
                        tier.color.includes("burgundy")
                          ? "text-white"
                          : "text-parchment-light"
                      }`}
                    >
                      {tier.name}
                    </h4>

                    {/* Price */}
                    <div className="text-center mb-6">
                      <span
                        className={`text-5xl font-bold ${
                          tier.color.includes("burgundy")
                            ? "text-white"
                            : "text-parchment-light"
                        }`}
                      >
                        {tier.price}
                      </span>
                      {tier.priceNote && (
                        <div
                          className={`text-sm mt-1 ${
                            tier.color.includes("burgundy")
                              ? "text-gray-200"
                              : "text-parchment-medium"
                          }`}
                        >
                          {tier.priceNote}
                        </div>
                      )}
                    </div>

                    <DecorativeLine className="mb-6" />

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className={`flex items-start gap-2 ${
                            tier.color.includes("burgundy")
                              ? "text-white"
                              : "text-parchment-light"
                          }`}
                        >
                          <Coins
                            className="flex-shrink-0 mt-1 text-gold-light"
                            size={16}
                          />
                          <span className="text-sm font-cinzel">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <button className="w-full btn-medieval bg-parchment-light text-brown-dark border-brown-dark hover:bg-parchment-medium">
                      Choose {tier.name}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-ink-brown mb-6">
            Not sure which plan is right for you? Start solo and upgrade to team
            anytime!
          </p>
          <button className="btn-medieval">Compare All Features</button>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
