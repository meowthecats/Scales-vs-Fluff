import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import PageTwo from './pages/PageTwo';

const Navigation = () => {
  const location = useLocation();
  
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <span className="text-xl font-serif font-bold text-gray-900 tracking-tight">Scales<span className="text-gray-400 font-sans italic mx-1 font-normal text-lg">vs</span>Fluff</span>
          </div>
          <div className="flex gap-6">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors ${location.pathname === '/' ? 'text-orange-600' : 'text-gray-500 hover:text-gray-900'}`}
            >
              Overview
            </Link>
            <Link 
              to="/daily-care" 
              className={`text-sm font-medium transition-colors ${location.pathname === '/daily-care' ? 'text-emerald-600' : 'text-gray-500 hover:text-gray-900'}`}
            >
              Daily Routines & Gear
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-orange-200">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/daily-care" element={<PageTwo />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
