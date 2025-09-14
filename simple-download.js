// Simple and safe whitepaper download functionality
(function() {
    'use strict';
    
    function addSimpleDownload() {
        // Wait for page to load
        setTimeout(() => {
            // Find any existing whitepaper buttons and add download functionality
            const buttons = document.querySelectorAll('button, a');
            buttons.forEach(button => {
                const text = button.textContent || '';
                if (text.includes('ホワイトペーパー') || text.includes('whitepaper')) {
                    button.addEventListener('click', (e) => {
                        e.preventDefault();
                        
                        // Simple download
                        const link = document.createElement('a');
                        link.href = '/assets/0912_whitepaper_ja.pdf';
                        link.download = 'MOTHER_VEGETABLES_Whitepaper.pdf';
                        link.style.display = 'none';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                    });
                }
            });
        }, 2000);
    }
    
    // Initialize
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', addSimpleDownload);
    } else {
        addSimpleDownload();
    }
})();

