import View from "./view.js";

class AdminView extends View {
  adminContainer;
  adminStatusBtns;
  previewContainer;
  closeBtn;

  setAdminData(data) {
    this.adminData = data;
  }

  setProductData(data) {
    this.productData = data.data;
  }

  _handleAccountClick() {
    this.adminBtn.addEventListener("click", () => {
      this.shop.insertAdjacentHTML("afterbegin", this._generateMarkup());
      this.adminContainer = document.querySelector(".js-admin");
      this.closeBtn = document.querySelector(".js-close-admin");
      this.body.style.overflow = 'hidden';
      this._handleAdminStatus();
      this._closeAdminContainer();
    });
  }

  _generateMarkup() {
    return `
          <section class="admin js-admin">
            <div class="admin__container">
            <button type="button" class="admin__close-btn js-close-admin">
                  <img src="images/close.png" alt="close icon" class="admin__close-img">
                </button>
              <div class="admin__line">
                <div class="admin__options">
                  <nav class="admin__navigation">
                    <ul class="admin__navigation-list">
                      <li class="admin__navigation-item">
                        <a href="#" class="admin__navigation-link js-status-link js-account-btn" data-type="account">Account</a>
                      </li>
                      <li class="admin__navigation-item">
                        <a href="#" class="admin__navigation-link js-status-link js-products-btn" data-type="products">Products</a>
                      </li>
                      <li class="admin__navigation-item">
                        <a href="#" class="admin__navigation-link js-status-link js-offers-btn" data-type="offers">Offers</a>
                      </li>
                        <li class="admin__navigation-item">
                        <a href="#" class="admin__navigation-link js-status-link js-suggestions-btn" data-type="suggestions">User Suggestions</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div class="admin__preview js-preview"></div>
              </div>
            </div>
          </section>
          `;
  }

  _closeAdminContainer() {
    this.closeBtn.addEventListener("click", () => {
      this.adminContainer.style.display = "none";
      this.body.style.overflow = 'auto';
    });
  }

  _handleAdminStatus() {
    this.adminStatusBtns = document.querySelectorAll(".js-status-link");
    this.previewContainer = document.querySelector(".js-preview");

    this.adminStatusBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const type = btn.getAttribute("data-type");
        this._updatePreview(type);
      });
    });
  }

  _updatePreview(type) {
    let content;
    switch (type) {
      case "account":
        content = this._generateAdminStatus(this.adminData);
        break;
      case "products":
        content = this._generateProductStatus(this.productData);
        break;
      case "offers":
        content = "<p>Offer details go here.</p>";
        break;
      case "suggestions":
        content = "<p>Suggestions</p>";
        break;
      default:
        content = "<p>Select an option to view details.</p>";
    }
    this.previewContainer.innerHTML = content;
  }

  _generateAdminStatus(data) {
    return `
          <div class="admin__account">
            <img src='${data.image}' alt="user photo" class="admin__profile-photo">
            <p class="admin__username">Name: ${data.name}</p>
            <pclass="admin__userlocation">Location: ${data.location}</pclass=> 
          </div>
          `;
  }

  _generateProductStatus() {
    return `
          <div class="admin__products">
          <h2 class="admin__products-title"> Online Warehouse 📦</h2>
          <ul class="admin__products-list"> ${this.productData
        .map((data) => {
          return `
            <li class="admin__products-item"> 
              <img src='${data.thumbnail}' class="admin__product-image">
              <span class="admin__product-title"> ${data.title} </span>
              <span class="admin__product-price"> ${data.price}$ </span>
            </li>`;
        })
        .slice(0, this.productData.length - 1)
        .join(" ")} </ul>
          </div>
          `;
  }
}

export default new AdminView();
