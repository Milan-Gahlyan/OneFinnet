// src/App.jsx
import React from 'react';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import CategoryList from './Components/CategoryList';
import Background from './Components/Background';

const App = () => {
  return (
    <div className="relative w-full min-h-screen bg-zinc-800">
      <div className="absolute inset-0 z-0">
        <Background />
      </div>
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
      </div>
      <div className="relative z-20">
        <CategoryList />
      </div>
    </div>
  );
};

export default App;
