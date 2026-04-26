# Customization Guide - FB Chemstar Sciences Website

## Color Customization

### Change Primary Colors

Open `styles.css` and find this section at the top:

```css
:root {
    --primary-color: #1a5a96;      /* Main blue - used for headers, buttons */
    --secondary-color: #6ab731;    /* Green - used for accents, calls-to-action */
    --accent-color: #2d7ab8;       /* Light blue - used for hover effects */
    --text-dark: #333;
    --text-light: #666;
    --bg-light: #f5f5f5;
    --white: #ffffff;
    --border-radius: 8px;
    --box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
```

### Color Code Reference

- **#1a5a96** = Dark Blue (professional)
- **#6ab731** = Green (growth, agriculture)
- **#2d7ab8** = Light Blue (modern)

### Change All Colors to Green Theme

```css
:root {
    --primary-color: #2d7a3a;      /* Dark green */
    --secondary-color: #5cb85c;    /* Light green */
    --accent-color: #4cae4c;       /* Medium green */
}
```

### Change to Gold/Brown Theme

```css
:root {
    --primary-color: #8b6f47;      /* Brown */
    --secondary-color: #d4af37;    /* Gold */
    --accent-color: #a0826d;       /* Tan */
}
```

## Content Customization

### 1. Edit Home Section

In `index.html`, find:

```html
<section id="home" class="section home-section active">
    <div class="container">
        <div class="hero-content">
            <h2>Welcome to FB Chemstar Sciences</h2>
            <p class="hero-description">Providing innovative agricultural solutions for sustainable growth</p>
            <p class="location-badge">📍 Industrial Estate, Multan, Pakistan</p>
```

**You can change**:
- Heading text
- Description
- Location
- Button text

### 2. Edit Services

In `index.html`, find the services section and modify:

```html
<div class="service-card">
    <div class="service-icon">🌾</div>
    <h3>Crop Solutions</h3>
    <p>Premium fertilizers and crop protection products for maximum yield</p>
</div>
```

**You can change**:
- Service icons (use emojis)
- Service titles
- Service descriptions
- Add more services (duplicate the card)

### 3. Edit About Section

In `index.html`, find the about highlights and update:

```html
<div class="highlight-box">
    <h3>Our Mission</h3>
    <p>To provide superior agricultural products that enhance crop yield and soil health</p>
</div>
```

## Font Customization

### Change Font Family

In `styles.css`, find:

```css
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
```

Change to:

```css
body {
    font-family: 'Arial', sans-serif;           /* Simple and clean */
    /* OR */
    font-family: 'Georgia', serif;              /* Traditional */
    /* OR */
    font-family: 'Courier New', monospace;      /* Modern tech look */
}
```

### Change Font Sizes

In `styles.css`, adjust:

```css
.hero-content h2 {
    font-size: 48px;        /* Change this number */
}

.services-section h2 {
    font-size: 36px;        /* Change this number */
}
```

## Layout Customization

### Change Service Cards Layout

In `styles.css`, find:

```css
.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
}
```

Change to:

```css
/* 2 columns layout */
grid-template-columns: repeat(2, 1fr);

/* 3 columns layout */
grid-template-columns: repeat(3, 1fr);

/* Single column layout */
grid-template-columns: 1fr;
```

### Change Contact Form Layout

To make form single column:

```css
.contact-content {
    display: grid;
    grid-template-columns: 1fr;    /* Changed from 1fr 1fr */
    gap: 30px;
}
```

## Logo Customization

### Logo Size

In `styles.css`, find:

```css
.logo {
    width: 60px;
    height: 60px;
}
```

Change to larger size:

```css
.logo {
    width: 100px;
    height: 100px;
}
```

## Menu Customization

### Add More Menu Items

In `index.html`, find the menu section:

```html
<ul class="menu-list">
    <li><a href="#home" class="menu-link" onclick="navigateTo('home')">Home</a></li>
    <li><a href="#about" class="menu-link" onclick="navigateTo('about')">About</a></li>
    <li><a href="#services" class="menu-link" onclick="navigateTo('services')">Services</a></li>
    <li><a href="#contact" class="menu-link" onclick="navigateTo('contact')">Contact</a></li>
    <li class="separator"></li>
    <li><a href="#" class="menu-link staff-login" onclick="openStaffLogin(event)">Staff Login</a></li>
</ul>
```

