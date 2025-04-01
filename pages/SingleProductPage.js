"use strict";

const { By, until} = require('selenium-webdriver');
const BasePage = require('./utils/BasePage');
const { Logger } = require("./utils/Logger");

class SingleProductPage extends BasePage{

    constructor(driver){
        super(driver);

        //single product page web elements
        this._singleProductName = By.xpath("//div[@class='summary entry-summary']/h1");
        this._singleProductPageMainImage = By.xpath("//div[@class='woocommerce-product-gallery__wrapper']//a/img");
        this._singleProductPageZoomMainImageButton = By.xpath("//div[@class='woocommerce-product-gallery woocommerce-product-gallery--with-images woocommerce-product-gallery--columns-4 images']/a");
        this._singleProductPageUnitPrice = By.xpath("//div[@class='summary entry-summary']/p[@class='price']");
        this._singleProductPageProductStockCount = By.xpath("//div[@class='summary entry-summary']/p[@class='stock in-stock']");
        this._singleProductPageQtyInputField = By.xpath("//input[@name='quantity']");
        this._singleProductPageAddToCartButton = By.xpath("//button[@name='add-to-cart']");
        this._singleProductPageAddToWishlistButton = By.xpath("//a[@class='add_to_wishlist single_add_to_wishlist']");
        this._singleProductPageViewWishlistLink = By.xpath("//div[@class='yith-wcwl-wishlistaddedbrowse']/a");
        this._singleProductPageCategoryLink = By.xpath("//div[@class='product_meta']//a");
        this._singleProductPageDescriptionLink = By.xpath("//ul[@class='tabs wc-tabs']/li[1]/a");
        this._singleProductPageDescriptionTitle = By.xpath("//div[@id='tab-description']/h2");
        this._singleProductPageDescription = By.xpath("//div[@id='tab-description']/p");
        this._singleProductPageAdditionalInfoLink = By.xpath("//ul[@class='tabs wc-tabs']/li[2]/a");
        this._singleProductPageAdditionalInfoTitle = By.xpath("//div[@id='tab-additional_information']/h2");
        this._singleProductPageAdditionalInfoData = By.xpath("//table[@class='woocommerce-product-attributes shop_attributes']//td");
        this._singleProductPageReviewsLink = By.xpath("//ul[@class='tabs wc-tabs']/li[3]/a");
        this._singleProductPageRelatedProductsTitle = By.xpath("//section[@class='related products']/h2");
        //list elements
        this._singleProductPageRelatedProductImageLinkElements = By.xpath("//section[@class='related products']//img");
        this._singleProductPageRelatedProductNameElements = By.xpath("//section[@class='related products']//h2[@class='woocommerce-loop-product__title']");
        this._singleProductPageRelatedProductUnitPriceElements = By.xpath("//section[@class='related products']//span[@class='price']");
        this._singleProductPageRelatedProductAddToCartButtonElements = By.xpath("//section[@class='related products']//a[@class='button product_type_simple add_to_cart_button ajax_add_to_cart']");
        this._singleProductPageAlertMessage = By.xpath("//div[@role='alert']");
        this._singleProductPageViewCartLink = By.xpath("//div[@role='alert']/a[@class='button wc-forward']");
    }

    //click 'Additional Info' link method
    async clickAdditionalInfoLink() {
        const additionalInfoLink = await this.driver.findElement(this._singleProductPageAdditionalInfoLink);
        await additionalInfoLink.click();
    }

