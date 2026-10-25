import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './AccountPage.css';

function LoginPage({ onLogin }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login - in real app, this would validate against a backend
    const user = {
      name: formData.email.split('@')[0],
      email: formData.email,
      isLoggedIn: true
    };
    onLogin(user);
    navigate('/dashboard');
  };

  return (
    <div className="account-page">
      <header className="account-header">
        <Link to="/" className="brand">
          <span className="brand-logo">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="3" rx="10"/>
              <rect x="30" y="30" width="40" height="40" fill="currentColor" opacity="0.2"/>
            </svg>
          </span>
          <span className="brand-text">
            Justice<span>Link</span>
          </span>
        </Link>
        <Link to="/" className="back-link">Back to JusticeLink <span aria-hidden="true">↗</span></Link>
      </header>

      <main className="account-main">
        <section className="account-panel">
          <div className="account-heading">
            <p className="eyebrow eyebrow-dark">Secure access</p>
            <h1>Welcome back.</h1>
            <p>Sign in to manage reports, save evidence, and receive case updates in one place.</p>
          </div>
          <form className="account-form" onSubmit={handleSubmit}>
            <label>
              Email address
              <input 
                type="email" 
                name="email"
                autocomplete="email" 
                placeholder="you@example.com" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </label>
            <label>
              Password
              <input 
                type="password" 
                name="password"
                autocomplete="current-password" 
                placeholder="Enter your password" 
                minLength="8" 
                value={formData.password}
                onChange={handleChange}
                required 
              />
            </label>
            <div className="form-options">
              <label className="check-label">
                <input type="checkbox" name="remember" checked={formData.remember} onChange={handleChange} /> 
                <span>Keep me signed in</span>
              </label>
              <a href="mailto:support@justicelink.gov?subject=Password%20reset">Forgot password?</a>
            </div>
            <button className="btn btn-primary account-submit" type="submit">Sign in securely <span aria-hidden="true">→</span></button>
          </form>
          <div className="account-divider"><span>New to JusticeLink?</span></div>
          <Link to="/signup" className="btn account-outline">Create an account</Link>
          <p className="account-note"><span className="secure-mark">●</span> Your connection is protected by secure encryption.</p>
        </section>
        <aside className="account-aside">
          <p className="eyebrow eyebrow-invert">Your secure space</p>
          <h2>One account.<br/>Clearer follow-through.</h2>
          <p>Keep your reference numbers organized and stay connected to the progress of every report you choose to follow.</p>
          <div className="aside-stat"><strong>24/7</strong><span>Access to your report history</span></div>
        </aside>
      </main>

      <footer className="account-footer"><p>© 2026 JusticeLink</p><a href="mailto:support@justicelink.gov">Need help? Contact support</a></footer>
    </div>
  );
}

export default LoginPage;
