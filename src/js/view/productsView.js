import View from "./view.js";

class ProductsView extends View {
  productsBtn = document.querySelector(".js-products");
  closeBtn;
  productsContainer;
  products;
  quantity;
  orderBtn;
  deleteOrder;
  productInfo = new Set();
  productCart = document.querySelector(".js-cart");
  productCartBtn = document.querySelector(".js-cart-btn");
  productCartCloser = document.querySelector(".js-close-cart");

  setProductsData(data) {
    this.productsData = data.data;
  }

  _handleCartActivity() {
    this.productCartBtn.addEventListener("click", () => {
      this.productCart.classList.add("active");
    });
  }

  _handleOrderQuantity(price) {
    return price * this.quantity;
  }

  _handleClosingOrder() {
    this.productCartCloser.addEventListener("click", () => {
      this.productCart.classList.remove("active");
    });
  }

  _handleDeleteOrder() {
    this.deleteOrder.addEventListener("click", () => {
      this.deleteOrder.closest(".js-cart-item").remove();
      document.querySelector(".js-empty-cart").textContent =
        "There is no products.";
    });
  }

  _handleProductsClick() {
    this.productsBtn.addEventListener("click", () => {
      this.shop.insertAdjacentHTML("afterbegin", this._generateMarkup());
      this.body.style.overflow = "hidden";
      this.closeBtn = document.querySelector(".js-close-products");
      this.productsContainer = document.querySelector(".js-products");
      this.products = document.querySelectorAll(".js-products-item");
      this._handleCloseClick();
      this._handleProductsOrder();
      this._handleUndoOrder();
    });
  }

  _handleCloseClick() {
    this.closeBtn.addEventListener("click", () => {
      this.productsContainer.remove();
      this.body.style.overflowY = "auto";
    });
  }

  _handleOrderClick(thumbnail, title, price) {
    this.orderBtn.addEventListener("click", () => {
      this.quantity = document.querySelector(".js-product-quantity").value;
      const numericPrice = Number(price.slice(0, -1));
      const productItem = {
        thumbnail: thumbnail,
        title: title,
        price: price,
        quantity: this._handleOrderQuantity(numericPrice),
      };

      if (!this.productInfo.has(title)) {
        this.productInfo.add(title);
        this.productCart
          .querySelector(".js-cart-list")
          .insertAdjacentHTML(
            "afterbegin",
            this._generateCartItemMarkup(productItem)
          );
      }

      this.orderBtn.closest(".js-order").remove();
      document.querySelector(".js-empty-cart").textContent = "";
      this.deleteOrder = document.querySelector(".js-delete-products");
      this._handleDeleteOrder();
    });
  }

  _generateCartItemMarkup(cartItem) {
    return `<li class="shop__cart-item js-cart-item">
     <button type="button" class="products__delete-btn js-delete-products">
          <img src="images/close.png" alt="close icon" class="products__delete-img">
        </button>
      <img src="${cartItem.thumbnail}" alt="product image" class="shop__cart-image">
      <div class="shop__cart-line">
        <span class="shop__cart-title"> ${cartItem.title} </span>
        <span class="shop__cart-price"> Original price: <span class="shop__cart-decoration">${cartItem.price}</span> </span>
        <span class="shop__cart-quantity"> Your order: <span class="shop__cart-decoration">${cartItem.quantity}$</span> </span>
      </div>
    </li>`;
  }

  _handleProductsOrder() {
    this.products.forEach((item) => {
      item.addEventListener("click", () => {
        const itemThumb = item.querySelector(".js-product-image").src;
        const itemTitle = item.querySelector(".js-product-title").textContent;
        const itemPrice = item.querySelector(".js-item-price").textContent;

        this.shop.insertAdjacentHTML(
          "afterbegin",
          this._generateProductOrder(itemThumb, itemTitle, itemPrice)
        );
        this.orderBtn = document.querySelector(".js-order-btn");
        this._handleOrderClick(itemThumb, itemTitle, itemPrice);
      });
    });
  }

  _generateMarkup() {
    return `
      <section class="products js-products">
        <button type="button" class="products__close-btn js-close-products">
          <img src="images/close.png" alt="close icon" class="products__close-img">
        </button>
        <div class="products__container">
          <div class="products__join-text"> 
            <h2 class="products__join-title"> A place where you can find everything for you </h2>
            <p class="products__join-lines">We purchase items exclusively according to the requests of our customers. Because details matter to us. </p>
          </div>
          <div class="products__tape">
            <p class="products__tape-text"> Best prices just for you! </p>
          </div>
          <ul class="products__list">
            ${this._handleProductsItems()}
          </ul>
        </div>
      </section>
    `;
  }

  _handleProductsItems() {
    return this.productsData
      .map((item) => {
        return `
          <li class="products__list-item js-products-item">
            <a href="javascript:;" class="products__link"> 
              <img src="${item.thumbnail}" alt="product image" class="products__product-image js-product-image">
              <span class="products__product-title js-product-title">${item.title}</span>
              <span class="products__product-price js-item-price">${item.price}$</span>
            </a>
          </li>
        `;
      })
      .slice(0, this.productsData.length - 1)
      .join("");
  }

  _generateProductOrder(photo, name, price) {
    return `
      <div class="products__order js-order">
        <div class="products__order-container">
        <button type="button" class="products__clear-btn js-undo-product">
          <img src="images/close.png" alt="close icon" class="products__undo-img">
          </button>
          <img src="${photo}" alt="product image" class="products__order-image">
          <h2 class="products__order-title">${name}</h2>
          <span class="products__order-price">${price}</span>
          <input type="number" class="products__order-quantity js-product-quantity" min="1" max="5" value="1">
          <button type="button" class="products__order-button js-order-btn"> Order </button>
        </div>
      </div>
    `;
  }
}

export default new ProductsView();
