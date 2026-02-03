// Treat section Swipers (main + right thumbs) + bottom bar sync
(() => {
  const mainEl = document.querySelector(".treatMainSwiper");
  const thumbEl = document.querySelector(".treatThumbSwiper");
  if (!mainEl || !thumbEl) return;

  const fill = document.querySelector(".treatProgress__fill");
  const cur = document.querySelector(".treatCount__current");
  const total = document.querySelector(".treatCount__total");

  const prevBtn = document.querySelector(".treatBtn--prev");
  const nextBtn = document.querySelector(".treatBtn--next");

  const thumbs = new Swiper(thumbEl, {
  direction: "horizontal",   // ✅ 가로
  slidesPerView: 3,
  spaceBetween: 8,
  watchSlidesProgress: true,
  allowTouchMove: true
});

  const main = new Swiper(mainEl, {
    speed: 650,
    effect: "slide",
    slidesPerView: 1,
    spaceBetween: 0,
    thumbs: { swiper: thumbs },
    on: {
      init(swiper){
        const t = swiper.slides.length;
        if (total) total.textContent = String(t);
        updateBar(swiper);
      },
      slideChange(swiper){
        updateBar(swiper);
      }
    }
  });

  // custom nav
  prevBtn?.addEventListener("click", () => main.slidePrev());
  nextBtn?.addEventListener("click", () => main.slideNext());

  function updateBar(swiper){
    const t = swiper.slides.length;
    const i = swiper.realIndex + 1;

    if (cur) cur.textContent = String(i);

    // progress: (i-1)/(t-1) but sample looks like step blocks -> we use i/t 느낌
    const pct = (i / t) * 100;
    if (fill) fill.style.width = `${pct}%`;
  }
})();
