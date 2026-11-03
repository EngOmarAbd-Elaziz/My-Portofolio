/**
 * Creative Portfolio — Interactive Lightbox & Intro Animation
 * Robust, resilient media viewer supporting images, videos, and dynamic DOM states.
 */

(function () {
    'use strict';

    // Auto-initialize when ready or immediately if already loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAll);
    } else {
        initAll();
    }

    function initAll() {
        initCreativeIntro();
        initCreativeLightbox();
    }

    /**
     * Creative Intro Animation (Stylus / Pen Tool & Palette Drop-In)
     */
    function initCreativeIntro() {
        const introOverlay = document.getElementById('creative-intro-overlay');
        const toolWrapper = document.getElementById('creative-tool-wrapper');
        const navbar = document.getElementById('navbar');

        if (!introOverlay || !toolWrapper) {
            document.body.classList.remove('no-scroll');
            if (navbar) navbar.classList.remove('hidden-nav');
            return;
        }

        // Ready state trigger after drop-in animation (1.5s)
        setTimeout(() => {
            if (toolWrapper) toolWrapper.classList.add('ready');
        }, 1500);

        let activated = false;
        const activatePortfolio = () => {
            if (activated) return;
            activated = true;

            toolWrapper.style.transform = 'scale(1.4) translateY(40px)';
            toolWrapper.style.opacity = '0';
            toolWrapper.style.transition = 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)';

            setTimeout(() => {
                introOverlay.classList.add('hidden');
                document.body.classList.remove('no-scroll');

                if (navbar) {
                    navbar.classList.remove('hidden-nav');
                }

                setTimeout(() => {
                    introOverlay.remove();
                }, 1000);
            }, 450);
        };

        toolWrapper.addEventListener('click', activatePortfolio);
        introOverlay.addEventListener('click', (e) => {
            if (e.target === introOverlay || e.target.closest('.creative-ripple-container')) {
                activatePortfolio();
            }
        });
    }

    /**
     * Fullscreen Interactive Lightbox for Images and Videos
     */
    function initCreativeLightbox() {
        const lightbox = document.getElementById('creative-lightbox');
        if (!lightbox) return;

        const mediaContainer = lightbox.querySelector('.creative-lightbox-media');
        const titleEl = lightbox.querySelector('.creative-lightbox-title');
        const categoryEl = lightbox.querySelector('.creative-lightbox-category');
        const subtitleEl = lightbox.querySelector('.creative-lightbox-subtitle');
        const downloadBtn = lightbox.querySelector('.creative-lightbox-download');
        const closeBtn = lightbox.querySelector('.creative-lightbox-close');
        const backdrop = lightbox.querySelector('.creative-lightbox-backdrop');
        const prevBtn = lightbox.querySelector('.creative-lightbox-prev');
        const nextBtn = lightbox.querySelector('.creative-lightbox-next');

        const playlist = [];
        let activeIndex = 0;

        // 1. Scan and register all images in bento galleries and natural items
        const bentoItems = Array.from(document.querySelectorAll('.bento-item, .natural-item'));
        bentoItems.forEach((item) => {
            const img = item.querySelector('img');
            if (!img) return;

            const title = item.querySelector('h3') ? item.querySelector('h3').textContent.trim() : (img.getAttribute('alt') || 'Creative Artwork');
            const subtitle = item.querySelector('p') ? item.querySelector('p').textContent.trim() : '';
            const category = item.querySelector('.creative-category') ? item.querySelector('.creative-category').textContent.trim() : 'Graphic Design';
            const src = img.getAttribute('src');

            const itemIndex = playlist.length;
            playlist.push({
                type: 'image',
                src: src,
                alt: img.getAttribute('alt') || title,
                title: title,
                subtitle: subtitle,
                category: category
            });

            // Store index directly on element
            item.setAttribute('data-lightbox-index', String(itemIndex));
            item.setAttribute('tabindex', '0');
            item.setAttribute('role', 'button');
            item.setAttribute('aria-label', `View ${title} fullscreen`);

            item.addEventListener('click', (e) => {
                // If user clicked a direct link inside (e.g. an a tag), don't intercept unless intended
                if (e.target.tagName.toLowerCase() === 'a' && !e.target.classList.contains('featured-btn')) {
                    return;
                }
                openLightbox(itemIndex);
            });

            item.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openLightbox(itemIndex);
                }
            });
        });

        // 2. Scan and register all videos (.bento-video-wrapper)
        const videoWrappers = Array.from(document.querySelectorAll('.bento-video-wrapper, .natural-video-item'));
        videoWrappers.forEach((wrapper) => {
            const video = wrapper.querySelector('video');
            const source = wrapper.querySelector('source');
            if (!video) return;

            const src = source ? source.getAttribute('src') : video.getAttribute('src');
            if (!src) return;

            const title = wrapper.querySelector('h4') ? wrapper.querySelector('h4').textContent.trim() : 'Motion Graphic Reel';
            const subtitle = wrapper.querySelector('p') ? wrapper.querySelector('p').textContent.trim() : '';
            const poster = video.getAttribute('poster') || '';

            const videoIndex = playlist.length;
            playlist.push({
                type: 'video',
                src: src,
                poster: poster,
                title: title,
                subtitle: subtitle,
                category: 'Motion Graphics'
            });

            // Add or attach click handler to video caption button and video poster
            const caption = wrapper.querySelector('.bento-video-caption, .natural-video-caption');
            if (caption) {
                // Check if button already exists
                let fsBtn = caption.querySelector('.btn-lightbox-video');
                if (!fsBtn) {
                    fsBtn = document.createElement('button');
                    fsBtn.type = 'button';
                    fsBtn.className = 'canva-social-pill btn-lightbox-video';
                    fsBtn.style.cursor = 'pointer';
                    fsBtn.innerHTML = '<i class="fa fa-arrows-alt"></i> Fullscreen Lightbox';
                    caption.appendChild(fsBtn);
                }
                fsBtn.onclick = (e) => {
                    e.preventDefault();
                    openLightbox(videoIndex);
                };
            }

            // Also double-click or middle-click video to open in lightbox
            video.addEventListener('dblclick', (e) => {
                e.preventDefault();
                openLightbox(videoIndex);
            });
        });

        // Move lightbox to document.body if not already a direct child.
        // This escapes any stacking context created by ancestor elements
        // (e.g. creative-portfolio-page with position:relative + z-index)
        // so the lightbox appears above the navbar regardless of page structure.
        if (lightbox.parentElement !== document.body) {
            document.body.appendChild(lightbox);
        }

        // Open Lightbox
        function openLightbox(index) {
            if (index < 0 || index >= playlist.length) index = 0;
            activeIndex = index;
            renderMedia();

            // Ensure lightbox is a direct child of body each time (resilient)
            if (lightbox.parentElement !== document.body) {
                document.body.appendChild(lightbox);
            }

            lightbox.classList.add('active');
            lightbox.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';

            // Ensure cursor follower remains visible and refreshed
            const cursor = document.getElementById('cursor');
            if (cursor) {
                cursor.style.display = 'block';
                cursor.style.opacity = '1';
            }
        }

        // Close Lightbox
        function closeLightbox() {
            lightbox.classList.remove('active');
            lightbox.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';

            if (mediaContainer) {
                const playingVideo = mediaContainer.querySelector('video');
                if (playingVideo) {
                    playingVideo.pause();
                    playingVideo.src = '';
                }
                mediaContainer.innerHTML = '';
            }
        }

        // Render current item in playlist
        function renderMedia() {
            if (!playlist[activeIndex] || !mediaContainer) return;
            const item = playlist[activeIndex];

            if (categoryEl) categoryEl.textContent = item.category || 'Artwork';
            if (titleEl) titleEl.textContent = item.title || 'Creative Project';
            if (subtitleEl) subtitleEl.textContent = item.subtitle || '';

            if (downloadBtn) {
                downloadBtn.setAttribute('href', item.src);
                downloadBtn.setAttribute('download', '');
            }

            // Cleanup previous video if running
            const prevVideo = mediaContainer.querySelector('video');
            if (prevVideo) {
                prevVideo.pause();
                prevVideo.src = '';
            }

            mediaContainer.innerHTML = '';

            if (item.type === 'image') {
                const img = document.createElement('img');
                img.src = item.src;
                img.alt = item.alt || item.title;
                img.loading = 'eager';
                mediaContainer.appendChild(img);
            } else if (item.type === 'video') {
                const video = document.createElement('video');
                video.controls = true;
                video.autoplay = true;
                video.playsInline = true;
                video.preload = 'auto';
                if (item.poster) video.poster = item.poster;

                const source = document.createElement('source');
                source.src = item.src;
                source.type = 'video/mp4';
                video.appendChild(source);
                mediaContainer.appendChild(video);
            }
        }

        function nextMedia() {
            if (playlist.length <= 1) return;
            activeIndex = (activeIndex + 1) % playlist.length;
            renderMedia();
        }

        function prevMedia() {
            if (playlist.length <= 1) return;
            activeIndex = (activeIndex - 1 + playlist.length) % playlist.length;
            renderMedia();
        }

        if (closeBtn) closeBtn.onclick = closeLightbox;
        if (backdrop) backdrop.onclick = closeLightbox;
        if (nextBtn) nextBtn.onclick = nextMedia;
        if (prevBtn) prevBtn.onclick = prevMedia;

        // Keyboard navigation
        window.addEventListener('keydown', (e) => {
            if (!lightbox.classList.contains('active')) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') nextMedia();
            if (e.key === 'ArrowLeft') prevMedia();
        });

        // Touch swipe support for mobile
        let touchStartX = 0;
        let touchEndX = 0;
        lightbox.addEventListener('touchstart', (e) => {
            if (e.changedTouches.length) {
                touchStartX = e.changedTouches[0].screenX;
            }
        }, { passive: true });

        lightbox.addEventListener('touchend', (e) => {
            if (e.changedTouches.length) {
                touchEndX = e.changedTouches[0].screenX;
                const diff = touchEndX - touchStartX;
                if (diff > 60) prevMedia();
                else if (diff < -60) nextMedia();
            }
        }, { passive: true });

        // Export globally for programmatic calls
        window.CreativeLightbox = {
            open: openLightbox,
            close: closeLightbox,
            playlist: playlist
        };
    }

})();
