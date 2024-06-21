import * as model from "./model.js";
import loginView from "./view/loginView.js";
import supportView from "./view/supportView.js";
import adminView from "./view/adminView.js";

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

  handleProducts().then((data) => {
    adminView.setAdminData(model.adminAccount);
    adminView.setProductData(data);
  });
};

init();
