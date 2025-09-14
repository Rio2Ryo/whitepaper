// Enhanced features: Back to top button and header menu
document.addEventListener('DOMContentLoaded', function() {
    console.log('Enhanced features script loaded');
    
    // Create back to top button
    function createBackToTopButton() {
        const backToTopButton = document.createElement('button');
        backToTopButton.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m18 15-6-6-6 6"/>
            </svg>
        `;
        backToTopButton.className = 'back-to-top-btn';
        backToTopButton.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, #10b981, #059669);
            color: white;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            display: none;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
            transition: all 0.3s ease;
            z-index: 1000;
            backdrop-filter: blur(10px);
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
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.style.display = 'flex';
            } else {
                backToTopButton.style.display = 'none';
            }
        });
    }
    
    // Create header menu
    function createHeaderMenu() {
        // Find the existing header or create one
        let header = document.querySelector('header');
        if (!header) {
            // Look for the main navigation area
            const nav = document.querySelector('nav');
            if (nav) {
                header = nav.closest('header') || nav.parentElement;
            }
        }
        
        if (header) {
            // Add enhanced menu items
            const menuItems = [
                { text: 'ホーム', href: '#home' },
                { text: 'ミッション', href: '#mission' },
                { text: '技術', href: '#technology' },
                { text: '産業', href: '#industries' },
                { text: 'チーム', href: '#team' },
                { text: 'パートナー', href: '#partners' },
                { text: 'トークン', href: '#tokenomics' },
                { text: 'ホワイトペーパー', href: './assets/0912_whitepaper_ja.pdf', download: true }
            ];
            
            // Find existing menu container
            const existingMenu = header.querySelector('nav ul, .menu, .navigation');
            if (existingMenu) {
                // Add whitepaper download to existing menu
                const whitepaperItem = document.createElement('li');
                whitepaperItem.innerHTML = `
                    <a href="./assets/0912_whitepaper_ja.pdf" download="MOTHER_VEGETABLES_Whitepaper_JP.pdf" 
                       class="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                            <polyline points="14,2 14,8 20,8"/>
                            <line x1="16" y1="13" x2="8" y2="13"/>
                            <line x1="16" y1="17" x2="8" y2="17"/>
                            <polyline points="10,9 9,9 8,9"/>
                        </svg>
                        ホワイトペーパー
                    </a>
                `;
                existingMenu.appendChild(whitepaperItem);
            }
        }
    }
    
    // Add smooth scrolling for anchor links
    function addSmoothScrolling() {
        document.addEventListener('click', function(e) {
            if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
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
    }
    
    // Add section IDs for navigation
    function addSectionIds() {
        const sections = [
            { selector: 'h1:contains("MOTHER VEGETABLES")', id: 'home' },
            { selector: 'h2:contains("ミッション"), h2:contains("Mission")', id: 'mission' },
            { selector: 'h2:contains("技術"), h2:contains("Technology")', id: 'technology' },
            { selector: 'h2:contains("産業"), h2:contains("Industries")', id: 'industries' },
            { selector: 'h2:contains("チーム"), h2:contains("Team")', id: 'team' },
            { selector: 'h2:contains("パートナー"), h2:contains("Partners")', id: 'partners' },
            { selector: 'h2:contains("トークン"), h2:contains("Tokenomics")', id: 'tokenomics' }
        ];
        
        // Find sections by text content and add IDs
        const allH2s = document.querySelectorAll('h1, h2, h3');
        allH2s.forEach(heading => {
            const text = heading.textContent.toLowerCase();
            if (text.includes('mother vegetables') || text.includes('地球再生')) {
                heading.closest('section, div').id = 'home';
            } else if (text.includes('ミッション') || text.includes('mission')) {
                heading.closest('section, div').id = 'mission';
            } else if (text.includes('技術') || text.includes('technology')) {
                heading.closest('section, div').id = 'technology';
            } else if (text.includes('産業') || text.includes('industries')) {
                heading.closest('section, div').id = 'industries';
            } else if (text.includes('チーム') || text.includes('team')) {
                heading.closest('section, div').id = 'team';
            } else if (text.includes('パートナー') || text.includes('partners')) {
                heading.closest('section, div').id = 'partners';
            } else if (text.includes('トークン') || text.includes('tokenomics')) {
                heading.closest('section, div').id = 'tokenomics';
            }
        });
    }
    
    // Initialize all features
    createBackToTopButton();
    createHeaderMenu();
    addSmoothScrolling();
    addSectionIds();
    
    console.log('Enhanced features initialized');
});

