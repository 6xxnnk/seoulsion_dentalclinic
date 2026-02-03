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

  // ✅ Thumbs (가로 3장)
  const thumbs = new Swiper(thumbEl, {
    direction: "horizontal",
    slidesPerView: 3,
    spaceBetween: 8,
    watchSlidesProgress: true,
    allowTouchMove: true,
  });

  // ✅ Main
  const main = new Swiper(mainEl, {
    speed: 650,
    slidesPerView: 1,
    spaceBetween: 0,
    effect: "slide",
    thumbs: { swiper: thumbs },

    on: {
      init(swiper){
        const t = swiper.slides.length;
        if (total) total.textContent = String(t);
        updateBar(swiper);
      },

      // 텍스트 전환 (페이드/슬라이드)
      slideChangeTransitionStart(){
        mainWrap?.classList.add("is-animating");
      },
      slideChangeTransitionEnd(swiper){
        mainWrap?.classList.remove("is-animating");
        updateBar(swiper);
      }
    }
  });

  // ✅ Custom nav
  prevBtn?.addEventListener("click", () => main.slidePrev());
  nextBtn?.addEventListener("click", () => main.slideNext());

  function updateBar(swiper){
    const t = swiper.slides.length;
    const i = (swiper.realIndex ?? swiper.activeIndex) + 1;

    if (cur) cur.textContent = String(i);
    if (fill) fill.style.width = `${(i / t) * 100}%`;
  }
})();
