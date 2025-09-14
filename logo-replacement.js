// JavaScript to replace YTAA and Kyushudenko icons with actual logos
function replaceLogos() {
  console.log('Starting logo replacement...');
  
  // Method 1: Target by specific class names (most reliable)
  // YTAA - teal background
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
  
  // Kyushudenko - indigo background (correct class name)
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
  
  // Kyushudenko - purple background (fallback)
  const kyushuContainersPurple = document.querySelectorAll('.w-12.h-12.bg-purple-500\\/20.rounded-lg.flex.items-center.justify-center.mb-3');
  kyushuContainersPurple.forEach(container => {
    console.log('Found Kyushudenko container by purple class name');
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
  
  // Method 2: Target by SVG data-lucide attributes
  const heartIcons = document.querySelectorAll('svg[data-lucide="heart"]');
  heartIcons.forEach(icon => {
    console.log('Found heart icon');
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
  });
  
  const trendingUpIcons = document.querySelectorAll('svg[data-lucide="trending-up"]');
  trendingUpIcons.forEach(icon => {
    console.log('Found trending-up icon');
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
  });
  
  // Method 3: Target by text content
  const allH3s = document.querySelectorAll('h3');
  allH3s.forEach(h3 => {
    if (h3.textContent.includes('YTAA')) {
      console.log('Found YTAA by text content');
      const container = h3.parentElement.querySelector('.w-12, .w-16');
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
    
    if (h3.textContent.includes('九州電工')) {
      console.log('Found Kyushudenko by text content');
      const container = h3.parentElement.querySelector('.w-12, .w-16');
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
  });
  
  // Method 4: Target by class attribute containing specific background colors
  const allDivs = document.querySelectorAll('div[class*="bg-teal-500"], div[class*="bg-indigo-500"], div[class*="bg-purple-500"]');
  allDivs.forEach(div => {
    if (div.className.includes('bg-teal-500')) {
      console.log('Found teal background div');
      div.style.backgroundImage = 'url("./assets/YTAA.jpeg")';
      div.style.backgroundSize = '70%';
      div.style.backgroundRepeat = 'no-repeat';
      div.style.backgroundPosition = 'center';
      div.style.backgroundColor = 'white';
      div.style.width = '4rem';
      div.style.height = '4rem';
      div.style.margin = '0 auto 0.75rem auto';
      div.style.display = 'flex';
      div.style.alignItems = 'center';
      div.style.justifyContent = 'center';
      const svg = div.querySelector('svg');
      if (svg) svg.style.display = 'none';
    }
    
    if (div.className.includes('bg-indigo-500') || div.className.includes('bg-purple-500')) {
      console.log('Found indigo/purple background div');
      div.style.backgroundImage = 'url("./assets/Kyushudenko.jpeg")';
      div.style.backgroundSize = '70%';
      div.style.backgroundRepeat = 'no-repeat';
      div.style.backgroundPosition = 'center';
      div.style.backgroundColor = 'white';
      div.style.width = '4rem';
      div.style.height = '4rem';
      div.style.margin = '0 auto 0.75rem auto';
      div.style.display = 'flex';
      div.style.alignItems = 'center';
      div.style.justifyContent = 'center';
      const svg = div.querySelector('svg');
      if (svg) svg.style.display = 'none';
    }
  });
  
  // Method 5: Target by position in grid (if other methods fail)
  const gridItems = document.querySelectorAll('.grid > div');
  if (gridItems.length >= 6) {
    // YTAA is typically the 5th item (index 4)
    const ytaaItem = gridItems[4];
    if (ytaaItem) {
      const container = ytaaItem.querySelector('.w-12, .w-16');
      if (container) {
        console.log('Found YTAA by grid position');
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
    
    // Kyushudenko is typically the 6th item (index 5)
    const kyushuItem = gridItems[5];
    if (kyushuItem) {
      const container = kyushuItem.querySelector('.w-12, .w-16');
      if (container) {
        console.log('Found Kyushudenko by grid position');
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
setTimeout(replaceLogos, 5000);

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

