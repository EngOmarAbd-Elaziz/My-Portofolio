/**
 * Creative Projects & Graphic Design Portfolio Showcase
 * Interactive Presentation Engine & Project Gallery Lightbox
 */

(function () {
    'use strict';

    // -------------------------------------------------------------
    // Data: 10 Slides of Graphic Design Portfolio
    // -------------------------------------------------------------
    const portfolioSlides = [
        {
            num: 1,
            title: "Creative Portfolio Cover",
            subtitle: "Omar Abdelaziz — Graphic Designer",
            src: "Assets/Creative Work/Creative Portfolio/1.png"
        },
        {
            num: 2,
            title: "About Me",
            subtitle: "Visual Philosophy & Creative Expression",
            src: "Assets/Creative Work/Creative Portfolio/2.png"
        },
        {
            num: 3,
            title: "Core Skills",
            subtitle: "Graphic Design, Branding, Direction & Storytelling",
            src: "Assets/Creative Work/Creative Portfolio/3.png"
        },
        {
            num: 4,
            title: "Creative Style",
            subtitle: "“Good design is not just seen, it's felt”",
            src: "Assets/Creative Work/Creative Portfolio/4.png"
        },
        {
            num: 5,
            title: "Project 01 — FCAI CU Game Dev Club",
            subtitle: "Community Visual Identity & Logo Design",
            src: "Assets/Creative Work/Creative Portfolio/5.png"
        },
        {
            num: 6,
            title: "Project 02 — Educational & Social Media",
            subtitle: "CODEX Thumbnails & Visual Communications",
            src: "Assets/Creative Work/Creative Portfolio/6.png"
        },
        {
            num: 7,
            title: "Project 03 — LUX Glow Brand Identity",
            subtitle: "Packaging Design, Product Labels & 3D Mockups",
            src: "Assets/Creative Work/Creative Portfolio/7.png"
        },
        {
            num: 8,
            title: "Professional Experience",
            subtitle: "NASBEE, FCAI Game Dev Club & Freelance",
            src: "Assets/Creative Work/Creative Portfolio/8.png"
        },
        {
            num: 9,
            title: "Let's Work Together",
            subtitle: "Contact, Inquiries & Behance Portfolio",
            src: "Assets/Creative Work/Creative Portfolio/9.png"
        },
        {
            num: 10,
            title: "Thank You",
            subtitle: "End of Presentation",
            src: "Assets/Creative Work/Creative Portfolio/10.png"
        }
    ];

    // -------------------------------------------------------------
    // Data: Creative Projects Gallery Showcase
    // -------------------------------------------------------------
    const creativeProjects = {
        'brand-identity': {
            title: "LUX Glow & Brand Identity",
            category: "Graphic Design",
            subtitle: "Visual Identity, 3D Product Mockups & Editorial Covers",
            description: "A complete visual identity and packaging project for LUX Glow, a personal care startup. Includes custom logo typography, product packaging labels, 3D underwater cosmetics mockups, and editorial novel cover designs with evocative silhouette storytelling.",
            type: "gallery",
            items: [
                {
                    src: "Assets/Creative Work/Graphic Design/lotionDesign.png",
                    title: "LUX Glow — 3D Body Lotion Packaging Mockup",
                    caption: "Luxury underwater product visualization with dynamic bubble splash physics and custom label typography."
                },
                {
                    src: "Assets/Creative Work/Graphic Design/Untitled-1_Cover Photo.png",
                    title: "Brand Header & Social Media Cover Banner",
                    caption: "Wide-format brand identity composition with clean geometric framing and harmonious color balance."
                },
                {
                    src: "Assets/Creative Work/Graphic Design/Untitled-1_Profile Picture.png",
                    title: "Brand Seal & Profile Identity",
                    caption: "Contrast-rich circular avatar identity for multi-platform digital branding."
                },
                {
                    src: "Assets/Creative Work/Graphic Design/Untitled-1_Profile Picture copy 4.png",
                    title: "Alternative Brand Mark Variant",
                    caption: "Monochrome study exploring minimalist line weights and negative space balance."
                },
                {
                    src: "Assets/Creative Work/Graphic Design/1743382894652.jpg",
                    title: "Book Cover Design — حياتي مع ابنة الياكوزا",
                    caption: "Editorial book cover featuring dramatic silhouette character composition, splatter motifs, and stylized typography."
                },
                {
                    src: "Assets/Creative Work/Graphic Design/1743382894683.jpg",
                    title: "Book Cover Design — بطل أريزونا",
                    caption: "Atmospheric novel cover with custom neon Arabic lettering and dynamic sky backdrop."
                },
                {
                    src: "Assets/Creative Work/Graphic Design/1743382894814.jpg",
                    title: "Book Cover Design — Dark Narrative Study",
                    caption: "Moody character illustration and textured digital artwork for narrative publishing."
                }
            ]
        },
        'video-editing': {
            title: "Signature Motion Graphic Reel",
            category: "Video Editing",
            subtitle: "Motion Graphics, Dynamic Typography & Animation",
            description: "A high-energy motion graphic piece showcasing fast-paced visual rhythm, kinetic typography, particle transitions, and stylized video editing. Crafted for personal branding and digital intro sequences.",
            type: "video",
            videoSrc: "Assets/Creative Work/Video Editing/Signature Vid (Motion Graphic).mp4",
            posterSrc: "Assets/Creative Work/Video Editing/video-poster.jpg"
        },
        'social-media': {
            title: "Educational Content & Social Media Campaigns",
            category: "Social Media",
            subtitle: "Event Workshop Posters & YouTube Educational Thumbnails",
            description: "A comprehensive series of digital graphics created for CODEX programming tutorials and the FCAI Game Development Club technical workshop series. Designed to make complex technical topics engaging, vibrant, and instantly recognizable across social feeds.",
            type: "gallery",
            items: [
                {
                    src: "Assets/Creative Work/Social Media/introducing my portfolio.png",
                    title: "Portfolio Reveal Campaign",
                    caption: "Hero campaign creative announcing the new developer & designer portfolio launch."
                },
                {
                    src: "Assets/Creative Work/Social Media/Workshop%231.png",
                    title: "FCAI GD Club — Intro to VFX & Shader Crafting",
                    caption: "Official event poster for technical workshop featuring Mahmoud Adel at CreativaHub Giza."
                },
                {
                    src: "Assets/Creative Work/Social Media/Workshop%232.png",
                    title: "FCAI GD Club Workshop Series #2",
                    caption: "High-contrast promotional visual highlighting speaker insights and event logistics."
                },
                {
                    src: "Assets/Creative Work/Social Media/Workshop%233.png",
                    title: "FCAI GD Club Workshop Series #3",
                    caption: "Modern typography layout tailored for Instagram and LinkedIn feed engagement."
                },
                {
                    src: "Assets/Creative Work/Social Media/Workshop%234.png",
                    title: "FCAI GD Club Workshop Series #4",
                    caption: "Final session promotional banner maintaining community visual identity consistency."
                },
                {
                    src: "Assets/Creative Work/Social Media/Lesson01_Thumbnail.jpeg",
                    title: "CODEX Lesson 01 — Programming Fundamentals",
                    caption: "Engaging YouTube tutorial thumbnail with high-visibility Arabic headline and coding visual cues."
                },
                {
                    src: "Assets/Creative Work/Social Media/Lesson02_Thumbnail.png",
                    title: "CODEX Lesson 02 — Functions & Flowcharts (JavaScript)",
                    caption: "Clean educational visual breaking down functions, flowchart logic, and coding basics."
                },
                {
                    src: "Assets/Creative Work/Social Media/Lesson03_Thumbnail.png",
                    title: "CODEX Lesson 03 — HTML5 & CSS3 Masterclass",
                    caption: "Bright, welcoming educational graphic designed for maximum click-through and clarity."
                },
                {
                    src: "Assets/Creative Work/Social Media/EditedGamerPoster.png",
                    title: "Gamer Community Promotional Poster",
                    caption: "Atmospheric esports-inspired promotional composition with glowing neon accents."
                },
                {
                    src: "Assets/Creative Work/Social Media/post1.png",
                    title: "Community Social Media Post",
                    caption: "Social media visual created for interactive community questions and tips."
                },
                {
                    src: "Assets/Creative Work/Social Media/wezza.png",
                    title: "Creative Illustrated Social Post",
                    caption: "Character-driven graphic for lighthearted digital storytelling and social engagement."
                }
            ]
        },
        'illustration': {
            title: "Digital Art & Typographic Lettering",
            category: "Illustration",
            subtitle: "Arabic Calligraphy, Dimensional Lettering & Vector Logos",
            description: "A showcase of custom vector lettering, expressive Arabic calligraphy, and official brand marks. Highlighting the intersection between contemporary graphic design, geometric vector art, and Arabic script heritage.",
            type: "gallery",
            items: [
                {
                    src: "Assets/Creative Work/Graphic Design/TypoDesigns-12.png",
                    title: "You're On Your Own Kid — Dimensional Typography",
                    caption: "Bold perspective typography poster exploring depth, shadow projection, and minimal human scale."
                },
                {
                    src: "Assets/Creative Work/Illustration/TypoDesigns-07.png",
                    title: "“I am an ARTIST” — Typographic Illustration",
                    caption: "Whimsical vector lettering integrating an artist beret, mustache, and paint palette directly into letterforms."
                },
                {
                    src: "Assets/Creative Work/Illustration/TypoDesigns-08.png",
                    title: "Arabic Lettering Composition #08",
                    caption: "Modern geometric interpretation of traditional Arabic calligraphic curves and dot balance."
                },
                {
                    src: "Assets/Creative Work/Illustration/TypoDesigns-09.png",
                    title: "Arabic Lettering Composition #09",
                    caption: "Experimental typographical form exploring fluid ligature connectivity and stroke weight."
                },
                {
                    src: "Assets/Creative Work/Illustration/TypoDesigns-10.png",
                    title: "Arabic Lettering Composition #10",
                    caption: "Minimalist Arabic typographic seal crafted with crisp vector precision."
                },
                {
                    src: "Assets/Creative Work/Illustration/LOGO.png",
                    title: "FCAI Cairo Game Development Club — Vector Logo",
                    caption: "Isometric controller emblem incorporating Unreal & Unity badges, pixel art lettering, and game dev symbolism."
                },
                {
                    src: "Assets/Creative Work/Illustration/4.png",
                    title: "CODEX — “Be the Great Programmer” Vector Logo",
                    caption: "Circuit-board integrated 'C' monogram for an educational tech platform."
                },
                {
                    src: "Assets/Creative Work/Illustration/3.png",
                    title: "CODEX Vector Identity (Inverted Theme)",
                    caption: "Clean high-contrast vector rendition optimized for light surfaces and apparel prints."
                },
                {
                    src: "Assets/Creative Work/Illustration/Untitled-1_Profile Picture copy.png",
                    title: "Minimalist Vector Portrait Study",
                    caption: "High-contrast vector silhouette capturing facial contour and glasses with modern restraint."
                },
                {
                    src: "Assets/Creative Work/Illustration/Untitled-1_Profile Picture copy 2.png",
                    title: "Vector Portrait Mark (Light Variant)",
                    caption: "Inverted line art portrait variant with refined vector details."
                },
                {
                    src: "Assets/Creative Work/Illustration/Untitled-1_Profile Picture copy 3.png",
                    title: "Vector Portrait Mark (Stylized Avatar)",
                    caption: "Stylized vector mark engineered for social media badges and personal signatures."
                }
            ]
        },
        'poster-design': {
            title: "Conceptual Arabic Poster Collection",
            category: "Graphic Design",
            subtitle: "Cultural Typography, Spiritual Reflections & Visual Storytelling",
            description: "A series of evocative poster designs merging expressive Arabic calligraphy with cinematic digital painting. Each poster visualizes a profound life reflection or quote through lighting, scale, and typographic harmony.",
            type: "gallery",
            items: [
                {
                    src: "Assets/Creative Work/Graphic Design/08.png",
                    title: "ولسوف يعطيك ربك فترضى",
                    caption: "Spiritual pathway poster with floating manuscripts, doves in flight, golden horizon light, and custom calligraphy."
                },
                {
                    src: "Assets/Creative Work/Graphic Design/06.png",
                    title: "في العزلة تسمع صوت الروح",
                    caption: "Minimalist architectural poster exploring light shafts, deep crimson tones, shadow typography, and contemplative solitude."
                },
                {
                    src: "Assets/Creative Work/Graphic Design/07.png",
                    title: "المستقبل مش غامض، هو انعكاس لأفعال الحاضر",
                    caption: "Cinematic study of a scholar illuminated by candlelight with looming shadowy figures and glowing typography."
                },
                {
                    src: "Assets/Creative Work/Graphic Design/05.png",
                    title: "اصنع طريقك حين يعجز الآخرون عن رؤيته",
                    caption: "Minimalist red and cream conceptual poster where an oversized red pencil draws a bridge across a chasm."
                },
                {
                    src: "Assets/Creative Work/Graphic Design/04-1.png",
                    title: "متخليش الدنيا تبكسلك",
                    caption: "Playful retro tech homage reinterpreting Michelangelo's Creation of Adam with an 8-bit pixelated pointer hand."
                }
            ]
        }
    };

    // -------------------------------------------------------------
    // Presentation Engine State
    // -------------------------------------------------------------
    let currentSlideIdx = 0;
    const totalSlides = portfolioSlides.length;
    let autoplayInterval = null;
    let isAutoplaying = false;

    // -------------------------------------------------------------
    // Initialization (supports both DOMContentLoaded & immediate ready)
    // -------------------------------------------------------------
    function initAllCreative() {
        initPresentationPlayer();
        initCreativeModals();
        initPdfModal();
        rebindCursorEffects();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAllCreative);
    } else {
        initAllCreative();
    }

    // -------------------------------------------------------------
    // Presentation Player Logic
    // -------------------------------------------------------------
    function initPresentationPlayer() {
        const player = document.getElementById('presentation-player');
        if (!player) return;

        const slidesContainer = document.getElementById('pres-slides-track');
        const thumbsContainer = document.getElementById('pres-thumbs-container');
        const currentCounter = document.getElementById('pres-counter-current');
        const totalCounter = document.getElementById('pres-counter-total');
        const slideTitleEl = document.getElementById('pres-slide-title');
        const slideSubtitleEl = document.getElementById('pres-slide-subtitle');
        const progressBar = document.getElementById('pres-progress-bar');
        const prevBtn = document.getElementById('pres-btn-prev');
        const nextBtn = document.getElementById('pres-btn-next');
        const fullscreenBtn = document.getElementById('pres-btn-fullscreen');
        const autoplayBtn = document.getElementById('pres-btn-autoplay');
        const launchFsBtn = document.getElementById('btn-present-fullscreen');

        if (totalCounter) totalCounter.textContent = String(totalSlides).padStart(2, '0');

        // Render Slides
        if (slidesContainer) {
            slidesContainer.innerHTML = '';
            portfolioSlides.forEach((slide, idx) => {
                const slideEl = document.createElement('div');
                slideEl.className = `pres-slide ${idx === 0 ? 'active' : ''}`;
                slideEl.dataset.index = idx;
                slideEl.setAttribute('role', 'group');
                slideEl.setAttribute('aria-roledescription', 'slide');
                slideEl.setAttribute('aria-label', `${slide.title} (${idx + 1} of ${totalSlides})`);

                const img = document.createElement('img');
                img.src = slide.src;
                img.alt = `${slide.title} - ${slide.subtitle}`;
                img.loading = idx < 2 ? 'eager' : 'lazy';
                if (idx === 0) img.setAttribute('fetchpriority', 'high');

                slideEl.appendChild(img);
                slidesContainer.appendChild(slideEl);
            });
        }

        // Render Thumbnails
        if (thumbsContainer) {
            thumbsContainer.innerHTML = '';
            portfolioSlides.forEach((slide, idx) => {
                const thumb = document.createElement('button');
                thumb.className = `pres-thumb ${idx === 0 ? 'active' : ''}`;
                thumb.dataset.index = idx;
                thumb.setAttribute('aria-label', `Jump to slide ${idx + 1}: ${slide.title}`);
                thumb.innerHTML = `
                    <img src="${slide.src}" alt="Thumb ${idx + 1}" loading="lazy">
                    <span class="pres-thumb-num">${String(idx + 1).padStart(2, '0')}</span>
                `;
                thumb.addEventListener('click', () => {
                    goToSlide(idx);
                });
                thumbsContainer.appendChild(thumb);
            });
        }

        function updateSlideUI() {
            const slide = portfolioSlides[currentSlideIdx];

            // Update Slide Classes
            const allSlides = slidesContainer.querySelectorAll('.pres-slide');
            allSlides.forEach((el, idx) => {
                el.classList.toggle('active', idx === currentSlideIdx);
                el.classList.toggle('prev-slide', idx < currentSlideIdx);
                el.classList.toggle('next-slide', idx > currentSlideIdx);
            });

            // Update Thumbnails
            if (thumbsContainer) {
                const allThumbs = thumbsContainer.querySelectorAll('.pres-thumb');
                allThumbs.forEach((t, idx) => {
                    t.classList.toggle('active', idx === currentSlideIdx);
                    if (idx === currentSlideIdx) {
                        t.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                    }
                });
            }

            // Update Counter & Titles
            if (currentCounter) currentCounter.textContent = String(currentSlideIdx + 1).padStart(2, '0');
            if (slideTitleEl) slideTitleEl.textContent = slide.title;
            if (slideSubtitleEl) slideSubtitleEl.textContent = slide.subtitle;

            // Update Progress Bar
            if (progressBar) {
                const pct = ((currentSlideIdx + 1) / totalSlides) * 100;
                progressBar.style.width = `${pct}%`;
            }

            // Preload next image
            if (currentSlideIdx + 1 < totalSlides) {
                const nextImg = new Image();
                nextImg.src = portfolioSlides[currentSlideIdx + 1].src;
            }
        }

        function goToSlide(index) {
            if (index < 0) index = 0;
            if (index >= totalSlides) index = totalSlides - 1;
            currentSlideIdx = index;
            updateSlideUI();
        }

        function nextSlide() {
            if (currentSlideIdx < totalSlides - 1) {
                goToSlide(currentSlideIdx + 1);
            } else {
                // Loop around if autoplaying
                if (isAutoplaying) goToSlide(0);
            }
        }

        function prevSlide() {
            if (currentSlideIdx > 0) {
                goToSlide(currentSlideIdx - 1);
            }
        }

        if (prevBtn) prevBtn.addEventListener('click', () => {
            stopAutoplay();
            prevSlide();
        });

        if (nextBtn) nextBtn.addEventListener('click', () => {
            stopAutoplay();
            nextSlide();
        });

        // Autoplay toggle
        function startAutoplay() {
            isAutoplaying = true;
            if (autoplayBtn) {
                autoplayBtn.innerHTML = '<i class="fa fa-pause"></i>';
                autoplayBtn.title = "Pause Autoplay";
                autoplayBtn.classList.add('active');
            }
            autoplayInterval = setInterval(() => {
                nextSlide();
            }, 4500);
        }

        function stopAutoplay() {
            isAutoplaying = false;
            if (autoplayInterval) {
                clearInterval(autoplayInterval);
                autoplayInterval = null;
            }
            if (autoplayBtn) {
                autoplayBtn.innerHTML = '<i class="fa fa-play"></i>';
                autoplayBtn.title = "Play Slideshow";
                autoplayBtn.classList.remove('active');
            }
        }

        if (autoplayBtn) {
            autoplayBtn.addEventListener('click', () => {
                if (isAutoplaying) {
                    stopAutoplay();
                } else {
                    startAutoplay();
                }
            });
        }

        // Fullscreen Handling
        function toggleFullscreen() {
            const showcase = document.getElementById('presentation-showcase');
            if (!showcase) return;

            if (!document.fullscreenElement && !showcase.classList.contains('is-fullscreen-fallback')) {
                if (showcase.requestFullscreen) {
                    showcase.requestFullscreen().catch(() => {
                        showcase.classList.add('is-fullscreen-fallback');
                        document.body.classList.add('pres-fullscreen-active');
                    });
                } else if (showcase.webkitRequestFullscreen) {
                    showcase.webkitRequestFullscreen();
                } else {
                    showcase.classList.add('is-fullscreen-fallback');
                    document.body.classList.add('pres-fullscreen-active');
                }
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen().catch(() => {});
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                }
                showcase.classList.remove('is-fullscreen-fallback');
                document.body.classList.remove('pres-fullscreen-active');
            }
        }

        if (fullscreenBtn) fullscreenBtn.addEventListener('click', toggleFullscreen);
        if (launchFsBtn) launchFsBtn.addEventListener('click', toggleFullscreen);

        document.addEventListener('fullscreenchange', () => {
            const showcase = document.getElementById('presentation-showcase');
            const fsIcon = fullscreenBtn ? fullscreenBtn.querySelector('.material-symbols-outlined') : null;
            if (document.fullscreenElement) {
                if (showcase) showcase.classList.add('is-fullscreen');
                if (fsIcon) fsIcon.textContent = 'fullscreen_exit';
            } else {
                if (showcase) showcase.classList.remove('is-fullscreen');
                if (fsIcon) fsIcon.textContent = 'fullscreen';
            }
        });

        // Touch Swipe
        let touchStartX = 0;
        let touchEndX = 0;

        player.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        player.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handlePlayerSwipe();
        }, { passive: true });

        function handlePlayerSwipe() {
            const threshold = 40;
            const diff = touchEndX - touchStartX;
            if (Math.abs(diff) > threshold) {
                stopAutoplay();
                if (diff < 0) {
                    nextSlide();
                } else {
                    prevSlide();
                }
            }
        }

        // Keyboard navigation for presentation
        window.addEventListener('keydown', (e) => {
            // Don't intercept if an input or another modal is active
            const activeModal = document.querySelector('.custom-modal.is-active');
            if (activeModal) return;

            // If player is in view or focused or in fullscreen
            const showcase = document.getElementById('presentation-showcase');
            const rect = showcase ? showcase.getBoundingClientRect() : null;
            const isInView = rect && (rect.top <= window.innerHeight && rect.bottom >= 0);
            const isFs = document.fullscreenElement || (showcase && showcase.classList.contains('is-fullscreen-fallback'));

            if (!isInView && !isFs) return;

            if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
                e.preventDefault();
                stopAutoplay();
                nextSlide();
            } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
                e.preventDefault();
                stopAutoplay();
                prevSlide();
            } else if (e.key === 'Home') {
                e.preventDefault();
                goToSlide(0);
            } else if (e.key === 'End') {
                e.preventDefault();
                goToSlide(totalSlides - 1);
            } else if (e.key === 'f' || e.key === 'F') {
                if (!e.ctrlKey && !e.metaKey) {
                    e.preventDefault();
                    toggleFullscreen();
                }
            } else if (e.key === 'Escape') {
                if (showcase && showcase.classList.contains('is-fullscreen-fallback')) {
                    showcase.classList.remove('is-fullscreen-fallback');
                    document.body.classList.remove('pres-fullscreen-active');
                }
            }
        });

        // Initial render
        updateSlideUI();
    }

    // -------------------------------------------------------------
    // Creative Grid Project Modals
    // -------------------------------------------------------------
    function initCreativeModals() {
        const modal = document.getElementById('creative-modal');
        if (!modal) return;

        const modalCloseBtn = modal.querySelector('.modal-close');
        const modalBackdrop = modal.querySelector('.modal-backdrop');
        const modalCategory = modal.querySelector('.modal-category');
        const modalTitle = modal.querySelector('.modal-title');
        const modalSubtitle = modal.querySelector('.modal-subtitle');
        const modalDesc = modal.querySelector('.modal-description');
        const modalMediaWrap = modal.querySelector('.modal-media-wrapper');
        const modalThumbsWrap = modal.querySelector('.modal-thumbs-wrapper');

        let currentProjectKey = null;
        let currentItemIdx = 0;

        function openProjectModal(key) {
            const project = creativeProjects[key];
            if (!project) return;

            currentProjectKey = key;
            currentItemIdx = 0;

            if (modalCategory) modalCategory.textContent = project.category;
            if (modalTitle) modalTitle.textContent = project.title;
            if (modalSubtitle) modalSubtitle.textContent = project.subtitle;
            if (modalDesc) modalDesc.textContent = project.description;

            renderModalMedia();
            modal.classList.add('is-active');
            document.body.style.overflow = 'hidden';
            rebindCursorEffects();
        }

        function closeModal() {
            modal.classList.remove('is-active');
            document.body.style.overflow = '';

            // Pause and reset any playing video
            const video = modal.querySelector('video');
            if (video) {
                video.pause();
                video.currentTime = 0;
            }
        }

        function renderModalMedia() {
            const project = creativeProjects[currentProjectKey];
            if (!project || !modalMediaWrap) return;

            modalMediaWrap.innerHTML = '';
            if (modalThumbsWrap) modalThumbsWrap.innerHTML = '';

            if (project.type === 'video') {
                // Video Player Mode
                if (modalThumbsWrap) modalThumbsWrap.style.display = 'none';

                const videoContainer = document.createElement('div');
                videoContainer.className = 'modal-video-container';
                videoContainer.innerHTML = `
                    <video controls playsinline preload="metadata" poster="${project.posterSrc}">
                        <source src="${project.videoSrc}" type="video/mp4">
                        Your browser does not support HTML5 video.
                    </video>
                    <div class="video-meta">
                        <span class="video-duration"><i class="fa fa-film"></i> Motion Graphics Sequence (1080p 60fps)</span>
                        <a href="${project.videoSrc}" download class="btn-video-download"><i class="fa fa-download"></i> Save Video</a>
                    </div>
                `;
                modalMediaWrap.appendChild(videoContainer);

                // Auto play video when opened
                const videoEl = videoContainer.querySelector('video');
                if (videoEl) {
                    videoEl.play().catch(() => {});
                }
            } else {
                // Image Gallery Mode
                if (modalThumbsWrap) modalThumbsWrap.style.display = 'flex';

                const currentItem = project.items[currentItemIdx];

                const galleryContainer = document.createElement('div');
                galleryContainer.className = 'modal-gallery-container';
                galleryContainer.innerHTML = `
                    <div class="gallery-viewer">
                        <img src="${currentItem.src}" alt="${currentItem.title}" class="gallery-main-img">
                        ${project.items.length > 1 ? `
                            <button class="gallery-nav gallery-prev" aria-label="Previous Image"><i class="fa fa-chevron-left"></i></button>
                            <button class="gallery-nav gallery-next" aria-label="Next Image"><i class="fa fa-chevron-right"></i></button>
                            <div class="gallery-counter">${currentItemIdx + 1} / ${project.items.length}</div>
                        ` : ''}
                    </div>
                    <div class="gallery-caption">
                        <h4>${currentItem.title}</h4>
                        <p>${currentItem.caption}</p>
                    </div>
                `;
                modalMediaWrap.appendChild(galleryContainer);

                // Attach Nav listeners
                const prev = galleryContainer.querySelector('.gallery-prev');
                const next = galleryContainer.querySelector('.gallery-next');
                if (prev) {
                    prev.addEventListener('click', () => {
                        currentItemIdx = (currentItemIdx - 1 + project.items.length) % project.items.length;
                        renderModalMedia();
                    });
                }
                if (next) {
                    next.addEventListener('click', () => {
                        currentItemIdx = (currentItemIdx + 1) % project.items.length;
                        renderModalMedia();
                    });
                }

                // Render Thumbnails
                if (modalThumbsWrap && project.items.length > 1) {
                    project.items.forEach((item, idx) => {
                        const thumb = document.createElement('button');
                        thumb.className = `modal-thumb ${idx === currentItemIdx ? 'active' : ''}`;
                        thumb.innerHTML = `<img src="${item.src}" alt="Thumb ${idx + 1}" loading="lazy">`;
                        thumb.addEventListener('click', () => {
                            currentItemIdx = idx;
                            renderModalMedia();
                        });
                        modalThumbsWrap.appendChild(thumb);
                    });
                }
            }
            rebindCursorEffects();
        }

        // Hook up trigger elements in .creative-grid
        const creativeItems = document.querySelectorAll('.creative-item[data-project]');
        creativeItems.forEach(item => {
            item.addEventListener('click', () => {
                const projectKey = item.dataset.project;
                if (projectKey) openProjectModal(projectKey);
            });
        });

        if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
        if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

        // Keyboard inside modal
        window.addEventListener('keydown', (e) => {
            if (!modal.classList.contains('is-active')) return;

            if (e.key === 'Escape') {
                closeModal();
            } else if (e.key === 'ArrowRight') {
                const project = creativeProjects[currentProjectKey];
                if (project && project.type === 'gallery' && project.items.length > 1) {
                    currentItemIdx = (currentItemIdx + 1) % project.items.length;
                    renderModalMedia();
                }
            } else if (e.key === 'ArrowLeft') {
                const project = creativeProjects[currentProjectKey];
                if (project && project.type === 'gallery' && project.items.length > 1) {
                    currentItemIdx = (currentItemIdx - 1 + project.items.length) % project.items.length;
                    renderModalMedia();
                }
            }
        });
    }

    // -------------------------------------------------------------
    // PDF Viewer Modal
    // -------------------------------------------------------------
    function initPdfModal() {
        const pdfModal = document.getElementById('pdf-modal');
        const openPdfBtn = document.getElementById('btn-open-pdf-modal');
        if (!pdfModal) return;

        const closeBtn = pdfModal.querySelector('.modal-close');
        const backdrop = pdfModal.querySelector('.modal-backdrop');
        const pdfFrame = document.getElementById('pdf-modal-frame');
        const pdfSrc = "Assets/Creative Work/Creative Portfolio/Creative Portfolio.pdf";

        function openPdf() {
            if (pdfFrame && !pdfFrame.src) {
                pdfFrame.src = pdfSrc;
            }
            pdfModal.classList.add('is-active');
            document.body.style.overflow = 'hidden';
            rebindCursorEffects();
        }

        function closePdf() {
            pdfModal.classList.remove('is-active');
            document.body.style.overflow = '';
        }

        if (openPdfBtn) openPdfBtn.addEventListener('click', openPdf);
        if (closeBtn) closeBtn.addEventListener('click', closePdf);
        if (backdrop) backdrop.addEventListener('click', closePdf);

        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && pdfModal.classList.contains('is-active')) {
                closePdf();
            }
        });
    }

    // -------------------------------------------------------------
    // Cursor Follower Rebind
    // -------------------------------------------------------------
    function rebindCursorEffects() {
        const cursor = document.getElementById('cursor');
        if (!cursor) return;

        const interactives = document.querySelectorAll(
            'a, button, .pres-nav-btn, .pres-control-btn, .pres-thumb, .creative-item, .modal-thumb, .gallery-nav, .btn, .cp-card, .cp-poster-card, .cp-timeline-item, .cp-subnav-link, .cp-skill-tag, .cp-contact-chip'
        );

        interactives.forEach(el => {
            el.removeEventListener('mouseenter', onMouseEnter);
            el.removeEventListener('mouseleave', onMouseLeave);
            el.addEventListener('mouseenter', onMouseEnter);
            el.addEventListener('mouseleave', onMouseLeave);
        });

        function onMouseEnter() {
            if (cursor) cursor.classList.add('active');
        }

        function onMouseLeave() {
            if (cursor) cursor.classList.remove('active');
        }
    }

    // Export API
    window.CreativePortfolio = {
        slides: portfolioSlides,
        projects: creativeProjects,
        rebindCursor: rebindCursorEffects
    };

})();

