import Register from "./SignUp/signUp.js";
import LoginUser from "./Login/login.js";
import CheckEmailScreen from "./CheckEmail/index.js";

class App {
  $activeScreen;
  constructor() {}
  changeActiveScreen(screen, title) {
    const appElement = document.getElementById("app");
    if (appElement) {
      if (this.$activeScreen) {
        appElement.innerHTML = "";
      }
      this.$activeScreen = screen;
      document.title = title; //thay doi title theo tung screen
      appElement.appendChild(screen.Render());
    }
  }
}
const app = new App();
const siginUp = new Register();
const checkEmail = new CheckEmailScreen();
app.changeActiveScreen(siginUp, "Register");
export default app;