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
            if (scroll > 150 && !isNavVertical && !isNavAnimating) {
                isNavVertical = true;
                isNavAnimating = true;
                
                // Fade out horizontal content
                if(navContainer) navContainer.style.opacity = '0';
                
                setTimeout(() => {
                    navbar.classList.remove('animate-up');
                    navbar.classList.add('animate-down');
                    navbar.classList.add('vertical-mode-content');
                    
                    // Fade in the vertical content exactly when expansion finishes
                    setTimeout(() => {
                        if(navContainer) navContainer.style.opacity = '1';
                        isNavAnimating = false;
                    }, 2000); // 2s matches CSS animation
                }, 300); // short delay to fade out text first

            } else if (scroll <= 150 && isNavVertical && !isNavAnimating) {
                isNavVertical = false;
                isNavAnimating = true;
                
                // Fade out vertical content
                if(navContainer) navContainer.style.opacity = '0';
                
                setTimeout(() => {
                    navbar.classList.remove('animate-down');
                    navbar.classList.add('animate-up');
                    
                    // Restore horizontal layout when returning to center
                    setTimeout(() => {
                        navbar.classList.remove('vertical-mode-content');
                        if(navContainer) navContainer.style.opacity = '1';
                        isNavAnimating = false;
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
