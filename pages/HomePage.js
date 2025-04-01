"use strict";

const { By, until} = require('selenium-webdriver');
const BasePage = require('./utils/BasePage');
const { Logger } = require("./utils/Logger");

class HomePage extends BasePage {

    constructor(driver) {
        super(driver);

        //homepage web elements
        //main
        //choose travel section
        this._chooseTravelSectionTitle = By.xpath("//div[@id='post-12']//h1");
        this._chooseTravelSectionSubtitle = By.xpath("//div[@id='post-12']//p");
        this._chooseTravelSectionCarouselImg = By.xpath("//ul[@class='slides']/li[2]//img");
        this._chooseTravelSectionCarouselLeftButton = By.xpath("//ul[@class='flex-direction-nav']/li[1]/a");
        this._chooseTravelSectionCarouselRightButton = By.xpath("//ul[@class='flex-direction-nav']/li[2]/a");
        //travel category section
        this._travelCategorySectionTitle = By.xpath("//section[@class='storefront-product-section storefront-product-categories']/h2");
        this._windSurfingImage = By.xpath("//ul[@class='products columns-3']/li[1]//img");
        this._windSurfingCategoryLink = By.xpath("//ul[@class='products columns-3']/li[1]/a");
        this._climbingImage = By.xpath("//ul[@class='products columns-3']/li[2]//img");
        this._climbingCategoryLink = By.xpath("//ul[@class='products columns-3']/li[2]/a");
        this._yogaImage = By.xpath("//ul[@class='products columns-3']/li[3]//img");
        this._yogaCategoryLink = By.xpath("//ul[@class='products columns-3']/li[3]/a");
        //news section
        this._newsSectionTitle = By.xpath("//section[@class='storefront-product-section storefront-recent-products']/h2");
        //list elements
        this._newsSectionProductImageElements = By.xpath("//section[@class='storefront-product-section storefront-recent-products']//a[@class='woocommerce-LoopProduct-link woocommerce-loop-product__link']");
        this._newsSectionProductNameElements = By.xpath("//section[@class='storefront-product-section storefront-recent-products']//h2[@class='woocommerce-loop-product__title']");
        this._newsSectionProductUnitPriceElements = By.xpath("//section[@class='storefront-product-section storefront-recent-products']//span[@class='price']");
        this._newsSectionProductAddToCartButtonElements = By.xpath("//section[@class='storefront-product-section storefront-recent-products']//a[@class='button product_type_simple add_to_cart_button ajax_add_to_cart']");
        //popular section
        this._popularSectionTitle = By.xpath("//section[@class='storefront-product-section storefront-popular-products']/h2");
        //list elements
        this._popularSectionProductImageElements = By.xpath("//section[@class='storefront-product-section storefront-popular-products']//a[@class='woocommerce-LoopProduct-link woocommerce-loop-product__link']");
        this._popularSectionProductNameElements = By.xpath("//section[@class='storefront-product-section storefront-popular-products']//h2[@class='woocommerce-loop-product__title']");
        this._popularSectionProductUnitPriceElements = By.xpath("//section[@class='storefront-product-section storefront-popular-products']//span[@class='price']");
        this._popularSectionProductAddToCartButtonElements = By.xpath("//section[@class='storefront-product-section storefront-popular-products']//a[@class='button product_type_simple add_to_cart_button ajax_add_to_cart']");
        //in promotion section
        this._inPromotionSectionTitle = By.xpath("//section[@class='storefront-product-section storefront-on-sale-products']/h2");
        //list elements
        this._inPromotionSectionProductImageElements = By.xpath("//section[@class='storefront-product-section storefront-on-sale-products']//a[@class='woocommerce-LoopProduct-link woocommerce-loop-product__link']");
        this._inPromotionSectionProductNameElements = By.xpath("//section[@class='storefront-product-section storefront-on-sale-products']//h2[@class='woocommerce-loop-product__title']");
        this._inPromotionSectionProductUnitPriceElements = By.xpath("//section[@class='storefront-product-section storefront-on-sale-products']//span[@class='price']");
        this._inPromotionSectionProductAddToCartButtonElements = By.xpath("//section[@class='storefront-product-section storefront-on-sale-products']//a[@class='button product_type_simple add_to_cart_button ajax_add_to_cart']");
        //bestsellers section
        this._bestsellersSectionTitle = By.xpath("//section[@class='storefront-product-section storefront-best-selling-products']/h2");
        //list elements
        this._bestsellersSectionProductImageElements = By.xpath("//section[@class='storefront-product-section storefront-best-selling-products']//a[@class='woocommerce-LoopProduct-link woocommerce-loop-product__link']");
        this._bestsellersSectionProductNameElements = By.xpath("//section[@class='storefront-product-section storefront-best-selling-products']//h2[@class='woocommerce-loop-product__title']");
        this._bestsellersSectionProductUnitPriceElements = By.xpath("//section[@class='storefront-product-section storefront-best-selling-products']//span[@class='price']");
        this._bestsellersSectionProductAddToCartButtonElements = By.xpath("//section[@class='storefront-product-section storefront-best-selling-products']//a[@class='button product_type_simple add_to_cart_button ajax_add_to_cart']");
        //buy by brand section
        this._buyByBrandSectionTitle = By.xpath("//section[@class='storefront-product-section storefront-woocommerce-brands']/h2");
        //demo page warning element
        this._closeDemoPageWarning = By.xpath("//a[@class='woocommerce-store-notice__dismiss-link']")
    }

