import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * PUBLIC_INTERFACE
 * Minimalist Navigation Bar with rainbow accent for the active element.
 * Uses react-router-dom for navigation.
 */
export default function Navigation() {
  return (
    <nav className="navbar">
      <div className="container" style={{ padding: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <div className="logo">
            <span className="logo-symbol">*</span> Chromatic Canvas
          </div>
          <ul className="nav-list" style={{
            display: 'flex',
            gap: '2rem',
            listStyle: 'none',
            margin: 0,
            padding: 0
          }}>
            <li>
              <NavLink
                end
                to="/"
                className={({ isActive }) => 
                  "nav-link" + (isActive ? " nav-link-active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lessons"
                className={({ isActive }) => 
                  "nav-link" + (isActive ? " nav-link-active" : "")}
              >
                Lessons
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gallery"
                className={({ isActive }) => 
                  "nav-link" + (isActive ? " nav-link-active" : "")}
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/profile"
                className={({ isActive }) => 
                  "nav-link" + (isActive ? " nav-link-active" : "")}
              >
                Profile
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      {/* Inline styles for the nav gradient accent */}
      <style>{`
        .nav-link {
          display: inline-block;
          padding: 8px 0;
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 1rem;
          font-weight: 500;
          position: relative;
          transition: color 0.2s;
        }
        .nav-link:hover,
        .nav-link:focus {
          color: var(--text-color);
        }
        .nav-link-active {
          color: #fff;
        }
        .nav-link-active::after {
          content: '';
          display: block;
          margin: 0 auto;
          margin-top: 4px;
          height: 3px;
          width: 90%;
          border-radius: 3px;
          background: linear-gradient(90deg, #FF5F6D 0%, #FFC371 25%, #47E7FA 50%, #7BFFB2 75%, #B16DFF 100%);
          animation: rainbow-bar-fadein 0.4s;
        }
        @keyframes rainbow-bar-fadein {
          from { width: 0; opacity: 0.4; }
          to { width: 90%; opacity: 1; }
        }
        @media (max-width: 600px) {
          .nav-list {
            gap: 1rem;
          }
        }
      `}</style>
    </nav>
  );
}
