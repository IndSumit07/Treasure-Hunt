import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle, useMap } from 'react-leaflet';
import { Compass, Building2, Navigation, MapPin, Sparkles, Lock, CheckCircle } from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import DecorativeLine from '../components/DecorativeLine';

// Fix for default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom marker for user location
const userLocationIcon = L.divIcon({
  className: 'user-location-marker',
  html: `<div style="background: #3b82f6; width: 20px; height: 20px; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 10px rgba(59, 130, 246, 0.8);"></div>`,
  iconSize: [20, 20],
  iconAnchor: [10, 10],
});

// Custom markers for treasure locations
const createTreasureIcon = (status, icon) => {
  const colors = {
    available: '#d4af37',
    completed: '#22c55e',
    locked: '#9ca3af'
  };
  
  return L.divIcon({
    className: 'treasure-marker',
    html: `<div style="background: ${colors[status]}; width: 35px; height: 35px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 3px solid #fff; box-shadow: 0 4px 10px rgba(0,0,0,0.3); font-size: 18px;">${icon}</div>`,
    iconSize: [35, 35],
    iconAnchor: [17.5, 17.5],
  });
};

// Component to recenter map on user location
function LocationMarker({ position }) {
  const map = useMap();
  
  useEffect(() => {
    if (position) {
      map.flyTo(position, 17, { duration: 1 });
    }
  }, [position, map]);

  return position ? (
    <>
      <Marker position={position} icon={userLocationIcon}>
        <Popup>
          <div className="text-center">
            <div className="font-medieval text-brown-dark">📍 You are here</div>
            <div className="text-xs text-gray-600 mt-1">Live Location</div>
          </div>
        </Popup>
      </Marker>
      <Circle
        center={position}
        radius={30}
        pathOptions={{
          color: '#3b82f6',
          fillColor: '#3b82f6',
          fillOpacity: 0.1,
          weight: 2,
        }}
      />
    </>
  ) : null;
}

