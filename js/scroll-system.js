function initScrollSystem() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    const backToTopBtn = document.getElementById('back-to-top');
    const navContainer = document.querySelector('.nav-container');

    let isNavVertical = false;
    let isNavAnimating = false;

    window.addEventListener('scroll', () => {
        const scroll = window.scrollY;

        // Cinematic Navbar Logic (Desktop only)
        if (window.innerWidth > 992 && navbar && !navbar.classList.contains('hidden-nav')) {
            const shouldBeVertical = scroll > 150;
            if (shouldBeVertical !== isNavVertical && !isNavAnimating) {
                isNavAnimating = true;
                isNavVertical = shouldBeVertical;
                
                if (navContainer) navContainer.style.opacity = '0';
                
                setTimeout(() => {
                    if (shouldBeVertical) {
                        navbar.classList.remove('animate-up');
                        navbar.classList.add('animate-down');
                        navbar.classList.add('vertical-mode-content');
                    } else {
                        navbar.classList.remove('animate-down');
                        navbar.classList.add('animate-up');
                    }
                    
                    setTimeout(() => {
                        if (!shouldBeVertical) {
                            navbar.classList.remove('vertical-mode-content');
                        }
                        if (navContainer) navContainer.style.opacity = '1';
                        isNavAnimating = false;
                        
                        // Check if state changed during animation
                        const currentShouldBeVertical = window.scrollY > 150;
                        if (currentShouldBeVertical !== isNavVertical) {
                            window.dispatchEvent(new Event('scroll'));
                        }
                    }, 2000); 
                }, 300);
            }
        }
        
        // Back to top button visibility
        if (backToTopBtn) {
            if (scroll > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }

        // Active Nav Links logic based on scroll position
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scroll >= sectionTop - 250) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === current) {
                link.classList.add('active');
            }
        });
    });

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}
