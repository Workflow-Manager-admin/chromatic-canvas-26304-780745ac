import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import InteractiveLessons from './components/InteractiveLessons';
import ArtworkGallery from './components/ArtworkGallery';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navigation />
        <main style={{ marginTop: 76 }}>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/lessons" element={<InteractiveLessons />} />
              <Route path="/gallery" element={<ArtworkGallery />} />
              <Route path="/profile" element={<UserProfile />} />
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
