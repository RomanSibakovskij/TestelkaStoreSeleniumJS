"use strict";

const { By, until, Key} = require('selenium-webdriver');
const BasePage = require('./utils/BasePage');
const  Logger  = require("./utils/Logger");

class OrderConfirmationPage extends BasePage{

    constructor(driver) {
        super(driver);

        //order confirmation page web elements
        this._orderConfirmationSuccessMessageTitle = By.xpath("//div[@id='content']//h1");
        this._orderConfirmationSuccessMessageSubtitle = By.xpath("//div[@class='woocommerce-order']/p");
        //upper table elements
        this._orderConfirmationUpperTableOrderNumber = By.xpath("//ul[@class='woocommerce-order-overview woocommerce-thankyou-order-details order_details']/li[1]");
        this._orderConfirmationUpperTableOrderDate = By.xpath("//ul[@class='woocommerce-order-overview woocommerce-thankyou-order-details order_details']/li[2]");
        this._orderConfirmationUpperTableOrderEmail = By.xpath("//ul[@class='woocommerce-order-overview woocommerce-thankyou-order-details order_details']/li[3]");
        this._orderConfirmationUpperTableOrderSum = By.xpath("//ul[@class='woocommerce-order-overview woocommerce-thankyou-order-details order_details']/li[4]");
        this._orderConfirmationUpperTableOrderPayMethod = By.xpath("//ul[@class='woocommerce-order-overview woocommerce-thankyou-order-details order_details']/li[5]");
        //order details section
        this._orderConfirmationOrderDetailsSectionSubtitle = By.xpath("//section[@class='woocommerce-order-details']/h2");
        //list elements
        this._orderConfirmationOrderDetailsProductNameElements = By.xpath("//section[@class='woocommerce-order-details']//tbody/tr/td[1]");
        this._orderConfirmationOrderDetailsProductSumElements = By.xpath("//section[@class='woocommerce-order-details']//tbody/tr/td[2]");
        //singular elements
        this._orderConfirmationOrderDetailsOrderQuoteSubtext = By.xpath("//section[@class='woocommerce-order-details']//tfoot[2]/tr[1]/th");
        this._orderConfirmationOrderDetailsOrderQuote = By.xpath("//section[@class='woocommerce-order-details']//tfoot[2]/tr[1]/td");
        this._orderConfirmationOrderDetailsPayMethodSubtext = By.xpath("//section[@class='woocommerce-order-details']//tfoot[2]/tr[2]/th");
        this._orderConfirmationOrderDetailsPayMethod = By.xpath("//section[@class='woocommerce-order-details']//tfoot[2]/tr[2]/td");
        this._orderConfirmationOrderDetailsSumSubtext = By.xpath("//section[@class='woocommerce-order-details']//tfoot[2]/tr[3]/th");
        this._orderConfirmationOrderDetailsSum = By.xpath("//section[@class='woocommerce-order-details']//tfoot[2]/tr[3]/td");
        this._orderConfirmationOrderDetailsOrderSaleSubtext = By.xpath("//section[@class='woocommerce-order-details']//tfoot[1]/tr[1]/th");
        this._orderConfirmationOrderDetailsOrderViewSaleButton = By.xpath("//section[@class='woocommerce-order-details']//tfoot[1]/tr[1]/td/a");
        //billing address section
        this._orderConfirmationBillingAddressSectionTitle = By.xpath("//section[@class='woocommerce-customer-details']/h2");
        this._orderConfirmationBillingAddressData = By.xpath("//section[@class='woocommerce-customer-details']/address");

    }

    //order confirmation data getters

    async getOrderConfirmationUpperTableOrderNumber(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const orderConfirmationUpperTableOrderNumber = await this.driver.findElement(this._orderConfirmationUpperTableOrderNumber);
        return await orderConfirmationUpperTableOrderNumber.getText();
    }
    async getOrderConfirmationUpperTableOrderDate(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const orderConfirmationUpperTableOrderDate = await this.driver.findElement(this._orderConfirmationUpperTableOrderDate);
        return await orderConfirmationUpperTableOrderDate.getText();
    }
    async getOrderConfirmationUpperTableOrderEmail(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const orderConfirmationUpperTableOrderEmail = await this.driver.findElement(this._orderConfirmationUpperTableOrderEmail);
        return await orderConfirmationUpperTableOrderEmail.getText();
    }
    async getOrderConfirmationUpperTableOrderSum(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const orderConfirmationUpperTableOrderSum = await this.driver.findElement(this._orderConfirmationUpperTableOrderSum);
        return await orderConfirmationUpperTableOrderSum.getText();
    }
    async getOrderConfirmationUpperTableOrderPayMethod(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const orderConfirmationUpperTableOrderPayMethod = await this.driver.findElement(this._orderConfirmationUpperTableOrderPayMethod);
        return await orderConfirmationUpperTableOrderPayMethod.getText();
    }
    async getOrderConfirmationOrderQuote(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const orderConfirmationOrderQuote = await this.driver.findElement(this._orderConfirmationOrderDetailsOrderQuote);
        return await orderConfirmationOrderQuote.getText();
    }
    async getOrderConfirmationPayMethod(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const orderConfirmationPayMethod = await this.driver.findElement(this._orderConfirmationOrderDetailsPayMethod);
        return await orderConfirmationPayMethod.getText();
    }
    async getOrderConfirmationOrderSum(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const orderConfirmationOrderSum = await this.driver.findElement(this._orderConfirmationOrderDetailsSum);
        return await orderConfirmationOrderSum.getText();
    }
    async getOrderConfirmationBillingAddress(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const orderConfirmationBillingAddress = await this.driver.findElement(this._orderConfirmationBillingAddressData);
        return await orderConfirmationBillingAddress.getText();
    }

