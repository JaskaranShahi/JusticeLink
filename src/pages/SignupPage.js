import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './AccountPage.css';

function SignupPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    terms: false
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
    if (formData.password !== formData.passwordConfirmation) {
      alert('Passwords do not match');
      return;
    }
    // Store user data and redirect to login
    localStorage.setItem('newUser', JSON.stringify(formData));
    navigate('/login');
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

      <main className="account-main signup-main">
        <section className="account-panel">
          <div className="account-heading">
            <p className="eyebrow eyebrow-dark">Join JusticeLink</p>
            <h1>Create your account.</h1>
            <p>Set up a secure profile to follow reports, receive updates, and keep important information close.</p>
          </div>
          <form className="account-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label>
                First name
                <input 
                  type="text" 
                  name="firstName"
                  autocomplete="given-name" 
                  placeholder="Your first name" 
                  value={formData.firstName}
                  onChange={handleChange}
                  required 
                />
              </label>
              <label>
                Last name
                <input 
                  type="text" 
                  name="lastName"
                  autocomplete="family-name" 
                  placeholder="Your last name" 
                  value={formData.lastName}
                  onChange={handleChange}
                  required 
                />
              </label>
            </div>
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
            <div className="form-row">
              <label>
                Create password
                <input 
                  type="password" 
                  name="password"
                  autocomplete="new-password" 
                  placeholder="At least 8 characters" 
                  minLength="8" 
                  value={formData.password}
                  onChange={handleChange}
                  required 
                />
              </label>
              <label>
                Confirm password
                <input 
                  type="password" 
                  name="passwordConfirmation"
                  autocomplete="new-password" 
                  placeholder="Repeat your password" 
                  minLength="8" 
                  value={formData.passwordConfirmation}
                  onChange={handleChange}
                  required 
                />
              </label>
            </div>
            <label className="check-label terms-label">
              <input 
                type="checkbox" 
                name="terms" 
                checked={formData.terms}
                onChange={handleChange}
                required 
              /> 
              <span>I agree to the <Link to="/#contact">responsible reporting guidelines</Link> and understand that JusticeLink is not an emergency response service.</span>
            </label>
            <button className="btn btn-primary account-submit" type="submit">Create account <span aria-hidden="true">→</span></button>
          </form>
          <div className="account-divider"><span>Already have an account?</span></div>
          <Link to="/login" className="btn account-outline">Sign in instead</Link>
          <p className="account-note"><span className="secure-mark">●</span> We only use your details to support your JusticeLink experience.</p>
        </section>
        <aside className="account-aside signup-aside">
          <p className="eyebrow eyebrow-invert">Built around trust</p>
          <h2>Stay informed.<br/>Stay in control.</h2>
          <p>Your account is optional for anonymous reports. Create one when you want a simple, private way to follow progress.</p>
          <div className="aside-list">
            <span><b>01</b> Save report references</span>
            <span><b>02</b> Receive status updates</span>
            <span><b>03</b> Manage your preferences</span>
          </div>
        </aside>
      </main>

      <footer className="account-footer"><p>© 2026 JusticeLink</p><a href="mailto:support@justicelink.gov">Need help? Contact support</a></footer>
    </div>
  );
}

export default SignupPage;
