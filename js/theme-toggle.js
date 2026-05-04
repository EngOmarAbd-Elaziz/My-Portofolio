function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;
    
    // Check local storage for preference
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('theme-light');
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('theme-light');
        const isLight = document.body.classList.contains('theme-light');
        
        // Save preference
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        
        // Dispatch event for other scripts to listen to (like background system)
        window.dispatchEvent(new Event('themeChanged'));
    });
}
