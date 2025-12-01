import React, { useEffect } from 'react';
import Button from '../components/Button';
import DecorativeLine from '../components/DecorativeLine';
import FeatureCard from '../components/FeatureCard';
import Timeline from '../components/Timeline';

const HomePage = () => {
  useEffect(() => {
    // Create floating particles
    const hero = document.querySelector('.hero');
    if (hero) {
      const particleCount = 30;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
        hero.appendChild(particle);
      }
    }

    // Scroll animation for feature cards
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '0';
          entry.target.style.transform = 'translateY(30px)';
          
          setTimeout(() => {
            entry.target.style.transition = 'all 0.6s ease-out';
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, 100);
          
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.feature-card').forEach(card => {
      observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const features = [
    {
      id: 'ancient-maps-card',
      icon: '🗺️',
      title: 'Ancient Maps',
      description: 'Decipher cryptic maps passed down through generations. Each parchment holds secrets to forgotten treasures buried deep within mysterious lands.'
    },
    {
      id: 'hidden-treasures-card',
      icon: '💎',
      title: 'Hidden Treasures',
      description: 'Discover chests filled with gold, jewels, and ancient artifacts. Every treasure tells a story of brave adventurers who came before you.'
    },
    {
      id: 'riddles-puzzles-card',
      icon: '📜',
      title: 'Riddles & Puzzles',
      description: 'Test your wit against ancient riddles and cunning puzzles. Only the sharpest minds will unlock the path to legendary riches.'
    },
    {
      id: 'epic-quests-card',
      icon: '⚔️',
      title: 'Epic Quests',
      description: 'Undertake perilous journeys across enchanted forests, haunted castles, and forgotten dungeons in search of ultimate glory.'
    },
    {
      id: 'legendary-rewards-card',
      icon: '👑',
      title: 'Legendary Rewards',
      description: 'Claim your place among the greatest treasure hunters. Fame, fortune, and eternal glory await those brave enough to succeed.'
    },
    {
      id: 'fellowship-card',
      icon: '🛡️',
      title: 'Fellowship',
      description: 'Join forces with fellow adventurers or compete for supremacy. Form alliances, share discoveries, and write your legend together.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section 
        className="hero min-h-screen flex items-center justify-center text-center px-8 pt-32 pb-16 relative"
        id="home"
        style={{
          background: `
            radial-gradient(ellipse at center, rgba(212, 175, 55, 0.1) 0%, transparent 70%),
            url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y="50" font-size="80" opacity="0.03">🗺️</text></svg>') center/400px repeat
          `
        }}
      >
        <div 
          className="absolute inset-0 pointer-events-none animate-torch-glow"
          style={{
            background: 'radial-gradient(circle at 30% 40%, var(--glow-torch) 0%, transparent 50%)'
          }}
        ></div>
        
        <div className="max-w-4xl relative z-10">
          <h1 className="text-7xl md:text-8xl lg:text-9xl text-brown-dark mb-6 animate-fade-in-down text-shadow-gold">
            The Great Treasure Hunt
          </h1>
          <DecorativeLine />
          <p className="font-medievalSharp text-2xl md:text-3xl text-burgundy mb-10 animate-fade-in">
            Embark on a legendary quest to uncover ancient treasures hidden across the realm
          </p>
          <Button href="#join" id="start-quest-btn">
            Begin Your Quest
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section 
        className="py-24 px-8 relative z-10"
        id="features"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(212, 175, 55, 0.05) 50%, transparent 100%)'
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2>Your Adventure Awaits</h2>
            <DecorativeLine />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
            {features.map((feature) => (
              <FeatureCard
                key={feature.id}
                id={feature.id}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <Timeline />

      {/* Story Section */}
      <section 
        className="py-24 px-8 relative"
        id="story"
        style={{
          background: 'linear-gradient(135deg, rgba(107, 31, 31, 0.05) 0%, transparent 50%, rgba(212, 175, 55, 0.05) 100%)'
        }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <div className="story-content">
            <h2>The Legend Unfolds</h2>
            <DecorativeLine />
            <p className="text-lg leading-relaxed">
              In ages past, when dragons soared the skies and magic flowed through the land, a great king amassed treasures beyond imagination. Before his final days, he scattered his fortune across the realm, hiding each piece with cunning riddles and enchanted locks.
            </p>
            <p className="text-lg leading-relaxed">
              Centuries have passed, and many have sought the king's treasure. Some found glory, others found only mystery. Now, the ancient maps have resurfaced, and a new generation of treasure hunters rises to claim what was lost to time.
            </p>
            <p className="text-lg leading-relaxed">
              Will you be the one to solve the final riddle? Will your name be etched in the annals of history alongside the greatest adventurers? The quest begins now, brave soul. Your destiny awaits.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-32 px-8 text-center relative"
        id="join"
        style={{
          background: `
            radial-gradient(ellipse at center, rgba(212, 175, 55, 0.15) 0%, transparent 70%),
            linear-gradient(180deg, transparent 0%, rgba(58, 38, 24, 0.03) 100%)
          `
        }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl mb-8">Your Journey Begins Today</h2>
          <DecorativeLine />
          <p className="text-xl mb-10">
            The treasures of old call to those with courage in their hearts. Will you answer the call? Join thousands of adventurers in the greatest treasure hunt the realm has ever known.
          </p>
          <Button id="join-quest-btn">
            Join the Hunt
          </Button>
        </div>
      </section>
    </>
  );
};

export default HomePage;

