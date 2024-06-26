import View from "./view.js";

class OffersView extends View {
  offersProduct;
  closeOfferBtn;

  setOffersData(data) {
    this.offersData = data.data;
  }

  _handleOffersClick() {
    this.offersProduct.forEach((product) => {
      product.addEventListener("click", () => {
        const img = product.querySelector(".js-offers-image").src;
        const name = product.querySelector(".js-offers-title").textContent;
        const price = product.querySelector(".js-offers-price").textContent;
        this.shop.insertAdjacentHTML(
          "afterbegin",
          this._handleInformationMarkup(img, name, price)
        );
        this.closeOfferBtn = document.querySelector(".js-close-offer");
        this._handleCloseOffer();
      });
    });
  }

  _handleCloseOffer() {
    this.closeOfferBtn.addEventListener("click", () => {
      this.closeOfferBtn.closest(".js-offers-info").remove();
    });
  }

  _handleInformationMarkup(img, name, price) {
    return `
    <div class="offers__item-info js-offers-info">
     <div class="offers__item">
     <button type="button" class="offers__close-btn js-close-offer">
      <img src="images/close.png" alt="close icon" class="offers__close-img">
      </button>
      <img src="${img}" alt="product image" class="offers__item-image">
      <h2 class="offers__item-title">${name}</h2>
      <span class="offers__item-price">${price}</span>
      <p class="offers__item-text"> We have set up a list of our recommendations with our best sellers. <br> To order, visit our product shop. </p>
     </div>
    </div>
    `;
  }

  _handleOffersUI() {
    this.offers.innerHTML = this._generateOffers();
    this.offersProduct = document.querySelectorAll(".js-offers-product");
    this._handleOffersClick();
  }

  _generateOffers() {
    return `
        ${this.offersData
          .map(
            (offer) =>
              `<li class="offers__list-item"> 
            <a href="javascript:;" class="offers__product-link js-offers-product">
            <img src="${offer.thumbnail}" alt="product image" class="offers__product-image js-offers-image">
            <span class="offers__product-title js-offers-title"> ${offer.title} </span>
            <span class="offers__product-price js-offers-price"> ${offer.price}$ </span>
            </a>
            </li>`
          )
          .slice(0, 10)
          .join("")}
        `;
  }
}

export default new OffersView();
