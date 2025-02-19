const btn = document.querySelector(".more__channels__btn");
const content = document.querySelector(".more__channels__content");
const icon = btn.querySelector("i");

btn.addEventListener("click", () => {
  content.classList.toggle("active");
  icon.classList.toggle("fa-chevron-up");
  icon.classList.toggle("fa-chevron-down");
});

document.addEventListener("click", (e) => {
  if (!btn.contains(e.target) && !content.contains(e.target)) {
    content.classList.remove("active");
    icon.classList.add("fa-chevron-up");
    icon.classList.remove("fa-chevron-down");
  }
});

gsap.registerPlugin(ScrollTrigger);
const morechannelTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#sc-1",
    markers: true,
    start: "top top",
    end: "bottom bottom",
    pin: true,
    scrub: 1,
  },
});
morechannelTl.fromTo(".more__channels", { y: 120 }, { y: 0, duration: 4 });
