"use strict";

const { By, until} = require('selenium-webdriver');
const BasePage = require('./utils/BasePage');
const { Logger } = require("./utils/Logger");

class ShopPage extends BasePage{

    constructor(driver){
        super(driver);

        //shop page web elements
        this._shopPageTitle = By.xpath("//div[@id='primary']//h1");
        //list elements
        this._shopPageCategoryImageLinkElements = By.xpath("//ul[@class='products columns-3']/li//a");
        this._shopPageCategoryNameElements = By.xpath("//ul[@class='products columns-3']/li//h2");
    }

    //shop page text getters

    async getShopCategoryName(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const shopCategoryName = await this.driver.findElement(this._shopPageCategoryNameElements);
        return await shopCategoryName.getText();
    }

    //click sailing category link
    async clickSailingCategoryLink() {
        //find and list elements
        const shopCategoryLink = await this.driver.findElements(this._shopPageCategoryImageLinkElements);
        //assert list elements isn't empty
        if (shopCategoryLink.length === 0) {throw new Error("No category links found on shop page.");}

        // Choose set category (sailing)
        const linkToClick = shopCategoryLink[3];
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", linkToClick);
        await linkToClick.click();
    }

    //shop page web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isShopPageWebElementDisplayed(){
        const elementsToCheck = [
            this._shopPageTitle,
            this._shopPageCategoryNameElements,
            this._shopPageCategoryImageLinkElements
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = { ShopPage }