"use strict";

const { By, until} = require('selenium-webdriver');
const BasePage = require("./BasePage");
const {TestDataGenerator} = require('./TestDataGenerator');
const Logger = require("./Logger");
const { Actions } = require('selenium-webdriver');

class CheckoutPageGuestInvalidScenarios extends BasePage{

    constructor(driver){
        super(driver);

        //checkout page web elements
        //payment details form section
        this._checkoutPagePaymentFirstNameInputField = By.xpath("//input[@id='billing_first_name']");
        this._checkoutPagePaymentLastNameInputField = By.xpath("//input[@id='billing_last_name']");
        this._checkoutPagePaymentCompanyInputField = By.xpath("//input[@id='billing_company']");
        this._checkoutPagePaymentNoCountryOption = By.xpath("//select[@id='billing_country']/option[1]");
        this._checkoutPagePaymentStateInputField = By.xpath("//input[@id='billing_state']"); //sometimes it can be a dropdown menu, it's dynamic
        this._checkoutPagePaymentStreetInputField = By.xpath("//input[@id='billing_address_1']");
        this._checkoutPagePaymentPostCodeInputField = By.xpath("//input[@id='billing_postcode']");
        this._checkoutPagePaymentCityInputField = By.xpath("//input[@id='billing_city']");
        this._checkoutPagePaymentPhoneInputField = By.xpath("//input[@id='billing_phone']");
        this._checkoutPagePaymentEmailInputField = By.xpath("//input[@id='billing_email']");
        //singular input error message
        this._singularInputError = By.xpath("//div[@class='woocommerce-NoticeGroup woocommerce-NoticeGroup-checkout']//ul");
        this._singularStripeInputError = By.xpath("//div[@role='alert']");

        const testDataGenerator = new TestDataGenerator();

        //invalid guest input data - no singular input
        this._noGuestFirstName = "";
        this._noGuestLastName = "";
        this._noGuestStreet = "";
        this._noGuestCity = "";
        this._noGuestPostCode = "";
        this._noGuestPhone = "";
        this._noGuestEmail = "";

        //invalid guest input data - too short singular input
        this._tooShortGuestFirstName = "J";
        this._tooShortGuestLastName = "D";
        this._tooShortGuestStreet = "F";
        this._tooShortGuestCity = "V";
        this._tooShortGuestPostCode = 675;
        this._tooShortGuestPhone = 4;
        this._tooShortGuestEmail = testDataGenerator.generateRandomTooShortEmailAddress(1);
        this._tooShortCreditCardTestNumber = "424242424242424";
        this._tooShortCreditCardExpDate = "09/2";
        this._tooShortCreditCardCVCNumber = "32";

        //invalid guest input data - too long singular input
        this._tooLongGuestFirstName = "Jffdgdfhesfesdghjulkjhtgrefdwsafghjklskfgjmhgnbfdvcsxzbcvgbnfgjertrytuiukjhgfsdgfjuyuioijfhgdfsfddsf";
        this._tooLongGuestLastName = "Dffdgdfhesfesdghjulkjhtgrefdwsafghjklskfgjmhgnbfdvcsxzbcvgbnfgjertrytuiukjhgfsdgfjuyuioijfhgdfsfddsf";
        this._tooLongGuestStreet = "Fffdgdfhesfesdghjulkjhtgrefdwsafghjklskfgjmhgnbfdvcsxzbcvgbnfgjertrytuiukjhgfsdgfjuyuioijfhgdfsfddsf";
        this._tooLongGuestCity = "Vffdgdfhesfesdghjulkjhtgrefdwsafghjklskfgjmhgnbfdvcsxzbcvgbnfgjertrytuiukjhgfsdgfjuyuioijfhgdfsfddsf";
        this._tooLongGuestPostCode = 2323453453232324232232324;
        this._tooLongGuestPhone = 232345345323232423223232478543;
        this._tooLongGuestEmail = testDataGenerator.generateRandomTooLongEmailAddress(100);
        this._tooLongCreditCardTestNumber = "42424242424242421";
        this._tooLongCreditCardExpDate = "09/273";
        this._tooLongCreditCardCVCNumber = "3243";

        //invalid guest input data - invalid singular input format
        this._invalidGuestFirstNameFormat = "!#@@#$%#";
        this._invalidGuestLastNameFormat = "!@$#$%#@$#@";
        this._invalidGuestStreetFormat = "@#@#$#$%$#";
        this._invalidGuestCityFormat = "@$##$%^$#%#";
        this._invalidGuestPostCodeFormat = "@#@$#$%#%";
        this._invalidGuestPhoneFormat = "!@#$#@$%#$%";
        this._invalidGuestEmailFormat = "$%#$%#$%";
        this._invalidCreditCardTestNumberFormat = "*&%^^%^";
        this._invalidCreditCardTestNumber = "3561415876534844";
        this._invalidCreditCardExpDateFormat = "&*/$#";
        this._invalidCreditCardCVCNumberFormat = "$%#";
    }

