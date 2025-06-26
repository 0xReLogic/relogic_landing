// Clean Landing Page Functionality

// Enhanced Loading Screen with Progress
class LoadingScreen {
    constructor() {
        this.loadingScreen = document.getElementById('loadingScreen');
        this.progressBar = document.getElementById('progressBar');
        this.loadingMessage = document.getElementById('loadingMessage');
        this.progress = 0;
        this.messages = [
            'Initializing...',
            'Loading components...',
            'Preparing interface...',
            'Almost ready...'
        ];
        this.init();
    }

    init() {
        this.simulateLoading();
    }

    simulateLoading() {
        const interval = setInterval(() => {
            this.progress += Math.random() * 15 + 5;
            
            if (this.progress >= 100) {
                this.progress = 100;
                clearInterval(interval);
                setTimeout(() => this.hide(), 500);
            }
            
            this.updateProgress();
        }, 200);
    }

    updateProgress() {
        if (this.progressBar) {
            this.progressBar.style.width = `${this.progress}%`;
        }
        
        if (this.loadingMessage) {
            const messageIndex = Math.floor((this.progress / 100) * (this.messages.length - 1));
            this.loadingMessage.textContent = this.messages[messageIndex];
        }
    }

    hide() {
        if (this.loadingScreen) {
            this.loadingScreen.style.opacity = '0';
            this.loadingScreen.style.transform = 'scale(0.9)';
            setTimeout(() => {
                this.loadingScreen.style.display = 'none';
                document.body.style.overflow = 'visible';
            }, 500);
        }
    }
}

// Enhanced Scroll Progress with Smooth Animation
class ScrollProgress {
    constructor() {
        this.createProgressBar();
        this.init();
    }

    createProgressBar() {
        const existing = document.getElementById('scrollProgress');
        if (!existing) {
            const progressBar = document.createElement('div');
            progressBar.className = 'scroll-progress';
            progressBar.id = 'scrollProgress';
            progressBar.innerHTML = '<div class="scroll-progress-bar"></div>';
            document.body.insertBefore(progressBar, document.body.firstChild);
        }
        this.progressBar = document.querySelector('.scroll-progress-bar');
    }

    init() {
        let ticking = false;
        
        const updateProgress = () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
            
            if (this.progressBar) {
                this.progressBar.style.width = `${scrollPercent}%`;
                
                // Add glow effect when scrolling
                if (scrollPercent > 10) {
                    this.progressBar.style.boxShadow = `0 0 20px rgba(99, 102, 241, ${scrollPercent / 100})`;
                }
            }
            
            ticking = false;
        };

        const requestTick = () => {
            if (!ticking) {
                requestAnimationFrame(updateProgress);
                ticking = true;
            }
        };

        window.addEventListener('scroll', requestTick, { passive: true });
    }
}

// Enhanced Analytics Manager
class AnalyticsManager {
    constructor() {
        this.events = [];
        this.sessionStart = Date.now();
        this.init();
    }

    init() {
        this.trackPageView();
        this.setupEventTrackers();
    }

    trackPageView() {
        this.trackEvent('page_view', {
            page_title: document.title,
            page_location: window.location.href,
            timestamp: new Date().toISOString()
        });
    }

    trackEvent(eventName, parameters = {}) {
        const eventData = {
            event: eventName,
            timestamp: Date.now(),
            session_duration: Date.now() - this.sessionStart,
            user_agent: navigator.userAgent,
            language: navigator.language,
            ...parameters
        };

        this.events.push(eventData);
        
        // Send to Google Analytics if available
        if (typeof gtag !== 'undefined') {
            gtag('event', eventName, parameters);
        }
        
        // Console log for development
        console.log('Analytics Event:', eventData);
    }

