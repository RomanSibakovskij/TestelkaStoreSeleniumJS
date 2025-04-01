"use strict";

const { By, until} = require('selenium-webdriver');
const BasePage = require('./utils/BasePage');
const { Logger } = require("./utils/Logger");

class SingleProductCategoryDashboardPage extends BasePage{

    constructor(driver){
        super(driver);

        //single product dashboard page web elements
        this._singleProductCategoryDashboardPageTitle = By.xpath("//div[@id='primary']//h1");
        this._singleProductCategoryDashboardUpperSortByDropdownMenu = By.xpath("//div[@class='storefront-sorting'][1]//select[@class='orderby']");
        this._singleProductCategoryDashboardUpperSortByNewestOption = By.xpath("//div[@class='storefront-sorting'][1]//select[@class='orderby']/option[4]");
        this._singleProductCategoryDashboardUpperProductCounter = By.xpath("//div[@class='storefront-sorting'][1]/p");
        this._singleProductCategoryDashboardPriceFilterSubtitle = By.xpath("//div[@id='woocommerce_price_filter-3']/span");
        this._singleProductCategoryDashboardPriceFilterSliderDown = By.xpath("//div[@class='price_slider ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content']/span[1]");
        this._singleProductCategoryDashboardPriceFilterSliderUp = By.xpath("//div[@class='price_slider ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content']/span[2]")
        this._singleProductCategoryDashboardPriceRangeView = By.xpath("//div[@class='price_label']")
        this._singleProductCategoryDashboardPriceFilterButton = By.xpath("//div[@class='price_slider_amount']/button")
        this._singleProductCategoryDashboardLowerSortByDropdownMenu = By.xpath("//div[@class='storefront-sorting'][2]//select[@class='orderby']");
        this._singleProductCategoryDashboardLowerProductCounter = By.xpath("//div[@class='storefront-sorting'][2]//p");
        //list elements
        this._singleProductCategoryDashboardProductImageLinkElements = By.xpath("//ul[@class='products columns-3']//img");
        this._singleProductCategoryDashboardProductNameElements = By.xpath("//ul[@class='products columns-3']//h2");
        this._singleProductCategoryDashboardProductUnitPriceElements = By.xpath("//ul[@class='products columns-3']//span[@class='price']");
        this._singleProductCategoryDashboardProductAddToCartButtonElements = By.xpath("//ul[@class='products columns-3']//a[@class='button product_type_simple add_to_cart_button ajax_add_to_cart']");
        //last viewed
        this._singleProductCategoryDashboardLastProductViewedSubtitle = By.xpath("//div[@id='woocommerce_recently_viewed_products-3']/span");
        this._singleProductCategoryDashboardLastProductViewedImageElements = By.xpath("//ul[@class='product_list_widget']//img");
        this._singleProductCategoryDashboardLastProductViewedLinkElements = By.xpath("//ul[@class='product_list_widget']/li/a");
        this._singleProductCategoryDashboardLastProductViewedNameElements = By.xpath("//ul[@class='product_list_widget']/li/a/span");
        this._singleProductCategoryDashboardLastProductViewedUnitPriceElements = By.xpath("//ul[@class='product_list_widget']//span[@class='woocommerce-Price-amount amount']");
    }

    //click 'Sailing in Mazur' add to cart button method
    async clickSailingInMazurAddToCartButton() {
        //find and list elements
        const sailingCategoryButton = await this.driver.findElements(this._singleProductCategoryDashboardProductAddToCartButtonElements);
        //assert list elements isn't empty
        if (sailingCategoryButton.length === 0) {throw new Error("No 'add to cart' buttons found on sailing category page.");}

        //choose set product (sailing in Mazur)
        const sailingMazurAddToCartButton = sailingCategoryButton[0];
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", sailingMazurAddToCartButton);
        await sailingMazurAddToCartButton.click();
    }

    //click 'Yoga in Spain' add to cart button method
    async clickYogaInSpainAddToCartButton() {
        //find and list elements
        const yogaCategoryButton = await this.driver.findElements(this._singleProductCategoryDashboardProductAddToCartButtonElements);
        //assert list elements isn't empty
        if (yogaCategoryButton.length === 0) {throw new Error("No 'add to cart' buttons found on yoga category page.");}

        //choose set product (yoga in Spain)
        const yogaSpainAddToCartButton = yogaCategoryButton[2];
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", yogaSpainAddToCartButton);
        await yogaSpainAddToCartButton.click();
    }

