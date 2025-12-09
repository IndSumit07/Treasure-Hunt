import React, { useState } from 'react';
import { mapLocations } from '../data/mockData';
import Icons from '../components/Icons';

const Map = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [zoom, setZoom] = useState(1);

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.2, 2));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.2, 0.6));
  };

  const getMarkerColor = (type) => {
    switch (type) {
      case 'start':
        return '#0284c7'; // Primary 600
      case 'checkpoint':
        return '#d4af37'; // Gold
      case 'finish':
        return '#b45309'; // Bronze
      default:
        return '#d4af37';
    }
  };

  const getMarkerIcon = (type) => {
    switch (type) {
      case 'start':
        return '🏴‍☠️';
      case 'checkpoint':
        return '⚓';
      case 'finish':
        return '💰';
      default:
        return '📍';
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-16 px-4 bg-page-light">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="bg-white border border-gray-200 px-4 py-1.5 rounded-full flex items-center gap-2 shadow-sm">
              <Icons.Map className="w-4 h-4 text-primary-500" />
              <span className="text-sm font-bold text-gray-600 font-heading">Interactive Map</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 font-heading">
            Treasure Map
          </h1>
          <p className="text-lg text-gray-500">
            Navigate through checkpoints to claim your treasure
          </p>
        </div>

        {/* Map Container */}
        <div className="paper-card rounded-3xl p-4 md:p-8 mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          {/* Zoom Controls */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-2">
              <span className="text-gray-700 font-bold font-heading">Zoom:</span>
              <button
                onClick={handleZoomOut}
                className="w-10 h-10 rounded-xl bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors flex items-center justify-center border border-gray-200"
              >
                <Icons.Minus className="w-5 h-5" />
              </button>
              <span className="text-gray-700 font-mono w-12 text-center">{Math.round(zoom * 100)}%</span>
              <button
                onClick={handleZoomIn}
                className="w-10 h-10 rounded-xl bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors flex items-center justify-center border border-gray-200"
              >
                <Icons.Plus className="w-5 h-5" />
              </button>
            </div>
            <div className="text-sm text-gray-500 font-semibold hidden sm:block">
              Click markers for details
            </div>
          </div>

          {/* Map SVG */}
          <div className="bg-page-dark/50 rounded-2xl p-4 overflow-hidden border border-gray-100">
            <div
              className="relative bg-white rounded-xl overflow-hidden shadow-inner border border-stone-200"
              style={{ height: '600px', backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')" }}
            >
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full transition-transform duration-300"
                style={{ transform: `scale(${zoom})`, transformOrigin: 'center' }}
              >
                {/* Grid Pattern */}
                <defs>
                  <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#grid)" />

                {/* Islands (decorative) */}
                <path d="M20,35 Q30,20 40,35 T60,35 T80,35" fill="none" stroke="#d4af37" strokeWidth="0.2" opacity="0.4" />
                <path d="M10,60 Q30,50 50,60 T90,60" fill="none" stroke="#d4af37" strokeWidth="0.2" opacity="0.4" />

                {/* Path connecting locations */}
                <path
                  d={`M ${mapLocations[0].coordinates.x} ${mapLocations[0].coordinates.y} 
                      ${mapLocations.map((loc) => `L ${loc.coordinates.x} ${loc.coordinates.y}`).join(' ')}`}
                  fill="none"
                  stroke="#b45309"
                  strokeWidth="0.5"
                  strokeDasharray="1,1"
                  opacity="0.4"
                />

                {/* Location Markers */}
                {mapLocations.map((location) => (
                  <g
                    key={location.id}
                    transform={`translate(${location.coordinates.x}, ${location.coordinates.y})`}
                    onClick={() => setSelectedLocation(location)}
                    className="cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    {/* Marker circle */}
                    <circle
                      r="3"
                      fill={getMarkerColor(location.type)}
                      stroke="white"
                      strokeWidth="0.5"
                      className="shadow-sm"
                    />
                    
                    {/* Pulse animation for selected */}
                    {selectedLocation?.id === location.id && (
                      <circle
                        r="3"
                        fill="none"
                        stroke={getMarkerColor(location.type)}
                        strokeWidth="0.3"
                        opacity="0.6"
                      >
                        <animate
                          attributeName="r"
                          from="3"
                          to="6"
                          dur="1.5s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          from="0.6"
                          to="0"
                          dur="1.5s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    )}
                    {/* Label */}
                    <text
                      y="-4"
                      textAnchor="middle"
                      fontSize="2.5"
                      fill="white"
                      fontWeight="bold"
                      className="pointer-events-none drop-shadow-md"
                    >
                      {getMarkerIcon(location.type)}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
          </div>
        </div>

        {/* Location Details */}
        {selectedLocation && (
          <div className="paper-card rounded-3xl p-6 md:p-8 animate-slide-up">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="text-4xl">{getMarkerIcon(selectedLocation.type)}</div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 font-heading">
                    {selectedLocation.name}
                  </h2>
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-bold font-heading text-white mt-1 uppercase tracking-wider"
                    style={{ backgroundColor: getMarkerColor(selectedLocation.type) }}
                  >
                    {selectedLocation.type}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedLocation(null)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <Icons.X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-gray-900 mb-2 font-heading">Description</h3>
                <p className="text-gray-600 leading-relaxed">{selectedLocation.description}</p>
              </div>

              {selectedLocation.hint && (
                <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200">
                  <h3 className="font-bold text-yellow-800 mb-2 flex items-center font-heading">
                    <Icons.Info className="w-5 h-5 mr-2" />
                    Hint
                  </h3>
                  <p className="text-yellow-800 italic">{selectedLocation.hint}</p>
                </div>
              )}

              {selectedLocation.challenge && (
                <div className="bg-treasure-gold/10 rounded-xl p-4 border border-treasure-gold/30">
                  <h3 className="font-bold text-treasure-bronze mb-2 flex items-center font-heading">
                    <Icons.Code className="w-5 h-5 mr-2" />
                    Challenge
                  </h3>
                  <p className="text-gray-800 font-medium">{selectedLocation.challenge}</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Legend */}
        <div className="mt-8 paper-card rounded-2xl p-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <h3 className="font-bold text-gray-900 mb-4 text-center font-heading">Map Legend</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="text-2xl">🏴‍☠️</div>
              <div>
                <div className="font-bold text-gray-900 font-heading">Start Point</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">Registration Deck</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="text-2xl">⚓</div>
              <div>
                <div className="font-bold text-gray-900 font-heading">Checkpoints</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">Challenge Locations</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="text-2xl">💰</div>
              <div>
                <div className="font-bold text-gray-900 font-heading">Treasure</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">Final Destination</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
