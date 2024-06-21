import View from "./view.js";

class AdminView extends View {
  adminBtn = document.querySelector(".js-account");
  adminStatusBtns;
  previewContainer;

  setAdminData(data) {
    this.adminData = data;
  }

  _handleAccountClick() {
    this.adminBtn.addEventListener("click", () => {
      this.shop.insertAdjacentHTML("afterbegin", this._generateMarkup());
      this._handleAdminStatus();
    });
  }

  _generateMarkup() {
    return `
    <section class="admin">
      <div class="admin__container">
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
              </ul>
            </nav>
          </div>
          <div class="admin__preview js-preview"></div>
        </div>
      </div>
    </section>
    `;
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
        content = "<p>Product details go here.</p>";
        break;
      case "offers":
        content = "<p>Offer details go here.</p>";
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
      <p>Name: ${data.name}</p>
      <p>Location: ${data.location}</p> 
    </div>
    `;
  }
}

export default new AdminView();