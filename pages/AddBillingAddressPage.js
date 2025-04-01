"use strict";

const { By, until} = require('selenium-webdriver');
const BasePage = require('./utils/BasePage');
const {TestDataGenerator} = require('./utils/TestDataGenerator');
const { EditAccountPage } = require("./EditAccountPage");
const Logger = require("./utils/Logger");
const { Actions } = require('selenium-webdriver');

class AddBillingAddressPage extends BasePage{

    constructor(driver) {
        super(driver);

        //add billing address elements
        this._addBillingAddressPageTitle = By.xpath("//div[@class='woocommerce-MyAccount-content']//h2");
        this._addBillingAddressPageFirstNameInputSubtitle = By.xpath("//label[@for='billing_first_name']");
        this._addBillingAddressPageFirstNameInputField = By.xpath("//input[@id='billing_first_name']");
        this._addBillingAddressPageLastNameInputSubtitle = By.xpath("//label[@for='billing_last_name']");
        this._addBillingAddressPageLastNameInputField = By.xpath("//input[@id='billing_last_name']");
        this._addBillingAddressPageCompanyInputSubtitle = By.xpath("//label[@for='billing_company']");
        this._addBillingAddressPageCompanyInputField = By.xpath("//input[@id='billing_company']");
        this._addBillingAddressPageCountryInputSubtitle = By.xpath("//label[@for='billing_country']");
        this._addBillingAddressPageCountryDropdownMenu = By.xpath("//select[@id='billing_country']");
        this._addBillingAddressPageUSCountryOption = By.xpath("//select[@id='billing_country']/option[@value='US']");
        this._addBillingAddressPageStreetInputSubtitle = By.xpath("//label[@for='billing_address_1']");
        this._addBillingAddressPageStreetInputField = By.xpath("//input[@id='billing_address_1']");
        this._addBillingAddressPageAdditionalAddressInputField = By.xpath("//input[@id='billing_address_2']");
        this._addBillingAddressPageCityInputSubtitle = By.xpath("//label[@for='billing_city']");
        this._addBillingAddressPageCityInputField = By.xpath("//input[@id='billing_city']");
        //this._addBillingAddressPageRegionInputSubtitle = By.xpath("//label[@for='billing_state']");
        this._addBillingAddressPageRegionDropdownMenu = By.xpath("//select[@id='billing_state']");
        this._addBillingAddressPageIllinoisRegionOption = By.xpath("//select[@id='billing_state']/option[@value='IL']");
        this._addBillingAddressPagePostCodeSubtitle = By.xpath("//label[@for='billing_postcode']");
        this._addBillingAddressPagePostCodeInputField = By.xpath("//input[@id='billing_postcode']");
        this._addBillingAddressPagePhoneInputSubtitle = By.xpath("//label[@for='billing_phone']");
        this._addBillingAddressPagePhoneInputField = By.xpath("//input[@id='billing_phone']");
        this._addBillingAddressPageEmailInputSubtitle = By.xpath("//label[@for='billing_email']");
        this._addBillingAddressPageEmailInputField = By.xpath("//input[@id='billing_email']");
        this._addBillingAddressPageSaveAddressButton = By.xpath("//button[@name='save_address']");

        const testDataGenerator = new TestDataGenerator();

        //valid user data
        this._billingStreet = testDataGenerator.generateRandomAddress(8);
        this._billingCity = testDataGenerator.getRandomCity();
        this._billingPostCode = testDataGenerator.getRandomPostalOrderNumber();
        this._billingPhone = testDataGenerator.generatePhoneNumber(9);
        this._billingEditedEmail = testDataGenerator.generateRandomEditedEmailAddress(9);
    }

    //valid billing address data input methods
    async inputValidStreetIntoBillingAddressStreetInputField(){
        const billingAddressStreetInputField = await this.driver.findElement(this._addBillingAddressPageStreetInputField);
        const billingStreet = this._billingStreet;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", billingAddressStreetInputField); //scroll into view for better visual display
        Logger.info("Valid user billing address street: ", billingStreet);
        await billingAddressStreetInputField.sendKeys(billingStreet);
    }
    async inputValidCityIntoBillingAddressCityInputField(){
        const billingAddressCityInputField = await this.driver.findElement(this._addBillingAddressPageCityInputField);
        const billingCity = this._billingCity;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", billingAddressCityInputField); //scroll into view for better visual display
        Logger.info("Valid user billing address city: ", billingCity);
        await billingAddressCityInputField.sendKeys(billingCity);
    }
    async inputValidPostCodeIntoBillingAddressPostCodeInputField(){
        const billingAddressPostCodeInputField = await this.driver.findElement(this._addBillingAddressPagePostCodeInputField);
        const billingPostCode = this._billingPostCode;
        Logger.info("Valid user billing address post code: ", billingPostCode);
        await billingAddressPostCodeInputField.sendKeys(billingPostCode);
    }
    async inputValidPhoneIntoBillingAddressPhoneInputField(){
        const billingAddressPhoneInputField = await this.driver.findElement(this._addBillingAddressPagePhoneInputField);
        const billingPhone = this._billingPhone;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", billingAddressPhoneInputField); //scroll into view for better visual display
        Logger.info("Valid user billing address phone: ", billingPhone);
        await billingAddressPhoneInputField.sendKeys(billingPhone);
    }

    //edited email input method
    async inputValidEditedEmailIntoBillingAddressEmailInputField(){
        const billingAddressEmailInputField = await this.driver.findElement(this._addBillingAddressPageEmailInputField);
        const billingEditedEmail = this._billingEditedEmail;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", billingAddressEmailInputField); //scroll into view for better visual display
        Logger.info("Valid user billing address edited email: ", billingEditedEmail);
        billingAddressEmailInputField.clear();
        await billingAddressEmailInputField.sendKeys(billingEditedEmail);
    }

