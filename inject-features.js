// Inject enhanced features into the existing React application
(function() {
    'use strict';
    
    console.log('Injecting enhanced features...');
    
    // Wait for the React app to load
    function waitForReactApp() {
        return new Promise((resolve) => {
            const checkInterval = setInterval(() => {
                const reactRoot = document.querySelector('#root');
                if (reactRoot && reactRoot.children.length > 0) {
                    clearInterval(checkInterval);
                    resolve();
                }
            }, 100);
        });
    }
    
    // Create back to top button
    function createBackToTopButton() {
        // Remove existing button if any
        const existingBtn = document.querySelector('.back-to-top-btn');
        if (existingBtn) {
            existingBtn.remove();
        }
        
        const backToTopButton = document.createElement('button');
        backToTopButton.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m18 15-6-6-6 6"/>
            </svg>
        `;
        backToTopButton.className = 'back-to-top-btn';
        backToTopButton.style.cssText = `
            position: fixed !important;
            bottom: 30px !important;
            right: 30px !important;
            width: 50px !important;
            height: 50px !important;
            background: linear-gradient(135deg, #10b981, #059669) !important;
            color: white !important;
            border: none !important;
            border-radius: 50% !important;
            cursor: pointer !important;
            display: none !important;
            align-items: center !important;
            justify-content: center !important;
            box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3) !important;
            transition: all 0.3s ease !important;
            z-index: 9999 !important;
            backdrop-filter: blur(10px) !important;
        `;
        
        // Add hover effects
        backToTopButton.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.boxShadow = '0 6px 20px rgba(16, 185, 129, 0.4)';
        });
        
        backToTopButton.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 4px 12px rgba(16, 185, 129, 0.3)';
        });
        
        // Click event to scroll to top
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        document.body.appendChild(backToTopButton);
        
        // Show/hide button based on scroll position
        function handleScroll() {
            if (window.pageYOffset > 300) {
                backToTopButton.style.display = 'flex';
            } else {
                backToTopButton.style.display = 'none';
            }
        }
        
        window.addEventListener('scroll', handleScroll);
        
        console.log('Back to top button created');
    }
    
    // Add whitepaper download to existing header
    function addWhitepaperDownload() {
        // Find the existing header navigation
        const nav = document.querySelector('nav');
        if (nav) {
            // Look for existing menu items
            const menuContainer = nav.querySelector('ul, .flex, .space-x-8');
            if (menuContainer) {
                // Create whitepaper download link
                const whitepaperLink = document.createElement('a');
                whitepaperLink.href = './assets/0912_whitepaper_ja.pdf';
                whitepaperLink.download = 'MOTHER_VEGETABLES_Whitepaper_JP.pdf';
                whitepaperLink.innerHTML = `
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 8px; display: inline-block; vertical-align: middle;">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <polyline points="14,2 14,8 20,8"/>
                        <line x1="16" y1="13" x2="8" y2="13"/>
                        <line x1="16" y1="17" x2="8" y2="17"/>
                        <polyline points="10,9 9,9 8,9"/>
                    </svg>
                    ホワイトペーパー
                `;
                whitepaperLink.style.cssText = `
                    background: linear-gradient(135deg, #10b981, #059669) !important;
                    padding: 8px 16px !important;
                    border-radius: 6px !important;
                    color: white !important;
                    text-decoration: none !important;
                    transition: all 0.3s ease !important;
                    display: inline-flex !important;
                    align-items: center !important;
                    font-size: 14px !important;
                    font-weight: 500 !important;
                `;
                
                whitepaperLink.addEventListener('mouseenter', function() {
                    this.style.background = 'linear-gradient(135deg, #059669, #047857)';
                    this.style.transform = 'translateY(-2px)';
                    this.style.boxShadow = '0 4px 12px rgba(16, 185, 129, 0.3)';
                });
                
                whitepaperLink.addEventListener('mouseleave', function() {
                    this.style.background = 'linear-gradient(135deg, #10b981, #059669)';
                    this.style.transform = 'translateY(0)';
                    this.style.boxShadow = 'none';
                });
                
                // Add to menu
                if (menuContainer.tagName === 'UL') {
                    const li = document.createElement('li');
                    li.appendChild(whitepaperLink);
                    menuContainer.appendChild(li);
                } else {
                    menuContainer.appendChild(whitepaperLink);
                }
                
                console.log('Whitepaper download link added to header');
            }
        }
    }
    
    // Make header sticky
    function makeHeaderSticky() {
        const header = document.querySelector('header');
        if (header) {
            header.style.cssText = `
                position: sticky !important;
                top: 0 !important;
                z-index: 999 !important;
                backdrop-filter: blur(10px) !important;
                background: rgba(0, 0, 0, 0.8) !important;
                border-bottom: 1px solid rgba(16, 185, 129, 0.2) !important;
            `;
            console.log('Header made sticky');
        }
    }
    
    // Add smooth scrolling
    function addSmoothScrolling() {
        // Add smooth scroll behavior to html
        document.documentElement.style.scrollBehavior = 'smooth';
        
        // Handle anchor links
        document.addEventListener('click', function(e) {
            if (e.target.tagName === 'A' && e.target.getAttribute('href') && e.target.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = e.target.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
        
        console.log('Smooth scrolling enabled');
    }
    
    // Initialize all features
    async function initializeFeatures() {
        try {
            await waitForReactApp();
            
            // Wait a bit more for the app to fully render
            setTimeout(() => {
                createBackToTopButton();
                addWhitepaperDownload();
                makeHeaderSticky();
                addSmoothScrolling();
                
                console.log('All enhanced features initialized successfully');
            }, 1000);
            
        } catch (error) {
            console.error('Error initializing enhanced features:', error);
        }
    }
    
    // Start initialization
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeFeatures);
    } else {
        initializeFeatures();
    }
    
})();

