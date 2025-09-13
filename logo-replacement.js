// JavaScript to replace YTAA and Kyushudenko icons with actual logos
document.addEventListener('DOMContentLoaded', function() {
    console.log('Logo replacement script loaded');
    
    // Function to replace logos
    function replaceLogos() {
        // Find all partner cards
        const partnerCards = document.querySelectorAll('.grid > div');
        
        partnerCards.forEach((card, index) => {
            const titleElement = card.querySelector('h3');
            if (titleElement) {
                const title = titleElement.textContent.trim();
                console.log(`Found partner: ${title}`);
                
                // Find the icon container with new class names
                let iconContainer = card.querySelector('.w-12.h-12.bg-teal-500\\/20.rounded-lg.flex.items-center.justify-center.mb-3');
                
                // Fallback to old class names
                if (!iconContainer) {
                    iconContainer = card.querySelector('.w-16.h-16.bg-white.rounded-lg.flex.items-center.justify-center.mb-3.mx-auto');
                }
                
                if (iconContainer) {
                    if (title === 'YTAA') {
                        console.log('Replacing YTAA icon');
                        // Hide the SVG icon
                        const svg = iconContainer.querySelector('svg');
                        if (svg) {
                            svg.style.display = 'none';
                        }
                        
                        // Set background image with white background like other partners
                        iconContainer.style.backgroundImage = 'url("./assets/YTAA.jpeg")';
                        iconContainer.style.backgroundSize = '70%';
                        iconContainer.style.backgroundRepeat = 'no-repeat';
                        iconContainer.style.backgroundPosition = 'center';
                        iconContainer.style.backgroundColor = 'white';
                    }
                    
                    if (title === '九州電工') {
                        console.log('Replacing Kyushudenko icon');
                        // Hide the SVG icon
                        const svg = iconContainer.querySelector('svg');
                        if (svg) {
                            svg.style.display = 'none';
                        }
                        
                        // Set background image with white background like other partners
                        iconContainer.style.backgroundImage = 'url("./assets/Kyushudenko.jpeg")';
                        iconContainer.style.backgroundSize = '70%';
                        iconContainer.style.backgroundRepeat = 'no-repeat';
                        iconContainer.style.backgroundPosition = 'center';
                        iconContainer.style.backgroundColor = 'white';
                    }
                }
            }
        });
    }
    
    // Try to replace logos immediately
    replaceLogos();
    
    // Also try after a short delay in case content is dynamically loaded
    setTimeout(replaceLogos, 1000);
    setTimeout(replaceLogos, 3000);
    
    // Watch for DOM changes
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                replaceLogos();
            }
        });
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});

// Alternative approach using more specific selectors
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        // Target YTAA specifically by the new class name
        const ytaaContainers = document.querySelectorAll('.w-12.h-12.bg-teal-500\\/20.rounded-lg.flex.items-center.justify-center.mb-3');
        ytaaContainers.forEach(function(container) {
            const svg = container.querySelector('svg');
            if (svg) {
                svg.style.display = 'none';
            }
            container.style.backgroundImage = 'url("./assets/YTAA.jpeg")';
            container.style.backgroundSize = '70%';
            container.style.backgroundRepeat = 'no-repeat';
            container.style.backgroundPosition = 'center';
            container.style.backgroundColor = 'white';
        });
        
        // Find YTAA specifically by looking for heart icon
        const heartIcons = document.querySelectorAll('svg[data-lucide="heart"]');
        heartIcons.forEach(function(icon) {
            const container = icon.closest('.w-16.h-16.bg-white.rounded-lg.flex.items-center.justify-center.mb-3.mx-auto') ||
                             icon.closest('.w-12.h-12.bg-teal-500\\/20.rounded-lg.flex.items-center.justify-center.mb-3');
            if (container) {
                icon.style.display = 'none';
                container.style.backgroundImage = 'url("./assets/YTAA.jpeg")';
                container.style.backgroundSize = '70%';
                container.style.backgroundRepeat = 'no-repeat';
                container.style.backgroundPosition = 'center';
                container.style.backgroundColor = 'white';
            }
        });
        
        // Find Kyushudenko specifically by looking for trending-up icon
        const trendingIcons = document.querySelectorAll('svg[data-lucide="trending-up"]');
        trendingIcons.forEach(function(icon) {
            const container = icon.closest('.w-16.h-16.bg-white.rounded-lg.flex.items-center.justify-center.mb-3.mx-auto');
            if (container) {
                icon.style.display = 'none';
                container.style.backgroundImage = 'url("./assets/Kyushudenko.jpeg")';
                container.style.backgroundSize = '70%';
                container.style.backgroundRepeat = 'no-repeat';
                container.style.backgroundPosition = 'center';
                container.style.backgroundColor = 'white';
            }
        });
    }, 2000);
});

