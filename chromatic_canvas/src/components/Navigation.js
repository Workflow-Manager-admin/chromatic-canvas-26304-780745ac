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
            {/* Minimalist Paintbrush SVG Logo with Hot Pink, Purple, and Blue Gradient */}
            <span className="logo-symbol" style={{display: 'inline-flex', alignItems: 'center', verticalAlign: 'middle'}}>
              <svg
                width="30"
                height="32"
                viewBox="0 0 30 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Paintbrush logo"
                style={{ display: 'block' }}
              >
                <defs>
                  <linearGradient id="paintbrush-gradient" x1="8" y1="25" x2="26" y2="5" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#FF5F6D"/>
                    <stop offset="0.45" stopColor="#B16DFF"/>
                    <stop offset="1" stopColor="#47E7FA"/>
                  </linearGradient>
                  <linearGradient id="handle-gradient" x1="12" y1="28" x2="4" y2="10" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#222"/>
                    <stop offset="1" stopColor="#888"/>
                  </linearGradient>
                </defs>
                {/* Minimalist handle - slightly tapering gray */}
                <rect
                  x="12"
                  y="8"
                  width="4"
                  height="16"
                  rx="2"
                  fill="url(#handle-gradient)"
                  stroke="#191919"
                  strokeWidth="0.7"
                />
                {/* Paint ferrule - small metallic band */}
                <rect
                  x="12.6"
                  y="7"
                  width="2.8"
                  height="3"
                  rx="1.2"
                  fill="#cfc9e9"
                  stroke="#b6aadd"
                  strokeWidth="0.5"
                />
                {/* Paintbrush bristles - gradient colored and stylized */}
                <path
                  d="M10.8 7.6 C11.2 4.6 17.9 4.7 18.3 7.8
                     C18.5 9.5 16.6 12.2 14 12
                     C11.5 11.7 10.5 9.3 10.8 7.6Z"
                  fill="url(#paintbrush-gradient)"
                  stroke="#B16DFF"
                  strokeWidth="0.7"
                />
                {/* Paint tip accent (drop or dab for vivid logo edge) */}
                <ellipse
                  cx="15.1"
                  cy="6.8"
                  rx="1.04"
                  ry="1.54"
                  fill="url(#paintbrush-gradient)"
                  opacity="0.94"
                />
                {/* Subtle shadow below handle for depth */}
                <ellipse
                  cx="14"
                  cy="25.5"
                  rx="2.0"
                  ry="0.7"
                  fill="#000"
                  opacity="0.13"
                />
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
