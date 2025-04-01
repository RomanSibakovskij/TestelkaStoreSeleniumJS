"use strict";

const { By, until} = require('selenium-webdriver');
const BasePage = require("./BasePage");
const {TestDataGenerator} = require('./TestDataGenerator');
const Logger = require("./Logger");
const { Actions } = require('selenium-webdriver');
const {EditAccountPage} = require("../EditAccountPage");

class AddBillingAddressPageInvalidScenarios extends BasePage{

    constructor(driver) {
        super(driver);

        //add billing address elements
        this._addBillingAddressPageFirstNameInputField = By.xpath("//input[@id='billing_first_name']");
        this._addBillingAddressPageLastNameInputField = By.xpath("//input[@id='billing_last_name']");
        this._addBillingAddressPageStreetInputField = By.xpath("//input[@id='billing_address_1']");
        this._addBillingAddressPageCityInputField = By.xpath("//input[@id='billing_city']");
        this._addBillingAddressPagePostCodeInputField = By.xpath("//input[@id='billing_postcode']");
        this._addBillingAddressPagePhoneInputField = By.xpath("//input[@id='billing_phone']");
        this._addBillingAddressPageEmailInputField = By.xpath("//input[@id='billing_email']");
        //singular input error
        this._singularBillingAddressInputError = By.xpath("//ul[@role='alert']/li")

        const testDataGenerator = new TestDataGenerator();

        //invalid user data - no singular input
        this._billingNoFirstName = "";
        this._billingNoLastName = "";
        this._billingNoStreet = "";
        this._billingNoPostCode = "";
        this._billingNoCity = "";
        this._billingNoPhone = "";
        this._billingNoEmail = "";

        //invalid user data - too short singular input
        this._billingTooShortFirstName = "D";
        this._billingTooShortLastName = "A";
        this._billingTooShortStreet = "B";
        this._billingTooShortPostCode = 423;
        this._billingTooShortCity = "K";
        this._billingTooShortPhone = 5;
        this._billingTooShortEmail = testDataGenerator.generateRandomTooShortEmailAddress(1);

        //invalid user data - too long singular input
        this._billingTooLongFirstName = "Dssfdfhfghtreytujynhrgfsdfhjghkmjnbhfdsfdadryutikolikjmyhtgrfsdgjhklhgfdsazdxfgjhhgfqwertyyhgrfdasfd";//100 chars
        this._billingTooLongLastName = "Assfdfhfghtreytujynhrgfsdfhjghkmjnbhfdsfdadryutikolikjmyhtgrfsdgjhklhgfdsazdxfgjhhgfqwertyyhgrfdasfd";//100 chars
        this._billingTooLongStreet = "Bssfdfhfghtreytujynhrgfsdfhjghkmjnbhfdsfdadryutikolikjmyhtgrfsdgjhklhgfdsazdxfgjhhgfqwertyyhgrfdasfd";//100 chars
        this._billingTooLongPostCode = 2323453453232324232232324;//25 digits
        this._billingTooLongCity = "Kssfdfhfghtreytujynhrgfsdfhjghkmjnbhfdsfdadryutikolikjmyhtgrfsdgjhklhgfdsazdxfgjhhgfqwertyyhgrfdasfd";//100 chars
        this._billingTooLongPhone = 523234534532323242322323242345;//30 digits
        this._billingTooLongEmail = testDataGenerator.generateRandomTooLongEmailAddress(100);

        //invalid user data - invalid singular input format
        this._billingInvalidFirstNameFormat = "!#@!$@#";
        this._billingInvalidLastNameFormat = "&*^&%^";
        this._billingInvalidStreetFormat = "@#$@#$%^";
        this._billingInvalidPostCodeFormat = "@$#@$";
        this._billingInvalidCityFormat = "$^%^&";
        this._billingInvalidPhoneFormat = "$@#%^$%";
        this._billingInvalidEmailFormat = "nodmailmail.com";

        //invalid user data - pre-existing email
        this._existingBillingEmail = "m2@example.com"
    }

