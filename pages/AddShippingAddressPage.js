"use strict";

const { By, until} = require('selenium-webdriver');
const BasePage = require('./utils/BasePage');
const {TestDataGenerator} = require('./utils/TestDataGenerator');
const { EditAccountPage } = require("./EditAccountPage");
const Logger = require("./utils/Logger");
const { Actions } = require('selenium-webdriver');

class AddShippingAddressPage extends BasePage{

    constructor(driver){
        super(driver);

        //add shipping address page elements
        this._addShippingAddressPageTitle = By.xpath("//div[@class='woocommerce-MyAccount-content']//h2");
        this._addShippingAddressPageFirstNameInputSubtitle = By.xpath("//div[@class='woocommerce-address-fields__field-wrapper']//label[@for='shipping_first_name']");
        this._addShippingAddressPageFirstNameInputField = By.xpath("//div[@class='woocommerce-address-fields__field-wrapper']//input[@id='shipping_first_name']");
        this._addShippingAddressPageLastNameInputSubtitle = By.xpath("//div[@class='woocommerce-address-fields__field-wrapper']//label[@for='shipping_last_name']");
        this._addShippingAddressPageLastNameInputField = By.xpath("//div[@class='woocommerce-address-fields__field-wrapper']//input[@id='shipping_last_name']");
        this._addShippingAddressPageCompanyInputSubtitle = By.xpath("//div[@class='woocommerce-address-fields__field-wrapper']//label[@for='shipping_company']");
        this._addShippingAddressPageCompanyInputField = By.xpath("//div[@class='woocommerce-address-fields__field-wrapper']//input[@id='shipping_company']");
        this._addShippingAddressPageCountrySubtitle = By.xpath("//div[@class='woocommerce-address-fields__field-wrapper']//label[@for='shipping_country']");
        this._addShippingAddressPageCountryDropdownMenu = By.xpath("//div[@class='woocommerce-address-fields__field-wrapper']//select");
        this._addShippingAddressPageUSCountryOption = By.xpath("//select/option[@value='US']");
        this._addShippingAddressPageStreetInputSubtitle = By.xpath("//div[@class='woocommerce-address-fields__field-wrapper']//label[@for='shipping_address_1']");
        this._addShippingAddressPageStreetInputField = By.xpath("//div[@class='woocommerce-address-fields__field-wrapper']//input[@id='shipping_address_1']");
        this._addShippingAddressPageAdditionalAddressInputField = By.xpath("//div[@class='woocommerce-address-fields__field-wrapper']//input[@id='shipping_address_2']");
        this._addShippingAddressPageCityInputSubtitle = By.xpath("//div[@class='woocommerce-address-fields__field-wrapper']//label[@for='shipping_city']");
        this._addShippingAddressPageCityInputField = By.xpath("//div[@class='woocommerce-address-fields__field-wrapper']//input[@id='shipping_city']");
        this._addShippingAddressPageRegionInputSubtitle = By.xpath("//label[@for='shipping_state']");
        this._addShippingAddressPageRegionDropdownMenu = By.xpath("//select[@id='shipping_state']");
        this._addShippingAddressPageIllinoisRegionOption = By.xpath("//select[@id='shipping_state']/option[@value='IL']");
        this._addShippingAddressPagePostCodeInputSubtitle = By.xpath("//div[@class='woocommerce-address-fields__field-wrapper']//label[@for='shipping_postcode']");
        this._addShippingAddressPagePostCodeInputField = By.xpath("//input[@id='shipping_postcode']");
        this._addShippingAddressPageWriteAddressButton = By.xpath("//button[@name='save_address']");

        const testDataGenerator = new TestDataGenerator();

        //valid user data
        this._shippingStreet = testDataGenerator.generateRandomAddress(5);
        this._shippingCity = testDataGenerator.getRandomCity();
        this._shippingPostCode = testDataGenerator.getRandomPostalOrderNumber();
    }

