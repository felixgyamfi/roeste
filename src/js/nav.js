/* Add switching scrollbar */

const nav = document.getElementById(`nav-d`);
const sectionOne = document.getElementsByTagName(`header`);
const navlogo = document.querySelector(`.nav--logo`);
const navLinks = document.querySelectorAll(`.nav--links a`);
const header = document.querySelector(`header`);
const burgerLogo = document.getElementById(`left4`);

const sectionOneOptions = {
  rootMargin: "-65px 0px 0px 0px",
};

const sectionOneObserver = new IntersectionObserver(function (
  entries,
  observer
) {
  entries.forEach((entry) => {
      console.log(entry.isIntersecting);
    if (!entry.isIntersecting) {
      navLinks.forEach((navLink) => {
        nav.classList.add("whiteBg");
        navLink.classList.add("changeColor");
        navlogo.classList.add("changeColor");
      });
    } else {
        navLinks.forEach((navLink) => {
            nav.classList.remove("whiteBg");
            navLink.classList.remove("changeColor");
            navlogo.classList.remove("changeColor");
          });
    }
  });
});

sectionOneObserver.observe(header);

