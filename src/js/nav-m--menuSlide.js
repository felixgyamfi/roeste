// toggle function for menu slide
function toggleVisible() {
  const menu = document.getElementById(`nav--menu`);
  menu.classList.toggle(`visible`);
}

const elOpen = document.getElementById(`nav--burger`);
elOpen.addEventListener("click", toggleVisible);
const elClose = document.getElementById(`menu-close`);
elClose.addEventListener("click", toggleVisible);
