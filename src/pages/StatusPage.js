import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import './StatusPage.css';

function StatusPage() {
  const [searchParams] = useSearchParams();
  const [reportData, setReportData] = useState(null);

  useEffect(() => {
    const reference = searchParams.get('reference');
    if (reference) {
      // Simulate fetching report data
      setReportData({
        reference: reference,
        category: 'Cyber crime or fraud',
        submittedDate: '2026-09-14',
        status: 'Under review',
        progress: 65,
        updates: [
          { date: '2026-09-14T10:30', title: 'Report received', description: 'Your report has been successfully submitted and encrypted.' },
          { date: '2026-09-14T14:15', title: 'Verification started', description: 'Our team has begun reviewing your submission for completeness.' },
          { date: '2026-09-14T16:45', title: 'Assigned to investigator', description: 'Your case has been assigned to an investigator for further review.' }
        ]
      });
    }
  }, [searchParams]);

  if (!reportData) {
    return (
      <div className="status-page">
        <div className="container status-container">
          <div style={{ textAlign: 'center', padding: '3rem' }}>
            <h2>Report not found</h2>
            <p>Please verify your reference number and try again.</p>
            <Link to="/#track-status" className="btn btn-primary" style={{ marginTop: '1rem' }}>Search again</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="status-page">
      <div className="container status-container">
        <div className="status-back">
          <Link to="/#track-status">← Back to tracking</Link>
        </div>

        <div className="status-card">
          <div className="status-header">
            <div>
              <p className="eyebrow eyebrow-dark">Your report status</p>
              <h1>{reportData.reference}</h1>
              <p className="status-subtitle">Submitted {new Date(reportData.submittedDate).toLocaleDateString()}</p>
            </div>
            <div className="status-badge">
              <span>{reportData.status}</span>
            </div>
          </div>

          <div className="status-progress">
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: `${reportData.progress}%` }}></div>
            </div>
            <p className="progress-text">{reportData.progress}% Complete</p>
          </div>

          <div className="status-details">
            <h3>Report Details</h3>
            <div className="details-grid">
              <div className="detail-item">
                <span className="detail-label">Category</span>
                <strong>{reportData.category}</strong>
              </div>
              <div className="detail-item">
                <span className="detail-label">Current Status</span>
                <strong>{reportData.status}</strong>
              </div>
              <div className="detail-item">
                <span className="detail-label">Submitted</span>
                <strong>{new Date(reportData.submittedDate).toLocaleDateString()}</strong>
              </div>
              <div className="detail-item">
                <span className="detail-label">Last Updated</span>
                <strong>Today at {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</strong>
              </div>
            </div>
          </div>

          <div className="status-timeline">
            <h3>Timeline of Events</h3>
            <div className="timeline">
              {reportData.updates.map((update, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <p className="timeline-date">
                      {new Date(update.date).toLocaleDateString()} at {new Date(update.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                    <strong className="timeline-title">{update.title}</strong>
                    <p className="timeline-description">{update.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="status-info">
            <h3>What to expect next</h3>
            <p>Your report is being reviewed by our team. You can expect the following timeline:</p>
            <ul>
              <li><strong>Within 24 hours:</strong> Initial review completion</li>
              <li><strong>Within 48 hours:</strong> Assignment to appropriate department</li>
              <li><strong>Within 5 days:</strong> Formal acknowledgment and next steps</li>
            </ul>
          </div>

          <div className="status-actions">
            <Link to="/" className="btn btn-primary">Return home</Link>
            <a href="mailto:support@justicelink.gov" className="btn btn-secondary">Contact support</a>
          </div>

          <p className="status-footer"><span className="secure-mark">●</span> Your information is secure and encrypted. Only authorized personnel have access.</p>
        </div>
      </div>
    </div>
  );
}

export default StatusPage;
