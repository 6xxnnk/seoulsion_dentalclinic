(() => {
  const root = document.querySelector(".heroSwiper");
  if (!root || typeof Swiper === "undefined") return;

  const hero = new Swiper(root, {
    loop: true,
    speed: 700,
    effect: "fade",
    fadeEffect: { crossFade: true },
    pagination: {
      el: root.querySelector(".heroPagination"),
      clickable: true
    }
  });

  const nextBtn = root.querySelector(".heroSlide__arrow");
  nextBtn?.addEventListener("click", () => hero.slideNext());
})();
