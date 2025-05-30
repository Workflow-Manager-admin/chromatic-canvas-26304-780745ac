import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

// PUBLIC_INTERFACE
/**
 * Navigation renders a minimalist topbar navigation with rainbow-gradient active link accent.
 * Uses NavLink from react-router-dom to handle active states.
 */
function Navigation() {
  return (
    <nav className="cc-navbar">
      <div className="cc-logo">
        <span className="logo-symbol">⭑</span>
        Chromatic Canvas
      </div>
      <div className="cc-nav-links">
        <NavLink to="/lessons" className="cc-link">
          Lessons
        </NavLink>
        <NavLink to="/gallery" className="cc-link">
          Gallery
        </NavLink>
        <NavLink to="/profile" className="cc-link">
          Profile
        </NavLink>
      </div>
    </nav>
  );
}

export default Navigation;
