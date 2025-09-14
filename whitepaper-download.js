// Ensure whitepaper download functionality works
(function() {
    'use strict';
    
    console.log('Setting up whitepaper download functionality...');
    
    function setupWhitepaperDownload() {
        // Wait for React app to load
        const checkInterval = setInterval(() => {
            const reactRoot = document.querySelector('#root');
            if (reactRoot && reactRoot.children.length > 0) {
                clearInterval(checkInterval);
                
                // Setup download after a short delay
                setTimeout(() => {
                    addDownloadFunctionality();
                }, 1000);
            }
        }, 100);
    }
    
    function addDownloadFunctionality() {
        // Method 1: Find existing whitepaper buttons/links and enhance them
        const whitepaperButtons = document.querySelectorAll('button, a, div');
        whitepaperButtons.forEach(element => {
            const text = element.textContent || '';
            if (text.includes('ホワイトペーパー') || text.includes('whitepaper') || text.includes('White Paper')) {
                enhanceDownloadElement(element);
                console.log('Enhanced existing whitepaper element');
            }
        });
        
        // Method 2: Add download functionality to header menu
        const headerNav = document.querySelector('header nav, nav');
        if (headerNav) {
            // Check if whitepaper link already exists
            const existingWhitepaperLink = Array.from(headerNav.querySelectorAll('a, button')).find(el => 
                el.textContent.includes('ホワイトペーパー') || el.textContent.includes('whitepaper')
            );
            
            if (!existingWhitepaperLink) {
                // Create new whitepaper download button
                const downloadButton = document.createElement('a');
                downloadButton.href = '/assets/0912_whitepaper_ja.pdf';
                downloadButton.download = 'MOTHER_VEGETABLES_Whitepaper_JP.pdf';
                downloadButton.textContent = 'ホワイトペーパー';
                downloadButton.className = 'bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors duration-200';
                downloadButton.style.cssText = `
                    background-color: #059669 !important;
                    color: white !important;
                    padding: 8px 16px !important;
                    border-radius: 8px !important;
                    text-decoration: none !important;
                    transition: background-color 0.2s !important;
                    margin-left: 12px !important;
                `;
                
                downloadButton.addEventListener('mouseenter', () => {
                    downloadButton.style.backgroundColor = '#047857 !important';
                });
                
                downloadButton.addEventListener('mouseleave', () => {
                    downloadButton.style.backgroundColor = '#059669 !important';
                });
                
                downloadButton.addEventListener('click', (e) => {
                    e.preventDefault();
                    downloadWhitepaper();
                });
                
                headerNav.appendChild(downloadButton);
                console.log('Added new whitepaper download button to header');
            } else {
                enhanceDownloadElement(existingWhitepaperLink);
            }
        }
        
        // Method 3: Add download functionality to any CTA buttons
        const ctaButtons = document.querySelectorAll('button[class*="bg-green"], a[class*="bg-green"]');
        ctaButtons.forEach(button => {
            const text = button.textContent || '';
            if (text.includes('ダウンロード') || text.includes('詳細') || text.includes('資料')) {
                enhanceDownloadElement(button);
                console.log('Enhanced CTA button for whitepaper download');
            }
        });
    }
    
    function enhanceDownloadElement(element) {
        // Remove existing click handlers
        element.onclick = null;
        
        // Add download functionality
        element.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            downloadWhitepaper();
        });
        
        // Make it look like a download link
        element.style.cursor = 'pointer';
        
        // Add download attribute if it's an anchor
        if (element.tagName === 'A') {
            element.href = '/assets/0912_whitepaper_ja.pdf';
            element.download = 'MOTHER_VEGETABLES_Whitepaper_JP.pdf';
        }
    }
    
    function downloadWhitepaper() {
        console.log('Downloading whitepaper...');
        
        // Method 1: Direct download link
        const link = document.createElement('a');
        link.href = '/assets/0912_whitepaper_ja.pdf';
        link.download = 'MOTHER_VEGETABLES_Whitepaper_JP.pdf';
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Method 2: Fallback - open in new tab
        setTimeout(() => {
            window.open('/assets/0912_whitepaper_ja.pdf', '_blank');
        }, 100);
        
        console.log('Whitepaper download initiated');
    }
    
    // Re-apply download functionality when the page changes (for SPA navigation)
    function observeChanges() {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                    // Check if new elements were added that might need download functionality
                    const hasNewElements = Array.from(mutation.addedNodes).some(node => 
                        node.nodeType === 1 && (
                            node.tagName === 'BUTTON' || 
                            node.tagName === 'A' ||
                            (node.querySelector && (node.querySelector('button') || node.querySelector('a')))
                        )
                    );
                    
                    if (hasNewElements) {
                        setTimeout(addDownloadFunctionality, 500);
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
            setupWhitepaperDownload();
            observeChanges();
        });
    } else {
        setupWhitepaperDownload();
        observeChanges();
    }
    
})();