To add a new menu item (e.g., "Blog"):

1. Create a new section in HTML
2. Add menu link:

```html
<li><a href="#blog" class="menu-link" onclick="navigateTo('blog')">Blog</a></li>
```

3. Add navigation function in `script.js` (it's already built to handle any section)

## Responsive Design Customization

### Adjust Mobile Breakpoints

In `styles.css`, find media queries:

```css
@media (max-width: 768px) {
    /* Tablet and below */
}

@media (max-width: 480px) {
    /* Mobile only */
}
```

### Change when menu becomes hamburger

In `styles.css`:

```css
@media (max-width: 768px) {
    /* Currently triggers at 768px */
    /* Change to 1024px or 900px as needed */
}
```

## Social Media Links (Optional)

To add social media in footer:

In `index.html`, find footer and add:

```html
<footer class="footer">
    <div class="container">
        <p>&copy; 2024 FB Chemstar Sciences. All rights reserved.</p>
        <p>Solutions for Growth | Industrial Estate, Multan, Pakistan</p>
        <div class="social-links">
            <a href="https://facebook.com/fbchemstarsciences" target="_blank">Facebook</a>
            <a href="https://instagram.com/fbchemstarsciences" target="_blank">Instagram</a>
            <a href="https://whatsapp.com/..." target="_blank">WhatsApp</a>
        </div>
    </div>
</footer>
```

Add to `styles.css`:

```css
.social-links {
    margin-top: 15px;
    display: flex;
    gap: 20px;
    justify-content: center;
}

.social-links a {
    color: var(--white);
    text-decoration: none;
    transition: opacity 0.3s ease;
}

.social-links a:hover {
    opacity: 0.8;
}
```

## Animation Customization

### Slow Down Animations

In `styles.css`, find:

```css
transition: all 0.3s ease;     /* 0.3 seconds */
```

Change to:

```css
transition: all 0.5s ease;     /* 0.5 seconds - slower */
transition: all 0.1s ease;     /* 0.1 seconds - faster */
```

### Adjust Hover Effects

In `styles.css`:

```css
.service-card:hover {
    transform: translateY(-8px);    /* Move up 8px on hover */
}
```

Change to:

```css
.service-card:hover {
    transform: translateY(-15px);   /* Move up more */
    transform: scale(1.05);         /* Grow slightly */
}
```

## Spacing Customization

### Increase/Decrease Padding

In `styles.css`:

```css
.section {
    padding: 60px 0;        /* Change this number */
}

.container {
    padding: 0 20px;        /* Change this number */
}
```

### Gap Between Elements

```css
.services-grid {
    gap: 30px;              /* Change this number */
}
```

## Button Customization

### Change Button Colors

In `styles.css`, find:

```css
.cta-button {
    background-color: var(--secondary-color);    /* Green */
    color: var(--white);
}

.cta-button:hover {
    background-color: #5a9325;
}
```

Change to:

```css
.cta-button {
    background-color: #e74c3c;    /* Red */
}

.cta-button:hover {
    background-color: #c0392b;
}
```

### Add Button Shadows

```css
.cta-button {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.cta-button:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}
```

## Testing Your Changes

1. **After each change**, save the file
2. **Refresh browser** (Ctrl+F5 or Cmd+Shift+R)
3. **Check mobile view**: Press F12 → Toggle device toolbar (Ctrl+Shift+M)
4. **Test on different browsers**: Chrome, Firefox, Safari, Edge

## Backup Before Changes

Always keep a backup copy of:
- `index.html`
- `styles.css`
- `script.js`

So you can restore if something breaks!

## Common Issues

### Changes Not Showing
- [ ] Did you save the file? (Ctrl+S)
- [ ] Did you refresh the browser? (Ctrl+F5)
- [ ] Check spelling and syntax

### Website Looks Broken
- [ ] Check browser console (F12 → Console)
- [ ] Look for red error messages
- [ ] Restore from backup

### Colors Look Wrong
- [ ] Make sure color codes are valid (#RRGGBB format)
- [ ] Check that all color codes are within the `:root` section
- [ ] Use color picker: https://www.color-hex.com

---

**Remember**: Always test changes before going live!

For help, contact:
- Email: fbchemstarsciences@gmail.com
- Phone: 03000198701
