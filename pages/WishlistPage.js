"use strict";

const { By, until} = require('selenium-webdriver');
const BasePage = require('./utils/BasePage');
const { Logger } = require("./utils/Logger");

class WishlistPage extends BasePage{

    constructor(driver) {
        super(driver);

        //wishlist page web elements
        this._wishlistPageTitle = By.xpath("//div[@id='primary']//h1");
        this._wishlistPageSubtitle = By.xpath("//div[@id='primary']//h2");
        //list elements
        this._wishlistPageRemoveButtonElements = By.xpath("//table[@class='shop_table cart wishlist_table wishlist_view traditional responsive   ']/tbody/tr/td[1]//a");
        this._wishlistPageImageElements = By.xpath("//table[@class='shop_table cart wishlist_table wishlist_view traditional responsive   ']/tbody/tr/td[2]//img");
        this._wishlistPageProductNameLinkElements = By.xpath("//table[@class='shop_table cart wishlist_table wishlist_view traditional responsive   ']/tbody/tr/td[3]//a");
        this._wishlistPageProductUnitPriceElements = By.xpath("//table[@class='shop_table cart wishlist_table wishlist_view traditional responsive   ']/tbody/tr/td[4]/span");
        this._wishlistPageProductStockElements = By.xpath("//table[@class='shop_table cart wishlist_table wishlist_view traditional responsive   ']/tbody/tr/td[5]/span");
        this._wishlistPageProductAddToCartLinkElements = By.css("td.product-add-to-cart > a");
        this._wishlistPageAlertMessage = By.xpath("//div[@role='alert']");
    }

    //click add to cart from wishlist link method
    async clickAddToCartLink() {
        //find and list elements
        const wishlistAddToCartLink = await this.driver.findElements(this._wishlistPageProductAddToCartLinkElements);
        //assert list elements isn't empty
        if (wishlistAddToCartLink.length === 0) {throw new Error("No add to cart links found on wishlist page.");}

        //choose 'Add to cart' link
        const addToCartLink = wishlistAddToCartLink[0];
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", addToCartLink);
        await addToCartLink.click();
    }

    //click remove from wishlist button method
    async clickRemoveFromWishlistButton() {
        //find and list elements
        const removeFromWishlistButton = await this.driver.findElements(this._wishlistPageRemoveButtonElements);
        //assert list elements isn't empty
        if (removeFromWishlistButton.length === 0) {throw new Error("No remove fro wishlist buttons found on wishlist page.");}

        //choose 'Remove from wishlist' button
        const removeFromWishlistBtn = removeFromWishlistButton[0];
        //await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", removeFromWishlistButton);
        await removeFromWishlistBtn.click();
    }

    //wishlist page product data getters

    async getWishlistProductName() {
        const elements = await this.driver.findElements(this._wishlistPageProductNameLinkElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get product name:', error.message);
                    return '';
                }
            })
        );
    }

    async getWishlistProductUnitPrice() {
        const elements = await this.driver.findElements(this._wishlistPageProductUnitPriceElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get product unit price:', error.message);
                    return '';
                }
            })
        );
    }

    async getWishlistProductStock() {
        const elements = await this.driver.findElements(this._wishlistPageProductStockElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get product stock:', error.message);
                    return '';
                }
            })
        );
    }

    //wishlist page text getters

    async getWishlistPageTitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const wishlistPageTitle = await this.driver.findElement(this._wishlistPageTitle);
        return await wishlistPageTitle.getText();
    }
    async getWishlistPageSubtitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const wishlistPageSubtitle = await this.driver.findElement(this._wishlistPageSubtitle);
        return await wishlistPageSubtitle.getText();
    }

    //wishlist page message getter
    async getWishlistAlertMessage(){
        await new Promise(resolve => setTimeout(resolve, 900));
        const wishlistAlertMessage = await this.driver.findElement(this._wishlistPageAlertMessage);
        return await wishlistAlertMessage.getText();
    }

    //wishlist page web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isWishlistPageWebElementDisplayed(){
        const elementsToCheck = [
            this._wishlistPageTitle,
            this._wishlistPageRemoveButtonElements,
            this._wishlistPageImageElements,
            this._wishlistPageProductNameLinkElements,
            this._wishlistPageProductUnitPriceElements,
            this._wishlistPageProductStockElements,
            this._wishlistPageProductAddToCartLinkElements
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = { WishlistPage }