const TestMethods = require('./utils/TestMethods');
const BaseTest = require('./utils/BaseTest');

describe('Shopping Cart Page Tests', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function () {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    jest.setTimeout(180000) //timer for the whole single test run, otherwise throws a timeout error
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    describe("Home Page Product/s Addition To Checkout (Guest) Tests", () => {

        //Test 015 -> home page promotion product (Ferraty Climbing) addition to check out test (as a guest) -> both guest and registered user share the same addition to check out test method
        test("Home Page Single Promotion Product (Ferraty Climbing) Addition To Checkout Test (as a guest)", async function () {
            //home page promotion product (Ferraty Climbing) addition to cart test (as a guest)
            await testMethods.addFerratyClimbingProductToCartGuestTest();
            //home page promotion product (Ferraty Climbing) addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
        });

        //Test 015a -> home page multiple promotion products (Ferraty Climbing) addition to check out test (as a guest) (updated quantity in shopping cart page)
        test("Home Page Multiple Promotion Products (Ferraty Climbing) Addition To Checkout Test (as a guest)", async function () {
            //home page promotion product (Ferraty Climbing) addition to cart test (as a guest)
            await testMethods.addFerratyClimbingProductToCartGuestTest();
            //home page multiple promotion products (Ferraty Climbing) addition to check out test (as a guest)
            await testMethods.addMultipleProductsToCheckoutTest();
        });

    });

    describe("Home Page Product/s Addition To Checkout (Registered User) Tests", () => {

        //Test 015b -> home page news product (Lanzaroth Windsurfing) addition to check out test (as a registered user)
        test("Home Page Single News Product (Lanzaroth Windsurfing) Addition To Checkout Test (as a registered user)", async function () {
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
            //home page news product (Lanzaroth Windsurfing) addition to check out test (as a registered user)
            await testMethods.addProductToCheckoutTest();
        });

        //Test 015c -> home page multiple news products (Lanzaroth Windsurfing) addition to check out test (as a registered user) (quantity update in shopping cart page)
        test("Home Page Multiple News Product (Lanzaroth Windsurfing) Addition To Checkout Test (as a registered user)", async function () {
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
            //home page news product (Lanzaroth Windsurfing) addition to check out test (as a registered user) (quantity update in shopping cart page)
            await testMethods.addMultipleProductsToCheckoutTest();
        });

    });

    describe("Searched Product/s Addition To Checkout (Guest) Tests", () => {

        //Test 016 -> searched product (Windsurfing in Karpathos) addition to check out test (as a guest)
        test("Searched Product (Windsurfing in Karpathos) Addition To Checkout Test (as a guest)", async function () {
            //searched product (Windsurfing in Karpathos) addition to cart test (as a guest)
            await testMethods.addSearchedProductToCartGuestTest();
            //searched product (Windsurfing in Karpathos) addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
        });

        //Test 016a -> multiple searched products (Windsurfing in Karpathos) addition to check out test (as a guest) (with product quantity update in shopping cart page)
        test("Multiple Searched Products (Windsurfing in Karpathos) Addition To Checkout Test (as a guest)", async function () {
            //multiple searched products (Windsurfing in Karpathos) addition to cart test (as a guest)
            await testMethods.addMultipleSearchedProductToCartGuestTest();
            //multiple searched products (Windsurfing in Karpathos) addition to check out test (as a guest) (with product quantity update in shopping cart page)
            await testMethods.addProductToCheckoutTest();
        });

    });

    describe("Searched Product/s Addition To Checkout (Registered User) Tests", () => {

        //Test 016b -> searched product (Wspinaczka Island Peak) addition to check out test (as a guest)
        test("Searched Product (Wspinaczka Island Peak) Addition To Checkout Test (as a registered user)", async function () {
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
            //searched product (Wspinaczka Island Peak) addition to check out test (as a registered user)
            await testMethods.addProductToCheckoutTest();
        });

        //Test 016c -> multiple searched products (Wspinaczka Island Peak) addition to check out test (as a guest) (with product quantity update in shopping cart page)
        test("Multiple Searched Products (Wspinaczka Island Peak) Addition To Checkout Test (as a registered user)", async function () {
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
            //multiple searched products (Wspinaczka Island Peak) addition to cart test (as a guest)
            await testMethods.addMultipleSearchedProductsToCartTest();
            //multiple searched products (Wspinaczka Island Peak) addition to check out test (as a registered user) (with product quantity update in shopping cart page)
            await testMethods.addMultipleProductsToCheckoutTest();
        });

    });

    describe("Yoga Category Product/s Addition To Checkout (Guest) Tests", () => {

        //Test 017 -> sailing category product (Yoga in Spain) addition to check out test (as a guest)
        test("Yoga Category Product (Yoga in Spain) Addition To Checkout Test (as a guest)", async function () {
            //sailing category product (Yoga in Spain) addition to cart test (as a guest)
            await testMethods.addYogaSpainProductToCartGuestTest();
            //sailing category product (Yoga in Spain) addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
        });

        //Test 017a -> multiple sailing category product (Yoga in Spain) addition to check out test (as a guest) (with product quantity update in shopping cart page)
        test("Multiple Yoga Category Products (Yoga in Spain) Addition To Checkout Test (as a guest)", async function () {
            //sailing category product (Yoga in Spain) addition to cart test (as a guest)
            await testMethods.addYogaSpainProductToCartGuestTest();
            //multiple sailing category products (Yoga in Spain) addition to check out test (as a guest) (with product quantity update in shopping cart page)
            await testMethods.addMultipleProductsToCheckoutTest();
        });

    });

    describe("Yoga Category Product/s Addition To Checkout (Registered User) Tests", () => {

        //Test 017b -> yoga category product (Yoga in Spain) addition to check out test (as a registered user)
        test("Yoga Category Product (Yoga in Spain) Addition To Checkout Test (as a registered user)", async function () {
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
            //yoga category product (Yoga in Spain) addition to cart test (as a registered user)
            await testMethods.addYogaSpainProductToCartTest();
            //yoga category product (Yoga in Spain) addition to check out test (as a registered user)
            await testMethods.addProductToCheckoutTest();
        });

        //Test 017c -> multiple yoga category products (Yoga in Spain) addition to check out test (as a registered user) (with product quantity update in shopping cart page)
        test("Multiple Yoga Category Products (Yoga in Spain) Addition To Checkout Test (as a registered user)", async function () {
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
            //yoga category product (Yoga in Spain) addition to cart test (as a registered user)
            await testMethods.addYogaSpainProductToCartTest();
            //multiple yoga category products (Yoga in Spain) addition to check out test (as a registered user) (with product quantity update in shopping cart page)
            await testMethods.addMultipleProductsToCheckoutTest();
        });

    });

    describe("Sailing Category Product/s Addition To Checkout (Guest) Tests", () => {

        //Test 018 -> sailing category product (Sailing course in Mazur) addition to check out test (as a guest)
        test("Sailing Category Product (Sailing course in Mazur) Addition To Checkout Test (as a guest)", async function () {
            //sailing category product (Sailing course in Mazur) addition to cart test (as a guest)
            await testMethods.addSailingCategoryProductToCartGuestTest();
            //sailing category product (Sailing course in Mazur) addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
        });

        //Test 018a -> multiple sailing category products (Sailing course in Mazur) addition to check out test (as a guest) (with product quantity update in shopping cart page)
        test("Multiple Sailing Category Products (Sailing course in Mazur) Addition To Checkout Test (as a guest)", async function () {
            //sailing category product (Sailing course in Mazur) addition to cart test (as a guest)
            await testMethods.addSailingCategoryProductToCartGuestTest();
            //multiple sailing category products (Sailing course in Mazur) addition to check out test (as a guest) (with product quantity update in shopping cart page)
            await testMethods.addMultipleProductsToCheckoutTest();
        });

    });

    describe("Sailing Category Product/s Addition To Checkout (Registered User) Tests", () => {

        //Test 018b -> sailing category product (Sailing course in Mazur) addition to check out test (as a registered user)
        test("Sailing Category Product (Sailing course in Mazur) Addition To Checkout Test (as a registered user)", async function () {
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
            //sailing category product (Sailing in Mazur) addition to cart test (as a registered user)
            await testMethods.addSailingCategoryProductToCartTest();
            //sailing category product (Sailing course in Mazur) addition to check out test (as a registered user)
            await testMethods.addProductToCheckoutTest();
        });

        //Test 018c -> multiple sailing category products (Sailing course in Mazur) addition to check out test (as a registered user) (with product quantity update in shopping cart page)
        test("Multiple Sailing Category Products (Sailing course in Mazur) Addition To Checkout Test (as a registered user)", async function () {
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
            //sailing category product (Sailing in Mazur) addition to cart test (as a registered user)
            await testMethods.addSailingCategoryProductToCartTest();
            //multiple sailing category products (Sailing course in Mazur) addition to check out test (as a guest) (with product quantity update in shopping cart page)
            await testMethods.addMultipleProductsToCheckoutTest();
        });

    });

    describe("Product Removal From Shopping Cart Page Test", () => {

        //Test 019 -> product (Sailing course in Mazur) removal from shopping cart page test (as a guest) (registered user will have the same output so only guest branch is tested)
        test("Sailing Category Product (Sailing course in Mazur) Removal From Shopping Cart Page Test", async function () {
            //sailing category product (Sailing course in Mazur) addition to cart test (as a guest)
            await testMethods.addSailingCategoryProductToCartGuestTest();
            //sailing category product (Sailing course in Mazur) removal from shopping cart page test (as a guest)
            await testMethods.removeProductFromShoppingCartTest();
        });

    });

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});


