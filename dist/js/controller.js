import * as model from "./model.js";
import View from "./view/view.js";
import loginView from "./view/loginView.js";

const init = function () {
  loginView._disableLoginScreen();
  loginView._passingPassword(model.adminAccount);
  loginView._adminErrorHandling(model.adminAccount);
};

init();
