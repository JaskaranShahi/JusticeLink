import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ isLoggedIn, onLogout }) {
  return (
    <header className="site-header">
      <div className="container navbar">
        <Link to="/" className="brand">
          <span className="brand-logo">
            <img src="/justicelink-logo.svg" alt="JusticeLink Logo"/>
          </span>
          <span className="brand-text">
            Justice<span>Link</span>
          </span>
        </Link>
        <nav className="nav-links">
          <a href="/#home">Home</a>
          <a href="/#submit-report">Report Crime</a>
          <a href="/#track-status">Track Report</a>
          <a href="/#tips">Safety Tips</a>
          <Link to="/contact">Contact</Link>
        </nav>
        <div className="account-actions">
          {isLoggedIn ? (
            <>
              <Link to="/dashboard" className="sign-in-link">Dashboard</Link>
              <button className="btn btn-primary nav-button" onClick={onLogout}>Sign out</button>
            </>
          ) : (
            <>
              <Link to="/login" className="sign-in-link">Sign in</Link>
              <Link to="/signup" className="btn btn-primary nav-button">Create account</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
