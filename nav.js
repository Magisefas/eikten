// ── Shared navigation ──
// Call this on every page to highlight the correct nav item
// and wire up the bottom nav links.

(function () {
  const pages = [
    { id: 'nav-arti',      href: 'index.html' },
    { id: 'nav-visi',      href: 'visi.html' },
    { id: 'nav-prideti',   href: 'prideti.html' },
    { id: 'nav-issaugoti', href: 'issaugoti.html' },
    { id: 'nav-profilis',  href: 'profilis.html' },
  ];
  pages.forEach(p => {
    const el = document.getElementById(p.id);
    if (!el) return;
    // highlight current page
    if (window.location.pathname.endsWith(p.href) ||
        (p.href === 'index.html' && (window.location.pathname === '/' || window.location.pathname.endsWith('/')))) {
      el.classList.add('active');
    }
    el.addEventListener('click', () => { window.location.href = p.href; });
  });
})();
