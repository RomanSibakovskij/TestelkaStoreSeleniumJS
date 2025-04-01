const TestMethods = require('./utils/TestMethods');
const BaseTest = require('./utils/BaseTest');

describe('Register/Login Dashboard Page Tests', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function () {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    jest.setTimeout(110000) //timer for the whole single test run, otherwise throws a timeout error
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    describe('Valid Account Creation Test', () => {

        //Test 002 -> valid user account creation test
        test("Valid User Account Creation Test", async function () {
            //navigate to 'Register/Login' dashboard page test
            await testMethods.navigateToRegisterLoginDashboardTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
        });

    });

    describe('Invalid Account Creation Tests', () => {

        describe('Invalid Account Creation Tests - No Singular Input', () => {

            //Test 002a -> invalid user account creation test - no register email
            test("Invalid User Account Creation Test - No Register Email", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //invalid user account creation test - no register email
                await testMethods.invalidUserAccountCreationNoEmailTest();
            });

            //Test 002b -> invalid user account creation test - no register password
            test("Invalid User Account Creation Test - No Register Password", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //invalid user account creation test - no register password
                await testMethods.invalidUserAccountCreationNoPasswordTest();
            });

        });

        describe('Invalid Account Creation Tests - Too Short Singular Input', () => {

            //Test 002c -> invalid user account creation test - too short register email (1 char -> name, domain) (user email gets accepted -> test has failed)
            test("Invalid User Account Creation Test - Too Short Register Email", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //invalid user account creation test - too short register email
                await testMethods.invalidUserAccountCreationTooShortEmailTest();
            });

            //Test 002d -> invalid user account creation test - too short register password (11 chars -> single chars (different chars will pass the password))
            test("Invalid User Account Creation Test - Too Short Register Password", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //invalid user account creation test - too short register password
                await testMethods.invalidUserAccountCreationTooShortPasswordTest();
            });

        });

        describe('Invalid Account Creation Tests - Too Long Singular Input', () => {

            //Test 002e -> invalid user account creation test - too long register email (100 chars -> name, domain)
            test("Invalid User Account Creation Test - Too Long Register Email", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //invalid user account creation test - too long register email
                await testMethods.invalidUserAccountCreationTooLongEmailTest();
            });

            //Test 002f -> invalid user account creation test - too long register password (100 chars) (password got accepted -> test has failed)
            test("Invalid User Account Creation Test - Too Long Register Password", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //invalid user account creation test - too long register password
                await testMethods.invalidUserAccountCreationTooLongPasswordTest();
            });

        });

        describe('Invalid Account Creation Test - Used Singular Input', () => {

            //Test 002g -> invalid user account creation test - used register email (used beforehand in manual testing)
            test("Invalid User Account Creation Test - Used Register Email", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //invalid user account creation test - used register email
                await testMethods.invalidUserAccountCreationUsedEmailTest();
            });

        });

        describe('Invalid Account Creation Test - Invalid Singular Input Format', () => {

            //Test 002h -> invalid user account creation test - invalid register email input format (missing '@') (invalid email input error doesn't get triggered but the email doesn't get accepted -> test has passed)
            test("Invalid User Account Creation Test - Invalid Register Email Input Format", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //invalid user account creation test - invalid register email format (missing '@')
                await testMethods.invalidUserAccountCreationInvalidEmailFormatTest();
            });

        });

        describe('User Account Removal Test', () => {

            //Test 002i -> user account removal test
            test("User Account Removal Test", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //user account removal test
                await testMethods.userAccountRemovalTest();
            });

        });

    });

    describe('Valid User Logout Test', () => {

        //Test 006 -> valid user account logout test
        test("Valid User Account Logout Test", async function () {
            //navigate to 'Register/Login' dashboard page test
            await testMethods.navigateToRegisterLoginDashboardTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid edit user account test
            await testMethods.validEditAccountTest();
            //valid add billing address test
            await testMethods.validAddBillingAddressTest();
            //valid add shipping address test
            await testMethods.validAddShippingAddressTest();
            //valid user account logout test
            await testMethods.validAccountLogoutTest();
        });

    });

    describe('Valid User Login Tests', () => {

        //Test 007 -> valid user account login test
        test("Valid User Account Login Test", async function () {
            //navigate to 'Register/Login' dashboard page test
            await testMethods.navigateToRegisterLoginDashboardTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid edit user account test
            await testMethods.validEditAccountTest();
            //valid add shipping address test
            await testMethods.validAddShippingAddressTest();
            //valid user account logout test
            await testMethods.validAccountLogoutTest();
            //valid user account login test
            await testMethods.validUserLoginTest();
        });

        //Test 007a -> valid user account (with edited email) login test
        test("Valid User Account (With Edited Email) Login Test", async function () {
            //navigate to 'Register/Login' dashboard page test
            await testMethods.navigateToRegisterLoginDashboardTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid edit user account (with edited email) test
            await testMethods.validEditAccountWithEmailTest();
            //valid add shipping address test
            await testMethods.validAddShippingAddressTest();
            //valid user account logout test
            await testMethods.validAccountLogoutTest();
            //valid user account (edited email) login test
            await testMethods.validUserLoginEditedEmailTest();
        });

        //Test 007b -> valid user account (with edited password) login test
        test("Valid User Account (With Edited Password) Login Test", async function () {
            //navigate to 'Register/Login' dashboard page test
            await testMethods.navigateToRegisterLoginDashboardTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid edit user account (with edited password) test
            await testMethods.validEditAccountWithPasswordTest();
            //valid add shipping address test
            await testMethods.validAddShippingAddressTest();
            //valid user account logout test
            await testMethods.validAccountLogoutTest();
            //valid user account (edited password) login test
            await testMethods.validUserLoginEditedPasswordTest();
        });

        //Test 007c -> valid user account (with valid username) login test
        test("Valid User Account (With Valid Username) Login Test", async function () {
            //navigate to 'Register/Login' dashboard page test
            await testMethods.navigateToRegisterLoginDashboardTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid edit user account test
            await testMethods.validEditAccountTest();
            //valid add shipping address test
            await testMethods.validAddShippingAddressTest();
            //valid user account logout test
            await testMethods.validAccountLogoutTest();
            //valid user account (valid username) login test
            await testMethods.validUserLoginWithUsernameTest();
        });

        //Test 007d -> valid user account (with edited username) login test
        test("Valid User Account (With Edited Username) Login Test", async function () {
            //navigate to 'Register/Login' dashboard page test
            await testMethods.navigateToRegisterLoginDashboardTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid edit user account (with edited username) test
            await testMethods.validEditAccountWithEditedUsernameTest();
            //valid add shipping address test
            await testMethods.validAddShippingAddressTest();
            //valid user account logout test
            await testMethods.validAccountLogoutTest();
            //valid user account (valid edited username) login test
            await testMethods.validUserLoginWithEditedUsernameTest();
        });

        //Test 007e -> valid user account (with edited billing email) login test (login failed)
        test("Valid User Account (With Edited Billing Email) Login Test", async function () {
            //navigate to 'Register/Login' dashboard page test
            await testMethods.navigateToRegisterLoginDashboardTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid edit user account test
            await testMethods.validEditAccountTest();
            //valid add billing address test
            await testMethods.validAddBillingAddressWithEditedEmailTest();
            //valid user account logout test
            await testMethods.validAccountLogoutTest();
            //valid user account (valid edited billing email) login test
            await testMethods.validUserLoginWithEditedBillingEmailTest();
        });


    });

    describe('Invalid User Login Tests', () => {

        describe('Invalid User Login Tests - No Singular Input', () => {

            //Test 007f -> invalid user account login test - no login email/username
            test("Invalid User Account Login Test - No Login Email or Username", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid edit user account test
                await testMethods.validEditAccountTest();
                //valid add shipping address test
                await testMethods.validAddShippingAddressTest();
                //valid user account logout test
                await testMethods.validAccountLogoutTest();
                //invalid user account login test - no login email/username
                await testMethods.invalidUserNoLoginEmailOrUsernameTest();
            });

            //Test 007g -> invalid user account login test - no login password
            test("Valid User Account Login Test - No Login Password", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid edit user account test
                await testMethods.validEditAccountTest();
                //valid add shipping address test
                await testMethods.validAddShippingAddressTest();
                //valid user account logout test
                await testMethods.validAccountLogoutTest();
                //invalid user account login test - no login password
                await testMethods.invalidUserNoLoginPasswordTest();
            });

        });

        describe('Invalid User Login Tests - Invalid Singular Input', () => {

            //Test 007h -> invalid user account login test - invalid login email
            test("Invalid User Account Login Test - Invalid Login Email", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid edit user account test
                await testMethods.validEditAccountTest();
                //valid add shipping address test
                await testMethods.validAddShippingAddressTest();
                //valid user account logout test
                await testMethods.validAccountLogoutTest();
                //invalid user account login test - invalid login email
                await testMethods.invalidUserLoginEmailTest();
            });

            //Test 007i -> invalid user account login test - invalid login username
            test("Invalid User Account Login Test - Invalid Login Username", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid edit user account test
                await testMethods.validEditAccountTest();
                //valid add shipping address test
                await testMethods.validAddShippingAddressTest();
                //valid user account logout test
                await testMethods.validAccountLogoutTest();
                //invalid user account login test - invalid login username
                await testMethods.invalidUserLoginUsernameTest();
            });

            //Test 007j -> invalid user account login test - invalid login password
            test("Valid User Account Login Test - Invalid Login Password", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid edit user account test
                await testMethods.validEditAccountTest();
                //valid add shipping address test
                await testMethods.validAddShippingAddressTest();
                //valid user account logout test
                await testMethods.validAccountLogoutTest();
                //invalid user account login test - invalid login password
                await testMethods.invalidUserLoginPasswordTest();
            });

        });

    });



    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});