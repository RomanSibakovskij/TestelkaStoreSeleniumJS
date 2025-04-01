"use strict";

const { By, until, Key} = require('selenium-webdriver');
const BasePage = require('./utils/BasePage');
const { Logger } = require("./utils/Logger");

class ShoppingCartPage extends BasePage{

    constructor(driver) {
        super(driver);

        //shopping cart page web elements
        this._shoppingCartPageTitle = By.xpath("//div[@id='content']//h1");
        //list elements
        this._shoppingCartTableProductRemoveButtonElements = By.xpath("//table[@class='shop_table shop_table_responsive cart woocommerce-cart-form__contents']/tbody/tr/td[1]/a");
        this._shoppingCartTableProductImageElements = By.xpath("//table[@class='shop_table shop_table_responsive cart woocommerce-cart-form__contents']/tbody/tr/td[2]//img");
        this._shoppingCartTableProductNameLinkElements = By.xpath("//table[@class='shop_table shop_table_responsive cart woocommerce-cart-form__contents']/tbody/tr/td[3]/a");
        this._shoppingCartTableProductUnitPriceElements = By.xpath("//table[@class='shop_table shop_table_responsive cart woocommerce-cart-form__contents']/tbody/tr/td[4]");
        this._shoppingCartTableProductQtyInputFieldElements = By.xpath("//table[@class='shop_table shop_table_responsive cart woocommerce-cart-form__contents']/tbody/tr/td[5]//input");
        this._shoppingCartTableProductQuotePriceElements = By.xpath("//table[@class='shop_table shop_table_responsive cart woocommerce-cart-form__contents']/tbody/tr/td[6]");
        //singular elements
        this._shoppingCartPageCodeCouponInputField = By.xpath("//table[@class='shop_table shop_table_responsive cart woocommerce-cart-form__contents']/tbody//input[@id='coupon_code']");
        this._shoppingCartPageApplyCodeButton = By.xpath("//table[@class='shop_table shop_table_responsive cart woocommerce-cart-form__contents']/tbody//button[@name='apply_coupon']");
        this._shoppingCartPageUpdateCartButton = By.xpath("//table[@class='shop_table shop_table_responsive cart woocommerce-cart-form__contents']/tbody//button[@name='update_cart']");
        this._shoppingCartPageOrderSummarySubtitle = By.xpath("//div[@class='cart_totals ']/h2");
        this._shoppingCartPageOrderSummaryQuoteSubtitle = By.xpath("//div[@class='cart_totals ']//tbody/tr[1]/th");
        this._shoppingCartPageOrderSummaryQuotePrice = By.xpath("//div[@class='cart_totals ']//tbody/tr[1]/td");
        this._shoppingCartPageOrderSummaryTotalSubtitle = By.xpath("//div[@class='cart_totals ']//tbody/tr[2]/th");
        this._shoppingCartPageOrderSummaryTotalPrice = By.xpath("//div[@class='cart_totals ']//tbody/tr[2]/td");
        this._shoppingCartPageProceedToCheckoutButton = By.xpath("//a[@class='checkout-button button alt wc-forward']");
        this._shoppingCartPageUpdateSuccessMessage = By.xpath("//div[@role='alert']");
        this._shoppingCartPageProductRemoveSuccessMessage = By.xpath("//div[@role='alert']");
        this._shoppingCartEmptyMessage = By.xpath("//div[@class='cart-empty woocommerce-info']");
    }

    //input quantity into product quantity input field method
    async inputProductQtyIntoQtyInputField(searchBarIndex, productQuantity) {
        const searchBars = await this.driver.findElements(this._shoppingCartTableProductQtyInputFieldElements);
        const selectedSearchBar = searchBars[searchBarIndex];
        await selectedSearchBar.clear();
        await selectedSearchBar.sendKeys(productQuantity);
    }

