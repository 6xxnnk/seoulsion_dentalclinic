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
    breakpoints: {
      0: { slidesPerView: 1.15, spaceBetween: 14 },
      768: { slidesPerView: 2.2, spaceBetween: 22 },
      1024: { slidesPerView: 3, spaceBetween: 34 }
    },
    on: {
      init(s){
        // loop일 때 slides.length는 복제 포함이라 8로 고정
        if (total) total.textContent = "8";
        update(s);
      },
      slideChange(s){
        update(s);
      }
    }
  });

  function update(s){
    // realIndex: 0~7
    const i = (s.realIndex ?? 0) + 1;
    const t = 8;

    if (cur) cur.textContent = String(i);
    if (fill) fill.style.width = `${(i / t) * 100}%`;
  }
})();
