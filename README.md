# AdventureAI Corporation Official Website

## Project Overview

This is the official website of AdventureAI Corporation, featuring responsive design that supports both desktop and mobile access.

## Main Features

- **Responsive Design**: Supports various screen sizes from mobile to desktop devices
- **Modern UI**: Uses SF Pro font and modern design language
- **Multi-language Support**: Supports Japanese and English (expandable)
- **Company Introduction**: Includes company profile, business philosophy, and other information
- **Contact Information**: Provides complete contact details

## Technical Features

### Responsive Design Improvements

1. **Fixed PC Display Issues**:
   - Removed fixed width limitations (2880px)
   - Used `width=device-width` viewport setting
   - Replaced `vw` units with more reasonable `rem` and `clamp()` functions
   - Optimized maximum width settings for layout containers

2. **Complete Mobile Adaptation**:
   - Added media queries for 900px and 600px breakpoints
   - Mobile navigation menu (hamburger menu)
   - Responsive font sizes using `clamp()` function
   - Optimized image display and background images

3. **Image Optimization**:
   - Background images use `background-size: cover` and `background-position: center`
   - Added image lazy loading functionality
   - Fade-in effect for image loading

### File Structure

```
AdventureAiWebSite/
├── index.html          # Homepage
├── company.html        # Company introduction page
├── style.css           # Stylesheet
├── script.js           # JavaScript functionality
├── figures/            # Image resources
│   ├── logo.png
│   ├── city.png
│   ├── people.jpg
│   └── night.jpg
└── README.md           # Project documentation
```

## Browser Support

- Chrome (Recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Usage

1. Open `index.html` directly in a browser
2. Or run the project using a local server

## Responsive Breakpoints

- **Desktop**: > 900px
- **Tablet**: 600px - 900px
- **Mobile**: < 600px

## Major Improvements

### 1. Fixed PC Display Issues
- Resolved display anomalies under different browser window sizes
- Removed fixed width limitations, using responsive layout
- Optimized font sizes and spacing

### 2. Mobile Adaptation
- Added mobile navigation menu
- Optimized mobile layout and font sizes
- Improved touch experience

### 3. Image Optimization
- Background images automatically adapt to screen size
- Added image loading optimization
- Support for high-resolution screens

## Development Notes

The project is developed using pure HTML, CSS, and JavaScript, requiring no build tools. All styles use modern CSS features to ensure good browser compatibility.

## Contact Information

- Email: team@adventureai.jp
- Address: 〒150-0031 18-4 Sakuragaoka-cho, Shibuya-ku, Tokyo

© 2025 AdventureAI. All rights reserved.