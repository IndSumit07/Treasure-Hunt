import React from 'react';

const FeatureCard = ({ icon, title, description, id }) => {
  return (
    <div className="feature-card" id={id}>
      <span className="feature-icon">{icon}</span>
      <h3 className="text-brown-dark mb-4 text-3xl">{title}</h3>
      <p className="text-ink-brown leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
