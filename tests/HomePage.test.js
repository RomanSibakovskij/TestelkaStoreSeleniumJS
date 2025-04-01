const TestMethods = require('./utils/TestMethods');
const BaseTest = require('./utils/BaseTest');

describe('Home Page Tests', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function () {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    jest.setTimeout(140000) //timer for the whole single test run, otherwise throws a timeout error
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    describe("Navigate to 'Register/Login' Dashboard Page Test", () => {

        //Test 001 -> navigate to 'Register/Login' dashboard page test
        test("Navigate to 'Register/Login' Dashboard Page Test", async function () {
            await testMethods.navigateToRegisterLoginDashboardTest();
        });

    });

    describe("Home Page Product Addition To Cart (Guest) Test", () => {

        //Test 008 -> home page promotion product (Ferraty Climbing) addition to cart test (as a guest)
        test("Home Page Promotion Product (Ferraty Climbing) Addition To Cart Test (as a guest)", async function () {
            await testMethods.addFerratyClimbingProductToCartGuestTest();
        });

    });

    describe("Home Page Product Addition To Cart (Registered User) Test", () => {

        //Test 008a -> home page news product (Lanzaroth Windsurfing) addition to cart test (as a registered user)
        test("Home Page News Product (Lanzaroth Windsurfing) Addition To Cart Test (as a registered user)", async function () {
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
            //home page news product (Lanzaroth Windsurfing) addition to cart test (as a registered user)
            await testMethods.addLanzarothWindsurfingProductToCartTest();
        });

    });

    describe("Searched Product/s Addition To Cart (Guest) Test", () => {

        //Test 009 -> searched product (Windsurfing in Karpathos) addition to cart test (as a guest)
        test("Searched Product (Windsurfing in Karpathos) Addition To Cart Test (as a guest)", async function () {
            await testMethods.addSearchedProductToCartGuestTest();
        });

        //Test 009a -> multiple searched products (Windsurfing in Karpathos) addition to cart test (as a guest)
        test("Multiple Searched Products (Windsurfing in Karpathos) Addition To Cart Test (as a guest)", async function () {
            await testMethods.addMultipleSearchedProductToCartGuestTest();
        });

    });

    describe("Searched Product/s Addition To Cart (Registered User) Test", () => {

        //Test 009b -> searched product (Wspinaczka Island Peak) addition to cart test (as a registered user)
        test("Searched Product (Wspinaczka Island Peak) Addition To Cart Test (as a registered user)", async function () {
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
            //searched product (Wspinaczka Island Peak) addition to cart test (as a registered user)
            await testMethods.addSearchedProductToCartTest();
        });

        //Test 009c -> multiple searched products (Wspinaczka Island Peak) addition to cart test (as a guest)
        test("Multiple Searched Products (Wspinaczka Island Peak) Addition To Cart Test (as a registered user)", async function () {
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
            //multiple searched products (Wspinaczka Island Peak) addition to cart test (as a registered user)
            await testMethods.addMultipleSearchedProductsToCartTest();
        });

    });


    describe("Home Page Product Addition To Wishlist (Guest) Test", () => {

        //Test 010 -> home page promotion product (Vacation in Blooming Cherry Land) addition to wishlist test (as a guest)
        test("Home Page Promotion Product (Vacation in Blooming Cherry Land) Addition To Wishlist Test (as a guest)", async function () {
            await testMethods.addVacationBloomingCherryLandProductToWishlistGuestTest();
        });

    });

    describe("Home Page Product Addition To Wishlist (Registered User) Test", () => {

        //Test 010a -> home page bestseller product (Egipt - El Gouna) addition to cart test (as a registered user)
        test("Home Page Bestseller Product (Egipt - El Gouna) Addition To Cart Test (as a registered user)", async function () {
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
            //home page bestseller product (Egipt - El Gouna) addition to cart test (as a registered user)
            await testMethods.addEgiptElGounaProductToWishlistTest();
        });

    });

    describe("Home Page Product Removal From Shopping Dropdown Cart Test", () => {

        //Test 011 -> home page promotion product (Ferraty Climbing) removal from shopping dropdown cart test (as a guest -> registered user will have the same output so only guest branch is tested)
        test("Home Page Promotion Product (Ferraty Climbing) Removal From Shopping Dropdown Cart Test (as a guest)", async function () {
            await testMethods.removeFerratyClimbingFromCartDropdownTest();
        });

    });

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});


