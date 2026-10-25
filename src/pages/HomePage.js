import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './HomePage.css';

function HomePage() {
  const navigate = useNavigate();
  const [reportForm, setReportForm] = useState({
    category: '',
    date: '',
    location: '',
    description: '',
    email: '',
    anonymous: true,
    evidence: null
  });

  const [trackingReference, setTrackingReference] = useState('');

  const handleReportChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setReportForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
    }));
  };

  const handleReportSubmit = (e) => {
    e.preventDefault();
    // Store form data and navigate to confirmation
    localStorage.setItem('reportData', JSON.stringify(reportForm));
    navigate('/confirmation');
  };

  const handleTrackingSubmit = (e) => {
    e.preventDefault();
    navigate(`/status?reference=${trackingReference}`);
  };

  return (
    <div className="home-page">
      <Header />
      
      <main id="home">
        {/* Hero Section */}
        <section className="hero" id="report">
          <div className="container hero-grid">
            <div className="hero-content">
              <p className="eyebrow">Secure Community Reporting</p>
              <h1>Your Voice.<br/>Your Safety.<br/>Your Justice.</h1>
              <p className="hero-copy">JusticeLink gives people a protected way to report incidents, share evidence, and follow what happens next with confidence and clarity.</p>
              <div className="hero-actions">
                <a href="#submit-report" className="btn btn-primary">Start a report <span aria-hidden="true">→</span></a>
                <a href="#track-status" className="btn btn-secondary">Track a report <span aria-hidden="true">↗</span></a>
              </div>
              <div className="hero-mini-stats">
                <div><strong>24/7</strong><span>Incident support</span></div>
                <div><strong>Secure</strong><span>Encrypted intake</span></div>
                <div><strong>Live</strong><span>Incident map</span></div>
              </div>
            </div>
            <div className="hero-visual">
              <div className="visual-panel">
                <div className="signal-ring signal-one"></div>
                <div className="signal-ring signal-two"></div>
                <div className="map-card">
                  <div className="map-header"><span className="map-dot"></span>Live incident map</div>
                  <div className="map-grid">
                    <span className="location location-a"></span>
                    <span className="location location-b"></span>
                    <span className="location location-c"></span>
                    <span className="location location-d"></span>
                  </div>
                </div>
                <div className="status-pill">Case update</div>
                <div className="report-card">
                  <div className="report-card-header"><span className="report-icon"></span>Review in progress</div>
                  <div className="report-progress"><span className="progress-bar"></span></div>
                  <div className="report-meta"><strong>82%</strong><span>Verified · 14 min ago</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Alert Banner */}
        <section className="alert-banner">
          <div className="container alert-inner">
            <div className="alert-copy">
              <span className="alert-title">Emergency?</span>
              <p>If you are in immediate danger or witnessing a crime in progress, contact your local emergency services right away.</p>
            </div>
            <a href="tel:911" className="btn btn-emergency">Emergency Assistance</a>
          </div>
        </section>

        {/* How it Works */}
        <section className="section" id="track">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow eyebrow-dark">How it works</p>
              <h2>A clear path to justice</h2>
              <p className="section-intro">From first signal to final update, every step is designed to be visible, accountable, and easy to understand.</p>
            </div>
            <div className="process-grid">
              <article className="process-card">
                <div className="card-icon icon-report"></div>
                <h3>Report</h3>
                <p>Submit a detailed report with location, time, and supporting evidence for the incident.</p>
              </article>
              <article className="process-card">
                <div className="card-icon icon-verify"></div>
                <h3>Verify</h3>
                <p>Your incident is reviewed securely to confirm details and route it to the appropriate responders.</p>
              </article>
              <article className="process-card">
                <div className="card-icon icon-track"></div>
                <h3>Track</h3>
                <p>Monitor the status of your report in real time and receive updates as it progresses.</p>
              </article>
              <article className="process-card">
                <div className="card-icon icon-resolve"></div>
                <h3>Resolve</h3>
                <p>Reach a safer outcome through timely action, review, and case closure support.</p>
              </article>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section section-alt" id="features">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow eyebrow-dark">Key features</p>
              <h2>Built for trust, transparency, and action</h2>
            </div>
            <div className="feature-grid">
              <article className="feature-card"><span className="feature-icon">01</span><h3>Secure Crime Reporting</h3><p>Protected intake and encrypted handling of each submitted report.</p></article>
              <article className="feature-card"><span className="feature-icon">02</span><h3>Anonymous Reporting</h3><p>Share critical information while protecting your identity when needed.</p></article>
              <article className="feature-card"><span className="feature-icon">03</span><h3>Report Tracking</h3><p>Stay informed with progress steps, case updates, and resolution notes.</p></article>
              <article className="feature-card"><span className="feature-icon">04</span><h3>Evidence Upload</h3><p>Attach photos, statements, and supporting files for stronger review.</p></article>
              <article className="feature-card"><span className="feature-icon">05</span><h3>Case Status Updates</h3><p>Receive timely notices on verification, escalation, and conclusion.</p></article>
              <article className="feature-card"><span className="feature-icon">06</span><h3>Location-Based Reporting</h3><p>Tag incidents accurately so the right teams can act without delay.</p></article>
            </div>
          </div>
        </section>

        {/* Report Form Section */}
        <section className="section report-section" id="submit-report">
          <div className="container report-layout">
            <div className="report-intro">
              <p className="eyebrow eyebrow-dark">Make a report</p>
              <h2>Tell us what happened.</h2>
              <p>Share only what you know. You can report anonymously, attach supporting evidence, and save your reference number for updates.</p>
              <div className="trust-list">
                <span><b>01</b> Your information is protected</span>
                <span><b>02</b> Anonymous reporting is available</span>
                <span><b>03</b> You stay in control of follow-up</span>
              </div>
            </div>
            <form className="report-form" onSubmit={handleReportSubmit}>
              <div className="form-top">
                <span>New incident report</span>
                <span className="secure-label">● Secure intake</span>
              </div>
              <label>
                What happened?
                <select name="category" value={reportForm.category} onChange={handleReportChange} required>
                  <option value="">Select a category</option>
                  <option value="theft">Theft or property damage</option>
                  <option value="cyber">Cyber crime or fraud</option>
                  <option value="harassment">Harassment or threat</option>
                  <option value="missing">Missing person</option>
                  <option value="violence">Violence or immediate danger</option>
                  <option value="other">Other concern</option>
                </select>
              </label>
              <div className="form-row">
                <label>
                  When did it happen?
                  <input type="date" name="date" value={reportForm.date} onChange={handleReportChange} required/>
                </label>
                <label>
                  Where did it happen?
                  <input type="text" name="location" placeholder="City or neighborhood" value={reportForm.location} onChange={handleReportChange} required/>
                </label>
              </div>
              <label>
                Describe the incident
                <textarea name="description" rows="4" placeholder="Include the details that feel important..." value={reportForm.description} onChange={handleReportChange} required></textarea>
              </label>
              <div className="form-row">
                <label>
                  Your email <span className="optional">optional</span>
                  <input type="email" name="email" placeholder="For status updates" value={reportForm.email} onChange={handleReportChange}/>
                </label>
                <label>
                  Report anonymously
                  <select name="anonymous" value={reportForm.anonymous} onChange={handleReportChange}>
                    <option value={true}>Yes, keep me anonymous</option>
                    <option value={false}>No, I can be contacted</option>
                  </select>
                </label>
              </div>
              <div className="upload-line">
                <span className="upload-symbol">+</span>
                <span><strong>Add evidence</strong><small>Photos, video, or documents up to 25 MB</small></span>
                <input type="file" name="evidence" aria-label="Add evidence" onChange={handleReportChange}/>
              </div>
              <button className="btn btn-primary form-submit" type="submit">Continue securely <span aria-hidden="true">→</span></button>
              <p className="form-note">By continuing, you agree to our responsible reporting guidelines.</p>
            </form>
          </div>
        </section>

        {/* Categories Section */}
        <section className="section section-alt" id="categories">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow eyebrow-dark">Crime categories</p>
              <h2>Report the issue that affects you</h2>
            </div>
            <div className="category-grid">
              <a href="#submit-report" className="category-pill">Theft <span>→</span></a>
              <a href="#submit-report" className="category-pill">Cyber Crime <span>→</span></a>
              <a href="#submit-report" className="category-pill">Harassment <span>→</span></a>
              <a href="#submit-report" className="category-pill">Fraud <span>→</span></a>
              <a href="#submit-report" className="category-pill">Missing Person <span>→</span></a>
              <a href="#submit-report" className="category-pill">Violence <span>→</span></a>
              <a href="#submit-report" className="category-pill">Other <span>→</span></a>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="container stats-grid">
            <div className="stat-item"><strong>10K+</strong><span>Reports Submitted</span></div>
            <div className="stat-item"><strong>8K+</strong><span>Cases Reviewed</span></div>
            <div className="stat-item"><strong>95%</strong><span>Reports Processed</span></div>
            <div className="stat-item"><strong>24/7</strong><span>Portal Availability</span></div>
          </div>
        </section>

        {/* Tracking Section */}
        <section className="section tracking-section" id="track-status">
          <div className="container tracking-layout">
            <div>
              <p className="eyebrow eyebrow-dark">Track your report</p>
              <h2>Know where things stand.</h2>
              <p>Use your secure reference number to see the latest status of your submission and any next steps.</p>
            </div>
            <form className="tracking-card" onSubmit={handleTrackingSubmit}>
              <label>Reference number</label>
              <div className="tracking-input">
                <input type="text" pattern="JL-[0-9]{4}-[0-9]{6}" placeholder="JL-2026-000000" value={trackingReference} onChange={(e) => setTrackingReference(e.target.value)} required/>
                <button className="btn btn-primary" type="submit">Check status</button>
              </div>
              <div className="tracking-example">
                <span className="status-dot"></span>
                <span>Example: <strong>JL-2026-014892</strong></span>
                <span className="status-chip">Verified</span>
              </div>
            </form>
          </div>
        </section>

        {/* Tips Section */}
        <section className="section" id="tips">
          <div className="container">
            <div className="tips-header">
              <div>
                <p className="eyebrow eyebrow-dark">Safety tips</p>
                <h2>Stay informed. Stay protected.</h2>
              </div>
              <a href="#contact" className="btn btn-secondary">Get support <span aria-hidden="true">↗</span></a>
            </div>
            <div className="tips-grid">
              <article className="tip-item"><span className="tip-number">01</span><h3>Protect personal information</h3><p>Limit access to private data and verify requests before sharing sensitive details.</p></article>
              <article className="tip-item"><span className="tip-number">02</span><h3>Report suspicious activity</h3><p>Prompt reporting helps prevent harm and improves response times for communities.</p></article>
              <article className="tip-item"><span className="tip-number">03</span><h3>Avoid sharing OTPs/passwords</h3><p>Never disclose verification codes or account credentials to anyone.</p></article>
              <article className="tip-item"><span className="tip-number">04</span><h3>Preserve evidence</h3><p>Save messages, photos, videos, and timestamps that may help in review and investigation.</p></article>
              <article className="tip-item"><span className="tip-number">05</span><h3>Contact emergency services</h3><p>For immediate danger, call emergency contacts without delay to seek urgent assistance.</p></article>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section faq-section">
          <div className="container faq-layout">
            <div>
              <p className="eyebrow eyebrow-dark">Common questions</p>
              <h2>Clarity when you need it.</h2>
            </div>
            <div className="faq-list">
              <FAQItem question="Can I submit a report anonymously?" answer="Yes. Anonymous reporting is available. You may choose to share an email only if you want status updates." />
              <FAQItem question="What happens after I submit?" answer="Your report receives a reference number, is reviewed for completeness, and is routed to the appropriate team." />
              <FAQItem question="What should I do in an emergency?" answer="JusticeLink is not an emergency response service. Call your local emergency number immediately if someone is in danger." />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-box">
              <div className="cta-copy">
                <p className="eyebrow eyebrow-invert">Community protection</p>
                <h2>See Something? Say Something.</h2>
                <p>Your report can help make your community safer.</p>
              </div>
              <a href="#report" className="btn btn-primary btn-lg">Report an Incident</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <details open={isOpen} onClick={() => setIsOpen(!isOpen)}>
      <summary>{question}<span>+</span></summary>
      <p>{answer}</p>
    </details>
  );
}

export default HomePage;
