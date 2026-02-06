(() => {
  const section = document.querySelector("#tour");
  if (!section) return;

  const mainEl = section.querySelector(".tourSwiper");
  if (!mainEl) return;

  const fill = section.querySelector(".tourProgress__fill");
  const cur = section.querySelector(".tourCount__current");
  const total = section.querySelector(".tourCount__total");

  const thumbEl = section.querySelector(".tourThumbSwiper");
  const useThumbs = !!thumbEl && window.matchMedia("(max-width:1024px)").matches;

  let thumbs = null;

  if (useThumbs) {
    thumbs = new Swiper(thumbEl, {
      slidesPerView: "auto",
      spaceBetween: 10,
      watchSlidesProgress: true,
      freeMode: true,
    });
  }

  const main = new Swiper(mainEl, {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 650,
    centeredSlides: true,
    loop: false,

    // ✅ 태블릿에서만 thumbs 연결
    ...(thumbs ? { thumbs: { swiper: thumbs } } : {}),

    on: {
      init(swiper) {
        const t = swiper.slides.length;
        if (total) total.textContent = String(t);
        update(swiper);
      },
      slideChange(swiper) {
        update(swiper);
      }
    }
  });

  function update(swiper){
    const t = swiper.slides.length;
    const i = (swiper.realIndex ?? swiper.activeIndex) + 1;

    if (cur) cur.textContent = String(i);
    if (fill) fill.style.width = `${(i / t) * 100}%`;
  }
})();
