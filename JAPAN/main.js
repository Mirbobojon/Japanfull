const navMenu = document.querySelector("#nav-menu");
const toggle = document.querySelector(".toggle");
const close = document.querySelector(".close");

toggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

close.addEventListener("click", () => {
  navMenu.classList.remove("show");
});
