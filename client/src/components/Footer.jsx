import React from 'react';

const Footer = () => {
  return (
    <footer 
      id="main-footer" 
      className="bg-gradient-to-b from-brown-medium to-brown-dark text-parchment-light py-12 text-center border-t-3 border-gold-medium relative"
    >
      <div 
        className="absolute top-0 left-0 w-full h-1"
        style={{ 
          background: 'linear-gradient(90deg, transparent, #ffd700, transparent)',
          top: '-3px'
        }}
      ></div>
      <p className="text-parchment-light font-medievalSharp text-xl mb-2">⚜ Medieval Treasure Hunt ⚜</p>
      <p className="text-parchment-medium font-medievalSharp mb-4">Where Legends Are Born and Fortunes Are Found</p>
      <p className="text-parchment-medium font-medievalSharp opacity-70 mt-4">
        &copy; 2025 The Great Treasure Hunt. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
