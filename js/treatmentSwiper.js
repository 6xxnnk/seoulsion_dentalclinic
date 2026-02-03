const swiper = new Swiper(".tourSwiper", {
  slidesPerView: "auto",     // ✅ 핵심
  centeredSlides: true,
  spaceBetween: 34,
  loop: true,
  speed: 650,
  grabCursor: true,

  breakpoints: {
    0: {
      spaceBetween: 14,
      slidesPerView: "auto"
    },
    768: {
      spaceBetween: 22,
      slidesPerView: "auto"
    }
  },

  on: {
    init(s){
      document.querySelector(".tourCount__total").textContent = "8";
      updateTourBar(s);
    },
    slideChange(s){
      updateTourBar(s);
    }
  }
});
