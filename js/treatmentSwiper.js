// treatmentSwiper.js
document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".treatmentSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,

    pagination: {
      el: ".treatmentPagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".treatmentNext",
      prevEl: ".treatmentPrev",
    },

    speed: 600,

    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 22,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 24,
      }
    }
  });
});
