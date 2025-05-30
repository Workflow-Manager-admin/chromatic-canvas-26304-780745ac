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
            {/* Custom SVG art palette icon with ombre gradient */}
            <span className="logo-symbol" style={{display:'inline-flex', alignItems:'center', verticalAlign:'middle'}}>
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Art palette logo" style={{display:'block'}}>
                <defs>
                  <linearGradient id="palette-gradient" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FF5F6D"/>
                    <stop offset="0.25" stopColor="#FFC371"/>
                    <stop offset="0.5" stopColor="#47E7FA"/>
                    <stop offset="0.75" stopColor="#7BFFB2"/>
                    <stop offset="1" stopColor="#B16DFF"/>
                  </linearGradient>
                </defs>
                <path 
                  d="M16 3C9 3 3.2 8.52 3.2 15.021c0 7.319 6.71 11.4 10.363 9.387.997-.55 1.454-1.562 1.454-2.535 0-.958-.368-1.677-1.03-1.984-2.189-1.036-3.157-2.385-3.157-3.819 0-1.693 1.401-3.072 3.17-3.072.967 0 1.741.312 2.356 1.052.41.48 1.089.446 1.482-.027 3.32-4.02 8.888-1.462 8.888 2.993C28.8 8.52 23 3 16 3Z"
                  fill="url(#palette-gradient)" 
                  stroke="rgba(30,30,30,0.16)"
                  strokeWidth="1"
                />
                {/* Paint blobs */}
                <circle cx="10" cy="12" r="1.2" fill="#FF8B4D"/>
                <circle cx="16" cy="8.5" r="1.1" fill="#B16DFF"/>
                <circle cx="21.2" cy="12.7" r="1.1" fill="#47E7FA"/>
                <circle cx="12" cy="19" r="1.1" fill="#FFC371"/>
              </svg>
            </span>
            ArtS+
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
