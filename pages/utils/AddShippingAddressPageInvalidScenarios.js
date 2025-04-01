"use strict";

const { By, until} = require('selenium-webdriver');
const BasePage = require("./BasePage");
const {TestDataGenerator} = require('./TestDataGenerator');
const Logger = require("./Logger");
const { Actions } = require('selenium-webdriver');
const {EditAccountPage} = require("../EditAccountPage");

class AddShippingAddressPageInvalidScenarios extends BasePage{

    constructor(driver){
        super(driver);

        //add shipping address page elements
        this._addShippingAddressPageFirstNameInputField = By.xpath("//div[@class='woocommerce-address-fields__field-wrapper']//input[@id='shipping_first_name']");
        this._addShippingAddressPageLastNameInputField = By.xpath("//div[@class='woocommerce-address-fields__field-wrapper']//input[@id='shipping_last_name']");
        this._addShippingAddressPageStreetInputField = By.xpath("//div[@class='woocommerce-address-fields__field-wrapper']//input[@id='shipping_address_1']");
        this._addShippingAddressPageCityInputField = By.xpath("//div[@class='woocommerce-address-fields__field-wrapper']//input[@id='shipping_city']");
        this._addShippingAddressPagePostCodeInputField = By.xpath("//input[@id='shipping_postcode']");
        //singular input error
        this._singularShippingAddressInputError = By.xpath("//ul[@role='alert']/li")

        const testDataGenerator = new TestDataGenerator();

        //invalid user data - no singular input
        this._shippingNoFirstName = "";
        this._shippingNoLastName = "";
        this._shippingNoStreet = "";
        this._shippingNoCity = "";
        this._shippingNoPostCode = "";

        //invalid user data - too short singular input
        this._shippingTooShortFirstName = "D";
        this._shippingTooShortLastName = "S";
        this._shippingTooShortStreet = "B";
        this._shippingTooShortCity = "R";
        this._shippingTooShortPostCode = 5;

        //invalid user data - too long singular input
        this._shippingTooLongFirstName = "Vssfdfhfghtreytujynhrgfsdfhjghkmjnbhfdsfdadryutikolikjmyhtgrfsdgjhklhgfdsazdxfgjhhgfqwertyyhgrfdasfd";
        this._shippingTooLongLastName = "Tssfdfhfghtreytujynhrgfsdfhjghkmjnbhfdsfdadryutikolikjmyhtgrfsdgjhklhgfdsazdxfgjhhgfqwertyyhgrfdasfd";
        this._shippingTooLongStreet = "Gssfdfhfghtreytujynhrgfsdfhjghkmjnbhfdsfdadryutikolikjmyhtgrfsdgjhklhgfdsazdxfgjhhgfqwertyyhgrfdasfd";
        this._shippingTooLongCity = "Vssfdfhfghtreytujynhrgfsdfhjghkmjnbhfdsfdadryutikolikjmyhtgrfsdgjhklhgfdsazdxfgjhhgfqwertyyhgrfdasfd";
        this._shippingTooLongPostCode = 2323453453232324232232324;

        //invalid user data - invalid singular input format
        this._shippingInvalidFirstNameFormat = "!#@%$%^%^&%^*";
        this._shippingInvalidLastNameFormat = "*^%^$#@";
        this._shippingInvalidStreetFormat = "@$@#$%#$^";
        this._shippingInvalidCityFormat = "$%&^%$%#$";
        this._shippingInvalidPostCodeFormat = "@$#$^%&%$%^#";
    }

    //invalid user shipping address data input methods - no singular input
    async inputNoFirstNameIntoShippingAddressFirstNameInputField(){
        const shippingAddressFirstNameInputField = await this.driver.findElement(this._addShippingAddressPageFirstNameInputField);
        const noShippingFirstName = this._shippingNoFirstName;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", shippingAddressFirstNameInputField); //scroll into view for better visual display
        Logger.info("No user shipping address first name: ", noShippingFirstName);
        await shippingAddressFirstNameInputField.clear();
        await shippingAddressFirstNameInputField.sendKeys(noShippingFirstName);
    }
    async inputNoLastNameIntoShippingAddressLastNameInputField(){
        const shippingAddressLastNameInputField = await this.driver.findElement(this._addShippingAddressPageLastNameInputField);
        const noShippingLastName = this._shippingNoLastName;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", shippingAddressLastNameInputField); //scroll into view for better visual display
        Logger.info("No user shipping address last name: ", noShippingLastName);
        await shippingAddressLastNameInputField.clear();
        await shippingAddressLastNameInputField.sendKeys(noShippingLastName);
    }
    async inputNoStreetIntoShippingAddressStreetInputField(){
        const shippingAddressStreetInputField = await this.driver.findElement(this._addShippingAddressPageStreetInputField);
        const noShippingStreet = this._shippingNoStreet;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", shippingAddressStreetInputField); //scroll into view for better visual display
        Logger.info("No user shipping address street: ", noShippingStreet);
        await shippingAddressStreetInputField.clear();
        await shippingAddressStreetInputField.sendKeys(noShippingStreet);
    }
    async inputNoCityIntoShippingCityInputField(){
        const shippingAddressCityInputField = await this.driver.findElement(this._addShippingAddressPageCityInputField);
        const noShippingCity = this._shippingNoCity;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", shippingAddressCityInputField); //scroll into view for better visual display
        Logger.info("No user shipping address city: ", noShippingCity);
        await shippingAddressCityInputField.clear();
        await shippingAddressCityInputField.sendKeys(noShippingCity);
    }
    async inputNoPostCodeIntoShippingAddressPostCodeInputField(){
        const shippingAddressPostCodeInputField = await this.driver.findElement(this._addShippingAddressPagePostCodeInputField);
        const noShippingPostCode = this._shippingNoPostCode;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", shippingAddressPostCodeInputField); //scroll into view for better visual display
        Logger.info("No user shipping address post code: ", noShippingPostCode);
        await shippingAddressPostCodeInputField.clear();
        await shippingAddressPostCodeInputField.sendKeys(noShippingPostCode);
    }

