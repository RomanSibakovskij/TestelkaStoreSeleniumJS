"use strict";

const { By, until} = require('selenium-webdriver');
const BasePage = require('./utils/BasePage');
const { Logger } = require("./utils/Logger");
const { Actions } = require('selenium-webdriver');
const { Key } = require('selenium-webdriver');

class GeneralPage extends BasePage{

    constructor(driver) {
        super(driver);

        //homepage web elements
        //header
        this._homePageLogoLink = By.xpath("//div[@class='site-branding']/a");
        this._searchBarInputField = By.xpath("//input[@id='woocommerce-product-search-field-0']");
        this._searchButton = By.xpath("//button[@type='submit']");
        //navbar
        this._mainPageNavLink = By.xpath("//ul[@id='menu-menu']/li[1]/a");
        this._shopNavLink = By.xpath("//ul[@id='menu-menu']/li[2]/a");
        this._orderNavLink = By.xpath("//ul[@id='menu-menu']/li[3]/a");
        this._shoppingCartNavLink = By.xpath("//ul[@id='menu-menu']/li[4]/a");
        this._myAccountNavLink = By.xpath("//ul[@id='menu-menu']/li[5]/a");
        this._wishlistNavLink = By.xpath("//ul[@id='menu-menu']/li[6]/a");
        this._orderPriceDisplay = By.xpath("//ul[@id='site-header-cart']//span[@class='woocommerce-Price-amount amount']");
        this._orderProductCount = By.xpath("//ul[@id='site-header-cart']//span[@class='count']");
        this._shoppingCartButton = By.xpath("//ul[@id='site-header-cart']//a");
        //shopping cart dropdown menu elements
        this._shoppingCartDropdownProductImageLinkElements = By.xpath("//div[@class='widget_shopping_cart_content']/ul/li//img");
        this._shoppingCartDropdownProductQuantityElements = By.xpath("//div[@class='widget_shopping_cart_content']/ul/li//span[@class='quantity']");
        this._shoppingCartDropdownProductUnitPriceElements = By.xpath("//div[@class='widget_shopping_cart_content']/ul/li//span[@class='woocommerce-Price-amount amount']");
        this._shoppingCartDropdownProductQuotePrice = By.xpath("//div[@class='widget_shopping_cart_content']/p[@class='woocommerce-mini-cart__total total']");
        this._shoppingCartDropdownProductViewCartButton = By.xpath("//div[@class='widget_shopping_cart_content']//a[@class='button wc-forward']");
        this._shoppingCartDropdownProductCheckoutButton = By.xpath("//div[@class='widget_shopping_cart_content']//a[@class='button checkout wc-forward']");
        this._shoppingCartDropdownProductRemoveButton = By.xpath("//div[@class='widget_shopping_cart_content']//a[@class='remove remove_from_cart_button']");
        //page breadcrumb
        this._pageBreadcrumb = By.xpath("//nav[@class='woocommerce-breadcrumb']/a");
        //aside content
        this._asideProductCategoryTitle = By.xpath("//div[@id='woocommerce_product_categories-3']/span");
        this._asideWindsurfingCategoryLink = By.xpath("//div[@id='woocommerce_product_categories-3']/ul/li[1]/a");
        this._asideClimbingCategoryLink = By.xpath("//div[@id='woocommerce_product_categories-3']/ul/li[2]/a");
        this._asideYogaCategoryLink = By.xpath("//div[@id='woocommerce_product_categories-3']/ul/li[3]/a");
        this._asideSailingCategoryLink = By.xpath("//div[@id='woocommerce_product_categories-3']/ul/li[4]/a");
        //footer
        this._footerDocsLink = By.xpath("//a[@id='doc']");
        this._copyrightText = By.xpath("//div[@class='site-info']");
        this._footerPrivacyPolicyLink = By.xpath("//a[@class='privacy-policy-link']");
        this._footerWooCommerceLink = By.xpath("//a[@rel='noreferrer nofollow']");
    }

