require('dotenv').config();

import Page from './page';

const username = process.env.USERNAME
const password = process.env.PASSWORD

class LoginPage extends Page {

    /**
    * define elements
    */

    get usernameInput()   { return $('//*[@name="username"]'); }
    get passwordInput()   { return $('//*[@name="password"]'); }
    get loginButton()     { return $('//button[contains(., "Login")]'); }

    /**
     * define or overwrite page methods
     */
    open () {
        super.open('login')       //this will append `login` to the baseUrl to form complete URL
        //browser.pause(3000);
    }
    /**
     * your page specific methods
     */
    waitForloginPageToLoad () {
      if(!this.headerImage.isDisplayed()){
        this.headerImage.waitForDisplayed(5000);
      }
    }

    login () {
        //this.waitForloginPageToLoad();
        this.usernameInput.setValue(username)
        this.passwordInput.setValue(password);
        this.loginButton.click();
      }
  }

  export default new LoginPage()