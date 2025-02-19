gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".main__program",
    markers: true,
    start: "top top",
    end: "bottom bottom",
    pin: true,
    scrub: 1,
  },
});

tl.fromTo(
  ".line1",
  { y: -40, opacity: 0.5 },
  { y: -600, opacity: 1, duration: 4 }
)
  .fromTo(
    ".line2",
    { y: -1600, opacity: 0.5 },
    { y: 0, opacity: 1, duration: 4 },
    "<"
  )
  .fromTo(
    ".line3",
    { y: -40, opacity: 0.5 },
    { y: -600, opacity: 1, duration: 4 },
    "<"
  );
