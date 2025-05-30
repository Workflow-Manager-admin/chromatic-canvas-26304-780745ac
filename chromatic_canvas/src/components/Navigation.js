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
            {/* Improved Minimalist SVG Palette Logo */}
            <span className="logo-symbol" style={{display:'inline-flex', alignItems:'center', verticalAlign:'middle'}}>
              <svg
                width="32"
                height="28"
                viewBox="0 0 32 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Art palette logo"
                style={{display:'block'}}
              >
                <defs>
                  <linearGradient id="palette-gradient-modern" x1="2" y1="12" x2="30" y2="26" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#FF5F6D"/>
                    <stop offset="0.5" stopColor="#B16DFF"/>
                    <stop offset="1" stopColor="#47E7FA"/>
                  </linearGradient>
                </defs>
                {/* Art palette base shape */}
                <path
                  d="M16 3
                    C7.6 3 2.5 9.28 2.5 15.7
                    c0 6.56 6.55 9.8 11 7.84
                    1.53-0.67 1.54-2.02.87-2.77
                    -0.39-0.44-1.19-0.72-1.95-0.55
                    -2.08 0.46-4.12-1.55-4.12-3.84
                    0-2.44 2.05-4.27 4.66-4.27
                    1.09 0 2.03 0.38 2.87 1.33
                    0.5 0.58 1.35 0.51 1.81-0.12
                    C25 7.5 29.5 14.1 26.3 18
                    c-1.11 1.34-4.3 0.67-4.3 3.1
                    0 1.92 2.34 2.76 4.64 1.62
                    C28.47 20 30 17.06 29.5 13.44
                    28.71 7.99 23.36 3 16 3z"
                  fill="url(#palette-gradient-modern)"
                  stroke="#181818"
                  strokeOpacity="0.13"
                  strokeWidth="1.1"
                />
                {/* Paint blobs with gradient-filled strokes */}
                <circle cx="8.9" cy="13.3" r="1.32" fill="#fff" stroke="url(#palette-gradient-modern)" strokeWidth="0.8" />
                <circle cx="15.2" cy="8.2" r="1.13" fill="#FF5F6D" stroke="#FFF" strokeWidth="0.5" />
                <circle cx="23.5" cy="14.3" r="1.14" fill="#47E7FA" stroke="#FFF" strokeWidth="0.5" />
                <circle cx="13.7" cy="20.1" r="1.11" fill="#B16DFF" stroke="#FFF" strokeWidth="0.5" />
                {/* Subtle light highlight */}
                <ellipse cx="11.5" cy="6.1" rx="1.3" ry="0.45" fill="#fff" opacity="0.17" />
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
          background: linear-gradient(90deg, #FF5F6D 0%, #B16DFF 50%, #47E7FA 100%);
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
