const dropdownBtns = document.querySelectorAll(".dropdown__btn");

dropdownBtns.forEach((dropdownBtn) => {
  const dropdownListWrap = dropdownBtn.nextElementSibling;
  const buttonText = dropdownBtn.querySelector("p");

  dropdownBtn.addEventListener("click", () => {
    if (dropdownListWrap.classList.contains("active")) {
      dropdownListWrap.classList.remove("active");
    } else {
      dropdownListWrap.classList.add("active");
    }
  });

  const dropdownItems = dropdownListWrap.querySelectorAll("li");

  dropdownItems.forEach((item) => {
    item.addEventListener("click", () => {
      buttonText.textContent = item.textContent;
      dropdownListWrap.classList.remove("active");
    });
  });
});
