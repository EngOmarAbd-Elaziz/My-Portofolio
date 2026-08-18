document.addEventListener('DOMContentLoaded', () => {
    if (typeof initBackgroundSystem === 'function') initBackgroundSystem();
    if (typeof initThemeToggle === 'function') initThemeToggle();
    if (typeof initScrollSystem === 'function') initScrollSystem();
    if (typeof initAnimations === 'function') initAnimations();
    if (typeof initController === 'function') initController();
    if (typeof initMobileMenu === 'function') initMobileMenu();
    if (typeof initTypewriter === 'function') initTypewriter();
    if (typeof initTooltipTap === 'function') initTooltipTap();
    
    // Make sure elements fade in properly on scroll
    setTimeout(() => {
        window.dispatchEvent(new Event('scroll'));
    }, 100);
});

function initTooltipTap() {
    const psBadge = document.querySelector('.badge-ps');
    if (psBadge) {
        psBadge.addEventListener('click', (e) => {
            if(window.innerWidth <= 768 || ('ontouchstart' in window)) {
                psBadge.classList.toggle('active-tooltip');
            }
        });
    }
}

function initMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');
    
    if (!menuBtn || !navLinks) return;

    menuBtn.addEventListener('click', () => {
        const navbar = document.getElementById('navbar');
        if (navbar) navbar.classList.toggle('nav-open');
        menuBtn.classList.toggle('active');
        navLinks.classList.toggle('show');
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            const navbar = document.getElementById('navbar');
            if (navbar) navbar.classList.remove('nav-open');
            menuBtn.classList.remove('active');
            navLinks.classList.remove('show');
        });
    });
}

function initTypewriter() {
    const textElement = document.querySelector('.typewriter-text');
    if (!textElement) return;
    
    const words = ["Game Developer", "Software Engineer", "Web Developer", "Content Creator", "Golden Gamer"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            textElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            textElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typingSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && charIndex === currentWord.length) {
            typingSpeed = 2000; // Pause at end before deleting
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typingSpeed = 500; // Pause before typing next word
        }
        
        setTimeout(type, typingSpeed);
    }
    
    type();
}
