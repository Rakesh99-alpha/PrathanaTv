// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 70;
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation link based on scroll position
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Prayer Request Form Submission
const prayerForm = document.getElementById('prayerForm');
prayerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        prayerRequest: document.getElementById('prayer-request').value
    };
    
    // Display success message
    alert('Thank you for your prayer request. Our prayer team will be praying for you.');
    
    // Reset form
    prayerForm.reset();
    
    // In a real application, you would send this data to a server
    console.log('Prayer Request:', formData);
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('contact-name').value,
        email: document.getElementById('contact-email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // Display success message
    alert('Thank you for your message. We will get back to you soon!');
    
    // Reset form
    contactForm.reset();
    
    // In a real application, you would send this data to a server
    console.log('Contact Message:', formData);
});

// Sermon Card Click Handler
document.querySelectorAll('.sermon-card').forEach(card => {
    card.addEventListener('click', () => {
        alert('This sermon video would play in a real implementation with a video player.');
    });
});

// Animate elements on scroll
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

// Observe all section elements for animation
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(44, 24, 16, 0.95)';
        navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'linear-gradient(135deg, #8B4513 0%, #A0522D 100%)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Update live viewer count (simulated)
function updateViewerCount() {
    const viewerElement = document.querySelector('.live-stats .stat:first-child span');
    if (viewerElement) {
        const currentCount = parseInt(viewerElement.textContent.replace(/[^\d]/g, ''));
        const variation = Math.floor(Math.random() * 20) - 10;
        const newCount = Math.max(100, currentCount + variation);
        viewerElement.textContent = `${newCount.toLocaleString()} viewers`;
    }
}

// Update viewer count every 5 seconds
setInterval(updateViewerCount, 5000);

// Log page load
console.log('PrathanaTv - Christian Channel Website Loaded Successfully');
console.log('May God bless you!');