    //valid user shipping address data input methods
    async inputValidFirstNameIntoShippingAddressFirstNameInputField(){
        const shippingAddressFirstNameInputField = await this.driver.findElement(this._addShippingAddressPageFirstNameInputField);
        const editAccountPage = new EditAccountPage();
        const shippingFirstName = editAccountPage.firstName;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", shippingAddressFirstNameInputField); //scroll into view for better visual display
        Logger.info("Valid user shipping address first name: ", shippingFirstName);
        await shippingAddressFirstNameInputField.clear();
        await shippingAddressFirstNameInputField.sendKeys(shippingFirstName);
    }
    async inputValidLastNameIntoShippingAddressLastNameInputField(){
        const shippingAddressLastNameInputField = await this.driver.findElement(this._addShippingAddressPageLastNameInputField);
        const editAccountPage = new EditAccountPage();
        const shippingLastName = editAccountPage.lastName;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", shippingAddressLastNameInputField); //scroll into view for better visual display
        Logger.info("Valid user shipping address last name: ", shippingLastName);
        await shippingAddressLastNameInputField.clear();
        await shippingAddressLastNameInputField.sendKeys(shippingLastName);
    }
    async inputValidStreetIntoShippingAddressStreetInputField(){
        const shippingAddressStreetInputField = await this.driver.findElement(this._addShippingAddressPageStreetInputField);
        const shippingStreet = this._shippingStreet;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", shippingAddressStreetInputField); //scroll into view for better visual display
        Logger.info("Valid user shipping address street: ", shippingStreet);
        await shippingAddressStreetInputField.clear();
        await shippingAddressStreetInputField.sendKeys(shippingStreet);
    }
    async inputValidCityIntoShippingCityInputField(){
        const shippingAddressCityInputField = await this.driver.findElement(this._addShippingAddressPageCityInputField);
        const shippingCity = this._shippingCity;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", shippingAddressCityInputField); //scroll into view for better visual display
        Logger.info("Valid user shipping address city: ", shippingCity);
        await shippingAddressCityInputField.clear();
        await shippingAddressCityInputField.sendKeys(shippingCity);
    }
    async inputValidPostCodeIntoShippingAddressPostCodeInputField(){
        const shippingAddressPostCodeInputField = await this.driver.findElement(this._addShippingAddressPagePostCodeInputField);
        const shippingPostCode = this._shippingPostCode;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", shippingAddressPostCodeInputField); //scroll into view for better visual display
        Logger.info("Valid user shipping address post code: ", shippingPostCode);
        await shippingAddressPostCodeInputField.clear();
        await shippingAddressPostCodeInputField.sendKeys(shippingPostCode);
    }

