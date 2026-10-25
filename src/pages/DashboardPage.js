import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './DashboardPage.css';

function DashboardPage({ user, isLoggedIn, onLogout }) {
  const navigate = useNavigate();

  if (!isLoggedIn) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Please log in first</h1>
        <Link to="/login" className="btn btn-primary" style={{ marginTop: '1rem' }}>Go to Login</Link>
      </div>
    );
  }

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  const userName = user?.name || 'User';

  return (
    <div className="dashboard-page">
      <header className="dashboard-header">
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
        <nav>
          <a href="#overview" className="active">Overview</a>
          <a href="/#submit-report">New report</a>
          <a href="/#tips">Resources</a>
        </nav>
        <button className="dashboard-exit" onClick={handleLogout}>Exit account</button>
      </header>

      <main className="dashboard-main">
        <div className="dashboard-welcome">
          <div>
            <p className="eyebrow eyebrow-dark">Your secure dashboard</p>
            <h1>Good morning, {userName}.</h1>
            <p>Stay close to the reports and updates that matter to you.</p>
          </div>
          <Link to="/#submit-report" className="btn btn-primary">New report <span aria-hidden="true">+</span></Link>
        </div>

        <section className="dashboard-stats">
          <article>
            <span>Open reports</span>
            <strong>02</strong>
            <small>Both currently active</small>
          </article>
          <article>
            <span>Latest update</span>
            <strong>Today</strong>
            <small>11:03 AM</small>
          </article>
          <article>
            <span>Saved references</span>
            <strong>04</strong>
            <small>Across your account</small>
          </article>
        </section>

        <section className="dashboard-grid">
          <div className="dashboard-table">
            <div className="dashboard-section-heading">
              <div>
                <p className="eyebrow eyebrow-dark">Recent reports</p>
                <h2>Report activity</h2>
              </div>
              <a href="/#track-status">View all <span aria-hidden="true">↗</span></a>
            </div>
            <div className="report-row">
              <div className="row-icon">JL</div>
              <div>
                <strong>JL-2026-014892</strong>
                <small>Cyber crime or fraud · Submitted 14 Sep</small>
              </div>
              <span className="status-chip">Under review</span>
            </div>
            <div className="report-row">
              <div className="row-icon muted-icon">JL</div>
              <div>
                <strong>JL-2026-009731</strong>
                <small>Theft or property damage · Submitted 02 Sep</small>
              </div>
              <span className="status-chip resolved-chip">Resolved</span>
            </div>
          </div>

          <aside className="dashboard-help">
            <p className="eyebrow eyebrow-dark">Need support?</p>
            <h2>We are here to help.</h2>
            <p>Our public safety desk is available around the clock for questions about your report.</p>
            <a href="mailto:support@justicelink.gov">Contact support <span aria-hidden="true">↗</span></a>
          </aside>
        </section>
      </main>

      <footer className="account-footer"><p>© 2026 JusticeLink</p><Link to="/">Return to public portal</Link></footer>
    </div>
  );
}

export default DashboardPage;
