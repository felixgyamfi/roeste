import products from "./products.json";
import productImages from "../assets/main/images/*.png";
import productIcons from "../assets/main/icons/*.svg";

function shop() {
  const productContainer = document.querySelector(".display--container");
  const productsHTMLArray = products
    .map(
      (product) => `
    <div class="display--product-container">
    <img class="display--product-img" src="${
      productImages[product.image.imageName]
    }" alt="${product.image.alt}"></img>
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