    setupEventTrackers() {
        // Track button clicks
        document.querySelectorAll('.btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const buttonText = btn.textContent.trim();
                const buttonType = btn.classList.contains('btn-primary') ? 'primary' : 'secondary';
                
                this.trackEvent('button_click', {
                    button_text: buttonText,
                    button_type: buttonType,
                    page_section: this.getCurrentSection(btn)
                });
            });
        });

        // Track section views
        this.setupIntersectionTracking();
        
        // Track theme changes
        document.getElementById('themeToggle')?.addEventListener('click', () => {
            this.trackEvent('theme_toggle', {
                new_theme: document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
            });
        });

        // Track language changes
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.trackEvent('language_change', {
                    new_language: btn.dataset.lang
                });
            });
        });
    }

    setupIntersectionTracking() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id || entry.target.className;
                    this.trackEvent('section_view', {
                        section_id: sectionId,
                        visibility_ratio: entry.intersectionRatio
                    });
                }
            });
        }, { threshold: 0.5 });

        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });
    }

    getCurrentSection(element) {
        const section = element.closest('section');
        return section ? section.id : 'unknown';
    }
}

// Enhanced Button Effects with Ripple
class EnhancedButtonEffects {
    constructor() {
        this.init();
    }

    init() {
        this.addRippleEffect();
        this.addHoverEffects();
        this.addFocusEffects();
    }

    addRippleEffect() {
        document.querySelectorAll('.btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.createRipple(e));
        });
    }

    createRipple(e) {
        const button = e.currentTarget;
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.className = 'ripple';
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    }

    addHoverEffects() {
        document.querySelectorAll('.feature-card, .testimonial-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-15px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });
    }

    addFocusEffects() {
        document.querySelectorAll('.btn, .nav-link, .theme-toggle, .lang-btn').forEach(element => {
            element.addEventListener('focus', () => {
                element.style.outline = '3px solid rgba(99, 102, 241, 0.5)';
                element.style.outlineOffset = '2px';
            });
            
            element.addEventListener('blur', () => {
                element.style.outline = '';
                element.style.outlineOffset = '';
            });
        });
    }
}

// Parallax Effect Manager
class ParallaxManager {
    constructor() {
        this.elements = [];
        this.init();
    }

    init() {
        this.setupParallaxElements();
        this.bindScrollListener();
    }

    setupParallaxElements() {
        // Hero background parallax
        const heroBackground = document.querySelector('.hero::before');
        if (heroBackground) {
            this.elements.push({
                element: document.querySelector('.hero'),
                speed: 0.5,
                type: 'background'
            });
        }

        // Floating cards parallax
        document.querySelectorAll('.floating-card').forEach((card, index) => {
            this.elements.push({
                element: card,
                speed: 0.3 + (index * 0.1),
                type: 'transform'
            });
        });
    }

    bindScrollListener() {
        let ticking = false;
        
        const updateParallax = () => {
            const scrollTop = window.pageYOffset;
            
            this.elements.forEach(item => {
                const { element, speed, type } = item;
                const yPos = -(scrollTop * speed);
                
                if (type === 'transform') {
                    element.style.transform = `translateY(${yPos}px)`;
                } else if (type === 'background') {
                    element.style.backgroundPosition = `center ${yPos}px`;
                }
            });
            
            ticking = false;
        };

        const requestTick = () => {
            if (!ticking) {
                requestAnimationFrame(updateParallax);
                ticking = true;
            }
        };

        window.addEventListener('scroll', requestTick, { passive: true });
    }
}

// Theme Management
class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'light';
        this.themeToggle = document.getElementById('themeToggle');
        this.themeIcon = document.getElementById('themeIcon');
        this.init();
    }

    init() {
        this.applyTheme();
        this.themeToggle?.addEventListener('click', () => this.toggleTheme());
    }

    applyTheme() {
        document.documentElement.setAttribute('data-theme', this.theme);
        if (this.themeIcon) {
            this.themeIcon.className = this.theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
        if (this.themeToggle) {
            this.themeToggle.setAttribute('aria-pressed', this.theme === 'dark');
        }
    }

    toggleTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', this.theme);
        this.applyTheme();
        
        // Smooth theme transition
        document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    }
}

