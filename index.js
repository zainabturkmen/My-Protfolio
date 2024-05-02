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


const string = "d";

if (string === "") {
  console.log("hehehe false");
}else{
  console.log("hahaha true");
}