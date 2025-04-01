const TestMethods = require('./utils/TestMethods');
const BaseTest = require('./utils/BaseTest');

describe('Order Confirmation Page Tests', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function () {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    jest.setTimeout(240000) //timer for the whole single test run, otherwise throws a timeout error
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    describe("Home Page Product/s Order Confirmation (Guest) Tests", () => {

        //Test 025 -> home page promotion product (Ferraty Climbing) order confirmation test (as a guest) -> both guest and registered user share the same addition to check out test method
        test("Home Page Single Promotion Product (Ferraty Climbing) Order Confirmation Test (as a guest)", async function () {
            //home page promotion product (Ferraty Climbing) addition to cart test (as a guest)
            await testMethods.addFerratyClimbingProductToCartGuestTest();
            //home page promotion product (Ferraty Climbing) addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
            //valid guest checkout confirmation test (all orders -> single/multiple products share the same method)
            await testMethods.validGuestOrderCheckoutTest();
            //valid order confirmation test (as a guest)
            await testMethods.placedOrderConfirmationTest();
        });

        //Test 025a -> home page multiple promotion products (Ferraty Climbing) order confirmation test (as a guest)
        test("Home Page Multiple Promotion Products (Ferraty Climbing) Order Confirmation Test (as a guest)", async function () {
            //home page promotion product (Ferraty Climbing) addition to cart test (as a guest)
            await testMethods.addFerratyClimbingProductToCartGuestTest();
            //home page multiple promotion products (Ferraty Climbing) addition to check out test (as a guest)
            await testMethods.addMultipleProductsToCheckoutTest();
            //valid guest checkout confirmation test (all orders -> single/multiple products share the same method)
            await testMethods.validGuestOrderCheckoutTest();
            //valid order confirmation test (as a guest)
            await testMethods.placedOrderConfirmationTest();
        });

    });

    describe("Home Page Product/s Order Confirmation (Registered User) Tests", () => {

        //Test 025b -> home page news product (Lanzaroth Windsurfing) order confirmation test (as a registered user)
        test("Home Page Single News Product (Lanzaroth Windsurfing) Order Confirmation Test (as a registered user)", async function () {
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
            //valid registered user checkout confirmation test (all orders -> single/multiple products share the same method)
            await testMethods.validRegUserOrderCheckoutTest();
            //valid order confirmation test (as a registered user)
            await testMethods.placedOrderRegUserConfirmationTest();
        });

        //Test 025c -> home page multiple news products (Lanzaroth Windsurfing) order confirmation test (as a registered user)
        test("Home Page Multiple News Product (Lanzaroth Windsurfing) Order Confirmation Test (as a registered user)", async function () {
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
            //valid registered user checkout confirmation test (all orders -> single/multiple products share the same method)
            await testMethods.validRegUserOrderCheckoutTest();
            //valid order confirmation test (as a registered user)
            await testMethods.placedOrderRegUserConfirmationTest();
        });

    });

    describe("Searched Product/s Order Confirmation (Guest) Tests", () => {

        //Test 026 -> searched product (Windsurfing in Karpathos) order confirmation test (as a guest)
        test("Searched Product (Windsurfing in Karpathos) Order Confirmation Test (as a guest)", async function () {
            //searched product (Windsurfing in Karpathos) addition to cart test (as a guest)
            await testMethods.addSearchedProductToCartGuestTest();
            //searched product (Windsurfing in Karpathos) addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
            //valid guest checkout confirmation test (all orders -> single/multiple products share the same method)
            await testMethods.validGuestOrderCheckoutTest();
            //valid order confirmation test (as a guest)
            await testMethods.placedOrderConfirmationTest();
        });

        //Test 026a -> multiple searched products (Windsurfing in Karpathos) order confirmation test (as a guest)
        test("Multiple Searched Products (Windsurfing in Karpathos) Order Confirmation Test (as a guest)", async function () {
            //multiple searched products (Windsurfing in Karpathos) addition to cart test (as a guest)
            await testMethods.addMultipleSearchedProductToCartGuestTest();
            //multiple searched products (Windsurfing in Karpathos) addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
            //valid guest checkout confirmation test (all orders -> single/multiple products share the same method)
            await testMethods.validGuestOrderCheckoutTest();
            //valid order confirmation test (as a guest)
            await testMethods.placedOrderConfirmationTest();
        });

    });

    describe("Searched Product/s Order Confirmation (Registered User) Tests", () => {

        //Test 026b -> searched product (Wspinaczka Island Peak) order confirmation test (as a guest)
        test("Searched Product (Wspinaczka Island Peak) Order Confirmation Test (as a registered user)", async function () {
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
            //valid registered user checkout confirmation test (all orders -> single/multiple products share the same method)
            await testMethods.validRegUserOrderCheckoutTest();
            //valid order confirmation test (as a registered user)
            await testMethods.placedOrderRegUserConfirmationTest();
        });

        //Test 026c -> multiple searched products (Wspinaczka Island Peak) order confirmation test (as a guest)
        test("Multiple Searched Products (Wspinaczka Island Peak) Order Confirmation Test (as a registered user)", async function () {
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
            //multiple searched products (Wspinaczka Island Peak) addition to check out test (as a registered user)
            await testMethods.addMultipleProductsToCheckoutTest();
            //valid registered user checkout confirmation test (all orders -> single/multiple products share the same method)
            await testMethods.validRegUserOrderCheckoutTest();
            //valid order confirmation test (as a registered user)
            await testMethods.placedOrderRegUserConfirmationTest();
        });

    });

    describe("Yoga Category Product/s Order Confirmation (Guest) Tests", () => {

        //Test 027 -> sailing category product (Yoga in Spain) order confirmation test (as a guest)
        test("Yoga Category Product (Yoga in Spain) Order Confirmation Test (as a guest)", async function () {
            //sailing category product (Yoga in Spain) addition to cart test (as a guest)
            await testMethods.addYogaSpainProductToCartGuestTest();
            //sailing category product (Yoga in Spain) addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
            //valid guest checkout confirmation test (all orders -> single/multiple products share the same method)
            await testMethods.validGuestOrderCheckoutTest();
            //valid order confirmation test (as a guest)
            await testMethods.placedOrderConfirmationTest();
        });

        //Test 027a -> multiple sailing category product (Yoga in Spain) order confirmation test (as a guest)
        test("Multiple Yoga Category Products (Yoga in Spain) Order Confirmation Test (as a guest)", async function () {
            //sailing category product (Yoga in Spain) addition to cart test (as a guest)
            await testMethods.addYogaSpainProductToCartGuestTest();
            //multiple sailing category products (Yoga in Spain) addition to check out test (as a guest) (with product quantity update in shopping cart page)
            await testMethods.addMultipleProductsToCheckoutTest();
            //valid guest checkout confirmation test (all orders -> single/multiple products share the same method)
            await testMethods.validGuestOrderCheckoutTest();
            //valid order confirmation test (as a guest)
            await testMethods.placedOrderConfirmationTest();
        });

    });

    describe("Yoga Category Product/s Order Confirmation (Registered User) Tests", () => {

        //Test 027b -> yoga category product (Yoga in Spain) order confirmation test (as a registered user)
        test("Yoga Category Product (Yoga in Spain) Order Confirmation Test (as a registered user)", async function () {
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
            //valid registered user checkout confirmation test (all orders -> single/multiple products share the same method)
            await testMethods.validRegUserOrderCheckoutTest();
            //valid order confirmation test (as a registered user)
            await testMethods.placedOrderRegUserConfirmationTest();
        });

        //Test 027c -> multiple yoga category products (Yoga in Spain) order confirmation test (as a registered user)
        test("Multiple Yoga Category Products (Yoga in Spain) Order Confirmation Test (as a registered user)", async function () {
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
            //valid registered user checkout confirmation test (all orders -> single/multiple products share the same method)
            await testMethods.validRegUserOrderCheckoutTest();
            //valid order confirmation test (as a registered user)
            await testMethods.placedOrderRegUserConfirmationTest();
        });

    });

    describe("Sailing Category Product/s Order Confirmation (Guest) Tests", () => {

        //Test 028 -> sailing category product (Sailing course in Mazur) order confirmation test (as a guest)
        test("Sailing Category Product (Sailing course in Mazur) Order Confirmation Test (as a guest)", async function () {
            //sailing category product (Sailing course in Mazur) addition to cart test (as a guest)
            await testMethods.addSailingCategoryProductToCartGuestTest();
            //sailing category product (Sailing course in Mazur) addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
            //valid guest checkout confirmation test (all orders -> single/multiple products share the same method)
            await testMethods.validGuestOrderCheckoutTest();
            //valid order confirmation test (as a guest)
            await testMethods.placedOrderConfirmationTest();
        });

        //Test 028a -> multiple sailing category products (Sailing course in Mazur) order confirmation test (as a guest)
        test("Multiple Sailing Category Products (Sailing course in Mazur) Order Confirmation Test (as a guest)", async function () {
            //sailing category product (Sailing course in Mazur) addition to cart test (as a guest)
            await testMethods.addSailingCategoryProductToCartGuestTest();
            //multiple sailing category products (Sailing course in Mazur) addition to check out test (as a guest) (with product quantity update in shopping cart page)
            await testMethods.addMultipleProductsToCheckoutTest();
            //valid guest checkout confirmation test (all orders -> single/multiple products share the same method)
            await testMethods.validGuestOrderCheckoutTest();
            //valid order confirmation test (as a guest)
            await testMethods.placedOrderConfirmationTest();
        });

    });

    describe("Sailing Category Product/s Order Confirmation (Registered User) Tests", () => {

        //Test 028b -> sailing category product (Sailing course in Mazur) order confirmation test (as a registered user)
        test("Sailing Category Product (Sailing course in Mazur) Order Confirmation Test (as a registered user)", async function () {
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
            //valid registered user checkout confirmation test (all orders -> single/multiple products share the same method)
            await testMethods.validRegUserOrderCheckoutTest();
            //valid order confirmation test (as a registered user)
            await testMethods.placedOrderRegUserConfirmationTest();
        });

        //Test 028c -> multiple sailing category products (Sailing course in Mazur) order confirmation test (as a registered user)
        test("Multiple Sailing Category Products (Sailing course in Mazur) Order Confirmation Test (as a registered user)", async function () {
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
            //valid registered user checkout confirmation test (all orders -> single/multiple products share the same method)
            await testMethods.validRegUserOrderCheckoutTest();
            //valid order confirmation test (as a registered user)
            await testMethods.placedOrderRegUserConfirmationTest();
        });

    });


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});


