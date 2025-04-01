"use strict";

const { By, until} = require('selenium-webdriver');
const BasePage = require("./BasePage");
const {TestDataGenerator} = require('./TestDataGenerator');
const Logger = require("./Logger");
const { Actions } = require('selenium-webdriver');

class RegisterLoginDashboardPageInvalidScenarios extends BasePage{

    constructor(driver){
        super(driver);

        //register/login dashboard page elements
        //login section
        this._loginUsernameEmailInputField = By.xpath("//div[@class='u-column1 col-1']//input[@id='username']");
        this._loginPasswordInputField = By.xpath("//div[@class='u-column1 col-1']//input[@id='password']");
        this._loginViewPasswordButton = By.xpath("//div[@class='u-column1 col-1']//button[@aria-describedby='password']");
        this._rememberLoginCheckbox = By.xpath("//div[@class='u-column1 col-1']//input[@id='rememberme']");
        this._loginButton = By.xpath("//div[@class='u-column1 col-1']//button[@name='login']");
        //register section
        this._registerEmailInputField = By.xpath("//div[@class='u-column2 col-2']//input[@id='reg_email']");
        this._registerPasswordInputField = By.xpath("//div[@class='u-column2 col-2']//input[@id='reg_password']");
        //error message elements
        this._tooWeakPasswordError = By.xpath("//div[@role='alert']")
        this._singularInputError = By.xpath("//ul[@role='alert']/li")

        const testDataGenerator = new TestDataGenerator();

        //invalid register data

        //invalid user register data - no singular input
        this._noUserEmail = "";
        this._noPassword = "";

        //invalid user register data - too short singular input
        this._tooShortUserEmail = testDataGenerator.generateRandomTooShortEmailAddress(1);
        this._tooShortPassword = "kkkkkkkkkkk"; //(11 chars, if to use different chars, the password will pass, the validation relies on strength not char count)

        //invalid user register data - too long singular input
        this._tooLongEmail = testDataGenerator.generateRandomTooLongEmailAddress(100);
        this._tooLongPassword = "Sssfdfhfghtreytujynhrgfsdfhjghkmjnbhfdsfdadryutikolikjmyhtgrfsdgjhklhgfdsazdxfgjhhgfqwertyyhgrfdasfd"

        //invalid user register data - pre-existing singular input
        this._usedEmail = "m2@example.com";

        //invalid user register data - invalid singular input
        this._invalidEmailFormat = "dfrtfakemail.com";

        //invalid login data
        //invalid user login data - no singular input
        this._noLoginEmail = "";
        this._noLoginPassword = "";

        //invalid user login data - invalid singular input
        this._invalidLoginEmail = "vfgdsKuj@fakemail.com";
        this._invalidLoginUsername = "FakeUsername";
        this._invalidLoginPassword = "Canto11345$";
    }

    //invalid user data input methods (register section) - no singular input
    async inputNoEmailIntoRegisterEmailInputField(){
        const emailInputField = await this.driver.findElement(this._registerEmailInputField);
        const noEmail = this._noUserEmail;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", emailInputField); //scroll into view for better visual display
        Logger.info("No user email address (register): ", noEmail);
        await emailInputField.sendKeys(noEmail);
    }
    async inputNoPasswordIntoRegisterPasswordInputField(){
        const passwordInputField = await this.driver.findElement(this._registerPasswordInputField);
        const noPassword = this._noPassword;
        Logger.info("No user password (register): ", noPassword);
        await passwordInputField.sendKeys(noPassword);
    }

    //invalid user data input methods (register section) - too short singular input
    async inputTooShortEmailIntoRegisterEmailInputField(){
        const emailInputField = await this.driver.findElement(this._registerEmailInputField);
        const tooShortEmail = this._tooShortUserEmail;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", emailInputField); //scroll into view for better visual display
        Logger.info("Too short user email address (register): ", tooShortEmail);
        await emailInputField.sendKeys(tooShortEmail);
    }
    async inputTooShortPasswordIntoRegisterPasswordInputField(){
        const passwordInputField = await this.driver.findElement(this._registerPasswordInputField);
        const tooShortPassword = this._tooShortPassword;
        Logger.info("Too short user password (register): ", tooShortPassword);
        await passwordInputField.sendKeys(tooShortPassword);
    }

