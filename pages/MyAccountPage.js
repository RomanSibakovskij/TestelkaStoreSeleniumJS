"use strict";

const { By, until} = require('selenium-webdriver');
const BasePage = require('./utils/BasePage');
const { Actions } = require('selenium-webdriver');

class MyAccountPage extends BasePage{

    constructor(driver){
        super(driver);

        //my account page elements
        this._myAccountPageTitle = By.xpath("//article[@id='post-8']//h1");
        //aside nav bar elements
        this._asideMyAccountLink = By.xpath("//ul[@class='phoen_nav_tab']/li[1]/a");
        this._asideMyOrdersLink = By.xpath("//ul[@class='phoen_nav_tab']/li[2]/a");
        this._asideEditAccountLink = By.xpath("//ul[@class='phoen_nav_tab']/li[3]/a");
        this._asideMyAddressLink = By.xpath("//ul[@class='phoen_nav_tab']/li[4]/a");
        this._asideLogoutLink = By.xpath("//ul[@class='phoen_nav_tab']/li[5]/a");
        //main
        this._myAccountWelcomeTitle = By.xpath("//div[@class='woocommerce-MyAccount-content']/p[1]");
        this._myAccountLogoutLink = By.xpath("//div[@class='woocommerce-MyAccount-content']/p[1]/a");
        this._myAccountDescription = By.xpath("//div[@class='woocommerce-MyAccount-content']/p[2]");
        this._myAccountOrderHistoryLink = By.xpath("//div[@class='woocommerce-MyAccount-content']/p[2]/a[1]");
        this._myAccountAddressBookLink = By.xpath("//div[@class='woocommerce-MyAccount-content']/p[2]/a[2]");
        this._myAccountEditAccountLink = By.xpath("//div[@class='woocommerce-MyAccount-content']/p[2]/a[3]");
        this._removeAccountLink = By.xpath("//div[@class='woocommerce-MyAccount-content']/p[3]/a");
    }

    //click aside 'MyAccount' link method
    async clickAsideMyAccountLink(){
        const asideMyAccountLink = await this.driver.findElement(this._asideMyAccountLink);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: asideMyAccountLink }).click().perform();
    }

    //click aside 'Edit Account' link method
    async clickAsideEditAccountLink(){
        const asideEditAccountLink = await this.driver.findElement(this._asideEditAccountLink);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: asideEditAccountLink }).click().perform();
    }

    //click aside 'Address Book' link method
    async clickAsideAddressBookLink(){
        const asideAddressBookLink = await this.driver.findElement(this._asideMyAddressLink);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: asideAddressBookLink }).click().perform();
    }

    //click aside 'Logout' link method
    async clickAsideLogoutLink(){
        const asideLogoutLink = await this.driver.findElement(this._asideLogoutLink);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: asideLogoutLink }).click().perform();
    }

    //click 'Address Book' link method
    async clickAddressBookLink(){
        const addressBookLink = await this.driver.findElement(this._myAccountAddressBookLink);
        addressBookLink.click();
    }

    //click 'Edit Account' link method
    async clickEditAccountLink(){
        const editAccountLink = await this.driver.findElement(this._myAccountEditAccountLink);
        editAccountLink.click();
    }

    //click 'Delete Account' link method
    async clickDeleteAccountLink(){
        const deleteAccountLink = await this.driver.findElement(this._removeAccountLink);
        deleteAccountLink.click();
    }

    //accept google alert method
    async acceptGoogleAlert(){
        await new Promise(resolve => setTimeout(resolve, 200));
        const alert = await this.driver.switchTo().alert();
        await alert.accept();
    }

    //my account page title getter
    async getMyAccountPageTitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const myAccountPageTitle = await this.driver.findElement(this._myAccountPageTitle);
        return await myAccountPageTitle.getText();
    }

    //aside navbar link text getters

    async getAsideMyAccountLinkText(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const asideMyAccountLinkText = await this.driver.findElement(this._asideMyAccountLink);
        return await asideMyAccountLinkText.getText();
    }

    async getAsideMyOrderLinkText(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const asideMyOrderLinkText = await this.driver.findElement(this._asideMyOrdersLink);
        return await asideMyOrderLinkText.getText();
    }

    async getAsideEditAccountLinkText(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const asideEditAccountLinkText = await this.driver.findElement(this._asideEditAccountLink);
        return await asideEditAccountLinkText.getText();
    }

    async getAsideMyAddressLinkText(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const asideMyAddressLinkText = await this.driver.findElement(this._asideMyAddressLink);
        return await asideMyAddressLinkText.getText();
    }

    async getAsideLogoutLinkText(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const asideLogoutLinkText = await this.driver.findElement(this._asideLogoutLink);
        return await asideLogoutLinkText.getText();
    }

    //main section text getters

    async getMyAccountWelcomeTitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const myAccountWelcomeTitle = await this.driver.findElement(this._myAccountWelcomeTitle);
        const alteredText = await myAccountWelcomeTitle.getText();
        //trim out username
        return alteredText.replace(/Witaj \S+ \(nie jesteś \S+\? Wyloguj się\)/, 'Witaj (nie jesteś? Wyloguj się)');
    }

    async getMyAccountDescription(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const myAccountDescription = await this.driver.findElement(this._myAccountDescription);
        return await myAccountDescription.getText();
    }

    async getRemoveAccountLinkText(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const removeAccountLinkText = await this.driver.findElement(this._removeAccountLink);
        return await removeAccountLinkText.getText();
    }

    //my account page web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isMyAccountPageWebElementDisplayed(){
        const elementsToCheck = [
            this._myAccountPageTitle,
            this._myAccountWelcomeTitle,
            this._myAccountLogoutLink,
            this._myAccountDescription,
            this._myAccountOrderHistoryLink,
            this._myAccountAddressBookLink,
            this._myAccountEditAccountLink,
            this._removeAccountLink
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

    //aside section web element assert (some pages have them too)
    async isMyAccountAsidePageWebElementDisplayed(){
        const elementsToCheck = [
            this._asideMyAccountLink,
            this._asideMyOrdersLink,
            this._asideEditAccountLink,
            this._asideMyAddressLink,
            this._asideLogoutLink
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = {MyAccountPage}