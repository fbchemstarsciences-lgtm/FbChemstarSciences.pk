# FB Chemstar Sciences - Website

## Overview
This is a professional, responsive website for FB Chemstar Sciences, an agriculture company. The website features:

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Three-Dot Menu Navigation**: Hamburger menu with Home, About, Services, Contact, and Staff Login
- **Staff Login System**: Secure staff login for content editing
- **Content Management**: Staff members can edit website sections
- **Modern UI**: Professional design with company branding

## Features

### 1. **Navigation Menu** (Three Dots ☰)
- **Home**: Welcome section with company overview
- **About**: Information about the company
- **Services**: Agricultural products and services offered
- **Contact**: Contact information and inquiry form
- **Staff Login**: Secure login for staff members only

### 2. **Company Information**
- Company Name: FB Chemstar Sciences
- Tagline: Solutions for Growth
- Location: Industrial Estate, Multan, Pakistan
- Phone: 03000198701
- Email: fbchemstarsciences@gmail.com

### 3. **Staff Login & Dashboard**
- Staff members can login with their credentials
- After login, they can access the staff dashboard
- Edit any website section (Home, About, Services, Contact)
- Save changes to content
- Changes are saved locally and persist on page reload

## Files Included

1. **index.html** - Main HTML file with structure and content
2. **styles.css** - Complete styling and responsive design
3. **script.js** - JavaScript for functionality
4. **README.md** - This file
5. **SETUP_INSTRUCTIONS.md** - Detailed setup guide

## How to Use

### Setup

1. Save all files in a folder on your computer
2. Replace the `logo.png` file with your company logo (60x60 pixels recommended)
3. Open `index.html` in a web browser

### Adding Staff Members

To add staff members who can edit content:

1. Open `script.js` in a text editor
2. Find the `STAFF_CREDENTIALS` section (around line 2-6):

```javascript
const STAFF_CREDENTIALS = {
    'staff': 'password123',  // Example staff member
    // Add more staff members like:
    // 'name': 'password'
};
```

3. Add your staff members like this:

```javascript
const STAFF_CREDENTIALS = {
    'ali': 'password123',
    'sara': 'mypassword456',
    'khan': 'secure789'
};
```

### Staff Login Process

1. Click the **three-dot menu** in the top-right
2. Scroll down to **"Staff Login"**
3. Enter staff name and password
4. After successful login, the **Staff Dashboard** appears
5. Click on a section to edit (Home, About, Services, Contact)
6. Make changes in the text area
7. Click **"Save Changes"** to update
8. Click **"Logout"** to exit

### Publishing/Deploying

To publish this website online:

1. **Using Free Hosting (GitHub Pages)**:
   - Create a GitHub account at github.com
   - Create a new repository named `username.github.io`
   - Upload all files to the repository
   - Your website will be live at `https://username.github.io`

2. **Using a Web Hosting Service**:
   - Upload files via FTP to your hosting provider
   - Access your domain name to view the website

3. **Local Testing**:
   - Simply open `index.html` in your browser
   - Works completely offline

## Customization

### Change Company Information

Edit the following in `index.html`:

1. **Company Name & Tagline**: Lines 31-32
2. **Phone Number**: Line 51
3. **Email**: Line 53
4. **Location**: Line 55

### Change Colors

Edit the color variables in `styles.css` (top of the file):

```css
:root {
    --primary-color: #1a5a96;      /* Blue */
    --secondary-color: #6ab731;    /* Green */
    --accent-color: #2d7ab8;       /* Lighter Blue */
}
```

### Modify Services

Edit the services in `index.html` around line 75-91

### Update Contact Information

Edit contact details in `index.html` around line 110-115

## Technical Details

### Storage
- Content changes are stored in browser's `localStorage`
- Changes persist even after closing the browser
- Each browser/device has separate storage
- To sync across devices, you'd need a backend server

### Security Note
- This is a client-side application
- Staff credentials are visible in the source code
- For production, consider using a backend server for security

### Browser Compatibility
- Works on all modern browsers (Chrome, Firefox, Safari, Edge)
- Internet Explorer not supported

## Troubleshooting

### Logo Not Showing
- Make sure `logo.png` is in the same folder as `index.html`
- Image should be at least 60x60 pixels

### Staff Login Not Working
- Check spelling of staff name (case-sensitive)
- Verify password matches exactly
- Make sure changes were saved in `script.js`

### Menu Not Opening
- Check if JavaScript is enabled in your browser
- Make sure all three files (.html, .css, .js) are in the same folder

## Mobile Responsive

The website automatically adapts to:
- **Desktop (1200px+)**: Full layout with all features
- **Tablet (768px-1199px)**: Optimized layout
- **Mobile (below 768px)**: Compact design, easy to use

## Next Steps

1. ✅ Add your logo (logo.png)
2. ✅ Add staff members to `script.js`
3. ✅ Test on different devices
4. ✅ Deploy online (GitHub Pages or Web Hosting)
5. ✅ Share with staff for content management

## Support

For questions or issues:
- Email: fbchemstarsciences@gmail.com
- Phone: 03000198701

---

**Created**: 2024
**Company**: FB Chemstar Sciences
**Location**: Industrial Estate, Multan, Pakistan
**Tagline**: Solutions for Growth
