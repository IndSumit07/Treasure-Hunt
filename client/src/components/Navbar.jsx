import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icons from './Icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Hide navbar on auth pages
  const hideNavbar = ['/login', '/signup'].includes(location.pathname);
  
  if (hideNavbar) return null;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', icon: <Icons.Ship className="w-4 h-4" /> },
    { name: 'Details', path: '/event-details', icon: <Icons.Info className="w-4 h-4" /> },
    { name: 'Timeline', path: '/timeline', icon: <Icons.Calendar className="w-4 h-4" /> },
    { name: 'Map', path: '/map', icon: <Icons.Map className="w-4 h-4" /> },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-2' : 'py-4'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className={`glass-panel px-6 py-4 transition-all duration-500 ${scrolled ? 'shadow-card' : ''}`}>
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-treasure-gold to-treasure-bronze flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 animate-shine bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                  <Icons.Compass className="w-7 h-7 text-white relative z-10" />
                </div>
                <div className="hidden sm:block">
                  <div className="font-heading font-black text-xl text-treasure-bronze">
                    Treasure Hunt
                  </div>
                  <div className="text-xs text-treasure-gold font-bold tracking-wider">Epic Coding Quest</div>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`nav-link px-5 py-2.5 rounded-xl flex items-center space-x-2 ${
                      isActive(link.path)
                        ? 'text-treasure-bronze bg-treasure-gold/10'
                        : ''
                    }`}
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </Link>
                ))}
              </div>

              {/* Right side buttons */}
              <div className="flex items-center space-x-3">
                <Link 
                  to="/login" 
                  className="hidden sm:inline-block px-5 py-2.5 rounded-xl font-heading font-bold text-gray-600 hover:text-treasure-bronze hover:bg-treasure-gold/10 transition-all duration-300"
                >
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className="hidden sm:inline-flex btn-primary items-center space-x-2 text-sm"
                >
                  <span>Register Now</span>
                  <Icons.ArrowRight className="w-4 h-4" />
                </Link>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="lg:hidden p-2.5 rounded-xl hover:bg-black/5 transition-all duration-300 text-gray-700"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {isOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-24 left-0 right-0 z-40 lg:hidden px-4 animate-slide-up">
          <div className="paper-card p-6 max-w-md mx-auto">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-5 py-3 rounded-xl font-heading font-bold transition-all duration-300 flex items-center space-x-3 ${
                    isActive(link.path)
                      ? 'bg-treasure-gold/10 text-treasure-bronze'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              ))}
              <div className="pt-3 border-t border-gray-100 space-y-3">
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="block px-5 py-3 rounded-xl font-heading font-bold text-gray-600 hover:bg-gray-50 transition-all duration-300 text-center"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={() => setIsOpen(false)}
                  className="w-full btn-primary flex justify-center items-center"
                >
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-stone-900/20 z-30 lg:hidden backdrop-blur-sm animate-fade-in"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
