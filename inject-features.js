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
    
    // Update header menu with new structure
    function updateHeaderMenu() {
        // Try multiple selectors to find the navigation menu
        let menuLinks = document.querySelectorAll('header nav a, header a, nav a');
        
        if (menuLinks.length === 0) {
            console.log('No menu links found, retrying...');
            return;
        }
        
        console.log(`Found ${menuLinks.length} menu links`);
        
        // Define new menu items
        const menuItems = [
            { text: 'メンバー', href: '#members' },
            { text: 'プロジェクト詳細', href: '#project' },
            { text: 'ショップ', href: '#shop', disabled: true },
            { text: 'ホワイトペーパー', href: './assets/0912_whitepaper_ja.pdf', download: true }
        ];
        
        // Update existing links instead of replacing them
        menuLinks.forEach((link, index) => {
            if (index < menuItems.length) {
                const item = menuItems[index];
                
                // Remove any existing event listeners by cloning the node
                const newLink = link.cloneNode(false);
                
                if (item.download) {
                    newLink.href = item.href;
                    newLink.download = '0912_whitepaper_ja.pdf';
                    newLink.innerHTML = `
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px; display: inline-block; vertical-align: middle;">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                            <polyline points="7 10 12 15 17 10"/>
                            <line x1="12" y1="15" x2="12" y2="3"/>
                        </svg>
                        ${item.text}
                    `;
                    
                    newLink.addEventListener('click', function(e) {
                        e.preventDefault();
                        const downloadLink = document.createElement('a');
                        downloadLink.href = item.href;
                        downloadLink.download = '0912_whitepaper_ja.pdf';
                        document.body.appendChild(downloadLink);
                        downloadLink.click();
                        document.body.removeChild(downloadLink);
                    });
                } else if (item.disabled) {
                    newLink.href = '#';
                    newLink.textContent = item.text;
                    newLink.style.opacity = '0.5';
                    newLink.style.cursor = 'not-allowed';
                    
                    newLink.addEventListener('click', function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                    });
                } else {
                    newLink.href = item.href;
                    newLink.textContent = item.text;
                    
                    newLink.addEventListener('click', function(e) {
                        e.preventDefault();
                        const targetId = item.href.substring(1);
                        
                        // Try multiple ways to find the target section
                        let targetElement = document.getElementById(targetId) || 
                                          document.querySelector(`.${targetId}`) ||
                                          document.querySelector(`[data-section="${targetId}"]`) ||
                                          document.querySelector(`section.${targetId}`) ||
                                          document.querySelector(`div.${targetId}`);
                        
                        // If specific sections not found, try to find by text content
                        if (!targetElement) {
                            if (targetId === 'members') {
                                targetElement = Array.from(document.querySelectorAll('h2, h3')).find(el => 
                                    el.textContent.includes('メンバー') || el.textContent.includes('Member') || el.textContent.includes('チーム')
                                );
                            } else if (targetId === 'project') {
                                targetElement = Array.from(document.querySelectorAll('h2, h3')).find(el => 
                                    el.textContent.includes('プロジェクト') || el.textContent.includes('Project')
                                );
                            }
                        }
                        
                        if (targetElement) {
                            const headerOffset = 80;
                            const elementPosition = targetElement.getBoundingClientRect().top;
                            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                            
                            window.scrollTo({
                                top: offsetPosition,
                                behavior: 'smooth'
                            });
                        } else {
                            console.log(`Target element not found for: ${targetId}`);
                        }
                    });
                }
                
                // Replace the old link with the new one
                link.parentNode.replaceChild(newLink, link);
            }
        });
        
        console.log('Header menu updated with new structure');
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
                makeHeaderSticky();
                addSmoothScrolling();
                
                // Try to update menu multiple times with delays
                let attempts = 0;
                const maxAttempts = 10;
                
                const tryUpdateMenu = () => {
                    attempts++;
                    console.log(`Attempting to update menu (attempt ${attempts}/${maxAttempts})`);
                    
                    const menuLinks = document.querySelectorAll('header nav a, header a, nav a');
                    if (menuLinks.length > 0) {
                        updateHeaderMenu();
                        console.log('Menu update completed');
                    } else if (attempts < maxAttempts) {
                        setTimeout(tryUpdateMenu, 500);
                    } else {
                        console.log('Failed to find menu after maximum attempts');
                    }
                };
                
                tryUpdateMenu();
                
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

