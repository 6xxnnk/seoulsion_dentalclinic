// implantSwiper.js
document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".implantSwiper", {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,

    navigation: {
      nextEl: ".implantNext",
      prevEl: ".implantPrev",
    },

    pagination: {
      el: ".implantPagination",
      clickable: true,
    },

    speed: 700,

    breakpoints: {
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 1,
      }
    }
  });
});
