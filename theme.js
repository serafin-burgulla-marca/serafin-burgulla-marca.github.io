// Dark mode toggle. The initial theme is set by an inline script in <head>
// (before first paint) so the page never flashes the wrong colors.
(function () {
  var root = document.documentElement;
  function save(t) { try { localStorage.setItem('theme', t); } catch (e) {} }
  function label(btn) {
    var dark = root.getAttribute('data-theme') === 'dark';
    btn.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    btn.setAttribute('title', dark ? 'Light mode' : 'Dark mode');
  }
  document.querySelectorAll('.theme-toggle').forEach(function (btn) {
    label(btn);
    btn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      save(next);
      label(btn);
    });
  });
})();