    //invalid billing address data input methods - no singular input
    async inputNoFirstNameIntoBillingAddressFirstNameInputField(){
        const billingAddressFirstNameInputField = await this.driver.findElement(this._addBillingAddressPageFirstNameInputField);
        const noBillingFirstName = this._billingNoFirstName;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", billingAddressFirstNameInputField); //scroll into view for better visual display
        Logger.info("No user billing address first name: ", noBillingFirstName);
        await billingAddressFirstNameInputField.clear();
        await billingAddressFirstNameInputField.sendKeys(noBillingFirstName);
    }
    async inputNoLastNameIntoBillingAddressLastNameInputField(){
        const billingAddressLastNameInputField = await this.driver.findElement(this._addBillingAddressPageLastNameInputField);
        const noBillingLastName = this._billingNoLastName;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", billingAddressLastNameInputField); //scroll into view for better visual display
        Logger.info("No user billing address last name: ", noBillingLastName);
        await billingAddressLastNameInputField.clear();
        await billingAddressLastNameInputField.sendKeys(noBillingLastName);
    }
    async inputNoStreetIntoBillingAddressStreetInputField(){
        const billingAddressStreetInputField = await this.driver.findElement(this._addBillingAddressPageStreetInputField);
        const noBillingStreet = this._billingNoStreet;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", billingAddressStreetInputField); //scroll into view for better visual display
        Logger.info("No user billing address street: ", noBillingStreet);
        await billingAddressStreetInputField.clear();
        await billingAddressStreetInputField.sendKeys(noBillingStreet);
    }
    async inputNoCityIntoShippingCityInputField(){
        const billingAddressCityInputField = await this.driver.findElement(this._addBillingAddressPageCityInputField);
        const noBillingCity = this._billingNoCity;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", billingAddressCityInputField); //scroll into view for better visual display
        Logger.info("No user billing address city: ", noBillingCity);
        await billingAddressCityInputField.clear();
        await billingAddressCityInputField.sendKeys(noBillingCity);
    }
    async inputNoPostCodeIntoBillingAddressPostCodeInputField(){
        const billingAddressPostCodeInputField = await this.driver.findElement(this._addBillingAddressPagePostCodeInputField);
        const noBillingPostCode = this._billingNoPostCode;
        Logger.info("No user billing address post code: ", noBillingPostCode);
        await billingAddressPostCodeInputField.clear();
        await billingAddressPostCodeInputField.sendKeys(noBillingPostCode);
    }
    async inputNoPhoneIntoBillingAddressPhoneInputField(){
        const billingAddressPhoneInputField = await this.driver.findElement(this._addBillingAddressPagePhoneInputField);
        const noBillingPhone = this._billingNoPhone;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", billingAddressPhoneInputField); //scroll into view for better visual display
        Logger.info("No user billing address phone: ", noBillingPhone);
        await billingAddressPhoneInputField.clear();
        await billingAddressPhoneInputField.sendKeys(noBillingPhone);
    }
    async inputNoEmailIntoBillingAddressEmailInputField(){
        const billingAddressEmailInputField = await this.driver.findElement(this._addBillingAddressPageEmailInputField);
        const noBillingEmail = this._billingNoEmail;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", billingAddressEmailInputField); //scroll into view for better visual display
        Logger.info("No user billing address email: ", noBillingEmail);
        await billingAddressEmailInputField.clear();
        await billingAddressEmailInputField.sendKeys(noBillingEmail);
    }

