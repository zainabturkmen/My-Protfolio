const sidebarToggle = document.querySelector(".sidebar-toggle");
const nav = document.querySelector(".nav");
const closeBtn = document.querySelector(".close-btn");

sidebarToggle.addEventListener("click",() => {
  nav.classList.toggle("show-navbar");
});


closeBtn.addEventListener("click", ()=> {
  nav.classList.toggle("show-navbar");
})