import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand-block">
          <Link to="/" className="brand footer-brand">
            <span className="brand-logo">
              <img src="/justicelink-logo.svg" alt="JusticeLink Logo"/>
            </span>
            <span className="brand-text">
              Justice<span>Link</span>
            </span>
          </Link>
          <p>Secure reporting tools designed to help people raise concerns, share information, and strengthen public safety.</p>
          <a className="footer-mail" href="mailto:support@justicelink.gov">support@justicelink.gov <span>↗</span></a>
        </div>
        <div>
          <h3>Explore</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><Link to="/">Report Crime</Link></li>
            <li><a href="#track-status">Track Report</a></li>
            <li><a href="#tips">Safety Tips</a></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3>Services</h3>
          <ul>
            <li><a href="#features">Incident Reporting</a></li>
            <li><a href="#track-status">Case Monitoring</a></li>
            <li><a href="#submit-report">Evidence Submission</a></li>
            <li><a href="#categories">Community Alerts</a></li>
          </ul>
        </div>
        <div>
          <h3>Account</h3>
          <ul>
            <li><Link to="/login">Sign in</Link></li>
            <li><Link to="/signup">Create account</Link></li>
            <li><a href="#tips">Safety Resources</a></li>
            <li><a href="#contact">Privacy &amp; trust</a></li>
          </ul>
        </div>
        <div>
          <h3>Public safety desk</h3>
          <ul className="contact-list">
            <li>+1 (800) 555-0199</li>
            <li>Available around the clock</li>
            <li>112 Civic Center Way<br/>New York, NY</li>
          </ul>
          <div className="social-links">
            <a href="#facebook" aria-label="Facebook">f</a>
            <a href="#twitter" aria-label="X">x</a>
            <a href="#community" aria-label="Community">◎</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>© 2026 JusticeLink. All rights reserved.</p>
          <span>Made for safer communities</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
