const TestMethods = require('./utils/TestMethods');
const BaseTest = require('./utils/BaseTest');

describe('Add Billing Address Page Tests', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function () {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    jest.setTimeout(110000) //timer for the whole single test run, otherwise throws a timeout error
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    describe('Valid Billing Address Addition Test', () => {

        //Test 005 -> valid add billing address test
        test("Valid Add Billing Address Test", async function () {
            //navigate to 'Register/Login' dashboard page test
            await testMethods.navigateToRegisterLoginDashboardTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid edit user account test
            await testMethods.validEditAccountTest();
            //valid add billing address test
            await testMethods.validAddBillingAddressTest();
        });

    });

    describe('Invalid Billing Address Addition Tests', () => {

        describe('Invalid Billing Address Addition Tests - No Singular Input', () => {

            //Test 005a -> invalid add billing address test - no user first name
            test("Invalid Add Billing Address Test - No First Name", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid edit user account test
                await testMethods.validEditAccountTest();
                //invalid add billing address test - no first name
                await testMethods.invalidAddBillingAddressNoFirstNameTest();
            });

            //Test 005b -> invalid add billing address test - no user last name
            test("Invalid Add Billing Address Test - No Last Name", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid edit user account test
                await testMethods.validEditAccountTest();
                //invalid add billing address test - no last name
                await testMethods.invalidAddBillingAddressNoLastNameTest();
            });

            //Test 005c -> invalid add billing address test - no user country
            test("Invalid Add Billing Address Test - No Country", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid edit user account test
                await testMethods.validEditAccountTest();
                //invalid add billing address test - no country
                await testMethods.invalidAddBillingAddressNoCountryTest();
            });

            //Test 005d -> invalid add billing address test - no user state
            test("Invalid Add Billing Address Test - No State", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid edit user account test
                await testMethods.validEditAccountTest();
                //invalid add billing address test - no state
                await testMethods.invalidAddBillingAddressNoStateTest();
            });

            //Test 005e -> invalid add billing address test - no user street
            test("Invalid Add Billing Address Test - No Street", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid edit user account test
                await testMethods.validEditAccountTest();
                //invalid add billing address test - no street
                await testMethods.invalidAddBillingAddressNoStreetTest();
            });

            //Test 005f -> invalid add billing address test - no user city
            test("Invalid Add Billing Address Test - No City", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid edit user account test
                await testMethods.validEditAccountTest();
                //invalid add billing address test - no city
                await testMethods.invalidAddBillingAddressNoCityTest();
            });

            //Test 005g -> invalid add billing address test - no user post code
            test("Invalid Add Billing Address Test - No Post Code", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid edit user account test
                await testMethods.validEditAccountTest();
                //invalid add billing address test - no post code
                await testMethods.invalidAddBillingAddressNoPostCodeTest();
            });

            //Test 005h -> invalid add billing address test - no user phone
            test("Invalid Add Billing Address Test - No Phone", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid edit user account test
                await testMethods.validEditAccountTest();
                //invalid add billing address test - no phone
                await testMethods.invalidAddBillingAddressNoPhoneTest();
            });

            //Test 005i -> invalid add billing address test - no user email
            test("Invalid Add Billing Address Test - No Email", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid edit user account test
                await testMethods.validEditAccountTest();
                //invalid add billing address test - no email
                await testMethods.invalidAddBillingAddressNoEmailTest();
            });

        });

        describe('Invalid Billing Address Addition Tests - Too Short Singular Input', () => {

            //Test 005j -> invalid add billing address test - too short user first name (1 char) (too short first name got accepted, test has failed)
            test("Invalid Add Billing Address Test - Too Short First Name", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid edit user account test
                await testMethods.validEditAccountTest();
                //invalid add billing address test - too short first name (1 char)
                await testMethods.invalidAddBillingAddressTooShortFirstNameTest();
            });

            //Test 005k -> invalid add billing address test - too short user last name (1 char) (too short last name got accepted, test has failed)
            test("Invalid Add Billing Address Test - Too Short Last Name", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid edit user account test
                await testMethods.validEditAccountTest();
                //invalid add billing address test - too short last name (1 char)
                await testMethods.invalidAddBillingAddressTooShortLastNameTest();
            });

            //Test 005l -> invalid add billing address test - too short user street (1 char) (too short street got accepted, test has failed)
            test("Invalid Add Billing Address Test - Too Short Street", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid edit user account test
                await testMethods.validEditAccountTest();
                //invalid add billing address test - too short street (1 char)
                await testMethods.invalidAddBillingAddressTooShortStreetTest();
            });

            //Test 005m -> invalid add billing address test - too short user city (1 char) (too short city got accepted, test has failed)
            test("Invalid Add Billing Address Test - Too Short City", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid edit user account test
                await testMethods.validEditAccountTest();
                //invalid add billing address test - too short city (1 char)
                await testMethods.invalidAddBillingAddressTooShortCityTest();
            });

            //Test 005n -> invalid add billing address test - too short user post code (3 digits)
            test("Invalid Add Billing Address Test - Too Short Post Code", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid edit user account test
                await testMethods.validEditAccountTest();
                //invalid add billing address test - too short post code (3 digits)
                await testMethods.invalidAddBillingAddressTooShortPostCodeTest();
            });

            //Test 005o -> invalid add billing address test - too short user phone (1 char) (too short phone got accepted, test has failed)
            test("Invalid Add Billing Address Test - Too Short Phone", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid edit user account test
                await testMethods.validEditAccountTest();
                //invalid add billing address test - too short phone (1 char)
                await testMethods.invalidAddBillingAddressTooShortPhoneTest();
            });

            //Test 005p -> invalid add billing address test - too short user email (1 char -> name, domain) (too short email got accepted, test has failed)
            test("Invalid Add Billing Address Test - Too Short Email", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid edit user account test
                await testMethods.validEditAccountTest();
                //invalid add billing address test - too short email (1 char -> name, domain)
                await testMethods.invalidAddBillingAddressTooShortEmailTest();
            });

        });

        describe('Invalid Billing Address Addition Tests - Too Long Singular Input', () => {

            //Test 005q -> invalid add billing address test - too long user first name (100 chars) (too long first name got accepted, test has failed)
            test("Invalid Add Billing Address Test - Too Long First Name", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid edit user account test
                await testMethods.validEditAccountTest();
                //invalid add billing address test - too long first name (100 chars)
                await testMethods.invalidAddBillingAddressTooLongFirstNameTest();
            });

            //Test 005r -> invalid add billing address test - too long user last name (100 chars) (too long last name got accepted, test has failed)
            test("Invalid Add Billing Address Test - Too Long Last Name", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid edit user account test
                await testMethods.validEditAccountTest();
                //invalid add billing address test - too long last name (100 chars)
                await testMethods.invalidAddBillingAddressTooLongLastNameTest();
            });

            //Test 005s -> invalid add billing address test - too long user street (100 chars) (too long street got accepted, test has failed)
            test("Invalid Add Billing Address Test - Too Long Street", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid edit user account test
                await testMethods.validEditAccountTest();
                //invalid add billing address test - too long street (100 chars)
                await testMethods.invalidAddBillingAddressTooLongStreetTest();
            });

            //Test 005t -> invalid add billing address test - too long user city (100 chars) (too long city got accepted, test has failed)
            test("Invalid Add Billing Address Test - Too Long City", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid edit user account test
                await testMethods.validEditAccountTest();
                //invalid add billing address test - too long city (100 chars)
                await testMethods.invalidAddBillingAddressTooLongCityTest();
            });

            //Test 005u -> invalid add billing address test - too long user post code (25 digits)
            test("Invalid Add Billing Address Test - Too Long Post Code", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid edit user account test
                await testMethods.validEditAccountTest();
                //invalid add billing address test - too long post code (25 digits)
                await testMethods.invalidAddBillingAddressTooLongPostCodeTest();
            });

            //Test 005v -> invalid add billing address test - too long user phone (30 digits)
            test("Invalid Add Billing Address Test - Too Long Phone", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid edit user account test
                await testMethods.validEditAccountTest();
                //invalid add billing address test - too long phone (30 digits)
                await testMethods.invalidAddBillingAddressTooLongPhoneTest();
            });

            //Test 005w -> invalid add billing address test - too long user email (100 chars -> name, domain) (too long email got accepted, test has failed)
            test("Invalid Add Billing Address Test - Too Long Email", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid edit user account test
                await testMethods.validEditAccountTest();
                //invalid add billing address test - too long email (100 chars -> name, domain)
                await testMethods.invalidAddBillingAddressTooLongEmailTest();
            });

        });

        describe('Invalid Billing Address Addition Tests - Invalid Singular Input Format', () => {

            //Test 005x -> invalid add billing address test - invalid user first name format (special symbols only) (invalid first name format got accepted, test has failed)
            test("Invalid Add Billing Address Test - Invalid First Name Format", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid edit user account test
                await testMethods.validEditAccountTest();
                //invalid add billing address test - invalid user first name format (special symbols only)
                await testMethods.invalidAddBillingAddressInvalidFirstNameFormatTest();
            });

            //Test 005y -> invalid add billing address test - invalid user last name format (special symbols only) (invalid last name format got accepted, test has failed)
            test("Invalid Add Billing Address Test - Invalid Last Name Format", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid edit user account test
                await testMethods.validEditAccountTest();
                //invalid add billing address test - invalid user last name format (special symbols only)
                await testMethods.invalidAddBillingAddressInvalidLastNameFormatTest();
            });

            //Test 005z -> invalid add billing address test - invalid user street format (special symbols only) (invalid street format got accepted, test has failed)
            test("Invalid Add Billing Address Test - Invalid Street Format", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid edit user account test
                await testMethods.validEditAccountTest();
                //invalid add billing address test - invalid street format (special symbols only)
                await testMethods.invalidAddBillingAddressInvalidStreetFormatTest();
            });

            //Test 005aa -> invalid add billing address test - invalid user city format (special symbols only) (invalid city format got accepted, test has failed)
            test("Invalid Add Billing Address Test - Invalid City Format", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid edit user account test
                await testMethods.validEditAccountTest();
                //invalid add billing address test - invalid user city format (special symbols only)
                await testMethods.invalidAddBillingAddressInvalidCityFormatTest();
            });

            //Test 005ab -> invalid add billing address test - invalid user post code format (special symbols only)
            test("Invalid Add Billing Address Test - Invalid Post Code Format", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid edit user account test
                await testMethods.validEditAccountTest();
                //invalid add billing address test - invalid user post code format (special symbols only)
                await testMethods.invalidAddBillingAddressInvalidPostCodeFormatTest();
            });

            //Test 005ac -> invalid add billing address test - invalid user phone format (special symbols only)
            test("Invalid Add Billing Address Test - Invalid Phone Format", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid edit user account test
                await testMethods.validEditAccountTest();
                //invalid add billing address test - invalid user phone format (special symbols only)
                await testMethods.invalidAddBillingAddressInvalidPhoneFormatTest();
            });

            //Test 005ad -> invalid add billing address test - invalid user email format (missing '@')
            test("Invalid Add Billing Address Test - Invalid Email Format", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid edit user account test
                await testMethods.validEditAccountTest();
                //invalid add billing address test - invalid user email format (missing '@')
                await testMethods.invalidAddBillingAddressInvalidEmailFormatTest();
            });

        });

        describe('Invalid Billing Address Addition Tests - Pre-Existing Singular Input', () => {

            //Test 005ae -> invalid add billing address test - existing user email (used beforehand in manual testing) (invalid email format error doesn't get triggered, test has failed)
            test("Invalid Add Billing Address Test - Existing Email", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid edit user account test
                await testMethods.validEditAccountTest();
                //invalid add billing address test - existing user email (used beforehand in manual testing)
                await testMethods.invalidAddBillingAddressExistingEmailTest();
            });

        });

    });

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});