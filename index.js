const sidebarToggle = document.querySelector(".sidebar-toggle");
const nav = document.querySelector(".nav");
const closeBtn = document.querySelector(".close-btn");
const links = document.querySelectorAll(".links");

sidebarToggle.addEventListener("click", () => {
  nav.classList.toggle("show-navbar");
});

closeBtn.addEventListener("click", () => {
  nav.classList.toggle("show-navbar");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.toggle("show-navbar");
  });
});

const james = 22;
const valeria = 25;
const kenneth = 27;
