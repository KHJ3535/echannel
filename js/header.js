const headerInner = document.querySelector(".header__inner");
const headerMenuWrap = document.querySelector(".header__menu--wrap");
const headerMenu = document.querySelector(".header__menu");
headerInner.addEventListener("mouseenter", () => {
  headerMenuWrap.classList.add("active");
  headerInner.style.color = "black";
  headerInner.style.backgroundColor = "white";
  headerMenu.style.borderTop = "1px solid #f6a40e";
});

headerInner.addEventListener("mouseleave", () => {
  headerMenuWrap.classList.remove("active");
  headerInner.style.color = "white";
  headerInner.style.backgroundColor = "#1a1a1a";
});