    //invalid billing address data input methods - too short singular input
    async inputTooShortFirstNameIntoBillingAddressFirstNameInputField(){
        const billingAddressFirstNameInputField = await this.driver.findElement(this._addBillingAddressPageFirstNameInputField);
        const tooShortBillingFirstName = this._billingTooShortFirstName;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", billingAddressFirstNameInputField); //scroll into view for better visual display
        Logger.info("Too short user billing address first name: ", tooShortBillingFirstName);
        await billingAddressFirstNameInputField.clear();
        await billingAddressFirstNameInputField.sendKeys(tooShortBillingFirstName);
    }
    async inputTooShortLastNameIntoBillingAddressLastNameInputField(){
        const billingAddressLastNameInputField = await this.driver.findElement(this._addBillingAddressPageLastNameInputField);
        const tooShortBillingLastName = this._billingTooShortLastName;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", billingAddressLastNameInputField); //scroll into view for better visual display
        Logger.info("Too short user billing address last name: ", tooShortBillingLastName);
        await billingAddressLastNameInputField.clear();
        await billingAddressLastNameInputField.sendKeys(tooShortBillingLastName);
    }
    async inputTooShortStreetIntoBillingAddressStreetInputField(){
        const billingAddressStreetInputField = await this.driver.findElement(this._addBillingAddressPageStreetInputField);
        const tooShortBillingStreet = this._billingTooShortStreet;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", billingAddressStreetInputField); //scroll into view for better visual display
        Logger.info("Too short user billing address street: ", tooShortBillingStreet);
        await billingAddressStreetInputField.clear();
        await billingAddressStreetInputField.sendKeys(tooShortBillingStreet);
    }
    async inputTooShortCityIntoBillingAddressCityInputField(){
        const billingAddressCityInputField = await this.driver.findElement(this._addBillingAddressPageCityInputField);
        const tooShortBillingCity = this._billingTooShortCity;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", billingAddressCityInputField); //scroll into view for better visual display
        Logger.info("Too short user billing address city: ", tooShortBillingCity);
        await billingAddressCityInputField.clear();
        await billingAddressCityInputField.sendKeys(tooShortBillingCity);
    }
    async inputTooShortPostCodeIntoBillingAddressPostCodeInputField(){
        const billingAddressPostCodeInputField = await this.driver.findElement(this._addBillingAddressPagePostCodeInputField);
        const tooShortBillingPostCode = this._billingTooShortPostCode;
        Logger.info("Too short user billing address post code: ", tooShortBillingPostCode);
        await billingAddressPostCodeInputField.clear();
        await billingAddressPostCodeInputField.sendKeys(tooShortBillingPostCode);
    }
    async inputTooShortPhoneIntoBillingAddressPhoneInputField(){
        const billingAddressPhoneInputField = await this.driver.findElement(this._addBillingAddressPagePhoneInputField);
        const tooShortBillingPhone = this._billingTooShortPhone;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", billingAddressPhoneInputField); //scroll into view for better visual display
        Logger.info("Too short user billing address phone: ", tooShortBillingPhone);
        await billingAddressPhoneInputField.clear();
        await billingAddressPhoneInputField.sendKeys(tooShortBillingPhone);
    }
    async inputTooShortEmailIntoBillingAddressEmailInputField(){
        const billingAddressEmailInputField = await this.driver.findElement(this._addBillingAddressPageEmailInputField);
        const tooShortBillingEmail = this._billingTooShortEmail;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", billingAddressEmailInputField); //scroll into view for better visual display
        Logger.info("Too short user billing address email: ", tooShortBillingEmail);
        await billingAddressEmailInputField.clear();
        await billingAddressEmailInputField.sendKeys(tooShortBillingEmail);
    }

