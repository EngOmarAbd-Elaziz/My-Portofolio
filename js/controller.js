function initController() {
    const controllerWrapper = document.getElementById('controller-wrapper');
    const introOverlay = document.getElementById('intro-overlay');
    const navbar = document.getElementById('navbar');
    
    if (!controllerWrapper || !introOverlay) return;

    // After drop animation finishes, make it ready
    setTimeout(() => {
        controllerWrapper.classList.add('ready');
    }, 1500); // 1.5s matches the dropIn animation duration
    
    // Clicking anywhere on the wrapper starts the experience
    controllerWrapper.addEventListener('click', () => {
        // Zoom out controller slightly before lifting curtain
        controllerWrapper.style.transform = 'scale(1.5) translateY(50px)';
        controllerWrapper.style.opacity = '0';
        controllerWrapper.style.transition = 'all 0.8s ease';
        
        setTimeout(() => {
            // Lift curtain
            introOverlay.classList.add('hidden');
            
            // Allow scrolling
            document.body.classList.remove('no-scroll');
            
            // Show navbar
            if (navbar) {
                navbar.classList.remove('hidden-nav');
            }
            
            // Trigger Hero Animation
            const heroPanel = document.querySelector('.hero-section');
            if (heroPanel) {
                setTimeout(() => heroPanel.classList.add('active'), 500);
            }
            
            // Destroy intro overlay from DOM after transition to avoid blocking
            setTimeout(() => {
                introOverlay.remove();
            }, 1000);
            
        }, 600); 
    });
}
