import React, { useEffect, useState } from 'react';

const SnakeBorder = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { width, height } = dimensions;
  const padding = 10;

  // Create path for the border
  const path = `
    M ${padding} ${padding}
    L ${width - padding} ${padding}
    L ${width - padding} ${height - padding}
    L ${padding} ${height - padding}
    Z
  `;

  return (
    <div className="snake-border">
      <svg width={width} height={height}>
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#b8941f', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#d4af37', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#f4d03f', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <path
          d={path}
          stroke="url(#goldGradient)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="20 10"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default SnakeBorder;