    //click sort by dropdown menu method
    async clickUpperSortByDropdownMenu() {
        const upperSortByDropdownMenu = await this.driver.findElement(this._singleProductCategoryDashboardUpperSortByDropdownMenu);
        upperSortByDropdownMenu.click();
    }
    //select 'Sort by newest' option
    async selectSortByNewestOption() {
        const sortByNewestOption = await this.driver.findElement(this._singleProductCategoryDashboardUpperSortByNewestOption);
        sortByNewestOption.click();
    }

    //single product dashboard page text getters

    async getSingleProductCategoryDashboardPageTitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const singleProductCategoryDashboardPageTitle = await this.driver.findElement(this._singleProductCategoryDashboardPageTitle);
        return await singleProductCategoryDashboardPageTitle.getText();
    }

    async getSingleProductCategoryDashboardPriceFilterSubtitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const singleProductCategoryDashboardPriceFilterSubtitle = await this.driver.findElement(this._singleProductCategoryDashboardPriceFilterSubtitle);
        return await singleProductCategoryDashboardPriceFilterSubtitle.getText();
    }

    async getSingleProductCategoryDashboardLastViewedSubtitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const singleProductCategoryDashboardLastViewedSubtitle = await this.driver.findElement(this._singleProductCategoryDashboardLastProductViewedSubtitle);
        return await singleProductCategoryDashboardLastViewedSubtitle.getText();
    }

    //single product category dashboard page product data getters


    async getSingleProductCategoryProductName() {
        const elements = await this.driver.findElements(this._singleProductCategoryDashboardProductNameElements);

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

    async getSingleProductCategoryProductUnitPrice() {
        const elements = await this.driver.findElements(this._singleProductCategoryDashboardProductUnitPriceElements);

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

    //last viewed products section

    async getSingleProductCategoryLastViewedProductName() {
        const elements = await this.driver.findElements(this._singleProductCategoryDashboardLastProductViewedNameElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get product (last viewed) name:', error.message);
                    return '';
                }
            })
        );
    }

    async getSingleProductCategoryLastViewedProductUnitPrice() {
        const elements = await this.driver.findElements(this._singleProductCategoryDashboardLastProductViewedUnitPriceElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get product (last viewed) unit price:', error.message);
                    return '';
                }
            })
        );
    }

    //single product dashboard page web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isSingleProductCategoryDashboardPageWebElementDisplayed(){
        const elementsToCheck = [
            this._singleProductCategoryDashboardPageTitle,
            this._singleProductCategoryDashboardUpperSortByDropdownMenu,
            this._singleProductCategoryDashboardUpperProductCounter,
            this._singleProductCategoryDashboardPriceFilterSubtitle,
            this._singleProductCategoryDashboardPriceFilterSliderDown,
            this._singleProductCategoryDashboardPriceFilterSliderUp,
            this._singleProductCategoryDashboardPriceRangeView,
            this._singleProductCategoryDashboardPriceFilterButton,
            this._singleProductCategoryDashboardProductImageLinkElements,
            this._singleProductCategoryDashboardProductNameElements,
            this._singleProductCategoryDashboardProductUnitPriceElements,
            this._singleProductCategoryDashboardProductAddToCartButtonElements,
            this._singleProductCategoryDashboardLowerSortByDropdownMenu,
            this._singleProductCategoryDashboardLowerProductCounter
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

    async isAdditionalSingleProductCategoryDashboardPageWebElementDisplayed(){
        const elementsToCheck = [
            this._singleProductCategoryDashboardLastProductViewedSubtitle,
            this._singleProductCategoryDashboardLastProductViewedImageElements,
            this._singleProductCategoryDashboardLastProductViewedLinkElements,
            this._singleProductCategoryDashboardLastProductViewedNameElements,
            this._singleProductCategoryDashboardLastProductViewedUnitPriceElements
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = { SingleProductCategoryDashboardPage }