    //invalid user shipping address data input methods - too short singular input
    async inputTooShortFirstNameIntoShippingAddressFirstNameInputField(){
        const shippingAddressFirstNameInputField = await this.driver.findElement(this._addShippingAddressPageFirstNameInputField);
        const tooShortShippingFirstName = this._shippingTooShortFirstName;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", shippingAddressFirstNameInputField); //scroll into view for better visual display
        Logger.info("Too short user shipping address first name: ", tooShortShippingFirstName);
        await shippingAddressFirstNameInputField.clear();
        await shippingAddressFirstNameInputField.sendKeys(tooShortShippingFirstName);
    }
    async inputTooShortLastNameIntoShippingAddressLastNameInputField(){
        const shippingAddressLastNameInputField = await this.driver.findElement(this._addShippingAddressPageLastNameInputField);
        const tooShortShippingLastName = this._shippingTooShortLastName;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", shippingAddressLastNameInputField); //scroll into view for better visual display
        Logger.info("Too short user shipping address last name: ", tooShortShippingLastName);
        await shippingAddressLastNameInputField.clear();
        await shippingAddressLastNameInputField.sendKeys(tooShortShippingLastName);
    }
    async inputTooShortStreetIntoShippingAddressStreetInputField(){
        const shippingAddressStreetInputField = await this.driver.findElement(this._addShippingAddressPageStreetInputField);
        const tooShortShippingStreet = this._shippingTooShortStreet;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", shippingAddressStreetInputField); //scroll into view for better visual display
        Logger.info("Too short user shipping address street: ", tooShortShippingStreet);
        await shippingAddressStreetInputField.clear();
        await shippingAddressStreetInputField.sendKeys(tooShortShippingStreet);
    }
    async inputTooShortCityIntoShippingCityInputField(){
        const shippingAddressCityInputField = await this.driver.findElement(this._addShippingAddressPageCityInputField);
        const tooShortShippingCity = this._shippingTooShortCity;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", shippingAddressCityInputField); //scroll into view for better visual display
        Logger.info("Too short user shipping address city: ", tooShortShippingCity);
        await shippingAddressCityInputField.clear();
        await shippingAddressCityInputField.sendKeys(tooShortShippingCity);
    }
    async inputTooShortPostCodeIntoShippingAddressPostCodeInputField(){
        const shippingAddressPostCodeInputField = await this.driver.findElement(this._addShippingAddressPagePostCodeInputField);
        const tooShortShippingPostCode = this._shippingTooShortPostCode;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", shippingAddressPostCodeInputField); //scroll into view for better visual display
        Logger.info("Too short user shipping address post code: ", tooShortShippingPostCode);
        await shippingAddressPostCodeInputField.clear();
        await shippingAddressPostCodeInputField.sendKeys(tooShortShippingPostCode);
    }