    //invalid billing address data input methods - too long singular input
    async inputTooLongFirstNameIntoBillingAddressFirstNameInputField(){
        const billingAddressFirstNameInputField = await this.driver.findElement(this._addBillingAddressPageFirstNameInputField);
        const tooLongBillingFirstName = this._billingTooLongFirstName;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", billingAddressFirstNameInputField); //scroll into view for better visual display
        Logger.info("Too long user billing address first name: ", tooLongBillingFirstName);
        await billingAddressFirstNameInputField.clear();
        await billingAddressFirstNameInputField.sendKeys(tooLongBillingFirstName);
    }
    async inputTooLongLastNameIntoBillingAddressLastNameInputField(){
        const billingAddressLastNameInputField = await this.driver.findElement(this._addBillingAddressPageLastNameInputField);
        const tooLongBillingLastName = this._billingTooLongLastName;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", billingAddressLastNameInputField); //scroll into view for better visual display
        Logger.info("Too long user billing address last name: ", tooLongBillingLastName);
        await billingAddressLastNameInputField.clear();
        await billingAddressLastNameInputField.sendKeys(tooLongBillingLastName);
    }
    async inputTooLongStreetIntoBillingAddressStreetInputField(){
        const billingAddressStreetInputField = await this.driver.findElement(this._addBillingAddressPageStreetInputField);
        const tooLongBillingStreet = this._billingTooLongStreet;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", billingAddressStreetInputField); //scroll into view for better visual display
        Logger.info("Too long user billing address street: ", tooLongBillingStreet);
        await billingAddressStreetInputField.clear();
        await billingAddressStreetInputField.sendKeys(tooLongBillingStreet);
    }
    async inputTooLongCityIntoBillingAddressCityInputField(){
        const billingAddressCityInputField = await this.driver.findElement(this._addBillingAddressPageCityInputField);
        const tooLongBillingCity = this._billingTooLongCity;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", billingAddressCityInputField); //scroll into view for better visual display
        Logger.info("Too long user billing address city: ", tooLongBillingCity);
        await billingAddressCityInputField.clear();
        await billingAddressCityInputField.sendKeys(tooLongBillingCity);
    }
    async inputTooLongPostCodeIntoBillingAddressPostCodeInputField(){
        const billingAddressPostCodeInputField = await this.driver.findElement(this._addBillingAddressPagePostCodeInputField);
        const tooLongBillingPostCode = this._billingTooLongPostCode;
        Logger.info("Too long user billing address post code: ", tooLongBillingPostCode);
        await billingAddressPostCodeInputField.clear();
        await billingAddressPostCodeInputField.sendKeys(tooLongBillingPostCode);
    }
    async inputTooLongPhoneIntoBillingAddressPhoneInputField(){
        const billingAddressPhoneInputField = await this.driver.findElement(this._addBillingAddressPagePhoneInputField);
        const tooLongBillingPhone = this._billingTooLongPhone;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", billingAddressPhoneInputField); //scroll into view for better visual display
        Logger.info("Too long user billing address phone: ", tooLongBillingPhone);
        await billingAddressPhoneInputField.clear();
        await billingAddressPhoneInputField.sendKeys(tooLongBillingPhone);
    }
    async inputTooLongEmailIntoBillingAddressEmailInputField(){
        const billingAddressEmailInputField = await this.driver.findElement(this._addBillingAddressPageEmailInputField);
        const tooLongBillingEmail = this._billingTooLongEmail;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", billingAddressEmailInputField); //scroll into view for better visual display
        Logger.info("Too long user billing address email: ", tooLongBillingEmail);
        await billingAddressEmailInputField.clear();
        await billingAddressEmailInputField.sendKeys(tooLongBillingEmail);
    }

