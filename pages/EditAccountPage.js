"use strict";

const { By, until} = require('selenium-webdriver');
const BasePage = require('./utils/BasePage');
const {TestDataGenerator} = require('./utils/TestDataGenerator');
const Logger = require("./utils/Logger");
const { Actions } = require('selenium-webdriver');
const { RegisterLoginDashboardPage } = require("./RegisterLoginDashboardPage");

class EditAccountPage extends BasePage{

    constructor(driver){
        super(driver);

        //edit account page elements
        this._editAccountPageTitle = By.xpath("//article[@id='post-8']//h1");
        //main section
        this._editAccountFirstNameInputFieldSubtitle = By.xpath("//div[@class='woocommerce-MyAccount-content']//label[@for='account_first_name']");
        this._editAccountFirstNameInputField = By.xpath("//div[@class='woocommerce-MyAccount-content']//input[@id='account_first_name']");
        this._editAccountLastNameInputFieldSubtitle = By.xpath("//div[@class='woocommerce-MyAccount-content']//label[@for='account_last_name']");
        this._editAccountLastNameInputField = By.xpath("//div[@class='woocommerce-MyAccount-content']//input[@id='account_last_name']");
        this._editAccountUsernameInputFieldSubtitle = By.xpath("//div[@class='woocommerce-MyAccount-content']//label[@for='account_display_name']");
        this._editAccountUsernameInputField = By.xpath("//div[@class='woocommerce-MyAccount-content']//input[@id='account_display_name']");
        this._editAccountUsernameHint = By.xpath("//div[@class='woocommerce-MyAccount-content']//span[@id='account_display_name_description']");
        this._editAccountEmailInputFieldSubtitle = By.xpath("//div[@class='woocommerce-MyAccount-content']//label[@for='account_email']");
        this._editAccountEmailInputField = By.xpath("//div[@class='woocommerce-MyAccount-content']//input[@id='account_email']");
        this._passwordFormSectionSubtitle = By.xpath("//div[@class='woocommerce-MyAccount-content']//fieldset/legend");
        this._editAccountOldPasswordInputFieldSubtitle = By.xpath("//div[@class='woocommerce-MyAccount-content']//label[@for='password_current']");
        this._editAccountOldPasswordInputField = By.xpath("//div[@class='woocommerce-MyAccount-content']//input[@id='password_current']");
        this._editAccountOldPasswordViewButton = By.xpath("//div[@class='woocommerce-MyAccount-content']//button[@aria-describedby='password_current']");
        this._editAccountNewPasswordInputFieldSubtitle = By.xpath("//div[@class='woocommerce-MyAccount-content']//label[@for='password_1']");
        this._editAccountNewPasswordInputField = By.xpath("//div[@class='woocommerce-MyAccount-content']//input[@id='password_1']");
        this._editAccountNewPasswordViewButton = By.xpath("//div[@class='woocommerce-MyAccount-content']//button[@aria-describedby='password_1']");
        this._editAccountConfirmPasswordInputFieldSubtitle = By.xpath("//div[@class='woocommerce-MyAccount-content']//label[@for='password_2']");
        this._editAccountConfirmPasswordInputField = By.xpath("//div[@class='woocommerce-MyAccount-content']//input[@id='password_2']");
        this._editAccountConfirmPasswordViewButton = By.xpath("//div[@class='woocommerce-MyAccount-content']//button[@aria-describedby='password_2']");
        this._editAccountSaveChangesButton = By.xpath("//div[@class='woocommerce-MyAccount-content']//button[@name='save_account_details']");
        this._editAccountAlertMessage = By.xpath("//div[@role='alert']");

        const testDataGenerator = new TestDataGenerator();
        //valid user data
        const { firstName, lastName } = testDataGenerator.getRandomName();
        EditAccountPage._firstNameStatic = firstName;
        EditAccountPage._lastNameStatic = lastName
        this._firstName = EditAccountPage._firstNameStatic;
        this._lastName = EditAccountPage._lastNameStatic;
        this._editedEmail = testDataGenerator.generateRandomEditedEmailAddress(7);
        this._editedUsername = testDataGenerator.generateRandomUsername(7);
        this._newPassword = testDataGenerator.generateRandomEditedPassword();
    }