    //click 'My Account' nav link method
    async clickMyAccountNavLink() {
        const myAccountNavLink = await this.driver.findElement(this._myAccountNavLink);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: myAccountNavLink }).click().perform();
    }

    //click 'Main Page' nav link method
    async clickMainPageNavLink() {
        const mainPageNavLink = await this.driver.findElement(this._mainPageNavLink);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: mainPageNavLink }).click().perform();
    }

    //click 'Shop' nav link method
    async clickShopNavLink() {
        const shopNavLink = await this.driver.findElement(this._shopNavLink);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: shopNavLink }).click().perform();
    }

    //hover over shopping cart button method
    async hoverOverShoppingCartButton() {
        const shoppingCartButton = await this.driver.findElement(this._shoppingCartButton);
        const actions = this.driver.actions({async: true});

        //hover action
        await actions
            .move({origin: shoppingCartButton})
            .perform();

        await new Promise(resolve => setTimeout(resolve, 500));
    }

    //click 'View Cart' button method
    async clickViewCartButton(){
        const viewCartButton = await this.driver.findElement(this._shoppingCartDropdownProductViewCartButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: viewCartButton }).click().perform();
    }

    //click remove product from shopping cart dropdown button method
    async clickRemoveProductFromDropdownCartButton() {
        //find and list elements
        const removeFromCartButtons = await this.driver.findElements(this._shoppingCartDropdownProductRemoveButton);
        //assert list elements isn't empty
        //if (removeFromCartButtons.length === 0) {throw new Error("No 'Product Remove from Cart' buttons found in the shopping cart page.");}

        //choose set remove from shopping cart button (default -> first)
        const buttonToClick = removeFromCartButtons[0];
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", buttonToClick);
        await buttonToClick.click();
    }

    //click aside 'Yoga' category link method
    async clickAsideYogaCategoryLink() {
        const asideYogaCategoryLink = await this.driver.findElement(this._asideYogaCategoryLink);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: asideYogaCategoryLink }).click().perform();
    }

    async inputProductSearchGuestQuery() {
        const searchBar = await this.driver.findElement(this._searchBarInputField);

        const searchQuery = "Windsurfing w Karpathos";

        await searchBar.sendKeys(searchQuery);
        await searchBar.sendKeys(Key.ENTER);
        await new Promise(resolve => setTimeout(resolve, 200));
    }
    //input product search query method (as a registered user -> "Wspinaczka Island Peak")
    async inputProductSearchRegUserQuery(){
        const searchBar = await this.driver.findElement(this._searchBarInputField);
        const searchQuery = "Wspinaczka Island Peak";

        await searchBar.sendKeys(searchQuery);
        await searchBar.sendKeys(Key.ENTER);
        await new Promise(resolve => setTimeout(resolve, 200));
    }

    //shopping cart dropdown menu data getters
    async getShoppingCartDropdownProductName() {
        const elements = await this.driver.findElements(this._shoppingCartDropdownProductImageLinkElements);

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

    async getShoppingCartDropdownProductUnitPrice() {
        const elements = await this.driver.findElements(this._shoppingCartDropdownProductUnitPriceElements);

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

    async getShoppingCartDropdownProductQuotePrice() {
        await new Promise(resolve => setTimeout(resolve, 100));
        const shoppingCartDropdownQuotePrice = await this.driver.findElement(this._shoppingCartDropdownProductQuotePrice);
        return await shoppingCartDropdownQuotePrice.getText();
    }

    //navbar link text getters
    async getMainPageNavLinkText(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const mainPageNavLinkText = await this.driver.findElement(this._mainPageNavLink);
        return await mainPageNavLinkText.getText();
    }
    async getShopNavLinkText(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const shopNavLinkText = await this.driver.findElement(this._shopNavLink);
        return await shopNavLinkText.getText();
    }
    async getOrderNavLinkText(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const orderNavLinkText = await this.driver.findElement(this._orderNavLink);
        return await orderNavLinkText.getText();
    }
    async getShoppingCartNavLinkText(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const shoppingCartNavLinkText = await this.driver.findElement(this._shoppingCartNavLink);
        return await shoppingCartNavLinkText.getText();
    }
    async getMyAccountNavLinkText(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const myAccountNavLinkText = await this.driver.findElement(this._myAccountNavLink);
        return await myAccountNavLinkText.getText();
    }
    async getWishlistNavLinkText(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const wishlistNavLinkText = await this.driver.findElement(this._wishlistNavLink);
        return await wishlistNavLinkText.getText();
    }

    //order price getter
    async getOrderPrice(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const orderPrice = await this.driver.findElement(this._orderPriceDisplay);
        return await orderPrice.getText();
    }
    //order product count getter
    async getOrderProductCount(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const orderProductCount = await this.driver.findElement(this._orderProductCount);
        return await orderProductCount.getText();
    }

    //aside links text getters

    async getAsideProductCategoryTitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const asideProductCatTitle = await this.driver.findElement(this._asideProductCategoryTitle);
        return await asideProductCatTitle.getText();
    }

    async getAsideWindsurfingCategoryLinkText(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const asideWindCatLinkText = await this.driver.findElement(this._asideWindsurfingCategoryLink);
        return await asideWindCatLinkText.getText();
    }

    async getAsideClimbingCategoryLinkText(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const asideClimbCatLinkText = await this.driver.findElement(this._asideClimbingCategoryLink);
        return await asideClimbCatLinkText.getText();
    }

    async getAsideYogaCategoryLinkText(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const asideYogaCatLinkText = await this.driver.findElement(this._asideYogaCategoryLink);
        return await asideYogaCatLinkText.getText();
    }

    async getAsideSailingCategoryLinkText(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const asideSailCatLinkText = await this.driver.findElement(this._asideSailingCategoryLink);
        return await asideSailCatLinkText.getText();
    }


    //woo commerce copyright text getter
    async getCopyrightText(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const copyrightText = await this.driver.findElement(this._copyrightText);
        const text = await copyrightText.getText();
        //leave only '© FakeStore 2025' part of the string
        return text.split('© FakeStore 2025')[0] + '© FakeStore 2025';
    }

    //general wait for element load method
    async waitForElementLoad() {
        const elementLoadTime = 2100;
        return new Promise(resolve => setTimeout(resolve, elementLoadTime));
    }

    //general page web element assert method (all pages have those elements)
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isGeneralPageWebElementDisplayed(){
        const elementsToCheck = [
            this._homePageLogoLink,
            this._searchBarInputField,
            this._searchButton,
            this._shoppingCartButton,
            this._mainPageNavLink,
            this._shopNavLink,
            this._orderNavLink,
            this._shoppingCartNavLink,
            this._myAccountNavLink,
            this._wishlistNavLink,
            this._orderPriceDisplay,
            this._orderProductCount,
            this._footerDocsLink,
            this._copyrightText,
            this._footerPrivacyPolicyLink,
            this._footerWooCommerceLink
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

    async isAdditionalGeneralPageWebElementDisplayed(){
        const elementsToCheck = [
            this._pageBreadcrumb,
            this._asideProductCategoryTitle,
            this._asideWindsurfingCategoryLink,
            this._asideClimbingCategoryLink,
            this._asideYogaCategoryLink,
            this._asideSailingCategoryLink
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

    async isShoppingCartDropdownMenuWebElementDisplayed(){
        const elementsToCheck = [
            //this._shoppingCartDropdownProductImageLinkElements,
            //this._shoppingCartDropdownProductQuantityElements,
            this._shoppingCartDropdownProductUnitPriceElements,
            this._shoppingCartDropdownProductQuotePrice,
            this._shoppingCartDropdownProductViewCartButton,
            this._shoppingCartDropdownProductCheckoutButton,
            this._shoppingCartDropdownProductRemoveButton
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = {GeneralPage};