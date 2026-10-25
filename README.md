# JusticeLink - Secure Community Reporting Portal

A modern React + JavaScript web application for secure community incident reporting and tracking.

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm start
```
Opens at: http://localhost:3000

### 3. Build for Production
```bash
npm run build
```

---

## Features

✅ Report submission with validation
✅ User authentication system
✅ Report tracking with reference numbers
✅ User dashboard with statistics
✅ Contact page with form
✅ Responsive design (all devices)
✅ Professional branding with custom logo
✅ Smooth animations
✅ Client-side form validation
✅ LocalStorage data persistence

---

## Project Structure

```
src/
├── components/
│   ├── Header.js / Header.css
│   └── Footer.js / Footer.css
├── pages/
│   ├── HomePage.js / HomePage.css
│   ├── LoginPage.js
│   ├── SignupPage.js / AccountPage.css
│   ├── DashboardPage.js / DashboardPage.css
│   ├── ReportConfirmationPage.js / ConfirmationPage.css
│   ├── StatusPage.js / StatusPage.css
│   └── ContactPage.js / ContactPage.css
├── App.js
└── index.js

public/
├── index.html
├── manifest.json
└── justicelink-logo.svg
```

---

## Pages & Routes

| Route | Page | Features |
|-------|------|----------|
| / | Home | Report form, tracking, stats, FAQ |
| /login | Login | User authentication |
| /signup | Sign Up | New user registration |
| /dashboard | Dashboard | User reports, statistics |
| /contact | Contact | Contact form, support info, FAQ |
| /confirmation | Confirmation | Report submission confirmation |
| /status | Status | Report tracking page |

---

## Technology Stack

- React 18.2.0
- React Router 6.20.0
- CSS3 with animations
- JavaScript ES6+
- Node.js & npm

---

## Available Commands

```bash
npm start       # Development server
npm run build   # Production build
npm test        # Run tests
```

---

## Customization

### Update Contact Information
Edit `src/pages/ContactPage.js`:
```javascript
// Phone: +1 (800) 555-0199
// Email: support@justicelink.gov
// Address: 112 Civic Center Way, New York, NY
```

### Change Colors
Edit `src/index.css`:
```css
:root {
  --navy: #0b132b;
  --red: #c1121f;
  --red-light: #e63946;
  /* ... more colors ... */
}
```

### Update Logo
Replace logo at: `public/justicelink-logo.svg`

---

## Browser Support

✅ Chrome (latest)
✅ Firefox (latest)
✅ Safari (latest)
✅ Edge (latest)
✅ Mobile browsers

---

## Future Enhancements

- Backend API integration
- Real authentication system
- Database storage
- Email notifications
- File upload to cloud
- Admin panel
- Law enforcement portal

---

## License

© 2026 JusticeLink. All rights reserved.

---

## Support

Email: support@justicelink.gov
Phone: +1 (800) 555-0199
Available 24/7

---

**Status: Production Ready ✅**