const Map = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [locationError, setLocationError] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [watchId, setWatchId] = useState(null);

  // GLA University center
  const universityCenter = [27.5925, 77.7085];

  // Treasure locations across GLA University campus
  const treasureLocations = [
    { id: 1, name: 'Academic Block A', position: [27.5930, 77.7075], icon: '📚', status: 'available', difficulty: 'Easy', rewards: '100 Points', description: 'Main academic building with lecture halls' },
    { id: 2, name: 'Academic Block B', position: [27.5928, 77.7080], icon: '💻', status: 'available', difficulty: 'Easy', rewards: '100 Points', description: 'Computer labs and tutorial rooms' },
    { id: 3, name: 'Central Library', position: [27.5925, 77.7090], icon: '📖', status: 'available', difficulty: 'Medium', rewards: '200 Points', description: 'Multi-story library with study areas' },
    { id: 4, name: 'Administrative Block', position: [27.5932, 77.7088], icon: '🏛️', status: 'locked', difficulty: 'Hard', rewards: '250 Points', description: 'Main administrative building' },
    { id: 5, name: 'Boys Hostel 1', position: [27.5918, 77.7070], icon: '🏠', status: 'completed', difficulty: 'Easy', rewards: '100 Points', description: 'First boys residential hostel' },
    { id: 6, name: 'Boys Hostel 2', position: [27.5915, 77.7072], icon: '🏘️', status: 'available', difficulty: 'Easy', rewards: '100 Points', description: 'Second boys hostel block' },
    { id: 7, name: 'Girls Hostel', position: [27.5920, 77.7095], icon: '🏡', status: 'available', difficulty: 'Easy', rewards: '100 Points', description: 'Girls residential hostel' },
    { id: 8, name: 'Main Cafeteria', position: [27.5924, 77.7082], icon: '🍽️', status: 'completed', difficulty: 'Easy', rewards: '100 Points', description: 'Central dining facility' },
    { id: 9, name: 'Sports Complex', position: [27.5935, 77.7092], icon: '⚽', status: 'available', difficulty: 'Medium', rewards: '150 Points', description: 'Indoor and outdoor sports facilities' },
    { id: 10, name: 'Main Auditorium', position: [27.5923, 77.7075], icon: '🎭', status: 'available', difficulty: 'Medium', rewards: '150 Points', description: 'Large auditorium for events' },
    { id: 11, name: 'Medical Center', position: [27.5921, 77.7090], icon: '🏥', status: 'available', difficulty: 'Medium', rewards: '150 Points', description: 'Campus medical facility' },
    { id: 12, name: 'Workshop & Labs', position: [27.5933, 77.7070], icon: '⚙️', status: 'available', difficulty: 'Hard', rewards: '200 Points', description: 'Engineering workshops' },
    { id: 13, name: 'IT Center', position: [27.5927, 77.7085], icon: '🖥️', status: 'available', difficulty: 'Medium', rewards: '150 Points', description: 'Central IT facility' },
    { id: 14, name: 'Main Gate', position: [27.5912, 77.7085], icon: '🚪', status: 'completed', difficulty: 'Easy', rewards: '50 Points', description: 'Main entrance' },
    { id: 15, name: 'Central Park', position: [27.5925, 77.7085], icon: '🌳', status: 'available', difficulty: 'Easy', rewards: '100 Points', description: 'Green space for relaxation' },
  ];

  // Request location permission and start tracking
  useEffect(() => {
    if ('geolocation' in navigator) {
      const id = navigator.geolocation.watchPosition(
        (position) => {
          setUserLocation([position.coords.latitude, position.coords.longitude]);
          setLocationError(null);
        },
        (error) => {
          setLocationError(error.message);
          console.error('Location error:', error);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        }
      );
      setWatchId(id);

      return () => {
        if (id) {
          navigator.geolocation.clearWatch(id);
        }
      };
    } else {
      setLocationError('Geolocation is not supported by your browser');
    }
  }, []);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Hard': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return <CheckCircle className="text-green-500" size={20} />;
      case 'locked': return <Lock className="text-gray-500" size={20} />;
      default: return <Sparkles className="text-gold-medium" size={20} />;
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-16 px-4 md:px-8">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-20 w-40 h-40 bg-mystical-blue rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gold-medium rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in-down">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Compass className="text-gold-medium" size={48} />
            <h1 className="text-5xl md:text-6xl">Live Campus Map</h1>
            <Navigation className="text-gold-medium" size={48} />
          </div>
          <DecorativeLine />
          <p className="text-xl text-ink-brown mt-6 max-w-2xl mx-auto">
            Real-time location tracking on GLA University campus. Find {treasureLocations.length} treasure locations!
          </p>
        </div>

        {/* Location Status */}
        {locationError && (
          <div className="mb-4 bg-red-100 border-2 border-red-500 text-red-700 px-4 py-3 rounded-lg text-center">
            <p className="font-medieval">📍 Location Error: {locationError}</p>
            <p className="text-sm mt-1">Please enable location permissions in your browser</p>
          </div>
        )}

        {userLocation && (
          <div className="mb-4 bg-green-100 border-2 border-green-500 text-green-700 px-4 py-3 rounded-lg text-center">
            <p className="font-medieval">✅ Live tracking enabled - Your location is shown on the map</p>
          </div>
        )}

        {/* Map Container */}
        <div className="relative rounded-xl border-3 border-gold-medium shadow-medieval-lg overflow-hidden animate-reveal">
          <MapContainer 
            center={userLocation || universityCenter} 
            zoom={16} 
            minZoom={15}
            maxZoom={19}
            maxBounds={[
              [27.5900, 77.7050], // Southwest corner
              [27.5950, 77.7110]  // Northeast corner
            ]}
            maxBoundsViscosity={1.0}
            style={{ height: '700px', width: '100%' }}
            className="z-0"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            {/* User Location Marker */}
            <LocationMarker position={userLocation} />
            
            {/* Treasure Location Markers */}
            {treasureLocations.map((location) => (
              <Marker
                key={location.id}
                position={location.position}
                icon={createTreasureIcon(location.status, location.icon)}
                eventHandlers={{
                  click: () => setSelectedLocation(location),
                }}
              >
                <Popup>
                  <div className="text-center">
                    <div className="text-2xl mb-2">{location.icon}</div>
                    <div className="font-medieval text-lg text-brown-dark">{location.name}</div>
                    <div className="text-xs text-gray-600 mt-1 capitalize">{location.status}</div>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>

          {/* Legend */}
          <div className="absolute bottom-4 left-4 bg-parchment-light/95 backdrop-blur-sm p-4 rounded-lg border-2 border-gold-dark shadow-medieval max-w-xs z-[1000]">
            <h4 className="font-medieval text-brown-dark mb-3 text-sm">Legend</h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-blue-500 border-2 border-white"></div>
                <span className="font-cinzel text-ink-brown">Your Location (Live)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-gold-medium"></div>
                <span className="font-cinzel text-ink-brown">Available ({treasureLocations.filter(l => l.status === 'available').length})</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-green-500"></div>
                <span className="font-cinzel text-ink-brown">Completed ({treasureLocations.filter(l => l.status === 'completed').length})</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-gray-400"></div>
                <span className="font-cinzel text-ink-brown">Locked ({treasureLocations.filter(l => l.status === 'locked').length})</span>
              </div>
            </div>
          </div>

          {/* University Label */}
          <div className="absolute top-4 left-4 bg-brown-dark/90 text-parchment-light px-4 py-2 rounded-lg shadow-lg z-[1000]">
            <div className="font-medieval text-lg">GLA University</div>
            <div className="text-xs font-cinzel">Mathura Campus</div>
          </div>
        </div>

        {/* Location Details Modal */}
        {selectedLocation && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[2000] p-4 animate-fade-in" onClick={() => setSelectedLocation(null)}>
            <div className="bg-gradient-to-br from-parchment-light to-parchment-medium p-8 rounded-xl border-3 border-gold-medium shadow-mystical-lg max-w-md w-full animate-reveal relative" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setSelectedLocation(null)} className="absolute top-4 right-4 text-brown-dark hover:text-burgundy transition-colors">
                <span className="text-2xl">×</span>
              </button>

              <div className="text-6xl text-center mb-4">{selectedLocation.icon}</div>
              <h3 className="text-3xl font-medieval text-brown-dark text-center mb-4">{selectedLocation.name}</h3>

              <DecorativeLine className="mb-4" />

              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  {getStatusIcon(selectedLocation.status)}
                  <span className="font-cinzel text-sm capitalize">{selectedLocation.status}</span>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medievalSharp ${getDifficultyColor(selectedLocation.difficulty)}`}>
                  {selectedLocation.difficulty}
                </span>
              </div>

              <p className="text-ink-brown text-center mb-4 leading-relaxed text-sm">
                {selectedLocation.description}
              </p>

              <div className="bg-gold-medium/20 border-2 border-gold-dark rounded-lg p-4 mb-6">
                <div className="flex items-center justify-center gap-2">
                  <Sparkles className="text-gold-dark" size={20} />
                  <span className="font-medieval text-brown-dark">Rewards:</span>
                  <span className="font-cinzel font-bold text-gold-dark">{selectedLocation.rewards}</span>
                </div>
              </div>

              <button 
                className="w-full btn-medieval"
                disabled={selectedLocation.status === 'locked' || selectedLocation.status === 'completed'}
              >
                {selectedLocation.status === 'locked' ? 'Locked' : selectedLocation.status === 'completed' ? 'Completed' : 'Start Quest'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Map;
