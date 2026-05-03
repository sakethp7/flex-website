(function() {
  // Execute immediately to prevent FOUC (Flash of Unstyled Content)
  const savedTheme = localStorage.getItem('flex-theme');
  const root = document.documentElement;
  if (savedTheme) {
    root.setAttribute('data-theme', savedTheme);
  } else {
    root.setAttribute('data-theme', 'light');
  }

  // Setup event listener on DOMContentLoaded so the button exists
  document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        const currentTheme = root.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        root.setAttribute('data-theme', newTheme);
        localStorage.setItem('flex-theme', newTheme);
      });
    }
  });
})();
