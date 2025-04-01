"use strict";

const { By, until} = require('selenium-webdriver');
const BasePage = require('./utils/BasePage');
const {TestDataGenerator} = require('./utils/TestDataGenerator');
const Logger = require("./utils/Logger");
const { Actions } = require('selenium-webdriver');
const { EditAccountPage } = require("./EditAccountPage");
const { AddBillingAddressPage } = require("./AddBillingAddressPage");

class RegisterLoginDashboardPage extends BasePage{

    constructor(driver){
        super(driver);

        //register/login dashboard page elements
        this._registerLoginDashboardPageTitle = By.xpath("//article[@id='post-8']//h1");
        //login section
        this._loginSectionTitle = By.xpath("//div[@class='u-column1 col-1']/h2");
        this._loginUsernameEmailInputFieldSubtitle = By.xpath("//div[@class='u-column1 col-1']//label[@for='username']");
        this._loginUsernameEmailInputField = By.xpath("//div[@class='u-column1 col-1']//input[@id='username']");
        this._loginPasswordInputFieldSubtitle = By.xpath("//div[@class='u-column1 col-1']//label[@for='password']");
        this._loginPasswordInputField = By.xpath("//div[@class='u-column1 col-1']//input[@id='password']");
        this._loginViewPasswordButton = By.xpath("//div[@class='u-column1 col-1']//button[@aria-describedby='password']");
        this._rememberLoginCheckbox = By.xpath("//div[@class='u-column1 col-1']//input[@id='rememberme']");
        this._rememberLoginText = By.xpath("//label[@class='woocommerce-form__label woocommerce-form__label-for-checkbox woocommerce-form-login__rememberme']/span");
        this._forgotPasswordLink = By.xpath("//div[@class='u-column1 col-1']//a");
        this._loginButton = By.xpath("//div[@class='u-column1 col-1']//button[@name='login']");
        //register section
        this._registerSectionTitle = By.xpath("//div[@class='u-column2 col-2']/h2");
        this._registerEmailInputFieldSubtitle = By.xpath("//div[@class='u-column2 col-2']//label[@for='reg_email']");
        this._registerEmailInputField = By.xpath("//div[@class='u-column2 col-2']//input[@id='reg_email']");
        this._registerPasswordInputFieldSubtitle = By.xpath("//div[@class='u-column2 col-2']//label[@for='reg_password']");
        this._registerPasswordInputField = By.xpath("//div[@class='u-column2 col-2']//input[@id='reg_password']");
        this._registerViewPasswordButton = By.xpath("//div[@class='u-column2 col-2']//button[@aria-describedby='reg_password']");
        this._registerDescription = By.xpath("//div[@class='u-column2 col-2']//div[@class='woocommerce-privacy-policy-text']/p");
        this._registerPrivacyPolicyLink = By.xpath("//div[@class='u-column2 col-2']//div[@class='woocommerce-privacy-policy-text']//a");
        this._registerButton = By.xpath("//div[@class='u-column2 col-2']//button[@name='register']");

        const testDataGenerator = new TestDataGenerator();
        //valid user data
        this._email = testDataGenerator.generateRandomEmailAddress(7);
        this._password = testDataGenerator.generateRandomPassword();
    }

    //valid user data input methods (register section)
    async inputEmailIntoRegisterEmailInputField(){
        const emailInputField = await this.driver.findElement(this._registerEmailInputField);
        const email = this._email;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", emailInputField); //scroll into view for better visual display
        Logger.info("Valid user email address: ", email);
        await emailInputField.sendKeys(email);
    }
    async inputPasswordIntoRegisterPasswordInputField(){
        const passwordInputField = await this.driver.findElement(this._registerPasswordInputField);
        const password = this._password;
        Logger.info("Valid user password: ", password);
        await passwordInputField.sendKeys(password);
    }

    //valid user data input methods (login section)
    async inputValidEmailIntoLoginEmailInputField(){
        const loginEmailInputField = await this.driver.findElement(this._loginUsernameEmailInputField);
        const email = this.email;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", loginEmailInputField); //scroll into view for better visual display
        Logger.info("Valid user email address: ", email);
        await loginEmailInputField.sendKeys(email);
    }
    async inputValidLoginPasswordIntoLoginPasswordInputField(){
        const loginPasswordInputField = await this.driver.findElement(this._loginPasswordInputField);
        const password = this.password;
        Logger.info("Valid user login password: ", password);
        await loginPasswordInputField.sendKeys(password);
    }

    async inputValidUsernameIntoLoginEmailInputField(){
        const loginEmailInputField = await this.driver.findElement(this._loginUsernameEmailInputField);
        const testDataGenerator = new TestDataGenerator(this.driver);
        const username = testDataGenerator.username;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", loginEmailInputField); //scroll into view for better visual display
        Logger.info("Valid user username: ", username);
        await loginEmailInputField.sendKeys(username);
    }