    //list element getters

    async getOrderConfirmationProductName() {
        const elements = await this.driver.findElements(this._orderConfirmationOrderDetailsProductNameElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get order confirmation product name:', error.message);
                    return '';
                }
            })
        );
    }

    async getOrderConfirmationProductSum() {
        const elements = await this.driver.findElements(this._orderConfirmationOrderDetailsProductSumElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get order confirmation product sum:', error.message);
                    return '';
                }
            })
        );
    }

    //order confirmation page text getters

    async getOrderConfirmationOrderMessageTitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const orderConfirmationOrderMsgTitle = await this.driver.findElement(this._orderConfirmationSuccessMessageTitle);
        return await orderConfirmationOrderMsgTitle.getText();
    }
    async getOrderConfirmationOrderMessageSubtitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const orderConfirmationOrderMsgSubtitle = await this.driver.findElement(this._orderConfirmationSuccessMessageSubtitle);
        return await orderConfirmationOrderMsgSubtitle.getText();
    }
    async getOrderConfirmationOrderDetailsSectionSubtitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const orderConfirmationOrderDetailsSubtitle = await this.driver.findElement(this._orderConfirmationOrderDetailsSectionSubtitle);
        return await orderConfirmationOrderDetailsSubtitle.getText();
    }
    async getOrderConfirmationOrderQuoteSubtext(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const orderConfirmationOrderQuoteSubtext = await this.driver.findElement(this._orderConfirmationOrderDetailsOrderQuoteSubtext);
        return await orderConfirmationOrderQuoteSubtext.getText();
    }
    async getOrderConfirmationOrderPayMethodSubtext(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const orderConfirmationOrderPayMethodSubtext = await this.driver.findElement(this._orderConfirmationOrderDetailsPayMethodSubtext);
        return await orderConfirmationOrderPayMethodSubtext.getText();
    }
    async getOrderConfirmationOrderSumSubtext(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const orderConfirmationOrderSumSubtext = await this.driver.findElement(this._orderConfirmationOrderDetailsSumSubtext);
        return await orderConfirmationOrderSumSubtext.getText();
    }
    async getOrderConfirmationOrderSaleSubtext(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const orderConfirmationOrderSaleSubtext = await this.driver.findElement(this._orderConfirmationOrderDetailsOrderSaleSubtext);
        return await orderConfirmationOrderSaleSubtext.getText();
    }
    async getOrderConfirmationBillingAddressSectionTitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const orderConfirmationBillingAddressSectionTitle = await this.driver.findElement(this._orderConfirmationBillingAddressSectionTitle);
        return await orderConfirmationBillingAddressSectionTitle.getText();
    }

    //order confirmation page web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isOrderConfirmationPageWebElementDisplayed(){
        const elementsToCheck = [
            this._orderConfirmationSuccessMessageTitle,
            this._orderConfirmationSuccessMessageSubtitle,
            this._orderConfirmationUpperTableOrderNumber,
            this._orderConfirmationUpperTableOrderDate,
            this._orderConfirmationUpperTableOrderEmail,
            this._orderConfirmationUpperTableOrderSum,
            //this._orderConfirmationUpperTableOrderPayMethod,
            this._orderConfirmationOrderDetailsSectionSubtitle,
            this._orderConfirmationOrderDetailsProductNameElements,
            this._orderConfirmationOrderDetailsProductSumElements,
            this._orderConfirmationOrderDetailsOrderQuoteSubtext,
            this._orderConfirmationOrderDetailsOrderQuote,
            this._orderConfirmationOrderDetailsPayMethodSubtext,
            this._orderConfirmationOrderDetailsPayMethod,
            this._orderConfirmationOrderDetailsSumSubtext,
            this._orderConfirmationOrderDetailsSum,
            this._orderConfirmationOrderDetailsOrderSaleSubtext,
            this._orderConfirmationOrderDetailsOrderViewSaleButton,
            this._orderConfirmationBillingAddressSectionTitle,
            this._orderConfirmationBillingAddressData
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = { OrderConfirmationPage }