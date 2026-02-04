// About reveal animation (repeat, less flicker)
(() => {
  const targets = document.querySelectorAll(".reveal");
  if (!targets.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("is-visible", entry.isIntersecting);
    });
  }, {
    threshold: 0.08,                 // ✅ 경계 튐 감소
    rootMargin: "0px 0px -18% 0px",  // ✅ 살짝 더 여유
  });

  targets.forEach((el) => io.observe(el));
})();
