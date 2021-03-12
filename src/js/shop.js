import products from "./products.json";
import productImages from "../assets/main/images/*.png";
import productIcons from "../assets/main/icons/*.svg";

function shop() {
  const productContainer = document.querySelector(".display--container");
  const productsHTMLArray = products
    .map(
      (product) => `
    <div class="display--product-container" data-id="${product.id}">
    <div class="display--img-container"><div class="quick-add-btn">quick add +</div><img class="display--product-img" src="${
      productImages[product.image.imageName]
    }" alt="${product.image.alt}"></img>
    </div>
    <div class="display--info-container">
      <div class="product-name">${product.productName}</div>
      <div class="product-price">${product.price / 100}0 €</div>
      <div class="icon-container">
        <img src="${productIcons[product.symbolBeansWh.symbol]}" alt="${
        product.symbolBeansWh.alt
      }">
        <img src="${productIcons[product.symbolPressWh.symbol]}" alt="${
        product.symbolPressWh.alt
      }">
        <img src="${productIcons[product.symbolScoopWh.symbol]}" alt="${
        product.symbolScoopWh.alt
      }">
      </div>
    </div>
  </div>
    `
    )
    .join("");
  productContainer.innerHTML = productsHTMLArray;
}

export default shop;

// quick add button hover animation

function hoverQuickAdd() {
  const productContainer = document.querySelectorAll(".display--product-container");
  var quickAdd = document.querySelector(".quick-add-btn");

  productContainer.addEventListener("mouseover", hoverIn, false);
  productContainer.addEventListener("mouseout", hoverOut, false);

  productContainer.setAttribute("style", "background-color:blue;")

}

hoverQuickAdd();
