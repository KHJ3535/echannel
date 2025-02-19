const snsCardSwiper = new Swiper(".sns__sw", {
  slidesPerView: 4, // 한 화면에 4개의 슬라이드가 보이도록 설정
  spaceBetween: 40, // 슬라이드 간의 간격 40px
  navigation: {
    nextEl: ".sns__sw .swiper-button-next",
    prevEl: ".sns__sw .swiper-button-prev",
  },
  speed: 500,
});
