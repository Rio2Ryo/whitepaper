// JavaScript to replace YTAA and Kyushudenko icons with actual logos
function replaceLogos() {
  console.log('Starting logo replacement...');
  
  // Method 1: Target by specific class names (most reliable and specific)
  // YTAA - teal background only
  const ytaaContainers = document.querySelectorAll('.w-12.h-12.bg-teal-500\\/20.rounded-lg.flex.items-center.justify-center.mb-3');
  ytaaContainers.forEach(container => {
    console.log('Found YTAA container by class name');
    container.style.backgroundImage = 'url("./assets/YTAA.jpeg")';
    container.style.backgroundSize = '70%';
    container.style.backgroundRepeat = 'no-repeat';
    container.style.backgroundPosition = 'center';
    container.style.backgroundColor = 'white';
    container.style.width = '4rem';
    container.style.height = '4rem';
    container.style.margin = '0 auto 0.75rem auto';
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    container.style.justifyContent = 'center';
    // Hide the SVG icon
    const svg = container.querySelector('svg');
    if (svg) svg.style.display = 'none';
  });
  
  // Kyushudenko - indigo background only (most specific)
  const kyushuContainers = document.querySelectorAll('.w-12.h-12.bg-indigo-500\\/20.rounded-lg.flex.items-center.justify-center.mb-3');
  kyushuContainers.forEach(container => {
    console.log('Found Kyushudenko container by indigo class name');
    container.style.backgroundImage = 'url("./assets/Kyushudenko.jpeg")';
    container.style.backgroundSize = '70%';
    container.style.backgroundRepeat = 'no-repeat';
    container.style.backgroundPosition = 'center';
    container.style.backgroundColor = 'white';
    container.style.width = '4rem';
    container.style.height = '4rem';
    container.style.margin = '0 auto 0.75rem auto';
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    container.style.justifyContent = 'center';
    // Hide the SVG icon
    const svg = container.querySelector('svg');
    if (svg) svg.style.display = 'none';
  });
  
  // Method 2: Target by text content first, then find the specific icon container
  const allH3s = document.querySelectorAll('h3');
  allH3s.forEach(h3 => {
    if (h3.textContent.trim() === 'YTAA') {
      console.log('Found YTAA by exact text content');
      // Look for the icon container within the same parent
      const parentCard = h3.closest('div');
      if (parentCard) {
        const container = parentCard.querySelector('.w-12.h-12.bg-teal-500\\/20.rounded-lg.flex.items-center.justify-center.mb-3');
        if (container) {
          container.style.backgroundImage = 'url("./assets/YTAA.jpeg")';
          container.style.backgroundSize = '70%';
          container.style.backgroundRepeat = 'no-repeat';
          container.style.backgroundPosition = 'center';
          container.style.backgroundColor = 'white';
          container.style.width = '4rem';
          container.style.height = '4rem';
          container.style.margin = '0 auto 0.75rem auto';
          container.style.display = 'flex';
          container.style.alignItems = 'center';
          container.style.justifyContent = 'center';
          const svg = container.querySelector('svg');
          if (svg) svg.style.display = 'none';
        }
      }
    }
    
    if (h3.textContent.trim() === '九州電工') {
      console.log('Found Kyushudenko by exact text content');
      // Look for the icon container within the same parent
      const parentCard = h3.closest('div');
      if (parentCard) {
        const container = parentCard.querySelector('.w-12.h-12.bg-indigo-500\\/20.rounded-lg.flex.items-center.justify-center.mb-3');
        if (container) {
          container.style.backgroundImage = 'url("./assets/Kyushudenko.jpeg")';
          container.style.backgroundSize = '70%';
          container.style.backgroundRepeat = 'no-repeat';
          container.style.backgroundPosition = 'center';
          container.style.backgroundColor = 'white';
          container.style.width = '4rem';
          container.style.height = '4rem';
          container.style.margin = '0 auto 0.75rem auto';
          container.style.display = 'flex';
          container.style.alignItems = 'center';
          container.style.justifyContent = 'center';
          const svg = container.querySelector('svg');
          if (svg) svg.style.display = 'none';
        }
      }
    }
  });
  
  // Method 3: Target by SVG data-lucide attributes but only within the correct context
  const heartIcons = document.querySelectorAll('svg[data-lucide="heart"]');
  heartIcons.forEach(icon => {
    // Check if this heart icon is within a card that has YTAA title
    const parentCard = icon.closest('div');
    if (parentCard) {
      const titleElement = parentCard.querySelector('h3');
      if (titleElement && titleElement.textContent.trim() === 'YTAA') {
        console.log('Found heart icon in YTAA card');
        const container = icon.closest('.w-12, .w-16');
        if (container) {
          container.style.backgroundImage = 'url("./assets/YTAA.jpeg")';
          container.style.backgroundSize = '70%';
          container.style.backgroundRepeat = 'no-repeat';
          container.style.backgroundPosition = 'center';
          container.style.backgroundColor = 'white';
          container.style.width = '4rem';
          container.style.height = '4rem';
          container.style.margin = '0 auto 0.75rem auto';
          container.style.display = 'flex';
          container.style.alignItems = 'center';
          container.style.justifyContent = 'center';
          icon.style.display = 'none';
        }
      }
    }
  });
  
  const trendingUpIcons = document.querySelectorAll('svg[data-lucide="trending-up"]');
  trendingUpIcons.forEach(icon => {
    // Check if this trending-up icon is within a card that has 九州電工 title
    const parentCard = icon.closest('div');
    if (parentCard) {
      const titleElement = parentCard.querySelector('h3');
      if (titleElement && titleElement.textContent.trim() === '九州電工') {
        console.log('Found trending-up icon in Kyushudenko card');
        const container = icon.closest('.w-12, .w-16');
        if (container) {
          container.style.backgroundImage = 'url("./assets/Kyushudenko.jpeg")';
          container.style.backgroundSize = '70%';
          container.style.backgroundRepeat = 'no-repeat';
          container.style.backgroundPosition = 'center';
          container.style.backgroundColor = 'white';
          container.style.width = '4rem';
          container.style.height = '4rem';
          container.style.margin = '0 auto 0.75rem auto';
          container.style.display = 'flex';
          container.style.alignItems = 'center';
          container.style.justifyContent = 'center';
          icon.style.display = 'none';
        }
      }
    }
  });
  
  console.log('Logo replacement completed');
}

// Run immediately when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', replaceLogos);
} else {
  replaceLogos();
}

// Run after a short delay to catch dynamically loaded content
setTimeout(replaceLogos, 1000);
setTimeout(replaceLogos, 2000);

// Watch for DOM changes and re-run if needed
const observer = new MutationObserver(function(mutations) {
  let shouldReplace = false;
  mutations.forEach(function(mutation) {
    if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
      shouldReplace = true;
    }
  });
  if (shouldReplace) {
    setTimeout(replaceLogos, 100);
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});

