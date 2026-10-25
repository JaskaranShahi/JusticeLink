import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './ContactPage.css';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: 'general'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        category: 'general'
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact-page">
      <Header />

      <main className="contact-main">
        {/* Hero Section */}
        <section className="contact-hero">
          <div className="container">
            <div className="hero-content">
              <p className="eyebrow">Get in Touch</p>
              <h1>We're Here to Help</h1>
              <p>Have questions about JusticeLink? Need support? We'd love to hear from you.</p>
            </div>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="contact-cards-section">
          <div className="container">
            <div className="contact-cards">
              <div className="contact-card">
                <div className="card-icon">📞</div>
                <h3>Call Us</h3>
                <p className="card-subtitle">Available 24/7</p>
                <a href="tel:+18005550199" className="card-link">+1 (800) 555-0199</a>
              </div>

              <div className="contact-card">
                <div className="card-icon">✉️</div>
                <h3>Email Us</h3>
                <p className="card-subtitle">We'll respond within 24 hours</p>
                <a href="mailto:support@justicelink.gov" className="card-link">support@justicelink.gov</a>
              </div>

              <div className="contact-card">
                <div className="card-icon">📍</div>
                <h3>Visit Us</h3>
                <p className="card-subtitle">New York, NY</p>
                <p className="card-address">112 Civic Center Way<br/>New York, NY 10007</p>
              </div>

              <div className="contact-card">
                <div className="card-icon">⏰</div>
                <h3>Hours</h3>
                <p className="card-subtitle">Open 24/7</p>
                <p className="card-hours">Monday - Sunday<br/>All Day</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="contact-section">
          <div className="container contact-layout">
            <div className="contact-intro">
              <p className="eyebrow eyebrow-dark">Contact Form</p>
              <h2>Send us a Message</h2>
              <p>Fill out the form below and we'll get back to you as soon as possible. For urgent matters, please call our hotline.</p>
              
              <div className="contact-features">
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <p><strong>Quick Response:</strong> Our team typically responds within 24 hours</p>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <p><strong>Secure:</strong> All messages are encrypted and confidential</p>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <p><strong>Expert Support:</strong> Connect with our specialized support team</p>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              {submitted && (
                <div className="success-message">
                  <div className="success-icon">✓</div>
                  <p><strong>Message Sent!</strong></p>
                  <p className="success-subtitle">Thank you for contacting us. We'll be in touch soon.</p>
                </div>
              )}

              {!submitted && (
                <>
                  <div className="form-group">
                    <label>Your Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Category</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                    >
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="report-issue">Report an Issue</option>
                      <option value="feedback">Feedback</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Subject</label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="What is this about?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group full-width">
                    <label>Message</label>
                    <textarea
                      name="message"
                      placeholder="Tell us more about your inquiry..."
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button className="btn btn-primary form-submit" type="submit">Send Message</button>
                </>
              )}
            </form>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section faq-contact-section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow eyebrow-dark">Common Questions</p>
              <h2>Frequently Asked Questions</h2>
            </div>

            <div className="faq-grid">
              <FAQItem 
                question="How quickly will I receive a response?"
                answer="Our support team aims to respond to all inquiries within 24 hours. For urgent matters, please call our hotline at +1 (800) 555-0199 available 24/7."
              />
              <FAQItem 
                question="Is my information secure?"
                answer="Yes. All information you submit through our contact form is encrypted and stored securely. We never share your personal information with third parties."
              />
              <FAQItem 
                question="Can I report a crime through this form?"
                answer="For reporting crimes, please use our main reporting form on the home page. This contact form is for general inquiries and support requests."
              />
              <FAQItem 
                question="What are your support hours?"
                answer="Our support team is available 24/7. You can call us anytime at +1 (800) 555-0199 or email us at support@justicelink.gov."
              />
              <FAQItem 
                question="Do you offer phone support?"
                answer="Yes! Call our public safety desk at +1 (800) 555-0199. We have trained specialists available to assist you."
              />
              <FAQItem 
                question="How can I provide feedback about the platform?"
                answer="We'd love to hear your feedback! Select 'Feedback' as the category in the contact form above, or email us directly."
              />
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="social-contact-section">
          <div className="container">
            <div className="social-content">
              <h2>Connect With Us</h2>
              <p>Follow us on social media for updates and community news</p>
              <div className="social-links-large">
                <a href="#facebook" className="social-btn facebook">
                  <span>f</span> Facebook
                </a>
                <a href="#twitter" className="social-btn twitter">
                  <span>𝕏</span> Twitter
                </a>
                <a href="#instagram" className="social-btn instagram">
                  <span>📷</span> Instagram
                </a>
                <a href="#linkedin" className="social-btn linkedin">
                  <span>in</span> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="map-section">
          <div className="container">
            <h2>Visit Our Office</h2>
            <div className="map-container">
              <div className="map-placeholder">
                <div className="map-icon">📍</div>
                <p>112 Civic Center Way<br/>New York, NY 10007</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-contact-section">
          <div className="container">
            <div className="cta-box">
              <div className="cta-copy">
                <h2>Ready to Get Started?</h2>
                <p>Join thousands of community members using JusticeLink to make a difference.</p>
              </div>
              <Link to="/" className="btn btn-primary btn-lg">Go to Home</Link>
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
    <div className="faq-item">
      <div className="faq-header" onClick={() => setIsOpen(!isOpen)}>
        <h3>{question}</h3>
        <span className="faq-toggle">{isOpen ? '−' : '+'}</span>
      </div>
      {isOpen && (
        <div className="faq-body">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default ContactPage;
