const footerBannerSw = new Swiper(".footer__banner--sw", {
  loop: true,
  slidesPerview: 1,
  pagination: {
    el: ".swiper-pagination",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  speed: 800,
});
