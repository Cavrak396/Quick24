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
    <h2 class="help__title"> Method of payment and delivery 💷 </h2>
    <span class="help__undertitle"> You can make payments in the following ways! </span>
    <ul class="help__methods-list"> 
    <li class="help__methods-item"> 
    <h3 class="help__methods-linetitle">
    **1. Payment by Credit Card (Visa, MasterCard, American Express) 💳
    </h3>
    <p class="help__methods-lines">
     If you have chosen to pay by credit card, you will be redirected to a page to enter your credit card details. If the transaction is successful, you will be notified that the reservation of funds has been successfully completed and you will have the option, if you are a registered user, to save the used credit card on your account. After the ordered products are delivered, the reserved funds will be deducted from your card. If the transaction is not completed for any reason, you will be notified of the unsuccessful transaction. At that point, you can try again or choose another payment method. For security reasons, your credit card details are visible only to the payment service provider as the card processor, so the entire payment process is carried out on the secure pages of the payment service provider. When entering credit card details, confidential information is transmitted over the public network in a secure (encrypted) form.
    </p>
    <p class="help__methods-lines">
    With credit cards (Visa, MasterCard, American Express), you can pay in installments. The total transaction amount, greater than $50, can be divided into equal monthly installments. Depending on the transaction amount, the number of installments can be from 2 to 12. After adding the product to the cart, select the option to pay by credit card. Enter your credit card number and the option to choose the number of installments will appear.**
    </p>
    </li>
    <li class="help__methods-item">
    <h3 class="help__methods-linetitle">
     **2. Cash on Delivery  🚚
    </h3>
    <p class="help__methods-lines"> 
    You can pay the total amount of your order upon receiving the shipment, either in cash or by card.
    </p>
    </li>
    <li class="help__methods-item">
    <h3 class="help__methods-linetitle">
    **3. Bank Transfer (e-banking or payment slip) 💱
    </h3>
    <p class="help__methods-lines"> 
    After completing the purchase process, we will send detailed payment instructions to your email address. You can make the payment via your e-banking account or at a bank/post office counter. We will send you an email notification once we receive the payment. If you do not make the payment within 5 days of placing the order, your order will be automatically canceled.**
    </p>
    </li>
     <li class="help__methods-item">
    <h3 class="help__methods-linetitle">
    **4. Through Bank of America Web Loan 🏦
    </h3>
    <p class="help__methods-lines"> 
    All citizens are eligible to take out a web loan ranging from $100 to $5,000. The loan installment remains the same throughout the repayment period, with a fixed and unchanging interest rate. The consumer chooses the number of installments that suits them best (from 3 to a maximum of 23 installments). Early loan repayment is without any fee. The condition for the loan is that the consumer must have been employed for at least 6 months with the same employer or be a retiree with a monthly income of more than $200. The allowed age range for taking out and repaying the loan is from 22 to 68 years. If the consumer wishes to take out a loan greater than $800, they need to provide the last 3 monthly bank statements from the account where they receive their salary in e-form. Successful application for a WEB loan will only be possible if the consumer submits scanned statements, pay slips, and other necessary documents required by the bank. The loan will be approved for the total purchase price of the ordered goods and delivery costs. In the case of partial cancellation of the order, the consumer will negotiate a new annuity plan with the bank. In the case of complete cancellation of the order for any reason or withdrawal from the contract within the legal period of 14 days, the consumer must contact the bank to arrange the cancellation of the loan. More details can be found at the following link. Purchasing via web loan is not available in the following cases: if the buyer is a legal entity, if package locker delivery is selected, if the product is from the Smart Offer, or if the cart contains a product whose seller is not Shopster LLC. A special price is provided for this payment method, marked in black on the product page. When the buyer selects this payment method, the price will automatically adjust.
    </p>
    </li>
         <li class="help__methods-item">
    <h3 class="help__methods-linetitle">
    **5. Personal pickup 🧑
    </h3>
    <p class="help__methods-lines"> 
    To make it easier for our customers to receive their shipments, we offer the option to pick up packages at "package lockers" (automated storage devices for package retrieval) through our partner courier service, DExpress. These package lockers are currently available at 45 locations in New York City and an additional 75 locations in 40 cities across the United States. Customers have the option to choose any package locker at any of the available locations within New York City, regardless of the specified delivery address. The delivery fee for all package lockers is $1.49 (price includes tax).
    </p>
    </li>
    </ul>
    <form class="help__form">
    <label for="help__message" class="help__form-label"> Send Message </label>
     <input type="text" class="help__message-input" id="help__message">
     <button type="button" class="help__message-btn"> Send </button>
    </form>
    </div>
    </section>
    `;
  }

  _handleCloseClick() {
    this.closeBtn.addEventListener("click", () => {
      this.helpCloud.remove();
      this.body.style.overflowY = "auto";
    });
  }
}

export default new HelpView();
