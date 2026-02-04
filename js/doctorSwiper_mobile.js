/* =========================================================
   Doctors mobile tabs (現/前) — 필요한 코드만
   ✅ HTML 그대로 사용 (data-tabs, .dcard__tab, data-panel)
========================================================= */
document.querySelectorAll('[data-tabs]').forEach((spec) => {
  const tabs = spec.querySelectorAll('.dcard__tab');
  if (!tabs.length) return;

  const setActive = (key) => {
    // aria + class
    tabs.forEach((btn) => {
      const isActive = btn.dataset.tab === key;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-selected', String(isActive));
    });

    // spec state class
    spec.classList.toggle('is-prev', key === 'prev');
  };

  tabs.forEach((btn) => {
    btn.addEventListener('click', () => setActive(btn.dataset.tab));
  });

  // init
  const initKey = spec.querySelector('.dcard__tab.is-active')?.dataset.tab || 'cur';
  setActive(initKey);
});
