// heroSwiper.js
document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".heroSwiper", {
    slidesPerView: 1,
    loop: true,
    speed: 700,
    effect: "slide",

    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: ".heroNext",
      prevEl: ".heroPrev",
    },

    pagination: {
      el: ".heroPagination",
      clickable: true,
    },
  });
});
