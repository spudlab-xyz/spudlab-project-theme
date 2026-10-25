(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector('.theme-toggle');
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.primary-nav');
  const themes = ['auto', 'light', 'dark'];

  if (themeButton) {
    themeButton.addEventListener('click', () => {
      const current = themes.indexOf(root.dataset.theme || 'auto');
      const next = themes[(current + 1) % themes.length];
      root.dataset.theme = next;
      themeButton.dataset.mode = next;
      themeButton.setAttribute('title', `Colour theme: ${next}`);
      try { localStorage.setItem('theme', next); } catch (_) {}
    });
  }

  if (menuButton && navigation) {
    menuButton.addEventListener('click', () => {
      const expanded = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!expanded));
      navigation.classList.toggle('is-open', !expanded);
    });
  }
})();
