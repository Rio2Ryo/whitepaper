// Add proper spacing to header menu buttons via JavaScript
(function() {
    'use strict';
    
    console.log('Adding header menu spacing...');
    
    function addHeaderSpacing() {
        // Wait for React app to load
        const checkInterval = setInterval(() => {
            const reactRoot = document.querySelector('#root');
            if (reactRoot && reactRoot.children.length > 0) {
                clearInterval(checkInterval);
                
                // Add spacing after a short delay to ensure React has rendered
                setTimeout(() => {
                    applyHeaderSpacing();
                }, 500);
            }
        }, 100);
    }
    
    function applyHeaderSpacing() {
        // Method 1: Target header navigation buttons
        const headerButtons = document.querySelectorAll('header button, nav button');
        headerButtons.forEach((button, index) => {
            button.style.marginRight = '16px';
            button.style.marginLeft = '8px';
            button.style.paddingLeft = '16px';
            button.style.paddingRight = '16px';
            console.log(`Applied spacing to header button ${index + 1}`);
        });
        
        // Method 2: Target navigation links
        const navLinks = document.querySelectorAll('header a, nav a');
        navLinks.forEach((link, index) => {
            link.style.marginRight = '16px';
            link.style.marginLeft = '8px';
            link.style.paddingLeft = '12px';
            link.style.paddingRight = '12px';
            console.log(`Applied spacing to nav link ${index + 1}`);
        });
        
        // Method 3: Target flex containers in header
        const headerFlexContainers = document.querySelectorAll('header .flex, nav .flex, header div[class*="flex"], nav div[class*="flex"]');
        headerFlexContainers.forEach((container, index) => {
            container.style.gap = '24px';
            console.log(`Applied gap to flex container ${index + 1}`);
        });
        
        // Method 4: Target list items in navigation
        const navListItems = document.querySelectorAll('header ul li, nav ul li');
        navListItems.forEach((item, index) => {
            item.style.marginRight = '24px';
            item.style.marginLeft = '8px';
            
            // Remove margin from last item
            if (index === navListItems.length - 1) {
                item.style.marginRight = '0';
            }
            console.log(`Applied spacing to nav list item ${index + 1}`);
        });
        
        // Method 5: Target space-x utility classes
        const spaceXElements = document.querySelectorAll('.space-x-8, .space-x-6, .space-x-4');
        spaceXElements.forEach((element, index) => {
            const children = element.children;
            for (let i = 0; i < children.length; i++) {
                if (i > 0) {
                    children[i].style.marginLeft = '32px';
                }
            }
            console.log(`Applied space-x spacing to element ${index + 1}`);
        });
        
        // Method 6: Add general padding to header
        const headers = document.querySelectorAll('header, nav');
        headers.forEach((header, index) => {
            header.style.paddingLeft = '24px';
            header.style.paddingRight = '24px';
            console.log(`Applied padding to header ${index + 1}`);
        });
        
        // Method 7: Target specific header containers
        const headerContainers = document.querySelectorAll('header > div, nav > div');
        headerContainers.forEach((container, index) => {
            container.style.paddingLeft = '16px';
            container.style.paddingRight = '16px';
            console.log(`Applied padding to header container ${index + 1}`);
        });
    }
    
    // Re-apply spacing when the page changes (for SPA navigation)
    function observeHeaderChanges() {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                    // Check if header elements were added
                    const hasHeaderElements = Array.from(mutation.addedNodes).some(node => 
                        node.nodeType === 1 && (
                            node.tagName === 'HEADER' || 
                            node.tagName === 'NAV' ||
                            node.querySelector && (node.querySelector('header') || node.querySelector('nav'))
                        )
                    );
                    
                    if (hasHeaderElements) {
                        setTimeout(applyHeaderSpacing, 200);
                    }
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
            addHeaderSpacing();
            observeHeaderChanges();
        });
    } else {
        addHeaderSpacing();
        observeHeaderChanges();
    }
    
})();

