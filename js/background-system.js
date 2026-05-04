function initBackgroundSystem() {
    const canvas = document.getElementById('simulation-bg');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width, height, particles = [];
    let mouse = { x: -1000, y: -1000, pressed: false };
    let offset = { x: 0, y: 0, targetX: 0, targetY: 0 };

    // Set canvas dimensions correctly across DPI screens
    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        
        // Handle high DPI displays for crisp rendering
        const dpr = window.devicePixelRatio || 1;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.scale(dpr, dpr);
        
        canvas.style.width = width + 'px';
        canvas.style.height = height + 'px';
    }

    class Particle {
        constructor() {
            this.reset();
            // Start at random positions
            this.x = Math.random() * width;
            this.y = Math.random() * height;
        }
        
        reset() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            
            // Random direction, slow speed
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 0.3 + 0.1;
            this.vx = Math.cos(angle) * speed;
            this.vy = Math.sin(angle) * speed;
            
            this.size = Math.random() * 2 + 1; // Small dots/particles
            this.alpha = Math.random() * 0.5 + 0.1;
            
            // Randomly decide if this particle is slightly larger/glowy
            this.isStar = Math.random() > 0.9;
        }
        
        update() {
            this.x += this.vx;
            this.y += this.vy;

            // Mouse Repulsion (subtle)
            const dx = this.x - mouse.x;
            const dy = this.y - mouse.y;
            const dist = Math.sqrt(dx*dx + dy*dy);
            
            if (dist < 200) {
                const force = (200 - dist) / 200;
                // Move away from mouse
                this.x += (dx / dist) * force * 1.5;
                this.y += (dy / dist) * force * 1.5;
                
                // Temporarily increase brightness when near mouse
                this.currentAlpha = Math.min(this.alpha + force * 0.5, 1);
            } else {
                this.currentAlpha = this.alpha;
            }

            // Wrap around edges smoothly
            if (this.x < -10) this.x = width + 10;
            if (this.x > width + 10) this.x = -10;
            if (this.y < -10) this.y = height + 10;
            if (this.y > height + 10) this.y = -10;
        }
        
        draw() {
            const isLight = document.body.classList.contains('theme-light');
            const primaryColor = isLight ? '37, 99, 235' : '59, 130, 246'; // Primary RGB
            const hexPrimary = isLight ? '#2563EB' : '#3B82F6';

            ctx.beginPath();
            ctx.arc(this.x, this.y, this.isStar ? this.size * 1.5 : this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${primaryColor}, ${this.currentAlpha})`; // Primary color glow
            
            if (this.isStar) {
                ctx.shadowBlur = 10;
                ctx.shadowColor = hexPrimary;
            } else {
                ctx.shadowBlur = 0;
            }
            
            ctx.fill();
        }
    }

    // Connect particles with lines if they are close
    function drawConnections() {
        ctx.shadowBlur = 0; // Disable shadow for lines for performance
        
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = dx*dx + dy*dy; // avoid sqrt for performance
                
                // 10000 = 100px squared
                if (dist < 12000) {
                    const opacity = 1 - (dist / 12000);
                    const isLight = document.body.classList.contains('theme-light');
                    const strokeRGB = isLight ? '71, 85, 105' : '148, 163, 184'; // text-secondary

                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(${strokeRGB}, ${opacity * 0.15})`; // Subtle secondary color
                    ctx.lineWidth = 1;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }

    function init() {
        resize();
        particles = [];
        
        // Number of particles depends on screen size
        const numParticles = Math.min(Math.floor((width * height) / 10000), 100); 
        
        for (let i = 0; i < numParticles; i++) {
            particles.push(new Particle());
        }
    }

    function animate() {
        const isLight = document.body.classList.contains('theme-light');
        
        // Create trailing effect by filling with slight opacity
        ctx.fillStyle = isLight ? 'rgba(248, 250, 252, 0.3)' : 'rgba(11, 17, 32, 0.3)'; // Match background
        ctx.fillRect(0, 0, width, height);
        
        // Parallax Offset Application (Subtle for entire background if needed)
        offset.x += (offset.targetX - offset.x) * 0.05;
        offset.y += (offset.targetY - offset.y) * 0.05;
        
        drawConnections();
        
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        
        requestAnimationFrame(animate);
    }

    init();
    animate();

    // --- Interaction Listeners ---
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(init, 200); // Debounce resize
    });
    
    // Custom Cursor tracking
    document.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        
        const cursor = document.getElementById('cursor');
        if (cursor) {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        }
    });

    // Make cursor slightly larger when interacting with clickable elements
    const clickables = document.querySelectorAll('a, button, .project-card, .contact-card, .nav-link');
    const cursor = document.getElementById('cursor');
    
    clickables.forEach(el => {
        el.addEventListener('mouseenter', () => {
            if (cursor) cursor.classList.add('active');
        });
        el.addEventListener('mouseleave', () => {
            if (cursor) cursor.classList.remove('active');
        });
    });

    document.addEventListener('mousedown', () => mouse.pressed = true);
    document.addEventListener('mouseup', () => mouse.pressed = false);

    // Subtle Scene Drag (Parallax)
    document.addEventListener('mousemove', (e) => {
        if (mouse.pressed) {
            offset.targetX += e.movementX * 0.2;
            offset.targetY += e.movementY * 0.2;
            const main = document.getElementById('main-content');
            if (main) {
                // Keep the drag very subtle
                main.style.transform = `translate(${offset.x * 0.05}px, ${offset.y * 0.05}px)`;
            }
        }
    });
}
