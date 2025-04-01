const TestMethods = require('./utils/TestMethods');
const BaseTest = require('./utils/BaseTest');

describe('Add Shipping Address Page Tests', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function () {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    jest.setTimeout(110000) //timer for the whole single test run, otherwise throws a timeout error
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    describe('Valid Shipping Address Addition Tests', () => {

        //Test 004 -> valid add shipping address test (the webpage allows only single address creation)
        test("Valid Add Shipping Address Test", async function () {
            //navigate to 'Register/Login' dashboard page test
            await testMethods.navigateToRegisterLoginDashboardTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid edit user account test
            await testMethods.validEditAccountTest();
            //valid add shipping address test
            await testMethods.validAddShippingAddressTest();
        });

    });

    describe('Invalid Shipping Address Addition Tests', () => {

        describe('Invalid Shipping Address Addition Tests - No Singular Input', () => {

            //Test 004a -> invalid add shipping address test - no user first name
            test("Invalid Add Shipping Address Test - No First Name", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid edit user account test
                await testMethods.validEditAccountTest();
                //invalid add shipping address test - no first name
                await testMethods.invalidAddShippingAddressNoFirstNameTest();
            });

            //Test 004b -> invalid add shipping address test - no user last name
            test("Invalid Add Shipping Address Test - No Last Name", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid edit user account test
                await testMethods.validEditAccountTest();
                //invalid add shipping address test - no last name
                await testMethods.invalidAddShippingAddressNoLastNameTest();
            });

            //Test 004c -> invalid add shipping address test - no user country
            test("Invalid Add Shipping Address Test - No Country", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid edit user account test
                await testMethods.validEditAccountTest();
                //invalid add shipping address test - no user country
                await testMethods.invalidAddShippingAddressNoCountryTest();
            });

            //Test 004d -> invalid add shipping address test - no user state
            test("Invalid Add Shipping Address Test - No State", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid edit user account test
                await testMethods.validEditAccountTest();
                //invalid add shipping address test - no user state
                await testMethods.invalidAddShippingAddressNoStateTest();
            });

            //Test 004e -> invalid add shipping address test - no user street
            test("Invalid Add Shipping Address Test - No Street", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid edit user account test
                await testMethods.validEditAccountTest();
                //invalid add shipping address test - no user street
                await testMethods.invalidAddShippingAddressNoStreetTest();
            });

            //Test 004f -> invalid add shipping address test - no user post code
            test("Invalid Add Shipping Address Test - No Post Code", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid edit user account test
                await testMethods.validEditAccountTest();
                //invalid add shipping address test - no user post code
                await testMethods.invalidAddShippingAddressNoPostCodeTest();
            });

            //Test 004g -> invalid add shipping address test - no user city
            test("Invalid Add Shipping Address Test - No City", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid edit user account test
                await testMethods.validEditAccountTest();
                //invalid add shipping address test - no user city
                await testMethods.invalidAddShippingAddressNoCityTest();
            });

        });

        describe('Invalid Shipping Address Addition Tests - Too Short Singular Input', () => {

            //Test 004h -> invalid add shipping address test - too short user first name (1 char) (too short first name gets accepted - test has failed)
            test("Invalid Add Shipping Address Test - Too Short First Name", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid edit user account test
                await testMethods.validEditAccountTest();
                //invalid add shipping address test - too short first name (1 char)
                await testMethods.invalidAddShippingAddressTooShortFirstNameTest();
            });

            //Test 004i -> invalid add shipping address test - too short user last name (1 char) (too short last name gets accepted - test has failed)
            test("Invalid Add Shipping Address Test - Too Short Last Name", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid edit user account test
                await testMethods.validEditAccountTest();
                //invalid add shipping address test - too short last name (1 char)
                await testMethods.invalidAddShippingAddressTooShortLastNameTest();
            });

            //Test 004j -> invalid add shipping address test - too short user street (1 char) (too short street gets accepted - test has failed)
            test("Invalid Add Shipping Address Test - Too Short Street", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid edit user account test
                await testMethods.validEditAccountTest();
                //invalid add shipping address test - too short user street (1 char)
                await testMethods.invalidAddShippingAddressTooShortStreetTest();
            });

            //Test 004k -> invalid add shipping address test - too short user post code (1 char) (too short post code gets accepted - test has failed)
            test("Invalid Add Shipping Address Test - Too Short Post Code", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid edit user account test
                await testMethods.validEditAccountTest();
                //invalid add shipping address test - too short user post code (1 digit)
                await testMethods.invalidAddShippingAddressTooShortPostCodeTest();
            });

            //Test 004l -> invalid add shipping address test - too short user city (1 char) (too short city gets accepted - test has failed)
            test("Invalid Add Shipping Address Test - Too Short City", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid edit user account test
                await testMethods.validEditAccountTest();
                //invalid add shipping address test - too short user city (1 char)
                await testMethods.invalidAddShippingAddressTooShortCityTest();
            });

        });

        describe('Invalid Shipping Address Addition Tests - Too Long Singular Input', () => {

            //Test 004m -> invalid add shipping address test - too long user first name (100 chars) (too long first name gets accepted - test has failed)
            test("Invalid Add Shipping Address Test - Too Long First Name", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid edit user account test
                await testMethods.validEditAccountTest();
                //invalid add shipping address test - too long first name (100 chars)
                await testMethods.invalidAddShippingAddressTooLongFirstNameTest();
            });

            //Test 004n -> invalid add shipping address test - too long user last name (100 chars) (too long last name gets accepted - test has failed)
            test("Invalid Add Shipping Address Test - Too Long Last Name", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid edit user account test
                await testMethods.validEditAccountTest();
                //invalid add shipping address test - too long last name (100 chars)
                await testMethods.invalidAddShippingAddressTooLongLastNameTest();
            });

            //Test 004o -> invalid add shipping address test - too long user street (100 chars) (too long street gets accepted - test has failed)
            test("Invalid Add Shipping Address Test - Too Long Street", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid edit user account test
                await testMethods.validEditAccountTest();
                //invalid add shipping address test - too long user street (100 chars)
                await testMethods.invalidAddShippingAddressTooLongStreetTest();
            });

            //Test 004p -> invalid add shipping address test - too long user post code (25 digits)
            test("Invalid Add Shipping Address Test - Too Long Post Code", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid edit user account test
                await testMethods.validEditAccountTest();
                //invalid add shipping address test - too long user post code (25 digits)
                await testMethods.invalidAddShippingAddressTooLongPostCodeTest();
            });

            //Test 004q -> invalid add shipping address test - too long user city (100 chars) (too long city gets accepted - test has failed)
            test("Invalid Add Shipping Address Test - Too Long City", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid edit user account test
                await testMethods.validEditAccountTest();
                //invalid add shipping address test - too long user city (100 chars)
                await testMethods.invalidAddShippingAddressTooLongCityTest();
            });

        });

        describe('Invalid Shipping Address Addition Tests - Invalid Singular Input Format', () => {

            //Test 004r -> invalid add shipping address test - invalid user first name format (special symbols only) (invalid first name format gets accepted - test has failed)
            test("Invalid Add Shipping Address Test - Invalid First Name Format", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid edit user account test
                await testMethods.validEditAccountTest();
                //invalid add shipping address test - invalid first name format (special symbols only)
                await testMethods.invalidAddShippingAddressInvalidFirstNameFormatTest();
            });

            //Test 004s -> invalid add shipping address test - invalid user last name format (special symbols only) (invalid last name format gets accepted - test has failed)
            test("Invalid Add Shipping Address Test - Invalid Last Name Format", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid edit user account test
                await testMethods.validEditAccountTest();
                //invalid add shipping address test - invalid last name format (special symbols only)
                await testMethods.invalidAddShippingAddressInvalidLastNameFormatTest();
            });

            //Test 004t -> invalid add shipping address test - invalid user street format (special symbols only) (invalid street format gets accepted - test has failed)
            test("Invalid Add Shipping Address Test - Invalid Street Format", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid edit user account test
                await testMethods.validEditAccountTest();
                //invalid add shipping address test - invalid user street format (special symbols only)
                await testMethods.invalidAddShippingAddressInvalidStreetFormatTest();
            });

            //Test 004u -> invalid add shipping address test - invalid user post code format (special symbols only)
            test("Invalid Add Shipping Address Test - Invalid Post Code Format", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid edit user account test
                await testMethods.validEditAccountTest();
                //invalid add shipping address test - invalid user post code format (special symbols only)
                await testMethods.invalidAddShippingAddressInvalidPostCodeFormatTest();
            });

            //Test 004w -> invalid add shipping address test - invalid user city format (special symbols only) (invalid city format gets accepted - test has failed)
            test("Invalid Add Shipping Address Test - Invalid City Format", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid edit user account test
                await testMethods.validEditAccountTest();
                //invalid add shipping address test - invalid user city format (special symbols only)
                await testMethods.invalidAddShippingAddressInvalidCityFormatTest();
            });

        });

    });

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});