// Language Management
class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('language') || 'id';
        this.init();
    }

    init() {
        // Wait for languageData to be available
        if (typeof window.languageData === 'undefined') {
            setTimeout(() => this.init(), 100);
            return;
        }
        
        this.bindLanguageToggle();
        this.applyLanguage();
    }

    bindLanguageToggle() {
        const langButtons = document.querySelectorAll('.lang-btn');
        langButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.dataset.lang;
                this.setLanguage(lang);
            });
        });
    }

    setLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('language', lang);
        this.applyLanguage();
        this.updateActiveButton();
        document.documentElement.lang = lang;
    }

    applyLanguage() {
        if (typeof window.languageData !== 'undefined') {
            const data = window.languageData[this.currentLang];
            if (data) {
                this.updateContent(data);
                this.updateActiveButton();
            }
        }
    }

    updateContent(data) {
        const elements = document.querySelectorAll('[data-key]');
        elements.forEach(element => {
            const key = element.dataset.key;
            const value = this.getNestedValue(data, key);
            if (value) {
                element.textContent = value;
            }
        });
    }

    getNestedValue(obj, path) {
        return path.split('.').reduce((current, key) => current && current[key], obj);
    }

    updateActiveButton() {
        const langButtons = document.querySelectorAll('.lang-btn');
        langButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === this.currentLang);
        });
    }
}

// Mobile Navigation
class MobileNavigation {
    constructor() {
        this.hamburger = document.getElementById('hamburger');
        this.navMenu = document.querySelector('.nav-menu');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.isOpen = false;
        this.init();
    }

    init() {
        if (this.hamburger) {
            this.hamburger.addEventListener('click', () => this.toggle());
        }

        // Close menu when clicking nav links
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => this.close());
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (this.isOpen && !e.target.closest('.navbar')) {
                this.close();
            }
        });
    }

    toggle() {
        this.isOpen = !this.isOpen;
        this.hamburger?.classList.toggle('active', this.isOpen);
        this.navMenu?.classList.toggle('active', this.isOpen);
        this.hamburger?.setAttribute('aria-expanded', this.isOpen);
    }

    close() {
        this.isOpen = false;
        this.hamburger?.classList.remove('active');
        this.navMenu?.classList.remove('active');
        this.hamburger?.setAttribute('aria-expanded', 'false');
    }
}

// Smooth Scrolling
class SmoothScrolling {
    constructor() {
        this.init();
    }

    init() {
        // Add smooth scrolling to all anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// Simple Animation Observer
class AnimationObserver {
    constructor() {
        this.init();
    }

    init() {
        const options = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, options);

        // Observe elements
        const elementsToAnimate = document.querySelectorAll('.feature-card, .testimonial-card, .hero-content, .section-header');
        elementsToAnimate.forEach(el => {
            observer.observe(el);
        });
    }
}

// Simple Button Effects
class ButtonEffects {
    constructor() {
        this.init();
    }

    init() {
        // Add hover effects
        document.querySelectorAll('.btn, .feature-card, .testimonial-card').forEach(el => {
            el.addEventListener('mouseenter', () => {
                el.style.transform = 'translateY(-2px)';
            });
            
            el.addEventListener('mouseleave', () => {
                el.style.transform = '';
            });
        });
    }
}

// Enhanced initialization with all new features
document.addEventListener('DOMContentLoaded', () => {
    // Hide body overflow during loading
    document.body.style.overflow = 'hidden';
    
    // Initialize all enhanced components
    const loadingScreen = new LoadingScreen();
    const scrollProgress = new ScrollProgress();
    const analyticsManager = new AnalyticsManager();
    const enhancedButtonEffects = new EnhancedButtonEffects();
    const parallaxManager = new ParallaxManager();
    
    // Initialize core functionality
    const themeManager = new ThemeManager();
    const languageManager = new LanguageManager();
    const mobileNavigation = new MobileNavigation();
    const smoothScrolling = new SmoothScrolling();
    const animationObserver = new AnimationObserver();

    // Store managers globally for access
    window.themeManager = themeManager;
    window.languageManager = languageManager;
    window.analyticsManager = analyticsManager;

    // Performance monitoring
    window.addEventListener('load', () => {
        const loadTime = performance.now();
        analyticsManager.trackEvent('page_load_complete', {
            load_time: Math.round(loadTime),
            performance_navigation_type: performance.navigation.type
        });
        console.log(`🚀 ReLogic loaded in ${Math.round(loadTime)}ms`);
    });

    console.log('🎉 ReLogic Contact Tool with Enhanced Features loaded successfully!');
});