    //click 'Add to wishlist' button method
    async clickAddToWishlistButton() {
        const addToWishlistButton = await this.driver.findElement(this._singleProductPageAddToWishlistButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: addToWishlistButton }).click().perform();
    }

    //click 'View wishlist' link method
    async clickViewWishlistLink() {
        const viewWishlistLink = await this.driver.findElement(this._singleProductPageViewWishlistLink);
        viewWishlistLink.click();
    }

    //click 'Add to cart' button method
    async clickAddToCartButton() {
        const addToCartButton = await this.driver.findElement(this._singleProductPageAddToCartButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: addToCartButton }).click().perform();
    }

    //click 'View cart' link method (displayed after successful product addition to cart)
    async clickViewCartLink() {
        const viewCartLink = await this.driver.findElement(this._singleProductPageViewCartLink);
        viewCartLink.click();
    }

    //single product page text getters

    async getSingleProductName(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const singleProductName = await this.driver.findElement(this._singleProductName);
        return await singleProductName.getText();
    }
    async getSingleProductUnitPrice(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const singleProductUnitPrice = await this.driver.findElement(this._singleProductPageUnitPrice);
        return await singleProductUnitPrice.getText();
    }
    async getSingleProductCount(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const singleProductCount = await this.driver.findElement(this._singleProductPageProductStockCount);
        return await singleProductCount.getText();
    }
    async getSingleProductDescriptionLinkText(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const singleProductDescriptionLink = await this.driver.findElement(this._singleProductPageDescriptionLink);
        return await singleProductDescriptionLink.getText();
    }
    async getSingleProductDescriptionTitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const singleProductDescriptionTitle = await this.driver.findElement(this._singleProductPageDescriptionTitle);
        return await singleProductDescriptionTitle.getText();
    }
    async getSingleProductDescription(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const singleProductDescription = await this.driver.findElement(this._singleProductPageDescription);
        return await singleProductDescription.getText();
    }
    async getSingleProductAdditionalInfoLinkText(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const singleProductAdditionalInfoLink = await this.driver.findElement(this._singleProductPageAdditionalInfoLink);
        return await singleProductAdditionalInfoLink.getText();
    }
    async getSingleProductAdditionalInfoTitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const singleProductAdditionalInfoTitle = await this.driver.findElement(this._singleProductPageAdditionalInfoTitle);
        return await singleProductAdditionalInfoTitle.getText();
    }
    async getSingleProductAdditionalInfoData(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const singleProductAdditionalInfoData = await this.driver.findElement(this._singleProductPageAdditionalInfoData);
        return await singleProductAdditionalInfoData.getText();
    }
    async getSingleProductReviewsLinkText() {
        await new Promise(resolve => setTimeout(resolve, 100));
        const singleProductReviewsLink = await this.driver.findElement(this._singleProductPageReviewsLink);

        const fullText = await singleProductReviewsLink.getText();
        const textToTrim = fullText.replace(/\s*\(\d+\)$/, '');

        return textToTrim.trim();
    }

    //single product page related product element getter

    async getSingleProductRelatedProductName() {
        const elements = await this.driver.findElements(this._singleProductPageRelatedProductNameElements);

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

    async getSingleProductRelatedProductUnitPrice() {
        const elements = await this.driver.findElements(this._singleProductPageRelatedProductUnitPriceElements);

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

    //single product page alert message getter
    async getSingleProductAlertMessage(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const singleProductAlertMessage = await this.driver.findElement(this._singleProductPageAlertMessage);
        const fullText = await singleProductAlertMessage.getText();
        const dotPosition = fullText.indexOf('.');
        return fullText.substring(0, dotPosition + 1);
    }

    //input product quantity
    async inputProductSearchQuery(){
        const singleProductQtyInputField = await this.driver.findElement(this._singleProductPageQtyInputField);
        await singleProductQtyInputField.clear();
        await singleProductQtyInputField.sendKeys("3");
    }

    //single product page web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isSingleProductPageWebElementDisplayed(){
        const elementsToCheck = [
            this._singleProductName,
            this._singleProductPageMainImage,
            this._singleProductPageZoomMainImageButton,
            this._singleProductPageUnitPrice,
            this._singleProductPageProductStockCount,
            this._singleProductPageQtyInputField,
            this._singleProductPageAddToCartButton,
            this._singleProductPageAddToWishlistButton,
            this._singleProductPageCategoryLink,
            this._singleProductPageDescriptionLink,
            this._singleProductPageDescriptionTitle,
            this._singleProductPageDescription,
            this._singleProductPageAdditionalInfoLink,
            this._singleProductPageReviewsLink,
            this._singleProductPageRelatedProductsTitle,
            this._singleProductPageRelatedProductImageLinkElements,
            this._singleProductPageRelatedProductNameElements,
            this._singleProductPageRelatedProductUnitPriceElements,
            this._singleProductPageRelatedProductAddToCartButtonElements
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = { SingleProductPage }