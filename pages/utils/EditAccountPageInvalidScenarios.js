"use strict";

const { By, until} = require('selenium-webdriver');
const BasePage = require("./BasePage");
const {TestDataGenerator} = require('./TestDataGenerator');
const Logger = require("./Logger");
const { Actions } = require('selenium-webdriver');

class EditAccountPageInvalidScenarios extends BasePage{

    constructor(driver){
        super(driver);

        //edit account page elements
        //main section
        this._editAccountFirstNameInputField = By.xpath("//div[@class='woocommerce-MyAccount-content']//input[@id='account_first_name']");
        this._editAccountLastNameInputField = By.xpath("//div[@class='woocommerce-MyAccount-content']//input[@id='account_last_name']");
        this._editAccountUsernameInputField = By.xpath("//div[@class='woocommerce-MyAccount-content']//input[@id='account_display_name']");
        this._editAccountEmailInputField = By.xpath("//div[@class='woocommerce-MyAccount-content']//input[@id='account_email']");
        this._editAccountOldPasswordInputField = By.xpath("//div[@class='woocommerce-MyAccount-content']//input[@id='password_current']");
        this._editAccountNewPasswordInputField = By.xpath("//div[@class='woocommerce-MyAccount-content']//input[@id='password_1']");
        this._editAccountConfirmPasswordInputField = By.xpath("//div[@class='woocommerce-MyAccount-content']//input[@id='password_2']");
        this._editAccountConfirmPasswordViewButton = By.xpath("//div[@class='woocommerce-MyAccount-content']//button[@aria-describedby='password_2']");
        //alert message elements
        this._editAccountAlertMessage = By.xpath("//div[@role='alert']");
        this._singularInputError = By.xpath("//ul[@role='alert']/li")

        const testDataGenerator = new TestDataGenerator();

        //invalid user data - no singular input
        this._noFirstName = "";
        this._noLastName = "";
        this._noUsername = "";
        this._noEmail = "";

        //invalid user data - too short singular input
        this._tooShortFirstName = "K";
        this._tooShortLastName = "T";
        this._tooShortUsername = "A";
        this._tooShortEmail = testDataGenerator.generateRandomTooShortEmailAddress(1);

        //invalid user data - too long singular input
        this._tooLongFirstName = "Kssfdfhfghtreytujynhrgfsdfhjghkmjnbhfdsfdadryutikolikjmyhtgrfsdgjhklhgfdsazdxfgjhhgfqwertyyhgrfdasfd"; //100 chars
        this._tooLongLastName = "Tssfdfhfghtreytujynhrgfsdfhjghkmjnbhfdsfdadryutikolikjmyhtgrfsdgjhklhgfdsazdxfgjhhgfqwertyyhgrfdasfd"; //100 chars
        this._tooLongUsername = "Assfdfhfghtreytujynhrgfsdfhjghkmjnbhfdsfdadryutikolikjmyhtgrfsdgjhklhgfdsazdxfgjhhgfqwertyyhgrfdasfd"; //100 chars
        this._tooLongEmail = testDataGenerator.generateRandomTooLongEmailAddress(100);

        //invalid user data - invalid singular input
        this._invalidFirstNameFormat = "!#@!$##$%$#%^"; //special symbols only
        this._invalidLastNameFormat = "^&%$%#$%$#^%$%"; //special symbols only
        this._invalidUsernameFormat = "*^%&^$$@$#%^&"; //special symbols only
        this._invalidEmailFormat = "bgrtmail.com";
        this._existingEmail = "m2@example.com";

        //invalid password section input data - too short singular input
        this._tooShortNewPassword = "Sssssssssss";
        this._tooShortNewConfirmPassword = this._tooShortNewPassword;

        //invalid password section input data - too long singular input
        this._tooLongNewPassword = "Sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssskkkkkkkkkkkkkkkkkkkkkkkkkk";
        this._tooLongNewConfirmPassword = this._tooLongNewPassword;
    }

