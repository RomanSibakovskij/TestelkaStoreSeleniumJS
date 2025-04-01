"use strict";

const { By, until} = require('selenium-webdriver');
const BasePage = require('./utils/BasePage');
const Logger = require("./utils/Logger");
const { Actions } = require('selenium-webdriver');
const {warn} = require("./utils/Logger");

class AddressBookPage extends BasePage{

    constructor(driver){
        super(driver);

        //address book page web elements
        //main
        this._addressBookPageTitle = By.xpath("//h1");
        this._addressBookPageSubtitle = By.xpath("//div[@class='woocommerce-MyAccount-content']/p");
        //billing address section
        this._addressBookBillingAddressSectionTitle = By.xpath("//div[@class='u-column1 col-1 woocommerce-Address']//h2");
        this._addressBookAddBillingAddressButton = By.xpath("//div[@class='u-column1 col-1 woocommerce-Address']//a");
        //list
        this._addressBookBillingAddressElements = By.xpath("//div[@class='u-column1 col-1 woocommerce-Address']//address");
        //shipping address section
        this._addressBookShippingAddressSectionTitle = By.xpath("//div[@class='u-column2 col-2 woocommerce-Address']//h2");
        this._addressBookAddShippingAddressButton = By.xpath("//div[@class='u-column2 col-2 woocommerce-Address']//a");
        //list
        this._addressBookShippingAddressElements = By.xpath("//div[@class='u-column2 col-2 woocommerce-Address']//address");
        //alert message
        this._addressBookAlertMessage = By.xpath("//div[@role='alert']");
    }

    //address book text element getters
    async getAddressBookPageTitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const addressBookTitle = await this.driver.findElement(this._addressBookPageTitle);
        return await addressBookTitle.getText();
    }
    async getAddressBookPageSubtitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const addressBookSubtitle = await this.driver.findElement(this._addressBookPageSubtitle);
        return await addressBookSubtitle.getText();
    }

    async getAddressBookBillingAddressTitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const addressBookBillingAddressTitle = await this.driver.findElement(this._addressBookBillingAddressSectionTitle);
        return await addressBookBillingAddressTitle.getText();
    }
    async getAddressBookShippingAddressTitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const addressBookShippingAddressTitle = await this.driver.findElement(this._addressBookShippingAddressSectionTitle);
        return await addressBookShippingAddressTitle.getText();
    }

    //list elements
    async getAddressBookBillingAddress() {
        const elements = await this.driver.findElements(this._addressBookBillingAddressElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    warn('Failed to get product name:', error.message);
                    return '';
                }
            })
        );
    }

    async getAddressBookShippingAddress() {
        const elements = await this.driver.findElements(this._addressBookShippingAddressElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    warn('Failed to get product name:', error.message);
                    return '';
                }
            })
        );
    }

    async getAddressBookAlertMessage(){
        await new Promise(resolve => setTimeout(resolve, 200));
        const addressBookAlertMessage = await this.driver.findElement(this._addressBookAlertMessage);
        return await addressBookAlertMessage.getText();
    }

    //click 'Add shipping address' button method
    async clickAddShippingAddressButton(){
        const addShippingAddressButton = await this.driver.findElement(this._addressBookAddShippingAddressButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: addShippingAddressButton }).click().perform();
    }

    //click 'Add billing address' button method
    async clickAddBillingAddressButton(){
        const addBillingAddressButton = await this.driver.findElement(this._addressBookAddBillingAddressButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: addBillingAddressButton }).click().perform();
    }

    //address book page web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isAddressBookPageWebElementDisplayed(){
        const elementsToCheck = [
            this._addressBookPageTitle,
            this._addressBookPageSubtitle,
            this._addressBookBillingAddressSectionTitle,
            this._addressBookAddBillingAddressButton,
            this._addressBookShippingAddressSectionTitle,
            this._addressBookAddShippingAddressButton
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = {AddressBookPage}