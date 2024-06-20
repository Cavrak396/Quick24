import * as model from "./model.js";
import View from "./view/view.js";
import loginView from "./view/loginView.js";
import supportView from "./view/supportView.js";

const init = function () {
  loginView._disableLoginScreen();
  loginView._passingPassword(model.adminAccount);
  loginView._adminErrorHandling(model.adminAccount);
  supportView._handleSupportButtonClick();
};

init();
