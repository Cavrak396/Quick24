import View from "./view.js";

class OffersView extends View {
  setOffersData(data) {
    this.offersData = data.data;
  }

  _handleOffersUI() {
    this.offers.innerHTML = this._generateOffers();
  }

  _generateOffers() {
    return `
        ${this.offersData
          .map(
            (offer) =>
              `<li class="offers__list-item"> 
            <a href="javascript:;" class="offers__product-link">
            <img src=${offer.thumbnail} alt="product image" class="offers__product-image">
            <span class="offers__product-title"> ${offer.title} </span>
            <span class="offers__product-price"> ${offer.price}$ </span>
            </a>
            </li>`
          )
          .slice(0, 10)
          .join(" ")}
        `;
  }
}

export default new OffersView();
