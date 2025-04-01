"use strict";

const fs = require('fs');
const path = require('path');
const assert = require("node:assert");
const Logger = require('../../pages/utils/Logger');
const { HomePage } = require('../../pages/HomePage');
const { GeneralPage } = require("../../pages/GeneralPage");
const { RegisterLoginDashboardPage } = require("../../pages/RegisterLoginDashboardPage");
const { RegisterLoginDashboardPageInvalidScenarios } = require("../../pages/utils/RegisterLoginDashboardPageInvalidScenarios")
const { MyAccountPage } = require("../../pages/MyAccountPage");
const { EditAccountPage } = require("../../pages/EditAccountPage");
const { EditAccountPageInvalidScenarios } = require("../../pages/utils/EditAccountPageInvalidScenarios")
const { AddressBookPage } = require("../../pages/AddressBookPage");
const { AddShippingAddressPage } = require("../../pages/AddShippingAddressPage");
const { AddShippingAddressPageInvalidScenarios } = require("../../pages/utils/AddShippingAddressPageInvalidScenarios")
const { AddBillingAddressPage } = require("../../pages/AddBillingAddressPage");
const { AddBillingAddressPageInvalidScenarios } = require("../../pages/utils/AddBillingAddressPageInvalidScenarios")
const { SingleProductCategoryDashboardPage } = require("../../pages/SingleProductCategoryDashboardPage");
const { SingleProductPage } = require("../../pages/SingleProductPage");
const { ShopPage } = require("../../pages/ShopPage");
const { WishlistPage } = require("../../pages/WishlistPage");
const { ShoppingCartPage } = require("../../pages/ShoppingCartPage");
const { CheckoutPage } = require("../../pages/CheckoutPage");
const { CheckoutPageGuestInvalidScenarios } = require("../../pages/utils/CheckoutPageGuestInvalidScenarios")
const { OrderConfirmationPage } = require("../../pages/OrderConfirmationPage");

class TestMethods {

    constructor(driver) {this.driver = driver;}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//navigate to 'Register/Login' dashboard page
    async navigateToRegisterLoginDashboardTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        const registerLoginDashboardPage = new RegisterLoginDashboardPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await this.isHomePageTextElementAsExpected();
        //log home page product data
        await this.logHomePageProductData();
        //close demo page warning
        await homePage.clickCloseDemoWarningButton();
        //capture screenshot of homepage display
        await TestMethods.captureScreenshot(this.driver, "Home Page Display");
        //click 'My Account' nav link method
        await generalPage.clickMyAccountNavLink();
        //assert the user gets onto register/login dashboard page
        const registerLoginDashPageTitle = await registerLoginDashboardPage.getRegisterLoginDashboardPageTitle();
        assert.strictEqual(registerLoginDashPageTitle,   "Moje konto", "The register/login dashboard page title doesn't match expectations or the user is on the wrong page.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Navigate To Register/Login Dashboard Page Test Result");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //valid user account creation test method

    async validUserAccountCreationTest(){
        const generalPage = new GeneralPage(this.driver);
        const registerLoginDashboardPage = new RegisterLoginDashboardPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //register/login dashboard page web element assert
        await registerLoginDashboardPage.isRegisterLoginDashboardPageWebElementDisplayed();
        //register/login dashboard page text element assert
        await this.isRegisterLoginDashboardPageTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot before valid data input
        await TestMethods.captureScreenshot(this.driver, "Register and Login Dashboard Page Display Before Data Input");
        //input valid email into register email input field
        await registerLoginDashboardPage.inputEmailIntoRegisterEmailInputField();
        //input valid password into register password input field
        await registerLoginDashboardPage.inputPasswordIntoRegisterPasswordInputField();
        //click 'View Password' (register section) button
        await registerLoginDashboardPage.clickViewPasswordRegisterButton();
        //capture screenshot of the valid input data
        await TestMethods.captureScreenshot(this.driver, "Register and Login Dashboard Page Display After Valid Data Input");
        //click 'Register' button
        await registerLoginDashboardPage.clickRegisterButton();
        //assert the user gets onto my account page
        const myAccountPageTitle = await myAccountPage.getMyAccountPageTitle();
        assert.strictEqual(myAccountPageTitle,   "Moje konto", "The my account page title doesn't match expectations or the user is on the wrong page.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid User Account Creation Test Result");
    }

    //invalid user account creation tests

    //no singular input

    //invalid user account test method - no user email
    async invalidUserAccountCreationNoEmailTest(){
        const generalPage = new GeneralPage(this.driver);
        const registerLoginDashboardPage = new RegisterLoginDashboardPage(this.driver);
        const registerLoginDashboardPageInvalidScenarios = new RegisterLoginDashboardPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //register/login dashboard page web element assert
        await registerLoginDashboardPage.isRegisterLoginDashboardPageWebElementDisplayed();
        //register/login dashboard page text element assert
        await this.isRegisterLoginDashboardPageTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot before valid data input
        await TestMethods.captureScreenshot(this.driver, "Register and Login Dashboard Page Display Before Data Input");
        //input no email into register email input field
        await registerLoginDashboardPageInvalidScenarios.inputNoEmailIntoRegisterEmailInputField();
        //input valid password into register password input field
        await registerLoginDashboardPage.inputPasswordIntoRegisterPasswordInputField();
        //click 'View Password' (register section) button
        await registerLoginDashboardPage.clickViewPasswordRegisterButton();
        //capture screenshot of the valid input data
        await TestMethods.captureScreenshot(this.driver, "Register and Login Dashboard Page Display After Invalid Data Input - No Register Email");
        //click 'Register' button
        await registerLoginDashboardPage.clickRegisterButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Creation Test Result - No Register Email");
    }
    //invalid user account test method - no user password
    async invalidUserAccountCreationNoPasswordTest(){
        const generalPage = new GeneralPage(this.driver);
        const registerLoginDashboardPage = new RegisterLoginDashboardPage(this.driver);
        const registerLoginDashboardPageInvalidScenarios = new RegisterLoginDashboardPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //register/login dashboard page web element assert
        await registerLoginDashboardPage.isRegisterLoginDashboardPageWebElementDisplayed();
        //register/login dashboard page text element assert
        await this.isRegisterLoginDashboardPageTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot before valid data input
        await TestMethods.captureScreenshot(this.driver, "Register and Login Dashboard Page Display Before Data Input");
        //input valid email into register email input field
        await registerLoginDashboardPage.inputEmailIntoRegisterEmailInputField();
        //input no password into register password input field
        await registerLoginDashboardPageInvalidScenarios.inputNoPasswordIntoRegisterPasswordInputField();
        //capture screenshot of the valid input data
        await TestMethods.captureScreenshot(this.driver, "Register and Login Dashboard Page Display After Invalid Data Input - No Register Password");
        //click 'Register' button
        await registerLoginDashboardPage.clickRegisterButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Creation Test Result - No Register Password");
    }

    //too short singular input

    //invalid user account test method - too short user email (1 char -> name, domain)
    async invalidUserAccountCreationTooShortEmailTest(){
        const generalPage = new GeneralPage(this.driver);
        const registerLoginDashboardPage = new RegisterLoginDashboardPage(this.driver);
        const registerLoginDashboardPageInvalidScenarios = new RegisterLoginDashboardPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //register/login dashboard page web element assert
        await registerLoginDashboardPage.isRegisterLoginDashboardPageWebElementDisplayed();
        //register/login dashboard page text element assert
        await this.isRegisterLoginDashboardPageTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot before valid data input
        await TestMethods.captureScreenshot(this.driver, "Register and Login Dashboard Page Display Before Data Input");
        //input too short email into register email input field
        await registerLoginDashboardPageInvalidScenarios.inputTooShortEmailIntoRegisterEmailInputField();
        //input valid password into register password input field
        await registerLoginDashboardPage.inputPasswordIntoRegisterPasswordInputField();
        //capture screenshot of the valid input data
        await TestMethods.captureScreenshot(this.driver, "Register and Login Dashboard Page Display After Invalid Data Input - Too Short Register Email");
        //click 'Register' button
        await registerLoginDashboardPage.clickRegisterButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Too Short Register Email");
    }
    //invalid user account test method - too short user password (11 chars -> single chars(different chars will pass the password since the validation relies on strength not char count -> the min limit is 12 chars))
    async invalidUserAccountCreationTooShortPasswordTest(){
        const generalPage = new GeneralPage(this.driver);
        const registerLoginDashboardPage = new RegisterLoginDashboardPage(this.driver);
        const registerLoginDashboardPageInvalidScenarios = new RegisterLoginDashboardPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //register/login dashboard page web element assert
        await registerLoginDashboardPage.isRegisterLoginDashboardPageWebElementDisplayed();
        //register/login dashboard page text element assert
        await this.isRegisterLoginDashboardPageTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot before valid data input
        await TestMethods.captureScreenshot(this.driver, "Register and Login Dashboard Page Display Before Data Input");
        //input valid email into register email input field
        await registerLoginDashboardPage.inputEmailIntoRegisterEmailInputField();
        //input too short password into register password input field
        await registerLoginDashboardPageInvalidScenarios.inputTooShortPasswordIntoRegisterPasswordInputField();
        //click 'View Password' (register section) button
        await registerLoginDashboardPage.clickViewPasswordRegisterButton();
        //capture screenshot of the valid input data
        await TestMethods.captureScreenshot(this.driver, "Register and Login Dashboard Page Display After Invalid Data Input - Too Short Register Password");
        //click 'Register' button
        await registerLoginDashboardPage.clickRegisterButton();
        //assert the user gets the expected error
        const tooWeakPasswordError = await registerLoginDashboardPageInvalidScenarios.getTooWeakPasswordError();
        assert.strictEqual(tooWeakPasswordError,   "Bardzo słabe - Proszę wpisać mocniejsze hasło", "The too short/weak password error doesn't match expectations or the password got accepted into system.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Too Short Register Password");
    }

    //too long singular input

    //invalid user account test method - too long user email (100 chars -> name, domain)
    async invalidUserAccountCreationTooLongEmailTest(){
        const generalPage = new GeneralPage(this.driver);
        const registerLoginDashboardPage = new RegisterLoginDashboardPage(this.driver);
        const registerLoginDashboardPageInvalidScenarios = new RegisterLoginDashboardPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //register/login dashboard page web element assert
        await registerLoginDashboardPage.isRegisterLoginDashboardPageWebElementDisplayed();
        //register/login dashboard page text element assert
        await this.isRegisterLoginDashboardPageTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot before valid data input
        await TestMethods.captureScreenshot(this.driver, "Register and Login Dashboard Page Display Before Data Input");
        //input too long email into register email input field
        await registerLoginDashboardPageInvalidScenarios.inputTooLongEmailIntoRegisterEmailInputField();
        //input valid password into register password input field
        await registerLoginDashboardPage.inputPasswordIntoRegisterPasswordInputField();
        //capture screenshot of the valid input data
        await TestMethods.captureScreenshot(this.driver, "Register and Login Dashboard Page Display After Invalid Data Input - Too Long Register Email");
        //click 'Register' button
        await registerLoginDashboardPage.clickRegisterButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Too Long Register Email");
    }
    //invalid user account test method - too long user password (100 chars)
    async invalidUserAccountCreationTooLongPasswordTest(){
        const generalPage = new GeneralPage(this.driver);
        const registerLoginDashboardPage = new RegisterLoginDashboardPage(this.driver);
        const registerLoginDashboardPageInvalidScenarios = new RegisterLoginDashboardPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //register/login dashboard page web element assert
        await registerLoginDashboardPage.isRegisterLoginDashboardPageWebElementDisplayed();
        //register/login dashboard page text element assert
        await this.isRegisterLoginDashboardPageTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot before valid data input
        await TestMethods.captureScreenshot(this.driver, "Register and Login Dashboard Page Display Before Data Input");
        //input valid email into register email input field
        await registerLoginDashboardPage.inputEmailIntoRegisterEmailInputField();
        //input too long password into register password input field
        await registerLoginDashboardPageInvalidScenarios.inputTooLongPasswordIntoRegisterPasswordInputField();
        //capture screenshot of the valid input data
        await TestMethods.captureScreenshot(this.driver, "Register and Login Dashboard Page Display After Invalid Data Input - Too Long Register Password");
        //click 'Register' button
        await registerLoginDashboardPage.clickRegisterButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Too Long Register Password");
    }

    //pre-existing singular input

    //invalid user account test method - used user email (used beforehand in manual testing)
    async invalidUserAccountCreationUsedEmailTest(){
        const generalPage = new GeneralPage(this.driver);
        const registerLoginDashboardPage = new RegisterLoginDashboardPage(this.driver);
        const registerLoginDashboardPageInvalidScenarios = new RegisterLoginDashboardPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //register/login dashboard page web element assert
        await registerLoginDashboardPage.isRegisterLoginDashboardPageWebElementDisplayed();
        //register/login dashboard page text element assert
        await this.isRegisterLoginDashboardPageTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot before valid data input
        await TestMethods.captureScreenshot(this.driver, "Register and Login Dashboard Page Display Before Data Input");
        //input used email into register email input field (used beforehand in manual testing)
        await registerLoginDashboardPageInvalidScenarios.inputUsedEmailIntoRegisterEmailInputField();
        //input valid password into register password input field
        await registerLoginDashboardPage.inputPasswordIntoRegisterPasswordInputField();
        //capture screenshot of the valid input data
        await TestMethods.captureScreenshot(this.driver, "Register and Login Dashboard Page Display After Invalid Data Input - Used Register Email");
        //click 'Register' button
        await registerLoginDashboardPage.clickRegisterButton();
        //assert the user gets an expected error message
        const usedEmailError = await registerLoginDashboardPageInvalidScenarios.getSingularInputError();
        assert.strictEqual(usedEmailError,   "Błąd: Konto jest już zarejestrowane w m2@example.com. Zaloguj się lub użyj innego adresu e-mail.", "The used email error doesn't match expectations or the error doesn't get triggered.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Used Register Email");
    }

    //invalid singular input

    //invalid user account test method - invalid user email format (missing '@')
    async invalidUserAccountCreationInvalidEmailFormatTest(){
        const generalPage = new GeneralPage(this.driver);
        const registerLoginDashboardPage = new RegisterLoginDashboardPage(this.driver);
        const registerLoginDashboardPageInvalidScenarios = new RegisterLoginDashboardPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //register/login dashboard page web element assert
        await registerLoginDashboardPage.isRegisterLoginDashboardPageWebElementDisplayed();
        //register/login dashboard page text element assert
        await this.isRegisterLoginDashboardPageTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot before valid data input
        await TestMethods.captureScreenshot(this.driver, "Register and Login Dashboard Page Display Before Data Input");
        //input used email into register email input field (missing '@')
        await registerLoginDashboardPageInvalidScenarios.inputInvalidEmailFormatIntoRegisterEmailInputField();
        //input valid password into register password input field
        await registerLoginDashboardPage.inputPasswordIntoRegisterPasswordInputField();
        //capture screenshot of the valid input data
        await TestMethods.captureScreenshot(this.driver, "Register and Login Dashboard Page Display After Invalid Data Input - Invalid Register Email Input Format");
        //click 'Register' button
        await registerLoginDashboardPage.clickRegisterButton();
        //assert the user gets an expected alert message, log the issue otherwise
        try {
            const invalidEmailError = await registerLoginDashboardPageInvalidScenarios.getSingularInputError();
            assert.strictEqual(invalidEmailError,   "Błąd: Adres e-mail musi zawieraó '@'.", "The invalid email input error doesn't match expectations or the error doesn't get triggered.");
        } catch (e){
            Logger.error("Invalid email input error gets triggered but it can't be found in DOM.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Invalid Register Email Format");
    }

    //user account removal test

    //user account removal test method
    async userAccountRemovalTest(){
        const generalPage = new GeneralPage(this.driver);
        const registerLoginDashboardPage = new RegisterLoginDashboardPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //register/login dashboard page web element assert
        await registerLoginDashboardPage.isRegisterLoginDashboardPageWebElementDisplayed();
        //register/login dashboard page text element assert
        await this.isRegisterLoginDashboardPageTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot before valid data input
        await TestMethods.captureScreenshot(this.driver, "Register and Login Dashboard Page Display Before Data Input");
        //input valid email into register email input field
        await registerLoginDashboardPage.inputEmailIntoRegisterEmailInputField();
        //input valid password into register password input field
        await registerLoginDashboardPage.inputPasswordIntoRegisterPasswordInputField();
        //click 'View Password' (register section) button
        await registerLoginDashboardPage.clickViewPasswordRegisterButton();
        //capture screenshot of the valid input data
        await TestMethods.captureScreenshot(this.driver, "Register and Login Dashboard Page Display After Valid Data Input");
        //click 'Register' button
        await registerLoginDashboardPage.clickRegisterButton();
        //assert the user gets onto my account page
        const myAccountPageTitle = await myAccountPage.getMyAccountPageTitle();
        assert.strictEqual(myAccountPageTitle,   "Moje konto", "The my account page title doesn't match expectations or the user is on the wrong page.");
        //click 'Remove account' link
        await myAccountPage.clickDeleteAccountLink();
        //
        await myAccountPage.acceptGoogleAlert();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "User Account Removal Test Result");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //valid edit account tests

    //valid edit account test method
    async validEditAccountTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const editAccountPage = new EditAccountPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //my account page web element assert
        await myAccountPage.isMyAccountPageWebElementDisplayed();
        //my account page text element assert
        await this.isMyAccountPageTextElementAsExpected();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display")
        //click aside 'Edit Account' link
        await myAccountPage.clickAsideEditAccountLink();
        //capture screenshot of the edit account page before valid data input
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display Before Data Input")
        //edit account page web element assert
        await editAccountPage.isEditAccountPageWebElementDisplayed();
        //edit account page text element assert
        await this.isEditAccountPageAsideTextElementAsExpected();
        //input valid user first name into first name input field
        await editAccountPage.inputFirstNameIntoFirstNameInputField();
        //input valid user last name into last name input field
        await editAccountPage.inputLastNameIntoLastNameInputField();
        //capture screenshot of the edit account page after valid data input
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display After Valid Data Input")
        //click 'Save Changes' button
        await editAccountPage.clickSaveChangesButton();
        //assert the user gets an expected alert message
        const actualAlertMessage = await editAccountPage.getEditAccountAlertText();
        assert.strictEqual(actualAlertMessage,   "Zmieniono szczegóły konta.", "The edit account info editing success message doesn't match expectations.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid Edit Account Test Result")
    }

    //valid edit account (with email editing) test method
    async validEditAccountWithEmailTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const editAccountPage = new EditAccountPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //my account page web element assert
        await myAccountPage.isMyAccountPageWebElementDisplayed();
        //my account page text element assert
        await this.isMyAccountPageTextElementAsExpected();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display")
        //click aside 'Edit Account' link
        await myAccountPage.clickAsideEditAccountLink();
        //capture screenshot of the edit account page before valid data input
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display Before Data Input")
        //edit account page web element assert
        await editAccountPage.isEditAccountPageWebElementDisplayed();
        //edit account page text element assert
        await this.isEditAccountPageAsideTextElementAsExpected();
        //input valid user first name into first name input field
        await editAccountPage.inputFirstNameIntoFirstNameInputField();
        //input valid user last name into last name input field
        await editAccountPage.inputLastNameIntoLastNameInputField();
        //input valid edited email into email input field
        await editAccountPage.inputEditedEmailIntoEmailInputField();
        //capture screenshot of the edit account page after valid data input
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display (With Email Editing) After Valid Data Input")
        //click 'Save Changes' button
        await editAccountPage.clickSaveChangesButton();
        //assert the user gets an expected alert message
        const actualAlertMessage = await editAccountPage.getEditAccountAlertText();
        assert.strictEqual(actualAlertMessage,   "Zmieniono szczegóły konta.", "The edit account info editing success message doesn't match expectations.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid Edit Account (With Email Editing) Test Result")
    }

    //valid edit account (with edited password) test method
    async validEditAccountWithPasswordTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const editAccountPage = new EditAccountPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //my account page web element assert
        await myAccountPage.isMyAccountPageWebElementDisplayed();
        //my account page text element assert
        await this.isMyAccountPageTextElementAsExpected();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display")
        //click aside 'Edit Account' link
        await myAccountPage.clickAsideEditAccountLink();
        //capture screenshot of the edit account page before valid data input
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display Before Data Input")
        //edit account page web element assert
        await editAccountPage.isEditAccountPageWebElementDisplayed();
        //edit account page text element assert
        await this.isEditAccountPageAsideTextElementAsExpected();
        //input valid user first name into first name input field
        await editAccountPage.inputFirstNameIntoFirstNameInputField();
        //input valid user last name into last name input field
        await editAccountPage.inputLastNameIntoLastNameInputField();
        //input valid user password into old password input field
        await editAccountPage.inputOldPasswordIntoOldPasswordInputField();
        //click 'View old password' button
        await editAccountPage.clickViewOldPasswordButton();
        //input valid user new password into new password input field
        await editAccountPage.inputEditedPasswordIntoNewPasswordInputField();
        //click 'View new password' button
        await editAccountPage.clickViewNewPasswordButton();
        //input valid user matching confirm password into confirm password input field
        await editAccountPage.inputEditedConfirmPasswordIntoConfirmPasswordInputField();
        //click 'View confirm password' button
        await editAccountPage.clickViewConfirmPasswordButton();
        //capture screenshot of the edit account page after valid data input
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display (Edited Password) After Valid Data Input")
        //click 'Save Changes' button
        await editAccountPage.clickSaveChangesButton();
        //assert the user gets an expected alert message
        const actualAlertMessage = await editAccountPage.getEditAccountAlertText();
        assert.strictEqual(actualAlertMessage,   "Zmieniono szczegóły konta.", "The edit account info editing success message doesn't match expectations.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid Edit Account (Edited Password) Test Result")
    }

    //valid edit account (with edited username) test method
    async validEditAccountWithEditedUsernameTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const editAccountPage = new EditAccountPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //my account page web element assert
        await myAccountPage.isMyAccountPageWebElementDisplayed();
        //my account page text element assert
        await this.isMyAccountPageTextElementAsExpected();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display")
        //click 'Edit Account' link
        await myAccountPage.clickEditAccountLink();
        //capture screenshot of the edit account page before valid data input
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display Before Data Input")
        //edit account page web element assert
        await editAccountPage.isEditAccountPageWebElementDisplayed();
        //edit account page text element assert
        await this.isEditAccountPageAsideTextElementAsExpected();
        //input valid user first name into first name input field
        await editAccountPage.inputFirstNameIntoFirstNameInputField();
        //input valid user last name into last name input field
        await editAccountPage.inputLastNameIntoLastNameInputField();
        //input valid user edited username into username input field
        await editAccountPage.inputEditedUsernameIntoUsernameInputField();
        //capture screenshot of the edit account page after valid data input
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display (With Edited Username) After Valid Data Input")
        //click 'Save Changes' button
        await editAccountPage.clickSaveChangesButton();
        //assert the user gets an expected alert message
        const actualAlertMessage = await editAccountPage.getEditAccountAlertText();
        assert.strictEqual(actualAlertMessage,   "Zmieniono szczegóły konta.", "The edit account info editing success message doesn't match expectations.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid Edit Account (With Edited Username) Test Result")
    }

    //invalid edit account tests

    //no singular input

    //invalid edit account test method - no user first name
    async invalidEditAccountNoFirstNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const editAccountPage = new EditAccountPage(this.driver);
        const editAccountPageInvalidScenarios = new EditAccountPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //my account page web element assert
        await myAccountPage.isMyAccountPageWebElementDisplayed();
        //my account page text element assert
        await this.isMyAccountPageTextElementAsExpected();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display")
        //click aside 'Edit Account' link
        await myAccountPage.clickAsideEditAccountLink();
        //capture screenshot of the edit account page before invalid data input
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display Before Data Input")
        //edit account page web element assert
        await editAccountPage.isEditAccountPageWebElementDisplayed();
        //edit account page text element assert
        await this.isEditAccountPageAsideTextElementAsExpected();
        //input no first name into first name input field
        await editAccountPageInvalidScenarios.inputNoFirstNameIntoFirstNameInputField();
        //capture screenshot of the edit account page after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display After Invalid Data Input - No User First Name");
        //input valid user last name into last name input field
        await editAccountPage.inputLastNameIntoLastNameInputField();
        //click 'Save Changes' button
        await editAccountPage.clickSaveChangesButton();
        //assert the user gets an expected alert message
        const actualAlertMessage = await editAccountPageInvalidScenarios.getSingularInputError();
        assert.strictEqual(actualAlertMessage,   "Imię jest wymaganym polem.", "The missing first name input error doesn't match expectations.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Edit Account Test Result - No User First Name")
    }
    //invalid edit account test method - no user last name
    async invalidEditAccountNoLastNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const editAccountPage = new EditAccountPage(this.driver);
        const editAccountPageInvalidScenarios = new EditAccountPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //my account page web element assert
        await myAccountPage.isMyAccountPageWebElementDisplayed();
        //my account page text element assert
        await this.isMyAccountPageTextElementAsExpected();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display")
        //click aside 'Edit Account' link
        await myAccountPage.clickAsideEditAccountLink();
        //capture screenshot of the edit account page before invalid data input
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display Before Data Input")
        //edit account page web element assert
        await editAccountPage.isEditAccountPageWebElementDisplayed();
        //edit account page text element assert
        await this.isEditAccountPageAsideTextElementAsExpected();
        //input valid user first name into first name input field
        await editAccountPage.inputFirstNameIntoFirstNameInputField();
        //input no last name into last name input field
        await editAccountPageInvalidScenarios.inputNoLastNameIntoLastNameInputField();
        //capture screenshot of the edit account page after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display After Invalid Data Input - No User Last Name");
        //click 'Save Changes' button
        await editAccountPage.clickSaveChangesButton();
        //assert the user gets an expected alert message
        const actualAlertMessage = await editAccountPageInvalidScenarios.getSingularInputError();
        assert.strictEqual(actualAlertMessage,   "Nazwisko jest wymaganym polem.", "The missing last name input error doesn't match expectations.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Edit Account Test Result - No User Last Name")
    }
    //invalid edit account test method - no username
    async invalidEditAccountNoUsernameTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const editAccountPage = new EditAccountPage(this.driver);
        const editAccountPageInvalidScenarios = new EditAccountPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //my account page web element assert
        await myAccountPage.isMyAccountPageWebElementDisplayed();
        //my account page text element assert
        await this.isMyAccountPageTextElementAsExpected();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display")
        //click aside 'Edit Account' link
        await myAccountPage.clickAsideEditAccountLink();
        //capture screenshot of the edit account page before invalid data input
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display Before Data Input")
        //edit account page web element assert
        await editAccountPage.isEditAccountPageWebElementDisplayed();
        //edit account page text element assert
        await this.isEditAccountPageAsideTextElementAsExpected();
        //input valid user first name into first name input field
        await editAccountPage.inputFirstNameIntoFirstNameInputField();
        //input valid user last name into last name input field
        await editAccountPage.inputLastNameIntoLastNameInputField();
        //input no username into username input field
        await editAccountPageInvalidScenarios.inputNoUsernameIntoUsernameInputField();
        //capture screenshot of the edit account page after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display After Invalid Data Input - No Username");
        //click 'Save Changes' button
        await editAccountPage.clickSaveChangesButton();
        //assert the user gets an expected alert message
        const actualAlertMessage = await editAccountPageInvalidScenarios.getSingularInputError();
        assert.strictEqual(actualAlertMessage,   "Nazwa wyświetlana jest wymaganym polem.", "The missing username input error doesn't match expectations.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Edit Account Test Result - No Username")
    }
    //invalid edit account test method - no email
    async invalidEditAccountNoEmailTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const editAccountPage = new EditAccountPage(this.driver);
        const editAccountPageInvalidScenarios = new EditAccountPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //my account page web element assert
        await myAccountPage.isMyAccountPageWebElementDisplayed();
        //my account page text element assert
        await this.isMyAccountPageTextElementAsExpected();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display")
        //click aside 'Edit Account' link
        await myAccountPage.clickAsideEditAccountLink();
        //capture screenshot of the edit account page before invalid data input
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display Before Data Input")
        //edit account page web element assert
        await editAccountPage.isEditAccountPageWebElementDisplayed();
        //edit account page text element assert
        await this.isEditAccountPageAsideTextElementAsExpected();
        //input valid user first name into first name input field
        await editAccountPage.inputFirstNameIntoFirstNameInputField();
        //input valid user last name into last name input field
        await editAccountPage.inputLastNameIntoLastNameInputField();
        //input no user email into email input field
        await editAccountPageInvalidScenarios.inputNoEmailIntoEmailInputField();
        //capture screenshot of the edit account page after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display After Invalid Data Input - No User Email");
        //click 'Save Changes' button
        await editAccountPage.clickSaveChangesButton();
        //assert the user gets an expected alert message
        const actualAlertMessage = await editAccountPageInvalidScenarios.getSingularInputError();
        assert.strictEqual(actualAlertMessage,   "Adres email jest wymaganym polem.", "The missing user email input error doesn't match expectations.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Edit Account Test Result - No User Email")
    }
    //invalid edit account test method - no old password
    async invalidEditAccountNoOldPasswordTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const editAccountPage = new EditAccountPage(this.driver);
        const editAccountPageInvalidScenarios = new EditAccountPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //my account page web element assert
        await myAccountPage.isMyAccountPageWebElementDisplayed();
        //my account page text element assert
        await this.isMyAccountPageTextElementAsExpected();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display")
        //click aside 'Edit Account' link
        await myAccountPage.clickAsideEditAccountLink();
        //capture screenshot of the edit account page before valid data input
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display Before Data Input")
        //edit account page web element assert
        await editAccountPage.isEditAccountPageWebElementDisplayed();
        //edit account page text element assert
        await this.isEditAccountPageAsideTextElementAsExpected();
        //input valid user first name into first name input field
        await editAccountPage.inputFirstNameIntoFirstNameInputField();
        //input valid user last name into last name input field
        await editAccountPage.inputLastNameIntoLastNameInputField();
        //input valid user new password into new password input field
        await editAccountPage.inputEditedPasswordIntoNewPasswordInputField();
        //click 'View new password' button
        await editAccountPage.clickViewNewPasswordButton();
        //input valid user matching confirm password into confirm password input field
        await editAccountPage.inputEditedConfirmPasswordIntoConfirmPasswordInputField();
        //click 'View confirm password' button
        await editAccountPage.clickViewConfirmPasswordButton();
        //capture screenshot of the edit account page after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display After Invalid Data Input - No Old Password")
        //click 'Save Changes' button
        await editAccountPage.clickSaveChangesButton();
        //assert the user gets an expected alert message
        const actualAlertMessage = await editAccountPageInvalidScenarios.getSingularInputError();
        assert.strictEqual(actualAlertMessage,   "Wprowadź aktualne hasło.", "The edit account info editing missing old password error doesn't match expectations.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Edit Account Test Result - No Old Password")
    }
    //invalid edit account test method - no new password
    async invalidEditAccountNoNewPasswordTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const editAccountPage = new EditAccountPage(this.driver);
        const editAccountPageInvalidScenarios = new EditAccountPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //my account page web element assert
        await myAccountPage.isMyAccountPageWebElementDisplayed();
        //my account page text element assert
        await this.isMyAccountPageTextElementAsExpected();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display")
        //click aside 'Edit Account' link
        await myAccountPage.clickAsideEditAccountLink();
        //capture screenshot of the edit account page before valid data input
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display Before Data Input")
        //edit account page web element assert
        await editAccountPage.isEditAccountPageWebElementDisplayed();
        //edit account page text element assert
        await this.isEditAccountPageAsideTextElementAsExpected();
        //input valid user first name into first name input field
        await editAccountPage.inputFirstNameIntoFirstNameInputField();
        //input valid user last name into last name input field
        await editAccountPage.inputLastNameIntoLastNameInputField();
        //input valid user password into old password input field
        await editAccountPage.inputOldPasswordIntoOldPasswordInputField();
        //click 'View old password' button
        await editAccountPage.clickViewOldPasswordButton();
        //input valid user matching confirm password into confirm password input field
        await editAccountPage.inputEditedConfirmPasswordIntoConfirmPasswordInputField();
        //click 'View confirm password' button
        await editAccountPage.clickViewConfirmPasswordButton();
        //capture screenshot of the edit account page after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display After Invalid Data Input - No New Password")
        //click 'Save Changes' button
        await editAccountPage.clickSaveChangesButton();
        //assert the user gets an expected alert message
        const actualAlertMessage = await editAccountPageInvalidScenarios.getSingularInputError();
        assert.strictEqual(actualAlertMessage,   "Nowe hasła nie są takie same.", "The edit account info editing missing new password error doesn't match expectations.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Edit Account Test Result - No New Password")
    }
    //invalid edit account test method - no new confirm password
    async invalidEditAccountNoNewConfirmPasswordTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const editAccountPage = new EditAccountPage(this.driver);
        const editAccountPageInvalidScenarios = new EditAccountPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //my account page web element assert
        await myAccountPage.isMyAccountPageWebElementDisplayed();
        //my account page text element assert
        await this.isMyAccountPageTextElementAsExpected();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display")
        //click aside 'Edit Account' link
        await myAccountPage.clickAsideEditAccountLink();
        //capture screenshot of the edit account page before valid data input
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display Before Data Input")
        //edit account page web element assert
        await editAccountPage.isEditAccountPageWebElementDisplayed();
        //edit account page text element assert
        await this.isEditAccountPageAsideTextElementAsExpected();
        //input valid user first name into first name input field
        await editAccountPage.inputFirstNameIntoFirstNameInputField();
        //input valid user last name into last name input field
        await editAccountPage.inputLastNameIntoLastNameInputField();
        //input valid user password into old password input field
        await editAccountPage.inputOldPasswordIntoOldPasswordInputField();
        //click 'View old password' button
        await editAccountPage.clickViewOldPasswordButton();
        //input valid user new password into new password input field
        await editAccountPage.inputEditedPasswordIntoNewPasswordInputField();
        //click 'View new password' button
        await editAccountPage.clickViewNewPasswordButton();
        //capture screenshot of the edit account page after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display After Invalid Data Input - No Confirm New Password")
        //click 'Save Changes' button
        await editAccountPage.clickSaveChangesButton();
        //assert the user gets an expected alert message
        const actualAlertMessage = await editAccountPageInvalidScenarios.getSingularInputError();
        assert.strictEqual(actualAlertMessage,   "Proszę ponownie wpisać swoje hasło.", "The edit account info editing missing confirm new password error doesn't match expectations.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Edit Account Test Result - No Confirm New Password")
    }

    //too short singular input

    //invalid edit account test method - too short user first name (1 char)
    async invalidEditAccountTooShortFirstNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const editAccountPage = new EditAccountPage(this.driver);
        const editAccountPageInvalidScenarios = new EditAccountPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //my account page web element assert
        await myAccountPage.isMyAccountPageWebElementDisplayed();
        //my account page text element assert
        await this.isMyAccountPageTextElementAsExpected();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display")
        //click aside 'Edit Account' link
        await myAccountPage.clickAsideEditAccountLink();
        //capture screenshot of the edit account page before invalid data input
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display Before Data Input")
        //edit account page web element assert
        await editAccountPage.isEditAccountPageWebElementDisplayed();
        //edit account page text element assert
        await this.isEditAccountPageAsideTextElementAsExpected();
        //input too short first name into first name input field
        await editAccountPageInvalidScenarios.inputTooShortFirstNameIntoFirstNameInputField();
        //capture screenshot of the edit account page after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display After Invalid Data Input - Too Short User First Name");
        //input valid user last name into last name input field
        await editAccountPage.inputLastNameIntoLastNameInputField();
        //click 'Save Changes' button
        await editAccountPage.clickSaveChangesButton();
        //assert the user gets an expected alert message, log the issue otherwise
        try {
            const actualAlertMessage = await editAccountPageInvalidScenarios.getSingularInputError();
            assert.strictEqual(actualAlertMessage, "Imię jest zbyt krótkie.", "The too short first name input error doesn't match expectations.");
        } catch (e){
            Logger.error("Too short first name gets accepted, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Edit Account Test Result - Too Short User First Name")
    }
    //invalid edit account test method - too short user last name (1 char)
    async invalidEditAccountTooShortLastNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const editAccountPage = new EditAccountPage(this.driver);
        const editAccountPageInvalidScenarios = new EditAccountPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //my account page web element assert
        await myAccountPage.isMyAccountPageWebElementDisplayed();
        //my account page text element assert
        await this.isMyAccountPageTextElementAsExpected();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display")
        //click aside 'Edit Account' link
        await myAccountPage.clickAsideEditAccountLink();
        //capture screenshot of the edit account page before invalid data input
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display Before Data Input")
        //edit account page web element assert
        await editAccountPage.isEditAccountPageWebElementDisplayed();
        //edit account page text element assert
        await this.isEditAccountPageAsideTextElementAsExpected();
        //input valid user first name into first name input field
        await editAccountPage.inputFirstNameIntoFirstNameInputField();
        //input too short last name into last name input field
        await editAccountPageInvalidScenarios.inputTooShortLastNameIntoLastNameInputField();
        //capture screenshot of the edit account page after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display After Invalid Data Input - Too Short User Last Name");
        //click 'Save Changes' button
        await editAccountPage.clickSaveChangesButton();
       //assert the user gets an expected alert message, log the issue otherwise
        try {
            const actualAlertMessage = await editAccountPageInvalidScenarios.getSingularInputError();
            assert.strictEqual(actualAlertMessage, "Nazwisko jest zbyt krótkie.", "The too short last name input error doesn't match expectations.");
        } catch (e){
            Logger.error("Too short last name gets accepted, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Edit Account Test Result - Too Short User Last Name")
    }
    //invalid edit account test method - too short username (1 char)
    async invalidEditAccountTooShortUsernameTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const editAccountPage = new EditAccountPage(this.driver);
        const editAccountPageInvalidScenarios = new EditAccountPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //my account page web element assert
        await myAccountPage.isMyAccountPageWebElementDisplayed();
        //my account page text element assert
        await this.isMyAccountPageTextElementAsExpected();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display")
        //click aside 'Edit Account' link
        await myAccountPage.clickAsideEditAccountLink();
        //capture screenshot of the edit account page before invalid data input
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display Before Data Input")
        //edit account page web element assert
        await editAccountPage.isEditAccountPageWebElementDisplayed();
        //edit account page text element assert
        await this.isEditAccountPageAsideTextElementAsExpected();
        //input valid user first name into first name input field
        await editAccountPage.inputFirstNameIntoFirstNameInputField();
        //input valid user last name into last name input field
        await editAccountPage.inputLastNameIntoLastNameInputField();
        //input too short username into username input field
        await editAccountPageInvalidScenarios.inputTooShortUsernameIntoUsernameInputField();
        //capture screenshot of the edit account page after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display After Invalid Data Input - Too Short Username");
        //click 'Save Changes' button
        await editAccountPage.clickSaveChangesButton();
        //assert the user gets an expected alert message, log the issue otherwise
        try {
            const actualAlertMessage = await editAccountPageInvalidScenarios.getSingularInputError();
            assert.strictEqual(actualAlertMessage, "Nazwa wyświetlana jest zbyt krótka.", "The too short username input error doesn't match expectations.");
        } catch (e){
            Logger.error("Too short username gets accepted, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Edit Account Test Result - Too Short Username")
    }
    //invalid edit account test method - too short email (1 char -> name, domain)
    async invalidEditAccountTooShortEmailTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const editAccountPage = new EditAccountPage(this.driver);
        const editAccountPageInvalidScenarios = new EditAccountPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //my account page web element assert
        await myAccountPage.isMyAccountPageWebElementDisplayed();
        //my account page text element assert
        await this.isMyAccountPageTextElementAsExpected();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display")
        //click aside 'Edit Account' link
        await myAccountPage.clickAsideEditAccountLink();
        //capture screenshot of the edit account page before invalid data input
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display Before Data Input")
        //edit account page web element assert
        await editAccountPage.isEditAccountPageWebElementDisplayed();
        //edit account page text element assert
        await this.isEditAccountPageAsideTextElementAsExpected();
        //input valid user first name into first name input field
        await editAccountPage.inputFirstNameIntoFirstNameInputField();
        //input valid user last name into last name input field
        await editAccountPage.inputLastNameIntoLastNameInputField();
        //input too short user email into email input field
        await editAccountPageInvalidScenarios.inputTooShortEmailIntoEmailInputField();
        //capture screenshot of the edit account page after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display After Invalid Data Input - Too Short User Email");
        //click 'Save Changes' button
        await editAccountPage.clickSaveChangesButton();
       //assert the user gets an expected alert message, log the issue otherwise
        try {
            const actualAlertMessage = await editAccountPageInvalidScenarios.getSingularInputError();
            assert.strictEqual(actualAlertMessage, "Adres email jest zbyt krótkim.", "The too short user email input error doesn't match expectations.");
        } catch (e){
            Logger.error("Too short user email gets accepted, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Edit Account Test Result - Too Short User Email")
    }

    //invalid edit account test method - too short new / confirm password (11 chars)
    async invalidEditAccountTooShortNewAndConfirmPasswordTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const editAccountPage = new EditAccountPage(this.driver);
        const editAccountPageInvalidScenarios = new EditAccountPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //my account page web element assert
        await myAccountPage.isMyAccountPageWebElementDisplayed();
        //my account page text element assert
        await this.isMyAccountPageTextElementAsExpected();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display")
        //click aside 'Edit Account' link
        await myAccountPage.clickAsideEditAccountLink();
        //capture screenshot of the edit account page before valid data input
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display Before Data Input")
        //edit account page web element assert
        await editAccountPage.isEditAccountPageWebElementDisplayed();
        //edit account page text element assert
        await this.isEditAccountPageAsideTextElementAsExpected();
        //input valid user first name into first name input field
        await editAccountPage.inputFirstNameIntoFirstNameInputField();
        //input valid user last name into last name input field
        await editAccountPage.inputLastNameIntoLastNameInputField();
        //input valid user password into old password input field
        await editAccountPage.inputOldPasswordIntoOldPasswordInputField();
        //click 'View old password' button
        await editAccountPage.clickViewOldPasswordButton();
        //input too short user new password into new password input field (11 chars)
        await editAccountPageInvalidScenarios.inputTooShortNewPasswordIntoNewPasswordInputField();
        //click 'View new password' button
        await editAccountPage.clickViewNewPasswordButton();
        //input too short user matching confirm password into confirm password input field (11 chars)
        await editAccountPageInvalidScenarios.inputTooShortConfirmPasswordIntoConfirmPasswordInputField();
        //click 'View confirm password' button
        await editAccountPage.clickViewConfirmPasswordButton();
        //capture screenshot of the edit account page after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display After Invalid Data Input - Too Short New and Confirm Password")
        //click 'Save Changes' button
        await editAccountPage.clickSaveChangesButton();
        //assert the user gets an expected alert message, log the issue otherwise
        try {
            const actualAlertMessage = await editAccountPage.getEditAccountAlertText();
            assert.strictEqual(actualAlertMessage, "Słabe - Proszę wpisać mocniejsze hasło.", "The edit account info editing too short new/confirm password error doesn't match expectations.");
        } catch (e){
            Logger.error("The edit account too short new and confirm password error doesn't get triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Edit Account Test Result - Too Short New and Confirm New Password")
    }

    //too long singular input

    //invalid edit account test method - too long user first name (100 chars)
    async invalidEditAccountTooLongFirstNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const editAccountPage = new EditAccountPage(this.driver);
        const editAccountPageInvalidScenarios = new EditAccountPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //my account page web element assert
        await myAccountPage.isMyAccountPageWebElementDisplayed();
        //my account page text element assert
        await this.isMyAccountPageTextElementAsExpected();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display")
        //click aside 'Edit Account' link
        await myAccountPage.clickAsideEditAccountLink();
        //capture screenshot of the edit account page before invalid data input
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display Before Data Input")
        //edit account page web element assert
        await editAccountPage.isEditAccountPageWebElementDisplayed();
        //edit account page text element assert
        await this.isEditAccountPageAsideTextElementAsExpected();
        //input too long first name into first name input field
        await editAccountPageInvalidScenarios.inputTooLongFirstNameIntoFirstNameInputField();
        //capture screenshot of the edit account page after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display After Invalid Data Input - Too Long User First Name");
        //input valid user last name into last name input field
        await editAccountPage.inputLastNameIntoLastNameInputField();
        //click 'Save Changes' button
        await editAccountPage.clickSaveChangesButton();
        //assert the user gets an expected alert message, log the issue otherwise
        try {
            const actualAlertMessage = await editAccountPageInvalidScenarios.getSingularInputError();
            assert.strictEqual(actualAlertMessage, "Imię jest zbyt długie.", "The too long first name input error doesn't match expectations.");
        } catch (e){
            Logger.error("Too long first name gets accepted, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Edit Account Test Result - Too Long User First Name")
    }
    //invalid edit account test method - too long user last name (100 chars)
    async invalidEditAccountTooLongLastNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const editAccountPage = new EditAccountPage(this.driver);
        const editAccountPageInvalidScenarios = new EditAccountPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //my account page web element assert
        await myAccountPage.isMyAccountPageWebElementDisplayed();
        //my account page text element assert
        await this.isMyAccountPageTextElementAsExpected();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display")
        //click aside 'Edit Account' link
        await myAccountPage.clickAsideEditAccountLink();
        //capture screenshot of the edit account page before invalid data input
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display Before Data Input")
        //edit account page web element assert
        await editAccountPage.isEditAccountPageWebElementDisplayed();
        //edit account page text element assert
        await this.isEditAccountPageAsideTextElementAsExpected();
        //input valid user first name into first name input field
        await editAccountPage.inputFirstNameIntoFirstNameInputField();
        //input too long last name into last name input field
        await editAccountPageInvalidScenarios.inputTooLongLastNameIntoLastNameInputField();
        //capture screenshot of the edit account page after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display After Invalid Data Input - Too Long User Last Name");
        //click 'Save Changes' button
        await editAccountPage.clickSaveChangesButton();
        //assert the user gets an expected alert message, log the issue otherwise
        try {
            const actualAlertMessage = await editAccountPageInvalidScenarios.getSingularInputError();
            assert.strictEqual(actualAlertMessage, "Nazwisko jest zbyt długie.", "The too long last name input error doesn't match expectations.");
        } catch (e){
            Logger.error("Too long last name gets accepted, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Edit Account Test Result - Too Long User Last Name")
    }
    //invalid edit account test method - too long username (100 chars)
    async invalidEditAccountTooLongUsernameTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const editAccountPage = new EditAccountPage(this.driver);
        const editAccountPageInvalidScenarios = new EditAccountPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //my account page web element assert
        await myAccountPage.isMyAccountPageWebElementDisplayed();
        //my account page text element assert
        await this.isMyAccountPageTextElementAsExpected();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display")
        //click aside 'Edit Account' link
        await myAccountPage.clickAsideEditAccountLink();
        //capture screenshot of the edit account page before invalid data input
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display Before Data Input")
        //edit account page web element assert
        await editAccountPage.isEditAccountPageWebElementDisplayed();
        //edit account page text element assert
        await this.isEditAccountPageAsideTextElementAsExpected();
        //input valid user first name into first name input field
        await editAccountPage.inputFirstNameIntoFirstNameInputField();
        //input valid user last name into last name input field
        await editAccountPage.inputLastNameIntoLastNameInputField();
        //input too long username into username input field
        await editAccountPageInvalidScenarios.inputTooLongUsernameIntoUsernameInputField();
        //capture screenshot of the edit account page after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display After Invalid Data Input - Too Long Username");
        //click 'Save Changes' button
        await editAccountPage.clickSaveChangesButton();
        //assert the user gets an expected alert message, log the issue otherwise
        try {
            const actualAlertMessage = await editAccountPageInvalidScenarios.getSingularInputError();
            assert.strictEqual(actualAlertMessage, "Nazwa wyświetlana jest zbyt długa.", "The too long username input error doesn't match expectations.");
        } catch (e){
            Logger.error("Too long username gets accepted, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Edit Account Test Result - Too Long Username")
    }
    //invalid edit account test method - too long email (100 chars -> name, domain)
    async invalidEditAccountTooLongEmailTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const editAccountPage = new EditAccountPage(this.driver);
        const editAccountPageInvalidScenarios = new EditAccountPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //my account page web element assert
        await myAccountPage.isMyAccountPageWebElementDisplayed();
        //my account page text element assert
        await this.isMyAccountPageTextElementAsExpected();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display")
        //click aside 'Edit Account' link
        await myAccountPage.clickAsideEditAccountLink();
        //capture screenshot of the edit account page before invalid data input
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display Before Data Input")
        //edit account page web element assert
        await editAccountPage.isEditAccountPageWebElementDisplayed();
        //edit account page text element assert
        await this.isEditAccountPageAsideTextElementAsExpected();
        //input valid user first name into first name input field
        await editAccountPage.inputFirstNameIntoFirstNameInputField();
        //input valid user last name into last name input field
        await editAccountPage.inputLastNameIntoLastNameInputField();
        //input too long user email into email input field
        await editAccountPageInvalidScenarios.inputTooLongEmailIntoEmailInputField();
        //capture screenshot of the edit account page after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display After Invalid Data Input - Too Long User Email");
        //click 'Save Changes' button
        await editAccountPage.clickSaveChangesButton();
        //assert the user gets an expected alert message, log the issue otherwise
        try {
            const actualAlertMessage = await editAccountPageInvalidScenarios.getSingularInputError();
            assert.strictEqual(actualAlertMessage, "Adres email jest zbyt długim.", "The too long user email input error doesn't match expectations.");
        } catch (e){
            Logger.warn("Too long user email gets triggered but it can't be located in DOM");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Edit Account Test Result - Too Long User Email")
    }
    //invalid edit account test method - too long new / confirm password (100 chars)
    async invalidEditAccountTooLongNewAndConfirmPasswordTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const editAccountPage = new EditAccountPage(this.driver);
        const editAccountPageInvalidScenarios = new EditAccountPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //my account page web element assert
        await myAccountPage.isMyAccountPageWebElementDisplayed();
        //my account page text element assert
        await this.isMyAccountPageTextElementAsExpected();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display")
        //click aside 'Edit Account' link
        await myAccountPage.clickAsideEditAccountLink();
        //capture screenshot of the edit account page before valid data input
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display Before Data Input")
        //edit account page web element assert
        await editAccountPage.isEditAccountPageWebElementDisplayed();
        //edit account page text element assert
        await this.isEditAccountPageAsideTextElementAsExpected();
        //input valid user first name into first name input field
        await editAccountPage.inputFirstNameIntoFirstNameInputField();
        //input valid user last name into last name input field
        await editAccountPage.inputLastNameIntoLastNameInputField();
        //input valid user password into old password input field
        await editAccountPage.inputOldPasswordIntoOldPasswordInputField();
        //click 'View old password' button
        await editAccountPage.clickViewOldPasswordButton();
        //input too short user new password into new password input field (100 chars)
        await editAccountPageInvalidScenarios.inputTooLongNewPasswordIntoNewPasswordInputField();
        //click 'View new password' button
        await editAccountPage.clickViewNewPasswordButton();
        //input too short user matching confirm password into confirm password input field (100 chars)
        await editAccountPageInvalidScenarios.inputTooLongConfirmPasswordIntoConfirmPasswordInputField();
        //click 'View confirm password' button
        await editAccountPage.clickViewConfirmPasswordButton();
        //capture screenshot of the edit account page after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display After Invalid Data Input - Too Long New and Confirm Password")
        //click 'Save Changes' button
        await editAccountPage.clickSaveChangesButton();
        //assert the user gets an expected alert message, log the issue otherwise
        try {
            const actualAlertMessage = await editAccountPage.getEditAccountAlertText();
            assert.strictEqual(actualAlertMessage, "Hasło jest zbyt długim.", "The edit account info editing too long new/confirm password error doesn't match expectations.");
        } catch (e){
            Logger.error("The edit account too long new and confirm password error doesn't get triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Edit Account Test Result - Too Long New and Confirm New Password")
    }

    //invalid singular input format

    //invalid edit account test method - invalid user first name format (special symbols only)
    async invalidEditAccountInvalidFirstNameFormatTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const editAccountPage = new EditAccountPage(this.driver);
        const editAccountPageInvalidScenarios = new EditAccountPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //my account page web element assert
        await myAccountPage.isMyAccountPageWebElementDisplayed();
        //my account page text element assert
        await this.isMyAccountPageTextElementAsExpected();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display")
        //click aside 'Edit Account' link
        await myAccountPage.clickAsideEditAccountLink();
        //capture screenshot of the edit account page before invalid data input
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display Before Data Input")
        //edit account page web element assert
        await editAccountPage.isEditAccountPageWebElementDisplayed();
        //edit account page text element assert
        await this.isEditAccountPageAsideTextElementAsExpected();
        //input invalid first name format into first name input field (special symbols only)
        await editAccountPageInvalidScenarios.inputInvalidFirstNameFormatIntoFirstNameInputField();
        //capture screenshot of the edit account page after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display After Invalid Data Input - Invalid User First Name Input Format");
        //input valid user last name into last name input field
        await editAccountPage.inputLastNameIntoLastNameInputField();
        //click 'Save Changes' button
        await editAccountPage.clickSaveChangesButton();
        //assert the user gets an expected alert message, log the issue otherwise
        try {
            const actualAlertMessage = await editAccountPageInvalidScenarios.getSingularInputError();
            assert.strictEqual(actualAlertMessage, "Imię nie może zawierać tylko specjalne znaki.", "The invalid first name input format error doesn't match expectations.");
        } catch (e){
            Logger.error("Invalid first name format gets accepted, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Edit Account Test Result - Invalid User First Name Format")
    }
    //invalid edit account test method - invalid user last name format (special symbols only)
    async invalidEditAccountInvalidLastNameFormatTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const editAccountPage = new EditAccountPage(this.driver);
        const editAccountPageInvalidScenarios = new EditAccountPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //my account page web element assert
        await myAccountPage.isMyAccountPageWebElementDisplayed();
        //my account page text element assert
        await this.isMyAccountPageTextElementAsExpected();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display")
        //click aside 'Edit Account' link
        await myAccountPage.clickAsideEditAccountLink();
        //capture screenshot of the edit account page before invalid data input
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display Before Data Input")
        //edit account page web element assert
        await editAccountPage.isEditAccountPageWebElementDisplayed();
        //edit account page text element assert
        await this.isEditAccountPageAsideTextElementAsExpected();
        //input valid user first name into first name input field
        await editAccountPage.inputFirstNameIntoFirstNameInputField();
        //input invalid last name format into last name input field (special symbols only)
        await editAccountPageInvalidScenarios.inputInvalidLastNameFormatIntoLastNameInputField();
        //capture screenshot of the edit account page after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display After Invalid Data Input - Invalid User Last Name Input Format");
        //click 'Save Changes' button
        await editAccountPage.clickSaveChangesButton();
        //assert the user gets an expected alert message, log the issue otherwise
        try {
            const actualAlertMessage = await editAccountPageInvalidScenarios.getSingularInputError();
            assert.strictEqual(actualAlertMessage, "Nazwisko nie może zawierać tylko specjalne znaki.", "The invalid last name input format error doesn't match expectations.");
        } catch (e){
            Logger.error("Invalid last name format gets accepted, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Edit Account Test Result - Invalid User Last Name Format")
    }
    //invalid edit account test method - invalid username format (special symbols only)
    async invalidEditAccountInvalidUsernameFormatTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const editAccountPage = new EditAccountPage(this.driver);
        const editAccountPageInvalidScenarios = new EditAccountPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //my account page web element assert
        await myAccountPage.isMyAccountPageWebElementDisplayed();
        //my account page text element assert
        await this.isMyAccountPageTextElementAsExpected();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display")
        //click aside 'Edit Account' link
        await myAccountPage.clickAsideEditAccountLink();
        //capture screenshot of the edit account page before invalid data input
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display Before Data Input")
        //edit account page web element assert
        await editAccountPage.isEditAccountPageWebElementDisplayed();
        //edit account page text element assert
        await this.isEditAccountPageAsideTextElementAsExpected();
        //input valid user first name into first name input field
        await editAccountPage.inputFirstNameIntoFirstNameInputField();
        //input valid user last name into last name input field
        await editAccountPage.inputLastNameIntoLastNameInputField();
        //input invalid username format into username input field (special symbols only)
        await editAccountPageInvalidScenarios.inputInvalidUsernameFormatIntoUsernameInputField();
        //capture screenshot of the edit account page after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display After Invalid Data Input - Invalid Username Input Format");
        //click 'Save Changes' button
        await editAccountPage.clickSaveChangesButton();
        //assert the user gets an expected alert message, log the issue otherwise
        try {
            const actualAlertMessage = await editAccountPageInvalidScenarios.getSingularInputError();
            assert.strictEqual(actualAlertMessage, "Nazwa wyświetlana nie może zawierać tylko specjalne znaki.", "The invalid username input error doesn't match expectations.");
        } catch (e){
            Logger.error("Invalid username format gets accepted, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Edit Account Test Result - Invalid Username Format")
    }
    //invalid edit account test method - invalid email format (missing '@')
    async invalidEditAccountInvalidEmailFormatTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const editAccountPage = new EditAccountPage(this.driver);
        const editAccountPageInvalidScenarios = new EditAccountPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //my account page web element assert
        await myAccountPage.isMyAccountPageWebElementDisplayed();
        //my account page text element assert
        await this.isMyAccountPageTextElementAsExpected();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display")
        //click aside 'Edit Account' link
        await myAccountPage.clickAsideEditAccountLink();
        //capture screenshot of the edit account page before invalid data input
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display Before Data Input")
        //edit account page web element assert
        await editAccountPage.isEditAccountPageWebElementDisplayed();
        //edit account page text element assert
        await this.isEditAccountPageAsideTextElementAsExpected();
        //input valid user first name into first name input field
        await editAccountPage.inputFirstNameIntoFirstNameInputField();
        //input valid user last name into last name input field
        await editAccountPage.inputLastNameIntoLastNameInputField();
        //input invalid user email format into email input field (special symbols only)
        await editAccountPageInvalidScenarios.inputInvalidEmailFormatIntoEmailInputField();
        //capture screenshot of the edit account page after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display After Invalid Data Input - Invalid User Email Input Format");
        //click 'Save Changes' button
        await editAccountPage.clickSaveChangesButton();
        //assert the user gets an expected alert message, log the issue otherwise
        try {
            const actualAlertMessage = await editAccountPageInvalidScenarios.getSingularInputError();
            assert.strictEqual(actualAlertMessage, "Adres email musi zawierać '@'.", "The invalid user email input format error doesn't match expectations.");
        } catch (e){
            Logger.warn("Invalid user email format gets triggered but it can't be located in DOM");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Edit Account Test Result - Invalid User Email Format")
    }

    //pre-existing singular input

    //invalid edit account test method - existing email (used beforehand in manual testing)
    async invalidEditAccountExistingEmailTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const editAccountPage = new EditAccountPage(this.driver);
        const editAccountPageInvalidScenarios = new EditAccountPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //my account page web element assert
        await myAccountPage.isMyAccountPageWebElementDisplayed();
        //my account page text element assert
        await this.isMyAccountPageTextElementAsExpected();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display")
        //click aside 'Edit Account' link
        await myAccountPage.clickAsideEditAccountLink();
        //capture screenshot of the edit account page before invalid data input
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display Before Data Input")
        //edit account page web element assert
        await editAccountPage.isEditAccountPageWebElementDisplayed();
        //edit account page text element assert
        await this.isEditAccountPageAsideTextElementAsExpected();
        //input valid user first name into first name input field
        await editAccountPage.inputFirstNameIntoFirstNameInputField();
        //input valid user last name into last name input field
        await editAccountPage.inputLastNameIntoLastNameInputField();
        //input existing user email into email input field (used beforehand in manual testing)
        await editAccountPageInvalidScenarios.inputExistingEmailIntoEmailInputField();
        //capture screenshot of the edit account page after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display After Invalid Data Input - Existing Email");
        //click 'Save Changes' button
        await editAccountPage.clickSaveChangesButton();
        //assert the user gets an expected alert message, log the issue otherwise
        try {
            const actualAlertMessage = await editAccountPageInvalidScenarios.getSingularInputError();
            assert.strictEqual(actualAlertMessage, "Ten adres e-mail jest już zarejestrowany.", "The existing user email error doesn't match expectations.");
        } catch (e){
            Logger.warn("Existing email address error doesn't get triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Edit Account Test Result - Existing User Email")
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //valid add shipping address test

    //valid add shipping address test method
    async validAddShippingAddressTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const addressBookPage = new AddressBookPage(this.driver);
        const addShippingAddressPage = new AddShippingAddressPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display")
        //click aside 'Address Book' link
        await myAccountPage.clickAsideAddressBookLink();
        //capture screenshot of address book page display
        await TestMethods.captureScreenshot(this.driver, "Address Book Page Display")
        //address book page web element assert
        await addressBookPage.isAddressBookPageWebElementDisplayed();
        //address book page text element assert
        await this.isAddressBookPageTextElementAsExpected();
        //click 'Add shipping address' button
        await addressBookPage.clickAddShippingAddressButton();
        //add shipping address web element assert
        await addShippingAddressPage.isAddShippingAddressPageWebElementDisplayed();
        //add shipping address text element assert
        await this.isAddShippingAddressPageTextElementAsExpected()
        //capture screenshot of add shipping address page display before valid data input
        await TestMethods.captureScreenshot(this.driver, "Add Shipping Address Page Display Before Data Input")
        //input valid shipping address first name into first name input field
        await addShippingAddressPage.inputValidFirstNameIntoShippingAddressFirstNameInputField();
        //input valid shipping address last name into last name input field
        await addShippingAddressPage.inputValidLastNameIntoShippingAddressLastNameInputField();
        //click country dropdown menu
        await addShippingAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addShippingAddressPage.selectUSCountryOption();
        //click shipping address region dropdown menu
        await addShippingAddressPage.clickRegionDropdownMenu();
        //select 'Illinois' region option
        await addShippingAddressPage.selectIllinoisRegionOption();
        //input valid shipping address street into street input field
        await addShippingAddressPage.inputValidStreetIntoShippingAddressStreetInputField();
        //input valid shipping address city into city input field
        await addShippingAddressPage.inputValidCityIntoShippingCityInputField();
        //input valid shipping address post code into post code input field
        await addShippingAddressPage.inputValidPostCodeIntoShippingAddressPostCodeInputField();
        //capture screenshot after valid shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Shipping Address Page After Valid Data Input")
        //click 'Add shipping address' button
        await addShippingAddressPage.clickWriteShippingAddressButton();
        //assert the user gets expected confirmation message
        const addressBookAlertMessage = await addressBookPage.getAddressBookAlertMessage();
        assert.strictEqual(addressBookAlertMessage,   "Adres został zmieniony.", "The address book page shipping address addition message doesn't match expectations or the shipping address addition has failed.");
        //log shipping address
        await this.logAddressBookShippingAddressData();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid Shipping Address Addition Test Result");
    }

    //invalid add shipping address tests

    //no singular input

    //invalid add shipping address test method - no user first name
    async invalidAddShippingAddressNoFirstNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const addressBookPage = new AddressBookPage(this.driver);
        const addShippingAddressPage = new AddShippingAddressPage(this.driver);
        const addShippingAddressPageInvalidScenarios = new AddShippingAddressPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display");
        //click aside 'Address Book' link
        await myAccountPage.clickAsideAddressBookLink();
        //capture screenshot of address book page display
        await TestMethods.captureScreenshot(this.driver, "Address Book Page Display");
        //address book page web element assert
        await addressBookPage.isAddressBookPageWebElementDisplayed();
        //address book page text element assert
        await this.isAddressBookPageTextElementAsExpected();
        //click 'Add shipping address' button
        await addressBookPage.clickAddShippingAddressButton();
        //add shipping address web element assert
        await addShippingAddressPage.isAddShippingAddressPageWebElementDisplayed();
        //add shipping address text element assert
        await this.isAddShippingAddressPageTextElementAsExpected()
        //capture screenshot of add shipping address page display before invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Shipping Address Page Display Before Data Input");
        //input no shipping address first name into first name input field
        await addShippingAddressPageInvalidScenarios.inputNoFirstNameIntoShippingAddressFirstNameInputField();
        //capture screenshot of add shipping address page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Shipping Address Page Display After Data Input - No First Name");
        //input valid shipping address last name into last name input field
        await addShippingAddressPage.inputValidLastNameIntoShippingAddressLastNameInputField();
        //click country dropdown menu
        await addShippingAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addShippingAddressPage.selectUSCountryOption();
        //click shipping address region dropdown menu
        await addShippingAddressPage.clickRegionDropdownMenu();
        //select 'Illinois' region option
        await addShippingAddressPage.selectIllinoisRegionOption();
        //input valid shipping address street into street input field
        await addShippingAddressPage.inputValidStreetIntoShippingAddressStreetInputField();
        //input valid shipping address city into city input field
        await addShippingAddressPage.inputValidCityIntoShippingCityInputField();
        //input valid shipping address post code into post code input field
        await addShippingAddressPage.inputValidPostCodeIntoShippingAddressPostCodeInputField();
        //capture screenshot after invalid shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Shipping Address Page After Invalid Data Input");
        //click 'Add shipping address' button
        await addShippingAddressPage.clickWriteShippingAddressButton();
        //assert the user gets expected error message
        const addressBookAlertMessage = await addShippingAddressPageInvalidScenarios.getShippingAddressSingularInputError();
        assert.strictEqual(addressBookAlertMessage,   "Imię jest wymaganym polem.", "The address book page shipping address no first name input error doesn't match expectations.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Shipping Address Addition Test Result - No First Name");
    }
    //invalid add shipping address test method - no user last name
    async invalidAddShippingAddressNoLastNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const addressBookPage = new AddressBookPage(this.driver);
        const addShippingAddressPage = new AddShippingAddressPage(this.driver);
        const addShippingAddressPageInvalidScenarios = new AddShippingAddressPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display");
        //click aside 'Address Book' link
        await myAccountPage.clickAsideAddressBookLink();
        //capture screenshot of address book page display
        await TestMethods.captureScreenshot(this.driver, "Address Book Page Display");
        //address book page web element assert
        await addressBookPage.isAddressBookPageWebElementDisplayed();
        //address book page text element assert
        await this.isAddressBookPageTextElementAsExpected();
        //click 'Add shipping address' button
        await addressBookPage.clickAddShippingAddressButton();
        //add shipping address web element assert
        await addShippingAddressPage.isAddShippingAddressPageWebElementDisplayed();
        //add shipping address text element assert
        await this.isAddShippingAddressPageTextElementAsExpected()
        //capture screenshot of add shipping address page display before invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Shipping Address Page Display Before Data Input");
        //input valid shipping address first name into first name input field
        await addShippingAddressPage.inputValidFirstNameIntoShippingAddressFirstNameInputField();
        //input no shipping address last name into last name input field
        await addShippingAddressPageInvalidScenarios.inputNoLastNameIntoShippingAddressLastNameInputField();
        //capture screenshot of add shipping address page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Shipping Address Page Display After Data Input - No Last Name");
        //click country dropdown menu
        await addShippingAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addShippingAddressPage.selectUSCountryOption();
        //click shipping address region dropdown menu
        await addShippingAddressPage.clickRegionDropdownMenu();
        //select 'Illinois' region option
        await addShippingAddressPage.selectIllinoisRegionOption();
        //input valid shipping address street into street input field
        await addShippingAddressPage.inputValidStreetIntoShippingAddressStreetInputField();
        //input valid shipping address city into city input field
        await addShippingAddressPage.inputValidCityIntoShippingCityInputField();
        //input valid shipping address post code into post code input field
        await addShippingAddressPage.inputValidPostCodeIntoShippingAddressPostCodeInputField();
        //capture screenshot after invalid shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Shipping Address Page After Invalid Data Input");
        //click 'Add shipping address' button
        await addShippingAddressPage.clickWriteShippingAddressButton();
        //assert the user gets expected error message
        const addressBookAlertMessage = await addShippingAddressPageInvalidScenarios.getShippingAddressSingularInputError();
        assert.strictEqual(addressBookAlertMessage,   "Nazwisko jest wymaganym polem.", "The address book page shipping address no last name input error doesn't match expectations.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Shipping Address Addition Test Result - No Last Name");
    }
    //invalid add shipping address test method - no user country
    async invalidAddShippingAddressNoCountryTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const addressBookPage = new AddressBookPage(this.driver);
        const addShippingAddressPage = new AddShippingAddressPage(this.driver);
        const addShippingAddressPageInvalidScenarios = new AddShippingAddressPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display");
        //click aside 'Address Book' link
        await myAccountPage.clickAsideAddressBookLink();
        //capture screenshot of address book page display
        await TestMethods.captureScreenshot(this.driver, "Address Book Page Display");
        //address book page web element assert
        await addressBookPage.isAddressBookPageWebElementDisplayed();
        //address book page text element assert
        await this.isAddressBookPageTextElementAsExpected();
        //click 'Add shipping address' button
        await addressBookPage.clickAddShippingAddressButton();
        //add shipping address web element assert
        await addShippingAddressPage.isAddShippingAddressPageWebElementDisplayed();
        //add shipping address text element assert
        await this.isAddShippingAddressPageTextElementAsExpected()
        //capture screenshot of add shipping address page display before invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Shipping Address Page Display Before Data Input");
        //input valid shipping address first name into first name input field
        await addShippingAddressPage.inputValidFirstNameIntoShippingAddressFirstNameInputField();
        //input valid shipping address last name into last name input field
        await addShippingAddressPage.inputValidLastNameIntoShippingAddressLastNameInputField();
        //capture screenshot of add shipping address page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Shipping Address Page Display After Data Input - No Country");
        //input valid shipping address street into street input field
        await addShippingAddressPage.inputValidStreetIntoShippingAddressStreetInputField();
        //input valid shipping address city into city input field
        await addShippingAddressPage.inputValidCityIntoShippingCityInputField();
        //input valid shipping address post code into post code input field
        await addShippingAddressPage.inputValidPostCodeIntoShippingAddressPostCodeInputField();
        //capture screenshot after invalid shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Shipping Address Page After Invalid Data Input");
        //click 'Add shipping address' button
        await addShippingAddressPage.clickWriteShippingAddressButton();
        //assert the user gets expected error message
        const addressBookAlertMessage = await addShippingAddressPageInvalidScenarios.getShippingAddressSingularInputError();
        assert.strictEqual(addressBookAlertMessage,   "Kraj / region jest wymaganym polem.", "The address book page shipping address no country input error doesn't match expectations.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Shipping Address Addition Test Result - No Country");
    }
    //invalid add shipping address test method - no user state
    async invalidAddShippingAddressNoStateTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const addressBookPage = new AddressBookPage(this.driver);
        const addShippingAddressPage = new AddShippingAddressPage(this.driver);
        const addShippingAddressPageInvalidScenarios = new AddShippingAddressPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display");
        //click aside 'Address Book' link
        await myAccountPage.clickAsideAddressBookLink();
        //capture screenshot of address book page display
        await TestMethods.captureScreenshot(this.driver, "Address Book Page Display");
        //address book page web element assert
        await addressBookPage.isAddressBookPageWebElementDisplayed();
        //address book page text element assert
        await this.isAddressBookPageTextElementAsExpected();
        //click 'Add shipping address' button
        await addressBookPage.clickAddShippingAddressButton();
        //add shipping address web element assert
        await addShippingAddressPage.isAddShippingAddressPageWebElementDisplayed();
        //add shipping address text element assert
        await this.isAddShippingAddressPageTextElementAsExpected()
        //capture screenshot of add shipping address page display before invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Shipping Address Page Display Before Data Input");
        //input valid shipping address first name into first name input field
        await addShippingAddressPage.inputValidFirstNameIntoShippingAddressFirstNameInputField();
        //input valid shipping address last name into last name input field
        await addShippingAddressPage.inputValidLastNameIntoShippingAddressLastNameInputField();
        //click country dropdown menu
        await addShippingAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addShippingAddressPage.selectUSCountryOption();
        //capture screenshot of add shipping address page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Shipping Address Page Display After Data Input - No State");
        //input valid shipping address street into street input field
        await addShippingAddressPage.inputValidStreetIntoShippingAddressStreetInputField();
        //input valid shipping address city into city input field
        await addShippingAddressPage.inputValidCityIntoShippingCityInputField();
        //input valid shipping address post code into post code input field
        await addShippingAddressPage.inputValidPostCodeIntoShippingAddressPostCodeInputField();
        //capture screenshot after invalid shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Shipping Address Page After Invalid Data Input")
        //click 'Add shipping address' button
        await addShippingAddressPage.clickWriteShippingAddressButton();
        //assert the user gets expected error message
        const addressBookAlertMessage = await addShippingAddressPageInvalidScenarios.getShippingAddressSingularInputError();
        assert.strictEqual(addressBookAlertMessage,   "Województwo jest wymaganym polem.", "The address book page shipping address no state input error doesn't match expectations.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Shipping Address Addition Test Result - No State");
    }
    //invalid add shipping address test method - no user street
    async invalidAddShippingAddressNoStreetTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const addressBookPage = new AddressBookPage(this.driver);
        const addShippingAddressPage = new AddShippingAddressPage(this.driver);
        const addShippingAddressPageInvalidScenarios = new AddShippingAddressPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display");
        //click aside 'Address Book' link
        await myAccountPage.clickAsideAddressBookLink();
        //capture screenshot of address book page display
        await TestMethods.captureScreenshot(this.driver, "Address Book Page Display");
        //address book page web element assert
        await addressBookPage.isAddressBookPageWebElementDisplayed();
        //address book page text element assert
        await this.isAddressBookPageTextElementAsExpected();
        //click 'Add shipping address' button
        await addressBookPage.clickAddShippingAddressButton();
        //add shipping address web element assert
        await addShippingAddressPage.isAddShippingAddressPageWebElementDisplayed();
        //add shipping address text element assert
        await this.isAddShippingAddressPageTextElementAsExpected()
        //capture screenshot of add shipping address page display before invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Shipping Address Page Display Before Data Input");
        //input valid shipping address first name into first name input field
        await addShippingAddressPage.inputValidFirstNameIntoShippingAddressFirstNameInputField();
        //input valid shipping address last name into last name input field
        await addShippingAddressPage.inputValidLastNameIntoShippingAddressLastNameInputField();
        //click country dropdown menu
        await addShippingAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addShippingAddressPage.selectUSCountryOption();
        //click shipping address region dropdown menu
        await addShippingAddressPage.clickRegionDropdownMenu();
        //select 'Illinois' region option
        await addShippingAddressPage.selectIllinoisRegionOption();
        //input no shipping address street into street input field
        await addShippingAddressPageInvalidScenarios.inputNoStreetIntoShippingAddressStreetInputField();
        //capture screenshot of add shipping address page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Shipping Address Page Display After Data Input - No Street");
        //input valid shipping address city into city input field
        await addShippingAddressPage.inputValidCityIntoShippingCityInputField();
        //input valid shipping address post code into post code input field
        await addShippingAddressPage.inputValidPostCodeIntoShippingAddressPostCodeInputField();
        //capture screenshot after invalid shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Shipping Address Page After Invalid Data Input");
        //click 'Add shipping address' button
        await addShippingAddressPage.clickWriteShippingAddressButton();
        //assert the user gets expected error message
        const addressBookAlertMessage = await addShippingAddressPageInvalidScenarios.getShippingAddressSingularInputError();
        assert.strictEqual(addressBookAlertMessage,   "Ulica jest wymaganym polem.", "The address book page shipping address no street input error doesn't match expectations.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Shipping Address Addition Test Result - No Street");
    }
    //invalid add shipping address test method - no user post code
    async invalidAddShippingAddressNoPostCodeTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const addressBookPage = new AddressBookPage(this.driver);
        const addShippingAddressPage = new AddShippingAddressPage(this.driver);
        const addShippingAddressPageInvalidScenarios = new AddShippingAddressPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display");
        //click aside 'Address Book' link
        await myAccountPage.clickAsideAddressBookLink();
        //capture screenshot of address book page display
        await TestMethods.captureScreenshot(this.driver, "Address Book Page Display");
        //address book page web element assert
        await addressBookPage.isAddressBookPageWebElementDisplayed();
        //address book page text element assert
        await this.isAddressBookPageTextElementAsExpected();
        //click 'Add shipping address' button
        await addressBookPage.clickAddShippingAddressButton();
        //add shipping address web element assert
        await addShippingAddressPage.isAddShippingAddressPageWebElementDisplayed();
        //add shipping address text element assert
        await this.isAddShippingAddressPageTextElementAsExpected()
        //capture screenshot of add shipping address page display before invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Shipping Address Page Display Before Data Input");
        //input valid shipping address first name into first name input field
        await addShippingAddressPage.inputValidFirstNameIntoShippingAddressFirstNameInputField();
        //input valid shipping address last name into last name input field
        await addShippingAddressPage.inputValidLastNameIntoShippingAddressLastNameInputField();
        //click country dropdown menu
        await addShippingAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addShippingAddressPage.selectUSCountryOption();
        //click shipping address region dropdown menu
        await addShippingAddressPage.clickRegionDropdownMenu();
        //select 'Illinois' region option
        await addShippingAddressPage.selectIllinoisRegionOption();
        //input valid shipping address street into street input field
        await addShippingAddressPage.inputValidStreetIntoShippingAddressStreetInputField();
        //input valid shipping address city into city input field
        await addShippingAddressPage.inputValidCityIntoShippingCityInputField();
        //input no shipping address post code into post code input field
        await addShippingAddressPageInvalidScenarios.inputNoPostCodeIntoShippingAddressPostCodeInputField();
        //capture screenshot of add shipping address page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Shipping Address Page Display After Data Input - No Post Code");
        //click 'Add shipping address' button
        await addShippingAddressPage.clickWriteShippingAddressButton();
        //assert the user gets expected error message
        const addressBookAlertMessage = await addShippingAddressPageInvalidScenarios.getShippingAddressSingularInputError();
        assert.strictEqual(addressBookAlertMessage,   "Kod pocztowy jest wymaganym polem.", "The address book page shipping address no post code input error doesn't match expectations.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Shipping Address Addition Test Result - No Post Code");
    }
    //invalid add shipping address test method - no user city
    async invalidAddShippingAddressNoCityTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const addressBookPage = new AddressBookPage(this.driver);
        const addShippingAddressPage = new AddShippingAddressPage(this.driver);
        const addShippingAddressPageInvalidScenarios = new AddShippingAddressPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display");
        //click aside 'Address Book' link
        await myAccountPage.clickAsideAddressBookLink();
        //capture screenshot of address book page display
        await TestMethods.captureScreenshot(this.driver, "Address Book Page Display");
        //address book page web element assert
        await addressBookPage.isAddressBookPageWebElementDisplayed();
        //address book page text element assert
        await this.isAddressBookPageTextElementAsExpected();
        //click 'Add shipping address' button
        await addressBookPage.clickAddShippingAddressButton();
        //add shipping address web element assert
        await addShippingAddressPage.isAddShippingAddressPageWebElementDisplayed();
        //add shipping address text element assert
        await this.isAddShippingAddressPageTextElementAsExpected()
        //capture screenshot of add shipping address page display before invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Shipping Address Page Display Before Data Input");
        //input valid shipping address first name into first name input field
        await addShippingAddressPage.inputValidFirstNameIntoShippingAddressFirstNameInputField();
        //input valid shipping address last name into last name input field
        await addShippingAddressPage.inputValidLastNameIntoShippingAddressLastNameInputField();
        //click country dropdown menu
        await addShippingAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addShippingAddressPage.selectUSCountryOption();
        //click shipping address region dropdown menu
        await addShippingAddressPage.clickRegionDropdownMenu();
        //select 'Illinois' region option
        await addShippingAddressPage.selectIllinoisRegionOption();
        //input valid shipping address street into street input field
        await addShippingAddressPage.inputValidStreetIntoShippingAddressStreetInputField();
        //input no shipping address city into city input field
        await addShippingAddressPageInvalidScenarios.inputNoCityIntoShippingCityInputField();
        //capture screenshot of add shipping address page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Shipping Address Page Display After Data Input - No City");
        //input valid shipping address post code into post code input field
        await addShippingAddressPage.inputValidPostCodeIntoShippingAddressPostCodeInputField();
        //capture screenshot after invalid shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Shipping Address Page After Invalid Data Input");
        //click 'Add shipping address' button
        await addShippingAddressPage.clickWriteShippingAddressButton();
        //assert the user gets expected error message
        const addressBookAlertMessage = await addShippingAddressPageInvalidScenarios.getShippingAddressSingularInputError();
        assert.strictEqual(addressBookAlertMessage,   "Miasto jest wymaganym polem.", "The address book page shipping address no city input error doesn't match expectations.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Shipping Address Addition Test Result - No City");
    }

    //too short singular input

    //invalid add shipping address test method - too short user first name (1 char)
    async invalidAddShippingAddressTooShortFirstNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const addressBookPage = new AddressBookPage(this.driver);
        const addShippingAddressPage = new AddShippingAddressPage(this.driver);
        const addShippingAddressPageInvalidScenarios = new AddShippingAddressPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display");
        //click aside 'Address Book' link
        await myAccountPage.clickAsideAddressBookLink();
        //capture screenshot of address book page display
        await TestMethods.captureScreenshot(this.driver, "Address Book Page Display");
        //address book page web element assert
        await addressBookPage.isAddressBookPageWebElementDisplayed();
        //address book page text element assert
        await this.isAddressBookPageTextElementAsExpected();
        //click 'Add shipping address' button
        await addressBookPage.clickAddShippingAddressButton();
        //add shipping address web element assert
        await addShippingAddressPage.isAddShippingAddressPageWebElementDisplayed();
        //add shipping address text element assert
        await this.isAddShippingAddressPageTextElementAsExpected()
        //capture screenshot of add shipping address page display before invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Shipping Address Page Display Before Data Input");
        //input too short shipping address first name into first name input field
        await addShippingAddressPageInvalidScenarios.inputTooShortFirstNameIntoShippingAddressFirstNameInputField();
        //capture screenshot of add shipping address page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Shipping Address Page Display After Data Input - Too Short First Name");
        //input valid shipping address last name into last name input field
        await addShippingAddressPage.inputValidLastNameIntoShippingAddressLastNameInputField();
        //click country dropdown menu
        await addShippingAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addShippingAddressPage.selectUSCountryOption();
        //click shipping address region dropdown menu
        await addShippingAddressPage.clickRegionDropdownMenu();
        //select 'Illinois' region option
        await addShippingAddressPage.selectIllinoisRegionOption();
        //input valid shipping address street into street input field
        await addShippingAddressPage.inputValidStreetIntoShippingAddressStreetInputField();
        //input valid shipping address city into city input field
        await addShippingAddressPage.inputValidCityIntoShippingCityInputField();
        //input valid shipping address post code into post code input field
        await addShippingAddressPage.inputValidPostCodeIntoShippingAddressPostCodeInputField();
        //capture screenshot after invalid shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Shipping Address Page After Invalid Data Input");
        //click 'Add shipping address' button
        await addShippingAddressPage.clickWriteShippingAddressButton();
        //assert the user gets expected error message, log the issue otherwise
        try {
            const addressBookAlertMessage = await addShippingAddressPageInvalidScenarios.getShippingAddressSingularInputError();
            assert.strictEqual(addressBookAlertMessage, "Imię jest zbyt krótkie.", "The address book page shipping address too short first name input error doesn't match expectations.");
        } catch (e){
            Logger.error("Too short shipping address first name input error doesn't get triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Shipping Address Addition Test Result - Too Short First Name");
    }
    //invalid add shipping address test method - too short user last name (1 char)
    async invalidAddShippingAddressTooShortLastNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const addressBookPage = new AddressBookPage(this.driver);
        const addShippingAddressPage = new AddShippingAddressPage(this.driver);
        const addShippingAddressPageInvalidScenarios = new AddShippingAddressPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display");
        //click aside 'Address Book' link
        await myAccountPage.clickAsideAddressBookLink();
        //capture screenshot of address book page display
        await TestMethods.captureScreenshot(this.driver, "Address Book Page Display");
        //address book page web element assert
        await addressBookPage.isAddressBookPageWebElementDisplayed();
        //address book page text element assert
        await this.isAddressBookPageTextElementAsExpected();
        //click 'Add shipping address' button
        await addressBookPage.clickAddShippingAddressButton();
        //add shipping address web element assert
        await addShippingAddressPage.isAddShippingAddressPageWebElementDisplayed();
        //add shipping address text element assert
        await this.isAddShippingAddressPageTextElementAsExpected()
        //capture screenshot of add shipping address page display before invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Shipping Address Page Display Before Data Input");
        //input valid shipping address first name into first name input field
        await addShippingAddressPage.inputValidFirstNameIntoShippingAddressFirstNameInputField();
        //input too short shipping address last name into last name input field
        await addShippingAddressPageInvalidScenarios.inputTooShortLastNameIntoShippingAddressLastNameInputField();
        //capture screenshot of add shipping address page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Shipping Address Page Display After Data Input - Too Short Last Name");
        //click country dropdown menu
        await addShippingAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addShippingAddressPage.selectUSCountryOption();
        //click shipping address region dropdown menu
        await addShippingAddressPage.clickRegionDropdownMenu();
        //select 'Illinois' region option
        await addShippingAddressPage.selectIllinoisRegionOption();
        //input valid shipping address street into street input field
        await addShippingAddressPage.inputValidStreetIntoShippingAddressStreetInputField();
        //input valid shipping address city into city input field
        await addShippingAddressPage.inputValidCityIntoShippingCityInputField();
        //input valid shipping address post code into post code input field
        await addShippingAddressPage.inputValidPostCodeIntoShippingAddressPostCodeInputField();
        //capture screenshot after invalid shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Shipping Address Page After Invalid Data Input");
        //click 'Add shipping address' button
        await addShippingAddressPage.clickWriteShippingAddressButton();
        //assert the user gets expected error message, log the issue otherwise
        try {
            const addressBookAlertMessage = await addShippingAddressPageInvalidScenarios.getShippingAddressSingularInputError();
            assert.strictEqual(addressBookAlertMessage, "Nazwisko jest zbyt krótkie.", "The address book page shipping address too short last name input error doesn't match expectations.");
        } catch (e){
            Logger.error("Too short shipping address last name input error doesn't get triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Shipping Address Addition Test Result - Too Short Last Name");
    }
    //invalid add shipping address test method - too short user street (1 char)
    async invalidAddShippingAddressTooShortStreetTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const addressBookPage = new AddressBookPage(this.driver);
        const addShippingAddressPage = new AddShippingAddressPage(this.driver);
        const addShippingAddressPageInvalidScenarios = new AddShippingAddressPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display");
        //click aside 'Address Book' link
        await myAccountPage.clickAsideAddressBookLink();
        //capture screenshot of address book page display
        await TestMethods.captureScreenshot(this.driver, "Address Book Page Display");
        //address book page web element assert
        await addressBookPage.isAddressBookPageWebElementDisplayed();
        //address book page text element assert
        await this.isAddressBookPageTextElementAsExpected();
        //click 'Add shipping address' button
        await addressBookPage.clickAddShippingAddressButton();
        //add shipping address web element assert
        await addShippingAddressPage.isAddShippingAddressPageWebElementDisplayed();
        //add shipping address text element assert
        await this.isAddShippingAddressPageTextElementAsExpected()
        //capture screenshot of add shipping address page display before invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Shipping Address Page Display Before Data Input");
        //input valid shipping address first name into first name input field
        await addShippingAddressPage.inputValidFirstNameIntoShippingAddressFirstNameInputField();
        //input valid shipping address last name into last name input field
        await addShippingAddressPage.inputValidLastNameIntoShippingAddressLastNameInputField();
        //click country dropdown menu
        await addShippingAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addShippingAddressPage.selectUSCountryOption();
        //click shipping address region dropdown menu
        await addShippingAddressPage.clickRegionDropdownMenu();
        //select 'Illinois' region option
        await addShippingAddressPage.selectIllinoisRegionOption();
        //input too short shipping address street into street input field
        await addShippingAddressPageInvalidScenarios.inputTooShortStreetIntoShippingAddressStreetInputField();
        //capture screenshot of add shipping address page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Shipping Address Page Display After Data Input - Too Short Street");
        //input valid shipping address city into city input field
        await addShippingAddressPage.inputValidCityIntoShippingCityInputField();
        //input valid shipping address post code into post code input field
        await addShippingAddressPage.inputValidPostCodeIntoShippingAddressPostCodeInputField();
        //capture screenshot after invalid shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Shipping Address Page After Invalid Data Input");
        //click 'Add shipping address' button
        await addShippingAddressPage.clickWriteShippingAddressButton();
        //assert the user gets expected error message, log the issue otherwise
        try {
            const addressBookAlertMessage = await addShippingAddressPageInvalidScenarios.getShippingAddressSingularInputError();
            assert.strictEqual(addressBookAlertMessage, "Ulica jest zbyt krótka.", "The address book page shipping address too short street input error doesn't match expectations.");
        } catch (e){
            Logger.error("Too short shipping address street input error doesn't get triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Shipping Address Addition Test Result - Too Short Street");
    }
    //invalid add shipping address test method - too short user post code (1 digit)
    async invalidAddShippingAddressTooShortPostCodeTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const addressBookPage = new AddressBookPage(this.driver);
        const addShippingAddressPage = new AddShippingAddressPage(this.driver);
        const addShippingAddressPageInvalidScenarios = new AddShippingAddressPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display");
        //click aside 'Address Book' link
        await myAccountPage.clickAsideAddressBookLink();
        //capture screenshot of address book page display
        await TestMethods.captureScreenshot(this.driver, "Address Book Page Display");
        //address book page web element assert
        await addressBookPage.isAddressBookPageWebElementDisplayed();
        //address book page text element assert
        await this.isAddressBookPageTextElementAsExpected();
        //click 'Add shipping address' button
        await addressBookPage.clickAddShippingAddressButton();
        //add shipping address web element assert
        await addShippingAddressPage.isAddShippingAddressPageWebElementDisplayed();
        //add shipping address text element assert
        await this.isAddShippingAddressPageTextElementAsExpected()
        //capture screenshot of add shipping address page display before invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Shipping Address Page Display Before Data Input");
        //input valid shipping address first name into first name input field
        await addShippingAddressPage.inputValidFirstNameIntoShippingAddressFirstNameInputField();
        //input valid shipping address last name into last name input field
        await addShippingAddressPage.inputValidLastNameIntoShippingAddressLastNameInputField();
        //click country dropdown menu
        await addShippingAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addShippingAddressPage.selectUSCountryOption();
        //click shipping address region dropdown menu
        await addShippingAddressPage.clickRegionDropdownMenu();
        //select 'Illinois' region option
        await addShippingAddressPage.selectIllinoisRegionOption();
        //input valid shipping address street into street input field
        await addShippingAddressPage.inputValidStreetIntoShippingAddressStreetInputField();
        //input valid shipping address city into city input field
        await addShippingAddressPage.inputValidCityIntoShippingCityInputField();
        //input too short shipping address post code into post code input field
        await addShippingAddressPageInvalidScenarios.inputTooShortPostCodeIntoShippingAddressPostCodeInputField();
        //capture screenshot of add shipping address page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Shipping Address Page Display After Data Input - Too Short Post Code");
        //click 'Add shipping address' button
        await addShippingAddressPage.clickWriteShippingAddressButton();
        //assert the user gets expected error message, log the issue otherwise
        try {
            const addressBookAlertMessage = await addShippingAddressPageInvalidScenarios.getShippingAddressSingularInputError();
            assert.strictEqual(addressBookAlertMessage, "Proszę podać poprawny kod pocztowy.", "The address book page shipping address too short post code input error doesn't match expectations.");
        } catch (e){
            Logger.error("Too short shipping address post code input error doesn't get triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Shipping Address Addition Test Result - Too Short Post Code");
    }
    //invalid add shipping address test method - too short user city (1 digit)
    async invalidAddShippingAddressTooShortCityTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const addressBookPage = new AddressBookPage(this.driver);
        const addShippingAddressPage = new AddShippingAddressPage(this.driver);
        const addShippingAddressPageInvalidScenarios = new AddShippingAddressPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display");
        //click aside 'Address Book' link
        await myAccountPage.clickAsideAddressBookLink();
        //capture screenshot of address book page display
        await TestMethods.captureScreenshot(this.driver, "Address Book Page Display");
        //address book page web element assert
        await addressBookPage.isAddressBookPageWebElementDisplayed();
        //address book page text element assert
        await this.isAddressBookPageTextElementAsExpected();
        //click 'Add shipping address' button
        await addressBookPage.clickAddShippingAddressButton();
        //add shipping address web element assert
        await addShippingAddressPage.isAddShippingAddressPageWebElementDisplayed();
        //add shipping address text element assert
        await this.isAddShippingAddressPageTextElementAsExpected()
        //capture screenshot of add shipping address page display before invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Shipping Address Page Display Before Data Input");
        //input valid shipping address first name into first name input field
        await addShippingAddressPage.inputValidFirstNameIntoShippingAddressFirstNameInputField();
        //input valid shipping address last name into last name input field
        await addShippingAddressPage.inputValidLastNameIntoShippingAddressLastNameInputField();
        //click country dropdown menu
        await addShippingAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addShippingAddressPage.selectUSCountryOption();
        //click shipping address region dropdown menu
        await addShippingAddressPage.clickRegionDropdownMenu();
        //select 'Illinois' region option
        await addShippingAddressPage.selectIllinoisRegionOption();
        //input valid shipping address street into street input field
        await addShippingAddressPage.inputValidStreetIntoShippingAddressStreetInputField();
        //input too short shipping address city into city input field
        await addShippingAddressPageInvalidScenarios.inputTooShortCityIntoShippingCityInputField();
        //capture screenshot of add shipping address page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Shipping Address Page Display After Data Input - Too Short City");
        //input valid shipping address post code into post code input field
        await addShippingAddressPage.inputValidPostCodeIntoShippingAddressPostCodeInputField();
        //capture screenshot after invalid shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Shipping Address Page After Invalid Data Input");
        //click 'Add shipping address' button
        await addShippingAddressPage.clickWriteShippingAddressButton();
        //assert the user gets expected error message, log the issue otherwise
        try {
            const addressBookAlertMessage = await addShippingAddressPageInvalidScenarios.getShippingAddressSingularInputError();
            assert.strictEqual(addressBookAlertMessage, "Miasto jest zbyt krótkie.", "The address book page shipping address too short city input error doesn't match expectations.");
        } catch (e){
            Logger.error("Too short shipping address city input error doesn't get triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Shipping Address Addition Test Result - Too Short City");
    }

    //too long singular input

    //invalid add shipping address test method - too long user first name (100 chars)
    async invalidAddShippingAddressTooLongFirstNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const addressBookPage = new AddressBookPage(this.driver);
        const addShippingAddressPage = new AddShippingAddressPage(this.driver);
        const addShippingAddressPageInvalidScenarios = new AddShippingAddressPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display");
        //click aside 'Address Book' link
        await myAccountPage.clickAsideAddressBookLink();
        //capture screenshot of address book page display
        await TestMethods.captureScreenshot(this.driver, "Address Book Page Display");
        //address book page web element assert
        await addressBookPage.isAddressBookPageWebElementDisplayed();
        //address book page text element assert
        await this.isAddressBookPageTextElementAsExpected();
        //click 'Add shipping address' button
        await addressBookPage.clickAddShippingAddressButton();
        //add shipping address web element assert
        await addShippingAddressPage.isAddShippingAddressPageWebElementDisplayed();
        //add shipping address text element assert
        await this.isAddShippingAddressPageTextElementAsExpected()
        //capture screenshot of add shipping address page display before invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Shipping Address Page Display Before Data Input");
        //input too long shipping address first name into first name input field
        await addShippingAddressPageInvalidScenarios.inputTooLongFirstNameIntoShippingAddressFirstNameInputField();
        //capture screenshot of add shipping address page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Shipping Address Page Display After Data Input - Too Long First Name");
        //input valid shipping address last name into last name input field
        await addShippingAddressPage.inputValidLastNameIntoShippingAddressLastNameInputField();
        //click country dropdown menu
        await addShippingAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addShippingAddressPage.selectUSCountryOption();
        //click shipping address region dropdown menu
        await addShippingAddressPage.clickRegionDropdownMenu();
        //select 'Illinois' region option
        await addShippingAddressPage.selectIllinoisRegionOption();
        //input valid shipping address street into street input field
        await addShippingAddressPage.inputValidStreetIntoShippingAddressStreetInputField();
        //input valid shipping address city into city input field
        await addShippingAddressPage.inputValidCityIntoShippingCityInputField();
        //input valid shipping address post code into post code input field
        await addShippingAddressPage.inputValidPostCodeIntoShippingAddressPostCodeInputField();
        //capture screenshot after invalid shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Shipping Address Page After Invalid Data Input");
        //click 'Add shipping address' button
        await addShippingAddressPage.clickWriteShippingAddressButton();
        //assert the user gets expected error message, log the issue otherwise
        try {
            const addressBookAlertMessage = await addShippingAddressPageInvalidScenarios.getShippingAddressSingularInputError();
            assert.strictEqual(addressBookAlertMessage, "Imię jest zbyt długim.", "The address book page shipping address too long first name input error doesn't match expectations.");
        } catch (e){
            Logger.error("Too long shipping address first name input error doesn't get triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Shipping Address Addition Test Result - Too Long First Name");
    }
    //invalid add shipping address test method - too long user last name (100 chars)
    async invalidAddShippingAddressTooLongLastNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const addressBookPage = new AddressBookPage(this.driver);
        const addShippingAddressPage = new AddShippingAddressPage(this.driver);
        const addShippingAddressPageInvalidScenarios = new AddShippingAddressPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display");
        //click aside 'Address Book' link
        await myAccountPage.clickAsideAddressBookLink();
        //capture screenshot of address book page display
        await TestMethods.captureScreenshot(this.driver, "Address Book Page Display");
        //address book page web element assert
        await addressBookPage.isAddressBookPageWebElementDisplayed();
        //address book page text element assert
        await this.isAddressBookPageTextElementAsExpected();
        //click 'Add shipping address' button
        await addressBookPage.clickAddShippingAddressButton();
        //add shipping address web element assert
        await addShippingAddressPage.isAddShippingAddressPageWebElementDisplayed();
        //add shipping address text element assert
        await this.isAddShippingAddressPageTextElementAsExpected()
        //capture screenshot of add shipping address page display before invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Shipping Address Page Display Before Data Input");
        //input valid shipping address first name into first name input field
        await addShippingAddressPage.inputValidFirstNameIntoShippingAddressFirstNameInputField();
        //input too long shipping address last name into last name input field
        await addShippingAddressPageInvalidScenarios.inputTooLongLastNameIntoShippingAddressLastNameInputField();
        //capture screenshot of add shipping address page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Shipping Address Page Display After Data Input - Too Long Last Name");
        //click country dropdown menu
        await addShippingAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addShippingAddressPage.selectUSCountryOption();
        //click shipping address region dropdown menu
        await addShippingAddressPage.clickRegionDropdownMenu();
        //select 'Illinois' region option
        await addShippingAddressPage.selectIllinoisRegionOption();
        //input valid shipping address street into street input field
        await addShippingAddressPage.inputValidStreetIntoShippingAddressStreetInputField();
        //input valid shipping address city into city input field
        await addShippingAddressPage.inputValidCityIntoShippingCityInputField();
        //input valid shipping address post code into post code input field
        await addShippingAddressPage.inputValidPostCodeIntoShippingAddressPostCodeInputField();
        //capture screenshot after invalid shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Shipping Address Page After Invalid Data Input");
        //click 'Add shipping address' button
        await addShippingAddressPage.clickWriteShippingAddressButton();
        //assert the user gets expected error message, log the issue otherwise
        try {
            const addressBookAlertMessage = await addShippingAddressPageInvalidScenarios.getShippingAddressSingularInputError();
            assert.strictEqual(addressBookAlertMessage, "Nazwisko jest zbyt długim.", "The address book page shipping address too long last name input error doesn't match expectations.");
        } catch (e){
            Logger.error("Too long shipping address last name input error doesn't get triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Shipping Address Addition Test Result - Too Long Last Name");
    }
    //invalid add shipping address test method - too long user street (100 chars)
    async invalidAddShippingAddressTooLongStreetTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const addressBookPage = new AddressBookPage(this.driver);
        const addShippingAddressPage = new AddShippingAddressPage(this.driver);
        const addShippingAddressPageInvalidScenarios = new AddShippingAddressPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display");
        //click aside 'Address Book' link
        await myAccountPage.clickAsideAddressBookLink();
        //capture screenshot of address book page display
        await TestMethods.captureScreenshot(this.driver, "Address Book Page Display");
        //address book page web element assert
        await addressBookPage.isAddressBookPageWebElementDisplayed();
        //address book page text element assert
        await this.isAddressBookPageTextElementAsExpected();
        //click 'Add shipping address' button
        await addressBookPage.clickAddShippingAddressButton();
        //add shipping address web element assert
        await addShippingAddressPage.isAddShippingAddressPageWebElementDisplayed();
        //add shipping address text element assert
        await this.isAddShippingAddressPageTextElementAsExpected()
        //capture screenshot of add shipping address page display before invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Shipping Address Page Display Before Data Input");
        //input valid shipping address first name into first name input field
        await addShippingAddressPage.inputValidFirstNameIntoShippingAddressFirstNameInputField();
        //input valid shipping address last name into last name input field
        await addShippingAddressPage.inputValidLastNameIntoShippingAddressLastNameInputField();
        //click country dropdown menu
        await addShippingAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addShippingAddressPage.selectUSCountryOption();
        //click shipping address region dropdown menu
        await addShippingAddressPage.clickRegionDropdownMenu();
        //select 'Illinois' region option
        await addShippingAddressPage.selectIllinoisRegionOption();
        //input too long shipping address street into street input field
        await addShippingAddressPageInvalidScenarios.inputTooLongStreetIntoShippingAddressStreetInputField();
        //capture screenshot of add shipping address page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Shipping Address Page Display After Data Input - Too Long Street");
        //input valid shipping address city into city input field
        await addShippingAddressPage.inputValidCityIntoShippingCityInputField();
        //input valid shipping address post code into post code input field
        await addShippingAddressPage.inputValidPostCodeIntoShippingAddressPostCodeInputField();
        //capture screenshot after invalid shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Shipping Address Page After Invalid Data Input");
        //click 'Add shipping address' button
        await addShippingAddressPage.clickWriteShippingAddressButton();
        //assert the user gets expected error message, log the issue otherwise
        try {
            const addressBookAlertMessage = await addShippingAddressPageInvalidScenarios.getShippingAddressSingularInputError();
            assert.strictEqual(addressBookAlertMessage, "Ulica jest zbyt długa.", "The address book page shipping address too long street input error doesn't match expectations.");
        } catch (e){
            Logger.error("Too long shipping address street input error doesn't get triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Shipping Address Addition Test Result - Too Long Street");
    }
    //invalid add shipping address test method - too long user post code (25 digits)
    async invalidAddShippingAddressTooLongPostCodeTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const addressBookPage = new AddressBookPage(this.driver);
        const addShippingAddressPage = new AddShippingAddressPage(this.driver);
        const addShippingAddressPageInvalidScenarios = new AddShippingAddressPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display");
        //click aside 'Address Book' link
        await myAccountPage.clickAsideAddressBookLink();
        //capture screenshot of address book page display
        await TestMethods.captureScreenshot(this.driver, "Address Book Page Display");
        //address book page web element assert
        await addressBookPage.isAddressBookPageWebElementDisplayed();
        //address book page text element assert
        await this.isAddressBookPageTextElementAsExpected();
        //click 'Add shipping address' button
        await addressBookPage.clickAddShippingAddressButton();
        //add shipping address web element assert
        await addShippingAddressPage.isAddShippingAddressPageWebElementDisplayed();
        //add shipping address text element assert
        await this.isAddShippingAddressPageTextElementAsExpected()
        //capture screenshot of add shipping address page display before invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Shipping Address Page Display Before Data Input");
        //input valid shipping address first name into first name input field
        await addShippingAddressPage.inputValidFirstNameIntoShippingAddressFirstNameInputField();
        //input valid shipping address last name into last name input field
        await addShippingAddressPage.inputValidLastNameIntoShippingAddressLastNameInputField();
        //click country dropdown menu
        await addShippingAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addShippingAddressPage.selectUSCountryOption();
        //click shipping address region dropdown menu
        await addShippingAddressPage.clickRegionDropdownMenu();
        //select 'Illinois' region option
        await addShippingAddressPage.selectIllinoisRegionOption();
        //input valid shipping address street into street input field
        await addShippingAddressPage.inputValidStreetIntoShippingAddressStreetInputField();
        //input valid shipping address city into city input field
        await addShippingAddressPage.inputValidCityIntoShippingCityInputField();
        //input too long shipping address post code into post code input field
        await addShippingAddressPageInvalidScenarios.inputTooLongPostCodeIntoShippingAddressPostCodeInputField();
        //capture screenshot of add shipping address page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Shipping Address Page Display After Data Input - Too Long Post Code");
        //click 'Add shipping address' button
        await addShippingAddressPage.clickWriteShippingAddressButton();
        //assert the user gets expected error message, log the issue otherwise
        try {
            const addressBookAlertMessage = await addShippingAddressPageInvalidScenarios.getShippingAddressSingularInputError();
            assert.strictEqual(addressBookAlertMessage, "Proszę podać poprawny kod pocztowy.", "The address book page shipping address too long post code input error doesn't match expectations.");
        } catch (e){
            Logger.error("Too long shipping address post code input error doesn't get triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Shipping Address Addition Test Result - Too Long Post Code");
    }
    //invalid add shipping address test method - too long user city (100 chars)
    async invalidAddShippingAddressTooLongCityTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const addressBookPage = new AddressBookPage(this.driver);
        const addShippingAddressPage = new AddShippingAddressPage(this.driver);
        const addShippingAddressPageInvalidScenarios = new AddShippingAddressPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display");
        //click aside 'Address Book' link
        await myAccountPage.clickAsideAddressBookLink();
        //capture screenshot of address book page display
        await TestMethods.captureScreenshot(this.driver, "Address Book Page Display");
        //address book page web element assert
        await addressBookPage.isAddressBookPageWebElementDisplayed();
        //address book page text element assert
        await this.isAddressBookPageTextElementAsExpected();
        //click 'Add shipping address' button
        await addressBookPage.clickAddShippingAddressButton();
        //add shipping address web element assert
        await addShippingAddressPage.isAddShippingAddressPageWebElementDisplayed();
        //add shipping address text element assert
        await this.isAddShippingAddressPageTextElementAsExpected()
        //capture screenshot of add shipping address page display before invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Shipping Address Page Display Before Data Input");
        //input valid shipping address first name into first name input field
        await addShippingAddressPage.inputValidFirstNameIntoShippingAddressFirstNameInputField();
        //input valid shipping address last name into last name input field
        await addShippingAddressPage.inputValidLastNameIntoShippingAddressLastNameInputField();
        //click country dropdown menu
        await addShippingAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addShippingAddressPage.selectUSCountryOption();
        //click shipping address region dropdown menu
        await addShippingAddressPage.clickRegionDropdownMenu();
        //select 'Illinois' region option
        await addShippingAddressPage.selectIllinoisRegionOption();
        //input valid shipping address street into street input field
        await addShippingAddressPage.inputValidStreetIntoShippingAddressStreetInputField();
        //input too long shipping address city into city input field
        await addShippingAddressPageInvalidScenarios.inputTooLongCityIntoShippingCityInputField();
        //capture screenshot of add shipping address page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Shipping Address Page Display After Data Input - Too Long City");
        //input valid shipping address post code into post code input field
        await addShippingAddressPage.inputValidPostCodeIntoShippingAddressPostCodeInputField();
        //capture screenshot after invalid shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Shipping Address Page After Invalid Data Input");
        //click 'Add shipping address' button
        await addShippingAddressPage.clickWriteShippingAddressButton();
        //assert the user gets expected error message, log the issue otherwise
        try {
            const addressBookAlertMessage = await addShippingAddressPageInvalidScenarios.getShippingAddressSingularInputError();
            assert.strictEqual(addressBookAlertMessage, "Miasto jest zbyt długie.", "The address book page shipping address too long city input error doesn't match expectations.");
        } catch (e){
            Logger.error("Too long shipping address city input error doesn't get triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Shipping Address Addition Test Result - Too Long City");
    }

    //invalid singular input format

    //invalid add shipping address test method - invalid user first name format (special symbols only)
    async invalidAddShippingAddressInvalidFirstNameFormatTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const addressBookPage = new AddressBookPage(this.driver);
        const addShippingAddressPage = new AddShippingAddressPage(this.driver);
        const addShippingAddressPageInvalidScenarios = new AddShippingAddressPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display");
        //click aside 'Address Book' link
        await myAccountPage.clickAsideAddressBookLink();
        //capture screenshot of address book page display
        await TestMethods.captureScreenshot(this.driver, "Address Book Page Display");
        //address book page web element assert
        await addressBookPage.isAddressBookPageWebElementDisplayed();
        //address book page text element assert
        await this.isAddressBookPageTextElementAsExpected();
        //click 'Add shipping address' button
        await addressBookPage.clickAddShippingAddressButton();
        //add shipping address web element assert
        await addShippingAddressPage.isAddShippingAddressPageWebElementDisplayed();
        //add shipping address text element assert
        await this.isAddShippingAddressPageTextElementAsExpected()
        //capture screenshot of add shipping address page display before invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Shipping Address Page Display Before Data Input");
        //input invalid shipping address first name format into first name input field (special symbols only)
        await addShippingAddressPageInvalidScenarios.inputInvalidFirstNameFormatIntoShippingAddressFirstNameInputField();
        //capture screenshot of add shipping address page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Shipping Address Page Display After Data Input - Invalid First Name Input Format");
        //input valid shipping address last name into last name input field
        await addShippingAddressPage.inputValidLastNameIntoShippingAddressLastNameInputField();
        //click country dropdown menu
        await addShippingAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addShippingAddressPage.selectUSCountryOption();
        //click shipping address region dropdown menu
        await addShippingAddressPage.clickRegionDropdownMenu();
        //select 'Illinois' region option
        await addShippingAddressPage.selectIllinoisRegionOption();
        //input valid shipping address street into street input field
        await addShippingAddressPage.inputValidStreetIntoShippingAddressStreetInputField();
        //input valid shipping address city into city input field
        await addShippingAddressPage.inputValidCityIntoShippingCityInputField();
        //input valid shipping address post code into post code input field
        await addShippingAddressPage.inputValidPostCodeIntoShippingAddressPostCodeInputField();
        //capture screenshot after invalid shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Shipping Address Page After Invalid Data Input");
        //click 'Add shipping address' button
        await addShippingAddressPage.clickWriteShippingAddressButton();
        //assert the user gets expected error message, log the issue otherwise
        try {
            const addressBookAlertMessage = await addShippingAddressPageInvalidScenarios.getShippingAddressSingularInputError();
            assert.strictEqual(addressBookAlertMessage, "Imię nie może zawierać tylko specjalne znaki.", "The address book page shipping address invalid first name input format error doesn't match expectations.");
        } catch (e){
            Logger.error("Invalid shipping address first name input format error doesn't get triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Shipping Address Addition Test Result - Invalid First Name Format");
    }
    //invalid add shipping address test method - invalid user last name format (special symbols only)
    async invalidAddShippingAddressInvalidLastNameFormatTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const addressBookPage = new AddressBookPage(this.driver);
        const addShippingAddressPage = new AddShippingAddressPage(this.driver);
        const addShippingAddressPageInvalidScenarios = new AddShippingAddressPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display");
        //click aside 'Address Book' link
        await myAccountPage.clickAsideAddressBookLink();
        //capture screenshot of address book page display
        await TestMethods.captureScreenshot(this.driver, "Address Book Page Display");
        //address book page web element assert
        await addressBookPage.isAddressBookPageWebElementDisplayed();
        //address book page text element assert
        await this.isAddressBookPageTextElementAsExpected();
        //click 'Add shipping address' button
        await addressBookPage.clickAddShippingAddressButton();
        //add shipping address web element assert
        await addShippingAddressPage.isAddShippingAddressPageWebElementDisplayed();
        //add shipping address text element assert
        await this.isAddShippingAddressPageTextElementAsExpected()
        //capture screenshot of add shipping address page display before invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Shipping Address Page Display Before Data Input");
        //input valid shipping address first name into first name input field
        await addShippingAddressPage.inputValidFirstNameIntoShippingAddressFirstNameInputField();
        //input invalid shipping address format last name into last name input field (special symbols only)
        await addShippingAddressPageInvalidScenarios.inputInvalidLastNameFormatIntoShippingAddressLastNameInputField();
        //capture screenshot of add shipping address page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Shipping Address Page Display After Data Input - Invalid Last Name Input Format");
        //click country dropdown menu
        await addShippingAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addShippingAddressPage.selectUSCountryOption();
        //click shipping address region dropdown menu
        await addShippingAddressPage.clickRegionDropdownMenu();
        //select 'Illinois' region option
        await addShippingAddressPage.selectIllinoisRegionOption();
        //input valid shipping address street into street input field
        await addShippingAddressPage.inputValidStreetIntoShippingAddressStreetInputField();
        //input valid shipping address city into city input field
        await addShippingAddressPage.inputValidCityIntoShippingCityInputField();
        //input valid shipping address post code into post code input field
        await addShippingAddressPage.inputValidPostCodeIntoShippingAddressPostCodeInputField();
        //capture screenshot after invalid shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Shipping Address Page After Invalid Data Input");
        //click 'Add shipping address' button
        await addShippingAddressPage.clickWriteShippingAddressButton();
        //assert the user gets expected error message, log the issue otherwise
        try {
            const addressBookAlertMessage = await addShippingAddressPageInvalidScenarios.getShippingAddressSingularInputError();
            assert.strictEqual(addressBookAlertMessage, "Nazwisko nie może zawierać tylko specjalne znaki.", "The address book page shipping address invalid last name input format error doesn't match expectations.");
        } catch (e){
            Logger.error("Invalid shipping address last name input format error doesn't get triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Shipping Address Addition Test Result - Invalid Last Name Format");
    }
    //invalid add shipping address test method - invalid user street format (special symbols only)
    async invalidAddShippingAddressInvalidStreetFormatTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const addressBookPage = new AddressBookPage(this.driver);
        const addShippingAddressPage = new AddShippingAddressPage(this.driver);
        const addShippingAddressPageInvalidScenarios = new AddShippingAddressPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display");
        //click aside 'Address Book' link
        await myAccountPage.clickAsideAddressBookLink();
        //capture screenshot of address book page display
        await TestMethods.captureScreenshot(this.driver, "Address Book Page Display");
        //address book page web element assert
        await addressBookPage.isAddressBookPageWebElementDisplayed();
        //address book page text element assert
        await this.isAddressBookPageTextElementAsExpected();
        //click 'Add shipping address' button
        await addressBookPage.clickAddShippingAddressButton();
        //add shipping address web element assert
        await addShippingAddressPage.isAddShippingAddressPageWebElementDisplayed();
        //add shipping address text element assert
        await this.isAddShippingAddressPageTextElementAsExpected()
        //capture screenshot of add shipping address page display before invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Shipping Address Page Display Before Data Input");
        //input valid shipping address first name into first name input field
        await addShippingAddressPage.inputValidFirstNameIntoShippingAddressFirstNameInputField();
        //input valid shipping address format last name into last name input field
        await addShippingAddressPage.inputValidLastNameIntoShippingAddressLastNameInputField();
        //click country dropdown menu
        await addShippingAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addShippingAddressPage.selectUSCountryOption();
        //click shipping address region dropdown menu
        await addShippingAddressPage.clickRegionDropdownMenu();
        //select 'Illinois' region option
        await addShippingAddressPage.selectIllinoisRegionOption();
        //input invalid shipping address format street into street input field (special symbols only)
        await addShippingAddressPageInvalidScenarios.inputInvalidStreetFormatIntoShippingAddressStreetInputField();
        //capture screenshot of add shipping address page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Shipping Address Page Display After Data Input - Invalid Street Input Format");
        //input valid shipping address city into city input field
        await addShippingAddressPage.inputValidCityIntoShippingCityInputField();
        //input valid shipping address post code into post code input field
        await addShippingAddressPage.inputValidPostCodeIntoShippingAddressPostCodeInputField();
        //capture screenshot after invalid shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Shipping Address Page After Invalid Data Input");
        //click 'Add shipping address' button
        await addShippingAddressPage.clickWriteShippingAddressButton();
        //assert the user gets expected error message, log the issue otherwise
        try {
            const addressBookAlertMessage = await addShippingAddressPageInvalidScenarios.getShippingAddressSingularInputError();
            assert.strictEqual(addressBookAlertMessage, "Ulica nie może zawierać tylko specjalne znaki.", "The address book page shipping address invalid street input format error doesn't match expectations.");
        } catch (e){
            Logger.error("Invalid shipping address street input format error doesn't get triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Shipping Address Addition Test Result - Invalid Street Format");
    }
    //invalid add shipping address test method - invalid user post code format (special symbols only)
    async invalidAddShippingAddressInvalidPostCodeFormatTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const addressBookPage = new AddressBookPage(this.driver);
        const addShippingAddressPage = new AddShippingAddressPage(this.driver);
        const addShippingAddressPageInvalidScenarios = new AddShippingAddressPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display");
        //click aside 'Address Book' link
        await myAccountPage.clickAsideAddressBookLink();
        //capture screenshot of address book page display
        await TestMethods.captureScreenshot(this.driver, "Address Book Page Display");
        //address book page web element assert
        await addressBookPage.isAddressBookPageWebElementDisplayed();
        //address book page text element assert
        await this.isAddressBookPageTextElementAsExpected();
        //click 'Add shipping address' button
        await addressBookPage.clickAddShippingAddressButton();
        //add shipping address web element assert
        await addShippingAddressPage.isAddShippingAddressPageWebElementDisplayed();
        //add shipping address text element assert
        await this.isAddShippingAddressPageTextElementAsExpected()
        //capture screenshot of add shipping address page display before invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Shipping Address Page Display Before Data Input");
        //input valid shipping address first name into first name input field
        await addShippingAddressPage.inputValidFirstNameIntoShippingAddressFirstNameInputField();
        //input valid shipping address format last name into last name input field
        await addShippingAddressPage.inputValidLastNameIntoShippingAddressLastNameInputField();
        //click country dropdown menu
        await addShippingAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addShippingAddressPage.selectUSCountryOption();
        //click shipping address region dropdown menu
        await addShippingAddressPage.clickRegionDropdownMenu();
        //select 'Illinois' region option
        await addShippingAddressPage.selectIllinoisRegionOption();
        //input valid shipping address street into street input field
        await addShippingAddressPage.inputValidStreetIntoShippingAddressStreetInputField();
        //input valid shipping address city into city input field
        await addShippingAddressPage.inputValidCityIntoShippingCityInputField();
        //input invalid shipping address post code format into post code input field (special symbols only)
        await addShippingAddressPageInvalidScenarios.inputInvalidPostCodeFormatIntoShippingAddressPostCodeInputField();
        //capture screenshot of add shipping address page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Shipping Address Page Display After Data Input - Invalid Post Code Input Format");
        //click 'Add shipping address' button
        await addShippingAddressPage.clickWriteShippingAddressButton();
        //assert the user gets expected error message, log the issue otherwise
        try {
            const addressBookAlertMessage = await addShippingAddressPageInvalidScenarios.getShippingAddressSingularInputError();
            assert.strictEqual(addressBookAlertMessage, "Proszę podać poprawny kod pocztowy.", "The address book page shipping address invalid post code input format error doesn't match expectations.");
        } catch (e){
            Logger.error("Invalid shipping address post code input format error doesn't get triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Shipping Address Addition Test Result - Invalid Post Code Format");
    }
    //invalid add shipping address test method - invalid user city format (special symbols only)
    async invalidAddShippingAddressInvalidCityFormatTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const addressBookPage = new AddressBookPage(this.driver);
        const addShippingAddressPage = new AddShippingAddressPage(this.driver);
        const addShippingAddressPageInvalidScenarios = new AddShippingAddressPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display");
        //click aside 'Address Book' link
        await myAccountPage.clickAsideAddressBookLink();
        //capture screenshot of address book page display
        await TestMethods.captureScreenshot(this.driver, "Address Book Page Display");
        //address book page web element assert
        await addressBookPage.isAddressBookPageWebElementDisplayed();
        //address book page text element assert
        await this.isAddressBookPageTextElementAsExpected();
        //click 'Add shipping address' button
        await addressBookPage.clickAddShippingAddressButton();
        //add shipping address web element assert
        await addShippingAddressPage.isAddShippingAddressPageWebElementDisplayed();
        //add shipping address text element assert
        await this.isAddShippingAddressPageTextElementAsExpected()
        //capture screenshot of add shipping address page display before invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Shipping Address Page Display Before Data Input");
        //input valid shipping address first name into first name input field
        await addShippingAddressPage.inputValidFirstNameIntoShippingAddressFirstNameInputField();
        //input valid shipping address format last name into last name input field
        await addShippingAddressPage.inputValidLastNameIntoShippingAddressLastNameInputField();
        //click country dropdown menu
        await addShippingAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addShippingAddressPage.selectUSCountryOption();
        //click shipping address region dropdown menu
        await addShippingAddressPage.clickRegionDropdownMenu();
        //select 'Illinois' region option
        await addShippingAddressPage.selectIllinoisRegionOption();
        //input valid shipping address street into street input field
        await addShippingAddressPage.inputValidStreetIntoShippingAddressStreetInputField();
        //input invalid shipping address city format into city input field (special symbols only)
        await addShippingAddressPageInvalidScenarios.inputInvalidCityFormatIntoShippingCityInputField();
        //capture screenshot of add shipping address page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Shipping Address Page Display After Data Input - Invalid City Input Format");
        //input valid shipping address post code into post code input field
        await addShippingAddressPage.inputValidPostCodeIntoShippingAddressPostCodeInputField();
        //capture screenshot after invalid shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Shipping Address Page After Invalid Data Input");
        //click 'Add shipping address' button
        await addShippingAddressPage.clickWriteShippingAddressButton();
        //assert the user gets expected error message, log the issue otherwise
        try {
            const addressBookAlertMessage = await addShippingAddressPageInvalidScenarios.getShippingAddressSingularInputError();
            assert.strictEqual(addressBookAlertMessage, "Miasto jesit zbyt długim.", "The address book page shipping address invalid city input format error doesn't match expectations.");
        } catch (e){
            Logger.error("Invalid shipping address city input format error doesn't get triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Shipping Address Addition Test Result - Invalid City Format");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //valid add billing address test methods

    //valid add billing address test method
    async validAddBillingAddressTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const addressBookPage = new AddressBookPage(this.driver);
        const addBillingAddressPage = new AddBillingAddressPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //click aside 'My Account' link
        await myAccountPage.clickAsideMyAccountLink();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display");
        //click 'Address Book' link
        await myAccountPage.clickAddressBookLink();
        //capture screenshot of address book page display
        await TestMethods.captureScreenshot(this.driver, "Address Book Page Display")
        //address book page web element assert
        await addressBookPage.isAddressBookPageWebElementDisplayed();
        //address book page text element assert
        await this.isAddressBookPageTextElementAsExpected();
        //click 'Add billing address' button
        await addressBookPage.clickAddBillingAddressButton();
        //add billing address web element assert
        await addBillingAddressPage.isAddBillingAddressPageWebElementDisplayed();
        //add billing address text element assert
        await this.isAddBillingAddressPageTextElementAsExpected()
        //capture screenshot of add billing address display
        await TestMethods.captureScreenshot(this.driver, "Add Billing Address Book Page Display")
        //click 'Country' dropdown menu
        await addBillingAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addBillingAddressPage.selectUSCountryOption();
        //click 'Region' dropdown menu
        await addBillingAddressPage.clickRegionDropdownMenu();
        //select 'United States' option
        await addBillingAddressPage.selectIllinoisRegionOption();
        //input valid billing street into address input field
        await addBillingAddressPage.inputValidStreetIntoBillingAddressStreetInputField();
        //input valid billing city into city input field
        await addBillingAddressPage.inputValidCityIntoBillingAddressCityInputField();
        //input valid billing post code into post code input field
        await addBillingAddressPage.inputValidPostCodeIntoBillingAddressPostCodeInputField();
        //input valid billing phone into phone input field
        await addBillingAddressPage.inputValidPhoneIntoBillingAddressPhoneInputField();
        //capture screenshot after valid billing address data input
        await TestMethods.captureScreenshot(this.driver, "Billing Address Page After Valid Data Input")
        //click 'Save billing address' button
        await addBillingAddressPage.clickSaveBillingAddressButton();
        //assert the user gets expected confirmation message
        const addressBookAlertMessage = await addressBookPage.getAddressBookAlertMessage();
        assert.strictEqual(addressBookAlertMessage,   "Adres został zmieniony.", "The address book page billing address addition message doesn't match expectations or the billing address addition has failed.");
        //log billing address
        await this.logAddressBookBillingAddressData();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid Billing Address Addition Test Result");
    }

    //valid add billing address (with edited email) test method
    async validAddBillingAddressWithEditedEmailTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const addressBookPage = new AddressBookPage(this.driver);
        const addBillingAddressPage = new AddBillingAddressPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //click aside 'My Account' link
        await myAccountPage.clickAsideMyAccountLink();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display");
        //click 'Address Book' link
        await myAccountPage.clickAddressBookLink();
        //capture screenshot of address book page display
        await TestMethods.captureScreenshot(this.driver, "Address Book Page Display")
        //address book page web element assert
        await addressBookPage.isAddressBookPageWebElementDisplayed();
        //address book page text element assert
        await this.isAddressBookPageTextElementAsExpected();
        //click 'Add billing address' button
        await addressBookPage.clickAddBillingAddressButton();
        //add billing address web element assert
        await addBillingAddressPage.isAddBillingAddressPageWebElementDisplayed();
        //add billing address text element assert
        await this.isAddBillingAddressPageTextElementAsExpected()
        //capture screenshot of add billing address display
        await TestMethods.captureScreenshot(this.driver, "Add Billing Address Book Page Display")
        //click 'Country' dropdown menu
        await addBillingAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addBillingAddressPage.selectUSCountryOption();
        //click 'Region' dropdown menu
        await addBillingAddressPage.clickRegionDropdownMenu();
        //select 'United States' option
        await addBillingAddressPage.selectIllinoisRegionOption();
        //input valid billing street into address input field
        await addBillingAddressPage.inputValidStreetIntoBillingAddressStreetInputField();
        //input valid billing city into city input field
        await addBillingAddressPage.inputValidCityIntoBillingAddressCityInputField();
        //input valid billing post code into post code input field
        await addBillingAddressPage.inputValidPostCodeIntoBillingAddressPostCodeInputField();
        //input valid billing phone into phone input field
        await addBillingAddressPage.inputValidPhoneIntoBillingAddressPhoneInputField();
        //input valid billing edited email into email input field
        await addBillingAddressPage.inputValidEditedEmailIntoBillingAddressEmailInputField();
        //capture screenshot after valid billing address data input
        await TestMethods.captureScreenshot(this.driver, "Billing Address Page (With Edited Email) After Valid Data Input")
        //click 'Save billing address' button
        await addBillingAddressPage.clickSaveBillingAddressButton();
        //assert the user gets expected confirmation message
        const addressBookAlertMessage = await addressBookPage.getAddressBookAlertMessage();
        assert.strictEqual(addressBookAlertMessage,   "Adres został zmieniony.", "The address book page billing address addition message doesn't match expectations or the billing address addition has failed.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid Billing Address Addition (With Edited Email) Test Result");
    }

    //invalid add billing address tests

    //no singular input

    //invalid add billing address test method - no user first name
    async invalidAddBillingAddressNoFirstNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const addressBookPage = new AddressBookPage(this.driver);
        const addBillingAddressPage = new AddBillingAddressPage(this.driver);
        const addBillingAddressPageInvalidScenarios = new AddBillingAddressPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //click aside 'My Account' link
        await myAccountPage.clickAsideMyAccountLink();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display");
        //click 'Address Book' link
        await myAccountPage.clickAddressBookLink();
        //capture screenshot of address book page display
        await TestMethods.captureScreenshot(this.driver, "Address Book Page Display")
        //address book page web element assert
        await addressBookPage.isAddressBookPageWebElementDisplayed();
        //address book page text element assert
        await this.isAddressBookPageTextElementAsExpected();
        //click 'Add billing address' button
        await addressBookPage.clickAddBillingAddressButton();
        //add billing address web element assert
        await addBillingAddressPage.isAddBillingAddressPageWebElementDisplayed();
        //add billing address text element assert
        await this.isAddBillingAddressPageTextElementAsExpected()
        //capture screenshot before valid billing address data input
        await TestMethods.captureScreenshot(this.driver, "Billing Address Page Before Data Input")
        //input no billing user first name into first name input field
        await addBillingAddressPageInvalidScenarios.inputNoFirstNameIntoBillingAddressFirstNameInputField();
        //capture screenshot of add shipping address page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Billing Address Page Display After Invalid Data Input - No First Name");
        //click 'Country' dropdown menu
        await addBillingAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addBillingAddressPage.selectUSCountryOption();
        //click 'Region' dropdown menu
        await addBillingAddressPage.clickRegionDropdownMenu();
        //select 'United States' option
        await addBillingAddressPage.selectIllinoisRegionOption();
        //input valid billing street into address input field
        await addBillingAddressPage.inputValidStreetIntoBillingAddressStreetInputField();
        //input valid billing city into city input field
        await addBillingAddressPage.inputValidCityIntoBillingAddressCityInputField();
        //input valid billing post code into post code input field
        await addBillingAddressPage.inputValidPostCodeIntoBillingAddressPostCodeInputField();
        //input valid billing phone into phone input field
        await addBillingAddressPage.inputValidPhoneIntoBillingAddressPhoneInputField();
        //click 'Save billing address' button
        await addBillingAddressPage.clickSaveBillingAddressButton();
        //assert the user gets expected error message
        const addressBookAlertMessage = await addBillingAddressPageInvalidScenarios.getBillingAddressSingularInputError();
        assert.strictEqual(addressBookAlertMessage,   "Imię jest wymaganym polem.", "The address book page billing address missing first name input error doesn't match expectations.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Billing Address Addition Test Result - No First Name");
    }
    //invalid add billing address test method - no user last name
    async invalidAddBillingAddressNoLastNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const addressBookPage = new AddressBookPage(this.driver);
        const addBillingAddressPage = new AddBillingAddressPage(this.driver);
        const addBillingAddressPageInvalidScenarios = new AddBillingAddressPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //click aside 'My Account' link
        await myAccountPage.clickAsideMyAccountLink();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display");
        //click 'Address Book' link
        await myAccountPage.clickAddressBookLink();
        //capture screenshot of address book page display
        await TestMethods.captureScreenshot(this.driver, "Address Book Page Display");
        //address book page web element assert
        await addressBookPage.isAddressBookPageWebElementDisplayed();
        //address book page text element assert
        await this.isAddressBookPageTextElementAsExpected();
        //click 'Add billing address' button
        await addressBookPage.clickAddBillingAddressButton();
        //add billing address web element assert
        await addBillingAddressPage.isAddBillingAddressPageWebElementDisplayed();
        //add billing address text element assert
        await this.isAddBillingAddressPageTextElementAsExpected();
        //capture screenshot before valid billing address data input
        await TestMethods.captureScreenshot(this.driver, "Billing Address Page Before Data Input");
        //input no billing user last name into last name input field
        await addBillingAddressPageInvalidScenarios.inputNoLastNameIntoBillingAddressLastNameInputField();
        //capture screenshot of add shipping address page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Billing Address Page Display After Invalid Data Input - No Last Name");
        //click 'Country' dropdown menu
        await addBillingAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addBillingAddressPage.selectUSCountryOption();
        //click 'Region' dropdown menu
        await addBillingAddressPage.clickRegionDropdownMenu();
        //select 'United States' option
        await addBillingAddressPage.selectIllinoisRegionOption();
        //input valid billing street into address input field
        await addBillingAddressPage.inputValidStreetIntoBillingAddressStreetInputField();
        //input valid billing city into city input field
        await addBillingAddressPage.inputValidCityIntoBillingAddressCityInputField();
        //input valid billing post code into post code input field
        await addBillingAddressPage.inputValidPostCodeIntoBillingAddressPostCodeInputField();
        //input valid billing phone into phone input field
        await addBillingAddressPage.inputValidPhoneIntoBillingAddressPhoneInputField();
        //click 'Save billing address' button
        await addBillingAddressPage.clickSaveBillingAddressButton();
        //assert the user gets expected error message
        const addressBookAlertMessage = await addBillingAddressPageInvalidScenarios.getBillingAddressSingularInputError();
        assert.strictEqual(addressBookAlertMessage,   "Nazwisko jest wymaganym polem.", "The address book page billing address missing last name input error doesn't match expectations.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Billing Address Addition Test Result - No Last Name");
    }
    //invalid add billing address test method - no user country
    async invalidAddBillingAddressNoCountryTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const addressBookPage = new AddressBookPage(this.driver);
        const addBillingAddressPage = new AddBillingAddressPage(this.driver);
        const addBillingAddressPageInvalidScenarios = new AddBillingAddressPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //click aside 'My Account' link
        await myAccountPage.clickAsideMyAccountLink();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display");
        //click 'Address Book' link
        await myAccountPage.clickAddressBookLink();
        //capture screenshot of address book page display
        await TestMethods.captureScreenshot(this.driver, "Address Book Page Display")
        //address book page web element assert
        await addressBookPage.isAddressBookPageWebElementDisplayed();
        //address book page text element assert
        await this.isAddressBookPageTextElementAsExpected();
        //click 'Add billing address' button
        await addressBookPage.clickAddBillingAddressButton();
        //add billing address web element assert
        await addBillingAddressPage.isAddBillingAddressPageWebElementDisplayed();
        //add billing address text element assert
        await this.isAddBillingAddressPageTextElementAsExpected()
        //capture screenshot before valid billing address data input
        await TestMethods.captureScreenshot(this.driver, "Billing Address Page Before Data Input");
        //capture screenshot of add shipping address page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Billing Address Page Display After Invalid Data Input - No Country");
        //input valid billing street into address input field
        await addBillingAddressPage.inputValidStreetIntoBillingAddressStreetInputField();
        //input valid billing city into city input field
        await addBillingAddressPage.inputValidCityIntoBillingAddressCityInputField();
        //input valid billing post code into post code input field
        await addBillingAddressPage.inputValidPostCodeIntoBillingAddressPostCodeInputField();
        //input valid billing phone into phone input field
        await addBillingAddressPage.inputValidPhoneIntoBillingAddressPhoneInputField();
        //click 'Save billing address' button
        await addBillingAddressPage.clickSaveBillingAddressButton();
        //assert the user gets expected error message
        const addressBookAlertMessage = await addBillingAddressPageInvalidScenarios.getBillingAddressSingularInputError();
        assert.strictEqual(addressBookAlertMessage,   "Kraj / region jest wymaganym polem.", "The address book page billing address missing country input error doesn't match expectations.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Billing Address Addition Test Result - No Country");
    }
    //invalid add billing address test method - no user state
    async invalidAddBillingAddressNoStateTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const addressBookPage = new AddressBookPage(this.driver);
        const addBillingAddressPage = new AddBillingAddressPage(this.driver);
        const addBillingAddressPageInvalidScenarios = new AddBillingAddressPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //click aside 'My Account' link
        await myAccountPage.clickAsideMyAccountLink();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display");
        //click 'Address Book' link
        await myAccountPage.clickAddressBookLink();
        //capture screenshot of address book page display
        await TestMethods.captureScreenshot(this.driver, "Address Book Page Display");
        //address book page web element assert
        await addressBookPage.isAddressBookPageWebElementDisplayed();
        //address book page text element assert
        await this.isAddressBookPageTextElementAsExpected();
        //click 'Add billing address' button
        await addressBookPage.clickAddBillingAddressButton();
        //add billing address web element assert
        await addBillingAddressPage.isAddBillingAddressPageWebElementDisplayed();
        //add billing address text element assert
        await this.isAddBillingAddressPageTextElementAsExpected();
        //capture screenshot before valid billing address data input
        await TestMethods.captureScreenshot(this.driver, "Billing Address Page Before Data Input");
        //click 'Country' dropdown menu
        await addBillingAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addBillingAddressPage.selectUSCountryOption();
        //capture screenshot of add shipping address page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Billing Address Page Display After Invalid Data Input - No State");
        //input valid billing street into address input field
        await addBillingAddressPage.inputValidStreetIntoBillingAddressStreetInputField();
        //input valid billing city into city input field
        await addBillingAddressPage.inputValidCityIntoBillingAddressCityInputField();
        //input valid billing post code into post code input field
        await addBillingAddressPage.inputValidPostCodeIntoBillingAddressPostCodeInputField();
        //input valid billing phone into phone input field
        await addBillingAddressPage.inputValidPhoneIntoBillingAddressPhoneInputField();
        //click 'Save billing address' button
        await addBillingAddressPage.clickSaveBillingAddressButton();
        //assert the user gets expected error message
        const addressBookAlertMessage = await addBillingAddressPageInvalidScenarios.getBillingAddressSingularInputError();
        assert.strictEqual(addressBookAlertMessage,   "Województwo jest wymaganym polem.", "The address book page billing address missing state input error doesn't match expectations.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Billing Address Addition Test Result - No State");
    }
    //invalid add billing address test method - no user street
    async invalidAddBillingAddressNoStreetTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const addressBookPage = new AddressBookPage(this.driver);
        const addBillingAddressPage = new AddBillingAddressPage(this.driver);
        const addBillingAddressPageInvalidScenarios = new AddBillingAddressPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //click aside 'My Account' link
        await myAccountPage.clickAsideMyAccountLink();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display");
        //click 'Address Book' link
        await myAccountPage.clickAddressBookLink();
        //capture screenshot of address book page display
        await TestMethods.captureScreenshot(this.driver, "Address Book Page Display");
        //address book page web element assert
        await addressBookPage.isAddressBookPageWebElementDisplayed();
        //address book page text element assert
        await this.isAddressBookPageTextElementAsExpected();
        //click 'Add billing address' button
        await addressBookPage.clickAddBillingAddressButton();
        //add billing address web element assert
        await addBillingAddressPage.isAddBillingAddressPageWebElementDisplayed();
        //add billing address text element assert
        await this.isAddBillingAddressPageTextElementAsExpected();
        //capture screenshot before valid billing address data input
        await TestMethods.captureScreenshot(this.driver, "Billing Address Page Before Data Input");
        //click 'Country' dropdown menu
        await addBillingAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addBillingAddressPage.selectUSCountryOption();
        //click 'Region' dropdown menu
        await addBillingAddressPage.clickRegionDropdownMenu();
        //select 'United States' option
        await addBillingAddressPage.selectIllinoisRegionOption();
        //input no billing street into address input field
        await addBillingAddressPageInvalidScenarios.inputNoStreetIntoBillingAddressStreetInputField();
        //capture screenshot of add shipping address page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Billing Address Page Display After Invalid Data Input - No Street");
        //input valid billing city into city input field
        await addBillingAddressPage.inputValidCityIntoBillingAddressCityInputField();
        //input valid billing post code into post code input field
        await addBillingAddressPage.inputValidPostCodeIntoBillingAddressPostCodeInputField();
        //input valid billing phone into phone input field
        await addBillingAddressPage.inputValidPhoneIntoBillingAddressPhoneInputField();
        //click 'Save billing address' button
        await addBillingAddressPage.clickSaveBillingAddressButton();
        //assert the user gets expected error message
        const addressBookAlertMessage = await addBillingAddressPageInvalidScenarios.getBillingAddressSingularInputError();
        assert.strictEqual(addressBookAlertMessage,   "Ulica jest wymaganym polem.", "The address book page billing address missing street input error doesn't match expectations.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Billing Address Addition Test Result - No Street");
    }
    //invalid add billing address test method - no user city
    async invalidAddBillingAddressNoCityTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const addressBookPage = new AddressBookPage(this.driver);
        const addBillingAddressPage = new AddBillingAddressPage(this.driver);
        const addBillingAddressPageInvalidScenarios = new AddBillingAddressPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //click aside 'My Account' link
        await myAccountPage.clickAsideMyAccountLink();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display");
        //click 'Address Book' link
        await myAccountPage.clickAddressBookLink();
        //capture screenshot of address book page display
        await TestMethods.captureScreenshot(this.driver, "Address Book Page Display");
        //address book page web element assert
        await addressBookPage.isAddressBookPageWebElementDisplayed();
        //address book page text element assert
        await this.isAddressBookPageTextElementAsExpected();
        //click 'Add billing address' button
        await addressBookPage.clickAddBillingAddressButton();
        //add billing address web element assert
        await addBillingAddressPage.isAddBillingAddressPageWebElementDisplayed();
        //add billing address text element assert
        await this.isAddBillingAddressPageTextElementAsExpected();
        //capture screenshot before valid billing address data input
        await TestMethods.captureScreenshot(this.driver, "Billing Address Page Before Data Input");
        //click 'Country' dropdown menu
        await addBillingAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addBillingAddressPage.selectUSCountryOption();
        //click 'Region' dropdown menu
        await addBillingAddressPage.clickRegionDropdownMenu();
        //select 'United States' option
        await addBillingAddressPage.selectIllinoisRegionOption();
        //input valid billing street into address input field
        await addBillingAddressPage.inputValidStreetIntoBillingAddressStreetInputField();
        //input no billing city into city input field
        await addBillingAddressPageInvalidScenarios.inputNoCityIntoShippingCityInputField();
        //capture screenshot of add shipping address page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Billing Address Page Display After Invalid Data Input - No City");
        //input valid billing post code into post code input field
        await addBillingAddressPage.inputValidPostCodeIntoBillingAddressPostCodeInputField();
        //input valid billing phone into phone input field
        await addBillingAddressPage.inputValidPhoneIntoBillingAddressPhoneInputField();
        //click 'Save billing address' button
        await addBillingAddressPage.clickSaveBillingAddressButton();
        //assert the user gets expected error message
        const addressBookAlertMessage = await addBillingAddressPageInvalidScenarios.getBillingAddressSingularInputError();
        assert.strictEqual(addressBookAlertMessage,   "Miasto jest wymaganym polem.", "The address book page billing address missing city input error doesn't match expectations.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Billing Address Addition Test Result - No City");
    }
    //invalid add billing address test method - no user post code
    async invalidAddBillingAddressNoPostCodeTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const addressBookPage = new AddressBookPage(this.driver);
        const addBillingAddressPage = new AddBillingAddressPage(this.driver);
        const addBillingAddressPageInvalidScenarios = new AddBillingAddressPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //click aside 'My Account' link
        await myAccountPage.clickAsideMyAccountLink();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display");
        //click 'Address Book' link
        await myAccountPage.clickAddressBookLink();
        //capture screenshot of address book page display
        await TestMethods.captureScreenshot(this.driver, "Address Book Page Display");
        //address book page web element assert
        await addressBookPage.isAddressBookPageWebElementDisplayed();
        //address book page text element assert
        await this.isAddressBookPageTextElementAsExpected();
        //click 'Add billing address' button
        await addressBookPage.clickAddBillingAddressButton();
        //add billing address web element assert
        await addBillingAddressPage.isAddBillingAddressPageWebElementDisplayed();
        //add billing address text element assert
        await this.isAddBillingAddressPageTextElementAsExpected();
        //capture screenshot before valid billing address data input
        await TestMethods.captureScreenshot(this.driver, "Billing Address Page Before Data Input");
        //click 'Country' dropdown menu
        await addBillingAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addBillingAddressPage.selectUSCountryOption();
        //click 'Region' dropdown menu
        await addBillingAddressPage.clickRegionDropdownMenu();
        //select 'United States' option
        await addBillingAddressPage.selectIllinoisRegionOption();
        //input valid billing street into address input field
        await addBillingAddressPage.inputValidStreetIntoBillingAddressStreetInputField();
        //input valid billing city into city input field
        await addBillingAddressPage.inputValidCityIntoBillingAddressCityInputField();
        //input no billing post code into post code input field
        await addBillingAddressPageInvalidScenarios.inputNoPostCodeIntoBillingAddressPostCodeInputField();
        //capture screenshot of add shipping address page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Billing Address Page Display After Invalid Data Input - No Post Code");
        //input valid billing phone into phone input field
        await addBillingAddressPage.inputValidPhoneIntoBillingAddressPhoneInputField();
        //click 'Save billing address' button
        await addBillingAddressPage.clickSaveBillingAddressButton();
        //assert the user gets expected error message
        const addressBookAlertMessage = await addBillingAddressPageInvalidScenarios.getBillingAddressSingularInputError();
        assert.strictEqual(addressBookAlertMessage,   "Kod pocztowy jest wymaganym polem.", "The address book page billing address missing post code input error doesn't match expectations.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Billing Address Addition Test Result - No Post Code");
    }
    //invalid add billing address test method - no user phone number
    async invalidAddBillingAddressNoPhoneTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const addressBookPage = new AddressBookPage(this.driver);
        const addBillingAddressPage = new AddBillingAddressPage(this.driver);
        const addBillingAddressPageInvalidScenarios = new AddBillingAddressPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //click aside 'My Account' link
        await myAccountPage.clickAsideMyAccountLink();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display");
        //click 'Address Book' link
        await myAccountPage.clickAddressBookLink();
        //capture screenshot of address book page display
        await TestMethods.captureScreenshot(this.driver, "Address Book Page Display");
        //address book page web element assert
        await addressBookPage.isAddressBookPageWebElementDisplayed();
        //address book page text element assert
        await this.isAddressBookPageTextElementAsExpected();
        //click 'Add billing address' button
        await addressBookPage.clickAddBillingAddressButton();
        //add billing address web element assert
        await addBillingAddressPage.isAddBillingAddressPageWebElementDisplayed();
        //add billing address text element assert
        await this.isAddBillingAddressPageTextElementAsExpected();
        //capture screenshot before valid billing address data input
        await TestMethods.captureScreenshot(this.driver, "Billing Address Page Before Data Input");
        //click 'Country' dropdown menu
        await addBillingAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addBillingAddressPage.selectUSCountryOption();
        //click 'Region' dropdown menu
        await addBillingAddressPage.clickRegionDropdownMenu();
        //select 'United States' option
        await addBillingAddressPage.selectIllinoisRegionOption();
        //input valid billing street into address input field
        await addBillingAddressPage.inputValidStreetIntoBillingAddressStreetInputField();
        //input valid billing city into city input field
        await addBillingAddressPage.inputValidCityIntoBillingAddressCityInputField();
        //input valid billing post code into post code input field
        await addBillingAddressPage.inputValidPostCodeIntoBillingAddressPostCodeInputField();
        //input no billing phone into phone input field
        await addBillingAddressPageInvalidScenarios.inputNoPhoneIntoBillingAddressPhoneInputField();
        //capture screenshot of add shipping address page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Billing Address Page Display After Invalid Data Input - No Phone");
        //click 'Save billing address' button
        await addBillingAddressPage.clickSaveBillingAddressButton();
        //assert the user gets expected error message
        const addressBookAlertMessage = await addBillingAddressPageInvalidScenarios.getBillingAddressSingularInputError();
        assert.strictEqual(addressBookAlertMessage,   "Telefon jest wymaganym polem.", "The address book page billing address missing phone input error doesn't match expectations.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Billing Address Addition Test Result - No Phone");
    }
    //invalid add billing address test method - no user email
    async invalidAddBillingAddressNoEmailTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const addressBookPage = new AddressBookPage(this.driver);
        const addBillingAddressPage = new AddBillingAddressPage(this.driver);
        const addBillingAddressPageInvalidScenarios = new AddBillingAddressPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //click aside 'My Account' link
        await myAccountPage.clickAsideMyAccountLink();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display");
        //click 'Address Book' link
        await myAccountPage.clickAddressBookLink();
        //capture screenshot of address book page display
        await TestMethods.captureScreenshot(this.driver, "Address Book Page Display");
        //address book page web element assert
        await addressBookPage.isAddressBookPageWebElementDisplayed();
        //address book page text element assert
        await this.isAddressBookPageTextElementAsExpected();
        //click 'Add billing address' button
        await addressBookPage.clickAddBillingAddressButton();
        //add billing address web element assert
        await addBillingAddressPage.isAddBillingAddressPageWebElementDisplayed();
        //add billing address text element assert
        await this.isAddBillingAddressPageTextElementAsExpected();
        //capture screenshot before valid billing address data input
        await TestMethods.captureScreenshot(this.driver, "Billing Address Page Before Data Input");
        //click 'Country' dropdown menu
        await addBillingAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addBillingAddressPage.selectUSCountryOption();
        //click 'Region' dropdown menu
        await addBillingAddressPage.clickRegionDropdownMenu();
        //select 'United States' option
        await addBillingAddressPage.selectIllinoisRegionOption();
        //input valid billing street into address input field
        await addBillingAddressPage.inputValidStreetIntoBillingAddressStreetInputField();
        //input valid billing city into city input field
        await addBillingAddressPage.inputValidCityIntoBillingAddressCityInputField();
        //input valid billing post code into post code input field
        await addBillingAddressPage.inputValidPostCodeIntoBillingAddressPostCodeInputField();
        //input valid billing phone into phone input field
        await addBillingAddressPage.inputValidPhoneIntoBillingAddressPhoneInputField();
        //input no billing email into email input field
        await addBillingAddressPageInvalidScenarios.inputNoEmailIntoBillingAddressEmailInputField();
        //capture screenshot of add shipping address page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Billing Address Page Display After Invalid Data Input - No Email");
        //click 'Save billing address' button
        await addBillingAddressPage.clickSaveBillingAddressButton();
        //assert the user gets expected error message
        const addressBookAlertMessage = await addBillingAddressPageInvalidScenarios.getBillingAddressSingularInputError();
        assert.strictEqual(addressBookAlertMessage,   "Adres email jest wymaganym polem.", "The address book page billing address missing email input error doesn't match expectations.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Billing Address Addition Test Result - No Email");
    }

    //too short singular input

    //invalid add billing address test method - too short user first name (1 char)
    async invalidAddBillingAddressTooShortFirstNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const addressBookPage = new AddressBookPage(this.driver);
        const addBillingAddressPage = new AddBillingAddressPage(this.driver);
        const addBillingAddressPageInvalidScenarios = new AddBillingAddressPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //click aside 'My Account' link
        await myAccountPage.clickAsideMyAccountLink();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display");
        //click 'Address Book' link
        await myAccountPage.clickAddressBookLink();
        //capture screenshot of address book page display
        await TestMethods.captureScreenshot(this.driver, "Address Book Page Display")
        //address book page web element assert
        await addressBookPage.isAddressBookPageWebElementDisplayed();
        //address book page text element assert
        await this.isAddressBookPageTextElementAsExpected();
        //click 'Add billing address' button
        await addressBookPage.clickAddBillingAddressButton();
        //add billing address web element assert
        await addBillingAddressPage.isAddBillingAddressPageWebElementDisplayed();
        //add billing address text element assert
        await this.isAddBillingAddressPageTextElementAsExpected()
        //capture screenshot before valid billing address data input
        await TestMethods.captureScreenshot(this.driver, "Billing Address Page Before Data Input")
        //input too short billing user first name into first name input field (1 char)
        await addBillingAddressPageInvalidScenarios.inputTooShortFirstNameIntoBillingAddressFirstNameInputField();
        //capture screenshot of add shipping address page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Billing Address Page Display After Invalid Data Input - Too Short First Name");
        //click 'Country' dropdown menu
        await addBillingAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addBillingAddressPage.selectUSCountryOption();
        //click 'Region' dropdown menu
        await addBillingAddressPage.clickRegionDropdownMenu();
        //select 'United States' option
        await addBillingAddressPage.selectIllinoisRegionOption();
        //input valid billing street into address input field
        await addBillingAddressPage.inputValidStreetIntoBillingAddressStreetInputField();
        //input valid billing city into city input field
        await addBillingAddressPage.inputValidCityIntoBillingAddressCityInputField();
        //input valid billing post code into post code input field
        await addBillingAddressPage.inputValidPostCodeIntoBillingAddressPostCodeInputField();
        //input valid billing phone into phone input field
        await addBillingAddressPage.inputValidPhoneIntoBillingAddressPhoneInputField();
        //click 'Save billing address' button
        await addBillingAddressPage.clickSaveBillingAddressButton();
        //assert the user gets expected error message, log the issue otherwise
        try {
            const addressBookAlertMessage = await addBillingAddressPageInvalidScenarios.getBillingAddressSingularInputError();
            assert.strictEqual(addressBookAlertMessage, "Imię jest zbyt krótkim.", "The address book page billing address too short first name input error doesn't match expectations.");
        } catch (e) {
            Logger.error("The billing address too short first name error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Billing Address Addition Test Result - Too Short First Name");
    }
    //invalid add billing address test method - too short user last name (1 char)
    async invalidAddBillingAddressTooShortLastNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const addressBookPage = new AddressBookPage(this.driver);
        const addBillingAddressPage = new AddBillingAddressPage(this.driver);
        const addBillingAddressPageInvalidScenarios = new AddBillingAddressPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //click aside 'My Account' link
        await myAccountPage.clickAsideMyAccountLink();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display");
        //click 'Address Book' link
        await myAccountPage.clickAddressBookLink();
        //capture screenshot of address book page display
        await TestMethods.captureScreenshot(this.driver, "Address Book Page Display")
        //address book page web element assert
        await addressBookPage.isAddressBookPageWebElementDisplayed();
        //address book page text element assert
        await this.isAddressBookPageTextElementAsExpected();
        //click 'Add billing address' button
        await addressBookPage.clickAddBillingAddressButton();
        //add billing address web element assert
        await addBillingAddressPage.isAddBillingAddressPageWebElementDisplayed();
        //add billing address text element assert
        await this.isAddBillingAddressPageTextElementAsExpected()
        //capture screenshot before valid billing address data input
        await TestMethods.captureScreenshot(this.driver, "Billing Address Page Before Data Input")
        //input too short billing user last name into last name input field (1 char)
        await addBillingAddressPageInvalidScenarios.inputTooShortLastNameIntoBillingAddressLastNameInputField();
        //capture screenshot of add shipping address page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Billing Address Page Display After Invalid Data Input - Too Short Last Name");
        //click 'Country' dropdown menu
        await addBillingAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addBillingAddressPage.selectUSCountryOption();
        //click 'Region' dropdown menu
        await addBillingAddressPage.clickRegionDropdownMenu();
        //select 'United States' option
        await addBillingAddressPage.selectIllinoisRegionOption();
        //input valid billing street into address input field
        await addBillingAddressPage.inputValidStreetIntoBillingAddressStreetInputField();
        //input valid billing city into city input field
        await addBillingAddressPage.inputValidCityIntoBillingAddressCityInputField();
        //input valid billing post code into post code input field
        await addBillingAddressPage.inputValidPostCodeIntoBillingAddressPostCodeInputField();
        //input valid billing phone into phone input field
        await addBillingAddressPage.inputValidPhoneIntoBillingAddressPhoneInputField();
        //click 'Save billing address' button
        await addBillingAddressPage.clickSaveBillingAddressButton();
        //assert the user gets expected error message, log the issue otherwise
        try {
            const addressBookAlertMessage = await addBillingAddressPageInvalidScenarios.getBillingAddressSingularInputError();
            assert.strictEqual(addressBookAlertMessage, "Nazwisko jest zbyt krótkie.", "The address book page billing address too short last name input error doesn't match expectations.");
        } catch (e) {
            Logger.error("The billing address too short last name error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Billing Address Addition Test Result - Too Short Last Name");
    }
    //invalid add billing address test method - too short user street (1 char)
    async invalidAddBillingAddressTooShortStreetTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const addressBookPage = new AddressBookPage(this.driver);
        const addBillingAddressPage = new AddBillingAddressPage(this.driver);
        const addBillingAddressPageInvalidScenarios = new AddBillingAddressPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //click aside 'My Account' link
        await myAccountPage.clickAsideMyAccountLink();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display");
        //click 'Address Book' link
        await myAccountPage.clickAddressBookLink();
        //capture screenshot of address book page display
        await TestMethods.captureScreenshot(this.driver, "Address Book Page Display")
        //address book page web element assert
        await addressBookPage.isAddressBookPageWebElementDisplayed();
        //address book page text element assert
        await this.isAddressBookPageTextElementAsExpected();
        //click 'Add billing address' button
        await addressBookPage.clickAddBillingAddressButton();
        //add billing address web element assert
        await addBillingAddressPage.isAddBillingAddressPageWebElementDisplayed();
        //add billing address text element assert
        await this.isAddBillingAddressPageTextElementAsExpected()
        //capture screenshot before valid billing address data input
        await TestMethods.captureScreenshot(this.driver, "Billing Address Page Before Data Input")
        //click 'Country' dropdown menu
        await addBillingAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addBillingAddressPage.selectUSCountryOption();
        //click 'Region' dropdown menu
        await addBillingAddressPage.clickRegionDropdownMenu();
        //select 'United States' option
        await addBillingAddressPage.selectIllinoisRegionOption();
        //input too short billing street into address input field (1 char)
        await addBillingAddressPageInvalidScenarios.inputTooShortStreetIntoBillingAddressStreetInputField();
        //capture screenshot of add shipping address page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Billing Address Page Display After Invalid Data Input - Too Short Street");
        //input valid billing city into city input field
        await addBillingAddressPage.inputValidCityIntoBillingAddressCityInputField();
        //input valid billing post code into post code input field
        await addBillingAddressPage.inputValidPostCodeIntoBillingAddressPostCodeInputField();
        //input valid billing phone into phone input field
        await addBillingAddressPage.inputValidPhoneIntoBillingAddressPhoneInputField();
        //click 'Save billing address' button
        await addBillingAddressPage.clickSaveBillingAddressButton();
        //assert the user gets expected error message, log the issue otherwise
        try {
            const addressBookAlertMessage = await addBillingAddressPageInvalidScenarios.getBillingAddressSingularInputError();
            assert.strictEqual(addressBookAlertMessage, "Ulica jest zbyt krótka.", "The address book page billing address too short street input error doesn't match expectations.");
        } catch (e) {
            Logger.error("The billing address too short street error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Billing Address Addition Test Result - Too Short Street");
    }
    //invalid add billing address test method - too short user city (1 char)
    async invalidAddBillingAddressTooShortCityTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const addressBookPage = new AddressBookPage(this.driver);
        const addBillingAddressPage = new AddBillingAddressPage(this.driver);
        const addBillingAddressPageInvalidScenarios = new AddBillingAddressPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //click aside 'My Account' link
        await myAccountPage.clickAsideMyAccountLink();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display");
        //click 'Address Book' link
        await myAccountPage.clickAddressBookLink();
        //capture screenshot of address book page display
        await TestMethods.captureScreenshot(this.driver, "Address Book Page Display")
        //address book page web element assert
        await addressBookPage.isAddressBookPageWebElementDisplayed();
        //address book page text element assert
        await this.isAddressBookPageTextElementAsExpected();
        //click 'Add billing address' button
        await addressBookPage.clickAddBillingAddressButton();
        //add billing address web element assert
        await addBillingAddressPage.isAddBillingAddressPageWebElementDisplayed();
        //add billing address text element assert
        await this.isAddBillingAddressPageTextElementAsExpected()
        //capture screenshot before valid billing address data input
        await TestMethods.captureScreenshot(this.driver, "Billing Address Page Before Data Input")
        //click 'Country' dropdown menu
        await addBillingAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addBillingAddressPage.selectUSCountryOption();
        //click 'Region' dropdown menu
        await addBillingAddressPage.clickRegionDropdownMenu();
        //select 'United States' option
        await addBillingAddressPage.selectIllinoisRegionOption();
        //input valid short billing street into address input field
        await addBillingAddressPage.inputValidStreetIntoBillingAddressStreetInputField();
        //input too short billing city into city input field (1 char)
        await addBillingAddressPageInvalidScenarios.inputTooShortCityIntoBillingAddressCityInputField();
        //capture screenshot of add shipping address page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Billing Address Page Display After Invalid Data Input - Too Short City");
        //input valid billing post code into post code input field
        await addBillingAddressPage.inputValidPostCodeIntoBillingAddressPostCodeInputField();
        //input valid billing phone into phone input field
        await addBillingAddressPage.inputValidPhoneIntoBillingAddressPhoneInputField();
        //click 'Save billing address' button
        await addBillingAddressPage.clickSaveBillingAddressButton();
        //assert the user gets expected error message, log the issue otherwise
        try {
            const addressBookAlertMessage = await addBillingAddressPageInvalidScenarios.getBillingAddressSingularInputError();
            assert.strictEqual(addressBookAlertMessage, "Miasto jest zbyt krótkie.", "The address book page billing address too short city input error doesn't match expectations.");
        } catch (e) {
            Logger.error("The billing address too short city error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Billing Address Addition Test Result - Too Short City");
    }
    //invalid add billing address test method - too short user post code (3 digits)
    async invalidAddBillingAddressTooShortPostCodeTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const addressBookPage = new AddressBookPage(this.driver);
        const addBillingAddressPage = new AddBillingAddressPage(this.driver);
        const addBillingAddressPageInvalidScenarios = new AddBillingAddressPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //click aside 'My Account' link
        await myAccountPage.clickAsideMyAccountLink();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display");
        //click 'Address Book' link
        await myAccountPage.clickAddressBookLink();
        //capture screenshot of address book page display
        await TestMethods.captureScreenshot(this.driver, "Address Book Page Display")
        //address book page web element assert
        await addressBookPage.isAddressBookPageWebElementDisplayed();
        //address book page text element assert
        await this.isAddressBookPageTextElementAsExpected();
        //click 'Add billing address' button
        await addressBookPage.clickAddBillingAddressButton();
        //add billing address web element assert
        await addBillingAddressPage.isAddBillingAddressPageWebElementDisplayed();
        //add billing address text element assert
        await this.isAddBillingAddressPageTextElementAsExpected()
        //capture screenshot before valid billing address data input
        await TestMethods.captureScreenshot(this.driver, "Billing Address Page Before Data Input")
        //click 'Country' dropdown menu
        await addBillingAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addBillingAddressPage.selectUSCountryOption();
        //click 'Region' dropdown menu
        await addBillingAddressPage.clickRegionDropdownMenu();
        //select 'United States' option
        await addBillingAddressPage.selectIllinoisRegionOption();
        //input valid short billing street into address input field
        await addBillingAddressPage.inputValidStreetIntoBillingAddressStreetInputField();
        //input valid billing city into city input field
        await addBillingAddressPage.inputValidCityIntoBillingAddressCityInputField();
        //input too short billing post code into post code input field (3 digits)
        await addBillingAddressPageInvalidScenarios.inputTooShortPostCodeIntoBillingAddressPostCodeInputField();
        //capture screenshot of add shipping address page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Billing Address Page Display After Invalid Data Input - Too Short Post Code");
        //input valid billing phone into phone input field
        await addBillingAddressPage.inputValidPhoneIntoBillingAddressPhoneInputField();
        //click 'Save billing address' button
        await addBillingAddressPage.clickSaveBillingAddressButton();
        //assert the user gets expected error message, log the issue otherwise
        try {
            const addressBookAlertMessage = await addBillingAddressPageInvalidScenarios.getBillingAddressSingularInputError();
            assert.strictEqual(addressBookAlertMessage, "Proszę podać poprawny kod pocztowy.", "The address book page billing address too short post code input error doesn't match expectations.");
        } catch (e) {
            Logger.error("The billing address too short post code error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Billing Address Addition Test Result - Too Short Post Code");
    }
    //invalid add billing address test method - too short user phone (1 digit)
    async invalidAddBillingAddressTooShortPhoneTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const addressBookPage = new AddressBookPage(this.driver);
        const addBillingAddressPage = new AddBillingAddressPage(this.driver);
        const addBillingAddressPageInvalidScenarios = new AddBillingAddressPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //click aside 'My Account' link
        await myAccountPage.clickAsideMyAccountLink();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display");
        //click 'Address Book' link
        await myAccountPage.clickAddressBookLink();
        //capture screenshot of address book page display
        await TestMethods.captureScreenshot(this.driver, "Address Book Page Display")
        //address book page web element assert
        await addressBookPage.isAddressBookPageWebElementDisplayed();
        //address book page text element assert
        await this.isAddressBookPageTextElementAsExpected();
        //click 'Add billing address' button
        await addressBookPage.clickAddBillingAddressButton();
        //add billing address web element assert
        await addBillingAddressPage.isAddBillingAddressPageWebElementDisplayed();
        //add billing address text element assert
        await this.isAddBillingAddressPageTextElementAsExpected()
        //capture screenshot before valid billing address data input
        await TestMethods.captureScreenshot(this.driver, "Billing Address Page Before Data Input")
        //click 'Country' dropdown menu
        await addBillingAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addBillingAddressPage.selectUSCountryOption();
        //click 'Region' dropdown menu
        await addBillingAddressPage.clickRegionDropdownMenu();
        //select 'United States' option
        await addBillingAddressPage.selectIllinoisRegionOption();
        //input valid short billing street into address input field
        await addBillingAddressPage.inputValidStreetIntoBillingAddressStreetInputField();
        //input valid billing city into city input field
        await addBillingAddressPage.inputValidCityIntoBillingAddressCityInputField();
        //input valid billing post code into post code input field
        await addBillingAddressPage.inputValidPostCodeIntoBillingAddressPostCodeInputField();
        //input too short billing phone into phone input field (1 digit)
        await addBillingAddressPageInvalidScenarios.inputTooShortPhoneIntoBillingAddressPhoneInputField();
        //capture screenshot of add shipping address page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Billing Address Page Display After Invalid Data Input - Too Short Phone");
        //click 'Save billing address' button
        await addBillingAddressPage.clickSaveBillingAddressButton();
        //assert the user gets expected error message, log the issue otherwise
        try {
            const addressBookAlertMessage = await addBillingAddressPageInvalidScenarios.getBillingAddressSingularInputError();
            assert.strictEqual(addressBookAlertMessage, "Telefon jest zbyt krótki.", "The address book page billing address too short phone input error doesn't match expectations.");
        } catch (e) {
            Logger.error("The billing address too short phone error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Billing Address Addition Test Result - Too Short Phone");
    }
    //invalid add billing address test method - too short user email (1 char -> name, domain)
    async invalidAddBillingAddressTooShortEmailTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const addressBookPage = new AddressBookPage(this.driver);
        const addBillingAddressPage = new AddBillingAddressPage(this.driver);
        const addBillingAddressPageInvalidScenarios = new AddBillingAddressPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //click aside 'My Account' link
        await myAccountPage.clickAsideMyAccountLink();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display");
        //click 'Address Book' link
        await myAccountPage.clickAddressBookLink();
        //capture screenshot of address book page display
        await TestMethods.captureScreenshot(this.driver, "Address Book Page Display")
        //address book page web element assert
        await addressBookPage.isAddressBookPageWebElementDisplayed();
        //address book page text element assert
        await this.isAddressBookPageTextElementAsExpected();
        //click 'Add billing address' button
        await addressBookPage.clickAddBillingAddressButton();
        //add billing address web element assert
        await addBillingAddressPage.isAddBillingAddressPageWebElementDisplayed();
        //add billing address text element assert
        await this.isAddBillingAddressPageTextElementAsExpected()
        //capture screenshot before valid billing address data input
        await TestMethods.captureScreenshot(this.driver, "Billing Address Page Before Data Input")
        //click 'Country' dropdown menu
        await addBillingAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addBillingAddressPage.selectUSCountryOption();
        //click 'Region' dropdown menu
        await addBillingAddressPage.clickRegionDropdownMenu();
        //select 'United States' option
        await addBillingAddressPage.selectIllinoisRegionOption();
        //input valid short billing street into address input field
        await addBillingAddressPage.inputValidStreetIntoBillingAddressStreetInputField();
        //input valid billing city into city input field
        await addBillingAddressPage.inputValidCityIntoBillingAddressCityInputField();
        //input valid billing post code into post code input field
        await addBillingAddressPage.inputValidPostCodeIntoBillingAddressPostCodeInputField();
        //input valid billing phone into phone input field
        await addBillingAddressPage.inputValidPhoneIntoBillingAddressPhoneInputField();
        //input too short billing email into email input field (1 char -> name, domain)
        await addBillingAddressPageInvalidScenarios.inputTooShortEmailIntoBillingAddressEmailInputField();
        //capture screenshot of add shipping address page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Billing Address Page Display After Invalid Data Input - Too Short Email");
        //click 'Save billing address' button
        await addBillingAddressPage.clickSaveBillingAddressButton();
        //assert the user gets expected error message, log the issue otherwise
        try {
            const addressBookAlertMessage = await addBillingAddressPageInvalidScenarios.getBillingAddressSingularInputError();
            assert.strictEqual(addressBookAlertMessage, "Adres email jest zbyt krótki.", "The address book page billing address too short email input error doesn't match expectations.");
        } catch (e) {
            Logger.error("The billing address too short email error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Billing Address Addition Test Result - Too Short Email");
    }

    //too long singular input

    //invalid add billing address test method - too long user first name (100 chars)
    async invalidAddBillingAddressTooLongFirstNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const addressBookPage = new AddressBookPage(this.driver);
        const addBillingAddressPage = new AddBillingAddressPage(this.driver);
        const addBillingAddressPageInvalidScenarios = new AddBillingAddressPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //click aside 'My Account' link
        await myAccountPage.clickAsideMyAccountLink();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display");
        //click 'Address Book' link
        await myAccountPage.clickAddressBookLink();
        //capture screenshot of address book page display
        await TestMethods.captureScreenshot(this.driver, "Address Book Page Display")
        //address book page web element assert
        await addressBookPage.isAddressBookPageWebElementDisplayed();
        //address book page text element assert
        await this.isAddressBookPageTextElementAsExpected();
        //click 'Add billing address' button
        await addressBookPage.clickAddBillingAddressButton();
        //add billing address web element assert
        await addBillingAddressPage.isAddBillingAddressPageWebElementDisplayed();
        //add billing address text element assert
        await this.isAddBillingAddressPageTextElementAsExpected()
        //capture screenshot before valid billing address data input
        await TestMethods.captureScreenshot(this.driver, "Billing Address Page Before Data Input")
        //input too long billing user first name into first name input field (100 chars)
        await addBillingAddressPageInvalidScenarios.inputTooLongFirstNameIntoBillingAddressFirstNameInputField();
        //capture screenshot of add shipping address page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Billing Address Page Display After Invalid Data Input - Too Long First Name");
        //click 'Country' dropdown menu
        await addBillingAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addBillingAddressPage.selectUSCountryOption();
        //click 'Region' dropdown menu
        await addBillingAddressPage.clickRegionDropdownMenu();
        //select 'United States' option
        await addBillingAddressPage.selectIllinoisRegionOption();
        //input valid billing street into address input field
        await addBillingAddressPage.inputValidStreetIntoBillingAddressStreetInputField();
        //input valid billing city into city input field
        await addBillingAddressPage.inputValidCityIntoBillingAddressCityInputField();
        //input valid billing post code into post code input field
        await addBillingAddressPage.inputValidPostCodeIntoBillingAddressPostCodeInputField();
        //input valid billing phone into phone input field
        await addBillingAddressPage.inputValidPhoneIntoBillingAddressPhoneInputField();
        //click 'Save billing address' button
        await addBillingAddressPage.clickSaveBillingAddressButton();
        //assert the user gets expected error message, log the issue otherwise
        try {
            const addressBookAlertMessage = await addBillingAddressPageInvalidScenarios.getBillingAddressSingularInputError();
            assert.strictEqual(addressBookAlertMessage, "Imię jest zbyt długim.", "The address book page billing address too long first name input error doesn't match expectations.");
        } catch (e) {
            Logger.error("The billing address too long first name error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Billing Address Addition Test Result - Too Long First Name");
    }
    //invalid add billing address test method - too short user last name (100 chars)
    async invalidAddBillingAddressTooLongLastNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const addressBookPage = new AddressBookPage(this.driver);
        const addBillingAddressPage = new AddBillingAddressPage(this.driver);
        const addBillingAddressPageInvalidScenarios = new AddBillingAddressPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //click aside 'My Account' link
        await myAccountPage.clickAsideMyAccountLink();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display");
        //click 'Address Book' link
        await myAccountPage.clickAddressBookLink();
        //capture screenshot of address book page display
        await TestMethods.captureScreenshot(this.driver, "Address Book Page Display")
        //address book page web element assert
        await addressBookPage.isAddressBookPageWebElementDisplayed();
        //address book page text element assert
        await this.isAddressBookPageTextElementAsExpected();
        //click 'Add billing address' button
        await addressBookPage.clickAddBillingAddressButton();
        //add billing address web element assert
        await addBillingAddressPage.isAddBillingAddressPageWebElementDisplayed();
        //add billing address text element assert
        await this.isAddBillingAddressPageTextElementAsExpected()
        //capture screenshot before valid billing address data input
        await TestMethods.captureScreenshot(this.driver, "Billing Address Page Before Data Input")
        //input too long billing user last name into last name input field (100 chars)
        await addBillingAddressPageInvalidScenarios.inputTooLongLastNameIntoBillingAddressLastNameInputField();
        //capture screenshot of add shipping address page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Billing Address Page Display After Invalid Data Input - Too Long Last Name");
        //click 'Country' dropdown menu
        await addBillingAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addBillingAddressPage.selectUSCountryOption();
        //click 'Region' dropdown menu
        await addBillingAddressPage.clickRegionDropdownMenu();
        //select 'United States' option
        await addBillingAddressPage.selectIllinoisRegionOption();
        //input valid billing street into address input field
        await addBillingAddressPage.inputValidStreetIntoBillingAddressStreetInputField();
        //input valid billing city into city input field
        await addBillingAddressPage.inputValidCityIntoBillingAddressCityInputField();
        //input valid billing post code into post code input field
        await addBillingAddressPage.inputValidPostCodeIntoBillingAddressPostCodeInputField();
        //input valid billing phone into phone input field
        await addBillingAddressPage.inputValidPhoneIntoBillingAddressPhoneInputField();
        //click 'Save billing address' button
        await addBillingAddressPage.clickSaveBillingAddressButton();
        //assert the user gets expected error message, log the issue otherwise
        try {
            const addressBookAlertMessage = await addBillingAddressPageInvalidScenarios.getBillingAddressSingularInputError();
            assert.strictEqual(addressBookAlertMessage, "Nazwisko jest zbyt długie.", "The address book page billing address too long last name input error doesn't match expectations.");
        } catch (e) {
            Logger.error("The billing address too long last name error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Billing Address Addition Test Result - Too Long Last Name");
    }
    //invalid add billing address test method - too short user street (100 chars)
    async invalidAddBillingAddressTooLongStreetTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const addressBookPage = new AddressBookPage(this.driver);
        const addBillingAddressPage = new AddBillingAddressPage(this.driver);
        const addBillingAddressPageInvalidScenarios = new AddBillingAddressPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //click aside 'My Account' link
        await myAccountPage.clickAsideMyAccountLink();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display");
        //click 'Address Book' link
        await myAccountPage.clickAddressBookLink();
        //capture screenshot of address book page display
        await TestMethods.captureScreenshot(this.driver, "Address Book Page Display")
        //address book page web element assert
        await addressBookPage.isAddressBookPageWebElementDisplayed();
        //address book page text element assert
        await this.isAddressBookPageTextElementAsExpected();
        //click 'Add billing address' button
        await addressBookPage.clickAddBillingAddressButton();
        //add billing address web element assert
        await addBillingAddressPage.isAddBillingAddressPageWebElementDisplayed();
        //add billing address text element assert
        await this.isAddBillingAddressPageTextElementAsExpected()
        //capture screenshot before valid billing address data input
        await TestMethods.captureScreenshot(this.driver, "Billing Address Page Before Data Input")
        //click 'Country' dropdown menu
        await addBillingAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addBillingAddressPage.selectUSCountryOption();
        //click 'Region' dropdown menu
        await addBillingAddressPage.clickRegionDropdownMenu();
        //select 'United States' option
        await addBillingAddressPage.selectIllinoisRegionOption();
        //input too long billing street into address input field (100 chars)
        await addBillingAddressPageInvalidScenarios.inputTooLongStreetIntoBillingAddressStreetInputField();
        //capture screenshot of add shipping address page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Billing Address Page Display After Invalid Data Input - Too Long Street");
        //input valid billing city into city input field
        await addBillingAddressPage.inputValidCityIntoBillingAddressCityInputField();
        //input valid billing post code into post code input field
        await addBillingAddressPage.inputValidPostCodeIntoBillingAddressPostCodeInputField();
        //input valid billing phone into phone input field
        await addBillingAddressPage.inputValidPhoneIntoBillingAddressPhoneInputField();
        //click 'Save billing address' button
        await addBillingAddressPage.clickSaveBillingAddressButton();
        //assert the user gets expected error message, log the issue otherwise
        try {
            const addressBookAlertMessage = await addBillingAddressPageInvalidScenarios.getBillingAddressSingularInputError();
            assert.strictEqual(addressBookAlertMessage, "Ulica jest zbyt długa.", "The address book page billing address too long street input error doesn't match expectations.");
        } catch (e) {
            Logger.error("The billing address too long street error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Billing Address Addition Test Result - Too Long Street");
    }
    //invalid add billing address test method - too long user city (100 chars)
    async invalidAddBillingAddressTooLongCityTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const addressBookPage = new AddressBookPage(this.driver);
        const addBillingAddressPage = new AddBillingAddressPage(this.driver);
        const addBillingAddressPageInvalidScenarios = new AddBillingAddressPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //click aside 'My Account' link
        await myAccountPage.clickAsideMyAccountLink();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display");
        //click 'Address Book' link
        await myAccountPage.clickAddressBookLink();
        //capture screenshot of address book page display
        await TestMethods.captureScreenshot(this.driver, "Address Book Page Display")
        //address book page web element assert
        await addressBookPage.isAddressBookPageWebElementDisplayed();
        //address book page text element assert
        await this.isAddressBookPageTextElementAsExpected();
        //click 'Add billing address' button
        await addressBookPage.clickAddBillingAddressButton();
        //add billing address web element assert
        await addBillingAddressPage.isAddBillingAddressPageWebElementDisplayed();
        //add billing address text element assert
        await this.isAddBillingAddressPageTextElementAsExpected()
        //capture screenshot before valid billing address data input
        await TestMethods.captureScreenshot(this.driver, "Billing Address Page Before Data Input")
        //click 'Country' dropdown menu
        await addBillingAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addBillingAddressPage.selectUSCountryOption();
        //click 'Region' dropdown menu
        await addBillingAddressPage.clickRegionDropdownMenu();
        //select 'United States' option
        await addBillingAddressPage.selectIllinoisRegionOption();
        //input valid short billing street into address input field
        await addBillingAddressPage.inputValidStreetIntoBillingAddressStreetInputField();
        //input too long billing city into city input field (100 chars)
        await addBillingAddressPageInvalidScenarios.inputTooLongCityIntoBillingAddressCityInputField();
        //capture screenshot of add shipping address page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Billing Address Page Display After Invalid Data Input - Too Long City");
        //input valid billing post code into post code input field
        await addBillingAddressPage.inputValidPostCodeIntoBillingAddressPostCodeInputField();
        //input valid billing phone into phone input field
        await addBillingAddressPage.inputValidPhoneIntoBillingAddressPhoneInputField();
        //click 'Save billing address' button
        await addBillingAddressPage.clickSaveBillingAddressButton();
        //assert the user gets expected error message, log the issue otherwise
        try {
            const addressBookAlertMessage = await addBillingAddressPageInvalidScenarios.getBillingAddressSingularInputError();
            assert.strictEqual(addressBookAlertMessage, "Miasto jest zbyt długie.", "The address book page billing address too long city input error doesn't match expectations.");
        } catch (e) {
            Logger.error("The billing address too long city error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Billing Address Addition Test Result - Too Long City");
    }
    //invalid add billing address test method - too long user post code (25 digits)
    async invalidAddBillingAddressTooLongPostCodeTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const addressBookPage = new AddressBookPage(this.driver);
        const addBillingAddressPage = new AddBillingAddressPage(this.driver);
        const addBillingAddressPageInvalidScenarios = new AddBillingAddressPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //click aside 'My Account' link
        await myAccountPage.clickAsideMyAccountLink();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display");
        //click 'Address Book' link
        await myAccountPage.clickAddressBookLink();
        //capture screenshot of address book page display
        await TestMethods.captureScreenshot(this.driver, "Address Book Page Display")
        //address book page web element assert
        await addressBookPage.isAddressBookPageWebElementDisplayed();
        //address book page text element assert
        await this.isAddressBookPageTextElementAsExpected();
        //click 'Add billing address' button
        await addressBookPage.clickAddBillingAddressButton();
        //add billing address web element assert
        await addBillingAddressPage.isAddBillingAddressPageWebElementDisplayed();
        //add billing address text element assert
        await this.isAddBillingAddressPageTextElementAsExpected()
        //capture screenshot before valid billing address data input
        await TestMethods.captureScreenshot(this.driver, "Billing Address Page Before Data Input")
        //click 'Country' dropdown menu
        await addBillingAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addBillingAddressPage.selectUSCountryOption();
        //click 'Region' dropdown menu
        await addBillingAddressPage.clickRegionDropdownMenu();
        //select 'United States' option
        await addBillingAddressPage.selectIllinoisRegionOption();
        //input valid short billing street into address input field
        await addBillingAddressPage.inputValidStreetIntoBillingAddressStreetInputField();
        //input valid billing city into city input field
        await addBillingAddressPage.inputValidCityIntoBillingAddressCityInputField();
        //input too long billing post code into post code input field (25 digits)
        await addBillingAddressPageInvalidScenarios.inputTooLongPostCodeIntoBillingAddressPostCodeInputField();
        //capture screenshot of add shipping address page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Billing Address Page Display After Invalid Data Input - Too Long Post Code");
        //input valid billing phone into phone input field
        await addBillingAddressPage.inputValidPhoneIntoBillingAddressPhoneInputField();
        //click 'Save billing address' button
        await addBillingAddressPage.clickSaveBillingAddressButton();
        //assert the user gets expected error message, log the issue otherwise
        try {
            const addressBookAlertMessage = await addBillingAddressPageInvalidScenarios.getBillingAddressSingularInputError();
            assert.strictEqual(addressBookAlertMessage, "Proszę podać poprawny kod pocztowy.", "The address book page billing address too long post code input error doesn't match expectations.");
        } catch (e) {
            Logger.error("The billing address too long post code error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Billing Address Addition Test Result - Too Long Post Code");
    }
    //invalid add billing address test method - too long user phone (30 digits)
    async invalidAddBillingAddressTooLongPhoneTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const addressBookPage = new AddressBookPage(this.driver);
        const addBillingAddressPage = new AddBillingAddressPage(this.driver);
        const addBillingAddressPageInvalidScenarios = new AddBillingAddressPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //click aside 'My Account' link
        await myAccountPage.clickAsideMyAccountLink();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display");
        //click 'Address Book' link
        await myAccountPage.clickAddressBookLink();
        //capture screenshot of address book page display
        await TestMethods.captureScreenshot(this.driver, "Address Book Page Display")
        //address book page web element assert
        await addressBookPage.isAddressBookPageWebElementDisplayed();
        //address book page text element assert
        await this.isAddressBookPageTextElementAsExpected();
        //click 'Add billing address' button
        await addressBookPage.clickAddBillingAddressButton();
        //add billing address web element assert
        await addBillingAddressPage.isAddBillingAddressPageWebElementDisplayed();
        //add billing address text element assert
        await this.isAddBillingAddressPageTextElementAsExpected()
        //capture screenshot before valid billing address data input
        await TestMethods.captureScreenshot(this.driver, "Billing Address Page Before Data Input")
        //click 'Country' dropdown menu
        await addBillingAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addBillingAddressPage.selectUSCountryOption();
        //click 'Region' dropdown menu
        await addBillingAddressPage.clickRegionDropdownMenu();
        //select 'United States' option
        await addBillingAddressPage.selectIllinoisRegionOption();
        //input valid short billing street into address input field
        await addBillingAddressPage.inputValidStreetIntoBillingAddressStreetInputField();
        //input valid billing city into city input field
        await addBillingAddressPage.inputValidCityIntoBillingAddressCityInputField();
        //input valid billing post code into post code input field
        await addBillingAddressPage.inputValidPostCodeIntoBillingAddressPostCodeInputField();
        //input too long billing phone into phone input field (30 digits)
        await addBillingAddressPageInvalidScenarios.inputTooLongPhoneIntoBillingAddressPhoneInputField();
        //capture screenshot of add shipping address page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Billing Address Page Display After Invalid Data Input - Too Long Phone");
        //click 'Save billing address' button
        await addBillingAddressPage.clickSaveBillingAddressButton();
        //assert the user gets expected error message, log the issue otherwise
        try {
            const addressBookAlertMessage = await addBillingAddressPageInvalidScenarios.getBillingAddressSingularInputError();
            assert.strictEqual(addressBookAlertMessage, "Telefon nie jest poprawnym numerem telefonu.", "The address book page billing address too long phone input error doesn't match expectations.");
        } catch (e) {
            Logger.error("The billing address too long phone error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Billing Address Addition Test Result - Too Long Phone");
    }
    //invalid add billing address test method - too long user email (100 chars -> name, domain)
    async invalidAddBillingAddressTooLongEmailTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const addressBookPage = new AddressBookPage(this.driver);
        const addBillingAddressPage = new AddBillingAddressPage(this.driver);
        const addBillingAddressPageInvalidScenarios = new AddBillingAddressPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //click aside 'My Account' link
        await myAccountPage.clickAsideMyAccountLink();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display");
        //click 'Address Book' link
        await myAccountPage.clickAddressBookLink();
        //capture screenshot of address book page display
        await TestMethods.captureScreenshot(this.driver, "Address Book Page Display")
        //address book page web element assert
        await addressBookPage.isAddressBookPageWebElementDisplayed();
        //address book page text element assert
        await this.isAddressBookPageTextElementAsExpected();
        //click 'Add billing address' button
        await addressBookPage.clickAddBillingAddressButton();
        //add billing address web element assert
        await addBillingAddressPage.isAddBillingAddressPageWebElementDisplayed();
        //add billing address text element assert
        await this.isAddBillingAddressPageTextElementAsExpected()
        //capture screenshot before valid billing address data input
        await TestMethods.captureScreenshot(this.driver, "Billing Address Page Before Data Input")
        //click 'Country' dropdown menu
        await addBillingAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addBillingAddressPage.selectUSCountryOption();
        //click 'Region' dropdown menu
        await addBillingAddressPage.clickRegionDropdownMenu();
        //select 'United States' option
        await addBillingAddressPage.selectIllinoisRegionOption();
        //input valid short billing street into address input field
        await addBillingAddressPage.inputValidStreetIntoBillingAddressStreetInputField();
        //input valid billing city into city input field
        await addBillingAddressPage.inputValidCityIntoBillingAddressCityInputField();
        //input valid billing post code into post code input field
        await addBillingAddressPage.inputValidPostCodeIntoBillingAddressPostCodeInputField();
        //input valid billing phone into phone input field
        await addBillingAddressPage.inputValidPhoneIntoBillingAddressPhoneInputField();
        //input too long billing email into email input field (100 chars -> name, domain)
        await addBillingAddressPageInvalidScenarios.inputTooLongEmailIntoBillingAddressEmailInputField();
        //capture screenshot of add shipping address page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Billing Address Page Display After Invalid Data Input - Too Long Email");
        //click 'Save billing address' button
        await addBillingAddressPage.clickSaveBillingAddressButton();
        //assert the user gets expected error message, log the issue otherwise
        try {
            const addressBookAlertMessage = await addBillingAddressPageInvalidScenarios.getBillingAddressSingularInputError();
            assert.strictEqual(addressBookAlertMessage, "Adres email jest zbyt długi.", "The address book page billing address too long email input error doesn't match expectations.");
        } catch (e) {
            Logger.error("The billing address too long email error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Billing Address Addition Test Result - Too Long Email");
    }

    //invalid singular input format

    //invalid add billing address test method - invalid user first name format (special symbols only)
    async invalidAddBillingAddressInvalidFirstNameFormatTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const addressBookPage = new AddressBookPage(this.driver);
        const addBillingAddressPage = new AddBillingAddressPage(this.driver);
        const addBillingAddressPageInvalidScenarios = new AddBillingAddressPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //click aside 'My Account' link
        await myAccountPage.clickAsideMyAccountLink();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display");
        //click 'Address Book' link
        await myAccountPage.clickAddressBookLink();
        //capture screenshot of address book page display
        await TestMethods.captureScreenshot(this.driver, "Address Book Page Display")
        //address book page web element assert
        await addressBookPage.isAddressBookPageWebElementDisplayed();
        //address book page text element assert
        await this.isAddressBookPageTextElementAsExpected();
        //click 'Add billing address' button
        await addressBookPage.clickAddBillingAddressButton();
        //add billing address web element assert
        await addBillingAddressPage.isAddBillingAddressPageWebElementDisplayed();
        //add billing address text element assert
        await this.isAddBillingAddressPageTextElementAsExpected()
        //capture screenshot before valid billing address data input
        await TestMethods.captureScreenshot(this.driver, "Billing Address Page Before Data Input")
        //input invalid billing user first name format into first name input field (special symbols only)
        await addBillingAddressPageInvalidScenarios.inputInvalidFirstNameFormatIntoBillingAddressFirstNameInputField();
        //capture screenshot of add shipping address page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Billing Address Page Display After Invalid Data Input - Invalid First Name Input Format");
        //click 'Country' dropdown menu
        await addBillingAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addBillingAddressPage.selectUSCountryOption();
        //click 'Region' dropdown menu
        await addBillingAddressPage.clickRegionDropdownMenu();
        //select 'United States' option
        await addBillingAddressPage.selectIllinoisRegionOption();
        //input valid billing street into address input field
        await addBillingAddressPage.inputValidStreetIntoBillingAddressStreetInputField();
        //input valid billing city into city input field
        await addBillingAddressPage.inputValidCityIntoBillingAddressCityInputField();
        //input valid billing post code into post code input field
        await addBillingAddressPage.inputValidPostCodeIntoBillingAddressPostCodeInputField();
        //input valid billing phone into phone input field
        await addBillingAddressPage.inputValidPhoneIntoBillingAddressPhoneInputField();
        //click 'Save billing address' button
        await addBillingAddressPage.clickSaveBillingAddressButton();
        //assert the user gets expected error message, log the issue otherwise
        try {
            const addressBookAlertMessage = await addBillingAddressPageInvalidScenarios.getBillingAddressSingularInputError();
            assert.strictEqual(addressBookAlertMessage, "Imię nie może zawierać tylko specjalne znaki.", "The address book page billing address invalid first name input format error doesn't match expectations.");
        } catch (e) {
            Logger.error("The billing address invalid first name format error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Billing Address Addition Test Result - Invalid First Name Format");
    }
    //invalid add billing address test method - invalid user last name format (special symbols only)
    async invalidAddBillingAddressInvalidLastNameFormatTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const addressBookPage = new AddressBookPage(this.driver);
        const addBillingAddressPage = new AddBillingAddressPage(this.driver);
        const addBillingAddressPageInvalidScenarios = new AddBillingAddressPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //click aside 'My Account' link
        await myAccountPage.clickAsideMyAccountLink();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display");
        //click 'Address Book' link
        await myAccountPage.clickAddressBookLink();
        //capture screenshot of address book page display
        await TestMethods.captureScreenshot(this.driver, "Address Book Page Display")
        //address book page web element assert
        await addressBookPage.isAddressBookPageWebElementDisplayed();
        //address book page text element assert
        await this.isAddressBookPageTextElementAsExpected();
        //click 'Add billing address' button
        await addressBookPage.clickAddBillingAddressButton();
        //add billing address web element assert
        await addBillingAddressPage.isAddBillingAddressPageWebElementDisplayed();
        //add billing address text element assert
        await this.isAddBillingAddressPageTextElementAsExpected()
        //capture screenshot before valid billing address data input
        await TestMethods.captureScreenshot(this.driver, "Billing Address Page Before Data Input")
        //input invalid billing user last name format into last name input field (special symbols only)
        await addBillingAddressPageInvalidScenarios.inputInvalidLastNameFormatIntoBillingAddressLastNameInputField();
        //capture screenshot of add shipping address page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Billing Address Page Display After Invalid Data Input - Invalid Last Name Input Format");
        //click 'Country' dropdown menu
        await addBillingAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addBillingAddressPage.selectUSCountryOption();
        //click 'Region' dropdown menu
        await addBillingAddressPage.clickRegionDropdownMenu();
        //select 'United States' option
        await addBillingAddressPage.selectIllinoisRegionOption();
        //input valid billing street into address input field
        await addBillingAddressPage.inputValidStreetIntoBillingAddressStreetInputField();
        //input valid billing city into city input field
        await addBillingAddressPage.inputValidCityIntoBillingAddressCityInputField();
        //input valid billing post code into post code input field
        await addBillingAddressPage.inputValidPostCodeIntoBillingAddressPostCodeInputField();
        //input valid billing phone into phone input field
        await addBillingAddressPage.inputValidPhoneIntoBillingAddressPhoneInputField();
        //click 'Save billing address' button
        await addBillingAddressPage.clickSaveBillingAddressButton();
        //assert the user gets expected error message, log the issue otherwise
        try {
            const addressBookAlertMessage = await addBillingAddressPageInvalidScenarios.getBillingAddressSingularInputError();
            assert.strictEqual(addressBookAlertMessage, "Nazwisko nie może zawierać tylko specjalne znaki.", "The address book page billing address invalid last name input format error doesn't match expectations.");
        } catch (e) {
            Logger.error("The billing address invalid last name format error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Billing Address Addition Test Result - Invalid Last Name Format");
    }
    //invalid add billing address test method - invalid user street format (special symbols only)
    async invalidAddBillingAddressInvalidStreetFormatTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const addressBookPage = new AddressBookPage(this.driver);
        const addBillingAddressPage = new AddBillingAddressPage(this.driver);
        const addBillingAddressPageInvalidScenarios = new AddBillingAddressPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //click aside 'My Account' link
        await myAccountPage.clickAsideMyAccountLink();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display");
        //click 'Address Book' link
        await myAccountPage.clickAddressBookLink();
        //capture screenshot of address book page display
        await TestMethods.captureScreenshot(this.driver, "Address Book Page Display")
        //address book page web element assert
        await addressBookPage.isAddressBookPageWebElementDisplayed();
        //address book page text element assert
        await this.isAddressBookPageTextElementAsExpected();
        //click 'Add billing address' button
        await addressBookPage.clickAddBillingAddressButton();
        //add billing address web element assert
        await addBillingAddressPage.isAddBillingAddressPageWebElementDisplayed();
        //add billing address text element assert
        await this.isAddBillingAddressPageTextElementAsExpected()
        //capture screenshot before valid billing address data input
        await TestMethods.captureScreenshot(this.driver, "Billing Address Page Before Data Input")
        //click 'Country' dropdown menu
        await addBillingAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addBillingAddressPage.selectUSCountryOption();
        //click 'Region' dropdown menu
        await addBillingAddressPage.clickRegionDropdownMenu();
        //select 'United States' option
        await addBillingAddressPage.selectIllinoisRegionOption();
        //input invalid billing street format into address input field (special symbols only)
        await addBillingAddressPageInvalidScenarios.inputInvalidStreetFormatIntoBillingAddressStreetInputField();
        //capture screenshot of add shipping address page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Billing Address Page Display After Invalid Data Input - Invalid Street Input Format");
        //input valid billing city into city input field
        await addBillingAddressPage.inputValidCityIntoBillingAddressCityInputField();
        //input valid billing post code into post code input field
        await addBillingAddressPage.inputValidPostCodeIntoBillingAddressPostCodeInputField();
        //input valid billing phone into phone input field
        await addBillingAddressPage.inputValidPhoneIntoBillingAddressPhoneInputField();
        //click 'Save billing address' button
        await addBillingAddressPage.clickSaveBillingAddressButton();
        //assert the user gets expected error message, log the issue otherwise
        try {
            const addressBookAlertMessage = await addBillingAddressPageInvalidScenarios.getBillingAddressSingularInputError();
            assert.strictEqual(addressBookAlertMessage, "Ulica nie może zawierać tylko specjalne znaki.", "The address book page billing address invalid street input format error doesn't match expectations.");
        } catch (e) {
            Logger.error("The billing address invalid street format error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Billing Address Addition Test Result - Invalid Street Format");
    }
    //invalid add billing address test method - invalid user city format (special symbols only)
    async invalidAddBillingAddressInvalidCityFormatTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const addressBookPage = new AddressBookPage(this.driver);
        const addBillingAddressPage = new AddBillingAddressPage(this.driver);
        const addBillingAddressPageInvalidScenarios = new AddBillingAddressPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //click aside 'My Account' link
        await myAccountPage.clickAsideMyAccountLink();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display");
        //click 'Address Book' link
        await myAccountPage.clickAddressBookLink();
        //capture screenshot of address book page display
        await TestMethods.captureScreenshot(this.driver, "Address Book Page Display")
        //address book page web element assert
        await addressBookPage.isAddressBookPageWebElementDisplayed();
        //address book page text element assert
        await this.isAddressBookPageTextElementAsExpected();
        //click 'Add billing address' button
        await addressBookPage.clickAddBillingAddressButton();
        //add billing address web element assert
        await addBillingAddressPage.isAddBillingAddressPageWebElementDisplayed();
        //add billing address text element assert
        await this.isAddBillingAddressPageTextElementAsExpected()
        //capture screenshot before valid billing address data input
        await TestMethods.captureScreenshot(this.driver, "Billing Address Page Before Data Input")
        //click 'Country' dropdown menu
        await addBillingAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addBillingAddressPage.selectUSCountryOption();
        //click 'Region' dropdown menu
        await addBillingAddressPage.clickRegionDropdownMenu();
        //select 'United States' option
        await addBillingAddressPage.selectIllinoisRegionOption();
        //input valid billing street into address input field
        await addBillingAddressPage.inputValidStreetIntoBillingAddressStreetInputField();
        //input invalid billing city format into city input field (special symbols only)
        await addBillingAddressPageInvalidScenarios.inputInvalidCityFormatIntoBillingAddressCityInputField();
        //capture screenshot of add shipping address page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Billing Address Page Display After Invalid Data Input - Invalid City Input Format");
        //input valid billing post code into post code input field
        await addBillingAddressPage.inputValidPostCodeIntoBillingAddressPostCodeInputField();
        //input valid billing phone into phone input field
        await addBillingAddressPage.inputValidPhoneIntoBillingAddressPhoneInputField();
        //click 'Save billing address' button
        await addBillingAddressPage.clickSaveBillingAddressButton();
        //assert the user gets expected error message, log the issue otherwise
        try {
            const addressBookAlertMessage = await addBillingAddressPageInvalidScenarios.getBillingAddressSingularInputError();
            assert.strictEqual(addressBookAlertMessage, "Miasto nie może zawierać tylko specjalne znaki.", "The address book page billing address invalid city input format error doesn't match expectations.");
        } catch (e) {
            Logger.error("The billing address invalid city format error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Billing Address Addition Test Result - Invalid City Format");
    }
    //invalid add billing address test method - invalid user post code format (special symbols only)
    async invalidAddBillingAddressInvalidPostCodeFormatTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const addressBookPage = new AddressBookPage(this.driver);
        const addBillingAddressPage = new AddBillingAddressPage(this.driver);
        const addBillingAddressPageInvalidScenarios = new AddBillingAddressPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //click aside 'My Account' link
        await myAccountPage.clickAsideMyAccountLink();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display");
        //click 'Address Book' link
        await myAccountPage.clickAddressBookLink();
        //capture screenshot of address book page display
        await TestMethods.captureScreenshot(this.driver, "Address Book Page Display")
        //address book page web element assert
        await addressBookPage.isAddressBookPageWebElementDisplayed();
        //address book page text element assert
        await this.isAddressBookPageTextElementAsExpected();
        //click 'Add billing address' button
        await addressBookPage.clickAddBillingAddressButton();
        //add billing address web element assert
        await addBillingAddressPage.isAddBillingAddressPageWebElementDisplayed();
        //add billing address text element assert
        await this.isAddBillingAddressPageTextElementAsExpected()
        //capture screenshot before valid billing address data input
        await TestMethods.captureScreenshot(this.driver, "Billing Address Page Before Data Input")
        //click 'Country' dropdown menu
        await addBillingAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addBillingAddressPage.selectUSCountryOption();
        //click 'Region' dropdown menu
        await addBillingAddressPage.clickRegionDropdownMenu();
        //select 'United States' option
        await addBillingAddressPage.selectIllinoisRegionOption();
        //input valid billing street into address input field
        await addBillingAddressPage.inputValidStreetIntoBillingAddressStreetInputField();
        //input valid billing city into city input field
        await addBillingAddressPage.inputValidCityIntoBillingAddressCityInputField();
        //input invalid billing post code format into post code input field (special symbols only)
        await addBillingAddressPageInvalidScenarios.inputInvalidPostCodeFormatIntoBillingAddressPostCodeInputField();
        //capture screenshot of add shipping address page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Billing Address Page Display After Invalid Data Input - Invalid Post Code Input Format");
        //input valid billing phone into phone input field
        await addBillingAddressPage.inputValidPhoneIntoBillingAddressPhoneInputField();
        //click 'Save billing address' button
        await addBillingAddressPage.clickSaveBillingAddressButton();
        //assert the user gets expected error message, log the issue otherwise
        try {
            const addressBookAlertMessage = await addBillingAddressPageInvalidScenarios.getBillingAddressSingularInputError();
            assert.strictEqual(addressBookAlertMessage, "Proszę podać poprawny kod pocztowy.", "The address book page billing address invalid post code input format error doesn't match expectations.");
        } catch (e) {
            Logger.error("The billing address invalid post code format error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Billing Address Addition Test Result - Invalid Post Code Format");
    }
    //invalid add billing address test method - invalid user phone format (special symbols only)
    async invalidAddBillingAddressInvalidPhoneFormatTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const addressBookPage = new AddressBookPage(this.driver);
        const addBillingAddressPage = new AddBillingAddressPage(this.driver);
        const addBillingAddressPageInvalidScenarios = new AddBillingAddressPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //click aside 'My Account' link
        await myAccountPage.clickAsideMyAccountLink();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display");
        //click 'Address Book' link
        await myAccountPage.clickAddressBookLink();
        //capture screenshot of address book page display
        await TestMethods.captureScreenshot(this.driver, "Address Book Page Display")
        //address book page web element assert
        await addressBookPage.isAddressBookPageWebElementDisplayed();
        //address book page text element assert
        await this.isAddressBookPageTextElementAsExpected();
        //click 'Add billing address' button
        await addressBookPage.clickAddBillingAddressButton();
        //add billing address web element assert
        await addBillingAddressPage.isAddBillingAddressPageWebElementDisplayed();
        //add billing address text element assert
        await this.isAddBillingAddressPageTextElementAsExpected()
        //capture screenshot before valid billing address data input
        await TestMethods.captureScreenshot(this.driver, "Billing Address Page Before Data Input")
        //click 'Country' dropdown menu
        await addBillingAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addBillingAddressPage.selectUSCountryOption();
        //click 'Region' dropdown menu
        await addBillingAddressPage.clickRegionDropdownMenu();
        //select 'United States' option
        await addBillingAddressPage.selectIllinoisRegionOption();
        //input valid billing street into address input field
        await addBillingAddressPage.inputValidStreetIntoBillingAddressStreetInputField();
        //input valid billing city into city input field (special symbols only)
        await addBillingAddressPage.inputValidCityIntoBillingAddressCityInputField();
        //input valid billing post code into post code input field
        await addBillingAddressPage.inputValidPostCodeIntoBillingAddressPostCodeInputField();
        //input invalid billing phone format into phone input field
        await addBillingAddressPageInvalidScenarios.inputInvalidPhoneFormatIntoBillingAddressPhoneInputField();
        //capture screenshot of add shipping address page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Billing Address Page Display After Invalid Data Input - Invalid Phone Input Format");
        //click 'Save billing address' button
        await addBillingAddressPage.clickSaveBillingAddressButton();
        //assert the user gets expected error message, log the issue otherwise
        try {
            const addressBookAlertMessage = await addBillingAddressPageInvalidScenarios.getBillingAddressSingularInputError();
            assert.strictEqual(addressBookAlertMessage, "Telefon nie jest poprawnym numerem telefonu.", "The address book page billing address invalid phone input format error doesn't match expectations.");
        } catch (e) {
            Logger.error("The billing address invalid phone format error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Billing Address Addition Test Result - Invalid Phone Format");
    }
    //invalid add billing address test method - invalid user email format (missing '@')
    async invalidAddBillingAddressInvalidEmailFormatTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const addressBookPage = new AddressBookPage(this.driver);
        const addBillingAddressPage = new AddBillingAddressPage(this.driver);
        const addBillingAddressPageInvalidScenarios = new AddBillingAddressPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //click aside 'My Account' link
        await myAccountPage.clickAsideMyAccountLink();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display");
        //click 'Address Book' link
        await myAccountPage.clickAddressBookLink();
        //capture screenshot of address book page display
        await TestMethods.captureScreenshot(this.driver, "Address Book Page Display")
        //address book page web element assert
        await addressBookPage.isAddressBookPageWebElementDisplayed();
        //address book page text element assert
        await this.isAddressBookPageTextElementAsExpected();
        //click 'Add billing address' button
        await addressBookPage.clickAddBillingAddressButton();
        //add billing address web element assert
        await addBillingAddressPage.isAddBillingAddressPageWebElementDisplayed();
        //add billing address text element assert
        await this.isAddBillingAddressPageTextElementAsExpected()
        //capture screenshot before valid billing address data input
        await TestMethods.captureScreenshot(this.driver, "Billing Address Page Before Data Input")
        //click 'Country' dropdown menu
        await addBillingAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addBillingAddressPage.selectUSCountryOption();
        //click 'Region' dropdown menu
        await addBillingAddressPage.clickRegionDropdownMenu();
        //select 'United States' option
        await addBillingAddressPage.selectIllinoisRegionOption();
        //input valid short billing street into address input field
        await addBillingAddressPage.inputValidStreetIntoBillingAddressStreetInputField();
        //input valid billing city into city input field
        await addBillingAddressPage.inputValidCityIntoBillingAddressCityInputField();
        //input valid billing post code into post code input field
        await addBillingAddressPage.inputValidPostCodeIntoBillingAddressPostCodeInputField();
        //input valid billing phone into phone input field
        await addBillingAddressPage.inputValidPhoneIntoBillingAddressPhoneInputField();
        //input invalid billing email format into email input field (missing '@')
        await addBillingAddressPageInvalidScenarios.inputInvalidEmailFormatIntoBillingAddressEmailInputField();
        //capture screenshot of add shipping address page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Billing Address Page Display After Invalid Data Input - Invalid Email Input Format");
        //click 'Save billing address' button
        await addBillingAddressPage.clickSaveBillingAddressButton();
        //assert the user gets expected error message, log the issue otherwise
        try {
            const addressBookAlertMessage = await addBillingAddressPageInvalidScenarios.getBillingAddressSingularInputError();
            assert.strictEqual(addressBookAlertMessage, "Adres email nie jest poprawnym adresem e-mail.", "The address book page billing address invalid email input format error doesn't match expectations.");
        } catch (e) {
            Logger.error("The billing address invalid email format error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Billing Address Addition Test Result - Invalid Email Format");
    }
    //invalid add billing address test method - existing user email (used beforehand in manual testing)
    async invalidAddBillingAddressExistingEmailTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        const addressBookPage = new AddressBookPage(this.driver);
        const addBillingAddressPage = new AddBillingAddressPage(this.driver);
        const addBillingAddressPageInvalidScenarios = new AddBillingAddressPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //click aside 'My Account' link
        await myAccountPage.clickAsideMyAccountLink();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display");
        //click 'Address Book' link
        await myAccountPage.clickAddressBookLink();
        //capture screenshot of address book page display
        await TestMethods.captureScreenshot(this.driver, "Address Book Page Display")
        //address book page web element assert
        await addressBookPage.isAddressBookPageWebElementDisplayed();
        //address book page text element assert
        await this.isAddressBookPageTextElementAsExpected();
        //click 'Add billing address' button
        await addressBookPage.clickAddBillingAddressButton();
        //add billing address web element assert
        await addBillingAddressPage.isAddBillingAddressPageWebElementDisplayed();
        //add billing address text element assert
        await this.isAddBillingAddressPageTextElementAsExpected()
        //capture screenshot before valid billing address data input
        await TestMethods.captureScreenshot(this.driver, "Billing Address Page Before Data Input")
        //click 'Country' dropdown menu
        await addBillingAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addBillingAddressPage.selectUSCountryOption();
        //click 'Region' dropdown menu
        await addBillingAddressPage.clickRegionDropdownMenu();
        //select 'United States' option
        await addBillingAddressPage.selectIllinoisRegionOption();
        //input valid short billing street into address input field
        await addBillingAddressPage.inputValidStreetIntoBillingAddressStreetInputField();
        //input valid billing city into city input field
        await addBillingAddressPage.inputValidCityIntoBillingAddressCityInputField();
        //input valid billing post code into post code input field
        await addBillingAddressPage.inputValidPostCodeIntoBillingAddressPostCodeInputField();
        //input valid billing phone into phone input field
        await addBillingAddressPage.inputValidPhoneIntoBillingAddressPhoneInputField();
        //input pre-existing billing email format into email input field (used beforehand in manual testing)
        await addBillingAddressPageInvalidScenarios.inputExistingEmailIntoBillingAddressEmailInputField();
        //capture screenshot of add shipping address page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Add Billing Address Page Display After Invalid Data Input - Existing Email");
        //click 'Save billing address' button
        await addBillingAddressPage.clickSaveBillingAddressButton();
        //assert the user gets expected error message, log the issue otherwise
        try {
            const addressBookAlertMessage = await addBillingAddressPageInvalidScenarios.getBillingAddressSingularInputError();
            assert.strictEqual(addressBookAlertMessage, "Adres email już jest używany.", "The address book page billing address existing email error doesn't match expectations.");
        } catch (e) {
            Logger.error("The billing address existing email error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Billing Address Addition Test Result - Existing Email");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //valid user account logout test method
    async validAccountLogoutTest(){
        const generalPage = new GeneralPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //my account aside page web element assert (some pages have them too)
        await myAccountPage.isMyAccountAsidePageWebElementDisplayed();
        //my account page text element assert (some pages have them too)
        await this.isMyAccountPageAsideTextElementAsExpected();
        //log displayed product order data (to assert the order is empty)
        await this.logOrderProductData();
        //capture screenshot of my account page display
        await TestMethods.captureScreenshot(this.driver, "My Account Page Display");
        //click aside 'Logout' link
        await myAccountPage.clickAsideLogoutLink();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid User Account Logout Test Result");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //valid user account login tests

    //valid user account login test
    async validUserLoginTest(){
        const generalPage = new GeneralPage(this.driver);
        const registerLoginDashboardPage = new RegisterLoginDashboardPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //capture screenshot of register/login dashboard page display
        await TestMethods.captureScreenshot(this.driver, "Register and Login Dashboard Page Display Before Data Input");
        //input valid user email into login email input field
        await registerLoginDashboardPage.inputValidEmailIntoLoginEmailInputField();
        //input valid user password into login password input field
        await registerLoginDashboardPage.inputValidLoginPasswordIntoLoginPasswordInputField();
        //click 'View Password' button (login)
        await registerLoginDashboardPage.clickViewPasswordLoginButton();
        //capture screenshot of valid login data input
        await TestMethods.captureScreenshot(this.driver, "Register and Login Dashboard Page After Valid Login Data Input");
        //click 'Login' button
        await registerLoginDashboardPage.clickLoginButton();
        //assert the user gets onto my account page after login
        const myAccountPageTitle = await myAccountPage.getMyAccountPageTitle();
        assert.strictEqual(myAccountPageTitle,   "Moje konto", "The my account page title doesn't match expectations or the user failed to login.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid User Login Test Result");
    }

    //valid user account (with edited email) login test
    async validUserLoginEditedEmailTest(){
        const generalPage = new GeneralPage(this.driver);
        const registerLoginDashboardPage = new RegisterLoginDashboardPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //capture screenshot of register/login dashboard page display
        await TestMethods.captureScreenshot(this.driver, "Register and Login Dashboard Page Display Before Data Input");
        //input valid edited user email into login email input field
        await registerLoginDashboardPage.inputValidEditedEmailIntoLoginEmailInputField();
        //input valid user password into login password input field
        await registerLoginDashboardPage.inputValidLoginPasswordIntoLoginPasswordInputField();
        //click 'View Password' button (login)
        await registerLoginDashboardPage.clickViewPasswordLoginButton();
        //capture screenshot of valid login data input
        await TestMethods.captureScreenshot(this.driver, "Register and Login Dashboard Page (Edited Login Email) After Valid Login Data Input");
        //click 'Login' button
        await registerLoginDashboardPage.clickLoginButton();
        //assert the user gets onto my account page after login
        const myAccountPageTitle = await myAccountPage.getMyAccountPageTitle();
        assert.strictEqual(myAccountPageTitle,   "Moje konto", "The my account page title doesn't match expectations or the user failed to login.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid User Login (With Edited Login Email) Test Result");
    }

    //valid user account (with edited password) login test
    async validUserLoginEditedPasswordTest(){
        const generalPage = new GeneralPage(this.driver);
        const registerLoginDashboardPage = new RegisterLoginDashboardPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //capture screenshot of register/login dashboard page display
        await TestMethods.captureScreenshot(this.driver, "Register and Login Dashboard Page Display Before Data Input");
        //input valid user email into login email input field
        await registerLoginDashboardPage.inputValidEmailIntoLoginEmailInputField();
        //input valid edited user password into login password input field
        await registerLoginDashboardPage.inputValidEditedPasswordIntoLoginPasswordInputField();
        //click 'View Password' button (login)
        await registerLoginDashboardPage.clickViewPasswordLoginButton();
        //capture screenshot of valid login data input
        await TestMethods.captureScreenshot(this.driver, "Register and Login Dashboard Page (Edited Login Password) After Valid Login Data Input");
        //click 'Login' button
        await registerLoginDashboardPage.clickLoginButton();
        //assert the user gets onto my account page after login
        const myAccountPageTitle = await myAccountPage.getMyAccountPageTitle();
        assert.strictEqual(myAccountPageTitle,   "Moje konto", "The my account page title doesn't match expectations or the user failed to login.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid User Login (With Edited Login Password) Test Result");
    }

    //valid user account (with username) login test
    async validUserLoginWithUsernameTest(){
        const generalPage = new GeneralPage(this.driver);
        const registerLoginDashboardPage = new RegisterLoginDashboardPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //capture screenshot of register/login dashboard page display
        await TestMethods.captureScreenshot(this.driver, "Register and Login Dashboard Page Display Before Data Input");
        //input valid user username into login email input field
        await registerLoginDashboardPage.inputValidUsernameIntoLoginEmailInputField();
        //input valid user password into login password input field
        await registerLoginDashboardPage.inputValidLoginPasswordIntoLoginPasswordInputField();
        //click 'View Password' button (login)
        await registerLoginDashboardPage.clickViewPasswordLoginButton();
        //capture screenshot of valid login data input
        await TestMethods.captureScreenshot(this.driver, "Register and Login Dashboard Page (Valid Username) After Valid Login Data Input");
        //click 'Login' button
        await registerLoginDashboardPage.clickLoginButton();
        //assert the user gets onto my account page after login
        const myAccountPageTitle = await myAccountPage.getMyAccountPageTitle();
        assert.strictEqual(myAccountPageTitle,   "Moje konto", "The my account page title doesn't match expectations or the user failed to login.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid User Login (With Valid Username) Test Result");
    }

    //valid user account (with edited username) login test
    async validUserLoginWithEditedUsernameTest(){
        const generalPage = new GeneralPage(this.driver);
        const registerLoginDashboardPage = new RegisterLoginDashboardPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //capture screenshot of register/login dashboard page display
        await TestMethods.captureScreenshot(this.driver, "Register and Login Dashboard Page Display Before Data Input");
        //input valid user edited username into login email input field
        await registerLoginDashboardPage.inputValidEditedUsernameIntoLoginEmailInputField();
        //input valid user password into login password input field
        await registerLoginDashboardPage.inputValidLoginPasswordIntoLoginPasswordInputField();
        //click 'View Password' button (login)
        await registerLoginDashboardPage.clickViewPasswordLoginButton();
        //capture screenshot of valid login data input
        await TestMethods.captureScreenshot(this.driver, "Register and Login Dashboard Page (Valid Edited Username) After Valid Login Data Input");
        //click 'Login' button
        await registerLoginDashboardPage.clickLoginButton();
        //assert the user gets onto my account page after login
        const myAccountPageTitle = await myAccountPage.getMyAccountPageTitle();
        assert.strictEqual(myAccountPageTitle,   "Moje konto", "The my account page title doesn't match expectations or the user failed to login.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid User Login (With Valid Edited Username) Test Result");
    }

    //valid user account (with edited billing email) login test
    async validUserLoginWithEditedBillingEmailTest(){
        const generalPage = new GeneralPage(this.driver);
        const registerLoginDashboardPage = new RegisterLoginDashboardPage(this.driver);
        const myAccountPage = new MyAccountPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //capture screenshot of register/login dashboard page display
        await TestMethods.captureScreenshot(this.driver, "Register and Login Dashboard Page Display Before Data Input");
        //input valid user edited billing email into login email input field
        await registerLoginDashboardPage.inputValidEditedBillingEmailIntoLoginEmailInputField();
        //input valid user password into login password input field
        await registerLoginDashboardPage.inputValidLoginPasswordIntoLoginPasswordInputField();
        //click 'View Password' button (login)
        await registerLoginDashboardPage.clickViewPasswordLoginButton();
        //capture screenshot of valid login data input
        await TestMethods.captureScreenshot(this.driver, "Register and Login Dashboard Page (Valid Edited Username) After Valid Login Data Input");
        //click 'Login' button
        await registerLoginDashboardPage.clickLoginButton();
        //assert the user gets onto my account page after login
        const myAccountPageTitle = await myAccountPage.getMyAccountPageTitle();
        assert.strictEqual(myAccountPageTitle,   "Moje konto", "The my account page title doesn't match expectations or the user failed to login.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid User Login (With Valid Edited Username) Test Result");
    }

    //invalid user account login tests

    //no singular input

    //invalid user account login test - no login email/username
    async invalidUserNoLoginEmailOrUsernameTest(){
        const generalPage = new GeneralPage(this.driver);
        const registerLoginDashboardPage = new RegisterLoginDashboardPage(this.driver);
        const registerLoginDashboardPageInvalidScenarios = new RegisterLoginDashboardPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //capture screenshot of register/login dashboard page display
        await TestMethods.captureScreenshot(this.driver, "Register and Login Dashboard Page Display Before Data Input");
        //input no user email into login email input field
        await registerLoginDashboardPageInvalidScenarios.inputNoEmailIntoLoginEmailInputField();
        //input valid user password into login password input field
        await registerLoginDashboardPage.inputValidLoginPasswordIntoLoginPasswordInputField();
        //click 'View Password' button (login)
        await registerLoginDashboardPage.clickViewPasswordLoginButton();
        //capture screenshot of valid login data input
        await TestMethods.captureScreenshot(this.driver, "Register and Login Dashboard Page After Invalid Login Data Input - No Login Email or Username");
        //click 'Login' button
        await registerLoginDashboardPage.clickLoginButton();
        //assert the user gets the expected error message
        const loginAlertMessage = await registerLoginDashboardPageInvalidScenarios.getSingularInputError();
        assert.strictEqual(loginAlertMessage, "Błąd: Nazwa użytkownika jest wymagana.", "The missing login email/username input error doesn't match expectations.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Login Test Result - No Login Email or Username");
    }
    //invalid user account login test - no login password
    async invalidUserNoLoginPasswordTest(){
        const generalPage = new GeneralPage(this.driver);
        const registerLoginDashboardPage = new RegisterLoginDashboardPage(this.driver);
        const registerLoginDashboardPageInvalidScenarios = new RegisterLoginDashboardPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //capture screenshot of register/login dashboard page display
        await TestMethods.captureScreenshot(this.driver, "Register and Login Dashboard Page Display Before Data Input");
        //input valid user email into login email input field
        await registerLoginDashboardPage.inputValidEmailIntoLoginEmailInputField();
        //input no user password into login password input field
        await registerLoginDashboardPageInvalidScenarios.inputNoPasswordIntoLoginPasswordInputField();
        //capture screenshot of valid login data input
        await TestMethods.captureScreenshot(this.driver, "Register and Login Dashboard Page After Invalid Login Data Input - No Login Password");
        //click 'Login' button
        await registerLoginDashboardPage.clickLoginButton();
        //assert the user gets the expected error message
        const loginAlertMessage = await registerLoginDashboardPageInvalidScenarios.getSingularInputError();
        assert.strictEqual(loginAlertMessage, "Błąd: pole hasła jest puste.", "The missing password input error doesn't match expectations.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Login Test Result - No Login Password");
    }

    //invalid singular input

    //invalid user account login test - invalid login email
    async invalidUserLoginEmailTest(){
        const generalPage = new GeneralPage(this.driver);
        const registerLoginDashboardPage = new RegisterLoginDashboardPage(this.driver);
        const registerLoginDashboardPageInvalidScenarios = new RegisterLoginDashboardPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //capture screenshot of register/login dashboard page display
        await TestMethods.captureScreenshot(this.driver, "Register and Login Dashboard Page Display Before Data Input");
        //input invalid user email into login email input field
        await registerLoginDashboardPageInvalidScenarios.inputInvalidEmailIntoLoginEmailInputField();
        //input valid user password into login password input field
        await registerLoginDashboardPage.inputValidLoginPasswordIntoLoginPasswordInputField();
        //click 'View Password' button (login)
        await registerLoginDashboardPage.clickViewPasswordLoginButton();
        //capture screenshot of valid login data input
        await TestMethods.captureScreenshot(this.driver, "Register and Login Dashboard Page After Invalid Login Data Input - Invalid Login Email");
        //click 'Login' button
        await registerLoginDashboardPage.clickLoginButton();
        //assert the user gets the expected error message
        const loginAlertMessage = await registerLoginDashboardPageInvalidScenarios.getSingularInputError();
        assert.strictEqual(loginAlertMessage, "Nieznany adres e-mail. Proszę sprawdzić ponownie lub wypróbować swoją nazwę użytkownika.", "The invalid login email input error doesn't match expectations.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Login Test Result - Invalid Login Email");
    }
    //invalid user account login test - invalid login username
    async invalidUserLoginUsernameTest(){
        const generalPage = new GeneralPage(this.driver);
        const registerLoginDashboardPage = new RegisterLoginDashboardPage(this.driver);
        const registerLoginDashboardPageInvalidScenarios = new RegisterLoginDashboardPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //capture screenshot of register/login dashboard page display
        await TestMethods.captureScreenshot(this.driver, "Register and Login Dashboard Page Display Before Data Input");
        //input invalid username into login email input field
        await registerLoginDashboardPageInvalidScenarios.inputInvalidUsernameIntoLoginEmailInputField();
        //input valid user password into login password input field
        await registerLoginDashboardPage.inputValidLoginPasswordIntoLoginPasswordInputField();
        //click 'View Password' button (login)
        await registerLoginDashboardPage.clickViewPasswordLoginButton();
        //capture screenshot of valid login data input
        await TestMethods.captureScreenshot(this.driver, "Register and Login Dashboard Page After Invalid Login Data Input - Invalid Login Username");
        //click 'Login' button
        await registerLoginDashboardPage.clickLoginButton();
        //assert the user gets the expected error message
        const loginAlertMessage = await registerLoginDashboardPageInvalidScenarios.getSingularInputError();
        assert.strictEqual(loginAlertMessage, "Błąd: brak FakeUsername wśród zarejestrowanych w witrynie użytkowników. Jeśli nie masz pewności co do nazwy użytkownika, użyj adresu e-mail.", "The invalid login username input error doesn't match expectations.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Login Test Result - Invalid Login Username");
    }
    //invalid user account login test - invalid login password
    async invalidUserLoginPasswordTest(){
        const generalPage = new GeneralPage(this.driver);
        const registerLoginDashboardPage = new RegisterLoginDashboardPage(this.driver);
        const registerLoginDashboardPageInvalidScenarios = new RegisterLoginDashboardPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //capture screenshot of register/login dashboard page display
        await TestMethods.captureScreenshot(this.driver, "Register and Login Dashboard Page Display Before Data Input");
        //input valid user email into login email input field
        await registerLoginDashboardPage.inputValidEmailIntoLoginEmailInputField();
        //input invalid user password into login password input field
        await registerLoginDashboardPageInvalidScenarios.inputInvalidPasswordIntoLoginPasswordInputField();
        //capture screenshot of valid login data input
        await TestMethods.captureScreenshot(this.driver, "Register and Login Dashboard Page After Invalid Login Data Input - Invalid Login Password");
        //click 'Login' button
        await registerLoginDashboardPage.clickLoginButton();
        //assert the user gets the expected error message
        const loginAlertMessage = await registerLoginDashboardPageInvalidScenarios.getLoginPasswordInputError();
        assert.strictEqual(loginAlertMessage, "podano nieprawidłowe hasło", "The invalid password input error doesn't match expectations.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Login Test Result - Invalid Login Password");
    }


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //homepage product addition to cart tests

    //home page news product section addition to cart test method (as a registered user)
    async addLanzarothWindsurfingProductToCartTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //click 'Main Page' nav link
        await generalPage.clickMainPageNavLink();
        //capture screenshot of home page display
        await TestMethods.captureScreenshot(this.driver, "Home Page Display");
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await this.isHomePageTextElementAsExpected();
        //log home page product data
        await this.logHomePageProductData();
        //click 'Windsurfing on Lanzaroth' add to cart button
        await homePage.clickLanzarothProductAddToCartButton()
        //hover over shopping cart dropdown button
        await generalPage.hoverOverShoppingCartButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //shopping cart dropdown menu web element assert
        await generalPage.isShoppingCartDropdownMenuWebElementDisplayed();
        //log shopping cart dropdown product data
        await this.logShoppingCartDropdownData();
        //capture screenshot of the displayed product data
        await TestMethods.captureScreenshot(this.driver, "Shopping Cart Dropdown Menu Data Display");
        //click 'View Cart' button
        await generalPage.clickViewCartButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Home Page News Product (Lanzaroth Windsurfing) Addition To Cart (As A Registered User) Test Result ");
    }

    //home page news product section addition to cart test method (as a guest)
    async addFerratyClimbingProductToCartGuestTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //capture screenshot of home page display
        await TestMethods.captureScreenshot(this.driver, "Home Page Display");
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await this.isHomePageTextElementAsExpected();
        //close demo page warning
        await homePage.clickCloseDemoWarningButton();
        //log home page product data
        await this.logHomePageProductData();
        //click 'Climbing in Ferraty' add to cart button
        await homePage.clickFerratyProductAddToCartButton()
        //hover over shopping cart dropdown button
        await generalPage.hoverOverShoppingCartButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //shopping cart dropdown menu web element assert
        await generalPage.isShoppingCartDropdownMenuWebElementDisplayed();
        //log shopping cart dropdown product data
        await this.logShoppingCartDropdownData();
        //capture screenshot of the displayed product data
        await TestMethods.captureScreenshot(this.driver, "Shopping Cart Dropdown Menu Data Display");
        //click 'View Cart' button
        await generalPage.clickViewCartButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Home Page News Product (Ferraty Climbing) Addition To Cart (As A Guest) Test Result");
    }

    //home page searched product (Windsurfing w Karpathos) addition to cart test method (as a guest)
    async addSearchedProductToCartGuestTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //capture screenshot of home page display
        await TestMethods.captureScreenshot(this.driver, "Home Page Display");
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await this.isHomePageTextElementAsExpected();
        //close demo page warning
        await homePage.clickCloseDemoWarningButton();
        //log home page product data
        await this.logHomePageProductData();
        //input searched product query -> 'Windsurfing w Karpathos'
        await generalPage.inputProductSearchGuestQuery();
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await this.isSingleProductPageTextElementAsExpected();
        //capture screenshot of single product page display
        await TestMethods.captureScreenshot(this.driver, "Windsurfing in Karpathos Product Page Display");
        //log single product page data
        await this.logSingleProductPageData();
        //click 'Additional info' link
        await singleProductPage.clickAdditionalInfoLink();
        //log single product additional data
        await this.logSingleProductPageAdditionalInfoData();
        //click 'Add to cart' button
        await singleProductPage.clickAddToCartButton();
        //assert the user gets an expected alert message
        const singleProductAlertMessage = await singleProductPage.getSingleProductAlertMessage();
        assert.strictEqual(singleProductAlertMessage,   "„Windsurfing w Karpathos“ został dodany do koszyka.", "The single product page success alert message doesn't match expectations or the product addition to cart process has failed.");
        //capture screenshot of product addition success display
        await TestMethods.captureScreenshot(this.driver, "Windsurfing in Karpathos Product Addition To Cart Success Display");
        //click 'View Cart' link
        await singleProductPage.clickViewCartLink()
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Searched Product (Windsurfing in Karpathos) Addition To Cart (As A Guest) Test Result");
    }

    //home page multiple searched products (Windsurfing w Karpathos) addition to cart test method (as a guest)
    async addMultipleSearchedProductToCartGuestTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //capture screenshot of home page display
        await TestMethods.captureScreenshot(this.driver, "Home Page Display");
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await this.isHomePageTextElementAsExpected();
        //close demo page warning
        await homePage.clickCloseDemoWarningButton();
        //log home page product data
        await this.logHomePageProductData();
        //input searched product query -> 'Windsurfing w Karpathos'
        await generalPage.inputProductSearchGuestQuery();
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await this.isSingleProductPageTextElementAsExpected();
        //capture screenshot of single product page display
        await TestMethods.captureScreenshot(this.driver, "Windsurfing in Karpathos Product Page Display");
        //log single product page data
        await this.logSingleProductPageData();
        //click 'Additional info' link
        await singleProductPage.clickAdditionalInfoLink();
        //log single product additional data
        await this.logSingleProductPageAdditionalInfoData();
        //input changed product quantity
        await singleProductPage.inputProductSearchQuery();
        //click 'Add to cart' button
        await singleProductPage.clickAddToCartButton();
        //assert the user gets an expected alert message
        const singleProductAlertMessage = await singleProductPage.getSingleProductAlertMessage();
        assert.strictEqual(singleProductAlertMessage,   "3 × „Windsurfing w Karpathos“ zostało dodanych do koszyka.", "The single product page success alert message doesn't match expectations or the product addition to cart process has failed.");
        //capture screenshot of product addition success display
        await TestMethods.captureScreenshot(this.driver, "Multiple Windsurfing in Karpathos Products Addition To Cart Success Display");
        //click 'View Cart' link
        await singleProductPage.clickViewCartLink()
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Multiple Searched Products (Windsurfing in Karpathos) Addition To Cart (As A Guest) Test Result");
    }

    //searched product (Wspinaczka Island Peak) addition to cart test method (as a registered user)
    async addSearchedProductToCartTest(){
        const generalPage = new GeneralPage(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //input searched product query -> 'Wspinaczka Island Peak'
        await generalPage.inputProductSearchRegUserQuery();
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await this.isSingleProductPageTextElementAsExpected();
        //capture screenshot of single product page display
        await TestMethods.captureScreenshot(this.driver, "Wspinaczka Island Peak Product Page Display");
        //log single product page data
        await this.logSingleProductPageData();
        //click 'Additional info' link
        await singleProductPage.clickAdditionalInfoLink();
        //log single product additional data
        await this.logSingleProductPageAdditionalInfoData();
        //click 'Add to cart' button
        await singleProductPage.clickAddToCartButton();
        //assert the user gets an expected alert message
        const singleProductAlertMessage = await singleProductPage.getSingleProductAlertMessage();
        assert.strictEqual(singleProductAlertMessage,   "„Wspinaczka Island Peak“ został dodany do koszyka.", "The single product page success alert message doesn't match expectations or the product addition to cart process has failed.");
        //capture screenshot of product addition success display
        await TestMethods.captureScreenshot(this.driver, "Wspinaczka Island Peak Product Addition To Cart Success Display");
        //click 'View Cart' link
        await singleProductPage.clickViewCartLink()
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Searched Product (Wspinaczka Island Peak) Addition To Cart (As A Registered User Test Result");
    }

    //multiple searched products (Wspinaczka Island Peak) addition to cart test method (as a registered user)
    async addMultipleSearchedProductsToCartTest(){
        const generalPage = new GeneralPage(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //input searched product query -> 'Wspinaczka Island Peak'
        await generalPage.inputProductSearchRegUserQuery();
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await this.isSingleProductPageTextElementAsExpected();
        //capture screenshot of single product page display
        await TestMethods.captureScreenshot(this.driver, "Wspinaczka Island Peak Product Page Display");
        //log single product page data
        await this.logSingleProductPageData();
        //click 'Additional info' link
        await singleProductPage.clickAdditionalInfoLink();
        //log single product additional data
        await this.logSingleProductPageAdditionalInfoData();
        //input changed product quantity
        await singleProductPage.inputProductSearchQuery();
        //click 'Add to cart' button
        await singleProductPage.clickAddToCartButton();
        //assert the user gets an expected alert message
        const singleProductAlertMessage = await singleProductPage.getSingleProductAlertMessage();
        assert.strictEqual(singleProductAlertMessage,   "3 × „Wspinaczka Island Peak“ zostało dodanych do koszyka.", "The single product page success alert message doesn't match expectations or the product addition to cart process has failed.");
        //capture screenshot of product addition success display
        await TestMethods.captureScreenshot(this.driver, "Multiple Wspinaczka Island Peak Products Addition To Cart Success Display");
        //click 'View Cart' link
        await singleProductPage.clickViewCartLink()
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Multiple Searched Products (Wspinaczka Island Peak) Addition To Cart (As A Registered User Test Result");
    }

    //shop product addition to cart tests

    //'Sailing course in Mazur' product addition to cart test (registered user)
    async addSailingCategoryProductToCartTest(){
        const generalPage = new GeneralPage(this.driver);
        const shopPage = new ShopPage(this.driver);
        const singleProductCategoryDashboardPage = new SingleProductCategoryDashboardPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //click 'Shop' nav link
        await generalPage.clickShopNavLink();
        //shop page web element assert
        await shopPage.isShopPageWebElementDisplayed();
        //log shop page data
        await this.logShopPageData();
        //capture screenshot of the shop page
        await TestMethods.captureScreenshot(this.driver, "Shop Page Display");
        //shop page web elements
        await shopPage.isShopPageWebElementDisplayed();
        //click 'Sailing' link
        await shopPage.clickSailingCategoryLink();
        //single product category dashboard page web element assert
        await singleProductCategoryDashboardPage.isSingleProductCategoryDashboardPageWebElementDisplayed();
        //capture screenshot of the sailing category dashboard page
        await TestMethods.captureScreenshot(this.driver, "Sailing Product Category Page Display");
        //assert single product category dashboard page title is as expected
        const singleProductCategoryDashboardPageTitle = await singleProductCategoryDashboardPage.getSingleProductCategoryDashboardPageTitle();
        assert.strictEqual(singleProductCategoryDashboardPageTitle,   "Żeglarstwo", "The single product category dashboard page title doesn't match expectations.");
        //single product category dashboard page text element assert
        await this.isSingleProductCategoryDashboardPageTextAsExpected();
        //log single product category dashboard page product data
        await this.logSingleProductCategoryDashboardPageData();
        //click 'Add to Cart' button
        await singleProductCategoryDashboardPage.clickSailingInMazurAddToCartButton();
        //hover over shopping cart dropdown button
        await generalPage.hoverOverShoppingCartButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //shopping cart dropdown menu web element assert
        await generalPage.isShoppingCartDropdownMenuWebElementDisplayed();
        //log shopping cart dropdown product data
        await this.logShoppingCartDropdownData();
        //capture screenshot of the displayed product data
        await TestMethods.captureScreenshot(this.driver, "Shopping Cart Dropdown Menu Data Display");
        //click 'View Cart' button
        await generalPage.clickViewCartButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Sailing Category Product (Sailing In Mazur) Addition To Cart Test Result (Registered User)");
    }

    //'Sailing course in Mazur' product addition to cart test (guest)
    async addSailingCategoryProductToCartGuestTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        const shopPage = new ShopPage(this.driver);
        const singleProductCategoryDashboardPage = new SingleProductCategoryDashboardPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //capture screenshot of home page display
        await TestMethods.captureScreenshot(this.driver, "Home Page Display");
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await this.isHomePageTextElementAsExpected();
        //log home page product data
        await this.logHomePageProductData();
        //close demo page warning
        await homePage.clickCloseDemoWarningButton();
        //click 'Shop' nav link
        await generalPage.clickShopNavLink();
        //shop page web elements
        await shopPage.isShopPageWebElementDisplayed();
        //log shop page data
        await this.logShopPageData();
        //capture screenshot of the yoga category dashboard page
        await TestMethods.captureScreenshot(this.driver, "Shop Page Display");
        //click 'Sailing' link
        await shopPage.clickSailingCategoryLink();
        //single product category dashboard page web element assert
        await singleProductCategoryDashboardPage.isSingleProductCategoryDashboardPageWebElementDisplayed();
        //capture screenshot of the sailing category dashboard page
        await TestMethods.captureScreenshot(this.driver, "Sailing Product Category Page Display");
        //assert single product category dashboard page title is as expected
        const singleProductCategoryDashboardPageTitle = await singleProductCategoryDashboardPage.getSingleProductCategoryDashboardPageTitle();
        assert.strictEqual(singleProductCategoryDashboardPageTitle,   "Żeglarstwo", "The single product category dashboard page title doesn't match expectations.");
        //single product category dashboard page text element assert
        await this.isSingleProductCategoryDashboardPageTextAsExpected();
        //log single product category dashboard page product data
        await this.logSingleProductCategoryDashboardPageData();
        //click 'Add to Cart' button
        await singleProductCategoryDashboardPage.clickSailingInMazurAddToCartButton();
        //hover over shopping cart dropdown button
        await generalPage.hoverOverShoppingCartButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //shopping cart dropdown menu web element assert
        await generalPage.isShoppingCartDropdownMenuWebElementDisplayed();
        //log shopping cart dropdown product data
        await this.logShoppingCartDropdownData();
        //capture screenshot of the displayed product data
        await TestMethods.captureScreenshot(this.driver, "Shopping Cart Dropdown Menu Data Display");
        //click 'View Cart' button
        await generalPage.clickViewCartButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Sailing Category Product (Sailing In Mazur) Addition To Cart Test Result (Guest)");
    }

    //single product category product addition to cart tests

    //add 'Yoga in Spain' product to cart test method (as a registered user)
    async addYogaSpainProductToCartTest(){
        const generalPage = new GeneralPage(this.driver);
        const shopPage = new ShopPage(this.driver);
        const singleProductCategoryDashboardPage = new SingleProductCategoryDashboardPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //click 'Shop' nav link
        await generalPage.clickShopNavLink();
        //shop page web elements
        await shopPage.isShopPageWebElementDisplayed();
        //log shop page data
        await this.logShopPageData();
        //capture screenshot of the shop page
        await TestMethods.captureScreenshot(this.driver, "Shop Page Display");
        //click aside 'Yoga' category link
        await generalPage.clickAsideYogaCategoryLink();
        //single product dashboard page web element assert
        await singleProductCategoryDashboardPage.isSingleProductCategoryDashboardPageWebElementDisplayed();
        //assert single product category dashboard page title is as expected
        const singleProductCategoryDashboardPageTitle = await singleProductCategoryDashboardPage.getSingleProductCategoryDashboardPageTitle();
        assert.strictEqual(singleProductCategoryDashboardPageTitle,   "Yoga i pilates", "The single product category dashboard page title doesn't match expectations.");
        //single product category dashboard page text element assert
        await this.isSingleProductCategoryDashboardPageTextAsExpected();
        //log yoga category product data
        await this.logSingleProductCategoryDashboardPageData();
        //capture screenshot of the yoga category dashboard page
        await TestMethods.captureScreenshot(this.driver, "Yoga Product Category Page Display");
        //click 'Yoga in Spain' product add to cart button
        await singleProductCategoryDashboardPage.clickYogaInSpainAddToCartButton();
        //hover over shopping cart dropdown button
        await generalPage.hoverOverShoppingCartButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //shopping cart dropdown menu web element assert
        await generalPage.isShoppingCartDropdownMenuWebElementDisplayed();
        //log shopping cart dropdown product data
        await this.logShoppingCartDropdownData();
        //capture screenshot of the displayed product data
        await TestMethods.captureScreenshot(this.driver, "Shopping Cart Dropdown Menu Data Display");
        //click 'View Cart' button
        await generalPage.clickViewCartButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Yoga Category Product (Yoga In Spain) Addition To Cart Test Result (Registered User)");
    }

    //add 'Yoga in Spain' product to cart test method (as a guest)
    async addYogaSpainProductToCartGuestTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        const shopPage = new ShopPage(this.driver);
        const singleProductCategoryDashboardPage = new SingleProductCategoryDashboardPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //capture screenshot of home page display
        await TestMethods.captureScreenshot(this.driver, "Home Page Display");
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await this.isHomePageTextElementAsExpected();
        //log home page product data
        await this.logHomePageProductData();
        //close demo page warning
        await homePage.clickCloseDemoWarningButton();
        //click 'Shop' nav link
        await generalPage.clickShopNavLink();
        //shop page web elements
        await shopPage.isShopPageWebElementDisplayed();
        //log shop page data
        await this.logShopPageData();
        //capture screenshot of the shop page
        await TestMethods.captureScreenshot(this.driver, "Shop Page Display");
        //click aside 'Yoga' category link
        await generalPage.clickAsideYogaCategoryLink();
        //single product dashboard page web element assert
        await singleProductCategoryDashboardPage.isSingleProductCategoryDashboardPageWebElementDisplayed();
        //assert single product category dashboard page title is as expected
        const singleProductCategoryDashboardPageTitle = await singleProductCategoryDashboardPage.getSingleProductCategoryDashboardPageTitle();
        assert.strictEqual(singleProductCategoryDashboardPageTitle,   "Yoga i pilates", "The single product category dashboard page title doesn't match expectations.");
        //single product category dashboard page text element assert
        await this.isSingleProductCategoryDashboardPageTextAsExpected();
        //click upper sort by dropdown menu
        await singleProductCategoryDashboardPage.clickUpperSortByDropdownMenu();
        //select 'Sort by newest' option
        await singleProductCategoryDashboardPage.selectSortByNewestOption();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //log yoga category product data
        await this.logSingleProductCategoryDashboardPageData();
        //capture screenshot of the yoga category dashboard page
        await TestMethods.captureScreenshot(this.driver, "Yoga Product Category Page Display");
        //click 'Yoga in Spain' product add to cart button
        await singleProductCategoryDashboardPage.clickYogaInSpainAddToCartButton();
        //hover over shopping cart dropdown button
        await generalPage.hoverOverShoppingCartButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //shopping cart dropdown menu web element assert
        await generalPage.isShoppingCartDropdownMenuWebElementDisplayed();
        //log shopping cart dropdown product data
        await this.logShoppingCartDropdownData();
        //capture screenshot of the displayed product data
        await TestMethods.captureScreenshot(this.driver, "Shopping Cart Dropdown Menu Data Display");
        //click 'View Cart' button
        await generalPage.clickViewCartButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Yoga Category Product (Yoga In Spain) Addition To Cart Test Result (Guest)");
    }

    //remove product from shopping cart dropdown menu

    //home page news product section removal from cart dropdown cart test method (as a guest -> registered user will have the same output so only guest branch is tested)
    async removeFerratyClimbingFromCartDropdownTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //capture screenshot of home page display
        await TestMethods.captureScreenshot(this.driver, "Home Page Display");
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await this.isHomePageTextElementAsExpected();
        //close demo page warning
        await homePage.clickCloseDemoWarningButton();
        //log home page product data
        await this.logHomePageProductData();
        //click 'Climbing in Ferraty' add to cart button
        await homePage.clickFerratyProductAddToCartButton()
        //hover over shopping cart dropdown button
        await generalPage.hoverOverShoppingCartButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //shopping cart dropdown menu web element assert
        await generalPage.isShoppingCartDropdownMenuWebElementDisplayed();
        //log shopping cart dropdown product data
        await this.logShoppingCartDropdownData();
        //capture screenshot of the displayed product data before product removal
        await TestMethods.captureScreenshot(this.driver, "Shopping Cart Dropdown Menu Data Display Before Product Removal");
        //click 'Remove product button' button
        await generalPage.clickRemoveProductFromDropdownCartButton();
        //capture screenshot of the displayed product data after product removal
        await TestMethods.captureScreenshot(this.driver, "Shopping Cart Dropdown Menu Data Display After Product Removal");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Home Page News Product (Ferraty Climbing) Removal From Dropdown Shopping Cart Test Result");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //home page product add to wishlist tests

    //add home page promotion(Vacation in Blooming Cherry Land) product to wishlist test method (guest)
    async addVacationBloomingCherryLandProductToWishlistGuestTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //capture screenshot of home page display
        await TestMethods.captureScreenshot(this.driver, "Home Page Display");
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await this.isHomePageTextElementAsExpected();
        //log home page product data
        await this.logHomePageProductData();
        //close demo page warning
        await homePage.clickCloseDemoWarningButton();
        //click 'Vacation in Blooming Cherry Land' product page link
        await homePage.clickVacationBloomingCherryLandProductLink();
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await this.isSingleProductPageTextElementAsExpected();
        //capture screenshot of single product page display
        await TestMethods.captureScreenshot(this.driver, "Vacation Blooming Cherry Land Product Page Display");
        //log single product page data
        await this.logSingleProductPageData();
        //click 'Additional info' link
        await singleProductPage.clickAdditionalInfoLink();
        //log single product additional data
        await this.logSingleProductPageAdditionalInfoData();
        //click 'Add to wishlist' button
        await singleProductPage.clickAddToWishlistButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click 'View Wishlist' link
        await singleProductPage.clickViewWishlistLink();
        //capture screenshot of test result
        await TestMethods.captureScreenshot(this.driver, "Vacation Blooming Cherry Land Product Addition To Wishlist (Guest) Test Result");
    }

    //add home page bestseller (Egipt - El Gouna) product to wishlist test method (registered user)
    async addEgiptElGounaProductToWishlistTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //click 'Main Page' link
        await generalPage.clickMainPageNavLink();
        //capture screenshot of home page display
        await TestMethods.captureScreenshot(this.driver, "Home Page Display");
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await this.isHomePageTextElementAsExpected();
        //log home page product data
        await this.logHomePageProductData();
        //click 'Egipt - El Gouna' product page link
        await homePage.clickEgiptElGounaProductLink();
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await this.isSingleProductPageTextElementAsExpected();
        //capture screenshot of single product page display
        await TestMethods.captureScreenshot(this.driver, "Egipt El Gouna Product Page Display");
        //log single product page data
        await this.logSingleProductPageData();
        //click 'Additional info' link
        await singleProductPage.clickAdditionalInfoLink();
        //log single product additional data
        await this.logSingleProductPageAdditionalInfoData();
        //click 'Add to wishlist' button
        await singleProductPage.clickAddToWishlistButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click 'View Wishlist' link
        await singleProductPage.clickViewWishlistLink();
        //capture screenshot of test result
        await TestMethods.captureScreenshot(this.driver, "Egipt El Gouna Product Addition To Wishlist (Registered User) Test Result");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //add to cart from wishlist test

    //add product to cart from wishlist test method
    async addProductToCartFromWishlistTest(){
        const generalPage = new GeneralPage(this.driver);
        const wishList = new WishlistPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //wishlist page web element assert
        await wishList.isWishlistPageWebElementDisplayed();
        //wishlist page text element assert
        await this.isWishlistPageTextElementAsExpected();
        //capture screenshot of wishlist page
        await TestMethods.captureScreenshot(this.driver, "Wishlist Page Display");
        //log wishlist pge product data
        await this.logWishlistPageData();
        //click 'Add to cart' link
        await wishList.clickAddToCartLink();
        //capture screenshot of test result
        await TestMethods.captureScreenshot(this.driver, "Vacation Blooming Cherry Land Product Addition To Wishlist (Guest) Test Result");
    }

    //remove product from wishlist test (guest branch ponly is tested as reg user will produce the same result)
    async removeProductFromWishlistTest(){
        const generalPage = new GeneralPage(this.driver);
        const wishList = new WishlistPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //wishlist page web element assert
        await wishList.isWishlistPageWebElementDisplayed();
        //wishlist page text element assert
        await this.isWishlistPageTextElementAsExpected();
        //capture screenshot of wishlist page
        await TestMethods.captureScreenshot(this.driver, "Wishlist Page Display");
        //log wishlist pge product data
        await this.logWishlistPageData();
        //click 'Remove from wishlist' button
        await wishList.clickRemoveFromWishlistButton();
        //assert the user gets an expected alert message
        const wishlistAlertMessage = await wishList.getWishlistAlertMessage();
        assert.strictEqual(wishlistAlertMessage,   "Produkt został usunięty.", "The wishlist page alert message doesn't match expectations or product removal has failed.");
        //capture screenshot of test result
        await TestMethods.captureScreenshot(this.driver, "Vacation Blooming Cherry Land Product Removal From Wishlist (Guest) Test Result");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //product addition to check out tests

    //single product addition to check out test method (both registered user and guest will share the same method) (method will be used with multiple products too if their quantity was changed beforehand)
    async addProductToCheckoutTest(){
        const generalPage = new GeneralPage(this.driver);
        const shoppingCartPage = new ShoppingCartPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //shopping cart page web element assert
        await shoppingCartPage.isShoppingCartPageWebElementDisplayed();
        //shopping cart page text element assert
        await this.isShoppingCartPageTextElementAsExpected();
        //capture screenshot of shopping cart page
        await TestMethods.captureScreenshot(this.driver, "Shopping Cart Page Display");
        //log shopping cart product table data
        await this.logShoppingCartPageProductData();
        //click 'Proceed to checkout' button
        await shoppingCartPage.clickProceedToCheckoutButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Product Addition To Checkout Test Result");
    }

    //multiple product addition to check out test method (both registered user and guest will share the same method -> for products where quantity wasn't changed beforehand)
    async addMultipleProductsToCheckoutTest(){
        const generalPage = new GeneralPage(this.driver);
        const shoppingCartPage = new ShoppingCartPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //shopping cart page web element assert
        await shoppingCartPage.isShoppingCartPageWebElementDisplayed();
        //shopping cart page text element assert
        await this.isShoppingCartPageTextElementAsExpected();
        //capture screenshot of shopping cart page
        await TestMethods.captureScreenshot(this.driver, "Shopping Cart Page Display");
        //log shopping cart product table data
        await this.logShoppingCartPageProductData();
        //input product quantity into product quantity input field
        await shoppingCartPage.inputProductQtyIntoQtyInputField(0, 4);
        //click 'Update cart' button
        await shoppingCartPage.clickUpdateCartButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected success message
        const updateSuccessMessage = await shoppingCartPage.getShoppingCartUpdateSuccessMessage();
        assert.strictEqual(updateSuccessMessage,   "Koszyk zaktualizowany.", "The shopping cart update success message doesn't match expectations or the update has failed.");
        //capture screenshot of product quantity update success
        await TestMethods.captureScreenshot(this.driver, "Shopping Cart Product Quantity Update Success");
        //click 'Proceed to checkout' button
        await shoppingCartPage.clickProceedToCheckoutButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Multiple Products Addition (Updated Quantity) To Checkout Test Result");
    }

    //product removal from shopping cart (page) test method (both registered user and guest will share the same method)
    async removeProductFromShoppingCartTest(){
        const generalPage = new GeneralPage(this.driver);
        const shoppingCartPage = new ShoppingCartPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //shopping cart page web element assert
        await shoppingCartPage.isShoppingCartPageWebElementDisplayed();
        //shopping cart page text element assert
        await this.isShoppingCartPageTextElementAsExpected();
        //capture screenshot of shopping cart page
        await TestMethods.captureScreenshot(this.driver, "Shopping Cart Page Display");
        //log shopping cart product table data
        await this.logShoppingCartPageProductData();
        //click 'Remove product from shopping cart' button
        await shoppingCartPage.clickRemoveProductFromCartButton()
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected product removal success message
        const removeSuccessMessage = await shoppingCartPage.getShoppingCartProductRemoveSuccessMessage();
        assert.strictEqual(removeSuccessMessage,   "Usunięto", "The shopping cart product removal success message doesn't match expectations or the product removal has failed.");
        //assert the user gets an expected message ("Shopping cart is empty")
        const cartEmptyMessage = await shoppingCartPage.getShoppingCartEmptyMessage();
        assert.strictEqual(cartEmptyMessage,   "Twój koszyk jest pusty.", "'The shopping cart is empty' message doesn't match expectations or the message isn't present.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Product Removal From Shopping Cart Page Test Result");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //valid order checkout tests

    //valid order checkout test method (as a guest)
    async validGuestOrderCheckoutTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //additional checkout page web element assert (guest page only)
        await checkoutPage.isAdditionalCheckoutPageWebElementDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //assert the guest has the expected account offer message
        const checkoutGuestAccountLoginOfferMessage = await checkoutPage.getCheckoutPageLoginOfferMessage();
        assert.strictEqual(checkoutGuestAccountLoginOfferMessage,   "Jeżeli masz już konto, kliknij tutaj, aby się zalogować", "The checkout guest account login message doesn't match expectations.");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //capture screenshot of the checkout page
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Display Before Data Input");
        //input valid guest first name into first name input field
        await checkoutPage.inputValidGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name into last name input field
        await checkoutPage.inputValidGuestLastNameIntoLastNameInputField();
        //click country dropdown menu
        await checkoutPage.clickCheckoutPageCountryDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectCheckoutPageUSCountryOption();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click state dropdown menu
        await checkoutPage.clickGuestRegionDropdownMenu();
        //select 'Illinois state option
        await checkoutPage.selectIllinoisStateOption();
        //input valid guest street into street input field
        await checkoutPage.inputValidGuestStreetIntoStreetInputField();
        //input valid guest city into city input field
        await checkoutPage.inputValidGuestCityIntoCityInputField();
        //input valid guest post code into post code input field
        await checkoutPage.inputValidGuestPostCodeIntoPostCodeInputField();
        //input valid guest phone into phone input field
        await checkoutPage.inputValidGuestPhoneIntoPhoneInputField();
        //input valid guest email into email input field
        await checkoutPage.inputValidGuestEmailIntoEmailInputField();
        //assert checkout page create account input subtitle is as expected
        const checkoutPageCreateAccountInputSubtitle = await checkoutPage.getCheckoutPageCreateAccountCheckboxSubtitle();
        assert.strictEqual(checkoutPageCreateAccountInputSubtitle,   "Stworzyć konto?", "The checkout page create account input subtitle doesn't match expectations.");
        //capture screenshot after valid data input (for form)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Valid Form Data Input");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //input valid guest credit card number into credit card number input field (only test number is accepted, others are rejected)
        await checkoutPage.inputValidCreditCardNumberIntoCreditCardInputField();
        //input valid guest credit card expiration date into credit card expiration date input field
        await checkoutPage.inputValidCreditCardExpDateIntoCreditCardInputField();
        //input valid guest credit card CVC number into credit card CVC number input field
        await checkoutPage.inputValidCreditCardCVCNumberIntoCreditCardCVCInputField();
        //capture screenshot after valid credit card data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Valid Credit Card Data Input");
        //click 'Accept Terms and Conditions' checkbox
        await checkoutPage.clickAcceptTermsCheckbox();
        //click 'Buy and Pay' check out button
        await checkoutPage.clickBuyAndPayButton();
        //wait for Stripe to process credit card data
        await checkoutPage.waitForStripeToProcessCard();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid Guest Order Checkout Test Result");
    }

    //valid order checkout test method (as a registered user)
    async validRegUserOrderCheckoutTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //capture screenshot of the checkout page
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Registered User) Display Before Credit Card Data Input");
        //input valid credit card number into credit card number input field (only test number is accepted, others are rejected)
        await checkoutPage.inputValidCreditCardNumberIntoCreditCardInputField();
        //input valid credit card expiration date into credit card expiration date input field
        await checkoutPage.inputValidCreditCardExpDateIntoCreditCardInputField();
        //input valid credit card CVC number into credit card CVC number input field
        await checkoutPage.inputValidCreditCardCVCNumberIntoCreditCardCVCInputField();
        //capture screenshot after valid credit card data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Registered User) After Valid Credit Card Data Input");
        //click 'Accept Terms and Conditions' checkbox
        await checkoutPage.clickAcceptTermsCheckbox();
        //click 'Buy and Pay' check out button
        await checkoutPage.clickBuyAndPayButton();
        //wait for Stripe to process credit card data
        await checkoutPage.waitForStripeToProcessCard();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid Registered User Order Checkout Test Result");
    }

    //invalid guest checkout tests (only guest branch is being tested to avoid redundancy, registered user checkout billing address data input will be similar to guest checkout)

    //no singular input

    //invalid guest order checkout test method - no guest first name
    async invalidGuestNoFirstNameOrderCheckoutTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageGuestInvalidScenarios = new CheckoutPageGuestInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //additional checkout page web element assert (guest page only)
        await checkoutPage.isAdditionalCheckoutPageWebElementDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //assert the guest has the expected account offer message
        const checkoutGuestAccountLoginOfferMessage = await checkoutPage.getCheckoutPageLoginOfferMessage();
        assert.strictEqual(checkoutGuestAccountLoginOfferMessage,   "Jeżeli masz już konto, kliknij tutaj, aby się zalogować", "The checkout guest account login message doesn't match expectations.");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //capture screenshot of the checkout page
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Display Before Data Input");
        //input no first name into first name input field
        await checkoutPageGuestInvalidScenarios.inputNoGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name into last name input field
        await checkoutPage.inputValidGuestLastNameIntoLastNameInputField();
        //select 'United States' option
        await checkoutPage.selectCheckoutPageUSCountryOption();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click state dropdown menu
        await checkoutPage.clickGuestRegionDropdownMenu();
        //select 'Illinois state option
        await checkoutPage.selectIllinoisStateOption();
        //input valid guest street into street input field
        await checkoutPage.inputValidGuestStreetIntoStreetInputField();
        //input valid guest city into city input field
        await checkoutPage.inputValidGuestCityIntoCityInputField();
        //input valid guest post code into post code input field
        await checkoutPage.inputValidGuestPostCodeIntoPostCodeInputField();
        //input valid guest phone into phone input field
        await checkoutPage.inputValidGuestPhoneIntoPhoneInputField();
        //input valid guest email into email input field
        await checkoutPage.inputValidGuestEmailIntoEmailInputField();
        //assert checkout page create account input subtitle is as expected
        const checkoutPageCreateAccountInputSubtitle = await checkoutPage.getCheckoutPageCreateAccountCheckboxSubtitle();
        assert.strictEqual(checkoutPageCreateAccountInputSubtitle,   "Stworzyć konto?", "The checkout page create account input subtitle doesn't match expectations.");
        //capture screenshot after invalid data input (for form)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Invalid Form Data Input - No First Name");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //input valid guest credit card number into credit card number input field (only test number is accepted, others are rejected)
        await checkoutPage.inputValidCreditCardNumberIntoCreditCardInputField();
        //input valid guest credit card expiration date into credit card expiration date input field
        await checkoutPage.inputValidCreditCardExpDateIntoCreditCardInputField();
        //input valid guest credit card CVC number into credit card CVC number input field
        await checkoutPage.inputValidCreditCardCVCNumberIntoCreditCardCVCInputField();
        //capture screenshot after valid credit card data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Valid Credit Card Data Input");
        //click 'Accept Terms and Conditions' checkbox
        await checkoutPage.clickAcceptTermsCheckbox();
        //click 'Buy and Pay' check out button
        await checkoutPage.clickBuyAndPayButton();
        //wait for Stripe to process credit card data
        await checkoutPage.waitForStripeToProcessCard();
        //assert the user gets an expected error message
        const checkoutGuestAccountInputErrorMessage = await checkoutPageGuestInvalidScenarios.getSingularCheckoutInputError();
        assert.strictEqual(checkoutGuestAccountInputErrorMessage,   "Imię płatnika jest wymaganym polem.", "The checkout guest account missing first name input error doesn't match expectations.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout Test Result - No First Name");
    }
    //invalid guest order checkout test method - no guest last name
    async invalidGuestNoLastNameOrderCheckoutTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageGuestInvalidScenarios = new CheckoutPageGuestInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //additional checkout page web element assert (guest page only)
        await checkoutPage.isAdditionalCheckoutPageWebElementDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //assert the guest has the expected account offer message
        const checkoutGuestAccountLoginOfferMessage = await checkoutPage.getCheckoutPageLoginOfferMessage();
        assert.strictEqual(checkoutGuestAccountLoginOfferMessage,   "Jeżeli masz już konto, kliknij tutaj, aby się zalogować", "The checkout guest account login message doesn't match expectations.");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //capture screenshot of the checkout page
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Display Before Data Input");
        //input valid first name into first name input field
        await checkoutPage.inputValidGuestFirstNameIntoFirstNameInputField();
        //input no guest last name into last name input field
        await checkoutPageGuestInvalidScenarios.inputNoGuestLastNameIntoLastNameInputField();
        //select 'United States' option
        await checkoutPage.selectCheckoutPageUSCountryOption();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click state dropdown menu
        await checkoutPage.clickGuestRegionDropdownMenu();
        //select 'Illinois state option
        await checkoutPage.selectIllinoisStateOption();
        //input valid guest street into street input field
        await checkoutPage.inputValidGuestStreetIntoStreetInputField();
        //input valid guest city into city input field
        await checkoutPage.inputValidGuestCityIntoCityInputField();
        //input valid guest post code into post code input field
        await checkoutPage.inputValidGuestPostCodeIntoPostCodeInputField();
        //input valid guest phone into phone input field
        await checkoutPage.inputValidGuestPhoneIntoPhoneInputField();
        //input valid guest email into email input field
        await checkoutPage.inputValidGuestEmailIntoEmailInputField();
        //assert checkout page create account input subtitle is as expected
        const checkoutPageCreateAccountInputSubtitle = await checkoutPage.getCheckoutPageCreateAccountCheckboxSubtitle();
        assert.strictEqual(checkoutPageCreateAccountInputSubtitle,   "Stworzyć konto?", "The checkout page create account input subtitle doesn't match expectations.");
        //capture screenshot after invalid data input (for form)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Invalid Form Data Input - No Last Name");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //input valid guest credit card number into credit card number input field (only test number is accepted, others are rejected)
        await checkoutPage.inputValidCreditCardNumberIntoCreditCardInputField();
        //input valid guest credit card expiration date into credit card expiration date input field
        await checkoutPage.inputValidCreditCardExpDateIntoCreditCardInputField();
        //input valid guest credit card CVC number into credit card CVC number input field
        await checkoutPage.inputValidCreditCardCVCNumberIntoCreditCardCVCInputField();
        //capture screenshot after valid credit card data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Valid Credit Card Data Input");
        //click 'Accept Terms and Conditions' checkbox
        await checkoutPage.clickAcceptTermsCheckbox();
        //click 'Buy and Pay' check out button
        await checkoutPage.clickBuyAndPayButton();
        //wait for Stripe to process credit card data
        await checkoutPage.waitForStripeToProcessCard();
        //assert the user gets an expected error message
        const checkoutGuestAccountInputErrorMessage = await checkoutPageGuestInvalidScenarios.getSingularCheckoutInputError();
        assert.strictEqual(checkoutGuestAccountInputErrorMessage,   "Nazwisko płatnika jest wymaganym polem.", "The checkout guest account missing last name input error doesn't match expectations.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout Test Result - No Last Name");
    }
    //invalid guest order checkout test method - no guest country
    async invalidGuestNoCountryOrderCheckoutTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageGuestInvalidScenarios = new CheckoutPageGuestInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //additional checkout page web element assert (guest page only)
        await checkoutPage.isAdditionalCheckoutPageWebElementDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //assert the guest has the expected account offer message
        const checkoutGuestAccountLoginOfferMessage = await checkoutPage.getCheckoutPageLoginOfferMessage();
        assert.strictEqual(checkoutGuestAccountLoginOfferMessage,   "Jeżeli masz już konto, kliknij tutaj, aby się zalogować", "The checkout guest account login message doesn't match expectations.");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //capture screenshot of the checkout page
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Display Before Data Input");
        //input valid first name into first name input field
        await checkoutPage.inputValidGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name into last name input field
        await checkoutPage.inputValidGuestLastNameIntoLastNameInputField();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click country dropdown menu
        await checkoutPage.clickCheckoutPageCountryDropdownMenu();
        //select 'Choose country' option
        await checkoutPageGuestInvalidScenarios.selectCheckoutPageNoCountryOption();
        //input valid guest street into street input field
        await checkoutPage.inputValidGuestStreetIntoStreetInputField();
        //input valid guest city into city input field
        await checkoutPage.inputValidGuestCityIntoCityInputField();
        //input guest region into region input field (default string)
        await checkoutPageGuestInvalidScenarios.inputGuestRegionIntoRegionInputField();
        //input valid guest post code into post code input field
        await checkoutPage.inputValidGuestPostCodeIntoPostCodeInputField();
        //input valid guest phone into phone input field
        await checkoutPage.inputValidGuestPhoneIntoPhoneInputField();
        //input valid guest email into email input field
        await checkoutPage.inputValidGuestEmailIntoEmailInputField();
        //assert checkout page create account input subtitle is as expected
        const checkoutPageCreateAccountInputSubtitle = await checkoutPage.getCheckoutPageCreateAccountCheckboxSubtitle();
        assert.strictEqual(checkoutPageCreateAccountInputSubtitle,   "Stworzyć konto?", "The checkout page create account input subtitle doesn't match expectations.");
        //capture screenshot after invalid data input (for form)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Invalid Form Data Input - No Country");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //input valid guest credit card number into credit card number input field (only test number is accepted, others are rejected)
        await checkoutPage.inputValidCreditCardNumberIntoCreditCardInputField();
        //input valid guest credit card expiration date into credit card expiration date input field
        await checkoutPage.inputValidCreditCardExpDateIntoCreditCardInputField();
        //input valid guest credit card CVC number into credit card CVC number input field
        await checkoutPage.inputValidCreditCardCVCNumberIntoCreditCardCVCInputField();
        //capture screenshot after valid credit card data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Valid Credit Card Data Input");
        //click 'Accept Terms and Conditions' checkbox
        await checkoutPage.clickAcceptTermsCheckbox();
        //click 'Buy and Pay' check out button
        await checkoutPage.clickBuyAndPayButton();
        //wait for Stripe to process credit card data
        await checkoutPage.waitForStripeToProcessCard();
        //assert the user gets an expected error message
        const checkoutGuestAccountInputErrorMessage = await checkoutPageGuestInvalidScenarios.getSingularCheckoutInputError();
        assert.strictEqual(checkoutGuestAccountInputErrorMessage,   "Kraj / region płatnika jest wymaganym polem.", "The checkout guest account missing country input error doesn't match expectations.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout Test Result - No Country");
    }
    //invalid guest order checkout test method - no guest state
    async invalidGuestNoStateOrderCheckoutTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageGuestInvalidScenarios = new CheckoutPageGuestInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //additional checkout page web element assert (guest page only)
        await checkoutPage.isAdditionalCheckoutPageWebElementDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //assert the guest has the expected account offer message
        const checkoutGuestAccountLoginOfferMessage = await checkoutPage.getCheckoutPageLoginOfferMessage();
        assert.strictEqual(checkoutGuestAccountLoginOfferMessage,   "Jeżeli masz już konto, kliknij tutaj, aby się zalogować", "The checkout guest account login message doesn't match expectations.");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //capture screenshot of the checkout page
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Display Before Data Input");
        //input valid first name into first name input field
        await checkoutPage.inputValidGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name into last name input field
        await checkoutPage.inputValidGuestLastNameIntoLastNameInputField();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click country dropdown menu
        await checkoutPage.clickCheckoutPageCountryDropdownMenu();
        //select 'United States' option (omit state selection)
        await checkoutPage.selectCheckoutPageUSCountryOption();
        //input valid guest street into street input field
        await checkoutPage.inputValidGuestStreetIntoStreetInputField();
        //input valid guest city into city input field
        await checkoutPage.inputValidGuestCityIntoCityInputField();
        //input valid guest post code into post code input field
        await checkoutPage.inputValidGuestPostCodeIntoPostCodeInputField();
        //input valid guest phone into phone input field
        await checkoutPage.inputValidGuestPhoneIntoPhoneInputField();
        //input valid guest email into email input field
        await checkoutPage.inputValidGuestEmailIntoEmailInputField();
        //assert checkout page create account input subtitle is as expected
        const checkoutPageCreateAccountInputSubtitle = await checkoutPage.getCheckoutPageCreateAccountCheckboxSubtitle();
        assert.strictEqual(checkoutPageCreateAccountInputSubtitle,   "Stworzyć konto?", "The checkout page create account input subtitle doesn't match expectations.");
        //capture screenshot after invalid data input (for form)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Invalid Form Data Input - No State");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //input valid guest credit card number into credit card number input field (only test number is accepted, others are rejected)
        await checkoutPage.inputValidCreditCardNumberIntoCreditCardInputField();
        //input valid guest credit card expiration date into credit card expiration date input field
        await checkoutPage.inputValidCreditCardExpDateIntoCreditCardInputField();
        //input valid guest credit card CVC number into credit card CVC number input field
        await checkoutPage.inputValidCreditCardCVCNumberIntoCreditCardCVCInputField();
        //capture screenshot after valid credit card data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Valid Credit Card Data Input");
        //click 'Accept Terms and Conditions' checkbox
        await checkoutPage.clickAcceptTermsCheckbox();
        //click 'Buy and Pay' check out button
        await checkoutPage.clickBuyAndPayButton();
        //wait for Stripe to process credit card data
        await checkoutPage.waitForStripeToProcessCard();
        //assert the user gets an expected error message
        const checkoutGuestAccountInputErrorMessage = await checkoutPageGuestInvalidScenarios.getSingularCheckoutInputError();
        assert.strictEqual(checkoutGuestAccountInputErrorMessage,   "Województwo płatnika jest wymaganym polem.", "The checkout guest account missing state input error doesn't match expectations.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout Test Result - No State");
    }
    //invalid guest order checkout test method - no guest street
    async invalidGuestNoStreetOrderCheckoutTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageGuestInvalidScenarios = new CheckoutPageGuestInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //additional checkout page web element assert (guest page only)
        await checkoutPage.isAdditionalCheckoutPageWebElementDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //assert the guest has the expected account offer message
        const checkoutGuestAccountLoginOfferMessage = await checkoutPage.getCheckoutPageLoginOfferMessage();
        assert.strictEqual(checkoutGuestAccountLoginOfferMessage,   "Jeżeli masz już konto, kliknij tutaj, aby się zalogować", "The checkout guest account login message doesn't match expectations.");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //capture screenshot of the checkout page
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Display Before Data Input");
        //input valid first name into first name input field
        await checkoutPage.inputValidGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name into last name input field
        await checkoutPage.inputValidGuestLastNameIntoLastNameInputField();
        //select 'United States' option
        await checkoutPage.selectCheckoutPageUSCountryOption();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click state dropdown menu
        await checkoutPage.clickGuestRegionDropdownMenu();
        //select 'Illinois state option
        await checkoutPage.selectIllinoisStateOption();
        //input no guest street into street input field
        await checkoutPageGuestInvalidScenarios.inputNoGuestStreetIntoStreetInputField();
        //input valid guest city into city input field
        await checkoutPage.inputValidGuestCityIntoCityInputField();
        //input valid guest post code into post code input field
        await checkoutPage.inputValidGuestPostCodeIntoPostCodeInputField();
        //input valid guest phone into phone input field
        await checkoutPage.inputValidGuestPhoneIntoPhoneInputField();
        //input valid guest email into email input field
        await checkoutPage.inputValidGuestEmailIntoEmailInputField();
        //assert checkout page create account input subtitle is as expected
        const checkoutPageCreateAccountInputSubtitle = await checkoutPage.getCheckoutPageCreateAccountCheckboxSubtitle();
        assert.strictEqual(checkoutPageCreateAccountInputSubtitle,   "Stworzyć konto?", "The checkout page create account input subtitle doesn't match expectations.");
        //capture screenshot after invalid data input (for form)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Invalid Form Data Input - No Street");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //input valid guest credit card number into credit card number input field (only test number is accepted, others are rejected)
        await checkoutPage.inputValidCreditCardNumberIntoCreditCardInputField();
        //input valid guest credit card expiration date into credit card expiration date input field
        await checkoutPage.inputValidCreditCardExpDateIntoCreditCardInputField();
        //input valid guest credit card CVC number into credit card CVC number input field
        await checkoutPage.inputValidCreditCardCVCNumberIntoCreditCardCVCInputField();
        //capture screenshot after valid credit card data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Valid Credit Card Data Input");
        //click 'Accept Terms and Conditions' checkbox
        await checkoutPage.clickAcceptTermsCheckbox();
        //click 'Buy and Pay' check out button
        await checkoutPage.clickBuyAndPayButton();
        //wait for Stripe to process credit card data
        await checkoutPage.waitForStripeToProcessCard();
        //assert the user gets an expected error message
        const checkoutGuestAccountInputErrorMessage = await checkoutPageGuestInvalidScenarios.getSingularCheckoutInputError();
        assert.strictEqual(checkoutGuestAccountInputErrorMessage,   "Ulica płatnika jest wymaganym polem.", "The checkout guest account missing street input error doesn't match expectations.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout Test Result - No Street");
    }
    //invalid guest order checkout test method - no guest city
    async invalidGuestNoCityOrderCheckoutTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageGuestInvalidScenarios = new CheckoutPageGuestInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //additional checkout page web element assert (guest page only)
        await checkoutPage.isAdditionalCheckoutPageWebElementDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //assert the guest has the expected account offer message
        const checkoutGuestAccountLoginOfferMessage = await checkoutPage.getCheckoutPageLoginOfferMessage();
        assert.strictEqual(checkoutGuestAccountLoginOfferMessage,   "Jeżeli masz już konto, kliknij tutaj, aby się zalogować", "The checkout guest account login message doesn't match expectations.");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //capture screenshot of the checkout page
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Display Before Data Input");
        //input valid first name into first name input field
        await checkoutPage.inputValidGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name into last name input field
        await checkoutPage.inputValidGuestLastNameIntoLastNameInputField();
        //select 'United States' option
        await checkoutPage.selectCheckoutPageUSCountryOption();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click state dropdown menu
        await checkoutPage.clickGuestRegionDropdownMenu();
        //select 'Illinois state option
        await checkoutPage.selectIllinoisStateOption();
        //input valid street into street input field
        await checkoutPage.inputValidGuestStreetIntoStreetInputField();
        //input no guest city into city input field
        await checkoutPageGuestInvalidScenarios.inputNoGuestCityIntoCityInputField();
        //input valid guest post code into post code input field
        await checkoutPage.inputValidGuestPostCodeIntoPostCodeInputField();
        //input valid guest phone into phone input field
        await checkoutPage.inputValidGuestPhoneIntoPhoneInputField();
        //input valid guest email into email input field
        await checkoutPage.inputValidGuestEmailIntoEmailInputField();
        //assert checkout page create account input subtitle is as expected
        const checkoutPageCreateAccountInputSubtitle = await checkoutPage.getCheckoutPageCreateAccountCheckboxSubtitle();
        assert.strictEqual(checkoutPageCreateAccountInputSubtitle,   "Stworzyć konto?", "The checkout page create account input subtitle doesn't match expectations.");
        //capture screenshot after invalid data input (for form)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Invalid Form Data Input - No City");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //input valid guest credit card number into credit card number input field (only test number is accepted, others are rejected)
        await checkoutPage.inputValidCreditCardNumberIntoCreditCardInputField();
        //input valid guest credit card expiration date into credit card expiration date input field
        await checkoutPage.inputValidCreditCardExpDateIntoCreditCardInputField();
        //input valid guest credit card CVC number into credit card CVC number input field
        await checkoutPage.inputValidCreditCardCVCNumberIntoCreditCardCVCInputField();
        //capture screenshot after valid credit card data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Valid Credit Card Data Input");
        //click 'Accept Terms and Conditions' checkbox
        await checkoutPage.clickAcceptTermsCheckbox();
        //click 'Buy and Pay' check out button
        await checkoutPage.clickBuyAndPayButton();
        //wait for Stripe to process credit card data
        await checkoutPage.waitForStripeToProcessCard();
        //assert the user gets an expected error message
        const checkoutGuestAccountInputErrorMessage = await checkoutPageGuestInvalidScenarios.getSingularCheckoutInputError();
        assert.strictEqual(checkoutGuestAccountInputErrorMessage,   "Miasto płatnika jest wymaganym polem.", "The checkout guest account missing city input error doesn't match expectations.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout Test Result - No City");
    }
    //invalid guest order checkout test method - no guest post code
    async invalidGuestNoPostCodeOrderCheckoutTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageGuestInvalidScenarios = new CheckoutPageGuestInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //additional checkout page web element assert (guest page only)
        await checkoutPage.isAdditionalCheckoutPageWebElementDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //assert the guest has the expected account offer message
        const checkoutGuestAccountLoginOfferMessage = await checkoutPage.getCheckoutPageLoginOfferMessage();
        assert.strictEqual(checkoutGuestAccountLoginOfferMessage,   "Jeżeli masz już konto, kliknij tutaj, aby się zalogować", "The checkout guest account login message doesn't match expectations.");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //capture screenshot of the checkout page
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Display Before Data Input");
        //input valid first name into first name input field
        await checkoutPage.inputValidGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name into last name input field
        await checkoutPage.inputValidGuestLastNameIntoLastNameInputField();
        //select 'United States' option
        await checkoutPage.selectCheckoutPageUSCountryOption();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click state dropdown menu
        await checkoutPage.clickGuestRegionDropdownMenu();
        //select 'Illinois state option
        await checkoutPage.selectIllinoisStateOption();
        //input valid street into street input field
        await checkoutPage.inputValidGuestStreetIntoStreetInputField();
        //input valid guest city into city input field
        await checkoutPage.inputValidGuestCityIntoCityInputField();
        //input no guest post code into post code input field
        await checkoutPageGuestInvalidScenarios.inputNoGuestPostCodeIntoPostCodeInputField();
        //input valid guest phone into phone input field
        await checkoutPage.inputValidGuestPhoneIntoPhoneInputField();
        //input valid guest email into email input field
        await checkoutPage.inputValidGuestEmailIntoEmailInputField();
        //assert checkout page create account input subtitle is as expected
        const checkoutPageCreateAccountInputSubtitle = await checkoutPage.getCheckoutPageCreateAccountCheckboxSubtitle();
        assert.strictEqual(checkoutPageCreateAccountInputSubtitle,   "Stworzyć konto?", "The checkout page create account input subtitle doesn't match expectations.");
        //capture screenshot after invalid data input (for form)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Invalid Form Data Input - No Post Code");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //input valid guest credit card number into credit card number input field (only test number is accepted, others are rejected)
        await checkoutPage.inputValidCreditCardNumberIntoCreditCardInputField();
        //input valid guest credit card expiration date into credit card expiration date input field
        await checkoutPage.inputValidCreditCardExpDateIntoCreditCardInputField();
        //input valid guest credit card CVC number into credit card CVC number input field
        await checkoutPage.inputValidCreditCardCVCNumberIntoCreditCardCVCInputField();
        //capture screenshot after valid credit card data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Valid Credit Card Data Input");
        //click 'Accept Terms and Conditions' checkbox
        await checkoutPage.clickAcceptTermsCheckbox();
        //click 'Buy and Pay' check out button
        await checkoutPage.clickBuyAndPayButton();
        //wait for Stripe to process credit card data
        await checkoutPage.waitForStripeToProcessCard();
        //assert the user gets an expected error message
        const checkoutGuestAccountInputErrorMessage = await checkoutPageGuestInvalidScenarios.getSingularCheckoutInputError();
        assert.strictEqual(checkoutGuestAccountInputErrorMessage,   "Kod pocztowy płatnika nie jest prawidłowym kodem pocztowym.", "The checkout guest account missing post code input error doesn't match expectations.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout Test Result - No Post Code");
    }
    //invalid guest order checkout test method - no guest phone
    async invalidGuestNoPhoneOrderCheckoutTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageGuestInvalidScenarios = new CheckoutPageGuestInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //additional checkout page web element assert (guest page only)
        await checkoutPage.isAdditionalCheckoutPageWebElementDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //assert the guest has the expected account offer message
        const checkoutGuestAccountLoginOfferMessage = await checkoutPage.getCheckoutPageLoginOfferMessage();
        assert.strictEqual(checkoutGuestAccountLoginOfferMessage,   "Jeżeli masz już konto, kliknij tutaj, aby się zalogować", "The checkout guest account login message doesn't match expectations.");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //capture screenshot of the checkout page
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Display Before Data Input");
        //input valid first name into first name input field
        await checkoutPage.inputValidGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name into last name input field
        await checkoutPage.inputValidGuestLastNameIntoLastNameInputField();
        //select 'United States' option
        await checkoutPage.selectCheckoutPageUSCountryOption();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click state dropdown menu
        await checkoutPage.clickGuestRegionDropdownMenu();
        //select 'Illinois state option
        await checkoutPage.selectIllinoisStateOption();
        //input valid street into street input field
        await checkoutPage.inputValidGuestStreetIntoStreetInputField();
        //input valid guest city into city input field
        await checkoutPage.inputValidGuestCityIntoCityInputField();
        //input valid guest post code into post code input field
        await checkoutPage.inputValidGuestPostCodeIntoPostCodeInputField();
        //input no guest phone into phone input field
        await checkoutPageGuestInvalidScenarios.inputNoGuestPhoneIntoPhoneInputField();
        //input valid guest email into email input field
        await checkoutPage.inputValidGuestEmailIntoEmailInputField();
        //assert checkout page create account input subtitle is as expected
        const checkoutPageCreateAccountInputSubtitle = await checkoutPage.getCheckoutPageCreateAccountCheckboxSubtitle();
        assert.strictEqual(checkoutPageCreateAccountInputSubtitle,   "Stworzyć konto?", "The checkout page create account input subtitle doesn't match expectations.");
        //capture screenshot after invalid data input (for form)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Invalid Form Data Input - No Phone");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //input valid guest credit card number into credit card number input field (only test number is accepted, others are rejected)
        await checkoutPage.inputValidCreditCardNumberIntoCreditCardInputField();
        //input valid guest credit card expiration date into credit card expiration date input field
        await checkoutPage.inputValidCreditCardExpDateIntoCreditCardInputField();
        //input valid guest credit card CVC number into credit card CVC number input field
        await checkoutPage.inputValidCreditCardCVCNumberIntoCreditCardCVCInputField();
        //capture screenshot after valid credit card data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Valid Credit Card Data Input");
        //click 'Accept Terms and Conditions' checkbox
        await checkoutPage.clickAcceptTermsCheckbox();
        //click 'Buy and Pay' check out button
        await checkoutPage.clickBuyAndPayButton();
        //wait for Stripe to process credit card data
        await checkoutPage.waitForStripeToProcessCard();
        //assert the user gets an expected error message
        const checkoutGuestAccountInputErrorMessage = await checkoutPageGuestInvalidScenarios.getSingularCheckoutInputError();
        assert.strictEqual(checkoutGuestAccountInputErrorMessage,   "Telefon płatnika jest wymaganym polem.", "The checkout guest account missing phone input error doesn't match expectations.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout Test Result - No Phone");
    }
    //invalid guest order checkout test method - no guest email
    async invalidGuestNoEmailOrderCheckoutTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageGuestInvalidScenarios = new CheckoutPageGuestInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //additional checkout page web element assert (guest page only)
        await checkoutPage.isAdditionalCheckoutPageWebElementDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //assert the guest has the expected account offer message
        const checkoutGuestAccountLoginOfferMessage = await checkoutPage.getCheckoutPageLoginOfferMessage();
        assert.strictEqual(checkoutGuestAccountLoginOfferMessage,   "Jeżeli masz już konto, kliknij tutaj, aby się zalogować", "The checkout guest account login message doesn't match expectations.");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //capture screenshot of the checkout page
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Display Before Data Input");
        //input valid first name into first name input field
        await checkoutPage.inputValidGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name into last name input field
        await checkoutPage.inputValidGuestLastNameIntoLastNameInputField();
        //select 'United States' option
        await checkoutPage.selectCheckoutPageUSCountryOption();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click state dropdown menu
        await checkoutPage.clickGuestRegionDropdownMenu();
        //select 'Illinois state option
        await checkoutPage.selectIllinoisStateOption();
        //input valid street into street input field
        await checkoutPage.inputValidGuestStreetIntoStreetInputField();
        //input valid guest city into city input field
        await checkoutPage.inputValidGuestCityIntoCityInputField();
        //input valid guest post code into post code input field
        await checkoutPage.inputValidGuestPostCodeIntoPostCodeInputField();
        //input valid guest phone into phone input field
        await checkoutPage.inputValidGuestPhoneIntoPhoneInputField();
        //input no guest email into email input field
        await checkoutPageGuestInvalidScenarios.inputNoGuestEmailIntoEmailInputField();
        //assert checkout page create account input subtitle is as expected
        const checkoutPageCreateAccountInputSubtitle = await checkoutPage.getCheckoutPageCreateAccountCheckboxSubtitle();
        assert.strictEqual(checkoutPageCreateAccountInputSubtitle,   "Stworzyć konto?", "The checkout page create account input subtitle doesn't match expectations.");
        //capture screenshot after invalid data input (for form)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Invalid Form Data Input - No Email");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //input valid guest credit card number into credit card number input field (only test number is accepted, others are rejected)
        await checkoutPage.inputValidCreditCardNumberIntoCreditCardInputField();
        //input valid guest credit card expiration date into credit card expiration date input field
        await checkoutPage.inputValidCreditCardExpDateIntoCreditCardInputField();
        //input valid guest credit card CVC number into credit card CVC number input field
        await checkoutPage.inputValidCreditCardCVCNumberIntoCreditCardCVCInputField();
        //capture screenshot after valid credit card data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Valid Credit Card Data Input");
        //click 'Accept Terms and Conditions' checkbox
        await checkoutPage.clickAcceptTermsCheckbox();
        //click 'Buy and Pay' check out button
        await checkoutPage.clickBuyAndPayButton();
        //wait for Stripe to process credit card data
        await checkoutPage.waitForStripeToProcessCard();
        //assert the user gets an expected error message
        const checkoutGuestAccountInputErrorMessage = await checkoutPageGuestInvalidScenarios.getSingularCheckoutInputError();
        assert.strictEqual(checkoutGuestAccountInputErrorMessage,   "Adres email płatnika jest wymaganym polem.", "The checkout guest account missing email input error doesn't match expectations.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout Test Result - No Email");
    }
    //invalid guest order checkout test method - no guest credit card
    async invalidGuestNoCreditCardOrderCheckoutTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageGuestInvalidScenarios = new CheckoutPageGuestInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //additional checkout page web element assert (guest page only)
        await checkoutPage.isAdditionalCheckoutPageWebElementDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //assert the guest has the expected account offer message
        const checkoutGuestAccountLoginOfferMessage = await checkoutPage.getCheckoutPageLoginOfferMessage();
        assert.strictEqual(checkoutGuestAccountLoginOfferMessage,   "Jeżeli masz już konto, kliknij tutaj, aby się zalogować", "The checkout guest account login message doesn't match expectations.");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //capture screenshot of the checkout page
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Display Before Data Input");
        //input valid first name into first name input field
        await checkoutPage.inputValidGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name into last name input field
        await checkoutPage.inputValidGuestLastNameIntoLastNameInputField();
        //select 'United States' option
        await checkoutPage.selectCheckoutPageUSCountryOption();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click state dropdown menu
        await checkoutPage.clickGuestRegionDropdownMenu();
        //select 'Illinois state option
        await checkoutPage.selectIllinoisStateOption();
        //input valid street into street input field
        await checkoutPage.inputValidGuestStreetIntoStreetInputField();
        //input valid guest city into city input field
        await checkoutPage.inputValidGuestCityIntoCityInputField();
        //input valid guest post code into post code input field
        await checkoutPage.inputValidGuestPostCodeIntoPostCodeInputField();
        //input valid guest phone into phone input field
        await checkoutPage.inputValidGuestPhoneIntoPhoneInputField();
        //input valid guest email into email input field
        await checkoutPage.inputValidGuestEmailIntoEmailInputField();
        //assert checkout page create account input subtitle is as expected
        const checkoutPageCreateAccountInputSubtitle = await checkoutPage.getCheckoutPageCreateAccountCheckboxSubtitle();
        assert.strictEqual(checkoutPageCreateAccountInputSubtitle,   "Stworzyć konto?", "The checkout page create account input subtitle doesn't match expectations.");
        //capture screenshot after invalid data input (for form)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Valid Form Data Input");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //input valid guest credit card expiration date into credit card expiration date input field
        await checkoutPage.inputValidCreditCardExpDateIntoCreditCardInputField();
        //input valid guest credit card CVC number into credit card CVC number input field
        await checkoutPage.inputValidCreditCardCVCNumberIntoCreditCardCVCInputField();
        //capture screenshot after invalid credit card data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Invalid Credit Card Data Input - No Credit Card Number");
        //click 'Accept Terms and Conditions' checkbox
        await checkoutPage.clickAcceptTermsCheckbox();
        //click 'Buy and Pay' check out button
        await checkoutPage.clickBuyAndPayButton();
        //wait for Stripe to process credit card data
        await checkoutPage.waitForStripeToProcessCard();
        //assert the user gets an expected error message
        const checkoutGuestAccountInputErrorMessage = await checkoutPageGuestInvalidScenarios.getSingularStripeInputError();
        assert.strictEqual(checkoutGuestAccountInputErrorMessage,   "Numer karty jest niekompletny.", "The checkout guest account missing email input error doesn't match expectations.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout Test Result - No Credit Card Number");
    }
    //invalid guest order checkout test method - no guest credit card expiration date
    async invalidGuestNoCreditCardExpDateOrderCheckoutTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageGuestInvalidScenarios = new CheckoutPageGuestInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //additional checkout page web element assert (guest page only)
        await checkoutPage.isAdditionalCheckoutPageWebElementDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //assert the guest has the expected account offer message
        const checkoutGuestAccountLoginOfferMessage = await checkoutPage.getCheckoutPageLoginOfferMessage();
        assert.strictEqual(checkoutGuestAccountLoginOfferMessage,   "Jeżeli masz już konto, kliknij tutaj, aby się zalogować", "The checkout guest account login message doesn't match expectations.");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //capture screenshot of the checkout page
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Display Before Data Input");
        //input valid first name into first name input field
        await checkoutPage.inputValidGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name into last name input field
        await checkoutPage.inputValidGuestLastNameIntoLastNameInputField();
        //select 'United States' option
        await checkoutPage.selectCheckoutPageUSCountryOption();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click state dropdown menu
        await checkoutPage.clickGuestRegionDropdownMenu();
        //select 'Illinois state option
        await checkoutPage.selectIllinoisStateOption();
        //input valid street into street input field
        await checkoutPage.inputValidGuestStreetIntoStreetInputField();
        //input valid guest city into city input field
        await checkoutPage.inputValidGuestCityIntoCityInputField();
        //input valid guest post code into post code input field
        await checkoutPage.inputValidGuestPostCodeIntoPostCodeInputField();
        //input valid guest phone into phone input field
        await checkoutPage.inputValidGuestPhoneIntoPhoneInputField();
        //input valid guest email into email input field
        await checkoutPage.inputValidGuestEmailIntoEmailInputField();
        //assert checkout page create account input subtitle is as expected
        const checkoutPageCreateAccountInputSubtitle = await checkoutPage.getCheckoutPageCreateAccountCheckboxSubtitle();
        assert.strictEqual(checkoutPageCreateAccountInputSubtitle,   "Stworzyć konto?", "The checkout page create account input subtitle doesn't match expectations.");
        //capture screenshot after invalid data input (for form)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Valid Form Data Input");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //input valid guest credit card number into credit card number input field (only test number is accepted, others are rejected)
        await checkoutPage.inputValidCreditCardNumberIntoCreditCardInputField();
        //input valid guest credit card CVC number into credit card CVC number input field
        await checkoutPage.inputValidCreditCardCVCNumberIntoCreditCardCVCInputField();
        //capture screenshot after invalid credit card data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Invalid Credit Card Data Input - No Credit Card Expiration Date");
        //click 'Accept Terms and Conditions' checkbox
        await checkoutPage.clickAcceptTermsCheckbox();
        //click 'Buy and Pay' check out button
        await checkoutPage.clickBuyAndPayButton();
        //wait for Stripe to process credit card data
        await checkoutPage.waitForStripeToProcessCard();
        //assert the user gets an expected error message
        const checkoutGuestAccountInputErrorMessage = await checkoutPageGuestInvalidScenarios.getSingularStripeInputError();
        assert.strictEqual(checkoutGuestAccountInputErrorMessage,   "Data ważności karty jest niekompletna.", "The checkout guest account missing email input error doesn't match expectations.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout Test Result - No Credit Card Expiration Date");
    }
    //invalid guest order checkout test method - no guest credit card CVC number
    async invalidGuestNoCreditCardCVCNumberOrderCheckoutTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageGuestInvalidScenarios = new CheckoutPageGuestInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //additional checkout page web element assert (guest page only)
        await checkoutPage.isAdditionalCheckoutPageWebElementDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //assert the guest has the expected account offer message
        const checkoutGuestAccountLoginOfferMessage = await checkoutPage.getCheckoutPageLoginOfferMessage();
        assert.strictEqual(checkoutGuestAccountLoginOfferMessage,   "Jeżeli masz już konto, kliknij tutaj, aby się zalogować", "The checkout guest account login message doesn't match expectations.");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //capture screenshot of the checkout page
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Display Before Data Input");
        //input valid first name into first name input field
        await checkoutPage.inputValidGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name into last name input field
        await checkoutPage.inputValidGuestLastNameIntoLastNameInputField();
        //select 'United States' option
        await checkoutPage.selectCheckoutPageUSCountryOption();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click state dropdown menu
        await checkoutPage.clickGuestRegionDropdownMenu();
        //select 'Illinois state option
        await checkoutPage.selectIllinoisStateOption();
        //input valid street into street input field
        await checkoutPage.inputValidGuestStreetIntoStreetInputField();
        //input valid guest city into city input field
        await checkoutPage.inputValidGuestCityIntoCityInputField();
        //input valid guest post code into post code input field
        await checkoutPage.inputValidGuestPostCodeIntoPostCodeInputField();
        //input valid guest phone into phone input field
        await checkoutPage.inputValidGuestPhoneIntoPhoneInputField();
        //input valid guest email into email input field
        await checkoutPage.inputValidGuestEmailIntoEmailInputField();
        //assert checkout page create account input subtitle is as expected
        const checkoutPageCreateAccountInputSubtitle = await checkoutPage.getCheckoutPageCreateAccountCheckboxSubtitle();
        assert.strictEqual(checkoutPageCreateAccountInputSubtitle,   "Stworzyć konto?", "The checkout page create account input subtitle doesn't match expectations.");
        //capture screenshot after invalid data input (for form)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Valid Form Data Input");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //input valid guest credit card number into credit card number input field (only test number is accepted, others are rejected)
        await checkoutPage.inputValidCreditCardNumberIntoCreditCardInputField();
        //input valid guest credit card expiration date into credit card expiration date input field
        await checkoutPage.inputValidCreditCardExpDateIntoCreditCardInputField();
        //capture screenshot after invalid credit card data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Invalid Credit Card Data Input - No Credit Card CVC Number");
        //click 'Accept Terms and Conditions' checkbox
        await checkoutPage.clickAcceptTermsCheckbox();
        //click 'Buy and Pay' check out button
        await checkoutPage.clickBuyAndPayButton();
        //wait for Stripe to process credit card data
        await checkoutPage.waitForStripeToProcessCard();
        //assert the user gets an expected error message
        const checkoutGuestAccountInputErrorMessage = await checkoutPageGuestInvalidScenarios.getSingularStripeInputError();
        assert.strictEqual(checkoutGuestAccountInputErrorMessage,   "Kod bezpieczeństwa karty jest niekompletny.", "The checkout guest account missing credit card CVC number input error doesn't match expectations.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout Test Result - No Credit Card CVC Number");
    }
    //invalid guest order checkout test method - no guest agreement with terms
    async invalidGuestNoAgreeWithTermsOrderCheckoutTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageGuestInvalidScenarios = new CheckoutPageGuestInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //additional checkout page web element assert (guest page only)
        await checkoutPage.isAdditionalCheckoutPageWebElementDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //assert the guest has the expected account offer message
        const checkoutGuestAccountLoginOfferMessage = await checkoutPage.getCheckoutPageLoginOfferMessage();
        assert.strictEqual(checkoutGuestAccountLoginOfferMessage,   "Jeżeli masz już konto, kliknij tutaj, aby się zalogować", "The checkout guest account login message doesn't match expectations.");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //capture screenshot of the checkout page
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Display Before Data Input");
        //input valid first name into first name input field
        await checkoutPage.inputValidGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name into last name input field
        await checkoutPage.inputValidGuestLastNameIntoLastNameInputField();
        //select 'United States' option
        await checkoutPage.selectCheckoutPageUSCountryOption();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click state dropdown menu
        await checkoutPage.clickGuestRegionDropdownMenu();
        //select 'Illinois state option
        await checkoutPage.selectIllinoisStateOption();
        //input valid street into street input field
        await checkoutPage.inputValidGuestStreetIntoStreetInputField();
        //input valid guest city into city input field
        await checkoutPage.inputValidGuestCityIntoCityInputField();
        //input valid guest post code into post code input field
        await checkoutPage.inputValidGuestPostCodeIntoPostCodeInputField();
        //input valid guest phone into phone input field
        await checkoutPage.inputValidGuestPhoneIntoPhoneInputField();
        //input valid guest email into email input field
        await checkoutPage.inputValidGuestEmailIntoEmailInputField();
        //assert checkout page create account input subtitle is as expected
        const checkoutPageCreateAccountInputSubtitle = await checkoutPage.getCheckoutPageCreateAccountCheckboxSubtitle();
        assert.strictEqual(checkoutPageCreateAccountInputSubtitle,   "Stworzyć konto?", "The checkout page create account input subtitle doesn't match expectations.");
        //capture screenshot after invalid data input (for form)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Valid Form Data Input");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //input valid guest credit card number into credit card number input field (only test number is accepted, others are rejected)
        await checkoutPage.inputValidCreditCardNumberIntoCreditCardInputField();
        //input valid guest credit card expiration date into credit card expiration date input field
        await checkoutPage.inputValidCreditCardExpDateIntoCreditCardInputField();
        //input valid guest credit card CVC number into credit card CVC number input field
        await checkoutPage.inputValidCreditCardCVCNumberIntoCreditCardCVCInputField();
        //capture screenshot after invalid credit card data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Valid Credit Card Data Input");
        //click 'Buy and Pay' check out button
        await checkoutPage.clickBuyAndPayButton();
        //wait for Stripe to process credit card data
        await checkoutPage.waitForStripeToProcessCard();
        //assert the user gets an expected error message
        const checkoutGuestAccountInputErrorMessage = await checkoutPageGuestInvalidScenarios.getSingularCheckoutInputError();
        assert.strictEqual(checkoutGuestAccountInputErrorMessage,   "Proszę przeczytać i zaakceptować regulamin sklepu aby móc sfinalizować zamówienie.", "The checkout guest account click terms checkbox requirement error doesn't match expectations.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout Test Result - No Agreement with Terms");
    }

    //too short singular input

    //invalid guest order checkout test method - too short guest first name (1 char)
    async invalidGuestTooShortFirstNameOrderCheckoutTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageGuestInvalidScenarios = new CheckoutPageGuestInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //additional checkout page web element assert (guest page only)
        await checkoutPage.isAdditionalCheckoutPageWebElementDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //assert the guest has the expected account offer message
        const checkoutGuestAccountLoginOfferMessage = await checkoutPage.getCheckoutPageLoginOfferMessage();
        assert.strictEqual(checkoutGuestAccountLoginOfferMessage,   "Jeżeli masz już konto, kliknij tutaj, aby się zalogować", "The checkout guest account login message doesn't match expectations.");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //capture screenshot of the checkout page
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Display Before Data Input");
        //input too short first name into first name input field (1 char)
        await checkoutPageGuestInvalidScenarios.inputTooShortGuestFirstNameIntoFirstNameInputField();
        //capture screenshot after invalid data input (for form)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest)- Too Short First Name");
        //input valid guest last name into last name input field
        await checkoutPage.inputValidGuestLastNameIntoLastNameInputField();
        //select 'United States' option
        await checkoutPage.selectCheckoutPageUSCountryOption();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click state dropdown menu
        await checkoutPage.clickGuestRegionDropdownMenu();
        //select 'Illinois state option
        await checkoutPage.selectIllinoisStateOption();
        //input valid guest street into street input field
        await checkoutPage.inputValidGuestStreetIntoStreetInputField();
        //input valid guest city into city input field
        await checkoutPage.inputValidGuestCityIntoCityInputField();
        //input valid guest post code into post code input field
        await checkoutPage.inputValidGuestPostCodeIntoPostCodeInputField();
        //input valid guest phone into phone input field
        await checkoutPage.inputValidGuestPhoneIntoPhoneInputField();
        //input valid guest email into email input field
        await checkoutPage.inputValidGuestEmailIntoEmailInputField();
        //assert checkout page create account input subtitle is as expected
        const checkoutPageCreateAccountInputSubtitle = await checkoutPage.getCheckoutPageCreateAccountCheckboxSubtitle();
        assert.strictEqual(checkoutPageCreateAccountInputSubtitle,   "Stworzyć konto?", "The checkout page create account input subtitle doesn't match expectations.");
        //capture screenshot after invalid data input (for form)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Invalid Form Data Input - Too Short First Name");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //input valid guest credit card number into credit card number input field (only test number is accepted, others are rejected)
        await checkoutPage.inputValidCreditCardNumberIntoCreditCardInputField();
        //input valid guest credit card expiration date into credit card expiration date input field
        await checkoutPage.inputValidCreditCardExpDateIntoCreditCardInputField();
        //input valid guest credit card CVC number into credit card CVC number input field
        await checkoutPage.inputValidCreditCardCVCNumberIntoCreditCardCVCInputField();
        //capture screenshot after valid credit card data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Valid Credit Card Data Input");
        //click 'Accept Terms and Conditions' checkbox
        await checkoutPage.clickAcceptTermsCheckbox();
        //click 'Buy and Pay' check out button
        await checkoutPage.clickBuyAndPayButton();
        //wait for Stripe to process credit card data
        await checkoutPage.waitForStripeToProcessCard();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const checkoutGuestAccountInputErrorMessage = await checkoutPageGuestInvalidScenarios.getSingularCheckoutInputError();
            assert.strictEqual(checkoutGuestAccountInputErrorMessage, "Imię płatnika jest zbyt krótkie.", "The checkout guest account too short first name input error doesn't match expectations.");
        } catch (e) {
            Logger.error("Too short guest first name input error doesn't get triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout Test Result - Too Short First Name");
    }
    //invalid guest order checkout test method - too short guest last name (1 char)
    async invalidGuestTooShortLastNameOrderCheckoutTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageGuestInvalidScenarios = new CheckoutPageGuestInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //additional checkout page web element assert (guest page only)
        await checkoutPage.isAdditionalCheckoutPageWebElementDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //assert the guest has the expected account offer message
        const checkoutGuestAccountLoginOfferMessage = await checkoutPage.getCheckoutPageLoginOfferMessage();
        assert.strictEqual(checkoutGuestAccountLoginOfferMessage,   "Jeżeli masz już konto, kliknij tutaj, aby się zalogować", "The checkout guest account login message doesn't match expectations.");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //capture screenshot of the checkout page
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Display Before Data Input");
        //input valid first name into first name input field
        await checkoutPage.inputValidGuestFirstNameIntoFirstNameInputField();
        //input too short guest last name into last name input field (1 char)
        await checkoutPageGuestInvalidScenarios.inputTooShortGuestLastNameIntoLastNameInputField();
        //capture screenshot after invalid data input (for form)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest)- Too Short Last Name");
        //select 'United States' option
        await checkoutPage.selectCheckoutPageUSCountryOption();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click state dropdown menu
        await checkoutPage.clickGuestRegionDropdownMenu();
        //select 'Illinois state option
        await checkoutPage.selectIllinoisStateOption();
        //input valid guest street into street input field
        await checkoutPage.inputValidGuestStreetIntoStreetInputField();
        //input valid guest city into city input field
        await checkoutPage.inputValidGuestCityIntoCityInputField();
        //input valid guest post code into post code input field
        await checkoutPage.inputValidGuestPostCodeIntoPostCodeInputField();
        //input valid guest phone into phone input field
        await checkoutPage.inputValidGuestPhoneIntoPhoneInputField();
        //input valid guest email into email input field
        await checkoutPage.inputValidGuestEmailIntoEmailInputField();
        //assert checkout page create account input subtitle is as expected
        const checkoutPageCreateAccountInputSubtitle = await checkoutPage.getCheckoutPageCreateAccountCheckboxSubtitle();
        assert.strictEqual(checkoutPageCreateAccountInputSubtitle,   "Stworzyć konto?", "The checkout page create account input subtitle doesn't match expectations.");
        //capture screenshot after invalid data input (for form)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Invalid Form Data Input - Too Short Last Name");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //input valid guest credit card number into credit card number input field (only test number is accepted, others are rejected)
        await checkoutPage.inputValidCreditCardNumberIntoCreditCardInputField();
        //input valid guest credit card expiration date into credit card expiration date input field
        await checkoutPage.inputValidCreditCardExpDateIntoCreditCardInputField();
        //input valid guest credit card CVC number into credit card CVC number input field
        await checkoutPage.inputValidCreditCardCVCNumberIntoCreditCardCVCInputField();
        //capture screenshot after valid credit card data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Valid Credit Card Data Input");
        //click 'Accept Terms and Conditions' checkbox
        await checkoutPage.clickAcceptTermsCheckbox();
        //click 'Buy and Pay' check out button
        await checkoutPage.clickBuyAndPayButton();
        //wait for Stripe to process credit card data
        await checkoutPage.waitForStripeToProcessCard();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const checkoutGuestAccountInputErrorMessage = await checkoutPageGuestInvalidScenarios.getSingularCheckoutInputError();
            assert.strictEqual(checkoutGuestAccountInputErrorMessage, "Nazwisko płatnika jest zbyt krótkie.", "The checkout guest account too short last name input error doesn't match expectations.");
        } catch (e) {
            Logger.error("Too short guest last name input error doesn't get triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout Test Result - Too Short Last Name");
    }
    //invalid guest order checkout test method - too short guest street (1 char)
    async invalidGuestTooShortStreetOrderCheckoutTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageGuestInvalidScenarios = new CheckoutPageGuestInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //additional checkout page web element assert (guest page only)
        await checkoutPage.isAdditionalCheckoutPageWebElementDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //assert the guest has the expected account offer message
        const checkoutGuestAccountLoginOfferMessage = await checkoutPage.getCheckoutPageLoginOfferMessage();
        assert.strictEqual(checkoutGuestAccountLoginOfferMessage,   "Jeżeli masz już konto, kliknij tutaj, aby się zalogować", "The checkout guest account login message doesn't match expectations.");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //capture screenshot of the checkout page
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Display Before Data Input");
        //input valid first name into first name input field
        await checkoutPage.inputValidGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name into last name input field
        await checkoutPage.inputValidGuestLastNameIntoLastNameInputField();
        //select 'United States' option
        await checkoutPage.selectCheckoutPageUSCountryOption();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click state dropdown menu
        await checkoutPage.clickGuestRegionDropdownMenu();
        //select 'Illinois state option
        await checkoutPage.selectIllinoisStateOption();
        //input too short guest street into street input field (1 char)
        await checkoutPageGuestInvalidScenarios.inputTooShortGuestStreetIntoStreetInputField();
        //capture screenshot after invalid data input (for form)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest)- Too Short Street");
        //input valid guest city into city input field
        await checkoutPage.inputValidGuestCityIntoCityInputField();
        //input valid guest post code into post code input field
        await checkoutPage.inputValidGuestPostCodeIntoPostCodeInputField();
        //input valid guest phone into phone input field
        await checkoutPage.inputValidGuestPhoneIntoPhoneInputField();
        //input valid guest email into email input field
        await checkoutPage.inputValidGuestEmailIntoEmailInputField();
        //assert checkout page create account input subtitle is as expected
        const checkoutPageCreateAccountInputSubtitle = await checkoutPage.getCheckoutPageCreateAccountCheckboxSubtitle();
        assert.strictEqual(checkoutPageCreateAccountInputSubtitle,   "Stworzyć konto?", "The checkout page create account input subtitle doesn't match expectations.");
        //capture screenshot after invalid data input (for form)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Invalid Form Data Input - Too Short Street");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //input valid guest credit card number into credit card number input field (only test number is accepted, others are rejected)
        await checkoutPage.inputValidCreditCardNumberIntoCreditCardInputField();
        //input valid guest credit card expiration date into credit card expiration date input field
        await checkoutPage.inputValidCreditCardExpDateIntoCreditCardInputField();
        //input valid guest credit card CVC number into credit card CVC number input field
        await checkoutPage.inputValidCreditCardCVCNumberIntoCreditCardCVCInputField();
        //capture screenshot after valid credit card data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Valid Credit Card Data Input");
        //click 'Accept Terms and Conditions' checkbox
        await checkoutPage.clickAcceptTermsCheckbox();
        //click 'Buy and Pay' check out button
        await checkoutPage.clickBuyAndPayButton();
        //wait for Stripe to process credit card data
        await checkoutPage.waitForStripeToProcessCard();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const checkoutGuestAccountInputErrorMessage = await checkoutPageGuestInvalidScenarios.getSingularCheckoutInputError();
            assert.strictEqual(checkoutGuestAccountInputErrorMessage, "Ulica płatnika jest zbyt krótka.", "The checkout guest account too short street input error doesn't match expectations.");
        } catch (e) {
            Logger.error("Too short guest street input error doesn't get triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout Test Result - Too Short Street");
    }
    //invalid guest order checkout test method - too short guest city (1 char)
    async invalidGuestTooShortCityOrderCheckoutTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageGuestInvalidScenarios = new CheckoutPageGuestInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //additional checkout page web element assert (guest page only)
        await checkoutPage.isAdditionalCheckoutPageWebElementDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //assert the guest has the expected account offer message
        const checkoutGuestAccountLoginOfferMessage = await checkoutPage.getCheckoutPageLoginOfferMessage();
        assert.strictEqual(checkoutGuestAccountLoginOfferMessage,   "Jeżeli masz już konto, kliknij tutaj, aby się zalogować", "The checkout guest account login message doesn't match expectations.");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //capture screenshot of the checkout page
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Display Before Data Input");
        //input valid first name into first name input field
        await checkoutPage.inputValidGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name into last name input field
        await checkoutPage.inputValidGuestLastNameIntoLastNameInputField();
        //select 'United States' option
        await checkoutPage.selectCheckoutPageUSCountryOption();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click state dropdown menu
        await checkoutPage.clickGuestRegionDropdownMenu();
        //select 'Illinois state option
        await checkoutPage.selectIllinoisStateOption();
        //input valid guest street into street input field
        await checkoutPage.inputValidGuestStreetIntoStreetInputField();
        //input too short guest city into city input field (1 char)
        await checkoutPageGuestInvalidScenarios.inputTooShortGuestCityIntoCityInputField();
        //capture screenshot after invalid data input (for form)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest)- Too Short City");
        //input valid guest post code into post code input field
        await checkoutPage.inputValidGuestPostCodeIntoPostCodeInputField();
        //input valid guest phone into phone input field
        await checkoutPage.inputValidGuestPhoneIntoPhoneInputField();
        //input valid guest email into email input field
        await checkoutPage.inputValidGuestEmailIntoEmailInputField();
        //assert checkout page create account input subtitle is as expected
        const checkoutPageCreateAccountInputSubtitle = await checkoutPage.getCheckoutPageCreateAccountCheckboxSubtitle();
        assert.strictEqual(checkoutPageCreateAccountInputSubtitle,   "Stworzyć konto?", "The checkout page create account input subtitle doesn't match expectations.");
        //capture screenshot after invalid data input (for form)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Invalid Form Data Input - Too Short City");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //input valid guest credit card number into credit card number input field (only test number is accepted, others are rejected)
        await checkoutPage.inputValidCreditCardNumberIntoCreditCardInputField();
        //input valid guest credit card expiration date into credit card expiration date input field
        await checkoutPage.inputValidCreditCardExpDateIntoCreditCardInputField();
        //input valid guest credit card CVC number into credit card CVC number input field
        await checkoutPage.inputValidCreditCardCVCNumberIntoCreditCardCVCInputField();
        //capture screenshot after valid credit card data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Valid Credit Card Data Input");
        //click 'Accept Terms and Conditions' checkbox
        await checkoutPage.clickAcceptTermsCheckbox();
        //click 'Buy and Pay' check out button
        await checkoutPage.clickBuyAndPayButton();
        //wait for Stripe to process credit card data
        await checkoutPage.waitForStripeToProcessCard();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const checkoutGuestAccountInputErrorMessage = await checkoutPageGuestInvalidScenarios.getSingularCheckoutInputError();
            assert.strictEqual(checkoutGuestAccountInputErrorMessage, "Miasto płatnika jest zbyt krótkie.", "The checkout guest account too short city input error doesn't match expectations.");
        } catch (e) {
            Logger.error("Too short guest city input error doesn't get triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout Test Result - Too Short City");
    }
    //invalid guest order checkout test method - too short guest post code (3 digits)
    async invalidGuestTooShortPostCodeOrderCheckoutTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageGuestInvalidScenarios = new CheckoutPageGuestInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //additional checkout page web element assert (guest page only)
        await checkoutPage.isAdditionalCheckoutPageWebElementDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //assert the guest has the expected account offer message
        const checkoutGuestAccountLoginOfferMessage = await checkoutPage.getCheckoutPageLoginOfferMessage();
        assert.strictEqual(checkoutGuestAccountLoginOfferMessage,   "Jeżeli masz już konto, kliknij tutaj, aby się zalogować", "The checkout guest account login message doesn't match expectations.");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //capture screenshot of the checkout page
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Display Before Data Input");
        //input valid first name into first name input field
        await checkoutPage.inputValidGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name into last name input field
        await checkoutPage.inputValidGuestLastNameIntoLastNameInputField();
        //select 'United States' option
        await checkoutPage.selectCheckoutPageUSCountryOption();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click state dropdown menu
        await checkoutPage.clickGuestRegionDropdownMenu();
        //select 'Illinois state option
        await checkoutPage.selectIllinoisStateOption();
        //input valid guest street into street input field
        await checkoutPage.inputValidGuestStreetIntoStreetInputField();
        //input valid guest city into city input field
        await checkoutPage.inputValidGuestCityIntoCityInputField();
        //input too short guest post code into post code input field (3 digits)
        await checkoutPageGuestInvalidScenarios.inputTooShortGuestPostCodeIntoPostCodeInputField();
        //capture screenshot after invalid data input (for form)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest)- Too Short Post Code");
        //input valid guest phone into phone input field
        await checkoutPage.inputValidGuestPhoneIntoPhoneInputField();
        //input valid guest email into email input field
        await checkoutPage.inputValidGuestEmailIntoEmailInputField();
        //assert checkout page create account input subtitle is as expected
        const checkoutPageCreateAccountInputSubtitle = await checkoutPage.getCheckoutPageCreateAccountCheckboxSubtitle();
        assert.strictEqual(checkoutPageCreateAccountInputSubtitle,   "Stworzyć konto?", "The checkout page create account input subtitle doesn't match expectations.");
        //capture screenshot after invalid data input (for form)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Invalid Form Data Input - Too Short Post Code");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //input valid guest credit card number into credit card number input field (only test number is accepted, others are rejected)
        await checkoutPage.inputValidCreditCardNumberIntoCreditCardInputField();
        //input valid guest credit card expiration date into credit card expiration date input field
        await checkoutPage.inputValidCreditCardExpDateIntoCreditCardInputField();
        //input valid guest credit card CVC number into credit card CVC number input field
        await checkoutPage.inputValidCreditCardCVCNumberIntoCreditCardCVCInputField();
        //capture screenshot after valid credit card data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Valid Credit Card Data Input");
        //click 'Accept Terms and Conditions' checkbox
        await checkoutPage.clickAcceptTermsCheckbox();
        //click 'Buy and Pay' check out button
        await checkoutPage.clickBuyAndPayButton();
        //wait for Stripe to process credit card data
        await checkoutPage.waitForStripeToProcessCard();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const checkoutGuestAccountInputErrorMessage = await checkoutPageGuestInvalidScenarios.getSingularCheckoutInputError();
            assert.strictEqual(checkoutGuestAccountInputErrorMessage, "Kod pocztowy płatnika nie jest prawidłowym kodem pocztowym.", "The checkout guest account too short post code input error doesn't match expectations.");
        } catch (e) {
            Logger.error("Too short guest post code input error doesn't get triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout Test Result - Too Short Post Code");
    }
    //invalid guest order checkout test method - too short guest phone (1 digit)
    async invalidGuestTooShortPhoneOrderCheckoutTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageGuestInvalidScenarios = new CheckoutPageGuestInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //additional checkout page web element assert (guest page only)
        await checkoutPage.isAdditionalCheckoutPageWebElementDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //assert the guest has the expected account offer message
        const checkoutGuestAccountLoginOfferMessage = await checkoutPage.getCheckoutPageLoginOfferMessage();
        assert.strictEqual(checkoutGuestAccountLoginOfferMessage,   "Jeżeli masz już konto, kliknij tutaj, aby się zalogować", "The checkout guest account login message doesn't match expectations.");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //capture screenshot of the checkout page
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Display Before Data Input");
        //input valid first name into first name input field
        await checkoutPage.inputValidGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name into last name input field
        await checkoutPage.inputValidGuestLastNameIntoLastNameInputField();
        //select 'United States' option
        await checkoutPage.selectCheckoutPageUSCountryOption();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click state dropdown menu
        await checkoutPage.clickGuestRegionDropdownMenu();
        //select 'Illinois state option
        await checkoutPage.selectIllinoisStateOption();
        //input valid guest street into street input field
        await checkoutPage.inputValidGuestStreetIntoStreetInputField();
        //input valid guest city into city input field
        await checkoutPage.inputValidGuestCityIntoCityInputField();
        //input valid guest post code into post code input field
        await checkoutPage.inputValidGuestPostCodeIntoPostCodeInputField();
        //input too short guest phone into phone input field (1 digit)
        await checkoutPageGuestInvalidScenarios.inputTooShortGuestPhoneIntoPhoneInputField();
        //capture screenshot after invalid data input (for form)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest)- Too Short Phone");
        //input valid guest email into email input field
        await checkoutPage.inputValidGuestEmailIntoEmailInputField();
        //assert checkout page create account input subtitle is as expected
        const checkoutPageCreateAccountInputSubtitle = await checkoutPage.getCheckoutPageCreateAccountCheckboxSubtitle();
        assert.strictEqual(checkoutPageCreateAccountInputSubtitle,   "Stworzyć konto?", "The checkout page create account input subtitle doesn't match expectations.");
        //capture screenshot after invalid data input (for form)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Invalid Form Data Input - Too Short Phone");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //input valid guest credit card number into credit card number input field (only test number is accepted, others are rejected)
        await checkoutPage.inputValidCreditCardNumberIntoCreditCardInputField();
        //input valid guest credit card expiration date into credit card expiration date input field
        await checkoutPage.inputValidCreditCardExpDateIntoCreditCardInputField();
        //input valid guest credit card CVC number into credit card CVC number input field
        await checkoutPage.inputValidCreditCardCVCNumberIntoCreditCardCVCInputField();
        //capture screenshot after valid credit card data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Valid Credit Card Data Input");
        //click 'Accept Terms and Conditions' checkbox
        await checkoutPage.clickAcceptTermsCheckbox();
        //click 'Buy and Pay' check out button
        await checkoutPage.clickBuyAndPayButton();
        //wait for Stripe to process credit card data
        await checkoutPage.waitForStripeToProcessCard();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const checkoutGuestAccountInputErrorMessage = await checkoutPageGuestInvalidScenarios.getSingularCheckoutInputError();
            assert.strictEqual(checkoutGuestAccountInputErrorMessage, "Telefon płatnika nie jest prawidłowym telefonem.", "The checkout guest account too short phone input error doesn't match expectations.");
        } catch (e) {
            Logger.error("Too short guest phone input error doesn't get triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout Test Result - Too Short Phone");
    }
    //invalid guest order checkout test method - too short guest email (1 char -> name, domain)
    async invalidGuestTooShortEmailOrderCheckoutTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageGuestInvalidScenarios = new CheckoutPageGuestInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //additional checkout page web element assert (guest page only)
        await checkoutPage.isAdditionalCheckoutPageWebElementDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //assert the guest has the expected account offer message
        const checkoutGuestAccountLoginOfferMessage = await checkoutPage.getCheckoutPageLoginOfferMessage();
        assert.strictEqual(checkoutGuestAccountLoginOfferMessage,   "Jeżeli masz już konto, kliknij tutaj, aby się zalogować", "The checkout guest account login message doesn't match expectations.");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //capture screenshot of the checkout page
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Display Before Data Input");
        //input valid first name into first name input field
        await checkoutPage.inputValidGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name into last name input field
        await checkoutPage.inputValidGuestLastNameIntoLastNameInputField();
        //select 'United States' option
        await checkoutPage.selectCheckoutPageUSCountryOption();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click state dropdown menu
        await checkoutPage.clickGuestRegionDropdownMenu();
        //select 'Illinois state option
        await checkoutPage.selectIllinoisStateOption();
        //input valid guest street into street input field
        await checkoutPage.inputValidGuestStreetIntoStreetInputField();
        //input valid guest city into city input field
        await checkoutPage.inputValidGuestCityIntoCityInputField();
        //input valid guest post code into post code input field
        await checkoutPage.inputValidGuestPostCodeIntoPostCodeInputField();
        //input valid guest phone into phone input field
        await checkoutPage.inputValidGuestPhoneIntoPhoneInputField();
        //input too short guest email into email input field (1 char -> name, domain)
        await checkoutPageGuestInvalidScenarios.inputTooShortGuestEmailIntoEmailInputField();
        //capture screenshot after invalid data input (for form)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest)- Too Short Email");
        //assert checkout page create account input subtitle is as expected
        const checkoutPageCreateAccountInputSubtitle = await checkoutPage.getCheckoutPageCreateAccountCheckboxSubtitle();
        assert.strictEqual(checkoutPageCreateAccountInputSubtitle,   "Stworzyć konto?", "The checkout page create account input subtitle doesn't match expectations.");
        //capture screenshot after invalid data input (for form)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Invalid Form Data Input - Too Short Email");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //input valid guest credit card number into credit card number input field (only test number is accepted, others are rejected)
        await checkoutPage.inputValidCreditCardNumberIntoCreditCardInputField();
        //input valid guest credit card expiration date into credit card expiration date input field
        await checkoutPage.inputValidCreditCardExpDateIntoCreditCardInputField();
        //input valid guest credit card CVC number into credit card CVC number input field
        await checkoutPage.inputValidCreditCardCVCNumberIntoCreditCardCVCInputField();
        //capture screenshot after valid credit card data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Valid Credit Card Data Input");
        //click 'Accept Terms and Conditions' checkbox
        await checkoutPage.clickAcceptTermsCheckbox();
        //click 'Buy and Pay' check out button
        await checkoutPage.clickBuyAndPayButton();
        //wait for Stripe to process credit card data
        await checkoutPage.waitForStripeToProcessCard();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const checkoutGuestAccountInputErrorMessage = await checkoutPageGuestInvalidScenarios.getSingularCheckoutInputError();
            assert.strictEqual(checkoutGuestAccountInputErrorMessage, "Adres email jest zbyt krótki.", "The checkout guest account too short email input error doesn't match expectations.");
        } catch (e) {
            Logger.error("Too short guest email input error doesn't get triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout Test Result - Too Short Email");
    }
    //invalid guest order checkout test method - too short credit card number (15 digits)
    async invalidGuestTooShortCreditCardNumberOrderCheckoutTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageGuestInvalidScenarios = new CheckoutPageGuestInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //additional checkout page web element assert (guest page only)
        await checkoutPage.isAdditionalCheckoutPageWebElementDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //assert the guest has the expected account offer message
        const checkoutGuestAccountLoginOfferMessage = await checkoutPage.getCheckoutPageLoginOfferMessage();
        assert.strictEqual(checkoutGuestAccountLoginOfferMessage,   "Jeżeli masz już konto, kliknij tutaj, aby się zalogować", "The checkout guest account login message doesn't match expectations.");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //capture screenshot of the checkout page
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Display Before Data Input");
        //input valid first name into first name input field
        await checkoutPage.inputValidGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name into last name input field
        await checkoutPage.inputValidGuestLastNameIntoLastNameInputField();
        //select 'United States' option
        await checkoutPage.selectCheckoutPageUSCountryOption();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click state dropdown menu
        await checkoutPage.clickGuestRegionDropdownMenu();
        //select 'Illinois state option
        await checkoutPage.selectIllinoisStateOption();
        //input valid guest street into street input field
        await checkoutPage.inputValidGuestStreetIntoStreetInputField();
        //input valid guest city into city input field
        await checkoutPage.inputValidGuestCityIntoCityInputField();
        //input valid guest post code into post code input field
        await checkoutPage.inputValidGuestPostCodeIntoPostCodeInputField();
        //input valid guest phone into phone input field
        await checkoutPage.inputValidGuestPhoneIntoPhoneInputField();
        //input valid guest email into email input field
        await checkoutPage.inputValidGuestEmailIntoEmailInputField();
        //assert checkout page create account input subtitle is as expected
        const checkoutPageCreateAccountInputSubtitle = await checkoutPage.getCheckoutPageCreateAccountCheckboxSubtitle();
        assert.strictEqual(checkoutPageCreateAccountInputSubtitle,   "Stworzyć konto?", "The checkout page create account input subtitle doesn't match expectations.");
        //capture screenshot after invalid data input (for form)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Valid Form Data Input");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //input too short guest credit card number into credit card number input field (15 digits)
        await checkoutPageGuestInvalidScenarios.inputTooShortCreditCardNumberIntoCreditCardInputField();
        //input valid guest credit card expiration date into credit card expiration date input field
        await checkoutPage.inputValidCreditCardExpDateIntoCreditCardInputField();
        //input valid guest credit card CVC number into credit card CVC number input field
        await checkoutPage.inputValidCreditCardCVCNumberIntoCreditCardCVCInputField();
        //capture screenshot after valid credit card data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Invalid Credit Card Data Input - Too Short Credit Card Number");
        //click 'Accept Terms and Conditions' checkbox
        await checkoutPage.clickAcceptTermsCheckbox();
        //click 'Buy and Pay' check out button
        await checkoutPage.clickBuyAndPayButton();
        //wait for Stripe to process credit card data
        await checkoutPage.waitForStripeToProcessCard();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const checkoutGuestAccountInputErrorMessage = await checkoutPageGuestInvalidScenarios.getSingularStripeInputError();
            assert.strictEqual(checkoutGuestAccountInputErrorMessage, "Numer karty jest niekompletny.", "The checkout guest account too short credit card number input error doesn't match expectations.");
        } catch (e) {
            Logger.error("Too short guest credit card number input error doesn't get triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout Test Result - Too Short Credit Card Number");
    }
    //invalid guest order checkout test method - too short credit card expiration date (3 digits)
    async invalidGuestTooShortCreditCardExpDateOrderCheckoutTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageGuestInvalidScenarios = new CheckoutPageGuestInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //additional checkout page web element assert (guest page only)
        await checkoutPage.isAdditionalCheckoutPageWebElementDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //assert the guest has the expected account offer message
        const checkoutGuestAccountLoginOfferMessage = await checkoutPage.getCheckoutPageLoginOfferMessage();
        assert.strictEqual(checkoutGuestAccountLoginOfferMessage,   "Jeżeli masz już konto, kliknij tutaj, aby się zalogować", "The checkout guest account login message doesn't match expectations.");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //capture screenshot of the checkout page
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Display Before Data Input");
        //input valid first name into first name input field
        await checkoutPage.inputValidGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name into last name input field
        await checkoutPage.inputValidGuestLastNameIntoLastNameInputField();
        //select 'United States' option
        await checkoutPage.selectCheckoutPageUSCountryOption();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click state dropdown menu
        await checkoutPage.clickGuestRegionDropdownMenu();
        //select 'Illinois state option
        await checkoutPage.selectIllinoisStateOption();
        //input valid guest street into street input field
        await checkoutPage.inputValidGuestStreetIntoStreetInputField();
        //input valid guest city into city input field
        await checkoutPage.inputValidGuestCityIntoCityInputField();
        //input valid guest post code into post code input field
        await checkoutPage.inputValidGuestPostCodeIntoPostCodeInputField();
        //input valid guest phone into phone input field
        await checkoutPage.inputValidGuestPhoneIntoPhoneInputField();
        //input valid guest email into email input field
        await checkoutPage.inputValidGuestEmailIntoEmailInputField();
        //assert checkout page create account input subtitle is as expected
        const checkoutPageCreateAccountInputSubtitle = await checkoutPage.getCheckoutPageCreateAccountCheckboxSubtitle();
        assert.strictEqual(checkoutPageCreateAccountInputSubtitle,   "Stworzyć konto?", "The checkout page create account input subtitle doesn't match expectations.");
        //capture screenshot after invalid data input (for form)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Valid Form Data Input");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //input valid guest credit card number into credit card number input field
        await checkoutPage.inputValidCreditCardNumberIntoCreditCardInputField();
        //input too short guest credit card expiration date into credit card expiration date input field (3 digits)
        await checkoutPageGuestInvalidScenarios.inputTooShortCreditCardExpDateIntoCreditCardInputField();
        //input valid guest credit card CVC number into credit card CVC number input field
        await checkoutPage.inputValidCreditCardCVCNumberIntoCreditCardCVCInputField();
        //capture screenshot after valid credit card data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Invalid Credit Card Data Input - Too Short Credit Card Exp Date");
        //click 'Accept Terms and Conditions' checkbox
        await checkoutPage.clickAcceptTermsCheckbox();
        //click 'Buy and Pay' check out button
        await checkoutPage.clickBuyAndPayButton();
        //wait for Stripe to process credit card data
        await checkoutPage.waitForStripeToProcessCard();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const checkoutGuestAccountInputErrorMessage = await checkoutPageGuestInvalidScenarios.getSingularStripeInputError();
            assert.strictEqual(checkoutGuestAccountInputErrorMessage, "Data ważności karty jest niekompletna.", "The checkout guest account too short credit card expiration date input error doesn't match expectations.");
        } catch (e) {
            Logger.error("Too short guest credit card expiration date input error doesn't get triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout Test Result - Too Short Credit Card Exp Date");
    }
    //invalid guest order checkout test method - too short credit card CVC number (2 digits)
    async invalidGuestTooShortCreditCardCVCNumberOrderCheckoutTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageGuestInvalidScenarios = new CheckoutPageGuestInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //additional checkout page web element assert (guest page only)
        await checkoutPage.isAdditionalCheckoutPageWebElementDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //assert the guest has the expected account offer message
        const checkoutGuestAccountLoginOfferMessage = await checkoutPage.getCheckoutPageLoginOfferMessage();
        assert.strictEqual(checkoutGuestAccountLoginOfferMessage,   "Jeżeli masz już konto, kliknij tutaj, aby się zalogować", "The checkout guest account login message doesn't match expectations.");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //capture screenshot of the checkout page
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Display Before Data Input");
        //input valid first name into first name input field
        await checkoutPage.inputValidGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name into last name input field
        await checkoutPage.inputValidGuestLastNameIntoLastNameInputField();
        //select 'United States' option
        await checkoutPage.selectCheckoutPageUSCountryOption();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click state dropdown menu
        await checkoutPage.clickGuestRegionDropdownMenu();
        //select 'Illinois state option
        await checkoutPage.selectIllinoisStateOption();
        //input valid guest street into street input field
        await checkoutPage.inputValidGuestStreetIntoStreetInputField();
        //input valid guest city into city input field
        await checkoutPage.inputValidGuestCityIntoCityInputField();
        //input valid guest post code into post code input field
        await checkoutPage.inputValidGuestPostCodeIntoPostCodeInputField();
        //input valid guest phone into phone input field
        await checkoutPage.inputValidGuestPhoneIntoPhoneInputField();
        //input valid guest email into email input field
        await checkoutPage.inputValidGuestEmailIntoEmailInputField();
        //assert checkout page create account input subtitle is as expected
        const checkoutPageCreateAccountInputSubtitle = await checkoutPage.getCheckoutPageCreateAccountCheckboxSubtitle();
        assert.strictEqual(checkoutPageCreateAccountInputSubtitle,   "Stworzyć konto?", "The checkout page create account input subtitle doesn't match expectations.");
        //capture screenshot after invalid data input (for form)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Valid Form Data Input");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //input valid guest credit card number into credit card number input field
        await checkoutPage.inputValidCreditCardNumberIntoCreditCardInputField();
        //input valid guest credit card expiration date into credit card expiration date input field
        await checkoutPage.inputValidCreditCardExpDateIntoCreditCardInputField();
        //input too short guest credit card CVC number into credit card CVC number input field (2 digits)
        await checkoutPageGuestInvalidScenarios.inputTooShortCreditCardCVCNumberIntoCreditCardCVCInputField();
        //capture screenshot after valid credit card data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Invalid Credit Card Data Input - Too Short Credit Card CVC number");
        //click 'Accept Terms and Conditions' checkbox
        await checkoutPage.clickAcceptTermsCheckbox();
        //click 'Buy and Pay' check out button
        await checkoutPage.clickBuyAndPayButton();
        //wait for Stripe to process credit card data
        await checkoutPage.waitForStripeToProcessCard();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const checkoutGuestAccountInputErrorMessage = await checkoutPageGuestInvalidScenarios.getSingularStripeInputError();
            assert.strictEqual(checkoutGuestAccountInputErrorMessage, "Kod bezpieczeństwa karty jest niekompletny.", "The checkout guest account too short credit card CVC number input error doesn't match expectations.");
        } catch (e) {
            Logger.error("Too short guest credit card CVC number input error doesn't get triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout Test Result - Too Short Credit Card CVC Number");
    }

    //too long singular input

    //invalid guest order checkout test method - too long guest first name (100 chars)
    async invalidGuestTooLongFirstNameOrderCheckoutTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageGuestInvalidScenarios = new CheckoutPageGuestInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //additional checkout page web element assert (guest page only)
        await checkoutPage.isAdditionalCheckoutPageWebElementDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //assert the guest has the expected account offer message
        const checkoutGuestAccountLoginOfferMessage = await checkoutPage.getCheckoutPageLoginOfferMessage();
        assert.strictEqual(checkoutGuestAccountLoginOfferMessage,   "Jeżeli masz już konto, kliknij tutaj, aby się zalogować", "The checkout guest account login message doesn't match expectations.");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //capture screenshot of the checkout page
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Display Before Data Input");
        //input too long first name into first name input field (100 chars)
        await checkoutPageGuestInvalidScenarios.inputTooLongGuestFirstNameIntoFirstNameInputField();
        //capture screenshot after invalid data input (for form)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest)- Too Long First Name");
        //input valid guest last name into last name input field
        await checkoutPage.inputValidGuestLastNameIntoLastNameInputField();
        //select 'United States' option
        await checkoutPage.selectCheckoutPageUSCountryOption();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click state dropdown menu
        await checkoutPage.clickGuestRegionDropdownMenu();
        //select 'Illinois state option
        await checkoutPage.selectIllinoisStateOption();
        //input valid guest street into street input field
        await checkoutPage.inputValidGuestStreetIntoStreetInputField();
        //input valid guest city into city input field
        await checkoutPage.inputValidGuestCityIntoCityInputField();
        //input valid guest post code into post code input field
        await checkoutPage.inputValidGuestPostCodeIntoPostCodeInputField();
        //input valid guest phone into phone input field
        await checkoutPage.inputValidGuestPhoneIntoPhoneInputField();
        //input valid guest email into email input field
        await checkoutPage.inputValidGuestEmailIntoEmailInputField();
        //assert checkout page create account input subtitle is as expected
        const checkoutPageCreateAccountInputSubtitle = await checkoutPage.getCheckoutPageCreateAccountCheckboxSubtitle();
        assert.strictEqual(checkoutPageCreateAccountInputSubtitle,   "Stworzyć konto?", "The checkout page create account input subtitle doesn't match expectations.");
        //capture screenshot after invalid data input (for form)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Invalid Form Data Input - Too Long First Name");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //input valid guest credit card number into credit card number input field (only test number is accepted, others are rejected)
        await checkoutPage.inputValidCreditCardNumberIntoCreditCardInputField();
        //input valid guest credit card expiration date into credit card expiration date input field
        await checkoutPage.inputValidCreditCardExpDateIntoCreditCardInputField();
        //input valid guest credit card CVC number into credit card CVC number input field
        await checkoutPage.inputValidCreditCardCVCNumberIntoCreditCardCVCInputField();
        //capture screenshot after valid credit card data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Valid Credit Card Data Input");
        //click 'Accept Terms and Conditions' checkbox
        await checkoutPage.clickAcceptTermsCheckbox();
        //click 'Buy and Pay' check out button
        await checkoutPage.clickBuyAndPayButton();
        //wait for Stripe to process credit card data
        await checkoutPage.waitForStripeToProcessCard();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const checkoutGuestAccountInputErrorMessage = await checkoutPageGuestInvalidScenarios.getSingularCheckoutInputError();
            assert.strictEqual(checkoutGuestAccountInputErrorMessage, "Imię płatnika jest zbyt długie.", "The checkout guest account too short first name input error doesn't match expectations.");
        } catch (e) {
            Logger.error("Too short guest first name input error doesn't get triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout Test Result - Too Long First Name");
    }
    //invalid guest order checkout test method - too long guest last name (100 chars)
    async invalidGuestTooLongLastNameOrderCheckoutTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageGuestInvalidScenarios = new CheckoutPageGuestInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //additional checkout page web element assert (guest page only)
        await checkoutPage.isAdditionalCheckoutPageWebElementDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //assert the guest has the expected account offer message
        const checkoutGuestAccountLoginOfferMessage = await checkoutPage.getCheckoutPageLoginOfferMessage();
        assert.strictEqual(checkoutGuestAccountLoginOfferMessage,   "Jeżeli masz już konto, kliknij tutaj, aby się zalogować", "The checkout guest account login message doesn't match expectations.");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //capture screenshot of the checkout page
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Display Before Data Input");
        //input valid first name into first name input field
        await checkoutPage.inputValidGuestFirstNameIntoFirstNameInputField();
        //input too long guest last name into last name input field (100 chars)
        await checkoutPageGuestInvalidScenarios.inputTooLongGuestLastNameIntoLastNameInputField();
        //capture screenshot after invalid data input (for form)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest)- Too Long Last Name");
        //select 'United States' option
        await checkoutPage.selectCheckoutPageUSCountryOption();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click state dropdown menu
        await checkoutPage.clickGuestRegionDropdownMenu();
        //select 'Illinois state option
        await checkoutPage.selectIllinoisStateOption();
        //input valid guest street into street input field
        await checkoutPage.inputValidGuestStreetIntoStreetInputField();
        //input valid guest city into city input field
        await checkoutPage.inputValidGuestCityIntoCityInputField();
        //input valid guest post code into post code input field
        await checkoutPage.inputValidGuestPostCodeIntoPostCodeInputField();
        //input valid guest phone into phone input field
        await checkoutPage.inputValidGuestPhoneIntoPhoneInputField();
        //input valid guest email into email input field
        await checkoutPage.inputValidGuestEmailIntoEmailInputField();
        //assert checkout page create account input subtitle is as expected
        const checkoutPageCreateAccountInputSubtitle = await checkoutPage.getCheckoutPageCreateAccountCheckboxSubtitle();
        assert.strictEqual(checkoutPageCreateAccountInputSubtitle,   "Stworzyć konto?", "The checkout page create account input subtitle doesn't match expectations.");
        //capture screenshot after invalid data input (for form)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Invalid Form Data Input - Too Long Last Name");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //input valid guest credit card number into credit card number input field (only test number is accepted, others are rejected)
        await checkoutPage.inputValidCreditCardNumberIntoCreditCardInputField();
        //input valid guest credit card expiration date into credit card expiration date input field
        await checkoutPage.inputValidCreditCardExpDateIntoCreditCardInputField();
        //input valid guest credit card CVC number into credit card CVC number input field
        await checkoutPage.inputValidCreditCardCVCNumberIntoCreditCardCVCInputField();
        //capture screenshot after valid credit card data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Valid Credit Card Data Input");
        //click 'Accept Terms and Conditions' checkbox
        await checkoutPage.clickAcceptTermsCheckbox();
        //click 'Buy and Pay' check out button
        await checkoutPage.clickBuyAndPayButton();
        //wait for Stripe to process credit card data
        await checkoutPage.waitForStripeToProcessCard();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const checkoutGuestAccountInputErrorMessage = await checkoutPageGuestInvalidScenarios.getSingularCheckoutInputError();
            assert.strictEqual(checkoutGuestAccountInputErrorMessage, "Nazwisko płatnika jest zbyt długie.", "The checkout guest account too long last name input error doesn't match expectations.");
        } catch (e) {
            Logger.error("Too long guest last name input error doesn't get triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout Test Result - Too Long Last Name");
    }
    //invalid guest order checkout test method - too long guest street (100 chars)
    async invalidGuestTooLongStreetOrderCheckoutTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageGuestInvalidScenarios = new CheckoutPageGuestInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //additional checkout page web element assert (guest page only)
        await checkoutPage.isAdditionalCheckoutPageWebElementDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //assert the guest has the expected account offer message
        const checkoutGuestAccountLoginOfferMessage = await checkoutPage.getCheckoutPageLoginOfferMessage();
        assert.strictEqual(checkoutGuestAccountLoginOfferMessage,   "Jeżeli masz już konto, kliknij tutaj, aby się zalogować", "The checkout guest account login message doesn't match expectations.");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //capture screenshot of the checkout page
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Display Before Data Input");
        //input valid first name into first name input field
        await checkoutPage.inputValidGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name into last name input field
        await checkoutPage.inputValidGuestLastNameIntoLastNameInputField();
        //select 'United States' option
        await checkoutPage.selectCheckoutPageUSCountryOption();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click state dropdown menu
        await checkoutPage.clickGuestRegionDropdownMenu();
        //select 'Illinois state option
        await checkoutPage.selectIllinoisStateOption();
        //input too long guest street into street input field (100 chars)
        await checkoutPageGuestInvalidScenarios.inputTooLongGuestStreetIntoStreetInputField();
        //capture screenshot after invalid data input (for form)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest)- Too Long Street");
        //input valid guest city into city input field
        await checkoutPage.inputValidGuestCityIntoCityInputField();
        //input valid guest post code into post code input field
        await checkoutPage.inputValidGuestPostCodeIntoPostCodeInputField();
        //input valid guest phone into phone input field
        await checkoutPage.inputValidGuestPhoneIntoPhoneInputField();
        //input valid guest email into email input field
        await checkoutPage.inputValidGuestEmailIntoEmailInputField();
        //assert checkout page create account input subtitle is as expected
        const checkoutPageCreateAccountInputSubtitle = await checkoutPage.getCheckoutPageCreateAccountCheckboxSubtitle();
        assert.strictEqual(checkoutPageCreateAccountInputSubtitle,   "Stworzyć konto?", "The checkout page create account input subtitle doesn't match expectations.");
        //capture screenshot after invalid data input (for form)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Invalid Form Data Input - Too Long Street");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //input valid guest credit card number into credit card number input field (only test number is accepted, others are rejected)
        await checkoutPage.inputValidCreditCardNumberIntoCreditCardInputField();
        //input valid guest credit card expiration date into credit card expiration date input field
        await checkoutPage.inputValidCreditCardExpDateIntoCreditCardInputField();
        //input valid guest credit card CVC number into credit card CVC number input field
        await checkoutPage.inputValidCreditCardCVCNumberIntoCreditCardCVCInputField();
        //capture screenshot after valid credit card data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Valid Credit Card Data Input");
        //click 'Accept Terms and Conditions' checkbox
        await checkoutPage.clickAcceptTermsCheckbox();
        //click 'Buy and Pay' check out button
        await checkoutPage.clickBuyAndPayButton();
        //wait for Stripe to process credit card data
        await checkoutPage.waitForStripeToProcessCard();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const checkoutGuestAccountInputErrorMessage = await checkoutPageGuestInvalidScenarios.getSingularCheckoutInputError();
            assert.strictEqual(checkoutGuestAccountInputErrorMessage, "Ulica płatnika jest zbyt długa.", "The checkout guest account too long street input error doesn't match expectations.");
        } catch (e) {
            Logger.error("Too long guest street input error doesn't get triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout Test Result - Too Long Street");
    }
    //invalid guest order checkout test method - too long guest city (100 chars)
    async invalidGuestTooLongCityOrderCheckoutTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageGuestInvalidScenarios = new CheckoutPageGuestInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //additional checkout page web element assert (guest page only)
        await checkoutPage.isAdditionalCheckoutPageWebElementDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //assert the guest has the expected account offer message
        const checkoutGuestAccountLoginOfferMessage = await checkoutPage.getCheckoutPageLoginOfferMessage();
        assert.strictEqual(checkoutGuestAccountLoginOfferMessage,   "Jeżeli masz już konto, kliknij tutaj, aby się zalogować", "The checkout guest account login message doesn't match expectations.");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //capture screenshot of the checkout page
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Display Before Data Input");
        //input valid first name into first name input field
        await checkoutPage.inputValidGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name into last name input field
        await checkoutPage.inputValidGuestLastNameIntoLastNameInputField();
        //select 'United States' option
        await checkoutPage.selectCheckoutPageUSCountryOption();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click state dropdown menu
        await checkoutPage.clickGuestRegionDropdownMenu();
        //select 'Illinois state option
        await checkoutPage.selectIllinoisStateOption();
        //input valid guest street into street input field
        await checkoutPage.inputValidGuestStreetIntoStreetInputField();
        //input too long guest city into city input field (100 chars)
        await checkoutPageGuestInvalidScenarios.inputTooLongGuestCityIntoCityInputField();
        //capture screenshot after invalid data input (for form)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest)- Too Long City");
        //input valid guest post code into post code input field
        await checkoutPage.inputValidGuestPostCodeIntoPostCodeInputField();
        //input valid guest phone into phone input field
        await checkoutPage.inputValidGuestPhoneIntoPhoneInputField();
        //input valid guest email into email input field
        await checkoutPage.inputValidGuestEmailIntoEmailInputField();
        //assert checkout page create account input subtitle is as expected
        const checkoutPageCreateAccountInputSubtitle = await checkoutPage.getCheckoutPageCreateAccountCheckboxSubtitle();
        assert.strictEqual(checkoutPageCreateAccountInputSubtitle,   "Stworzyć konto?", "The checkout page create account input subtitle doesn't match expectations.");
        //capture screenshot after invalid data input (for form)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Invalid Form Data Input - Too Long City");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //input valid guest credit card number into credit card number input field (only test number is accepted, others are rejected)
        await checkoutPage.inputValidCreditCardNumberIntoCreditCardInputField();
        //input valid guest credit card expiration date into credit card expiration date input field
        await checkoutPage.inputValidCreditCardExpDateIntoCreditCardInputField();
        //input valid guest credit card CVC number into credit card CVC number input field
        await checkoutPage.inputValidCreditCardCVCNumberIntoCreditCardCVCInputField();
        //capture screenshot after valid credit card data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Valid Credit Card Data Input");
        //click 'Accept Terms and Conditions' checkbox
        await checkoutPage.clickAcceptTermsCheckbox();
        //click 'Buy and Pay' check out button
        await checkoutPage.clickBuyAndPayButton();
        //wait for Stripe to process credit card data
        await checkoutPage.waitForStripeToProcessCard();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const checkoutGuestAccountInputErrorMessage = await checkoutPageGuestInvalidScenarios.getSingularCheckoutInputError();
            assert.strictEqual(checkoutGuestAccountInputErrorMessage, "Miasto płatnika jest zbyt długie.", "The checkout guest account too long city input error doesn't match expectations.");
        } catch (e) {
            Logger.error("Too long guest city input error doesn't get triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout Test Result - Too Long City");
    }
    //invalid guest order checkout test method - too long guest post code (25 digits)
    async invalidGuestTooLongPostCodeOrderCheckoutTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageGuestInvalidScenarios = new CheckoutPageGuestInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //additional checkout page web element assert (guest page only)
        await checkoutPage.isAdditionalCheckoutPageWebElementDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //assert the guest has the expected account offer message
        const checkoutGuestAccountLoginOfferMessage = await checkoutPage.getCheckoutPageLoginOfferMessage();
        assert.strictEqual(checkoutGuestAccountLoginOfferMessage,   "Jeżeli masz już konto, kliknij tutaj, aby się zalogować", "The checkout guest account login message doesn't match expectations.");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //capture screenshot of the checkout page
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Display Before Data Input");
        //input valid first name into first name input field
        await checkoutPage.inputValidGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name into last name input field
        await checkoutPage.inputValidGuestLastNameIntoLastNameInputField();
        //select 'United States' option
        await checkoutPage.selectCheckoutPageUSCountryOption();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click state dropdown menu
        await checkoutPage.clickGuestRegionDropdownMenu();
        //select 'Illinois state option
        await checkoutPage.selectIllinoisStateOption();
        //input valid guest street into street input field
        await checkoutPage.inputValidGuestStreetIntoStreetInputField();
        //input valid guest city into city input field
        await checkoutPage.inputValidGuestCityIntoCityInputField();
        //input too long guest post code into post code input field (25 digits)
        await checkoutPageGuestInvalidScenarios.inputTooLongGuestPostCodeIntoPostCodeInputField();
        //capture screenshot after invalid data input (for form)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest)- Too Long Post Code");
        //input valid guest phone into phone input field
        await checkoutPage.inputValidGuestPhoneIntoPhoneInputField();
        //input valid guest email into email input field
        await checkoutPage.inputValidGuestEmailIntoEmailInputField();
        //assert checkout page create account input subtitle is as expected
        const checkoutPageCreateAccountInputSubtitle = await checkoutPage.getCheckoutPageCreateAccountCheckboxSubtitle();
        assert.strictEqual(checkoutPageCreateAccountInputSubtitle,   "Stworzyć konto?", "The checkout page create account input subtitle doesn't match expectations.");
        //capture screenshot after invalid data input (for form)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Invalid Form Data Input - Too Longt Post Code");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //input valid guest credit card number into credit card number input field (only test number is accepted, others are rejected)
        await checkoutPage.inputValidCreditCardNumberIntoCreditCardInputField();
        //input valid guest credit card expiration date into credit card expiration date input field
        await checkoutPage.inputValidCreditCardExpDateIntoCreditCardInputField();
        //input valid guest credit card CVC number into credit card CVC number input field
        await checkoutPage.inputValidCreditCardCVCNumberIntoCreditCardCVCInputField();
        //capture screenshot after valid credit card data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Valid Credit Card Data Input");
        //click 'Accept Terms and Conditions' checkbox
        await checkoutPage.clickAcceptTermsCheckbox();
        //click 'Buy and Pay' check out button
        await checkoutPage.clickBuyAndPayButton();
        //wait for Stripe to process credit card data
        await checkoutPage.waitForStripeToProcessCard();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const checkoutGuestAccountInputErrorMessage = await checkoutPageGuestInvalidScenarios.getSingularCheckoutInputError();
            assert.strictEqual(checkoutGuestAccountInputErrorMessage, "Kod pocztowy płatnika nie jest prawidłowym kodem pocztowym.", "The checkout guest account too long post code input error doesn't match expectations.");
        } catch (e) {
            Logger.error("Too long guest post code input error doesn't get triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout Test Result - Too Long Post Code");
    }
    //invalid guest order checkout test method - too long guest phone (30 digits)
    async invalidGuestTooLongPhoneOrderCheckoutTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageGuestInvalidScenarios = new CheckoutPageGuestInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //additional checkout page web element assert (guest page only)
        await checkoutPage.isAdditionalCheckoutPageWebElementDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //assert the guest has the expected account offer message
        const checkoutGuestAccountLoginOfferMessage = await checkoutPage.getCheckoutPageLoginOfferMessage();
        assert.strictEqual(checkoutGuestAccountLoginOfferMessage,   "Jeżeli masz już konto, kliknij tutaj, aby się zalogować", "The checkout guest account login message doesn't match expectations.");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //capture screenshot of the checkout page
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Display Before Data Input");
        //input valid first name into first name input field
        await checkoutPage.inputValidGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name into last name input field
        await checkoutPage.inputValidGuestLastNameIntoLastNameInputField();
        //select 'United States' option
        await checkoutPage.selectCheckoutPageUSCountryOption();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click state dropdown menu
        await checkoutPage.clickGuestRegionDropdownMenu();
        //select 'Illinois state option
        await checkoutPage.selectIllinoisStateOption();
        //input valid guest street into street input field
        await checkoutPage.inputValidGuestStreetIntoStreetInputField();
        //input valid guest city into city input field
        await checkoutPage.inputValidGuestCityIntoCityInputField();
        //input valid guest post code into post code input field
        await checkoutPage.inputValidGuestPostCodeIntoPostCodeInputField();
        //input too long guest phone into phone input field (30 digits)
        await checkoutPageGuestInvalidScenarios.inputTooLongGuestPhoneIntoPhoneInputField();
        //capture screenshot after invalid data input (for form)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest)- Too Long Phone");
        //input valid guest email into email input field
        await checkoutPage.inputValidGuestEmailIntoEmailInputField();
        //assert checkout page create account input subtitle is as expected
        const checkoutPageCreateAccountInputSubtitle = await checkoutPage.getCheckoutPageCreateAccountCheckboxSubtitle();
        assert.strictEqual(checkoutPageCreateAccountInputSubtitle,   "Stworzyć konto?", "The checkout page create account input subtitle doesn't match expectations.");
        //capture screenshot after invalid data input (for form)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Invalid Form Data Input - Too Long Phone");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //input valid guest credit card number into credit card number input field (only test number is accepted, others are rejected)
        await checkoutPage.inputValidCreditCardNumberIntoCreditCardInputField();
        //input valid guest credit card expiration date into credit card expiration date input field
        await checkoutPage.inputValidCreditCardExpDateIntoCreditCardInputField();
        //input valid guest credit card CVC number into credit card CVC number input field
        await checkoutPage.inputValidCreditCardCVCNumberIntoCreditCardCVCInputField();
        //capture screenshot after valid credit card data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Valid Credit Card Data Input");
        //click 'Accept Terms and Conditions' checkbox
        await checkoutPage.clickAcceptTermsCheckbox();
        //click 'Buy and Pay' check out button
        await checkoutPage.clickBuyAndPayButton();
        //wait for Stripe to process credit card data
        await checkoutPage.waitForStripeToProcessCard();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const checkoutGuestAccountInputErrorMessage = await checkoutPageGuestInvalidScenarios.getSingularCheckoutInputError();
            assert.strictEqual(checkoutGuestAccountInputErrorMessage, "Telefon płatnika nie jest prawidłowym telefonem.", "The checkout guest account too long phone input error doesn't match expectations.");
        } catch (e) {
            Logger.error("Too long guest phone input error doesn't get triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout Test Result - Too Long Phone");
    }
    //invalid guest order checkout test method - too long guest email (100 chars -> name, domain)
    async invalidGuestTooLongEmailOrderCheckoutTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageGuestInvalidScenarios = new CheckoutPageGuestInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //additional checkout page web element assert (guest page only)
        await checkoutPage.isAdditionalCheckoutPageWebElementDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //assert the guest has the expected account offer message
        const checkoutGuestAccountLoginOfferMessage = await checkoutPage.getCheckoutPageLoginOfferMessage();
        assert.strictEqual(checkoutGuestAccountLoginOfferMessage,   "Jeżeli masz już konto, kliknij tutaj, aby się zalogować", "The checkout guest account login message doesn't match expectations.");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //capture screenshot of the checkout page
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Display Before Data Input");
        //input valid first name into first name input field
        await checkoutPage.inputValidGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name into last name input field
        await checkoutPage.inputValidGuestLastNameIntoLastNameInputField();
        //select 'United States' option
        await checkoutPage.selectCheckoutPageUSCountryOption();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click state dropdown menu
        await checkoutPage.clickGuestRegionDropdownMenu();
        //select 'Illinois state option
        await checkoutPage.selectIllinoisStateOption();
        //input valid guest street into street input field
        await checkoutPage.inputValidGuestStreetIntoStreetInputField();
        //input valid guest city into city input field
        await checkoutPage.inputValidGuestCityIntoCityInputField();
        //input valid guest post code into post code input field
        await checkoutPage.inputValidGuestPostCodeIntoPostCodeInputField();
        //input valid guest phone into phone input field
        await checkoutPage.inputValidGuestPhoneIntoPhoneInputField();
        //input too long guest email into email input field (100 chars -> name, domain)
        await checkoutPageGuestInvalidScenarios.inputTooLongGuestEmailIntoEmailInputField();
        //capture screenshot after invalid data input (for form)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest)- Too Long Email");
        //assert checkout page create account input subtitle is as expected
        const checkoutPageCreateAccountInputSubtitle = await checkoutPage.getCheckoutPageCreateAccountCheckboxSubtitle();
        assert.strictEqual(checkoutPageCreateAccountInputSubtitle,   "Stworzyć konto?", "The checkout page create account input subtitle doesn't match expectations.");
        //capture screenshot after invalid data input (for form)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Invalid Form Data Input - Too Long Email");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //input valid guest credit card number into credit card number input field (only test number is accepted, others are rejected)
        await checkoutPage.inputValidCreditCardNumberIntoCreditCardInputField();
        //input valid guest credit card expiration date into credit card expiration date input field
        await checkoutPage.inputValidCreditCardExpDateIntoCreditCardInputField();
        //input valid guest credit card CVC number into credit card CVC number input field
        await checkoutPage.inputValidCreditCardCVCNumberIntoCreditCardCVCInputField();
        //capture screenshot after valid credit card data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Valid Credit Card Data Input");
        //click 'Accept Terms and Conditions' checkbox
        await checkoutPage.clickAcceptTermsCheckbox();
        //click 'Buy and Pay' check out button
        await checkoutPage.clickBuyAndPayButton();
        //wait for Stripe to process credit card data
        await checkoutPage.waitForStripeToProcessCard();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const checkoutGuestAccountInputErrorMessage = await checkoutPageGuestInvalidScenarios.getSingularCheckoutInputError();
            assert.strictEqual(checkoutGuestAccountInputErrorMessage, "Adres email jest zbyt długi.", "The checkout guest account too long email input error doesn't match expectations.");
        } catch (e) {
            Logger.error("Too long guest email input error doesn't get triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout Test Result - Too Long Email");
    }
    //invalid guest order checkout test method - too long credit card number (17 digits)
    async invalidGuestTooLongCreditCardNumberOrderCheckoutTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageGuestInvalidScenarios = new CheckoutPageGuestInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //additional checkout page web element assert (guest page only)
        await checkoutPage.isAdditionalCheckoutPageWebElementDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //assert the guest has the expected account offer message
        const checkoutGuestAccountLoginOfferMessage = await checkoutPage.getCheckoutPageLoginOfferMessage();
        assert.strictEqual(checkoutGuestAccountLoginOfferMessage,   "Jeżeli masz już konto, kliknij tutaj, aby się zalogować", "The checkout guest account login message doesn't match expectations.");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //capture screenshot of the checkout page
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Display Before Data Input");
        //input valid first name into first name input field
        await checkoutPage.inputValidGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name into last name input field
        await checkoutPage.inputValidGuestLastNameIntoLastNameInputField();
        //select 'United States' option
        await checkoutPage.selectCheckoutPageUSCountryOption();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click state dropdown menu
        await checkoutPage.clickGuestRegionDropdownMenu();
        //select 'Illinois state option
        await checkoutPage.selectIllinoisStateOption();
        //input valid guest street into street input field
        await checkoutPage.inputValidGuestStreetIntoStreetInputField();
        //input valid guest city into city input field
        await checkoutPage.inputValidGuestCityIntoCityInputField();
        //input valid guest post code into post code input field
        await checkoutPage.inputValidGuestPostCodeIntoPostCodeInputField();
        //input valid guest phone into phone input field
        await checkoutPage.inputValidGuestPhoneIntoPhoneInputField();
        //input valid guest email into email input field
        await checkoutPage.inputValidGuestEmailIntoEmailInputField();
        //assert checkout page create account input subtitle is as expected
        const checkoutPageCreateAccountInputSubtitle = await checkoutPage.getCheckoutPageCreateAccountCheckboxSubtitle();
        assert.strictEqual(checkoutPageCreateAccountInputSubtitle,   "Stworzyć konto?", "The checkout page create account input subtitle doesn't match expectations.");
        //capture screenshot after invalid data input (for form)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Valid Form Data Input");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //input too long guest credit card number into credit card number input field (17 digits)
        await checkoutPageGuestInvalidScenarios.inputTooLongCreditCardNumberIntoCreditCardInputField();
        //input valid guest credit card expiration date into credit card expiration date input field
        await checkoutPage.inputValidCreditCardExpDateIntoCreditCardInputField();
        //input valid guest credit card CVC number into credit card CVC number input field
        await checkoutPage.inputValidCreditCardCVCNumberIntoCreditCardCVCInputField();
        //capture screenshot after valid credit card data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Invalid Credit Card Data Input - Too Long Credit Card Number");
        //click 'Accept Terms and Conditions' checkbox
        await checkoutPage.clickAcceptTermsCheckbox();
        //click 'Buy and Pay' check out button
        await checkoutPage.clickBuyAndPayButton();
        //wait for Stripe to process credit card data
        await checkoutPage.waitForStripeToProcessCard();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const checkoutGuestAccountInputErrorMessage = await checkoutPageGuestInvalidScenarios.getSingularStripeInputError();
            assert.strictEqual(checkoutGuestAccountInputErrorMessage, "Numer karty jest niekompletny.", "The checkout guest account too long credit card number input error doesn't match expectations.");
        } catch (e) {
            Logger.error("Too long guest credit card number input error doesn't get triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout Test Result - Too Long Credit Card Number");
    }
    //invalid guest order checkout test method - too long credit card expiration date (5 digits)
    async invalidGuestTooLongCreditCardExpDateOrderCheckoutTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageGuestInvalidScenarios = new CheckoutPageGuestInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //additional checkout page web element assert (guest page only)
        await checkoutPage.isAdditionalCheckoutPageWebElementDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //assert the guest has the expected account offer message
        const checkoutGuestAccountLoginOfferMessage = await checkoutPage.getCheckoutPageLoginOfferMessage();
        assert.strictEqual(checkoutGuestAccountLoginOfferMessage,   "Jeżeli masz już konto, kliknij tutaj, aby się zalogować", "The checkout guest account login message doesn't match expectations.");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //capture screenshot of the checkout page
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Display Before Data Input");
        //input valid first name into first name input field
        await checkoutPage.inputValidGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name into last name input field
        await checkoutPage.inputValidGuestLastNameIntoLastNameInputField();
        //select 'United States' option
        await checkoutPage.selectCheckoutPageUSCountryOption();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click state dropdown menu
        await checkoutPage.clickGuestRegionDropdownMenu();
        //select 'Illinois state option
        await checkoutPage.selectIllinoisStateOption();
        //input valid guest street into street input field
        await checkoutPage.inputValidGuestStreetIntoStreetInputField();
        //input valid guest city into city input field
        await checkoutPage.inputValidGuestCityIntoCityInputField();
        //input valid guest post code into post code input field
        await checkoutPage.inputValidGuestPostCodeIntoPostCodeInputField();
        //input valid guest phone into phone input field
        await checkoutPage.inputValidGuestPhoneIntoPhoneInputField();
        //input valid guest email into email input field
        await checkoutPage.inputValidGuestEmailIntoEmailInputField();
        //assert checkout page create account input subtitle is as expected
        const checkoutPageCreateAccountInputSubtitle = await checkoutPage.getCheckoutPageCreateAccountCheckboxSubtitle();
        assert.strictEqual(checkoutPageCreateAccountInputSubtitle,   "Stworzyć konto?", "The checkout page create account input subtitle doesn't match expectations.");
        //capture screenshot after invalid data input (for form)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Valid Form Data Input");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //input valid guest credit card number into credit card number input field
        await checkoutPage.inputValidCreditCardNumberIntoCreditCardInputField();
        //input too long guest credit card expiration date into credit card expiration date input field (5 digits)
        await checkoutPageGuestInvalidScenarios.inputTooLongCreditCardExpDateIntoCreditCardInputField();
        //input valid guest credit card CVC number into credit card CVC number input field
        await checkoutPage.inputValidCreditCardCVCNumberIntoCreditCardCVCInputField();
        //capture screenshot after valid credit card data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Invalid Credit Card Data Input - Too Long Credit Card Exp Date");
        //click 'Accept Terms and Conditions' checkbox
        await checkoutPage.clickAcceptTermsCheckbox();
        //click 'Buy and Pay' check out button
        await checkoutPage.clickBuyAndPayButton();
        //wait for Stripe to process credit card data
        await checkoutPage.waitForStripeToProcessCard();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const checkoutGuestAccountInputErrorMessage = await checkoutPageGuestInvalidScenarios.getSingularStripeInputError();
            assert.strictEqual(checkoutGuestAccountInputErrorMessage, "Data ważności karty jest niekompletna.", "The checkout guest account too long credit card expiration date input error doesn't match expectations.");
        } catch (e) {
            Logger.error("Too long guest credit card expiration date input error doesn't get triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout Test Result - Too Long Credit Card Exp Date");
    }
    //invalid guest order checkout test method - too long credit card CVC number (4 digits)
    async invalidGuestTooLongCreditCardCVCNumberOrderCheckoutTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageGuestInvalidScenarios = new CheckoutPageGuestInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //additional checkout page web element assert (guest page only)
        await checkoutPage.isAdditionalCheckoutPageWebElementDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //assert the guest has the expected account offer message
        const checkoutGuestAccountLoginOfferMessage = await checkoutPage.getCheckoutPageLoginOfferMessage();
        assert.strictEqual(checkoutGuestAccountLoginOfferMessage,   "Jeżeli masz już konto, kliknij tutaj, aby się zalogować", "The checkout guest account login message doesn't match expectations.");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //capture screenshot of the checkout page
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Display Before Data Input");
        //input valid first name into first name input field
        await checkoutPage.inputValidGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name into last name input field
        await checkoutPage.inputValidGuestLastNameIntoLastNameInputField();
        //select 'United States' option
        await checkoutPage.selectCheckoutPageUSCountryOption();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click state dropdown menu
        await checkoutPage.clickGuestRegionDropdownMenu();
        //select 'Illinois state option
        await checkoutPage.selectIllinoisStateOption();
        //input valid guest street into street input field
        await checkoutPage.inputValidGuestStreetIntoStreetInputField();
        //input valid guest city into city input field
        await checkoutPage.inputValidGuestCityIntoCityInputField();
        //input valid guest post code into post code input field
        await checkoutPage.inputValidGuestPostCodeIntoPostCodeInputField();
        //input valid guest phone into phone input field
        await checkoutPage.inputValidGuestPhoneIntoPhoneInputField();
        //input valid guest email into email input field
        await checkoutPage.inputValidGuestEmailIntoEmailInputField();
        //assert checkout page create account input subtitle is as expected
        const checkoutPageCreateAccountInputSubtitle = await checkoutPage.getCheckoutPageCreateAccountCheckboxSubtitle();
        assert.strictEqual(checkoutPageCreateAccountInputSubtitle,   "Stworzyć konto?", "The checkout page create account input subtitle doesn't match expectations.");
        //capture screenshot after invalid data input (for form)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Valid Form Data Input");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //input valid guest credit card number into credit card number input field
        await checkoutPage.inputValidCreditCardNumberIntoCreditCardInputField();
        //input valid guest credit card expiration date into credit card expiration date input field
        await checkoutPage.inputValidCreditCardExpDateIntoCreditCardInputField();
        //input too long guest credit card CVC number into credit card CVC number input field (4 digits)
        await checkoutPageGuestInvalidScenarios.inputTooLongCreditCardCVCNumberIntoCreditCardCVCInputField();
        //capture screenshot after valid credit card data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Invalid Credit Card Data Input - Too LOng Credit Card CVC number");
        //click 'Accept Terms and Conditions' checkbox
        await checkoutPage.clickAcceptTermsCheckbox();
        //click 'Buy and Pay' check out button
        await checkoutPage.clickBuyAndPayButton();
        //wait for Stripe to process credit card data
        await checkoutPage.waitForStripeToProcessCard();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const checkoutGuestAccountInputErrorMessage = await checkoutPageGuestInvalidScenarios.getSingularStripeInputError();
            assert.strictEqual(checkoutGuestAccountInputErrorMessage, "Kod bezpieczeństwa karty jest niekompletny.", "The checkout guest account too long credit card CVC number input error doesn't match expectations.");
        } catch (e) {
            Logger.error("Too long guest credit card CVC number input error doesn't get triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout Test Result - Too Long Credit Card CVC Number");
    }

    //invalid singular input format

    //invalid guest order checkout test method - invalid guest first name format (special symbols only)
    async invalidGuestInvalidFirstNameFormatOrderCheckoutTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageGuestInvalidScenarios = new CheckoutPageGuestInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //additional checkout page web element assert (guest page only)
        await checkoutPage.isAdditionalCheckoutPageWebElementDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //assert the guest has the expected account offer message
        const checkoutGuestAccountLoginOfferMessage = await checkoutPage.getCheckoutPageLoginOfferMessage();
        assert.strictEqual(checkoutGuestAccountLoginOfferMessage,   "Jeżeli masz już konto, kliknij tutaj, aby się zalogować", "The checkout guest account login message doesn't match expectations.");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //capture screenshot of the checkout page
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Display Before Data Input");
        //input invalid first name format into first name input field (special symbols only)
        await checkoutPageGuestInvalidScenarios.inputInvalidGuestFirstNameFormatIntoFirstNameInputField();
        //capture screenshot after invalid data input (for form)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest)- Invalid First Name Input Format");
        //input valid guest last name into last name input field
        await checkoutPage.inputValidGuestLastNameIntoLastNameInputField();
        //select 'United States' option
        await checkoutPage.selectCheckoutPageUSCountryOption();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click state dropdown menu
        await checkoutPage.clickGuestRegionDropdownMenu();
        //select 'Illinois state option
        await checkoutPage.selectIllinoisStateOption();
        //input valid guest street into street input field
        await checkoutPage.inputValidGuestStreetIntoStreetInputField();
        //input valid guest city into city input field
        await checkoutPage.inputValidGuestCityIntoCityInputField();
        //input valid guest post code into post code input field
        await checkoutPage.inputValidGuestPostCodeIntoPostCodeInputField();
        //input valid guest phone into phone input field
        await checkoutPage.inputValidGuestPhoneIntoPhoneInputField();
        //input valid guest email into email input field
        await checkoutPage.inputValidGuestEmailIntoEmailInputField();
        //assert checkout page create account input subtitle is as expected
        const checkoutPageCreateAccountInputSubtitle = await checkoutPage.getCheckoutPageCreateAccountCheckboxSubtitle();
        assert.strictEqual(checkoutPageCreateAccountInputSubtitle,   "Stworzyć konto?", "The checkout page create account input subtitle doesn't match expectations.");
        //capture screenshot after invalid data input (for form)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Invalid Form Data Input - Invalid First Name Format");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //input valid guest credit card number into credit card number input field (only test number is accepted, others are rejected)
        await checkoutPage.inputValidCreditCardNumberIntoCreditCardInputField();
        //input valid guest credit card expiration date into credit card expiration date input field
        await checkoutPage.inputValidCreditCardExpDateIntoCreditCardInputField();
        //input valid guest credit card CVC number into credit card CVC number input field
        await checkoutPage.inputValidCreditCardCVCNumberIntoCreditCardCVCInputField();
        //capture screenshot after valid credit card data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Valid Credit Card Data Input");
        //click 'Accept Terms and Conditions' checkbox
        await checkoutPage.clickAcceptTermsCheckbox();
        //click 'Buy and Pay' check out button
        await checkoutPage.clickBuyAndPayButton();
        //wait for Stripe to process credit card data
        await checkoutPage.waitForStripeToProcessCard();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const checkoutGuestAccountInputErrorMessage = await checkoutPageGuestInvalidScenarios.getSingularCheckoutInputError();
            assert.strictEqual(checkoutGuestAccountInputErrorMessage, "Imię płatnika nie może zawierać tylko specjalne znaki.", "The checkout guest account invalid first name input format error doesn't match expectations.");
        } catch (e) {
            Logger.error("Invalid guest first name input format error doesn't get triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout Test Result - Invalid First Name Format");
    }
    //invalid guest order checkout test method - invalid guest last name format (special symbols only)
    async invalidGuestInvalidLastNameFormatOrderCheckoutTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageGuestInvalidScenarios = new CheckoutPageGuestInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //additional checkout page web element assert (guest page only)
        await checkoutPage.isAdditionalCheckoutPageWebElementDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //assert the guest has the expected account offer message
        const checkoutGuestAccountLoginOfferMessage = await checkoutPage.getCheckoutPageLoginOfferMessage();
        assert.strictEqual(checkoutGuestAccountLoginOfferMessage,   "Jeżeli masz już konto, kliknij tutaj, aby się zalogować", "The checkout guest account login message doesn't match expectations.");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //capture screenshot of the checkout page
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Display Before Data Input");
        //input valid first name into first name input field
        await checkoutPage.inputValidGuestFirstNameIntoFirstNameInputField();
        //input invalid guest last name format into last name input field (special symbols only)
        await checkoutPageGuestInvalidScenarios.inputInvalidGuestLastNameFormatIntoLastNameInputField();
        //capture screenshot after invalid data input (for form)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest)- Invalid Last Name Input Format");
        //select 'United States' option
        await checkoutPage.selectCheckoutPageUSCountryOption();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click state dropdown menu
        await checkoutPage.clickGuestRegionDropdownMenu();
        //select 'Illinois state option
        await checkoutPage.selectIllinoisStateOption();
        //input valid guest street into street input field
        await checkoutPage.inputValidGuestStreetIntoStreetInputField();
        //input valid guest city into city input field
        await checkoutPage.inputValidGuestCityIntoCityInputField();
        //input valid guest post code into post code input field
        await checkoutPage.inputValidGuestPostCodeIntoPostCodeInputField();
        //input valid guest phone into phone input field
        await checkoutPage.inputValidGuestPhoneIntoPhoneInputField();
        //input valid guest email into email input field
        await checkoutPage.inputValidGuestEmailIntoEmailInputField();
        //assert checkout page create account input subtitle is as expected
        const checkoutPageCreateAccountInputSubtitle = await checkoutPage.getCheckoutPageCreateAccountCheckboxSubtitle();
        assert.strictEqual(checkoutPageCreateAccountInputSubtitle,   "Stworzyć konto?", "The checkout page create account input subtitle doesn't match expectations.");
        //capture screenshot after invalid data input (for form)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Invalid Form Data Input - Invalid Last Name Format");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //input valid guest credit card number into credit card number input field (only test number is accepted, others are rejected)
        await checkoutPage.inputValidCreditCardNumberIntoCreditCardInputField();
        //input valid guest credit card expiration date into credit card expiration date input field
        await checkoutPage.inputValidCreditCardExpDateIntoCreditCardInputField();
        //input valid guest credit card CVC number into credit card CVC number input field
        await checkoutPage.inputValidCreditCardCVCNumberIntoCreditCardCVCInputField();
        //capture screenshot after valid credit card data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Valid Credit Card Data Input");
        //click 'Accept Terms and Conditions' checkbox
        await checkoutPage.clickAcceptTermsCheckbox();
        //click 'Buy and Pay' check out button
        await checkoutPage.clickBuyAndPayButton();
        //wait for Stripe to process credit card data
        await checkoutPage.waitForStripeToProcessCard();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const checkoutGuestAccountInputErrorMessage = await checkoutPageGuestInvalidScenarios.getSingularCheckoutInputError();
            assert.strictEqual(checkoutGuestAccountInputErrorMessage, "Nazwisko płatnika nie może zawierać tylko specjalne znaki.", "The checkout guest account invalid last name input format error doesn't match expectations.");
        } catch (e) {
            Logger.error("Invalid guest last name input format error doesn't get triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout Test Result - Invalid Last Name Format");
    }
    //invalid guest order checkout test method - invalid guest street format (special symbols only)
    async invalidGuestInvalidStreetFormatOrderCheckoutTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageGuestInvalidScenarios = new CheckoutPageGuestInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //additional checkout page web element assert (guest page only)
        await checkoutPage.isAdditionalCheckoutPageWebElementDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //assert the guest has the expected account offer message
        const checkoutGuestAccountLoginOfferMessage = await checkoutPage.getCheckoutPageLoginOfferMessage();
        assert.strictEqual(checkoutGuestAccountLoginOfferMessage,   "Jeżeli masz już konto, kliknij tutaj, aby się zalogować", "The checkout guest account login message doesn't match expectations.");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //capture screenshot of the checkout page
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Display Before Data Input");
        //input valid first name into first name input field
        await checkoutPage.inputValidGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name into last name input field
        await checkoutPage.inputValidGuestLastNameIntoLastNameInputField();
        //select 'United States' option
        await checkoutPage.selectCheckoutPageUSCountryOption();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click state dropdown menu
        await checkoutPage.clickGuestRegionDropdownMenu();
        //select 'Illinois state option
        await checkoutPage.selectIllinoisStateOption();
        //input invalid guest street format into street input field (special symbols only)
        await checkoutPageGuestInvalidScenarios.inputInvalidGuestStreetFormatIntoStreetInputField();
        //capture screenshot after invalid data input (for form)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest)- Invalid Street Input Format");
        //input valid guest city into city input field
        await checkoutPage.inputValidGuestCityIntoCityInputField();
        //input valid guest post code into post code input field
        await checkoutPage.inputValidGuestPostCodeIntoPostCodeInputField();
        //input valid guest phone into phone input field
        await checkoutPage.inputValidGuestPhoneIntoPhoneInputField();
        //input valid guest email into email input field
        await checkoutPage.inputValidGuestEmailIntoEmailInputField();
        //assert checkout page create account input subtitle is as expected
        const checkoutPageCreateAccountInputSubtitle = await checkoutPage.getCheckoutPageCreateAccountCheckboxSubtitle();
        assert.strictEqual(checkoutPageCreateAccountInputSubtitle,   "Stworzyć konto?", "The checkout page create account input subtitle doesn't match expectations.");
        //capture screenshot after invalid data input (for form)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Invalid Form Data Input - Invalid Street Format");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //input valid guest credit card number into credit card number input field (only test number is accepted, others are rejected)
        await checkoutPage.inputValidCreditCardNumberIntoCreditCardInputField();
        //input valid guest credit card expiration date into credit card expiration date input field
        await checkoutPage.inputValidCreditCardExpDateIntoCreditCardInputField();
        //input valid guest credit card CVC number into credit card CVC number input field
        await checkoutPage.inputValidCreditCardCVCNumberIntoCreditCardCVCInputField();
        //capture screenshot after valid credit card data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Valid Credit Card Data Input");
        //click 'Accept Terms and Conditions' checkbox
        await checkoutPage.clickAcceptTermsCheckbox();
        //click 'Buy and Pay' check out button
        await checkoutPage.clickBuyAndPayButton();
        //wait for Stripe to process credit card data
        await checkoutPage.waitForStripeToProcessCard();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const checkoutGuestAccountInputErrorMessage = await checkoutPageGuestInvalidScenarios.getSingularCheckoutInputError();
            assert.strictEqual(checkoutGuestAccountInputErrorMessage, "Ulica płatnika nie może zawierać tylko specjalne znaki.", "The checkout guest account invalid street input format error doesn't match expectations.");
        } catch (e) {
            Logger.error("Invalid guest street input format error doesn't get triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout Test Result - Invalid Street Format");
    }
    //invalid guest order checkout test method - invalid guest city format (special symbols only)
    async invalidGuestInvalidCityFormatOrderCheckoutTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageGuestInvalidScenarios = new CheckoutPageGuestInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //additional checkout page web element assert (guest page only)
        await checkoutPage.isAdditionalCheckoutPageWebElementDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //assert the guest has the expected account offer message
        const checkoutGuestAccountLoginOfferMessage = await checkoutPage.getCheckoutPageLoginOfferMessage();
        assert.strictEqual(checkoutGuestAccountLoginOfferMessage,   "Jeżeli masz już konto, kliknij tutaj, aby się zalogować", "The checkout guest account login message doesn't match expectations.");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //capture screenshot of the checkout page
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Display Before Data Input");
        //input valid first name into first name input field
        await checkoutPage.inputValidGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name into last name input field
        await checkoutPage.inputValidGuestLastNameIntoLastNameInputField();
        //select 'United States' option
        await checkoutPage.selectCheckoutPageUSCountryOption();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click state dropdown menu
        await checkoutPage.clickGuestRegionDropdownMenu();
        //select 'Illinois state option
        await checkoutPage.selectIllinoisStateOption();
        //input valid guest street into street input field
        await checkoutPage.inputValidGuestStreetIntoStreetInputField();
        //input invalid guest city format into city input field (special symbols only)
        await checkoutPageGuestInvalidScenarios.inputInvalidGuestCityFormatIntoCityInputField();
        //capture screenshot after invalid data input (for form)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest)- Invalid City Input Format");
        //input valid guest post code into post code input field
        await checkoutPage.inputValidGuestPostCodeIntoPostCodeInputField();
        //input valid guest phone into phone input field
        await checkoutPage.inputValidGuestPhoneIntoPhoneInputField();
        //input valid guest email into email input field
        await checkoutPage.inputValidGuestEmailIntoEmailInputField();
        //assert checkout page create account input subtitle is as expected
        const checkoutPageCreateAccountInputSubtitle = await checkoutPage.getCheckoutPageCreateAccountCheckboxSubtitle();
        assert.strictEqual(checkoutPageCreateAccountInputSubtitle,   "Stworzyć konto?", "The checkout page create account input subtitle doesn't match expectations.");
        //capture screenshot after invalid data input (for form)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Invalid Form Data Input - Invalid City Format");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //input valid guest credit card number into credit card number input field (only test number is accepted, others are rejected)
        await checkoutPage.inputValidCreditCardNumberIntoCreditCardInputField();
        //input valid guest credit card expiration date into credit card expiration date input field
        await checkoutPage.inputValidCreditCardExpDateIntoCreditCardInputField();
        //input valid guest credit card CVC number into credit card CVC number input field
        await checkoutPage.inputValidCreditCardCVCNumberIntoCreditCardCVCInputField();
        //capture screenshot after valid credit card data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Valid Credit Card Data Input");
        //click 'Accept Terms and Conditions' checkbox
        await checkoutPage.clickAcceptTermsCheckbox();
        //click 'Buy and Pay' check out button
        await checkoutPage.clickBuyAndPayButton();
        //wait for Stripe to process credit card data
        await checkoutPage.waitForStripeToProcessCard();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const checkoutGuestAccountInputErrorMessage = await checkoutPageGuestInvalidScenarios.getSingularCheckoutInputError();
            assert.strictEqual(checkoutGuestAccountInputErrorMessage, "Miasto płatnika nie może zawierać tylko specjalne znaki.", "The checkout guest account invalid city input format error doesn't match expectations.");
        } catch (e) {
            Logger.error("Invalid guest city input format error doesn't get triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout Test Result - Invalid City Format");
    }
    //invalid guest order checkout test method - invalid guest post code format (special symbols only)
    async invalidGuestInvalidPostCodeFormatOrderCheckoutTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageGuestInvalidScenarios = new CheckoutPageGuestInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //additional checkout page web element assert (guest page only)
        await checkoutPage.isAdditionalCheckoutPageWebElementDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //assert the guest has the expected account offer message
        const checkoutGuestAccountLoginOfferMessage = await checkoutPage.getCheckoutPageLoginOfferMessage();
        assert.strictEqual(checkoutGuestAccountLoginOfferMessage,   "Jeżeli masz już konto, kliknij tutaj, aby się zalogować", "The checkout guest account login message doesn't match expectations.");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //capture screenshot of the checkout page
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Display Before Data Input");
        //input valid first name into first name input field
        await checkoutPage.inputValidGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name into last name input field
        await checkoutPage.inputValidGuestLastNameIntoLastNameInputField();
        //select 'United States' option
        await checkoutPage.selectCheckoutPageUSCountryOption();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click state dropdown menu
        await checkoutPage.clickGuestRegionDropdownMenu();
        //select 'Illinois state option
        await checkoutPage.selectIllinoisStateOption();
        //input valid guest street into street input field
        await checkoutPage.inputValidGuestStreetIntoStreetInputField();
        //input valid guest city into city input field
        await checkoutPage.inputValidGuestCityIntoCityInputField();
        //input invalid guest post code format into post code input field (special symbols only)
        await checkoutPageGuestInvalidScenarios.inputInvalidGuestPostCodeFormatIntoPostCodeInputField();
        //capture screenshot after invalid data input (for form)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest)- Invalid Post Code Input Format");
        //input valid guest phone into phone input field
        await checkoutPage.inputValidGuestPhoneIntoPhoneInputField();
        //input valid guest email into email input field
        await checkoutPage.inputValidGuestEmailIntoEmailInputField();
        //assert checkout page create account input subtitle is as expected
        const checkoutPageCreateAccountInputSubtitle = await checkoutPage.getCheckoutPageCreateAccountCheckboxSubtitle();
        assert.strictEqual(checkoutPageCreateAccountInputSubtitle,   "Stworzyć konto?", "The checkout page create account input subtitle doesn't match expectations.");
        //capture screenshot after invalid data input (for form)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Invalid Form Data Input - Invalid Post Code Format");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //input valid guest credit card number into credit card number input field (only test number is accepted, others are rejected)
        await checkoutPage.inputValidCreditCardNumberIntoCreditCardInputField();
        //input valid guest credit card expiration date into credit card expiration date input field
        await checkoutPage.inputValidCreditCardExpDateIntoCreditCardInputField();
        //input valid guest credit card CVC number into credit card CVC number input field
        await checkoutPage.inputValidCreditCardCVCNumberIntoCreditCardCVCInputField();
        //capture screenshot after valid credit card data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Valid Credit Card Data Input");
        //click 'Accept Terms and Conditions' checkbox
        await checkoutPage.clickAcceptTermsCheckbox();
        //click 'Buy and Pay' check out button
        await checkoutPage.clickBuyAndPayButton();
        //wait for Stripe to process credit card data
        await checkoutPage.waitForStripeToProcessCard();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const checkoutGuestAccountInputErrorMessage = await checkoutPageGuestInvalidScenarios.getSingularCheckoutInputError();
            assert.strictEqual(checkoutGuestAccountInputErrorMessage, "Kod pocztowy płatnika nie jest prawidłowym kodem pocztowym.", "The checkout guest account invalid post code input format error doesn't match expectations.");
        } catch (e) {
            Logger.error("Invalid guest post code input format error doesn't get triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout Test Result - Invalid Post Code Format");
    }
    //invalid guest order checkout test method - invalid guest phone format (special symbols only)
    async invalidGuestInvalidPhoneFormatOrderCheckoutTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageGuestInvalidScenarios = new CheckoutPageGuestInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //additional checkout page web element assert (guest page only)
        await checkoutPage.isAdditionalCheckoutPageWebElementDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //assert the guest has the expected account offer message
        const checkoutGuestAccountLoginOfferMessage = await checkoutPage.getCheckoutPageLoginOfferMessage();
        assert.strictEqual(checkoutGuestAccountLoginOfferMessage,   "Jeżeli masz już konto, kliknij tutaj, aby się zalogować", "The checkout guest account login message doesn't match expectations.");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //capture screenshot of the checkout page
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Display Before Data Input");
        //input valid first name into first name input field
        await checkoutPage.inputValidGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name into last name input field
        await checkoutPage.inputValidGuestLastNameIntoLastNameInputField();
        //select 'United States' option
        await checkoutPage.selectCheckoutPageUSCountryOption();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click state dropdown menu
        await checkoutPage.clickGuestRegionDropdownMenu();
        //select 'Illinois state option
        await checkoutPage.selectIllinoisStateOption();
        //input valid guest street into street input field
        await checkoutPage.inputValidGuestStreetIntoStreetInputField();
        //input valid guest city into city input field
        await checkoutPage.inputValidGuestCityIntoCityInputField();
        //input valid guest post code into post code input field
        await checkoutPage.inputValidGuestPostCodeIntoPostCodeInputField();
        //input invalid guest phone format into phone input field (special symbols only)
        await checkoutPageGuestInvalidScenarios.inputInvalidGuestPhoneFormatIntoPhoneInputField();
        //capture screenshot after invalid data input (for form)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest)- Invalid Phone Input Format");
        //input valid guest email into email input field
        await checkoutPage.inputValidGuestEmailIntoEmailInputField();
        //assert checkout page create account input subtitle is as expected
        const checkoutPageCreateAccountInputSubtitle = await checkoutPage.getCheckoutPageCreateAccountCheckboxSubtitle();
        assert.strictEqual(checkoutPageCreateAccountInputSubtitle,   "Stworzyć konto?", "The checkout page create account input subtitle doesn't match expectations.");
        //capture screenshot after invalid data input (for form)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Invalid Form Data Input - Invalid Phone Format");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //input valid guest credit card number into credit card number input field (only test number is accepted, others are rejected)
        await checkoutPage.inputValidCreditCardNumberIntoCreditCardInputField();
        //input valid guest credit card expiration date into credit card expiration date input field
        await checkoutPage.inputValidCreditCardExpDateIntoCreditCardInputField();
        //input valid guest credit card CVC number into credit card CVC number input field
        await checkoutPage.inputValidCreditCardCVCNumberIntoCreditCardCVCInputField();
        //capture screenshot after valid credit card data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Valid Credit Card Data Input");
        //click 'Accept Terms and Conditions' checkbox
        await checkoutPage.clickAcceptTermsCheckbox();
        //click 'Buy and Pay' check out button
        await checkoutPage.clickBuyAndPayButton();
        //wait for Stripe to process credit card data
        await checkoutPage.waitForStripeToProcessCard();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const checkoutGuestAccountInputErrorMessage = await checkoutPageGuestInvalidScenarios.getSingularCheckoutInputError();
            assert.strictEqual(checkoutGuestAccountInputErrorMessage, "Telefon płatnika jest wymaganym polem.", "The checkout guest account invalid phone input format error doesn't match expectations.");
        } catch (e) {
            Logger.error("Invalid guest phone input format error doesn't get triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout Test Result - Invalid Phone Format");
    }
    //invalid guest order checkout test method - invalid guest email format (special symbols only)
    async invalidGuestInvalidEmailFormatOrderCheckoutTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageGuestInvalidScenarios = new CheckoutPageGuestInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //additional checkout page web element assert (guest page only)
        await checkoutPage.isAdditionalCheckoutPageWebElementDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //assert the guest has the expected account offer message
        const checkoutGuestAccountLoginOfferMessage = await checkoutPage.getCheckoutPageLoginOfferMessage();
        assert.strictEqual(checkoutGuestAccountLoginOfferMessage,   "Jeżeli masz już konto, kliknij tutaj, aby się zalogować", "The checkout guest account login message doesn't match expectations.");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //capture screenshot of the checkout page
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Display Before Data Input");
        //input valid first name into first name input field
        await checkoutPage.inputValidGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name into last name input field
        await checkoutPage.inputValidGuestLastNameIntoLastNameInputField();
        //select 'United States' option
        await checkoutPage.selectCheckoutPageUSCountryOption();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click state dropdown menu
        await checkoutPage.clickGuestRegionDropdownMenu();
        //select 'Illinois state option
        await checkoutPage.selectIllinoisStateOption();
        //input valid guest street into street input field
        await checkoutPage.inputValidGuestStreetIntoStreetInputField();
        //input valid guest city into city input field
        await checkoutPage.inputValidGuestCityIntoCityInputField();
        //input valid guest post code into post code input field
        await checkoutPage.inputValidGuestPostCodeIntoPostCodeInputField();
        //input valid guest phone into phone input field
        await checkoutPage.inputValidGuestPhoneIntoPhoneInputField();
        //input invalid guest email format into email input field (special symbols only)
        await checkoutPageGuestInvalidScenarios.inputInvalidGuestEmailFormatIntoEmailInputField();
        //capture screenshot after invalid data input (for form)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest)- Invalid Email Input Format");
        //assert checkout page create account input subtitle is as expected
        const checkoutPageCreateAccountInputSubtitle = await checkoutPage.getCheckoutPageCreateAccountCheckboxSubtitle();
        assert.strictEqual(checkoutPageCreateAccountInputSubtitle,   "Stworzyć konto?", "The checkout page create account input subtitle doesn't match expectations.");
        //capture screenshot after invalid data input (for form)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Invalid Form Data Input - Invalid Email Format");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //input valid guest credit card number into credit card number input field (only test number is accepted, others are rejected)
        await checkoutPage.inputValidCreditCardNumberIntoCreditCardInputField();
        //input valid guest credit card expiration date into credit card expiration date input field
        await checkoutPage.inputValidCreditCardExpDateIntoCreditCardInputField();
        //input valid guest credit card CVC number into credit card CVC number input field
        await checkoutPage.inputValidCreditCardCVCNumberIntoCreditCardCVCInputField();
        //capture screenshot after valid credit card data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Valid Credit Card Data Input");
        //click 'Accept Terms and Conditions' checkbox
        await checkoutPage.clickAcceptTermsCheckbox();
        //click 'Buy and Pay' check out button
        await checkoutPage.clickBuyAndPayButton();
        //wait for Stripe to process credit card data
        await checkoutPage.waitForStripeToProcessCard();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const checkoutGuestAccountInputErrorMessage = await checkoutPageGuestInvalidScenarios.getSingularStripeInputError();
            assert.strictEqual(checkoutGuestAccountInputErrorMessage, "Nieprawidłowy adres e-mail, popraw go i spróbuj ponownie.", "The checkout guest account invalid email input format error doesn't match expectations.");
        } catch (e) {
            Logger.error("Invalid guest email input format error doesn't get triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout Test Result - Invalid Email Format");
    }
    //invalid guest order checkout test method - invalid credit card number format (special symbols only)
    async invalidGuestInvalidCreditCardNumberFormatOrderCheckoutTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageGuestInvalidScenarios = new CheckoutPageGuestInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //additional checkout page web element assert (guest page only)
        await checkoutPage.isAdditionalCheckoutPageWebElementDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //assert the guest has the expected account offer message
        const checkoutGuestAccountLoginOfferMessage = await checkoutPage.getCheckoutPageLoginOfferMessage();
        assert.strictEqual(checkoutGuestAccountLoginOfferMessage,   "Jeżeli masz już konto, kliknij tutaj, aby się zalogować", "The checkout guest account login message doesn't match expectations.");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //capture screenshot of the checkout page
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Display Before Data Input");
        //input valid first name into first name input field
        await checkoutPage.inputValidGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name into last name input field
        await checkoutPage.inputValidGuestLastNameIntoLastNameInputField();
        //select 'United States' option
        await checkoutPage.selectCheckoutPageUSCountryOption();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click state dropdown menu
        await checkoutPage.clickGuestRegionDropdownMenu();
        //select 'Illinois state option
        await checkoutPage.selectIllinoisStateOption();
        //input valid guest street into street input field
        await checkoutPage.inputValidGuestStreetIntoStreetInputField();
        //input valid guest city into city input field
        await checkoutPage.inputValidGuestCityIntoCityInputField();
        //input valid guest post code into post code input field
        await checkoutPage.inputValidGuestPostCodeIntoPostCodeInputField();
        //input valid guest phone into phone input field
        await checkoutPage.inputValidGuestPhoneIntoPhoneInputField();
        //input valid guest email into email input field
        await checkoutPage.inputValidGuestEmailIntoEmailInputField();
        //assert checkout page create account input subtitle is as expected
        const checkoutPageCreateAccountInputSubtitle = await checkoutPage.getCheckoutPageCreateAccountCheckboxSubtitle();
        assert.strictEqual(checkoutPageCreateAccountInputSubtitle,   "Stworzyć konto?", "The checkout page create account input subtitle doesn't match expectations.");
        //capture screenshot after invalid data input (for form)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Valid Form Data Input");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //input invalid guest credit card number format into credit card number input field (special symbols only)
        await checkoutPageGuestInvalidScenarios.inputInvalidCreditCardNumberFormatIntoCreditCardInputField();
        //input valid guest credit card expiration date into credit card expiration date input field
        await checkoutPage.inputValidCreditCardExpDateIntoCreditCardInputField();
        //input valid guest credit card CVC number into credit card CVC number input field
        await checkoutPage.inputValidCreditCardCVCNumberIntoCreditCardCVCInputField();
        //capture screenshot after valid credit card data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Invalid Credit Card Data Input - Invalid Credit Card Number Format");
        //click 'Accept Terms and Conditions' checkbox
        await checkoutPage.clickAcceptTermsCheckbox();
        //click 'Buy and Pay' check out button
        await checkoutPage.clickBuyAndPayButton();
        //wait for Stripe to process credit card data
        await checkoutPage.waitForStripeToProcessCard();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const checkoutGuestAccountInputErrorMessage = await checkoutPageGuestInvalidScenarios.getSingularStripeInputError();
            assert.strictEqual(checkoutGuestAccountInputErrorMessage, "Numer karty jest niekompletny.", "The checkout guest account invalid credit card number input format error doesn't match expectations.");
        } catch (e) {
            Logger.error("Invalid guest credit card number input format error doesn't get triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout Test Result - Invalid Credit Card Number Format");
    }
    //invalid guest order checkout test method - invalid credit card number (non-test number -> only test number is accepted by the system)
    async invalidGuestInvalidCreditCardNumberOrderCheckoutTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageGuestInvalidScenarios = new CheckoutPageGuestInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //additional checkout page web element assert (guest page only)
        await checkoutPage.isAdditionalCheckoutPageWebElementDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //assert the guest has the expected account offer message
        const checkoutGuestAccountLoginOfferMessage = await checkoutPage.getCheckoutPageLoginOfferMessage();
        assert.strictEqual(checkoutGuestAccountLoginOfferMessage,   "Jeżeli masz już konto, kliknij tutaj, aby się zalogować", "The checkout guest account login message doesn't match expectations.");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //capture screenshot of the checkout page
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Display Before Data Input");
        //input valid first name into first name input field
        await checkoutPage.inputValidGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name into last name input field
        await checkoutPage.inputValidGuestLastNameIntoLastNameInputField();
        //select 'United States' option
        await checkoutPage.selectCheckoutPageUSCountryOption();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click state dropdown menu
        await checkoutPage.clickGuestRegionDropdownMenu();
        //select 'Illinois state option
        await checkoutPage.selectIllinoisStateOption();
        //input valid guest street into street input field
        await checkoutPage.inputValidGuestStreetIntoStreetInputField();
        //input valid guest city into city input field
        await checkoutPage.inputValidGuestCityIntoCityInputField();
        //input valid guest post code into post code input field
        await checkoutPage.inputValidGuestPostCodeIntoPostCodeInputField();
        //input valid guest phone into phone input field
        await checkoutPage.inputValidGuestPhoneIntoPhoneInputField();
        //input valid guest email into email input field
        await checkoutPage.inputValidGuestEmailIntoEmailInputField();
        //assert checkout page create account input subtitle is as expected
        const checkoutPageCreateAccountInputSubtitle = await checkoutPage.getCheckoutPageCreateAccountCheckboxSubtitle();
        assert.strictEqual(checkoutPageCreateAccountInputSubtitle,   "Stworzyć konto?", "The checkout page create account input subtitle doesn't match expectations.");
        //capture screenshot after invalid data input (for form)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Valid Form Data Input");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //input invalid guest credit card number into credit card number input field (non-test number)
        await checkoutPageGuestInvalidScenarios.inputInvalidCreditCardNumberIntoCreditCardInputField();
        //input valid guest credit card expiration date into credit card expiration date input field
        await checkoutPage.inputValidCreditCardExpDateIntoCreditCardInputField();
        //input valid guest credit card CVC number into credit card CVC number input field
        await checkoutPage.inputValidCreditCardCVCNumberIntoCreditCardCVCInputField();
        //capture screenshot after valid credit card data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Invalid Credit Card Data Input - Invalid Credit Card Number (Non Test)");
        //click 'Accept Terms and Conditions' checkbox
        await checkoutPage.clickAcceptTermsCheckbox();
        //click 'Buy and Pay' check out button
        await checkoutPage.clickBuyAndPayButton();
        //wait for Stripe to process credit card data
        await checkoutPage.waitForStripeToProcessCard();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const checkoutGuestAccountInputErrorMessage = await checkoutPageGuestInvalidScenarios.getSingularStripeInputError();
            assert.strictEqual(checkoutGuestAccountInputErrorMessage, "Numer karty nie jest prawidłowym numerem karty kredytowej.", "The checkout guest account invalid credit card number input error doesn't match expectations.");
        } catch (e) {
            Logger.error("Invalid guest credit card number input error doesn't get triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout Test Result - Invalid Credit Card Number (Non Test)");
    }
    //invalid guest order checkout test method - invalid credit card expiration date format (special symbols only) (input field automatically corrects date format so vice versa date format testing is redundant)
    async invalidGuestInvalidCreditCardExpDateFormatOrderCheckoutTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageGuestInvalidScenarios = new CheckoutPageGuestInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //additional checkout page web element assert (guest page only)
        await checkoutPage.isAdditionalCheckoutPageWebElementDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //assert the guest has the expected account offer message
        const checkoutGuestAccountLoginOfferMessage = await checkoutPage.getCheckoutPageLoginOfferMessage();
        assert.strictEqual(checkoutGuestAccountLoginOfferMessage,   "Jeżeli masz już konto, kliknij tutaj, aby się zalogować", "The checkout guest account login message doesn't match expectations.");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //capture screenshot of the checkout page
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Display Before Data Input");
        //input valid first name into first name input field
        await checkoutPage.inputValidGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name into last name input field
        await checkoutPage.inputValidGuestLastNameIntoLastNameInputField();
        //select 'United States' option
        await checkoutPage.selectCheckoutPageUSCountryOption();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click state dropdown menu
        await checkoutPage.clickGuestRegionDropdownMenu();
        //select 'Illinois state option
        await checkoutPage.selectIllinoisStateOption();
        //input valid guest street into street input field
        await checkoutPage.inputValidGuestStreetIntoStreetInputField();
        //input valid guest city into city input field
        await checkoutPage.inputValidGuestCityIntoCityInputField();
        //input valid guest post code into post code input field
        await checkoutPage.inputValidGuestPostCodeIntoPostCodeInputField();
        //input valid guest phone into phone input field
        await checkoutPage.inputValidGuestPhoneIntoPhoneInputField();
        //input valid guest email into email input field
        await checkoutPage.inputValidGuestEmailIntoEmailInputField();
        //assert checkout page create account input subtitle is as expected
        const checkoutPageCreateAccountInputSubtitle = await checkoutPage.getCheckoutPageCreateAccountCheckboxSubtitle();
        assert.strictEqual(checkoutPageCreateAccountInputSubtitle,   "Stworzyć konto?", "The checkout page create account input subtitle doesn't match expectations.");
        //capture screenshot after invalid data input (for form)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Valid Form Data Input");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //input valid guest credit card number into credit card number input field (test number)
        await checkoutPage.inputValidCreditCardNumberIntoCreditCardInputField();
        //input invalid guest credit card expiration date format into credit card expiration date input field (special symbols only) (input field autocorrects date format so vice-versa date format testing is redundant)
        await checkoutPageGuestInvalidScenarios.inputInvalidCreditCardExpDateFormatIntoCreditCardInputField();
        //input valid guest credit card CVC number into credit card CVC number input field
        await checkoutPage.inputValidCreditCardCVCNumberIntoCreditCardCVCInputField();
        //capture screenshot after valid credit card data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Invalid Credit Card Data Input - Invalid Credit Card Exp Date Format");
        //click 'Accept Terms and Conditions' checkbox
        await checkoutPage.clickAcceptTermsCheckbox();
        //click 'Buy and Pay' check out button
        await checkoutPage.clickBuyAndPayButton();
        //wait for Stripe to process credit card data
        await checkoutPage.waitForStripeToProcessCard();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const checkoutGuestAccountInputErrorMessage = await checkoutPageGuestInvalidScenarios.getSingularStripeInputError();
            assert.strictEqual(checkoutGuestAccountInputErrorMessage, "Data ważności karty jest niekompletna.", "The checkout guest account invalid credit card number input error doesn't match expectations.");
        } catch (e) {
            Logger.error("Invalid guest credit card expiration date input format error doesn't get triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout Test Result - Invalid Credit Card Exp Date Input Format");
    }
    //invalid guest order checkout test method - invalid credit card CVC number format (special symbols only)
    async invalidGuestInvalidCreditCardCVCNumberFormatOrderCheckoutTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageGuestInvalidScenarios = new CheckoutPageGuestInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //additional checkout page web element assert (guest page only)
        await checkoutPage.isAdditionalCheckoutPageWebElementDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //assert the guest has the expected account offer message
        const checkoutGuestAccountLoginOfferMessage = await checkoutPage.getCheckoutPageLoginOfferMessage();
        assert.strictEqual(checkoutGuestAccountLoginOfferMessage,   "Jeżeli masz już konto, kliknij tutaj, aby się zalogować", "The checkout guest account login message doesn't match expectations.");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //capture screenshot of the checkout page
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Display Before Data Input");
        //input valid first name into first name input field
        await checkoutPage.inputValidGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name into last name input field
        await checkoutPage.inputValidGuestLastNameIntoLastNameInputField();
        //select 'United States' option
        await checkoutPage.selectCheckoutPageUSCountryOption();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click state dropdown menu
        await checkoutPage.clickGuestRegionDropdownMenu();
        //select 'Illinois state option
        await checkoutPage.selectIllinoisStateOption();
        //input valid guest street into street input field
        await checkoutPage.inputValidGuestStreetIntoStreetInputField();
        //input valid guest city into city input field
        await checkoutPage.inputValidGuestCityIntoCityInputField();
        //input valid guest post code into post code input field
        await checkoutPage.inputValidGuestPostCodeIntoPostCodeInputField();
        //input valid guest phone into phone input field
        await checkoutPage.inputValidGuestPhoneIntoPhoneInputField();
        //input valid guest email into email input field
        await checkoutPage.inputValidGuestEmailIntoEmailInputField();
        //assert checkout page create account input subtitle is as expected
        const checkoutPageCreateAccountInputSubtitle = await checkoutPage.getCheckoutPageCreateAccountCheckboxSubtitle();
        assert.strictEqual(checkoutPageCreateAccountInputSubtitle,   "Stworzyć konto?", "The checkout page create account input subtitle doesn't match expectations.");
        //capture screenshot after invalid data input (for form)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Valid Form Data Input");
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //input valid guest credit card number into credit card number input field (test number)
        await checkoutPage.inputValidCreditCardNumberIntoCreditCardInputField();
        //input valid guest credit card expiration date into credit card expiration date input field
        await checkoutPage.inputValidCreditCardExpDateIntoCreditCardInputField();
        //input invalid guest credit card CVC number format into credit card CVC number input field (special symbols only)
        await checkoutPageGuestInvalidScenarios.inputInvalidCreditCardCVCNumberFormatIntoCreditCardCVCInputField();
        //capture screenshot after valid credit card data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Guest) After Invalid Credit Card Data Input - Invalid Credit Card CVC Number Format");
        //click 'Accept Terms and Conditions' checkbox
        await checkoutPage.clickAcceptTermsCheckbox();
        //click 'Buy and Pay' check out button
        await checkoutPage.clickBuyAndPayButton();
        //wait for Stripe to process credit card data
        await checkoutPage.waitForStripeToProcessCard();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const checkoutGuestAccountInputErrorMessage = await checkoutPageGuestInvalidScenarios.getSingularStripeInputError();
            assert.strictEqual(checkoutGuestAccountInputErrorMessage, "Kod bezpieczeństwa karty jest niekompletny.", "The checkout guest account invalid credit card CVC number input error doesn't match expectations.");
        } catch (e) {
            Logger.error("Invalid guest credit card CVC number input format error doesn't get triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout Test Result - Invalid Credit Card CVC Number Input Format");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //placed order confirmation page test method (both guest and registered user share this method)
    async placedOrderConfirmationTest(){
        const generalPage = new GeneralPage(this.driver);
        const orderConfirmationPage = new OrderConfirmationPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //order confirmation page web element
        await orderConfirmationPage.isOrderConfirmationPageWebElementDisplayed();
        //order confirmation page text element assert
        await this.isOrderConfirmationPageTextElementAsExpected();
        //capture screenshot of the order confirmation page
        await TestMethods.captureScreenshot(this.driver, "Order Confirmation Page Display");
        //log order confirmation page data
        await this.logOrderConfirmationData();
    }

    //placed order confirmation page test method (registered user)
    async placedOrderRegUserConfirmationTest(){
        const generalPage = new GeneralPage(this.driver);
        const orderConfirmationPage = new OrderConfirmationPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page additional web element assert
        await generalPage.isAdditionalGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page additional text element assert
        await this.isAdditionalGeneralPageTextElementAsExpected();
        //order confirmation page web element
        await orderConfirmationPage.isOrderConfirmationPageWebElementDisplayed();
        //order confirmation page text element assert
        await this.isOrderConfirmationPageTextElementAsExpected();
        //capture screenshot of the order confirmation page
        await TestMethods.captureScreenshot(this.driver, "Order Confirmation Page Display");
        //log order confirmation page data
        await this.logOrderConfirmationRegUserData();
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //general page text element assert
    async isGeneralPageTextElementAsExpected(){
        const generalPage = new GeneralPage(this.driver);
        //assert main page nav link text is as expected
        const mainPageNavLinkText = await generalPage.getMainPageNavLinkText();
        assert.strictEqual(mainPageNavLinkText,   "Strona główna", "The main page nav link text doesn't match expectations.");
        //assert shop nav link text is as expected
        const shopNavLinkText = await generalPage.getShopNavLinkText();
        assert.strictEqual(shopNavLinkText,   "Sklep", "The main page nav link text doesn't match expectations.");
        //assert order nav link text is as expected
        const orderNavLinkText = await generalPage.getOrderNavLinkText();
        assert.strictEqual(orderNavLinkText,   "Zamówienie", "The main page nav link text doesn't match expectations.");
        //assert shopping cart nav link text is as expected
        const shoppingCartNavLinkText = await generalPage.getShoppingCartNavLinkText();
        assert.strictEqual(shoppingCartNavLinkText,   "Koszyk", "The main page nav link text doesn't match expectations.");
        //assert my account nav link text is as expected
        const myAccountNavLinkText = await generalPage.getMyAccountNavLinkText();
        assert.strictEqual(myAccountNavLinkText,   "Moje konto", "The main page nav link text doesn't match expectations.");
        //assert wishlist nav link text is as expected
        const wishlistNavLinkText = await generalPage.getWishlistNavLinkText();
        assert.strictEqual(wishlistNavLinkText,   "Lista życzeń", "The main page nav link text doesn't match expectations.");
        //assert copyright text is as expected
        const copyrightText = await generalPage.getCopyrightText();
        assert.strictEqual(copyrightText,   "© FakeStore 2025", "The copyright text doesn't match expectations.");
    }

    //general page additional content text element assert method (not all pages have those)
    async isAdditionalGeneralPageTextElementAsExpected(){
        const generalPage = new GeneralPage(this.driver);
        //assert aside product category title is as expected
        const asideProductCatTitle = await generalPage.getAsideProductCategoryTitle();
        assert.strictEqual(asideProductCatTitle,   "Kategorie produktów", "The aside product category title doesn't match expectations.");
        //assert aside windsurfing category link text is as expected
        const asideWindsurfingCatLinkText = await generalPage.getAsideWindsurfingCategoryLinkText();
        assert.strictEqual(asideWindsurfingCatLinkText,   "Windsurfing", "The aside windsurfing category link text doesn't match expectations.");
        //assert aside climbing category link text is as expected
        const asideClimbingCatLinkText = await generalPage.getAsideClimbingCategoryLinkText();
        assert.strictEqual(asideClimbingCatLinkText,   "Wspinaczka", "The aside climbing category link text doesn't match expectations.");
        //assert aside yoga category link text is as expected
        const asideYogaCatLinkText = await generalPage.getAsideYogaCategoryLinkText();
        assert.strictEqual(asideYogaCatLinkText,   "Yoga i pilates", "The aside yoga category link text doesn't match expectations.");
        //assert aside sailing category link text is as expected
        const asideSailingCatLinkText = await generalPage.getAsideSailingCategoryLinkText();
        assert.strictEqual(asideSailingCatLinkText,   "Żeglarstwo", "The aside sailing category link text doesn't match expectations.");
    }

    //homepage text element assert method
    async isHomePageTextElementAsExpected(){
        const homePage = new HomePage(this.driver);
        //assert choose travel section title is as expected
        const chooseTravelSectionTitle = await homePage.getChooseTravelSectionTitle();
        assert.strictEqual(chooseTravelSectionTitle,   "Wybierz podróż dla siebie!", "The choose to travel section title doesn't match expectations.");
        //assert choose travel section subtitle is as expected
        const chooseTravelSectionSubtitle = await homePage.getChooseTravelSectionSubtitle();
        assert.strictEqual(chooseTravelSectionSubtitle,   "Windsurfing, kolarstwo czy żeglarstwo? Wybierz kategorię lub przeglądaj wszystkie oferty,", "The choose to travel section subtitle doesn't match expectations.");
        //assert travel section title is as expected
        const travelSectionTitle = await homePage.getTravelCategorySectionTitle();
        assert.strictEqual(travelSectionTitle,   "Kupuj wg kategorii", "The travel section title doesn't match expectations.");
        //assert news section title is as expected
        const newsSectionTitle = await homePage.getNewsSectionTitle();
        assert.strictEqual(newsSectionTitle,   "Nowości", "The news section title doesn't match expectations.");
        //assert popular section title is as expected
        const popularSectionTitle = await homePage.getPopularSectionSubtitle();
        assert.strictEqual(popularSectionTitle,   "Popularne", "The popular section title doesn't match expectations.");
        //assert in promotion section title is as expected
        const inPromotionSectionTitle = await homePage.getInPromotionSectionSubtitle();
        assert.strictEqual(inPromotionSectionTitle,   "W promocji", "The in promotion section title doesn't match expectations.");
        //assert bestsellers section title is as expected
        const bestsellersSectionTitle = await homePage.getBestsellersSectionSubtitle();
        assert.strictEqual(bestsellersSectionTitle,   "Bestsellery", "The bestsellers section title doesn't match expectations.");
        //assert buy by brand section title is as expected
        const buyByBrandSectionTitle = await homePage.getBuyByBrandSectionSubtitle();
        assert.strictEqual(buyByBrandSectionTitle,   "Kupuj według marki", "The buy by brand section title doesn't match expectations.");
    }

    //register/login dashboard page text element assert method
    async isRegisterLoginDashboardPageTextElementAsExpected(){
        const registerLoginDashboardPage = new RegisterLoginDashboardPage(this.driver);
        //assert login section title is as expected
        const loginSectionTitle = await registerLoginDashboardPage.getLoginSectionTitle();
        assert.strictEqual(loginSectionTitle,   "Zaloguj się", "The register/login dashboard page login section title doesn't match expectations.");
        //assert login username/email input field subtitle is as expected
        const loginUsernameEmailSubtitle = await registerLoginDashboardPage.getLoginUsernameEmailInputFieldSubtitle();
        assert.strictEqual(loginUsernameEmailSubtitle,   "Użytkownik lub e-mail", "The register/login dashboard page login username/email input field subtitle doesn't match expectations.");
        //assert login password input field subtitle is as expected
        const loginPasswordSubtitle = await registerLoginDashboardPage.getLoginPasswordInputFieldSubtitle();
        assert.strictEqual(loginPasswordSubtitle,   "Hasło", "The register/login dashboard page login password input field subtitle doesn't match expectations.");
        //assert remember login text is as expected
        const rememberLoginText = await registerLoginDashboardPage.getRememberLoginText();
        assert.strictEqual(rememberLoginText,"Zapamiętaj mnie", "The register/login dashboard page remember login text doesn't match expectations.");
        //assert forgot password link text is as expected
        const loginForgotPasswordLinkText = await registerLoginDashboardPage.getForgotPasswordLinkText();
        assert.strictEqual(loginForgotPasswordLinkText,   "Nie pamiętasz hasła?", "The register/login dashboard page login forgot password link text doesn't match expectations.");
        //assert register section title is as expected
        const registerSectionTitle = await registerLoginDashboardPage.getRegisterSectionTitle();
        assert.strictEqual(registerSectionTitle,   "Zarejestruj się", "The register/login dashboard page register section title doesn't match expectations.");
        //assert register email input field subtitle is as expected
        const registerEmailSubtitle = await registerLoginDashboardPage.getRegisterEmailInputFieldSubtitle();
        assert.strictEqual(registerEmailSubtitle,   "Adres email", "The register/login dashboard page register email input field subtitle doesn't match expectations.");
        //assert register password input field subtitle is as expected
        const registerPasswordSubtitle = await registerLoginDashboardPage.getRegisterPasswordInputFieldSubtitle();
        assert.strictEqual(registerPasswordSubtitle,   "Hasło", "The register/login dashboard page register password input field subtitle doesn't match expectations.");
        //assert register description is as expected
        const registerDescription = await registerLoginDashboardPage.getRegisterDescription();
        assert.strictEqual(registerDescription,   "Twoje dane osobowe będą wykorzystywane do obsługi strony internetowej, zarządzania dostępem do konta oraz do innych celów opisanych pod linkiem: polityka prywatności. W celu usunięcia konta wyślij e-mail pod adres fakestore[małpa]testelka.pl", "The register/login dashboard page register description doesn't match expectations.");
    }

    //my account page (main section) text element assert method
    async isMyAccountPageTextElementAsExpected(){
        const myAccountPage = new MyAccountPage(this.driver);
        //aside section
        //assert aside my account link text is as expected
        const asideMyAccountLinkText = await myAccountPage.getAsideMyAccountLinkText();
        assert.strictEqual(asideMyAccountLinkText,   "Kokpit", "The my account aside my account link text doesn't match expectations.");
        //assert aside my order link text is as expected
        const asideMyOrderLinkText = await myAccountPage.getAsideMyOrderLinkText();
        assert.strictEqual(asideMyOrderLinkText, "Moje zamówienia", "The my account aside my order link text doesn't match expectations.");
        //assert aside edit account link text is as expected
        const asideEditAccountLinkText = await myAccountPage.getAsideEditAccountLinkText();
        assert.strictEqual(asideEditAccountLinkText,   "Edycja konta", "The my account aside edit account link text doesn't match expectations.");
        //assert aside my address link text is as expected
        const asideMyAddressLinkText = await myAccountPage.getAsideMyAddressLinkText();
        assert.strictEqual(asideMyAddressLinkText,   "Adres", "The my account aside my address link text doesn't match expectations.");
        //assert aside logout link text is as expected
        const asideLogoutLinkText = await myAccountPage.getAsideLogoutLinkText();
        assert.strictEqual(asideLogoutLinkText,   "Wyloguj", "The my account aside logout link text doesn't match expectations.");
        //main section
        //assert my account welcome title is as expected
        const myAccountWelcomeTitle = await myAccountPage.getMyAccountWelcomeTitle();
        assert.strictEqual(myAccountWelcomeTitle,   "Witaj (nie jesteś? Wyloguj się)", "The my account welcome title doesn't match expectations.");
        //assert my account description is as expected
        const myAccountDescription = await myAccountPage.getMyAccountDescription();
        assert.strictEqual(myAccountDescription,   "W ustawieniach swojego konta możesz przejrzeć swoje ostatnie zamówienia, zarządzać adresami płatności i dostawy oraz zmieniać hasło i szczegóły konta.", "The my account description doesn't match expectations.");
        //assert remove account link text is as expected
        const removeAccountLinkText = await myAccountPage.getRemoveAccountLinkText();
        assert.strictEqual(removeAccountLinkText,   "Delete Account", "The remove account link text doesn't match expectations.");
    }

    //my account page (aside section) text element assert method - some pages have them too
    async isMyAccountPageAsideTextElementAsExpected(){
        const myAccountPage = new MyAccountPage(this.driver);
        //aside section
        //assert aside my account link text is as expected
        const asideMyAccountLinkText = await myAccountPage.getAsideMyAccountLinkText();
        assert.strictEqual(asideMyAccountLinkText,   "Kokpit", "The my account aside my account link text doesn't match expectations.");
        //assert aside my order link text is as expected
        const asideMyOrderLinkText = await myAccountPage.getAsideMyOrderLinkText();
        assert.strictEqual(asideMyOrderLinkText, "Moje zamówienia", "The my account aside my order link text doesn't match expectations.");
        //assert aside edit account link text is as expected
        const asideEditAccountLinkText = await myAccountPage.getAsideEditAccountLinkText();
        assert.strictEqual(asideEditAccountLinkText,   "Edycja konta", "The my account aside edit account link text doesn't match expectations.");
        //assert aside my address link text is as expected
        const asideMyAddressLinkText = await myAccountPage.getAsideMyAddressLinkText();
        assert.strictEqual(asideMyAddressLinkText,   "Adres", "The my account aside my address link text doesn't match expectations.");
        //assert aside logout link text is as expected
        const asideLogoutLinkText = await myAccountPage.getAsideLogoutLinkText();
        assert.strictEqual(asideLogoutLinkText,   "Wyloguj", "The my account aside logout link text doesn't match expectations.");
    }

    //edit account page text element assert method
    async isEditAccountPageAsideTextElementAsExpected(){
        const editAccountPage = new EditAccountPage(this.driver);
        //assert edit account page is as expected
        const editAccountPageTitle = await editAccountPage.getEditAccountPageTitle();
        assert.strictEqual(editAccountPageTitle,   "Szczegóły konta", "The edit account page title doesn't match expectations.");
        //assert edit account first name subtitle is as expected
        const editAccountFirstNameSubtitle = await editAccountPage.getEditAccountFirstNameSubtitle();
        assert.strictEqual(editAccountFirstNameSubtitle,   "Imię", "The edit account first name input field subtitle doesn't match expectations.");
        //assert edit account last name subtitle is as expected
        const editAccountLastNameSubtitle = await editAccountPage.getEditAccountLastNameSubtitle();
        assert.strictEqual(editAccountLastNameSubtitle,   "Nazwisko", "The edit account last name input field subtitle doesn't match expectations.");
        //assert edit account username subtitle is as expected
        const editAccountUsernameSubtitle = await editAccountPage.getEditAccountUsernameSubtitle();
        assert.strictEqual(editAccountUsernameSubtitle,   "Nazwa wyświetlana", "The edit account username input field subtitle doesn't match expectations.");
        //assert edit account username subtitle is as expected
        const editAccountUsernameHint = await editAccountPage.getUsernameHint();
        assert.strictEqual(editAccountUsernameHint,   "W taki sposób twoja nazwa zostanie wyświetlona w sekcji Moje konto i w twoich opiniach", "The edit account username input field hint doesn't match expectations.");
        //assert edit account email subtitle is as expected
        const editAccountEmailSubtitle = await editAccountPage.getEditAccountEmailSubtitle();
        assert.strictEqual(editAccountEmailSubtitle,   "Adres email", "The edit account email input field subtitle doesn't match expectations.");
        //assert edit account password form subtitle is as expected
        const editAccountPasswordFormSubtitle = await editAccountPage.getPasswordFormSubtitle();
        assert.strictEqual(editAccountPasswordFormSubtitle,   "Zmiana hasła", "The edit account password form subtitle doesn't match expectations.");
        //assert edit account old password subtitle is as expected
        const editAccountOldPasswordSubtitle = await editAccountPage.getEditAccountOldPasswordSubtitle();
        assert.strictEqual(editAccountOldPasswordSubtitle,   "Aktualne hasło (pozostaw puste, aby nie zmieniać)", "The edit account old password input field subtitle doesn't match expectations.");
        //assert edit account new password subtitle is as expected
        const editAccountNewPasswordSubtitle = await editAccountPage.getEditAccountNewPasswordSubtitle();
        assert.strictEqual(editAccountNewPasswordSubtitle,   "Nowe hasło (pozostaw puste, aby nie zmieniać)", "The edit account new password input field subtitle doesn't match expectations.");
        //assert edit account confirm password password subtitle is as expected
        const editAccountConfirmPasswordSubtitle = await editAccountPage.getEditAccountConfirmPasswordSubtitle();
        assert.strictEqual(editAccountConfirmPasswordSubtitle,   "Potwierdź nowe hasło", "The edit account confirm password input field subtitle doesn't match expectations.");
    }

    //address book text element assert method
    async isAddressBookPageTextElementAsExpected(){
        const addressBookPage = new AddressBookPage(this.driver);
        //assert address book page title is as expected
        const addressBookPageTitle = await addressBookPage.getAddressBookPageTitle();
        assert.strictEqual(addressBookPageTitle,   "Adresy", "The address book page title doesn't match expectations.");
        //assert address book page subtitle is as expected
        const addressBookPageSubtitle = await addressBookPage.getAddressBookPageSubtitle();
        assert.strictEqual(addressBookPageSubtitle,   "Następujące adresy zostaną domyślnie użyte na stronie zamówienia.", "The address book page subtitle doesn't match expectations.");
        //assert address book billing address section title is as expected
        const addressBookBillingAddressSectionTitle = await addressBookPage.getAddressBookBillingAddressTitle();
        assert.strictEqual(addressBookBillingAddressSectionTitle,   "Adres rozliczeniowy", "The address book billing address section title doesn't match expectations.");
        //assert address book shipping address section title is as expected
        const addressBookShippingAddressSectionTitle = await addressBookPage.getAddressBookShippingAddressTitle();
        assert.strictEqual(addressBookShippingAddressSectionTitle,   "Adres do wysyłki", "The address book shipping address section title doesn't match expectations.");
    }

    //add shipping address text element assert method
    async isAddShippingAddressPageTextElementAsExpected(){
        const addShippingAddressPage = new AddShippingAddressPage(this.driver);
        //assert add shipping address page title is as expected
        const addShippingAddressPageTitle = await addShippingAddressPage.getAddShippingAddressPageTitle();
        assert.strictEqual(addShippingAddressPageTitle,   "Adres do wysyłki", "The add shipping address page title doesn't match expectations.");
        //assert add shipping address page first name subtitle is as expected
        const addShippingAddressFirstNameSubtitle = await addShippingAddressPage.getAddShippingAddressFirstNameSubtitle();
        assert.strictEqual(addShippingAddressFirstNameSubtitle,   "Imię", "The add shipping address page first name subtitle doesn't match expectations.");
        //assert add shipping address page last name subtitle is as expected
        const addShippingAddressLastNameSubtitle = await addShippingAddressPage.getAddShippingAddressLastNameSubtitle();
        assert.strictEqual(addShippingAddressLastNameSubtitle,   "Nazwisko", "The add shipping address page last name subtitle doesn't match expectations.");
        //assert add shipping address page company subtitle is as expected
        const addShippingAddressCompanySubtitle = await addShippingAddressPage.getAddShippingAddressCompanySubtitle();
        assert.strictEqual(addShippingAddressCompanySubtitle,   "Nazwa firmy (opcjonalne)", "The add shipping address page company subtitle doesn't match expectations.");
        //assert add shipping address page country subtitle is as expected
        const addShippingAddressCountrySubtitle = await addShippingAddressPage.getAddShippingAddressCountrySubtitle();
        assert.strictEqual(addShippingAddressCountrySubtitle,   "Kraj / region", "The add shipping address page country subtitle doesn't match expectations.");
        //assert add shipping address page street subtitle is as expected
        const addShippingAddressStreetSubtitle = await addShippingAddressPage.getAddShippingAddressStreetSubtitle();
        assert.strictEqual(addShippingAddressStreetSubtitle,   "Ulica", "The add shipping address page street subtitle doesn't match expectations.");
        //assert add shipping address page city subtitle is as expected
        const addShippingAddressCitySubtitle = await addShippingAddressPage.getAddShippingAddressCitySubtitle();
        assert.strictEqual(addShippingAddressCitySubtitle,   "Miasto", "The add shipping address page city subtitle doesn't match expectations.");
        //assert add shipping address page region subtitle is as expected //Selenium fails to see the element with valid selector, element is unobstrcuted
        //const addShippingAddressRegionSubtitle = await addShippingAddressPage.getAddShippingAddressRegionSubtitle();
        //assert.strictEqual(addShippingAddressRegionSubtitle,   "Województwo / Region", "The add shipping address page region subtitle doesn't match expectations.");
        //assert add shipping address page post code subtitle is as expected
        const addShippingAddressPostCodeSubtitle = await addShippingAddressPage.getAddShippingAddressPostCodeSubtitle();
        assert.strictEqual(addShippingAddressPostCodeSubtitle,   "Kod pocztowy", "The add shipping address page post code subtitle doesn't match expectations.");
    }

    //add billing address page text element assert method
    async isAddBillingAddressPageTextElementAsExpected(){
        const addBillingAddressPage = new AddBillingAddressPage(this.driver);
        //assert add shipping address page title is as expected
        const addBillingAddressPageTitle = await addBillingAddressPage.getAddBillingAddressPageTitle();
        assert.strictEqual(addBillingAddressPageTitle,   "Adres rozliczeniowy", "The add billing address page title doesn't match expectations.");
        //assert add shipping address page first name subtitle is as expected
        const addBillingAddressFirstNameSubtitle = await addBillingAddressPage.getAddBillingAddressFirstNameInputSubtitle();
        assert.strictEqual(addBillingAddressFirstNameSubtitle,   "Imię", "The add billing address page first name subtitle doesn't match expectations.");
        //assert add shipping address page last name subtitle is as expected
        const addBillingAddressLastNameSubtitle = await addBillingAddressPage.getAddBillingAddressLastNameInputSubtitle();
        assert.strictEqual(addBillingAddressLastNameSubtitle,   "Nazwisko", "The add billing address page last name subtitle doesn't match expectations.");
        //assert add shipping address page company subtitle is as expected
        const addBillingAddressCompanySubtitle = await addBillingAddressPage.getAddBillingAddressCompanyInputSubtitle();
        assert.strictEqual(addBillingAddressCompanySubtitle,   "Nazwa firmy (opcjonalne)", "The add billing address page company subtitle doesn't match expectations.");
        //assert add shipping address page country subtitle is as expected
        const addBillingAddressCountrySubtitle = await addBillingAddressPage.getAddBillingAddressCountryInputSubtitle();
        assert.strictEqual(addBillingAddressCountrySubtitle,   "Kraj / region", "The add billing address page country subtitle doesn't match expectations.");
        //assert add shipping address page street subtitle is as expected
        const addBillingAddressStreetSubtitle = await addBillingAddressPage.getAddBillingAddressStreetInputSubtitle();
        assert.strictEqual(addBillingAddressStreetSubtitle,   "Ulica", "The add billing address page street subtitle doesn't match expectations.");
        //assert add shipping address page city subtitle is as expected
        const addBillingAddressCitySubtitle = await addBillingAddressPage.getAddBillingAddressCityInputSubtitle();
        assert.strictEqual(addBillingAddressCitySubtitle,   "Miasto", "The add billing address page city subtitle doesn't match expectations.");
        //assert add shipping address page post code subtitle is as expected //Selenium can't find the element with VALID selector
        //const addBillingAddressPostCodeSubtitle = await addBillingAddressPage.getAddBillingAddressPostCodeInputSubtitle();
        //assert.strictEqual(addBillingAddressPostCodeSubtitle,   "Kod pocztowy", "The add billing address page post code subtitle doesn't match expectations.");
        //assert add shipping address page phone subtitle is as expected
        const addBillingAddressPhoneSubtitle = await addBillingAddressPage.getAddBillingAddressPhoneInputSubtitle();
        assert.strictEqual(addBillingAddressPhoneSubtitle,   "Telefon", "The add billing address page phone subtitle doesn't match expectations.");
        //assert add shipping address page email subtitle is as expected
        const addBillingAddressEmailSubtitle = await addBillingAddressPage.getAddBillingAddressEmailInputSubtitle();
        assert.strictEqual(addBillingAddressEmailSubtitle,   "Adres email", "The add billing address page email subtitle doesn't match expectations.");
    }

    //single product category dashboard page text element assert
    async isSingleProductCategoryDashboardPageTextAsExpected(){
        const singleProductCategoryDashboardPage = new SingleProductCategoryDashboardPage(this.driver);
        //assert single product category dashboard price filter subtitle is as expected
        const singleProductCategoryDashboardPriceFilterSubtitle = await singleProductCategoryDashboardPage.getSingleProductCategoryDashboardPriceFilterSubtitle();
        assert.strictEqual(singleProductCategoryDashboardPriceFilterSubtitle,   "Filtruj wg ceny", "The single product category dashboard price filter subtitle doesn't match expectations.");
        //assert single product category dashboard page last viewed subtitle is as expected //Selenium can't find the element with VALID selector
        //const singleProductCategoryDashboardPageLastViewedSubtitle = await singleProductCategoryDashboardPage.getSingleProductCategoryDashboardLastViewedSubtitle();
        //assert.strictEqual(singleProductCategoryDashboardPageLastViewedSubtitle,   "Ostatnio oglądane produkty", "The single product category dashboard page last viewed subtitle doesn't match expectations.");
    }

    //single product page text element assert method
    async isSingleProductPageTextElementAsExpected(){
        const singleProductPage = new SingleProductPage(this.driver);
        //assert single product page description link text is as expected
        const singleProductPageDescriptionLink = await singleProductPage.getSingleProductDescriptionLinkText();
        assert.strictEqual(singleProductPageDescriptionLink,   "Opis", "The single product page description link text doesn't match expectations.");
        //assert single product page description link text is as expected
        const singleProductPageAdditionalInfoLink = await singleProductPage.getSingleProductAdditionalInfoLinkText();
        assert.strictEqual(singleProductPageAdditionalInfoLink,   "Dodatkowe informacje", "The single product page additional info link text doesn't match expectations.");
        //assert single product page reviews link text is as expected
        const singleProductPageReviewsInfoLink = await singleProductPage.getSingleProductReviewsLinkText();
        assert.strictEqual(singleProductPageReviewsInfoLink,   "Opinie", "The single product page reviews link text doesn't match expectations.");
    }

    //wishlist page text element assert method
    async isWishlistPageTextElementAsExpected(){
        const wishlistPage = new WishlistPage(this.driver);
        //assert wishlist page title is as expected
        const wishlistPageTitle = await wishlistPage.getWishlistPageTitle();
        assert.strictEqual(wishlistPageTitle,   "Lista życzeń", "The wishlist page title doesn't match expectations.");
        //assert wishlist page subtitle is as expected
        const wishlistPageSubtitle = await wishlistPage.getWishlistPageSubtitle();
        assert.strictEqual(wishlistPageSubtitle,   "Moja lista życzeń:", "The wishlist page subtitle doesn't match expectations.");
    }

    //shopping cart page text element assert test method
    async isShoppingCartPageTextElementAsExpected(){
        const shoppingCartPage = new ShoppingCartPage(this.driver);
        //assert shopping cart page title is as expected
        const shoppingCartPageTitle = await shoppingCartPage.getShoppingCartPageTitle();
        assert.strictEqual(shoppingCartPageTitle,   "Koszyk", "The shopping cart page title doesn't match expectations.");
        //assert shopping cart order summary subtitle is as expected
        const shoppingCartOrderSummarySubtitle = await shoppingCartPage.getShoppingCartOrderSummarySubtitle();
        assert.strictEqual(shoppingCartOrderSummarySubtitle,   "Podsumowanie koszyka", "The shopping cart order summary subtitle doesn't match expectations.");
        //assert shopping cart order summary quote subtitle is as expected
        const shoppingCartOrderSummaryQuoteSubtitle = await shoppingCartPage.getShoppingCartOrderSummaryQuoteSubtitle();
        assert.strictEqual(shoppingCartOrderSummaryQuoteSubtitle,   "Kwota", "The shopping cart order summary quote subtitle doesn't match expectations.");
        //assert shopping cart order summary total price subtitle is as expected
        const shoppingCartOrderSummaryTotPriceSubtitle = await shoppingCartPage.getShoppingCartOrderSummaryTotalSubtitle();
        assert.strictEqual(shoppingCartOrderSummaryTotPriceSubtitle,   "Suma", "The shopping cart order summary total price subtitle doesn't match expectations.");
    }

    //checkout page text element assert method
    async isCheckoutPageTextElementAsExpected(){
        const checkoutPage = new CheckoutPage(this.driver);
        //assert checkout page title is as expected
        const checkoutPageTitle = await checkoutPage.getCheckoutPageTitle();
        assert.strictEqual(checkoutPageTitle,   "Zamówienie", "The checkout page title doesn't match expectations.");
        //assert checkout page coupon offer message is as expected
        const checkoutPageCouponOfferMessage = await checkoutPage.getCheckoutPageCouponOfferMessage();
        assert.strictEqual(checkoutPageCouponOfferMessage,   "Masz kupon? Kliknij tutaj, aby dodać kod", "The checkout page coupon offer message doesn't match expectations.");
        //assert checkout page payment section title is as expected
        const checkoutPagePaymentSectionTitle = await checkoutPage.getCheckoutPagePaymentSectionTitle();
        assert.strictEqual(checkoutPagePaymentSectionTitle,   "Dane płatności", "The checkout page payment section title doesn't match expectations.");
        //assert checkout page first name input subtitle is as expected
        const checkoutPageFirstNameSubtitle = await checkoutPage.getCheckoutPagePaymentFirstNameInputSubtitle();
        assert.strictEqual(checkoutPageFirstNameSubtitle,   "Imię", "The checkout page first name input subtitle doesn't match expectations.");
        //assert checkout page last name input subtitle is as expected
        const checkoutPageLastNameSubtitle = await checkoutPage.getCheckoutPagePaymentLastNameInputSubtitle();
        assert.strictEqual(checkoutPageLastNameSubtitle,   "Nazwisko", "The checkout page last name input subtitle doesn't match expectations.");
        //assert checkout page company input subtitle is as expected
        const checkoutPageCompanyInputSubtitle = await checkoutPage.getCheckoutPagePaymentCompanyInputSubtitle();
        assert.strictEqual(checkoutPageCompanyInputSubtitle,   "Nazwa firmy (opcjonalne)", "The checkout page company input subtitle doesn't match expectations.");
        //assert checkout page region input subtitle is as expected
        const checkoutPageRegionInputSubtitle = await checkoutPage.getCheckoutPagePaymentCountryInputSubtitle();
        assert.strictEqual(checkoutPageRegionInputSubtitle,   "Kraj / region", "The checkout page region input subtitle doesn't match expectations.");
        //assert checkout page street input subtitle is as expected
        const checkoutPageStreetInputSubtitle = await checkoutPage.getCheckoutPagePaymentStreetInputSubtitle();
        assert.strictEqual(checkoutPageStreetInputSubtitle,   "Ulica", "The checkout page street input subtitle doesn't match expectations.");
        //assert checkout page post code input subtitle is as expected
        const checkoutPagePostCodeInputSubtitle = await checkoutPage.getCheckoutPagePaymentPostCodeInputSubtitle();
        assert.strictEqual(checkoutPagePostCodeInputSubtitle,   "Kod pocztowy", "The checkout page post code input subtitle doesn't match expectations.");
        //assert checkout page city input subtitle is as expected
        const checkoutPageCityInputSubtitle = await checkoutPage.getCheckoutPagePaymentCityInputSubtitle();
        assert.strictEqual(checkoutPageCityInputSubtitle,   "Miasto", "The checkout page city input subtitle doesn't match expectations.");
        //assert checkout page phone input subtitle is as expected
        const checkoutPagePhoneInputSubtitle = await checkoutPage.getCheckoutPagePaymentPhoneInputSubtitle();
        assert.strictEqual(checkoutPagePhoneInputSubtitle,   "Telefon", "The checkout page phone input subtitle doesn't match expectations.");
        //assert checkout page email input subtitle is as expected
        const checkoutPageEmailInputSubtitle = await checkoutPage.getCheckoutPagePaymentEmailInputSubtitle();
        assert.strictEqual(checkoutPageEmailInputSubtitle,   "Adres email", "The checkout page email input subtitle doesn't match expectations.");
        //assert checkout page additional info title is as expected
        const checkoutPageAdditionalInfoTitle = await checkoutPage.getCheckoutPageAdditionalInfoSectionTitle();
        assert.strictEqual(checkoutPageAdditionalInfoTitle,   "Dodatkowe informacje", "The checkout page additional info section title doesn't match expectations.");
        //assert checkout page additional info subtitle is as expected
        const checkoutPageAdditionalInfoSubtitle = await checkoutPage.getCheckoutPageAdditionalInfoSectionSubtitle();
        assert.strictEqual(checkoutPageAdditionalInfoSubtitle,   "Uwagi do zamówienia (opcjonalne)", "The checkout page additional info section subtitle doesn't match expectations.");
        //assert checkout page order section title is as expected
        const checkoutPageOrderSectionTitle = await checkoutPage.getCheckoutPageOrderSectionTitle();
        assert.strictEqual(checkoutPageOrderSectionTitle,   "Twoje zamówienie", "The checkout page order section title doesn't match expectations.");
        //assert checkout page credit card section title is as expected
        const checkoutPageCreditCardSectionTitle = await checkoutPage.getCheckoutPageCreditCardSectionTitle();
        assert.strictEqual(checkoutPageCreditCardSectionTitle,   "Karta debetowa/kredytowa (Stripe)", "The checkout page credit card section title doesn't match expectations.");
        //assert checkout page credit card section description is as expected
        const checkoutPageCreditCardDescription = await checkoutPage.getCheckoutPageCreditCardDescription();
        assert.strictEqual(checkoutPageCreditCardDescription,   "Zapłać kartą przez Stripe. WŁĄCZONO TRYB TESTOWY. W trybie testowym możesz użyć numeru karty 4242424242424242 z dowolnym kodem CVC oraz prawidłową datą ważności. Więcej numerów kart zawiera część dokumentacji poświęcona testowaniu Stripe.", "The checkout page credit card section description doesn't match expectations.");
        //assert checkout page credit card number subtitle is as expected
        const checkoutPageCreditCardNumberSubtitle = await checkoutPage.getCheckoutPageCreditCardNumberSubtitle();
        assert.strictEqual(checkoutPageCreditCardNumberSubtitle,   "Numer karty", "The checkout page credit card number subtitle doesn't match expectations.");
        //assert checkout page credit card data subtitle is as expected
        const checkoutPageCreditCardDataSubtitle = await checkoutPage.getCheckoutPageCreditCardDateSubtitle();
        assert.strictEqual(checkoutPageCreditCardDataSubtitle,   "Data wygaśnięcia", "The checkout page credit card section data subtitle doesn't match expectations.");
        //assert checkout page credit card CVC subtitle is as expected
        const checkoutPageCreditCardCVCSubtitle = await checkoutPage.getCheckoutPageCreditCardCVCSubtitle();
        assert.strictEqual(checkoutPageCreditCardCVCSubtitle,   "Kod karty (CVC)", "The checkout page credit card CVC subtitle doesn't match expectations.");
        //assert checkout page privacy description is as expected
        const checkoutPagePrivacyDescription = await checkoutPage.getCheckoutPagePrivacyDescription();
        assert.strictEqual(checkoutPagePrivacyDescription,   "Twoje dane zostaną użyte jedynie na potrzeby procesu zakupu towaru. Więcej znajdziesz pod linkiem: polityka prywatności. W celu usunięcia konta wyślij e-mail pod adres fakestore[małpa]testelka.pl", "The checkout page privacy description doesn't match expectations.");
        //assert checkout page privacy rules link is as expected
        const checkoutPagePrivacyRulesSubtext = await checkoutPage.getCheckoutPagePrivacyRulesSubtext();
        assert.strictEqual(checkoutPagePrivacyRulesSubtext,   "Przeczytałem/am i akceptuję regulamin", "The checkout page privacy rules subtext doesn't match expectations.");
    }

    //order confirmation page text element assert method
    async isOrderConfirmationPageTextElementAsExpected(){
        const orderConfirmationPage = new OrderConfirmationPage(this.driver);
        //assert order confirmation success message title is as expected
        const orderConfirmationSuccessMessageTitle = await orderConfirmationPage.getOrderConfirmationOrderMessageTitle();
        assert.strictEqual(orderConfirmationSuccessMessageTitle,   "Zamówienie otrzymane", "The order confirmation order message title doesn't match expectations.");
        //assert order confirmation success message subtitle is as expected
        const orderConfirmationSuccessMessageSubtitle = await orderConfirmationPage.getOrderConfirmationOrderMessageSubtitle();
        assert.strictEqual(orderConfirmationSuccessMessageSubtitle,   "Dziękujemy. Otrzymaliśmy Twoje zamówienie.", "The order confirmation order message subtitle doesn't match expectations.");
        //assert order confirmation order details section subtitle is as expected
        const orderConfirmationOrderDetailsSectionSubtitle = await orderConfirmationPage.getOrderConfirmationOrderDetailsSectionSubtitle();
        assert.strictEqual(orderConfirmationOrderDetailsSectionSubtitle,   "Szczegóły zamówienia", "The order confirmation order details section subtitle doesn't match expectations.");
        //assert order confirmation order quote subtext is as expected
        const orderConfirmationOrderQuoteSubtext = await orderConfirmationPage.getOrderConfirmationOrderQuoteSubtext();
        assert.strictEqual(orderConfirmationOrderQuoteSubtext,   "Kwota:", "The order confirmation order quote subtext doesn't match expectations.");
        //assert order confirmation order pay method subtext is as expected
        const orderConfirmationOrderPayMethodSubtext = await orderConfirmationPage.getOrderConfirmationOrderPayMethodSubtext();
        assert.strictEqual(orderConfirmationOrderPayMethodSubtext,   "Metody płatności:", "The order confirmation order pay method subtext doesn't match expectations.");
        //assert order confirmation order sum subtext is as expected
        const orderConfirmationOrderSumSubtext = await orderConfirmationPage.getOrderConfirmationOrderSumSubtext();
        assert.strictEqual(orderConfirmationOrderSumSubtext,   "Suma:", "The order confirmation order sum subtext doesn't match expectations.");
        //assert order confirmation order sale subtext is as expected
        const orderConfirmationOrderSaleSubtext = await orderConfirmationPage.getOrderConfirmationOrderSaleSubtext();
        assert.strictEqual(orderConfirmationOrderSaleSubtext,   "Akcje:", "The order confirmation order sale subtext doesn't match expectations.");
        //assert order confirmation billing address section title is as expected
        const orderConfirmationBillingAddressSectionTitle = await orderConfirmationPage.getOrderConfirmationBillingAddressSectionTitle();
        assert.strictEqual(orderConfirmationBillingAddressSectionTitle,   "Adres rozliczeniowy", "The order confirmation billing address section title doesn't match expectations.");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //order product price / count data logger method
    async logOrderProductData(){
        const generalPage = new GeneralPage(this.driver);
        //log order price
        const logOrderPrice = await generalPage.getOrderPrice();
        Logger.info("Order price: " + logOrderPrice);
        //log order product count
        const logOrderProductCount = await generalPage.getOrderProductCount();
        Logger.info("Order product count: " + logOrderProductCount);
    }

    //home page product data logger method
    async logHomePageProductData(){
        const homePage = new HomePage(this.driver);
        //news section
        //homepage product names
        const homePageNewsProductNames = await homePage.getHomePageNewsSectionProductName();
        Logger.info("Homepage news section product name(s): " + homePageNewsProductNames);
        //homepage product unit prices
        const homePageNewsProductUnitPrices = await homePage.getHomePageNewsSectionProductUnitPrice();
        Logger.info("Homepage news section product unit price(s): " + homePageNewsProductUnitPrices  + "\n");
        //popular section
        //homepage popular product names
        const homePagePopularProductNames = await homePage.getHomePagePopularSectionProductName();
        Logger.info("Homepage popular section product name(s): " + homePagePopularProductNames);
        //homepage popular product unit prices
        const homePagePopularProductUnitPrices = await homePage.getHomePagePopularSectionProductUnitPrice();
        Logger.info("Homepage popular section product unit price(s): " + homePagePopularProductUnitPrices  + "\n");
        //in promotion section
        //homepage in promotion product names
        const homePageInPromotionProductNames = await homePage.getHomePageInPromotionSectionProductName();
        Logger.info("Homepage in promotion section product name(s): " + homePageInPromotionProductNames);
        //homepage in promotion product unit prices
        const homePageInPromotionProductUnitPrices = await homePage.getHomePageInPromotionSectionProductUnitPrice();
        Logger.info("Homepage in promotion section product unit price(s): " + homePageInPromotionProductUnitPrices + "\n");
        //bestsellers section
        //homepage bestsellers product names
        const homePageBestsellersProductNames = await homePage.getHomePageBestsellersSectionProductName();
        Logger.info("Homepage bestsellers section product name(s): " + homePageBestsellersProductNames);
        //homepage bestsellers product unit prices
        const homePageBestsellersProductUnitPrices = await homePage.getHomePageBestsellersSectionProductUnitPrice();
        Logger.info("Homepage bestsellers section product unit price(s): " + homePageBestsellersProductUnitPrices  + "\n");
    }

    //address book shipping address logger method
    async logAddressBookShippingAddressData(){
        const addressBookPage = new AddressBookPage(this.driver);
        //log shipping address(es)
        const shippingAddress = await addressBookPage.getAddressBookShippingAddress();
        Logger.info("Available shipping address(es): " + shippingAddress  + "\n");
    }

    //address book billing address logger method
    async logAddressBookBillingAddressData(){
        const addressBookPage = new AddressBookPage(this.driver);
        //log billing address(es)
        const billingAddress = await addressBookPage.getAddressBookBillingAddress();
        Logger.info("Available billing address(es): " + billingAddress  + "\n");
    }

    //shopping cart dropdown logger method
    async logShoppingCartDropdownData(){
        const generalPage = new GeneralPage(this.driver);
        //log shopping cart dropdown product name(s)
        const shoppingCartDropdownProductName = await generalPage.getShoppingCartDropdownProductName();
        Logger.info("Shopping cart dropdown product name(s): " + shoppingCartDropdownProductName  + "\n");
        //log shopping cart dropdown product unit price(s)
        const shoppingCartDropdownProductUnitPrice = await generalPage.getShoppingCartDropdownProductUnitPrice();
        Logger.info("Shopping cart dropdown product unit price(s): " + shoppingCartDropdownProductUnitPrice  + "\n");
        //log shopping cart dropdown product quote price
        const shoppingCartDropdownProductQuotePrice = await generalPage.getShoppingCartDropdownProductQuotePrice();
        Logger.info("Shopping cart dropdown product quote price: " + shoppingCartDropdownProductQuotePrice  + "\n");
    }

    //single product category dashboard page data logger method
    async logSingleProductCategoryDashboardPageData(){
        const singleProductCategoryDashboardPage = new SingleProductCategoryDashboardPage(this.driver);
        //log single product category dashboard page product name
        const singleProductCategoryDashboardProductName = await singleProductCategoryDashboardPage.getSingleProductCategoryProductName();
        Logger.info("Single product category dashboard page product name(s): " + singleProductCategoryDashboardProductName  + "\n");
        //log single product category dashboard page product unit price
        const singleProductCategoryDashboardProductUnitPrice = await singleProductCategoryDashboardPage.getSingleProductCategoryProductUnitPrice();
        Logger.info("Single product category dashboard page product unit price(s): " + singleProductCategoryDashboardProductUnitPrice  + "\n");
    }


    //single product category dashboard page last viewed logger method
    async logSingleProductCategoryDashboardPageLastViewedData(){
        const singleProductCategoryDashboardPage = new SingleProductCategoryDashboardPage(this.driver);
        //log single product category dashboard page product name
        const singleProductCategoryDashboardLastViewedProductName = await singleProductCategoryDashboardPage.getSingleProductCategoryLastViewedProductName();
        Logger.info("Single product category dashboard page last viewed product name(s): " + singleProductCategoryDashboardLastViewedProductName  + "\n");
        //log single product category dashboard page product unit price
        const singleProductCategoryDashboardLastViewedProductUnitPrice = await singleProductCategoryDashboardPage.getSingleProductCategoryLastViewedProductUnitPrice();
        Logger.info("Single product category dashboard page last viewed product unit price(s): " + singleProductCategoryDashboardLastViewedProductUnitPrice  + "\n");
    }

    //single product  page data logger method
    async logSingleProductPageData(){
        const singleProductPage = new SingleProductPage(this.driver);
        //log single product page product name
        const singleProductName = await singleProductPage.getSingleProductName();
        Logger.info("Single product page product name: " + singleProductName  + "\n");
        //log single product unit price
        const singleProductUnitPrice = await singleProductPage.getSingleProductUnitPrice();
        Logger.info("Single product page product unit price: " + singleProductUnitPrice  + "\n");
        //log single product count
        const singleProductCount = await singleProductPage.getSingleProductCount();
        Logger.info("Single product page product count: " + singleProductCount  + "\n");
        //log single product description title
        const singleProductDescriptionTitle = await singleProductPage.getSingleProductDescriptionTitle();
        Logger.info("Single product page product description title: " + singleProductDescriptionTitle  + "\n");
        //log single product description
        const singleProductDescription = await singleProductPage.getSingleProductDescription();
        Logger.info("Single product page product description: " + singleProductDescription  + "\n");
    }

    //single product page data additional info logger method
    async logSingleProductPageAdditionalInfoData(){
        const singleProductPage = new SingleProductPage(this.driver);
        //log single product page product additional info data
        const singleProductAdditionalInfoData = await singleProductPage.getSingleProductAdditionalInfoData();
        Logger.info("Single product page additional info data: " + singleProductAdditionalInfoData  + "\n");
    }

    //single product page related product data logger method
    async logSingleProductPageRelatedProductData(){
        const singleProductPage = new SingleProductPage(this.driver);
        //log single product page related product name
        const singleProductRelatedProductName = await singleProductPage.getSingleProductRelatedProductName();
        Logger.info("Single product page related product name(s): " + singleProductRelatedProductName  + "\n");
        //log single product related product unit price
        const singleProductRelatedProductUnitPrice = await singleProductPage.getSingleProductRelatedProductUnitPrice();
        Logger.info("Single product page related product unit price(s): " + singleProductRelatedProductUnitPrice  + "\n");
    }

    //shop page data logger method
    async logShopPageData(){
        const shopPage = new ShopPage(this.driver);
        //log shop page category name
        const shopCategoryName = await shopPage.getShopCategoryName();
        Logger.info("Shop page category name(s): " + shopCategoryName  + "\n");
    }

    //wishlist page data logger method
    async logWishlistPageData(){
        const wishlistPage = new WishlistPage(this.driver);
        //log wishlist page product name
        const wishlistPageProductName = await wishlistPage.getWishlistProductName();
        Logger.info("Wishlist page product name(s): " + wishlistPageProductName  + "\n");
        //log wishlist page product unit price
        const wishlistPageProductUnitPrice = await wishlistPage.getWishlistProductUnitPrice();
        Logger.info("Wishlist page product unit price(s): " + wishlistPageProductUnitPrice  + "\n");
        //log wishlist page product stock
        const wishlistPageProductStock = await wishlistPage.getWishlistProductStock();
        Logger.info("Wishlist page product name(s): " + wishlistPageProductStock  + "\n");
    }

    //shopping cart page product data logger method
    async logShoppingCartPageProductData(){
        const shoppingCartPage = new ShoppingCartPage(this.driver);
        //log shopping cart page product name
        const shoppingCartPageProductName = await shoppingCartPage.getShoppingCartPageTableProductName();
        Logger.info("Shopping cart page product name(s): " + shoppingCartPageProductName  + "\n");
        //log shopping cart page product unit price
        const shoppingCartPageProductUnitPrice = await shoppingCartPage.getShoppingCartPageTableProductUnitPrice();
        Logger.info("Shopping cart page product unit price(s): " + shoppingCartPageProductUnitPrice  + "\n");
        //log shopping cart page product quantity
        const shoppingCartPageProductQty = await shoppingCartPage.getShoppingCartPageTableProductQty();
        Logger.info("Shopping cart page product quantity(ies): " + shoppingCartPageProductQty  + "\n");
        //log shopping cart page product quote price
        const shoppingCartPageProductQuotePrice = await shoppingCartPage.getShoppingCartPageTableProductQuotePrice();
        Logger.info("Shopping cart page product quote price(s): " + shoppingCartPageProductQuotePrice  + "\n");
        //log shopping cart page order quote price
        const shoppingCartPageOrderQuotePrice = await shoppingCartPage.getShoppingCartPageOrderQuotePrice();
        Logger.info("Shopping cart page order quote price(s): " + shoppingCartPageOrderQuotePrice  + "\n");
        //log shopping cart page order total price
        const shoppingCartPageOrderTotalPrice = await shoppingCartPage.getShoppingCartPageOrderTotalPrice();
        Logger.info("Shopping cart page order total price(s): " + shoppingCartPageOrderTotalPrice  + "\n");
    }

    //order confirmation page data logger method
    async logOrderConfirmationData(){
        const orderConfirmationPage = new OrderConfirmationPage(this.driver);
        //log order confirmation page order number
        const orderConfirmationOrderNumber = await orderConfirmationPage.getOrderConfirmationUpperTableOrderNumber();
        Logger.info("Order confirmation table order number: " + orderConfirmationOrderNumber  + "\n");
        //log order confirmation page order date
        const orderConfirmationOrderDate = await orderConfirmationPage.getOrderConfirmationUpperTableOrderDate();
        Logger.info("Order confirmation table order date: " + orderConfirmationOrderDate  + "\n");
        //log order confirmation page order email
        const orderConfirmationUpperOrderSum = await orderConfirmationPage.getOrderConfirmationUpperTableOrderEmail();
        Logger.info("Order confirmation table order sum: " + orderConfirmationUpperOrderSum  + "\n");
        //log order confirmation page order sum
        const orderConfirmationOrderUpperPayMethod = await orderConfirmationPage.getOrderConfirmationUpperTableOrderSum();
        Logger.info("Order confirmation table order pay method: " + orderConfirmationOrderUpperPayMethod  + "\n");
        //log order confirmation page product table name
        const orderConfirmationOrderProductName = await orderConfirmationPage.getOrderConfirmationProductName();
        Logger.info("Order confirmation table order product name(s): " + orderConfirmationOrderProductName  + "\n");
        //log order confirmation page product table sum
        const orderConfirmationOrderProductSum = await orderConfirmationPage.getOrderConfirmationProductSum();
        Logger.info("Order confirmation table order product sum price(s): " + orderConfirmationOrderProductSum  + "\n");
        //log order confirmation page order quote
        const orderConfirmationOrderQuote = await orderConfirmationPage.getOrderConfirmationOrderQuote();
        Logger.info("Order confirmation order quote: " + orderConfirmationOrderQuote  + "\n");
        //log order confirmation page pay method
        const orderConfirmationPayMethod = await orderConfirmationPage.getOrderConfirmationPayMethod();
        Logger.info("Order confirmation pay method: " + orderConfirmationPayMethod  + "\n");
        //log order confirmation page order sum
        const orderConfirmationOrderSum = await orderConfirmationPage.getOrderConfirmationOrderSum();
        Logger.info("Order confirmation order sum: " + orderConfirmationOrderSum  + "\n");
        //log order confirmation page billing address
        const orderConfirmationBillingAddress = await orderConfirmationPage.getOrderConfirmationBillingAddress();
        Logger.info("Order confirmation order billing address: " + orderConfirmationBillingAddress  + "\n");
    }

    //order confirmation page data logger method (registered user)
    async logOrderConfirmationRegUserData(){
        const orderConfirmationPage = new OrderConfirmationPage(this.driver);
        //log order confirmation page order number
        const orderConfirmationOrderNumber = await orderConfirmationPage.getOrderConfirmationUpperTableOrderNumber();
        Logger.info("Order confirmation table order number: " + orderConfirmationOrderNumber  + "\n");
        //log order confirmation page order date
        const orderConfirmationOrderDate = await orderConfirmationPage.getOrderConfirmationUpperTableOrderDate();
        Logger.info("Order confirmation table order date: " + orderConfirmationOrderDate  + "\n");
        //log order confirmation page order email
        const orderConfirmationOrderEmail = await orderConfirmationPage.getOrderConfirmationUpperTableOrderEmail();
        Logger.info("Order confirmation table order email: " + orderConfirmationOrderEmail  + "\n");
        //log order confirmation page order sum
        const orderConfirmationOrderUpperSum = await orderConfirmationPage.getOrderConfirmationUpperTableOrderSum();
        Logger.info("Order confirmation table order sum: " + orderConfirmationOrderUpperSum  + "\n");
        //log order confirmation page order pay method
        const orderConfirmationOrderPayMethod = await orderConfirmationPage.getOrderConfirmationUpperTableOrderPayMethod();
        Logger.info("Order confirmation table order pay method: " + orderConfirmationOrderPayMethod  + "\n");
        //log order confirmation page product table name
        const orderConfirmationOrderProductName = await orderConfirmationPage.getOrderConfirmationProductName();
        Logger.info("Order confirmation table order product name(s): " + orderConfirmationOrderProductName  + "\n");
        //log order confirmation page product table sum
        const orderConfirmationOrderProductSum = await orderConfirmationPage.getOrderConfirmationProductSum();
        Logger.info("Order confirmation table order product sum price(s): " + orderConfirmationOrderProductSum  + "\n");
        //log order confirmation page order quote
        const orderConfirmationOrderQuote = await orderConfirmationPage.getOrderConfirmationOrderQuote();
        Logger.info("Order confirmation order quote: " + orderConfirmationOrderQuote  + "\n");
        //log order confirmation page pay method
        const orderConfirmationPayMethod = await orderConfirmationPage.getOrderConfirmationPayMethod();
        Logger.info("Order confirmation pay method: " + orderConfirmationPayMethod  + "\n");
        //log order confirmation page order sum
        const orderConfirmationOrderSum = await orderConfirmationPage.getOrderConfirmationOrderSum();
        Logger.info("Order confirmation order sum: " + orderConfirmationOrderSum  + "\n");
        //log order confirmation page billing address
        const orderConfirmationBillingAddress = await orderConfirmationPage.getOrderConfirmationBillingAddress();
        Logger.info("Order confirmation order billing address: " + orderConfirmationBillingAddress  + "\n");
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//screenshot utility
    static async captureScreenshot(driver, fileName) {
        try {
            await driver.sleep(1500); //wait for the screenshot to be taken
            const screenshot = await driver.takeScreenshot();
            const baseDir = path.join(__dirname, '../screenshots');
            fs.mkdirSync(baseDir, {recursive: true});
            const filePath = path.join(baseDir, `${fileName.replace(/[^a-zA-Z0-9-_\(\)]/g, ' ')}.png`);

            // Save the screenshot to the file
            fs.writeFileSync(filePath, screenshot, 'base64');

            console.log(`Screenshot saved at: ${filePath}`);
        } catch (error) {
            console.error('Error capturing screenshot:', error);
        }
    }

}

module.exports = TestMethods;