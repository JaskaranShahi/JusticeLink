import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ConfirmationPage.css';

function ReportConfirmationPage() {
  const [referenceNumber, setReferenceNumber] = useState('');

  useEffect(() => {
    // Generate a realistic reference number
    const year = new Date().getFullYear();
    const rand = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
    setReferenceNumber(`JL-${year}-${rand}`);
  }, []);

  return (
    <div className="confirmation-page">
      <div className="container confirmation-container">
        <div className="confirmation-card">
          <div className="confirmation-icon success-icon">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2"/>
              <path d="M 35 50 L 45 60 L 65 40" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h1>Report submitted securely</h1>
          <p className="confirmation-subtitle">Thank you for helping make our community safer.</p>
          
          <div className="confirmation-details">
            <p className="eyebrow eyebrow-dark">Your reference number</p>
            <div className="reference-box">
              <strong>{referenceNumber}</strong>
              <p>Save this number to track your report</p>
            </div>
          </div>

          <div className="confirmation-info">
            <h3>What happens next?</h3>
            <ul>
              <li><strong>Within 24 hours:</strong> Your report will be reviewed for completeness and routed to the appropriate team.</li>
              <li><strong>Case assignment:</strong> A case ID will be assigned and you'll receive a status update.</li>
              <li><strong>Ongoing tracking:</strong> Use your reference number to check the status of your report anytime.</li>
            </ul>
          </div>

          <div className="confirmation-actions">
            <Link to="/" className="btn btn-primary">Return home</Link>
            <Link to="/#track-status" className="btn btn-secondary">Track this report</Link>
          </div>

          <div className="confirmation-note">
            <p><span className="secure-mark">●</span> Your submission is encrypted and stored securely. Only authorized staff can access your information.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReportConfirmationPage;
