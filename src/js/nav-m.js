// color switch fuction for navbar-m
const nav = document.getElementById(`nav-m-container`);
const navlogo = document.getElementById(`nav--logo-m`);
const navBurger = document.getElementById(`nav--burger`);
const header = document.querySelector(`header`);

// eslint-disable-next-line func-names
const sectionOneObserver = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
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