    //invalid user data input methods (register section) - too long singular input
    async inputTooLongEmailIntoRegisterEmailInputField(){
        const emailInputField = await this.driver.findElement(this._registerEmailInputField);
        const tooLongEmail = this._tooLongEmail;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", emailInputField); //scroll into view for better visual display
        Logger.info("Too long user email address (register): ", tooLongEmail);
        await emailInputField.sendKeys(tooLongEmail);
    }
    async inputTooLongPasswordIntoRegisterPasswordInputField(){
        const passwordInputField = await this.driver.findElement(this._registerPasswordInputField);
        const tooLongPassword = this._tooLongPassword;
        Logger.info("Too long user password (register): ", tooLongPassword);
        await passwordInputField.sendKeys(tooLongPassword);
    }

    //invalid user data input methods (register section) - pre-existing singular input
    async inputUsedEmailIntoRegisterEmailInputField(){
        const emailInputField = await this.driver.findElement(this._registerEmailInputField);
        const usedEmail = this._usedEmail;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", emailInputField); //scroll into view for better visual display
        Logger.info("Already used email address (register): ", usedEmail);
        await emailInputField.sendKeys(usedEmail);
    }

    //invalid user data input methods (register section) - invalid singular input
    async inputInvalidEmailFormatIntoRegisterEmailInputField(){
        const emailInputField = await this.driver.findElement(this._registerEmailInputField);
        const invalidEmailFormat = this._invalidEmailFormat;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", emailInputField); //scroll into view for better visual display
        Logger.info("Invalid email address input format (register): ", invalidEmailFormat);
        await emailInputField.sendKeys(invalidEmailFormat);
    }

    //invalid user data input methods (login section) - no singular input
    async inputNoEmailIntoLoginEmailInputField(){
        const emailInputField = await this.driver.findElement(this._loginUsernameEmailInputField);
        const noLoginEmail = this._noLoginEmail;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", emailInputField); //scroll into view for better visual display
        Logger.info("No user email/username address (login): ", noLoginEmail);
        await emailInputField.sendKeys(noLoginEmail);
    }
    async inputNoPasswordIntoLoginPasswordInputField(){
        const passwordInputField = await this.driver.findElement(this._loginPasswordInputField);
        const noLoginPassword = this._noLoginPassword;
        Logger.info("No user password (login): ", noLoginPassword);
        await passwordInputField.sendKeys(noLoginPassword);
    }

    //invalid user data input methods (login section) - invalid singular input
    async inputInvalidEmailIntoLoginEmailInputField(){
        const emailInputField = await this.driver.findElement(this._loginUsernameEmailInputField);
        const invalidLoginEmail = this._invalidLoginEmail;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", emailInputField); //scroll into view for better visual display
        Logger.info("Invalid user email address (login): ", invalidLoginEmail);
        await emailInputField.sendKeys(invalidLoginEmail);
    }
    async inputInvalidUsernameIntoLoginEmailInputField(){
        const emailInputField = await this.driver.findElement(this._loginUsernameEmailInputField);
        const invalidLoginUsername = this._invalidLoginUsername;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", emailInputField); //scroll into view for better visual display
        Logger.info("Invalid username (login): ", invalidLoginUsername);
        await emailInputField.sendKeys(invalidLoginUsername);
    }
    async inputInvalidPasswordIntoLoginPasswordInputField(){
        const passwordInputField = await this.driver.findElement(this._loginPasswordInputField);
        const invalidLoginPassword = this._invalidLoginPassword;
        Logger.info("Invalid user password (login): ", invalidLoginPassword);
        await passwordInputField.sendKeys(invalidLoginPassword);
    }

    //too weak password error getter
    async getTooWeakPasswordError(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const tooWeakPasswordError = await this.driver.findElement(this._tooWeakPasswordError);
        const errorText = await tooWeakPasswordError.getText();
        return errorText.split('.')[0].trim();
    }

    //singular input error getter
    async getSingularInputError(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const singularInputError = await this.driver.findElement(this._singularInputError);
        return await singularInputError.getText();
    }

    async getLoginPasswordInputError(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const loginPasswordInputError = await this.driver.findElement(this._singularInputError);
        const errorText = await loginPasswordInputError.getText();
        //extract the specific error phrase
        const match = errorText.match(/podano nieprawidłowe hasło/);
        return match ? match[0] : errorText;
    }

}
module.exports = {RegisterLoginDashboardPageInvalidScenarios}