    //invalid user account data input methods - no singular input
    async inputNoFirstNameIntoFirstNameInputField(){
        const firstNameInputField = await this.driver.findElement(this._editAccountFirstNameInputField);
        const noFirstName = await this._noFirstName;
        Logger.info("No user first name: ", noFirstName);
        await firstNameInputField.sendKeys(noFirstName);
    }
    async inputNoLastNameIntoLastNameInputField(){
        const lastNameInputField = await this.driver.findElement(this._editAccountLastNameInputField);
        const noLastName = await this._noLastName;
        Logger.info("No user last name: ", noLastName);
        await lastNameInputField.sendKeys(noLastName);
    }
    async inputNoUsernameIntoUsernameInputField(){
        const usernameInputField = await this.driver.findElement(this._editAccountUsernameInputField);
        const noUsername = await this._noUsername;
        Logger.info("No user username: ", noUsername);
        await usernameInputField.clear();
        await usernameInputField.sendKeys(noUsername);
    }
    async inputNoEmailIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._editAccountEmailInputField);
        const noEditAccEmail = await this._noEmail;
        Logger.info("No user email address (edit account): ", noEditAccEmail);
        await emailInputField.clear();
        await emailInputField.sendKeys(noEditAccEmail);
    }

    //invalid user account data input methods - too short singular input
    async inputTooShortFirstNameIntoFirstNameInputField(){
        const firstNameInputField = await this.driver.findElement(this._editAccountFirstNameInputField);
        const tooShortFirstName = await this._tooShortFirstName;
        Logger.info("Too short user first name: ", tooShortFirstName);
        await firstNameInputField.sendKeys(tooShortFirstName);
    }
    async inputTooShortLastNameIntoLastNameInputField(){
        const lastNameInputField = await this.driver.findElement(this._editAccountLastNameInputField);
        const tooShortLastName = await this._tooShortLastName;
        Logger.info("Too short user last name: ", tooShortLastName);
        await lastNameInputField.sendKeys(tooShortLastName);
    }
    async inputTooShortUsernameIntoUsernameInputField(){
        const usernameInputField = await this.driver.findElement(this._editAccountUsernameInputField);
        const tooShortUsername = await this._tooShortUsername;
        Logger.info("Too short user username: ", tooShortUsername);
        await usernameInputField.clear();
        await usernameInputField.sendKeys(tooShortUsername);
    }
    async inputTooShortEmailIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._editAccountEmailInputField);
        const tooShortEditAccEmail = await this._tooShortEmail;
        Logger.info("Too short user email address (edit account): ", tooShortEditAccEmail);
        await emailInputField.clear();
        await emailInputField.sendKeys(tooShortEditAccEmail);
    }
    async inputTooShortNewPasswordIntoNewPasswordInputField(){
        const newPasswordInputField = await this.driver.findElement(this._editAccountNewPasswordInputField);
        const tooShortEditAccNewPassword = await this._tooShortNewPassword;
        Logger.info("Too short user new password (edit account): ", tooShortEditAccNewPassword);
        await newPasswordInputField.sendKeys(tooShortEditAccNewPassword);
    }
    async inputTooShortConfirmPasswordIntoConfirmPasswordInputField(){
        const confirmNewInputField = await this.driver.findElement(this._editAccountConfirmPasswordInputField);
        const tooShortEditAccConfirmPassword = await this._tooShortNewConfirmPassword;
        Logger.info("Too short user matching confirm password (edit account): ", tooShortEditAccConfirmPassword);
        await confirmNewInputField.clear();
        await confirmNewInputField.sendKeys(tooShortEditAccConfirmPassword);
    }

    //invalid user account data input methods - too long singular input
    async inputTooLongFirstNameIntoFirstNameInputField(){
        const firstNameInputField = await this.driver.findElement(this._editAccountFirstNameInputField);
        const tooLongFirstName = await this._tooLongFirstName;
        Logger.info("Too long user first name: ", tooLongFirstName);
        await firstNameInputField.sendKeys(tooLongFirstName);
    }
    async inputTooLongLastNameIntoLastNameInputField(){
        const lastNameInputField = await this.driver.findElement(this._editAccountLastNameInputField);
        const tooLongLastName = await this._tooLongLastName;
        Logger.info("Too long user last name: ", tooLongLastName);
        await lastNameInputField.sendKeys(tooLongLastName);
    }
    async inputTooLongUsernameIntoUsernameInputField(){
        const usernameInputField = await this.driver.findElement(this._editAccountUsernameInputField);
        const tooLongUsername = await this._tooLongUsername;
        Logger.info("Too long user username: ", tooLongUsername);
        await usernameInputField.clear();
        await usernameInputField.sendKeys(tooLongUsername);
    }
    async inputTooLongEmailIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._editAccountEmailInputField);
        const tooLongEditAccEmail = await this._tooLongEmail;
        Logger.info("Too long user email address (edit account): ", tooLongEditAccEmail);
        await emailInputField.clear();
        await emailInputField.sendKeys(tooLongEditAccEmail);
    }
    async inputTooLongNewPasswordIntoNewPasswordInputField(){
        const newPasswordInputField = await this.driver.findElement(this._editAccountNewPasswordInputField);
        const tooLongEditAccNewPassword = await this._tooLongNewPassword;
        Logger.info("Too long user new password (edit account): ", tooLongEditAccNewPassword);
        await newPasswordInputField.sendKeys(tooLongEditAccNewPassword);
    }
    async inputTooLongConfirmPasswordIntoConfirmPasswordInputField(){
        const confirmNewInputField = await this.driver.findElement(this._editAccountConfirmPasswordInputField);
        const tooLongEditAccConfirmPassword = await this._tooLongNewConfirmPassword;
        Logger.info("Too long user matching confirm password (edit account): ", tooLongEditAccConfirmPassword);
        await confirmNewInputField.clear();
        await confirmNewInputField.sendKeys(tooLongEditAccConfirmPassword);
    }

    //invalid user account data input methods - invalid singular input format
    async inputInvalidFirstNameFormatIntoFirstNameInputField(){
        const firstNameInputField = await this.driver.findElement(this._editAccountFirstNameInputField);
        const invalidFirstNameFormat = await this._invalidFirstNameFormat;
        Logger.info("Invalid user first name input format: ", invalidFirstNameFormat);
        await firstNameInputField.sendKeys(invalidFirstNameFormat);
    }
    async inputInvalidLastNameFormatIntoLastNameInputField(){
        const lastNameInputField = await this.driver.findElement(this._editAccountLastNameInputField);
        const invalidLastNameFormat = await this._invalidLastNameFormat;
        Logger.info("Invalid user last name format: ", invalidLastNameFormat);
        await lastNameInputField.sendKeys(invalidLastNameFormat);
    }
    async inputInvalidUsernameFormatIntoUsernameInputField(){
        const usernameInputField = await this.driver.findElement(this._editAccountUsernameInputField);
        const invalidUsernameFormat = await this._invalidUsernameFormat;
        Logger.info("Invalid user username format: ", invalidUsernameFormat);
        await usernameInputField.clear();
        await usernameInputField.sendKeys(invalidUsernameFormat);
    }
    async inputInvalidEmailFormatIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._editAccountEmailInputField);
        const invalidEditAccEmailFormat = await this._invalidEmailFormat;
        Logger.info("Invalid user email address format (edit account): ", invalidEditAccEmailFormat);
        await emailInputField.clear();
        await emailInputField.sendKeys(invalidEditAccEmailFormat);
    }

    //invalid singular input - pre-existing email address
    async inputExistingEmailIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._editAccountEmailInputField);
        const existingEditAccEmail = await this._existingEmail;
        Logger.info("Existing user email address (edit account): ", existingEditAccEmail);
        await emailInputField.clear();
        await emailInputField.sendKeys(existingEditAccEmail);
    }

    //singular input error getter
    async getSingularInputError(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const singularInputError = await this.driver.findElement(this._singularInputError);
        return await singularInputError.getText();
    }

}
module.exports = {EditAccountPageInvalidScenarios}