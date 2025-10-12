// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            const navLinks = document.querySelector('.nav-links');
            if (navLinks) {
                navLinks.style.display = 'none';
            }
        }
    });
});

// Fade in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Mobile menu toggle
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        if (navLinks) {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        }
    });
}

// Header background change on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (header) {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    }
});

// Typing effect for hero section
const subtitle = document.querySelector('.hero-content .subtitle');
if (subtitle) {
    const text = subtitle.textContent;
    subtitle.textContent = '';

    setTimeout(() => {
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                subtitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        typeWriter();
    }, 1000);
}

// Add responsive styling for mobile menu
if (window.innerWidth <= 768) {
    if (navLinks) {
        navLinks.style.display = 'none';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '70px';
        navLinks.style.left = '0';
        navLinks.style.right = '0';
        navLinks.style.background = 'rgba(255, 255, 255, 0.98)';
        navLinks.style.flexDirection = 'column';
        navLinks.style.padding = '20px';
        navLinks.style.gap = '15px';
        navLinks.style.zIndex = '999';
        navLinks.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
}

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        if (navLinks) {
            navLinks.style.display = 'flex';
            navLinks.style.position = 'relative';
        }
        if (mobileMenu) {
            mobileMenu.style.display = 'none';
        }
    } else {
        if (mobileMenu) {
            mobileMenu.style.display = 'block';
        }
        if (navLinks && navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        }
    }
});