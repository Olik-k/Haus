let hamb = document.querySelector(".hamb");
let navMenu = document.querySelector(".header__nav1-left");

hamb.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamb.classList.toggle("active");
  navMenu.classList.toggle("active");
}