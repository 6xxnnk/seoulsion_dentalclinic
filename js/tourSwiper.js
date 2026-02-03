// Tour swiper (8 slides) + progress bar
(() => {
  const el = document.querySelector(".tourSwiper");
  if (!el) return;

  const fill = document.querySelector(".tourProgress__fill");
  const cur = document.querySelector(".tourCount__current");
  const total = document.querySelector(".tourCount__total");

  const swiper = new Swiper(el, {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 34,
    loop: true,
    speed: 650,
    grabCursor: true,

    slideToClickedSlide: true,   // ✅ 이 줄 추가

    breakpoints: {
      0: { slidesPerView: 1.15, spaceBetween: 14 },
      768: { slidesPerView: 2.2, spaceBetween: 22 },
      1024: { slidesPerView: 3, spaceBetween: 34 }
    },
    on: {
      init(s){
        if (total) total.textContent = "8";
        update(s);
      },
      slideChange(s){
        update(s);
      }
    }
  });

  function update(s){
    const i = (s.realIndex ?? 0) + 1;
    const t = 8;

    if (cur) cur.textContent = String(i);
    if (fill) fill.style.width = `${(i / t) * 100}%`;
  }
})();
