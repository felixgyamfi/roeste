// toggle function for menu slide
function toggleVisible() {
  const menu = document.getElementById(`nav--menu`);
  menu.classList.toggle(`visible`);
}

const elOpen = document.getElementById(`nav--burger`);
elOpen.addEventListener("click", toggleVisible);
const elClose = document.getElementById(`menu-close`);
elClose.addEventListener("click", toggleVisible);

// color switch fuction for navbar-m
const nav = document.getElementById(`nav-m-container`);
const navlogo = document.getElementById(`nav--logo-m`);
const navBurger = document.getElementById(`nav--burger`);
const header = document.querySelector(`header`);

const sectionOneObserver = new IntersectionObserver(function (
  entries,
  observer
) {
  entries.forEach((entry) => {
    console.log(entry.isIntersecting);
    if (!entry.isIntersecting) {
      nav.classList.add("whiteBg");
      navBurger.classList.add("invertColor");
      navlogo.classList.add("invertColor");
    } else {
      nav.classList.remove("whiteBg");
      navBurger.classList.remove("invertColor");
      navlogo.classList.remove("invertColor");
    }
  });
});
sectionOneObserver.observe(header);
