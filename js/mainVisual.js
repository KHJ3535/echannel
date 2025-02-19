const mainVisual = new Swiper(".main__visual--sw", {
  loop: false,
  slidesPerview: 1,
  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".main__visual .swiper-button-next",
    prevEl: ".main__visual .swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    stopOnLastSlide: false,
  },
  speed: 800,
  slideToClickedSlide: true,
  spaceBetween: "50",
  //effect: 'fade'
});
let sw = 0;
const mainVisualSlideBtn = document.querySelector(
  ".mainVisual__swiper--remote > i"
);

mainVisualSlideBtn.addEventListener("click", () => {
  if (sw === 0) {
    mainVisual.autoplay.stop();
    mainVisualSlideBtn.classList.remove("fa-circle-pause");
    mainVisualSlideBtn.classList.add("fa-circle-play");
    sw = 1;
  } else {
    mainVisual.autoplay.start();
    mainVisualSlideBtn.classList.remove("fa-circle-play");
    mainVisualSlideBtn.classList.add("fa-circle-pause");
    sw = 0;
  }
});
