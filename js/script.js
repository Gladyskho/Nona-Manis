//Toggle class active

const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#smoothies-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const smoothies = document.querySelector("#smoothies-menu");

document.addEventListener("click", function (e) {
  if (!smoothies.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
