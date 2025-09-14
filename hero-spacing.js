// Add proper spacing to hero section via JavaScript
(function() {
    'use strict';
    
    console.log('Adding hero section spacing...');
    
    function addHeroSpacing() {
        // Wait for React app to load
        const checkInterval = setInterval(() => {
            const reactRoot = document.querySelector('#root');
            if (reactRoot && reactRoot.children.length > 0) {
                clearInterval(checkInterval);
                
                // Add spacing after a short delay to ensure React has rendered
                setTimeout(() => {
                    applyHeroSpacing();
                }, 500);
            }
        }, 100);
    }
    
    function applyHeroSpacing() {
        // Method 1: Target the main container
        const mainContainer = document.querySelector('#root > div');
        if (mainContainer) {
            mainContainer.style.paddingTop = '80px';
            console.log('Applied padding to main container');
        }
        
        // Method 2: Target elements containing "MOTHER VEGETABLES"
        const heroTitle = Array.from(document.querySelectorAll('h1')).find(h1 => 
            h1.textContent.includes('MOTHER VEGETABLES')
        );
        
        if (heroTitle) {
            const heroSection = heroTitle.closest('div');
            if (heroSection) {
                heroSection.style.paddingTop = '80px';
                heroSection.style.marginTop = '40px';
                console.log('Applied spacing to hero section via title');
            }
        }
        
        // Method 3: Target large text elements (likely hero titles)
        const largeTexts = document.querySelectorAll('h1[class*="text-6xl"], h1[class*="text-5xl"], .text-6xl, .text-5xl');
        largeTexts.forEach(element => {
            const container = element.closest('div');
            if (container) {
                container.style.paddingTop = '80px';
                container.style.marginTop = '40px';
                console.log('Applied spacing to large text container');
            }
        });
        
        // Method 4: Target the first major section
        const firstSection = document.querySelector('#root > div > div:first-child');
        if (firstSection) {
            firstSection.style.paddingTop = '80px';
            console.log('Applied spacing to first section');
        }
        
        // Method 5: Target elements with background images (likely hero sections)
        const bgElements = document.querySelectorAll('div[style*="background-image"]');
        bgElements.forEach(element => {
            element.style.paddingTop = '80px';
            console.log('Applied spacing to background image element');
        });
        
        // Method 6: Target flex containers that might be hero sections
        const flexContainers = document.querySelectorAll('div[class*="min-h-screen"], div[class*="h-screen"], div[class*="flex"][class*="items-center"]');
        flexContainers.forEach((element, index) => {
            if (index === 0) { // Only apply to the first one (likely hero)
                element.style.paddingTop = '120px';
                console.log('Applied spacing to flex container');
            }
        });
        
        // Method 7: Add spacing after header
        const header = document.querySelector('header');
        if (header) {
            const nextElement = header.nextElementSibling;
            if (nextElement) {
                nextElement.style.marginTop = '80px';
                console.log('Applied spacing after header');
            }
        }
    }
    
    // Re-apply spacing when the page changes (for SPA navigation)
    function observeChanges() {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                    // Re-apply spacing after DOM changes
                    setTimeout(applyHeroSpacing, 200);
                }
            });
        });
        
        const reactRoot = document.querySelector('#root');
        if (reactRoot) {
            observer.observe(reactRoot, {
                childList: true,
                subtree: true
            });
        }
    }
    
    // Initialize
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            addHeroSpacing();
            observeChanges();
        });
    } else {
        addHeroSpacing();
        observeChanges();
    }
    
})();

