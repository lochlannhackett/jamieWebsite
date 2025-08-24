// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Portfolio Filter Functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 10);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Lightbox Functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const closeLightbox = document.querySelector('.close-lightbox');

// Add transition styles to portfolio items
portfolioItems.forEach(item => {
    item.style.transition = 'all 0.3s ease';
});

// Open lightbox when portfolio item is clicked
portfolioItems.forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const title = item.querySelector('h3').textContent;
        const description = item.querySelector('p').textContent;
        
        if (lightbox && lightboxImg) {
            lightboxImg.src = img.src;
            lightboxCaption.innerHTML = `<h3>${title}</h3><p>${description}</p>`;
            lightbox.classList.add('active');
        }
    });
});

// Close lightbox
if (closeLightbox) {
    closeLightbox.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });
}

// Close lightbox when clicking outside the image
if (lightbox) {
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });
}

// Shop Filter and Sort Functionality
const shopFilterSelect = document.querySelector('.shop-filter-select');
const shopSortSelect = document.querySelector('.shop-sort-select');
const shopItems = document.querySelectorAll('.shop-item');

if (shopFilterSelect) {
    shopFilterSelect.addEventListener('change', (e) => {
        const filterValue = e.target.value;
        
        shopItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-type') === filterValue) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
}

if (shopSortSelect) {
    shopSortSelect.addEventListener('change', (e) => {
        const sortValue = e.target.value;
        const shopGrid = document.querySelector('.shop-grid');
        const itemsArray = Array.from(shopItems);
        
        switch(sortValue) {
            case 'price-low':
                itemsArray.sort((a, b) => {
                    const priceA = parseInt(a.getAttribute('data-price'));
                    const priceB = parseInt(b.getAttribute('data-price'));
                    return priceA - priceB;
                });
                break;
            case 'price-high':
                itemsArray.sort((a, b) => {
                    const priceA = parseInt(a.getAttribute('data-price'));
                    const priceB = parseInt(b.getAttribute('data-price'));
                    return priceB - priceA;
                });
                break;
            case 'newest':
                // In a real application, you'd sort by date
                itemsArray.reverse();
                break;
            default:
                // Featured - keep original order
                break;
        }
        
        // Re-append sorted items
        itemsArray.forEach(item => {
            shopGrid.appendChild(item);
        });
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation for images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('load', () => {
            img.style.opacity = '1';
        });
        
        // Set initial opacity
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
        
        // If image is already cached and loaded
        if (img.complete) {
            img.style.opacity = '1';
        }
    });
});

// Shop item interaction
const shopButtons = document.querySelectorAll('.shop-item .btn-primary');

shopButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        const item = e.target.closest('.shop-item');
        const itemName = item.querySelector('h3').textContent;
        const itemPrice = item.querySelector('.shop-item-price').textContent;
        
        // In a real application, this would add to cart or show details
        alert(`Viewing details for: ${itemName} - ${itemPrice}\n\nIn a production site, this would show more details or add to cart.`);
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe portfolio and shop items
document.querySelectorAll('.portfolio-item, .shop-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(item);
});