    //valid user account data input methods
    async inputFirstNameIntoFirstNameInputField(){
        const firstNameInputField = await this.driver.findElement(this._editAccountFirstNameInputField);
        const firstName = await this._firstName;
        Logger.info("Valid user first name: ", firstName);
        await firstNameInputField.sendKeys(firstName);
    }
    async inputLastNameIntoLastNameInputField(){
        const lastNameInputField = await this.driver.findElement(this._editAccountLastNameInputField);
        const lastName = await this._lastName;
        Logger.info("Valid user last name: ", lastName);
        await lastNameInputField.sendKeys(lastName);
    }

    //valid user edited input data methods
    async inputEditedUsernameIntoUsernameInputField(){
        const usernameInputField = await this.driver.findElement(this._editAccountUsernameInputField);
        const editedUsername = await this._editedUsername;
        Logger.info("Valid edited username: ", editedUsername);
        await usernameInputField.clear();
        await usernameInputField.sendKeys(editedUsername);
    }
    async inputEditedEmailIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._editAccountEmailInputField);
        const editedEmail = this._editedEmail;
        Logger.info("Valid edited email: ", editedEmail);
        await emailInputField.clear();
        await emailInputField.sendKeys(editedEmail);
    }
    async inputOldPasswordIntoOldPasswordInputField() {
        const oldPasswordInputField = await this.driver.findElement(this._editAccountOldPasswordInputField);
        const testDataGenerator = new TestDataGenerator();
        const oldPassword = testDataGenerator.password;
        Logger.info("Old user password: ", oldPassword);
        await oldPasswordInputField.sendKeys(oldPassword);
    }
    async inputEditedPasswordIntoNewPasswordInputField(){
        const newPasswordInputField = await this.driver.findElement(this._editAccountNewPasswordInputField);
        const newPassword = this._newPassword;
        Logger.info("New user password: ", newPassword);
        await newPasswordInputField.clear();
        await newPasswordInputField.sendKeys(newPassword);
    }
    async inputEditedConfirmPasswordIntoConfirmPasswordInputField(){
        const confirmPasswordInputField = await this.driver.findElement(this._editAccountConfirmPasswordInputField);
        const confirmPassword = this._newPassword;
        Logger.info("Matching new user password: ", confirmPassword);
        await confirmPasswordInputField.clear();
        await confirmPasswordInputField.sendKeys(confirmPassword);
    }

    //click 'Save changes' button
    async clickSaveChangesButton(){
        const saveChangesButton = await this.driver.findElement(this._editAccountSaveChangesButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: saveChangesButton }).click().perform();
    }

    //edit account page text getters
    async getEditAccountPageTitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const editAccountPageTitle = await this.driver.findElement(this._editAccountPageTitle);
        return await editAccountPageTitle.getText();
    }

    async getEditAccountFirstNameSubtitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const editAccountFirstNameInputSubtitle = await this.driver.findElement(this._editAccountFirstNameInputFieldSubtitle);
        const requiredText = await editAccountFirstNameInputSubtitle.getText();
        return requiredText.split('*')[0].trim();
    }
    async getEditAccountLastNameSubtitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const editAccountLastNameInputSubtitle = await this.driver.findElement(this._editAccountLastNameInputFieldSubtitle);
        const requiredText = await editAccountLastNameInputSubtitle.getText();
        return requiredText.split('*')[0].trim();
    }
    async getEditAccountUsernameSubtitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const editAccountUsernameInputSubtitle = await this.driver.findElement(this._editAccountUsernameInputFieldSubtitle);
        const requiredText = await editAccountUsernameInputSubtitle.getText();
        return requiredText.split('*')[0].trim();
    }
    async getUsernameHint(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const editAccountUsernameHint = await this.driver.findElement(this._editAccountUsernameHint);
        return await editAccountUsernameHint.getText();
    }
    async getEditAccountEmailSubtitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const editAccountEmailInputSubtitle = await this.driver.findElement(this._editAccountEmailInputFieldSubtitle);
        const requiredText = await editAccountEmailInputSubtitle.getText();
        return requiredText.split('*')[0].trim();
    }

    async getPasswordFormSubtitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const editAccountPasswordFormSubtitle = await this.driver.findElement(this._passwordFormSectionSubtitle);
        return await editAccountPasswordFormSubtitle.getText();
    }

    async getEditAccountOldPasswordSubtitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const editAccountOldPasswordInputSubtitle = await this.driver.findElement(this._editAccountOldPasswordInputFieldSubtitle);
        return await editAccountOldPasswordInputSubtitle.getText();
    }
    async getEditAccountNewPasswordSubtitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const editAccountNewPasswordInputSubtitle = await this.driver.findElement(this._editAccountNewPasswordInputFieldSubtitle);
        return await editAccountNewPasswordInputSubtitle.getText();
    }
    async getEditAccountConfirmPasswordSubtitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const editAccountConfirmPasswordInputSubtitle = await this.driver.findElement(this._editAccountConfirmPasswordInputFieldSubtitle);
        return await editAccountConfirmPasswordInputSubtitle.getText();
    }

    //click 'View Old Password' button method
    async clickViewOldPasswordButton(){
        const viewOldPasswordButton = await this.driver.findElement(this._editAccountOldPasswordViewButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: viewOldPasswordButton }).click().perform();
    }

    //click 'View New Password' button method
    async clickViewNewPasswordButton(){
        const viewNewPasswordButton = await this.driver.findElement(this._editAccountNewPasswordViewButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: viewNewPasswordButton }).click().perform();
    }

    //click 'View Confirm Password' button method
    async clickViewConfirmPasswordButton(){
        const viewConfirmPasswordButton = await this.driver.findElement(this._editAccountConfirmPasswordViewButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: viewConfirmPasswordButton }).click().perform();
    }

    //edit account page alert text getter
    async getEditAccountAlertText(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const editAccountAlertText = await this.driver.findElement(this._editAccountAlertMessage);
        return await editAccountAlertText.getText();
    }

    //private data getters
    get firstName() {return this._firstName;}

    get lastName() {return this._lastName;}

    get editedEmail() {return this._editedEmail;}

    get editedPassword() {return this._newPassword;}

    get editedUsername() {return this._editedUsername;}

    //edit account page web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isEditAccountPageWebElementDisplayed(){
        const elementsToCheck = [
            this._editAccountPageTitle,
            this._editAccountFirstNameInputFieldSubtitle,
            this._editAccountFirstNameInputField,
            this._editAccountLastNameInputFieldSubtitle,
            this._editAccountLastNameInputField,
            this._editAccountUsernameInputFieldSubtitle,
            this._editAccountUsernameInputField,
            this._editAccountUsernameHint,
            this._editAccountEmailInputFieldSubtitle,
            this._editAccountEmailInputField,
            this._passwordFormSectionSubtitle,
            this._editAccountOldPasswordInputFieldSubtitle,
            this._editAccountOldPasswordInputField,
            this._editAccountOldPasswordViewButton,
            this._editAccountNewPasswordInputFieldSubtitle,
            this._editAccountNewPasswordInputField,
            this._editAccountNewPasswordViewButton,
            this._editAccountConfirmPasswordInputFieldSubtitle,
            this._editAccountConfirmPasswordInputField,
            this._editAccountConfirmPasswordViewButton,
            this._editAccountSaveChangesButton
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = {EditAccountPage}