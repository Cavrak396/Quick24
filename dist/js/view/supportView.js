import View from "./view.js";

class SupportView extends View {
  supportBtn = document.querySelector(".js-support");
  closeBtn;
  supportCloud;

  _handleSupportButtonClick() {
    if (!this.supportBtn) return;
    this.supportBtn.addEventListener("click", () => {
      this._showSupportCloud();
    });
  }

  _handleCloseButtonClick() {
    if (!this.closeBtn || !this.supportCloud) return;
    this.closeBtn.addEventListener("click", () => {
      this.supportCloud.style.display = "none";
    });
  }

  _showSupportCloud() {
    this.shop.insertAdjacentHTML("afterbegin", this._generateMarkup());
    this.closeBtn = document.querySelector(".js-close-support");
    this.supportCloud = document.querySelector(".js-support");
    this._handleCloseButtonClick();
  }

  _generateMarkup() {
    return `
      <section class="support js-support">
      <button type="button" class="support__close-btn js-close-support">
            <img src="images/close.png" alt="close icon" class="support__close-img">
          </button>
        <div class="support__container">
          <div class="support__image-holder" style="background-image: url('images/customer-support.jpg')">
            <span class="support__image-text"> Contact Us. </span>
          </div>
          <div class="support__text">
            <h2 class="support__title"> You need help? Our customers are here for you!</h2>
            <div class="support__contact-line">
              <div class="support__work-time"> 
                <span class="support__work-text"> Contact <br> <span class="support__time-decoration">Customer Support</span> </span>
                <span class="support__time">From Monday to Friday / 09:00 - 18:00 </span>
                <span class="support__time">Saturday: 09:00 - 17:00 </span>
                <span class="support__time">Sunday: Closed </span>
              </div>
              <div class="support__contact-text">
                <span class="support__contact-title"> How can we help you?</span>
                <p class="support__contact-text">
                  As dedicated experts in fast delivery, we have answers to all your questions. Our mission is to provide you with the best advice on the products and services offered by Quick24. Reach out to us – we want to know which products you love the most, and who knows, we might even help you discover something new!
                </p>
                <div class="support__socials">
                  <span class="support__mail-text"> Contact us via E-mail: <a href="mailto:example@example.com">Quick24.support@gmail.com</a> </span>
                  <span class="support__phone-text"> Contact us by phone: <a href="tel:+1234567890">+1234567890</a>
                </div>
                <form class="support__form">
                  <label for="support__message" class="support__message-tag"> Send Message </label>
                  <input type="text" id="support__message" class="support__text-input">
                  <button type="button" class="support__button"> Send </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

export default new SupportView();