    //valid user data input methods (login section) -> edited credentials
    async inputValidEditedEmailIntoLoginEmailInputField(){
        const loginEmailInputField = await this.driver.findElement(this._loginUsernameEmailInputField);
        const editAccountPage = new EditAccountPage(this.driver);
        const editedEmail = editAccountPage.editedEmail;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", loginEmailInputField); //scroll into view for better visual display
        Logger.info("Valid user edited email address: ", editedEmail);
        await loginEmailInputField.sendKeys(editedEmail);
    }
    async inputValidEditedPasswordIntoLoginPasswordInputField(){
        const loginPasswordInputField = await this.driver.findElement(this._loginPasswordInputField);
        const editAccountPage = new EditAccountPage(this.driver);
        const editedPassword = editAccountPage.editedPassword;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", loginPasswordInputField); //scroll into view for better visual display
        Logger.info("Valid user edited password: ", editedPassword);
        await loginPasswordInputField.sendKeys(editedPassword);
    }
    async inputValidEditedUsernameIntoLoginEmailInputField(){
        const loginEmailInputField = await this.driver.findElement(this._loginUsernameEmailInputField);
        const testDataGenerator = new TestDataGenerator(this.driver);
        const editedUsername = testDataGenerator.username;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", loginEmailInputField); //scroll into view for better visual display
        Logger.info("Valid user edited login username: ", editedUsername);
        await loginEmailInputField.sendKeys(editedUsername);
    }
    async inputValidEditedBillingEmailIntoLoginEmailInputField(){
        const loginEmailInputField = await this.driver.findElement(this._loginUsernameEmailInputField);
        const addBillingAddressPage = new AddBillingAddressPage(this.driver);
        const editedBillingEmail = addBillingAddressPage.editedBillingEmail;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", loginEmailInputField); //scroll into view for better visual display
        Logger.info("Valid user edited billing email address: ", editedBillingEmail);
        await loginEmailInputField.sendKeys(editedBillingEmail);
    }

    //click 'View Password' (register) button method
    async clickViewPasswordRegisterButton(){
        const viewPasswordRegisterButton = await this.driver.findElement(this._registerViewPasswordButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: viewPasswordRegisterButton }).click().perform();
    }

    //click 'View Password' (login) button method
    async clickViewPasswordLoginButton(){
        const viewPasswordButton = await this.driver.findElement(this._loginViewPasswordButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: viewPasswordButton }).click().perform();
    }

    //click 'Register' button method
    async clickRegisterButton(){
        const registerButton = await this.driver.findElement(this._registerButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: registerButton }).click().perform();
    }

    //click 'Login' button method
    async clickLoginButton(){
        const loginButton = await this.driver.findElement(this._loginButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: loginButton }).click().perform();
    }

    //register/login dashboard page text element getters

    async getRegisterLoginDashboardPageTitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const registerLoginDashPageTitle = await this.driver.findElement(this._registerLoginDashboardPageTitle);
        return await registerLoginDashPageTitle.getText();
    }

    //login section
    async getLoginSectionTitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const loginSectionTitle = await this.driver.findElement(this._loginSectionTitle);
        return await loginSectionTitle.getText();
    }

    async getLoginUsernameEmailInputFieldSubtitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const loginEmailInputFieldSubtitle = await this.driver.findElement(this._loginUsernameEmailInputFieldSubtitle);
        const requiredText = await loginEmailInputFieldSubtitle.getText();
        return requiredText.split('*')[0].trim();
    }

    async getLoginPasswordInputFieldSubtitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const loginPasswordInputFieldSubtitle = await this.driver.findElement(this._loginPasswordInputFieldSubtitle);
        const requiredText = await loginPasswordInputFieldSubtitle.getText();
        return requiredText.split('*')[0].trim();
    }

    async getRememberLoginText(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const rememberLoginText = await this.driver.findElement(this._rememberLoginText);
        return await rememberLoginText.getText();
    }

    async getForgotPasswordLinkText(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const loginForgotPasswordLinkText = await this.driver.findElement(this._forgotPasswordLink);
        return await loginForgotPasswordLinkText.getText();
    }

    //register section
    async getRegisterSectionTitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const registerSectionTitle = await this.driver.findElement(this._registerSectionTitle);
        return await registerSectionTitle.getText();
    }

    async getRegisterEmailInputFieldSubtitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const registerEmailInputFieldSubtitle = await this.driver.findElement(this._registerEmailInputFieldSubtitle);
        const requiredText = await registerEmailInputFieldSubtitle.getText();
        return requiredText.split('*')[0].trim();
    }

    async getRegisterPasswordInputFieldSubtitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const registerPasswordInputFieldSubtitle = await this.driver.findElement(this._registerPasswordInputFieldSubtitle);
        const requiredText = await registerPasswordInputFieldSubtitle.getText();
        return requiredText.split('*')[0].trim();
    }

    async getRegisterDescription(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const registerDescription = await this.driver.findElement(this._registerDescription);
        return await registerDescription.getText();
    }

    //login data getters
    get email() {return this._email;}

    get password() {return this._password;}


    //register/login dashboard page web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isRegisterLoginDashboardPageWebElementDisplayed(){
        const elementsToCheck = [
            this._registerLoginDashboardPageTitle,
            this._loginSectionTitle,
            this._loginUsernameEmailInputFieldSubtitle,
            this._loginUsernameEmailInputField,
            this._loginPasswordInputFieldSubtitle,
            this._loginPasswordInputField,
            this._loginViewPasswordButton,
            this._rememberLoginCheckbox,
            this._rememberLoginText,
            this._forgotPasswordLink,
            this._loginButton,
            this._registerSectionTitle,
            this._registerEmailInputFieldSubtitle,
            this._registerEmailInputField,
            this._registerPasswordInputFieldSubtitle,
            this._registerPasswordInputField,
            this._registerViewPasswordButton,
            this._registerDescription,
            this._registerPrivacyPolicyLink,
            this._registerButton
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = { RegisterLoginDashboardPage }