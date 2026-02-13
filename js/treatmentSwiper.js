// Treat section (main + thumbs) + bottom bar + text transition
(() => {
  const section = document.querySelector("#treat");
  if (!section) return;

  const mainEl = section.querySelector(".treatMainSwiper");
  const thumbEl = section.querySelector(".treatThumbSwiper");
  if (!mainEl || !thumbEl) return;

  const mainWrap = section.querySelector(".treatMain");
  const fill = section.querySelector(".treatProgress__fill");
  const cur = section.querySelector(".treatCount__current");
  const total = section.querySelector(".treatCount__total");
  const prevBtn = section.querySelector(".treatBtn--prev");
  const nextBtn = section.querySelector(".treatBtn--next");

  // ✅ Thumbs: 데스크탑/태블릿 동일(3장 고정, 스와이프/클릭 가능)
  const thumbs = new Swiper(thumbEl, {
    direction: "horizontal",
    slidesPerView: 2,
    spaceBetween: 8,
    watchSlidesProgress: true,
    allowTouchMove: true,
    slideToClickedSlide: true,
    resistanceRatio: 0.75,
  });

  // ✅ Main
  const main = new Swiper(mainEl, {
    speed: 650,
    slidesPerView: 1,
    spaceBetween: 0,
    effect: "slide",
    thumbs: { swiper: thumbs },

    on: {
      init(swiper) {
        const t = swiper.slides.length;
        if (total) total.textContent = String(t);
        updateBar(swiper);
      },

      slideChangeTransitionStart() {
        mainWrap?.classList.add("is-animating");
      },
      slideChangeTransitionEnd(swiper) {
        mainWrap?.classList.remove("is-animating");
        updateBar(swiper);
      },
    },
  });

  prevBtn?.addEventListener("click", () => main.slidePrev());
  nextBtn?.addEventListener("click", () => main.slideNext());

  function updateBar(swiper) {
    const t = swiper.slides.length;
    const i = (swiper.realIndex ?? swiper.activeIndex) + 1;
    if (cur) cur.textContent = String(i);
    if (fill) fill.style.width = `${(i / t) * 100}%`;
  }
})();
