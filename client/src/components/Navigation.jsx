import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Calendar, Trophy, Map, LogIn } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    // If we're not on home page, navigate there first
    if (location.pathname !== '/') {
      window.location.href = `/#${targetId}`;
      return;
    }
    
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const navLinks = [
    { to: '/', label: 'Home', icon: Home, hash: '#home' },
    { to: '/#timeline', label: 'Timeline', icon: Calendar, hash: '#timeline' },
    { to: '/leaderboard', label: 'Leaderboard', icon: Trophy },
    { to: '/map', label: 'Map', icon: Map },
    { to: '/login', label: 'Login', icon: LogIn },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav 
      id="main-navigation" 
      className="fixed top-0 w-full bg-gradient-to-b from-brown-dark to-brown-medium px-4 md:px-8 py-4 md:py-6 shadow-medieval-lg z-50 border-b-3 border-gold-medium"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link 
          to="/" 
          className="font-pirata text-2xl md:text-3xl text-gold-light tracking-widest hover:text-gold-medium transition-colors" 
          style={{ textShadow: '2px 2px 8px var(--shadow-hard)' }}
        >
          ⚜ Treasure Hunt ⚜
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 lg:gap-10 list-none">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.to}>
                {link.hash ? (
                  <a 
                    href={link.hash} 
                    className="nav-link flex items-center gap-2"
                    onClick={(e) => handleSmoothScroll(e, link.hash)}
                  >
                    <Icon size={18} />
                    {link.label}
                  </a>
                ) : (
                  <Link 
                    to={link.to} 
                    className="nav-link flex items-center gap-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon size={18} />
                    {link.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        {/* Mobile Hamburger Menu */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gold-light hover:text-gold-medium transition-colors p-2"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-4 pb-4">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.to}>
                {link.hash ? (
                  <a 
                    href={link.hash}
                    className="nav-link flex items-center gap-3 text-lg px-4 py-2"
                    onClick={(e) => handleSmoothScroll(e, link.hash)}
                  >
                    <Icon size={20} />
                    {link.label}
                  </a>
                ) : (
                  <Link 
                    to={link.to}
                    className="nav-link flex items-center gap-3 text-lg px-4 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon size={20} />
                    {link.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      <div 
        className="absolute bottom-0 left-0 w-full h-1"
        style={{ 
          background: 'linear-gradient(90deg, transparent, #ffd700, transparent)',
          bottom: '-3px'
        }}
      ></div>
    </nav>
  );
};

export default Navigation;
