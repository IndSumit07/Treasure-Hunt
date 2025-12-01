import React from 'react';

const Button = ({ children, onClick, href, className = '' }) => {
  const baseClasses = 'btn-medieval';
  
  if (href) {
    return (
      <a 
        href={href} 
        className={`${baseClasses} ${className}`}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }
  
  return (
    <button 
      className={`${baseClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
