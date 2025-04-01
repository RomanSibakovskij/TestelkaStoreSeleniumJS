"use strict";

const { By, until, Key} = require('selenium-webdriver');
const BasePage = require('./utils/BasePage');
const  Logger  = require("./utils/Logger");
const {TestDataGenerator} = require("./utils/TestDataGenerator");

class CheckoutPage extends BasePage{

    constructor(driver){
        super(driver);

        //checkout page web elements
        this._checkoutPageTitle = By.xpath("//div[@id='content']//h1");
        this._checkoutPageLoginOfferMessage = By.xpath("//div[@class='woocommerce-form-login-toggle']/div");
        this._checkoutPageLoginLink = By.xpath("//div[@class='woocommerce-form-login-toggle']//a");
        this._checkoutPageCouponCodeOfferMessage = By.xpath("//div[@class='woocommerce-form-coupon-toggle']/div");
        this._checkoutPageCouponCodeOfferLink = By.xpath("//div[@class='woocommerce-form-coupon-toggle']//a");
        //payment details form section
        this._checkoutPagePaymentSectionTitle = By.xpath("//div[@class='woocommerce-billing-fields']/h3");
        this._checkoutPagePaymentFirstNameInputSubtitle = By.xpath("//label[@for='billing_first_name']");
        this._checkoutPagePaymentFirstNameInputField = By.xpath("//input[@id='billing_first_name']");
        this._checkoutPagePaymentLastNameInputSubtitle = By.xpath("//label[@for='billing_last_name']");
        this._checkoutPagePaymentLastNameInputField = By.xpath("//input[@id='billing_last_name']");
        this._checkoutPagePaymentCompanyInputSubtitle = By.xpath("//label[@for='billing_company']");
        this._checkoutPagePaymentCompanyInputField = By.xpath("//input[@id='billing_company']");
        this._checkoutPagePaymentCountryInputSubtitle = By.xpath("//label[@for='billing_country']");
        this._checkoutPagePaymentCountryDropdownMenu = By.xpath("//select[@id='billing_country']");
        this._checkoutPagePaymentUSCountryOption = By.xpath("//select[@id='billing_country']/option[@value='US']");
        this._checkoutPagePaymentStateDropdownMenu = By.xpath("//select[@id='billing_state']");
        this._checkoutPagePaymentIllinoisStateOption = By.xpath("//select[@id='billing_state']/option[@value='IL']");
        this._checkoutPagePaymentStreetInputSubtitle = By.xpath("//label[@for='billing_address_1']");
        this._checkoutPagePaymentStreetInputField = By.xpath("//input[@id='billing_address_1']");
        this._checkoutPagePaymentAdditionalStreetInputField = By.xpath("//input[@id='billing_address_2']");
        this._checkoutPagePaymentPostCodeInputSubtitle = By.xpath("//label[@for='billing_postcode']");
        this._checkoutPagePaymentPostCodeInputField = By.xpath("//input[@id='billing_postcode']");
        this._checkoutPagePaymentCityInputSubtitle = By.xpath("//label[@for='billing_city']");
        this._checkoutPagePaymentCityInputField = By.xpath("//input[@id='billing_city']");
        this._checkoutPagePaymentPhoneInputSubtitle = By.xpath("//label[@for='billing_phone']");
        this._checkoutPagePaymentPhoneInputField = By.xpath("//input[@id='billing_phone']");
        this._checkoutPagePaymentEmailInputSubtitle = By.xpath("//label[@for='billing_email']");
        this._checkoutPagePaymentEmailInputField = By.xpath("//input[@id='billing_email']");
        this._checkoutPagePaymentCreateAccountCheckbox = By.xpath("//label[@for='billing_first_name']");
        this._checkoutPagePaymentCreateAccountCheckboxSubtitle = By.xpath("//span[text()= 'Stworzyć konto?']");
        //additional info section
        this._checkoutPageAdditionalInfoSectionTitle = By.xpath("//div[@class='woocommerce-additional-fields']/h3");
        this._checkoutPageAdditionalInfoInputSubtitle = By.xpath("//label[@for='order_comments']");
        this._checkoutPageAdditionalInfoInputField = By.xpath("//textarea[@id='order_comments']");
        //checkout order section
        this._checkoutPageOrderSectionTitle = By.xpath("//h3[@id='order_review_heading']");
        //list elements
        this._checkoutPageOrderProductNameElements = By.xpath("//div[@id='order_review']//tbody/tr/td[1]");
        this._checkoutPageOrderProductUpperQuotePriceElements = By.xpath("//div[@id='order_review']//tbody/tr/td[2]");
        this._checkoutPageOrderProductLowerQuotePrice = By.xpath("//div[@id='order_review']//tfoot/tr[1]/td");
        this._checkoutPageOrderProductTotalSum = By.xpath("//div[@id='order_review']//tfoot/tr[2]/td");
        //credit card section
        this._checkoutPageCreditCardSectionSubtitle = By.xpath("//ul[@class='wc_payment_methods payment_methods methods']/li/label");
        this._checkoutPageCreditCardDescription = By.xpath("//div[@id='stripe-payment-data']/p");
        this._checkoutPageCreditCardStripeLink = By.xpath("//div[@id='stripe-payment-data']//a");
        this._checkoutPageCreditCardNumberInputSubtitle = By.xpath("//label[@for='stripe-card-element']");
        this._checkoutPageCreditCardDateInputSubtitle = By.xpath("//label[@for='stripe-exp-element']");
        this._checkoutPageCreditCardCVCInputSubtitle = By.xpath("//label[@for='stripe-cvc-element']");
        //privacy section
        this._checkoutPagePrivacyDescription = By.xpath("//div[@class='woocommerce-privacy-policy-text']/p");
        this._checkoutPagePrivacyLink = By.xpath("//div[@class='woocommerce-privacy-policy-text']//a");
        this._checkoutPagePrivacyCheckbox = By.xpath("//input[@id='terms']");
        this._checkoutPagePrivacySubtext = By.xpath("//span[@class='woocommerce-terms-and-conditions-checkbox-text']");
        this._checkoutPagePrivacyRulesSubtext = By.xpath("//span[@class='woocommerce-terms-and-conditions-checkbox-text']");
        this._checkoutPagePrivacyRulesLink = By.xpath("//span[@class='woocommerce-terms-and-conditions-checkbox-text']/a");
        this._checkoutPageBuyAndPayButton = By.xpath("//button[@id='place_order']");

        const testDataGenerator = new TestDataGenerator();

        //valid guest input data
        const { firstName, lastName } = testDataGenerator.getRandomName();
        this._validGuestFirstName = firstName;
        this._validGuestLastName = lastName;
        this._validGuestStreet = testDataGenerator.generateRandomAddress(9);
        this._validGuestCity = testDataGenerator.getRandomCity();
        this._validGuestPostCode = testDataGenerator.getRandomPostalOrderNumber();
        this._validGuestPhone = testDataGenerator.generatePhoneNumber(8);
        this._validGuestEmail = testDataGenerator.generateRandomEmailAddress(11);
        this._validCreditCardTestNumber = "4242424242424242"; //only this number is functional for testing purposes, any other number is non-operational
        this._validCreditCardExpDate = "09/28";
        this._validCreditCardCVCNumber = testDataGenerator.generateRandomCVCNumber();
    }

