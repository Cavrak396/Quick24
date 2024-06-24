import * as model from "./model.js";
import loginView from "./view/loginView.js";
import supportView from "./view/supportView.js";
import adminView from "./view/adminView.js";
import offersView from "./view/offersView.js";
import helpView from "./view/helpView.js";
import productsView from "./view/productsView.js";

const handleProducts = function () {
  return model
    .getProducts()
    .then((data) => data)
    .catch((error) => {
      console.error("Error fetching products:", error);
      return [];
    });
};

const init = function () {
  loginView._disableLoginScreen();
  loginView._passingPassword(model.adminAccount);
  loginView._adminErrorHandling(model.adminAccount);
  supportView._handleSupportButtonClick();
  adminView._handleAccountClick();
  helpView._handleHelpClick();
  productsView._handleProductsClick();
  productsView._handleCartActivity();
  productsView._handleClosingOrder();

  handleProducts().then((data) => {
    adminView.setAdminData(model.adminAccount);
    adminView.setProductData(data);
    offersView.setOffersData(data);
    productsView.setProductsData(data);
    offersView._handleOffersUI();
  });
};

init();
