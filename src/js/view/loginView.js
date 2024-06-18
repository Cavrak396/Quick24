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
      this.loginPanel.style.display = "none";
    });
  }

  _passingPassword(adminData) {
    this.adminButton.addEventListener("click", () => {
      if (
        adminData.name === this.name.value &&
        adminData.password === this.password.value
      )
        this.loginPanel.style.display = "none";
    });
  }

  _adminErrorHandling(adminData) {
    this.adminButton.addEventListener("click", () => {
      if (
        adminData.name !== this.name.value ||
        adminData.password !== this.password.value
      )
        this.loginError.textContent =
          "Something went wrong, check name or password!";
    });
  }
}

export default new Login();
