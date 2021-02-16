const navBar = document.querySelector(`#nav-d , #nav-m`);
const menuItems = document.querySelectorAll(`.nav--logo , .nav--links`);

menuItems.forEach(item => {
  item.addEventListener(`scroll`, function (e) {
    const navElement = findElementInPath(e);
    changeColor(menuItems);
  })
})

function changeColor(item, color) {
  item.style.color = `translate(${color})`
}

function findElementInPath(event) {
  let element;
  event.path.forEach(elm => {
    if (elm.classList) {
      if (elm.classList.contains(`nav--logo , nav--links`)) {
        element = elm; 
      }
    }
  })
  return element;
}

function setActiveClass(elm) {
  menuItems 
}

