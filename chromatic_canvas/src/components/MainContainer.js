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
      <nav
        className="cc-navbar"
        style={{
          width: "100%",
          background: "var(--kavia-dark)",
          borderBottom: "1px solid var(--border-color)",
          padding: "0.5rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "fixed",
          top: 0,
          zIndex: 99
        }}
      >
        <div className="cc-logo" style={{ fontWeight: 700, fontSize: "1.25rem", letterSpacing: "1px" }}>
          <span className="logo-symbol" style={{ color: "var(--kavia-orange)" }}>⭑</span>
          Chromatic Canvas
        </div>
        <div className="cc-nav-links" style={{
          display: 'flex', gap: '2.5rem', alignItems: 'center', fontWeight: 500, fontSize: "1.05rem"
        }}>
          <NavLink
            to="/lessons"
            className="cc-link"
            style={({ isActive }) => ({
              textDecoration: "none",
              color: "var(--text-color)",
              borderRadius: 9,
              padding: "0.3em 1.1em",
              background: isActive
                ? "linear-gradient(90deg, #FF5F6D 0%, #FFC371 25%, #47E7FA 50%, #7BFFB2 75%, #B16DFF 100%)"
                : "transparent",
              WebkitBackgroundClip: isActive ? "text" : "padding-box",
              WebkitTextFillColor: isActive ? "transparent" : "var(--text-color)",
              fontWeight: isActive ? 700 : 500,
              transition: "background 0.3s"
            })}
            end
          >
            Lessons
          </NavLink>
          <NavLink
            to="/gallery"
            className="cc-link"
            style={({ isActive }) => ({
              textDecoration: "none",
              color: "var(--text-color)",
              borderRadius: 9,
              padding: "0.3em 1.1em",
              background: isActive
                ? "linear-gradient(90deg, #FF5F6D 5%, #FFC371 40%, #47E7FA 70%, #B16DFF 100%)"
                : "transparent",
              WebkitBackgroundClip: isActive ? "text" : "padding-box",
              WebkitTextFillColor: isActive ? "transparent" : "var(--text-color)",
              fontWeight: isActive ? 700 : 500,
              transition: "background 0.3s"
            })}
          >
            Gallery
          </NavLink>
          <NavLink
            to="/profile"
            className="cc-link"
            style={({ isActive }) => ({
              textDecoration: "none",
              color: "var(--text-color)",
              borderRadius: 9,
              padding: "0.3em 1.1em",
              background: isActive
                ? "linear-gradient(90deg,#FFC371 0%, #FF5F6D 40%, #47E7FA 70%, #7BFFB2 100%)"
                : "transparent",
              WebkitBackgroundClip: isActive ? "text" : "padding-box",
              WebkitTextFillColor: isActive ? "transparent" : "var(--text-color)",
              fontWeight: isActive ? 700 : 500,
              transition: "background 0.3s"
            })}
          >
            Profile
          </NavLink>
        </div>
      </nav>
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
            <Route path="/lessons" element={<LessonsStub />} />
            <Route path="/gallery" element={<GalleryStub />} />
            <Route path="/profile" element={<ProfileStub />} />
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
