const sidebarToggle = document.querySelector(".sidebar-toggle");
const nav = document.querySelector(".nav");
const closeBtn = document.querySelector(".close-btn");

sidebarToggle.addEventListener("click",() => {
  nav.classList.toggle("show-navbar");
  console.log(nav);
});


closeBtn.addEventListener("click", ()=> {
  nav.classList.toggle("show-navbar");
  console.log(closeBtn);
})