    //invalid user shipping address data input methods - too long singular input
    async inputTooLongFirstNameIntoShippingAddressFirstNameInputField(){
        const shippingAddressFirstNameInputField = await this.driver.findElement(this._addShippingAddressPageFirstNameInputField);
        const tooLongShippingFirstName = this._shippingTooLongFirstName;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", shippingAddressFirstNameInputField); //scroll into view for better visual display
        Logger.info("Too long user shipping address first name: ", tooLongShippingFirstName);
        await shippingAddressFirstNameInputField.clear();
        await shippingAddressFirstNameInputField.sendKeys(tooLongShippingFirstName);
    }
    async inputTooLongLastNameIntoShippingAddressLastNameInputField(){
        const shippingAddressLastNameInputField = await this.driver.findElement(this._addShippingAddressPageLastNameInputField);
        const tooLongShippingLastName = this._shippingTooLongLastName;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", shippingAddressLastNameInputField); //scroll into view for better visual display
        Logger.info("Too long user shipping address last name: ", tooLongShippingLastName);
        await shippingAddressLastNameInputField.clear();
        await shippingAddressLastNameInputField.sendKeys(tooLongShippingLastName);
    }
    async inputTooLongStreetIntoShippingAddressStreetInputField(){
        const shippingAddressStreetInputField = await this.driver.findElement(this._addShippingAddressPageStreetInputField);
        const tooLongShippingStreet = this._shippingTooLongStreet;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", shippingAddressStreetInputField); //scroll into view for better visual display
        Logger.info("Too long user shipping address street: ", tooLongShippingStreet);
        await shippingAddressStreetInputField.clear();
        await shippingAddressStreetInputField.sendKeys(tooLongShippingStreet);
    }
    async inputTooLongCityIntoShippingCityInputField(){
        const shippingAddressCityInputField = await this.driver.findElement(this._addShippingAddressPageCityInputField);
        const tooLongShippingCity = this._shippingTooLongCity;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", shippingAddressCityInputField); //scroll into view for better visual display
        Logger.info("Too long user shipping address city: ", tooLongShippingCity);
        await shippingAddressCityInputField.clear();
        await shippingAddressCityInputField.sendKeys(tooLongShippingCity);
    }
    async inputTooLongPostCodeIntoShippingAddressPostCodeInputField(){
        const shippingAddressPostCodeInputField = await this.driver.findElement(this._addShippingAddressPagePostCodeInputField);
        const tooLongShippingPostCode = this._shippingTooLongPostCode;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", shippingAddressPostCodeInputField); //scroll into view for better visual display
        Logger.info("Too long user shipping address post code: ", tooLongShippingPostCode);
        await shippingAddressPostCodeInputField.clear();
        await shippingAddressPostCodeInputField.sendKeys(tooLongShippingPostCode);
    }

    //invalid user shipping address data input methods - invalid singular input format
    async inputInvalidFirstNameFormatIntoShippingAddressFirstNameInputField(){
        const shippingAddressFirstNameInputField = await this.driver.findElement(this._addShippingAddressPageFirstNameInputField);
        const invalidShippingFirstName = this._shippingInvalidFirstNameFormat;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", shippingAddressFirstNameInputField); //scroll into view for better visual display
        Logger.info("Invalid user shipping address first name format: ", invalidShippingFirstName);
        await shippingAddressFirstNameInputField.clear();
        await shippingAddressFirstNameInputField.sendKeys(invalidShippingFirstName);
    }
    async inputInvalidLastNameFormatIntoShippingAddressLastNameInputField(){
        const shippingAddressLastNameInputField = await this.driver.findElement(this._addShippingAddressPageLastNameInputField);
        const invalidShippingLastName = this._shippingInvalidLastNameFormat;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", shippingAddressLastNameInputField); //scroll into view for better visual display
        Logger.info("Invalid user shipping address last name format: ", invalidShippingLastName);
        await shippingAddressLastNameInputField.clear();
        await shippingAddressLastNameInputField.sendKeys(invalidShippingLastName);
    }
    async inputInvalidStreetFormatIntoShippingAddressStreetInputField(){
        const shippingAddressStreetInputField = await this.driver.findElement(this._addShippingAddressPageStreetInputField);
        const invalidShippingStreet = this._shippingInvalidStreetFormat;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", shippingAddressStreetInputField); //scroll into view for better visual display
        Logger.info("Invalid user shipping address street format: ", invalidShippingStreet);
        await shippingAddressStreetInputField.clear();
        await shippingAddressStreetInputField.sendKeys(invalidShippingStreet);
    }
    async inputInvalidCityFormatIntoShippingCityInputField(){
        const shippingAddressCityInputField = await this.driver.findElement(this._addShippingAddressPageCityInputField);
        const invalidShippingCity = this._shippingInvalidCityFormat;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", shippingAddressCityInputField); //scroll into view for better visual display
        Logger.info("Invalid user shipping address city format: ", invalidShippingCity);
        await shippingAddressCityInputField.clear();
        await shippingAddressCityInputField.sendKeys(invalidShippingCity);
    }
    async inputInvalidPostCodeFormatIntoShippingAddressPostCodeInputField(){
        const shippingAddressPostCodeInputField = await this.driver.findElement(this._addShippingAddressPagePostCodeInputField);
        const invalidShippingPostCode = this._shippingInvalidPostCodeFormat;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", shippingAddressPostCodeInputField); //scroll into view for better visual display
        Logger.info("Invalid user shipping address post code format: ", invalidShippingPostCode);
        await shippingAddressPostCodeInputField.clear();
        await shippingAddressPostCodeInputField.sendKeys(invalidShippingPostCode);
    }

    //singular input error getter
    async getShippingAddressSingularInputError(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const singularInputError = await this.driver.findElement(this._singularShippingAddressInputError);
        return await singularInputError.getText();
    }

}
module.exports = { AddShippingAddressPageInvalidScenarios }