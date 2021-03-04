/* Add switching scrollbar */

const nav = document.getElementById(`nav-d`);
const navlogo = document.querySelector(`.nav--logo`);
const navLinks = document.querySelectorAll(`.nav--links a`);
const header = document.querySelector(`header`);

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
        navLink.classList.add("invertColor");
        navlogo.classList.add("invertColor");
      });
    } else {
      navLinks.forEach((navLink) => {
        nav.classList.remove("whiteBg");
        navLink.classList.remove("invertColor");
        navlogo.classList.remove("invertColor");
      });
    }
  });
});

sectionOneObserver.observe(header);
