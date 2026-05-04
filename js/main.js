document.addEventListener('DOMContentLoaded', () => {
    initBackgroundSystem();
    initThemeToggle();
    initScrollSystem();
    initAnimations();
    initController();
    initMobileMenu();
    initTypewriter();
    
    // Make sure elements fade in properly on scroll
    setTimeout(() => {
        window.dispatchEvent(new Event('scroll'));
    }, 100);
});

function initMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');
    
    if (!menuBtn || !navLinks) return;

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        navLinks.classList.toggle('show');
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
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
