const swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  keyboard: {
    enabled: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
