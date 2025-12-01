import React from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MainLayout = ({ children }) => {
  const location = useLocation();
  const hideNavPaths = ['/login', '/register'];
  const shouldHideNav = hideNavPaths.includes(location.pathname);

  return (
    <div className="h-screen flex flex-col">
      {!shouldHideNav && <Navigation />}
      <main className="flex-grow relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
