import View from "./view.js";

class HelpView extends View {
  helpBtn = document.querySelector(".js-help");
  closeBtn;
  helpCloud;

  _handleHelpClick() {
    this.helpBtn.addEventListener("click", () => {
      this.shop.insertAdjacentHTML("afterbegin", this._generateMarkup());
      this.body.style.overflow = "hidden";
      this.helpCloud = document.querySelector(".js-help");
      this.closeBtn = document.querySelector(".js-close-help");
      this._handleCloseClick();
    });
  }

  _generateMarkup() {
    return `
    <section class="help js-help">
     <button type="button" class="help__close-btn js-close-help">
      <img src="images/close.png" alt="close icon" class="help__close-img">
     </button>
    <div class="help__container">
    
    </div>
    </section>
    `;
  }

  _handleCloseClick() {
    this.closeBtn.addEventListener("click", () => {
      this.helpCloud.remove();
      this.body.style.overflow = "auto";
    });
  }
}

export default new HelpView();
