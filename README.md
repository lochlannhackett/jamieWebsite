# Jamie Wong Illustration

A modern, responsive portfolio and e-commerce website for the beautiful illustrator Jamie Wong, built to showcase artwork with a warm, artsy aesthetic while demonstrating clean front-end development practices.

## 🌐 Live Site

Visit the site at [jamiewongillustration.eu](https://jamiewongillustration.eu)

## 📋 Project Overview

This is a multi-page portfolio website featuring custom design and interactive elements. The site demonstrates proficiency in modern web development fundamentals including responsive design, custom typography, CSS animations, and vanilla JavaScript DOM manipulation.

### Pages
- **Home/Portfolio**: Responsive grid gallery with hover effects and parallax scrolling
- **About**: Artist biography and background
- **Shop**: E-commerce functionality (WIP)

## 🎨 Technical Features

- **Responsive Design**: Mobile-first approach with breakpoints for tablets and desktop
- **Custom Typography**: Web font integration with fallback system fonts
- **CSS Grid & Flexbox**: Modern layout techniques for flexible, maintainable designs
- **Vanilla JavaScript**: No framework dependencies - pure DOM manipulation
- **CSS Animations**: Smooth transitions, hover effects, and keyframe animations
- **Performance Optimized**: Efficient image loading with fallback placeholders
- **Cross-browser Compatible**: Works across modern browsers
- **Semantic HTML**: Accessible markup following web standards

## 🛠️ Tech Stack

- **HTML5**: Semantic markup structure
- **CSS3**: Custom styling with Grid, Flexbox, transforms, and animations
- **JavaScript (ES6+)**: Event handling, scroll effects, and interactive elements
- **GitHub Pages**: Static site hosting with custom domain
- **Git**: Version control with clean commit history

## 📁 Project Structure

```
jamieWebsite/
├── index.html          # Home page with portfolio gallery
├── about.html          # About page
├── shop.html           # Shop page (WIP)
├── styles.css          # Global styles
├── script.js           # Interactive functionality
├── font2025.ttf        # Custom font
├── images/             # Image assets
│   ├── Portfolio/      # Artwork images
│   ├── IMG_7952.png    # Logo
│   ├── Title page.png  # Hero image
│   ├── thankyou.png    # Footer graphic
│   └── ...
├── CNAME               # Custom domain configuration
└── README.md           # Documentation
```

## 💻 Development Highlights

### Responsive Grid System
Implemented a flexible CSS Grid layout that adapts from single-column mobile view to multi-column desktop layout:
```css
.art-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 60px;
}
```

### Interactive Scroll Effects
Custom parallax scrolling implementation using vanilla JavaScript for smooth, performance-conscious animations.

### Custom Design System
Cohesive color palette (#8b4513, #d2691e) and typography applied consistently across all pages.

## 📧 Contact

For artwork enquiries, purchases, or commissions:
**jamiewongillustration@gmail.com**

## 🚧 Future Development

- [ ] Complete shop functionality with e-commerce integration
- [ ] Shopping cart and checkout system
- [ ] Payment processing integration (Stripe/PayPal)
- [ ] Product management system
- [ ] Image lightbox/gallery viewer
- [ ] SEO optimization and meta tags
- [ ] Analytics integration

## 📝 License

All artwork and content © Jamie Wong. All rights reserved.

Website code and implementation demonstrate web development skills for portfolio purposes.

---

*Built with care for Jamie Wong Illustration*
