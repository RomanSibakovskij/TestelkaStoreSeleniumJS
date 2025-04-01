const TestMethods = require('./utils/TestMethods');
const BaseTest = require('./utils/BaseTest');

describe('Wishlist Page Tests', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function () {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    jest.setTimeout(180000) //timer for the whole single test run, otherwise throws a timeout error
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    describe("Home Page Promotion Category Product Addition To Cart From Wishlist (Guest) Test", () => {

        //Test 014 -> home page promotion category product (Vacation in Blooming Cherry Land) addition to cart test (as a guest)
        test("Home Page Promotion Product (Vacation in Blooming Cherry Land) Addition To Cart From Wishlist Test (as a guest)", async function () {
            //home page promotion product (Vacation in Blooming Cherry Land) addition to wishlist test (as a guest)
            await testMethods.addVacationBloomingCherryLandProductToWishlistGuestTest();
            //home page promotion category product (Vacation in Blooming Cherry Land) addition to cart test (as a guest)
            await testMethods.addProductToCartFromWishlistTest();
        });

    });

    describe("Sailing Category Product Addition To Cart (Registered User) From Wishlist Test", () => {

        //Test 014a -> bestseller category product (Egipt - El Gouna) addition to cart test (as a registered user)
        test("Bestseller Category Product (Egipt - El Gouna) Addition To Cart From Wishlist Test (as a registered user)", async function () {
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
            //home page bestseller category product (Vacation in Blooming Cherry Land) addition to cart test (as a registered user)
            await testMethods.addProductToCartFromWishlistTest();
        });

    });

    describe("Home Page Promotion Category Product Removal From Wishlist (Guest) Test", () => {

        //Test 014 -> home page promotion category product (Vacation in Blooming Cherry Land) removal from wishlist test (as a guest)
        test("Home Page Promotion Product (Vacation in Blooming Cherry Land) Addition To Cart From Wishlist Test (as a guest)", async function () {
            //home page promotion product (Vacation in Blooming Cherry Land) addition to wishlist test (as a guest)
            await testMethods.addVacationBloomingCherryLandProductToWishlistGuestTest();
            //home page promotion category product (Vacation in Blooming Cherry Land) removal from wishlist test (as a guest)
            await testMethods.removeProductFromWishlistTest();
        });

    });


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});


