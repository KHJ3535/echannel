const footerBannerSw = new Swiper(".footer__banner--sw", {
  loop: true, // 무한 스크롤
  slidesPerview: 1, // 몇 개 보여줄지
  pagination: {
    el: ".swiper-pagination",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
  autoplay: {
    delay: 2000, // 3초마다 자동 전환
    disableOnInteraction: false,
  },
  speed: 800, // 전환 애니메이션 속도
});