    //invalid billing address data input methods - invalid singular input format
    async inputInvalidFirstNameFormatIntoBillingAddressFirstNameInputField(){
        const billingAddressFirstNameInputField = await this.driver.findElement(this._addBillingAddressPageFirstNameInputField);
        const invalidBillingFirstNameFormat = this._billingInvalidFirstNameFormat;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", billingAddressFirstNameInputField); //scroll into view for better visual display
        Logger.info("Invalid user billing address first name format: ", invalidBillingFirstNameFormat);
        await billingAddressFirstNameInputField.clear();
        await billingAddressFirstNameInputField.sendKeys(invalidBillingFirstNameFormat);
    }
    async inputInvalidLastNameFormatIntoBillingAddressLastNameInputField(){
        const billingAddressLastNameInputField = await this.driver.findElement(this._addBillingAddressPageLastNameInputField);
        const invalidBillingLastNameFormat = this._billingInvalidLastNameFormat
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", billingAddressLastNameInputField); //scroll into view for better visual display
        Logger.info("Invalid user billing address last name format: ", invalidBillingLastNameFormat);
        await billingAddressLastNameInputField.clear();
        await billingAddressLastNameInputField.sendKeys(invalidBillingLastNameFormat);
    }
    async inputInvalidStreetFormatIntoBillingAddressStreetInputField(){
        const billingAddressStreetInputField = await this.driver.findElement(this._addBillingAddressPageStreetInputField);
        const invalidBillingStreetFormat = this._billingTooLongStreet;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", billingAddressStreetInputField); //scroll into view for better visual display
        Logger.info("Invalid user billing address street format: ", invalidBillingStreetFormat);
        await billingAddressStreetInputField.clear();
        await billingAddressStreetInputField.sendKeys(invalidBillingStreetFormat);
    }
    async inputInvalidCityFormatIntoBillingAddressCityInputField(){
        const billingAddressCityInputField = await this.driver.findElement(this._addBillingAddressPageCityInputField);
        const invalidBillingCity = this._billingInvalidCityFormat;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", billingAddressCityInputField); //scroll into view for better visual display
        Logger.info("Invalid user billing address city format: ", invalidBillingCity);
        await billingAddressCityInputField.clear();
        await billingAddressCityInputField.sendKeys(invalidBillingCity);
    }
    async inputInvalidPostCodeFormatIntoBillingAddressPostCodeInputField(){
        const billingAddressPostCodeInputField = await this.driver.findElement(this._addBillingAddressPagePostCodeInputField);
        const invalidBillingPostCodeFormat = this._billingInvalidPostCodeFormat;
        Logger.info("Invalid user billing address post code format: ", invalidBillingPostCodeFormat);
        await billingAddressPostCodeInputField.clear();
        await billingAddressPostCodeInputField.sendKeys(invalidBillingPostCodeFormat);
    }
    async inputInvalidPhoneFormatIntoBillingAddressPhoneInputField(){
        const billingAddressPhoneInputField = await this.driver.findElement(this._addBillingAddressPagePhoneInputField);
        const invalidBillingPhoneFormat = this._billingInvalidPhoneFormat;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", billingAddressPhoneInputField); //scroll into view for better visual display
        Logger.info("Invalid user billing address phone format: ", invalidBillingPhoneFormat);
        await billingAddressPhoneInputField.clear();
        await billingAddressPhoneInputField.sendKeys(invalidBillingPhoneFormat);
    }
    async inputInvalidEmailFormatIntoBillingAddressEmailInputField(){
        const billingAddressEmailInputField = await this.driver.findElement(this._addBillingAddressPageEmailInputField);
        const invalidBillingEmail = this._billingInvalidEmailFormat;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", billingAddressEmailInputField); //scroll into view for better visual display
        Logger.info("Invalid user billing address email format: ", invalidBillingEmail);
        await billingAddressEmailInputField.clear();
        await billingAddressEmailInputField.sendKeys(invalidBillingEmail);
    }

    //invalid billing address input method - pre-existing email (used beforehand in manual testing)
    async inputExistingEmailIntoBillingAddressEmailInputField(){
        const billingAddressEmailInputField = await this.driver.findElement(this._addBillingAddressPageEmailInputField);
        const existingBillingEmail = this._existingBillingEmail;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", billingAddressEmailInputField); //scroll into view for better visual display
        Logger.info("Existing user billing address email: ", existingBillingEmail);
        await billingAddressEmailInputField.clear();
        await billingAddressEmailInputField.sendKeys(existingBillingEmail);
    }

    //singular input error getter
    async getBillingAddressSingularInputError(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const singularInputError = await this.driver.findElement(this._singularBillingAddressInputError);
        return await singularInputError.getText();
    }

}
module.exports = { AddBillingAddressPageInvalidScenarios }