    //add billing address text element getters
    async getAddBillingAddressPageTitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const addBillingAddressPageTitle = await this.driver.findElement(this._addBillingAddressPageTitle);
        return await addBillingAddressPageTitle.getText();
    }

    async getAddBillingAddressFirstNameInputSubtitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const addBillingAddressFirstNameSubtitle = await this.driver.findElement(this._addBillingAddressPageFirstNameInputSubtitle);
        const requiredText = await addBillingAddressFirstNameSubtitle.getText();
        return requiredText.split('*')[0].trim();
    }
    async getAddBillingAddressLastNameInputSubtitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const addBillingAddressLastNameSubtitle = await this.driver.findElement(this._addBillingAddressPageLastNameInputSubtitle);
        const requiredText = await addBillingAddressLastNameSubtitle.getText();
        return requiredText.split('*')[0].trim();
    }
    async getAddBillingAddressCompanyInputSubtitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const addBillingAddressCompanySubtitle = await this.driver.findElement(this._addBillingAddressPageCompanyInputSubtitle);
        return await addBillingAddressCompanySubtitle.getText();
    }
    async getAddBillingAddressCountryInputSubtitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const addBillingAddressCountrySubtitle = await this.driver.findElement(this._addBillingAddressPageCountryInputSubtitle);
        const requiredText = await addBillingAddressCountrySubtitle.getText();
        return requiredText.split('*')[0].trim();
    }
    async getAddBillingAddressStreetInputSubtitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const addBillingAddressStreetSubtitle = await this.driver.findElement(this._addBillingAddressPageStreetInputSubtitle);
        const requiredText = await addBillingAddressStreetSubtitle.getText();
        return requiredText.split('*')[0].trim();
    }
    async getAddBillingAddressCityInputSubtitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const addBillingAddressCitySubtitle = await this.driver.findElement(this._addBillingAddressPageCityInputSubtitle);
        const requiredText = await addBillingAddressCitySubtitle.getText();
        return requiredText.split('*')[0].trim();
    }
    async getAddBillingAddressPostCodeInputSubtitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const addBillingAddressPostCodeSubtitle = await this.driver.findElement(this._addBillingAddressPagePostCodeSubtitle);
        const requiredText = await addBillingAddressPostCodeSubtitle.getText();
        return requiredText.split('*')[0].trim();
    }
    async getAddBillingAddressPhoneInputSubtitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const addBillingAddressPhoneSubtitle = await this.driver.findElement(this._addBillingAddressPagePhoneInputSubtitle);
        const requiredText = await addBillingAddressPhoneSubtitle.getText();
        return requiredText.split('*')[0].trim();
    }
    async getAddBillingAddressEmailInputSubtitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const addBillingAddressEmailSubtitle = await this.driver.findElement(this._addBillingAddressPageEmailInputSubtitle);
        const requiredText = await addBillingAddressEmailSubtitle.getText();
        return requiredText.split('*')[0].trim();
    }

    //click country dropdown menu method
    async clickCountryDropdownMenu(){
        const countryDropdownMenu = await this.driver.findElement(this._addBillingAddressPageCountryDropdownMenu);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: countryDropdownMenu }).click().perform();
    }
    //select 'United States' country option
    async selectUSCountryOption(){
        const usCountryOption = await this.driver.findElement(this._addBillingAddressPageUSCountryOption);
        await usCountryOption.click();
    }

    //click region dropdown menu method
    async clickRegionDropdownMenu(){
        const regionDropdownMenu = await this.driver.findElement(this._addBillingAddressPageRegionDropdownMenu);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: regionDropdownMenu }).click().perform();
    }
    //select 'Illinois' region option
    async selectIllinoisRegionOption(){
        const illinoisRegionOption = await this.driver.findElement(this._addBillingAddressPageIllinoisRegionOption);
        await illinoisRegionOption.click();
    }

    //click 'Save billing address' button method
    async clickSaveBillingAddressButton(){
        const saveBillingAddressButton = await this.driver.findElement(this._addBillingAddressPageSaveAddressButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: saveBillingAddressButton }).click().perform();
    }

    //private data getter

    get editedBillingEmail(){return this._billingEditedEmail}

    //add billing address page web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isAddBillingAddressPageWebElementDisplayed(){
        const elementsToCheck = [
            this._addBillingAddressPageTitle,
            this._addBillingAddressPageFirstNameInputSubtitle,
            this._addBillingAddressPageFirstNameInputField,
            this._addBillingAddressPageLastNameInputSubtitle,
            this._addBillingAddressPageLastNameInputField,
            this._addBillingAddressPageCompanyInputSubtitle,
            this._addBillingAddressPageCompanyInputField,
            this._addBillingAddressPageCountryInputSubtitle,
            this._addBillingAddressPageCountryDropdownMenu,
            this._addBillingAddressPageStreetInputSubtitle,
            this._addBillingAddressPageStreetInputField,
            this._addBillingAddressPageAdditionalAddressInputField,
            this._addBillingAddressPageCityInputSubtitle,
            this._addBillingAddressPageCityInputField,
            // this._addBillingAddressPageRegionInputSubtitle,
            // this._addBillingAddressPageRegionInputField,
            this._addBillingAddressPagePostCodeSubtitle,
            this._addBillingAddressPagePostCodeInputField,
            this._addBillingAddressPagePhoneInputSubtitle,
            this._addBillingAddressPagePhoneInputField,
            this._addBillingAddressPageEmailInputSubtitle,
            this._addBillingAddressPageEmailInputField,
            this._addBillingAddressPageSaveAddressButton
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = {AddBillingAddressPage}