    //invalid guest checkout data input methods -> no singular input
    async inputNoGuestFirstNameIntoFirstNameInputField(){
        const firstNameInputField = await this.driver.findElement(this._checkoutPagePaymentFirstNameInputField);
        const noGuestFirstName = this._noGuestFirstName;
        Logger.info("No guest first name: ", noGuestFirstName);
        await firstNameInputField.sendKeys(noGuestFirstName);
    }
    async inputNoGuestLastNameIntoLastNameInputField(){
        const lastNameInputField = await this.driver.findElement(this._checkoutPagePaymentLastNameInputField);
        const noGuestLastName = this._noGuestLastName;
        Logger.info("No guest last name: ", noGuestLastName);
        await lastNameInputField.sendKeys(noGuestLastName);
    }
    async inputNoGuestStreetIntoStreetInputField(){
        const streetInputField = await this.driver.findElement(this._checkoutPagePaymentStreetInputField);
        const noGuestStreet = this._noGuestStreet;
        Logger.info("No guest street: ", noGuestStreet);
        await streetInputField.sendKeys(noGuestStreet);
    }
    async inputNoGuestCityIntoCityInputField(){
        const cityInputField = await this.driver.findElement(this._checkoutPagePaymentCityInputField);
        const noGuestCity = this._noGuestCity;
        Logger.info("No guest city: ", noGuestCity);
        await cityInputField.sendKeys(noGuestCity);
    }
    async inputNoGuestPostCodeIntoPostCodeInputField(){
        const postCodeInputField = await this.driver.findElement(this._checkoutPagePaymentPostCodeInputField);
        const noGuestPostCode = this._noGuestPostCode;
        Logger.info("No guest post code: ", noGuestPostCode);
        await postCodeInputField.sendKeys(noGuestPostCode);
    }
    async inputNoGuestPhoneIntoPhoneInputField(){
        const phoneInputField = await this.driver.findElement(this._checkoutPagePaymentPhoneInputField);
        const noGuestPhone = this._noGuestPhone;
        Logger.info("No guest phone: ", noGuestPhone);
        await phoneInputField.sendKeys(noGuestPhone);
    }
    async inputNoGuestEmailIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._checkoutPagePaymentEmailInputField);
        const noGuestEmail = this._noGuestEmail;
        Logger.info("No guest email: ", noGuestEmail);
        await emailInputField.sendKeys(noGuestEmail);
    }

    //invalid guest checkout data input methods -> too short singular input
    async inputTooShortGuestFirstNameIntoFirstNameInputField(){
        const firstNameInputField = await this.driver.findElement(this._checkoutPagePaymentFirstNameInputField);
        const tooShortGuestFirstName = this._tooShortGuestFirstName;
        Logger.info("Too short guest first name: ", tooShortGuestFirstName);
        await firstNameInputField.sendKeys(tooShortGuestFirstName);
    }
    async inputTooShortGuestLastNameIntoLastNameInputField(){
        const lastNameInputField = await this.driver.findElement(this._checkoutPagePaymentLastNameInputField);
        const tooShortGuestLastName = this._tooShortGuestLastName;
        Logger.info("Too short guest last name: ", tooShortGuestLastName);
        await lastNameInputField.sendKeys(tooShortGuestLastName);
    }
    async inputTooShortGuestStreetIntoStreetInputField(){
        const streetInputField = await this.driver.findElement(this._checkoutPagePaymentStreetInputField);
        const tooShortGuestStreet = this._tooShortGuestStreet;
        Logger.info("Too short guest street: ", tooShortGuestStreet);
        await streetInputField.sendKeys(tooShortGuestStreet);
    }
    async inputTooShortGuestCityIntoCityInputField(){
        const cityInputField = await this.driver.findElement(this._checkoutPagePaymentCityInputField);
        const tooShortGuestCity = this._tooShortGuestCity;
        Logger.info("Too short guest city: ", tooShortGuestCity);
        await cityInputField.sendKeys(tooShortGuestCity);
    }
    async inputTooShortGuestPostCodeIntoPostCodeInputField(){
        const postCodeInputField = await this.driver.findElement(this._checkoutPagePaymentPostCodeInputField);
        const tooShortGuestPostCode = this._tooShortGuestPostCode;
        Logger.info("Too short guest post code: ", tooShortGuestPostCode);
        await postCodeInputField.sendKeys(tooShortGuestPostCode);
    }
    async inputTooShortGuestPhoneIntoPhoneInputField(){
        const phoneInputField = await this.driver.findElement(this._checkoutPagePaymentPhoneInputField);
        const tooShortGuestPhone = this._tooShortGuestPhone;
        Logger.info("Too short guest phone: ", tooShortGuestPhone);
        await phoneInputField.sendKeys(tooShortGuestPhone);
    }
    async inputTooShortGuestEmailIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._checkoutPagePaymentEmailInputField);
        const tooShortGuestEmail = this._tooShortGuestEmail;
        Logger.info("Too short guest email: ", tooShortGuestEmail);
        await emailInputField.sendKeys(tooShortGuestEmail);
    }

    //invalid credit card data input methods - too short singular input
    async inputTooShortCreditCardNumberIntoCreditCardInputField() {
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
        const tooShortCreditCardNumber = this._tooShortCreditCardTestNumber;
        Logger.info("Too short test credit card number: ", tooShortCreditCardNumber);

        await cardNumberInput.click();
        await cardNumberInput.sendKeys(tooShortCreditCardNumber);

        //switch back to the main content
        await this.driver.switchTo().defaultContent();
    }
    async inputTooShortCreditCardExpDateIntoCreditCardInputField(){
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
        const tooShortCreditCardExpDate = this._tooShortCreditCardExpDate;
        Logger.info("Too short test credit card expiration date: ", tooShortCreditCardExpDate);

        await cardExpDateInput.click();
        await cardExpDateInput.sendKeys(tooShortCreditCardExpDate);

        //switch back to the main content
        await this.driver.switchTo().defaultContent();
    }
    async inputTooShortCreditCardCVCNumberIntoCreditCardCVCInputField(){
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
        const tooShortCreditCardCVC = this._tooShortCreditCardCVCNumber;
        Logger.info("Too short test credit card number: ", tooShortCreditCardCVC);

        await cardCVCInput.click();
        await cardCVCInput.sendKeys(tooShortCreditCardCVC);

        //switch back to the main content
        await this.driver.switchTo().defaultContent();
    }

    //invalid guest checkout data input methods -> too long singular input
    async inputTooLongGuestFirstNameIntoFirstNameInputField(){
        const firstNameInputField = await this.driver.findElement(this._checkoutPagePaymentFirstNameInputField);
        const tooLongGuestFirstName = this._tooLongGuestFirstName;
        Logger.info("Too long guest first name: ", tooLongGuestFirstName);
        await firstNameInputField.sendKeys(tooLongGuestFirstName);
    }
    async inputTooLongGuestLastNameIntoLastNameInputField(){
        const lastNameInputField = await this.driver.findElement(this._checkoutPagePaymentLastNameInputField);
        const tooLongGuestLastName = this._tooLongGuestLastName;
        Logger.info("Too long guest last name: ", tooLongGuestLastName);
        await lastNameInputField.sendKeys(tooLongGuestLastName);
    }
    async inputTooLongGuestStreetIntoStreetInputField(){
        const streetInputField = await this.driver.findElement(this._checkoutPagePaymentStreetInputField);
        const tooLongGuestStreet = this._tooLongGuestStreet;
        Logger.info("Too long guest street: ", tooLongGuestStreet);
        await streetInputField.sendKeys(tooLongGuestStreet);
    }
    async inputTooLongGuestCityIntoCityInputField(){
        const cityInputField = await this.driver.findElement(this._checkoutPagePaymentCityInputField);
        const tooLongGuestCity = this._tooLongGuestCity;
        Logger.info("Too long guest city: ", tooLongGuestCity);
        await cityInputField.sendKeys(tooLongGuestCity);
    }
    async inputTooLongGuestPostCodeIntoPostCodeInputField(){
        const postCodeInputField = await this.driver.findElement(this._checkoutPagePaymentPostCodeInputField);
        const tooLongGuestPostCode = this._tooLongGuestPostCode;
        Logger.info("Too long guest post code: ", tooLongGuestPostCode);
        await postCodeInputField.sendKeys(tooLongGuestPostCode);
    }
    async inputTooLongGuestPhoneIntoPhoneInputField(){
        const phoneInputField = await this.driver.findElement(this._checkoutPagePaymentPhoneInputField);
        const tooLongGuestPhone = this._tooLongGuestPhone;
        Logger.info("Too long guest phone: ", tooLongGuestPhone);
        await phoneInputField.sendKeys(tooLongGuestPhone);
    }
    async inputTooLongGuestEmailIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._checkoutPagePaymentEmailInputField);
        const tooLongGuestEmail = this._tooLongGuestEmail;
        Logger.info("Too long guest email: ", tooLongGuestEmail);
        await emailInputField.sendKeys(tooLongGuestEmail);
    }

    //invalid credit card data input methods - too long singular input
    async inputTooLongCreditCardNumberIntoCreditCardInputField() {
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
        const tooLongCreditCardNumber = this._tooLongCreditCardTestNumber;
        Logger.info("Too long test credit card number: ", tooLongCreditCardNumber);

        await cardNumberInput.click();
        await cardNumberInput.sendKeys(tooLongCreditCardNumber);

        //switch back to the main content
        await this.driver.switchTo().defaultContent();
    }
    async inputTooLongCreditCardExpDateIntoCreditCardInputField(){
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
        const tooLongCreditCardExpDate = this._tooLongCreditCardExpDate;
        Logger.info("Too long test credit card expiration date: ", tooLongCreditCardExpDate);

        await cardExpDateInput.click();
        await cardExpDateInput.sendKeys(tooLongCreditCardExpDate);

        //switch back to the main content
        await this.driver.switchTo().defaultContent();
    }
    async inputTooLongCreditCardCVCNumberIntoCreditCardCVCInputField(){
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
        const tooLongCreditCardCVC = this._tooLongCreditCardCVCNumber;
        Logger.info("Too long test credit card number: ", tooLongCreditCardCVC);

        await cardCVCInput.click();
        await cardCVCInput.sendKeys(tooLongCreditCardCVC);

        //switch back to the main content
        await this.driver.switchTo().defaultContent();
    }

    //invalid guest checkout data input methods -> invalid singular input format
    async inputInvalidGuestFirstNameFormatIntoFirstNameInputField(){
        const firstNameInputField = await this.driver.findElement(this._checkoutPagePaymentFirstNameInputField);
        const invalidGuestFirstNameFormat = this._invalidGuestFirstNameFormat;
        Logger.info("Invalid guest first name format: ", invalidGuestFirstNameFormat);
        await firstNameInputField.sendKeys(invalidGuestFirstNameFormat);
    }
    async inputInvalidGuestLastNameFormatIntoLastNameInputField(){
        const lastNameInputField = await this.driver.findElement(this._checkoutPagePaymentLastNameInputField);
        const invalidGuestLastNameFormat = this._invalidGuestLastNameFormat;
        Logger.info("Invalid guest last name format: ", invalidGuestLastNameFormat);
        await lastNameInputField.sendKeys(invalidGuestLastNameFormat);
    }
    async inputInvalidGuestStreetFormatIntoStreetInputField(){
        const streetInputField = await this.driver.findElement(this._checkoutPagePaymentStreetInputField);
        const invalidGuestStreetFormat = this._invalidGuestStreetFormat;
        Logger.info("Invalid guest street format: ", invalidGuestStreetFormat);
        await streetInputField.sendKeys(invalidGuestStreetFormat);
    }
    async inputInvalidGuestCityFormatIntoCityInputField(){
        const cityInputField = await this.driver.findElement(this._checkoutPagePaymentCityInputField);
        const invalidGuestCityFormat = this._invalidGuestCityFormat;
        Logger.info("Invalid guest city format: ", invalidGuestCityFormat);
        await cityInputField.sendKeys(invalidGuestCityFormat);
    }
    async inputInvalidGuestPostCodeFormatIntoPostCodeInputField(){
        const postCodeInputField = await this.driver.findElement(this._checkoutPagePaymentPostCodeInputField);
        const invalidGuestPostCodeFormat = this._invalidGuestPostCodeFormat;
        Logger.info("Invalid guest post code format: ", invalidGuestPostCodeFormat);
        await postCodeInputField.sendKeys(invalidGuestPostCodeFormat);
    }
    async inputInvalidGuestPhoneFormatIntoPhoneInputField(){
        const phoneInputField = await this.driver.findElement(this._checkoutPagePaymentPhoneInputField);
        const invalidGuestPhoneFormat = this._invalidGuestPhoneFormat;
        Logger.info("Invalid guest phone format: ", invalidGuestPhoneFormat);
        await phoneInputField.sendKeys(invalidGuestPhoneFormat);
    }
    async inputInvalidGuestEmailFormatIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._checkoutPagePaymentEmailInputField);
        const invalidGuestEmailFormat = this._invalidGuestEmailFormat;
        Logger.info("Invalid guest email format: ", invalidGuestEmailFormat);
        await emailInputField.sendKeys(invalidGuestEmailFormat);
    }

    //invalid credit card data input methods - invalid singular input
    async inputInvalidCreditCardNumberFormatIntoCreditCardInputField() {
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
        const invalidCreditCardNumberFormat = this._invalidCreditCardTestNumberFormat;
        Logger.info("Invalid test credit card number format: ", invalidCreditCardNumberFormat);

        await cardNumberInput.click();
        await cardNumberInput.sendKeys(invalidCreditCardNumberFormat);

        //switch back to the main content
        await this.driver.switchTo().defaultContent();
    }
    async inputInvalidCreditCardNumberIntoCreditCardInputField() {
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
        const invalidCreditCardNumber = this._invalidCreditCardTestNumber;
        Logger.info("Invalid test credit card number: ", invalidCreditCardNumber);

        await cardNumberInput.click();
        await cardNumberInput.sendKeys(invalidCreditCardNumber);

        //switch back to the main content
        await this.driver.switchTo().defaultContent();
    }
    async inputInvalidCreditCardExpDateFormatIntoCreditCardInputField(){
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
        const invalidCreditCardExpDate = this._invalidCreditCardExpDateFormat;
        Logger.info("Invalid test credit card expiration date format: ", invalidCreditCardExpDate);

        await cardExpDateInput.click();
        await cardExpDateInput.sendKeys(invalidCreditCardExpDate);

        //switch back to the main content
        await this.driver.switchTo().defaultContent();
    }
    async inputInvalidCreditCardCVCNumberFormatIntoCreditCardCVCInputField(){
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
        const invalidCreditCardCVCFormat = this._invalidCreditCardCVCNumberFormat;
        Logger.info("Invalid test credit card number format: ", invalidCreditCardCVCFormat);

        await cardCVCInput.click();
        await cardCVCInput.sendKeys(invalidCreditCardCVCFormat);

        //switch back to the main content
        await this.driver.switchTo().defaultContent();
    }

    //no country option click method
    async selectCheckoutPageNoCountryOption() {
        await new Promise(resolve => setTimeout(resolve, 100));
        const noCountryOptionElement = await this.driver.findElement(this._checkoutPagePaymentNoCountryOption);
        await noCountryOptionElement.click();
    }

    //input guest region method
    async inputGuestRegionIntoRegionInputField(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const guestRegionInputField = await this.driver.findElement(this._checkoutPagePaymentStateInputField);
        await guestRegionInputField.sendKeys("Test Region");
    }

    //singular input error getter
    async getSingularCheckoutInputError(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const singularInputError = await this.driver.findElement(this._singularInputError);
        return await singularInputError.getText();
    }

    //singular Stripe input error getter
    async getSingularStripeInputError(){
        await new Promise(resolve => setTimeout(resolve, 100));
        const singularStripeInputError = await this.driver.findElement(this._singularStripeInputError);
        return await singularStripeInputError.getText();
    }

}
module.exports = { CheckoutPageGuestInvalidScenarios }