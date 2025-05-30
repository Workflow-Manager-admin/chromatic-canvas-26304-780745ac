import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import LessonView from './LessonView';
import GalleryView from './GalleryView';
import ProfileView from './ProfileView';

// PUBLIC_INTERFACE
/**
 * MainContainer holds the primary navigation layout for Chromatic Canvas.
 * Minimalist top nav, rainbow-gradient active link, main content switches with Router.
 */
function MainContainer() {
  return (
    <div className="app" style={{
      minHeight: "100vh", background: "var(--kavia-dark)", color: "var(--text-color)"
    }}>
      <Navigation />
      <main
        style={{
          marginTop: "4.2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          width: "100%"
        }}
      >
        <div style={{
          width: "100%",
          maxWidth: 900,
          margin: "0 auto",
          padding: "2rem 1.5rem"
        }}>
          <Routes>
            <Route path="/" element={<HomeStub />} />
            <Route path="/lessons" element={<LessonView />} />
            <Route path="/gallery" element={<GalleryView />} />
            <Route path="/profile" element={<ProfileView />} />
            <Route path="*" element={<NotFoundStub />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

// Minimal placeholder components for stubs/views

function HomeStub() {
  return (
    <section style={{ textAlign: "center", padding: "4rem 0" }}>
      <h1 className="title" style={{ fontSize: "2.7rem", marginBottom: 8 }}>Welcome to Chromatic Canvas</h1>
      <div className="description" style={{ color: "var(--text-secondary)" }}>
        Start creating or choose a page from above.
      </div>
    </section>
  );
}

function LessonsStub() {
  return (
    <section>
      <h2 style={{ marginBottom: 10, fontSize: "2rem" }}>Lessons</h2>
      <div style={{ color: "var(--text-secondary)" }}>Step-by-step lessons coming soon…</div>
    </section>
  );
}

function GalleryStub() {
  return (
    <section>
      <h2 style={{ marginBottom: 10, fontSize: "2rem" }}>Gallery</h2>
      <div style={{ color: "var(--text-secondary)" }}>Explore curated artwork. Gallery feature is upcoming.</div>
    </section>
  );
}

function ProfileStub() {
  return (
    <section>
      <h2 style={{ marginBottom: 10, fontSize: "2rem" }}>Profile</h2>
      <div style={{ color: "var(--text-secondary)" }}>Profile page under construction.</div>
    </section>
  );
}

function NotFoundStub() {
  return (
    <section style={{ textAlign: 'center', padding: '2rem 0', color: '#FF5F6D', fontWeight: 500 }}>
      Page not found.
    </section>
  );
}

export default MainContainer;
