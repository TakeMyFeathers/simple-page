const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".navigation");
const body = document.querySelector("body");
const menu_items = document.querySelectorAll(".navigation__link");
const handleClick = () => {
  hamburger.classList.toggle("hamburger--active");
  nav.classList.toggle("navigation--active");
  body.classList.toggle("fixed");
};
hamburger.addEventListener("click", handleClick);

menu_items.forEach((element) => {
  element.addEventListener("click", function () {
    body.classList.remove("fixed");
    nav.classList.remove("navigation--active");
    hamburger.classList.remove("hamburger--active");
  });
});