    //click 'Update cart' button method
    async clickUpdateCartButton(){
        const updateCartButton = await this.driver.findElement(this._shoppingCartPageUpdateCartButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: updateCartButton }).click().perform();
    }

    //shopping cart page table product data getters

    async getShoppingCartPageTableProductName() {
        const elements = await this.driver.findElements(this._shoppingCartTableProductNameLinkElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get shopping cart table product name(s):', error.message);
                    return '';
                }
            })
        );
    }

    async getShoppingCartPageTableProductUnitPrice() {
        const elements = await this.driver.findElements(this._shoppingCartTableProductUnitPriceElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get shopping cart table product unit price(s):', error.message);
                    return '';
                }
            })
        );
    }

    async getShoppingCartPageTableProductQty() {
        const elements = await this.driver.findElements(this._shoppingCartTableProductQtyInputFieldElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getDomAttribute("value");
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get shopping cart table product quantity(ies):', error.message);
                    return '';
                }
            })
        );
    }

    async getShoppingCartPageTableProductQuotePrice() {
        const elements = await this.driver.findElements(this._shoppingCartTableProductQuotePriceElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get shopping cart table product quote price(s):', error.message);
                    return '';
                }
            })
        );
    }

    async getShoppingCartPageOrderQuotePrice(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const shoppingCartOrderQuotePrice = await this.driver.findElement(this._shoppingCartPageOrderSummaryQuotePrice);
        return await shoppingCartOrderQuotePrice.getText();
    }
    async getShoppingCartPageOrderTotalPrice(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const shoppingCartOrderTotalPrice = await this.driver.findElement(this._shoppingCartPageOrderSummaryTotalPrice);
        return await shoppingCartOrderTotalPrice.getText();
    }

    //shopping cart page text element getters
    async getShoppingCartPageTitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const shoppingCartPageTitle = await this.driver.findElement(this._shoppingCartPageTitle);
        return await shoppingCartPageTitle.getText();
    }
    async getShoppingCartOrderSummarySubtitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const orderSummarySubtitle = await this.driver.findElement(this._shoppingCartPageOrderSummarySubtitle);
        return await orderSummarySubtitle.getText();
    }
    async getShoppingCartOrderSummaryQuoteSubtitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const orderSummaryQuoteSubtitle = await this.driver.findElement(this._shoppingCartPageOrderSummaryQuoteSubtitle);
        return await orderSummaryQuoteSubtitle.getText();
    }
    async getShoppingCartOrderSummaryTotalSubtitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const orderSummaryTotalSubtitle = await this.driver.findElement(this._shoppingCartPageOrderSummaryTotalSubtitle);
        return await orderSummaryTotalSubtitle.getText();
    }

    //click 'Proceed to checkout' button method
    async clickProceedToCheckoutButton(){
        const proceedToCheckoutButton = await this.driver.findElement(this._shoppingCartPageProceedToCheckoutButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: proceedToCheckoutButton }).click().perform();
    }

    //shopping cart update success message getter
    async getShoppingCartUpdateSuccessMessage(){
        await new Promise(resolve => setTimeout(resolve, 800));
        const shoppingCartUpdateSuccessText = await this.driver.findElement(this._shoppingCartPageUpdateSuccessMessage);
        return await shoppingCartUpdateSuccessText.getText();
    }

    //shopping cart product removal success message getter
    async getShoppingCartProductRemoveSuccessMessage(){
        await new Promise(resolve => setTimeout(resolve, 800));
        const shoppingCartRemoveSuccessText = await this.driver.findElement(this._shoppingCartPageProductRemoveSuccessMessage);
        const fullText = await shoppingCartRemoveSuccessText.getText();
        const colonIndex = fullText.indexOf(':');
        return fullText.substring(0, colonIndex);
    }

    //shopping cart empty message getter
    async getShoppingCartEmptyMessage(){
        await new Promise(resolve => setTimeout(resolve, 800));
        const shoppingCartEmptyText = await this.driver.findElement(this._shoppingCartEmptyMessage);
        return await shoppingCartEmptyText.getText();
    }

    //click remove product from shopping cart button method
    async clickRemoveProductFromCartButton() {
        //find and list elements
        const removeFromCartButtons = await this.driver.findElements(this._shoppingCartTableProductRemoveButtonElements);
        //assert list elements isn't empty
        if (removeFromCartButtons.length === 0) {throw new Error("No 'Product Remove from Cart' buttons found in the shopping cart page.");}

        //choose set remove from shopping cart button (default -> first)
        const buttonToClick = removeFromCartButtons[0];
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", buttonToClick);
        await buttonToClick.click();
    }

    //shopping cart page web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isShoppingCartPageWebElementDisplayed(){
        const elementsToCheck = [
            this._shoppingCartPageTitle,
            this._shoppingCartTableProductRemoveButtonElements,
            this._shoppingCartTableProductImageElements,
            this._shoppingCartTableProductNameLinkElements,
            this._shoppingCartTableProductUnitPriceElements,
            this._shoppingCartTableProductQtyInputFieldElements,
            this._shoppingCartTableProductQuotePriceElements,
            this._shoppingCartPageCodeCouponInputField,
            this._shoppingCartPageApplyCodeButton,
            this._shoppingCartPageUpdateCartButton,
            this._shoppingCartPageOrderSummarySubtitle,
            this._shoppingCartPageOrderSummaryQuoteSubtitle,
            this._shoppingCartPageOrderSummaryQuotePrice,
            this._shoppingCartPageOrderSummaryTotalSubtitle,
            this._shoppingCartPageOrderSummaryTotalPrice,
            this._shoppingCartPageProceedToCheckoutButton
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = { ShoppingCartPage }