    //valid guest data input methods

    async inputValidGuestFirstNameIntoFirstNameInputField(){
        const firstNameInputField = await this.driver.findElement(this._checkoutPagePaymentFirstNameInputField);
        const guestFirstName = this._validGuestFirstName;
        Logger.info("Valid guest first name: ", guestFirstName);
        await firstNameInputField.sendKeys(guestFirstName);
    }
    async inputValidGuestLastNameIntoLastNameInputField(){
        const lastNameInputField = await this.driver.findElement(this._checkoutPagePaymentLastNameInputField);
        const guestLastName = this._validGuestLastName;
        Logger.info("Valid guest last name: ", guestLastName);
        await lastNameInputField.sendKeys(guestLastName);
    }
    async inputValidGuestStreetIntoStreetInputField(){
        const streetInputField = await this.driver.findElement(this._checkoutPagePaymentStreetInputField);
        const guestStreet = this._validGuestStreet;
        Logger.info("Valid guest street: ", guestStreet);
        await streetInputField.sendKeys(guestStreet);
    }
    async inputValidGuestCityIntoCityInputField(){
        const cityInputField = await this.driver.findElement(this._checkoutPagePaymentCityInputField);
        const guestCity = this._validGuestCity;
        Logger.info("Valid guest city: ", guestCity);
        await cityInputField.sendKeys(guestCity);
    }
    async inputValidGuestPostCodeIntoPostCodeInputField(){
        const postCodeInputField = await this.driver.findElement(this._checkoutPagePaymentPostCodeInputField);
        const guestPostCode = this._validGuestPostCode;
        Logger.info("Valid guest post code: ", guestPostCode);
        await postCodeInputField.sendKeys(guestPostCode);
    }
    async inputValidGuestPhoneIntoPhoneInputField(){
        const phoneInputField = await this.driver.findElement(this._checkoutPagePaymentPhoneInputField);
        const guestPhone = this._validGuestPhone;
        Logger.info("Valid guest phone: ", guestPhone);
        await phoneInputField.sendKeys(guestPhone);
    }
    async inputValidGuestEmailIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._checkoutPagePaymentEmailInputField);
        const guestEmail = this._validGuestEmail;
        Logger.info("Valid guest email: ", guestEmail);
        await emailInputField.sendKeys(guestEmail);
    }

    //credit card data input methods
    async inputValidCreditCardNumberIntoCreditCardInputField() {
        //wait for the Stripe iframe to be present
        await this.driver.wait(until.elementLocated(By.css("iframe[name^='__privateStripeFrame']")), 1000);

        //find all iframes and switch to the correct one (the one for card number)
        const iframes = await this.driver.findElements(By.css("iframe"));
        let cardNumberInput = null;

        for (const iframe of iframes) {
            try {
                await this.driver.switchTo().frame(iframe);

                // find the card input in this iframe
                cardNumberInput = await this.driver.findElement(
                    By.css("input.InputElement[name='cardnumber']")
                ).catch(() => null);

                if (cardNumberInput) {
                    break; //right iframe
                } else {
                    //switch back to main content to try the next iframe
                    await this.driver.switchTo().defaultContent();
                }
            } catch (error) {
                await this.driver.switchTo().defaultContent();
            }
        }

        if (!cardNumberInput) {
            throw new Error("Could not locate the credit card number input field inside any iframe");
        }

        //interacting with the card input
        const creditCardNumber = this._validCreditCardTestNumber;
        Logger.info("Valid test credit card number: ", creditCardNumber);

        await cardNumberInput.click();
        await cardNumberInput.sendKeys(creditCardNumber);

        //switch back to the main content
        await this.driver.switchTo().defaultContent();
    }
    async inputValidCreditCardExpDateIntoCreditCardInputField(){
        //wait for the Stripe iframe to be present
        await this.driver.wait(until.elementLocated(By.css("iframe[name^='__privateStripeFrame']")), 1000);

        //find all iframes and switch to the correct one (the one for exp date)
        const iframes = await this.driver.findElements(By.css("iframe"));
        let cardExpDateInput = null;

        for (const iframe of iframes) {
            try {
                await this.driver.switchTo().frame(iframe);

                //find the card input in this iframe
                cardExpDateInput = await this.driver.findElement(
                    By.css("input.InputElement[name='exp-date']")
                ).catch(() => null);

                if (cardExpDateInput) {
                    break; //right iframe
                } else {
                    //switch back to main content to try the next iframe
                    await this.driver.switchTo().defaultContent();
                }
            } catch (error) {
                await this.driver.switchTo().defaultContent();
            }
        }

        if (!cardExpDateInput) {
            throw new Error("Could not locate the credit card exp date input field inside any iframe");
        }

        //interacting with the card input
        const creditCardExpDate = this._validCreditCardExpDate;
        Logger.info("Valid test credit card expiration date: ", creditCardExpDate);

        await cardExpDateInput.click();
        await cardExpDateInput.sendKeys(creditCardExpDate);

        //switch back to the main content
        await this.driver.switchTo().defaultContent();
    }
    async inputValidCreditCardCVCNumberIntoCreditCardCVCInputField(){
        //wait for the Stripe iframe to be present
        await this.driver.wait(until.elementLocated(By.css("iframe[name^='__privateStripeFrame']")), 1000);

        //find all iframes and switch to the correct one (the one for CVC number)
        const iframes = await this.driver.findElements(By.css("iframe"));
        let cardCVCInput = null;

        for (const iframe of iframes) {
            try {
                await this.driver.switchTo().frame(iframe);

                //find the card input in this iframe
                cardCVCInput = await this.driver.findElement(
                    By.css("input.InputElement[name='cvc']")
                ).catch(() => null);

                if (cardCVCInput) {
                    break; //right iframe
                } else {
                    //switch back to main content to try the next iframe
                    await this.driver.switchTo().defaultContent();
                }
            } catch (error) {
                await this.driver.switchTo().defaultContent();
            }
        }

        if (!cardCVCInput) {
            throw new Error("Could not locate the credit card CVC input field inside any iframe");
        }

        //interacting with the card input
        const creditCardCVC = this._validCreditCardCVCNumber;
        Logger.info("Valid test credit card CVC number: ", creditCardCVC);

        await cardCVCInput.click();
        await cardCVCInput.sendKeys(creditCardCVC);

        //switch back to the main content
        await this.driver.switchTo().defaultContent();
    }

    //click 'Accept Terms and Conditions' checkbox method
    async clickAcceptTermsCheckbox(){
        const acceptTermsCheckbox = await this.driver.findElement(this._checkoutPagePrivacyCheckbox);
        acceptTermsCheckbox.click();
    }

    //click 'Buy and Pay' check out button method
    async clickBuyAndPayButton(){
        const buyAndPayButton = await this.driver.findElement(this._checkoutPageBuyAndPayButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: buyAndPayButton }).click().perform();
    }

    //country dropdown menu click method (due to element not working neither to Actions nor simple click, try/catch blocked approach is being used here)
    async clickCheckoutPageCountryDropdownMenu() {
        try {
            //first, try to click the Select2 visible element
            const select2Dropdown = await this.driver.findElement(By.css('.select2-selection'));
            await select2Dropdown.click();
        } catch (select2Error) {
            //if Select2 dropdown fails, use JavaScript to click the original select
            const countryDropdownMenu = await this.driver.findElement(this._checkoutPagePaymentCountryDropdownMenu);

            await this.driver.executeScript(`
            // Remove tabindex and aria-hidden to ensure element is clickable
            arguments[0].removeAttribute('tabindex');
            arguments[0].removeAttribute('aria-hidden');
            
            // Force click using JavaScript
            arguments[0].click();
        `, countryDropdownMenu);
        }
    }

    //select 'United States' option method
    async selectCheckoutPageUSCountryOption() {
        await new Promise(resolve => setTimeout(resolve, 100));
        const usCountryOptionElement = await this.driver.findElement(this._checkoutPagePaymentUSCountryOption);
        await usCountryOptionElement.click();
    }

    //click guest region dropdown menu method (for United States option)
    async clickGuestRegionDropdownMenu(){
        const stateDropdownMenu = await this.driver.findElement(this._checkoutPagePaymentStateDropdownMenu);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: stateDropdownMenu }).click().perform();
    }

    //select 'Illinois' state option method
    async selectIllinoisStateOption() {
        await new Promise(resolve => setTimeout(resolve, 100));
        const illinoisStateOption = await this.driver.findElement(this._checkoutPagePaymentIllinoisStateOption);
        await illinoisStateOption.click();
    }

    //checkout page text element getters

    async getCheckoutPageTitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const checkoutPageTitle = await this.driver.findElement(this._checkoutPageTitle);
        return await checkoutPageTitle.getText();
    }
    async getCheckoutPageLoginOfferMessage(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const checkoutPageLoginOfferMessage = await this.driver.findElement(this._checkoutPageLoginOfferMessage);
        return await checkoutPageLoginOfferMessage.getText();
    }
    async getCheckoutPageCouponOfferMessage(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const checkoutPageCouponOfferMessage = await this.driver.findElement(this._checkoutPageCouponCodeOfferMessage);
        return await checkoutPageCouponOfferMessage.getText();
    }
    async getCheckoutPagePaymentSectionTitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const checkoutPagePaymentSectionTitle = await this.driver.findElement(this._checkoutPagePaymentSectionTitle);
        return await checkoutPagePaymentSectionTitle.getText();
    }
    async getCheckoutPagePaymentFirstNameInputSubtitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const checkoutPageFirstNameInputSubtitle = await this.driver.findElement(this._checkoutPagePaymentFirstNameInputSubtitle);
        const requiredText = await checkoutPageFirstNameInputSubtitle.getText();
        return requiredText.split('*')[0].trim();
    }
    async getCheckoutPagePaymentLastNameInputSubtitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const checkoutPageLastNameInputSubtitle = await this.driver.findElement(this._checkoutPagePaymentLastNameInputSubtitle);
        const requiredText = await checkoutPageLastNameInputSubtitle.getText();
        return requiredText.split('*')[0].trim();
    }
    async getCheckoutPagePaymentCompanyInputSubtitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const checkoutPageCompanyInputSubtitle = await this.driver.findElement(this._checkoutPagePaymentCompanyInputSubtitle);
        return await checkoutPageCompanyInputSubtitle.getText();
    }
    async getCheckoutPagePaymentCountryInputSubtitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const checkoutPageRegionInputSubtitle = await this.driver.findElement(this._checkoutPagePaymentCountryInputSubtitle);
        const requiredText = await checkoutPageRegionInputSubtitle.getText();
        return requiredText.split('*')[0].trim();
    }
    async getCheckoutPagePaymentStreetInputSubtitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const checkoutPageStreetInputSubtitle = await this.driver.findElement(this._checkoutPagePaymentStreetInputSubtitle);
        const requiredText = await checkoutPageStreetInputSubtitle.getText();
        return requiredText.split('*')[0].trim();
    }
    async getCheckoutPagePaymentPostCodeInputSubtitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const checkoutPagePostCodeInputSubtitle = await this.driver.findElement(this._checkoutPagePaymentPostCodeInputSubtitle);
        const requiredText = await checkoutPagePostCodeInputSubtitle.getText();
        return requiredText.split('*')[0].trim();
    }
    async getCheckoutPagePaymentCityInputSubtitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const checkoutPageCityInputSubtitle = await this.driver.findElement(this._checkoutPagePaymentCityInputSubtitle);
        const requiredText = await checkoutPageCityInputSubtitle.getText();
        return requiredText.split('*')[0].trim();
    }
    async getCheckoutPagePaymentPhoneInputSubtitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const checkoutPagePhoneInputSubtitle = await this.driver.findElement(this._checkoutPagePaymentPhoneInputSubtitle);
        const requiredText = await checkoutPagePhoneInputSubtitle.getText();
        return requiredText.split('*')[0].trim();
    }
    async getCheckoutPagePaymentEmailInputSubtitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const checkoutPageEmailInputSubtitle = await this.driver.findElement(this._checkoutPagePaymentEmailInputSubtitle);
        const requiredText = await checkoutPageEmailInputSubtitle.getText();
        return requiredText.split('*')[0].trim();
    }
    async getCheckoutPageCreateAccountCheckboxSubtitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const checkoutPageCreateAccountCheckboxSubtitle = await this.driver.findElement(this._checkoutPagePaymentCreateAccountCheckboxSubtitle);
        return await checkoutPageCreateAccountCheckboxSubtitle.getText();
    }
    async getCheckoutPageAdditionalInfoSectionTitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const checkoutPageAdditionalInfoSectionTitle = await this.driver.findElement(this._checkoutPageAdditionalInfoSectionTitle);
        return await checkoutPageAdditionalInfoSectionTitle.getText();
    }
    async getCheckoutPageAdditionalInfoSectionSubtitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const checkoutPageAdditionalInfoSectionSubtitle = await this.driver.findElement(this._checkoutPageAdditionalInfoInputSubtitle);
        return await checkoutPageAdditionalInfoSectionSubtitle.getText();
    }
    async getCheckoutPageOrderSectionTitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const checkoutPageOrderSectionTitle = await this.driver.findElement(this._checkoutPageOrderSectionTitle);
        return await checkoutPageOrderSectionTitle.getText();
    }
    async getCheckoutPageCreditCardSectionTitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const checkoutPageCreditCardSectionTitle = await this.driver.findElement(this._checkoutPageCreditCardSectionSubtitle);
        return await checkoutPageCreditCardSectionTitle.getText();
    }
    async getCheckoutPageCreditCardDescription(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const checkoutPageCreditCardDescription = await this.driver.findElement(this._checkoutPageCreditCardDescription);
        return await checkoutPageCreditCardDescription.getText();
    }
    async getCheckoutPageCreditCardNumberSubtitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const checkoutPageCreditCardNumberSubtitle = await this.driver.findElement(this._checkoutPageCreditCardNumberInputSubtitle);
        const requiredText = await checkoutPageCreditCardNumberSubtitle.getText();
        return requiredText.split('*')[0].trim();
    }
    async getCheckoutPageCreditCardDateSubtitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const checkoutPageCreditCardDateSubtitle = await this.driver.findElement(this._checkoutPageCreditCardDateInputSubtitle);
        const requiredText = await checkoutPageCreditCardDateSubtitle.getText();
        return requiredText.split('*')[0].trim();
    }
    async getCheckoutPageCreditCardCVCSubtitle(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const checkoutPageCreditCardCVCSubtitle = await this.driver.findElement(this._checkoutPageCreditCardCVCInputSubtitle);
        const requiredText = await checkoutPageCreditCardCVCSubtitle.getText();
        return requiredText.split('*')[0].trim();
    }
    async getCheckoutPagePrivacyDescription(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const checkoutPagePrivacyDescription = await this.driver.findElement(this._checkoutPagePrivacyDescription);
        return await checkoutPagePrivacyDescription.getText();
    }
    async getCheckoutPagePrivacyRulesSubtext(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const checkoutPagePrivacySubtext = await this.driver.findElement(this._checkoutPagePrivacyRulesSubtext);
        const requiredText = await checkoutPagePrivacySubtext.getText();
        return requiredText.split('*')[0].trim();
    }

    //wait for Stripe to process credit card data method
    async waitForStripeToProcessCard() {
        const elementLoadTime = 7500;
        return new Promise(resolve => setTimeout(resolve, elementLoadTime));
    }

    //checkout page web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isCheckoutPageWebElementDisplayed(){
        const elementsToCheck = [
            this._checkoutPageTitle,
            this._checkoutPageCouponCodeOfferMessage,
            this._checkoutPagePaymentSectionTitle,
            this._checkoutPagePaymentFirstNameInputSubtitle,
            this._checkoutPagePaymentFirstNameInputField,
            this._checkoutPagePaymentLastNameInputSubtitle,
            this._checkoutPagePaymentLastNameInputField,
            this._checkoutPagePaymentCompanyInputSubtitle,
            this._checkoutPagePaymentCompanyInputField,
            this._checkoutPagePaymentCountryInputSubtitle,
            this._checkoutPagePaymentCountryDropdownMenu,
            this._checkoutPagePaymentStreetInputSubtitle,
            this._checkoutPagePaymentStreetInputField,
            this._checkoutPagePaymentAdditionalStreetInputField,
            this._checkoutPagePaymentPostCodeInputSubtitle,
            this._checkoutPagePaymentPostCodeInputField,
            this._checkoutPagePaymentCityInputSubtitle,
            this._checkoutPagePaymentCityInputField,
            this._checkoutPagePaymentPhoneInputSubtitle,
            this._checkoutPagePaymentPhoneInputField,
            this._checkoutPagePaymentEmailInputSubtitle,
            this._checkoutPagePaymentEmailInputField,
            this._checkoutPageAdditionalInfoSectionTitle,
            this._checkoutPageAdditionalInfoInputSubtitle,
            this._checkoutPageAdditionalInfoInputField,
            this._checkoutPageOrderSectionTitle,
            this._checkoutPageOrderProductNameElements,
            this._checkoutPageOrderProductUpperQuotePriceElements,
            this._checkoutPageOrderProductLowerQuotePrice,
            this._checkoutPageOrderProductTotalSum,
            this._checkoutPageCreditCardSectionSubtitle,
            this._checkoutPageCreditCardDescription,
            this._checkoutPageCreditCardStripeLink,
            this._checkoutPageCreditCardNumberInputSubtitle,
            this._checkoutPageCreditCardDateInputSubtitle,
            this._checkoutPageCreditCardCVCInputSubtitle,
            this._checkoutPagePrivacyDescription,
            this._checkoutPagePrivacyLink,
            this._checkoutPagePrivacyCheckbox,
            this._checkoutPagePrivacySubtext,
            this._checkoutPagePrivacyRulesSubtext,
            this._checkoutPagePrivacyRulesLink,
            this._checkoutPageBuyAndPayButton
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

    async isAdditionalCheckoutPageWebElementDisplayed(){
        const elementsToCheck = [
            this._checkoutPageLoginOfferMessage,
            this._checkoutPagePaymentCreateAccountCheckboxSubtitle,
            this._checkoutPagePaymentCreateAccountCheckbox,
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }


}
module.exports = { CheckoutPage }