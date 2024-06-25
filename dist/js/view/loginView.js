import View from "./view.js";

class Login extends View {
  userButton = document.querySelector(".js-userBtn");
  adminButton = document.querySelector(".js-login-btn");
  loginPanel = document.querySelector(".js-login-panel");
  name = document.querySelector(".js-adminName");
  password = document.querySelector(".js-adminPassword");
  loginError = document.querySelector(".js-login-error");

  _disableLoginScreen() {
    this.userButton.addEventListener("click", () => {
      this.loginPanel.remove();
      this.adminBtn.remove();
      this.body.style.overflowY = "auto";
    });
  }

  _passingPassword(adminData) {
    this.adminButton.addEventListener("click", () => {
      if (
        adminData.name === this.name.value &&
        adminData.password === this.password.value
      )
        this.loginPanel.remove();
      this.body.style.overflowY = "auto";
    });
  }

  _adminErrorHandling(adminData) {
    this.adminButton.addEventListener("click", () => {
      if (
        adminData.name !== this.name.value ||
        adminData.password !== this.password.value
      ) {
        this.loginError.textContent =
          "Something went wrong, check name or password!";
        this.body.style.overflow = "hidden";
      }
    });
  }
}

export default new Login();