    //product data getters
    //news section
    async getHomePageNewsSectionProductName() {
        const elements = await this.driver.findElements(this._newsSectionProductNameElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get product (news) name:', error.message);
                    return '';
                }
            })
        );
    }

    async getHomePageNewsSectionProductUnitPrice() {
        const elements = await this.driver.findElements(this._newsSectionProductUnitPriceElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get product (news) unit price:', error.message);
                    return '';
                }
            })
        );
    }

    //popular section
    async getHomePagePopularSectionProductName() {
        const elements = await this.driver.findElements(this._popularSectionProductNameElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get product (popular) name:', error.message);
                    return '';
                }
            })
        );
    }

    async getHomePagePopularSectionProductUnitPrice() {
        const elements = await this.driver.findElements(this._popularSectionProductUnitPriceElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get product (popular) unit price:', error.message);
                    return '';
                }
            })
        );
    }

    //in promotion section
    async getHomePageInPromotionSectionProductName() {
        const elements = await this.driver.findElements(this._inPromotionSectionProductNameElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get product (in promotion) name:', error.message);
                    return '';
                }
            })
        );
    }

    async getHomePageInPromotionSectionProductUnitPrice() {
        const elements = await this.driver.findElements(this._inPromotionSectionProductUnitPriceElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get product (in promotion) unit price:', error.message);
                    return '';
                }
            })
        );
    }

    //bestsellers section
    async getHomePageBestsellersSectionProductName() {
        const elements = await this.driver.findElements(this._bestsellersSectionProductNameElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get product (bestsellers) name:', error.message);
                    return '';
                }
            })
        );
    }

    async getHomePageBestsellersSectionProductUnitPrice() {
        const elements = await this.driver.findElements(this._bestsellersSectionProductUnitPriceElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get product (bestsellers) unit price:', error.message);
                    return '';
                }
            })
        );
    }

    //click add to cart ('Windsurfing in Lanzaroth') button
    async clickLanzarothProductAddToCartButton() {
        //find and list elements
        const addToCartButtons = await this.driver.findElements(this._newsSectionProductAddToCartButtonElements);
        //assert list elements isn't empty
        if (addToCartButtons.length === 0) {throw new Error("No 'Add to Cart' buttons found in the news section.");}

        //choose set add to cart ('Windsurfing in Lanzaroth') button
        const buttonToClick = addToCartButtons[0];
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", buttonToClick);
        await buttonToClick.click();
    }

    //click add to cart ('Climbing in Ferraty') button
    async clickFerratyProductAddToCartButton() {
        //find and list elements
        const addToCartButtons = await this.driver.findElements(this._inPromotionSectionProductAddToCartButtonElements);
        //assert list elements isn't empty
        if (addToCartButtons.length === 0) {throw new Error("No 'Add to Cart' buttons found in the promotion section.");}

        //choose set add to cart ('Climbing in Ferraty') button
        const buttonToClick = addToCartButtons[3];
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", buttonToClick);
        await buttonToClick.click();
    }

    //click ('Vacation in Blooming Cherry Land') product link method
    async clickVacationBloomingCherryLandProductLink() {
        //find and list elements
        const promotionProductLinks = await this.driver.findElements(this._inPromotionSectionProductImageElements);
        //assert list elements isn't empty
        if (promotionProductLinks.length === 0) {throw new Error("No product links found in the promotion section.");}

        //choose set add to cart ('Vacation in Blooming Cherry Land') button
        const productLinkToClick = promotionProductLinks[0];
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", productLinkToClick);
        await productLinkToClick.click();
    }

    //click ('Egipt - El Gouna') product link method
    async clickEgiptElGounaProductLink() {
        //find and list elements
        const bestsellerProductLinks = await this.driver.findElements(this._bestsellersSectionProductImageElements);
        //assert list elements isn't empty
        if (bestsellerProductLinks.length === 0) {throw new Error("No bestseller links found in the promotion section.");}

        //choose set add to cart ('Egipt - El Gouna') button
        const productLinkToClick = bestsellerProductLinks[0];
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", productLinkToClick);
        await productLinkToClick.click();
    }

    //home page text element getters

    async getChooseTravelSectionTitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const chooseTravelSectionTitle = await this.driver.findElement(this._chooseTravelSectionTitle);
        return await chooseTravelSectionTitle.getText();
    }
    async getChooseTravelSectionSubtitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const chooseTravelSectionSubtitle = await this.driver.findElement(this._chooseTravelSectionSubtitle);
        return await chooseTravelSectionSubtitle.getText();
    }

    async getTravelCategorySectionTitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const travelCategorySectionTitle = await this.driver.findElement(this._travelCategorySectionTitle);
        return await travelCategorySectionTitle.getText();
    }

    async getNewsSectionTitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const newsSectionTitle = await this.driver.findElement(this._newsSectionTitle);
        return await newsSectionTitle.getText();
    }

    async getPopularSectionSubtitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const popularSectionSubtitle = await this.driver.findElement(this._popularSectionTitle);
        return await popularSectionSubtitle.getText();
    }

    async getInPromotionSectionSubtitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const inPromotionSectionSubtitle = await this.driver.findElement(this._inPromotionSectionTitle);
        return await inPromotionSectionSubtitle.getText();
    }

    async getBestsellersSectionSubtitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const bestsellersSectionSubtitle = await this.driver.findElement(this._bestsellersSectionTitle);
        return await bestsellersSectionSubtitle.getText();
    }

    async getBuyByBrandSectionSubtitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const buyByBrandSectionSubtitle = await this.driver.findElement(this._buyByBrandSectionTitle);
        return await buyByBrandSectionSubtitle.getText();
    }

    //close demo warning button click method
    async clickCloseDemoWarningButton() {
        const closeDemoButton = await this.driver.findElement(this._closeDemoPageWarning);
        await closeDemoButton.click();
    }

    //home page web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isHomePageWebElementDisplayed(){
        const elementsToCheck = [
            this._chooseTravelSectionTitle,
            this._chooseTravelSectionSubtitle,
            //this._chooseTravelSectionCarouselImg,
            this._chooseTravelSectionCarouselLeftButton,
            this._chooseTravelSectionCarouselRightButton,
            this._travelCategorySectionTitle,
            this._windSurfingImage,
            this._windSurfingCategoryLink,
            this._climbingImage,
            this._climbingCategoryLink,
            this._yogaImage,
            this._yogaCategoryLink,
            this._newsSectionTitle,
            this._newsSectionProductImageElements,
            this._newsSectionProductNameElements,
            this._newsSectionProductUnitPriceElements,
            this._newsSectionProductAddToCartButtonElements,
            this._popularSectionTitle,
            this._popularSectionProductImageElements,
            this._popularSectionProductNameElements,
            this._popularSectionProductUnitPriceElements,
            this._popularSectionProductAddToCartButtonElements,
            this._inPromotionSectionTitle,
            this._inPromotionSectionProductImageElements,
            this._inPromotionSectionProductNameElements,
            this._inPromotionSectionProductUnitPriceElements,
            this._inPromotionSectionProductAddToCartButtonElements,
            this._bestsellersSectionTitle,
            this._bestsellersSectionProductImageElements,
            this._bestsellersSectionProductNameElements,
            this._bestsellersSectionProductUnitPriceElements,
            this._bestsellersSectionProductAddToCartButtonElements,
            this._buyByBrandSectionTitle
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = {HomePage};