    //add shipping address page text element getters
    async getAddShippingAddressPageTitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const addShippingAddressPageTitle = await this.driver.findElement(this._addShippingAddressPageTitle);
        return await addShippingAddressPageTitle.getText();
    }

    async getAddShippingAddressFirstNameSubtitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const addShippingAddressFirstNameSubtitle = await this.driver.findElement(this._addShippingAddressPageFirstNameInputSubtitle);
        const requiredText = await addShippingAddressFirstNameSubtitle.getText();
        return requiredText.split('*')[0].trim();
    }
    async getAddShippingAddressLastNameSubtitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const addShippingAddressLastNameSubtitle = await this.driver.findElement(this._addShippingAddressPageLastNameInputSubtitle);
        const requiredText = await addShippingAddressLastNameSubtitle.getText();
        return requiredText.split('*')[0].trim();
    }
    async getAddShippingAddressCompanySubtitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const addShippingAddressCompanySubtitle = await this.driver.findElement(this._addShippingAddressPageCompanyInputSubtitle);
        return await addShippingAddressCompanySubtitle.getText();
    }
    async getAddShippingAddressCountrySubtitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const addShippingAddressCountrySubtitle = await this.driver.findElement(this._addShippingAddressPageCountrySubtitle);
        const requiredText = await addShippingAddressCountrySubtitle.getText();
        return requiredText.split('*')[0].trim();
    }
    async getAddShippingAddressStreetSubtitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const addShippingAddressStreetSubtitle = await this.driver.findElement(this._addShippingAddressPageStreetInputSubtitle);
        const requiredText = await addShippingAddressStreetSubtitle.getText();
        return requiredText.split('*')[0].trim();
    }
    async getAddShippingAddressCitySubtitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const addShippingAddressCitySubtitle = await this.driver.findElement(this._addShippingAddressPageCityInputSubtitle);
        const requiredText = await addShippingAddressCitySubtitle.getText();
        return requiredText.split('*')[0].trim();
    }
    async getAddShippingAddressRegionSubtitle(){
        await new Promise(resolve => setTimeout(resolve, 300));
        const addShippingAddressRegionSubtitle = await this.driver.findElement(this._addShippingAddressPageRegionInputSubtitle);
        const requiredText = await addShippingAddressRegionSubtitle.getText();
        return requiredText.split('*')[0].trim();
    }
    async getAddShippingAddressPostCodeSubtitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const addShippingAddressPostCodeSubtitle = await this.driver.findElement(this._addShippingAddressPagePostCodeInputSubtitle);
        const requiredText = await addShippingAddressPostCodeSubtitle.getText();
        return requiredText.split('*')[0].trim();
    }

    //click country dropdown menu method
    async clickCountryDropdownMenu(){
        const countryDropdownMenu = await this.driver.findElement(this._addShippingAddressPageCountryDropdownMenu);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: countryDropdownMenu }).click().perform();
    }
    //select 'United States' country option
    async selectUSCountryOption(){
        const usCountryOption = await this.driver.findElement(this._addShippingAddressPageUSCountryOption);
        await usCountryOption.click();
    }

    //click region dropdown menu method
    async clickRegionDropdownMenu(){
        const regionDropdownMenu = await this.driver.findElement(this._addShippingAddressPageRegionDropdownMenu);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: regionDropdownMenu }).click().perform();
    }
    //select 'Illinois' region option
    async selectIllinoisRegionOption(){
        const illinoisRegionOption = await this.driver.findElement(this._addShippingAddressPageIllinoisRegionOption);
        await illinoisRegionOption.click();
    }

    //click 'Write shipping address' button method
    async clickWriteShippingAddressButton(){
        const writeShippingAddressButton = await this.driver.findElement(this._addShippingAddressPageWriteAddressButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: writeShippingAddressButton }).click().perform();
    }

    //add shipping address page web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isAddShippingAddressPageWebElementDisplayed(){
        const elementsToCheck = [
            this._addShippingAddressPageTitle,
            this._addShippingAddressPageFirstNameInputSubtitle,
            this._addShippingAddressPageFirstNameInputField,
            this._addShippingAddressPageLastNameInputSubtitle,
            this._addShippingAddressPageLastNameInputField,
            this._addShippingAddressPageCompanyInputSubtitle,
            this._addShippingAddressPageCompanyInputField,
            this._addShippingAddressPageCountrySubtitle,
            this._addShippingAddressPageCountryDropdownMenu,
            this._addShippingAddressPageStreetInputSubtitle,
            this._addShippingAddressPageStreetInputField,
            this._addShippingAddressPageAdditionalAddressInputField,
            this._addShippingAddressPageCityInputSubtitle,
            this._addShippingAddressPageCityInputField,
            //this._addShippingAddressPageRegionInputSubtitle,
            //this._addShippingAddressPageRegionDropdownMenu,
            this._addShippingAddressPagePostCodeInputSubtitle,
            this._addShippingAddressPagePostCodeInputField,
            this._addShippingAddressPageWriteAddressButton
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = {AddShippingAddressPage}