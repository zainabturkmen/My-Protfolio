const navToggle = document.querySelector(".nav-toggle");
const navList = document.querySelectorAll(".nav-list");

navToggle.addEventListener("click", function () {
  document.body.classList.toggle("nav-open");
});
