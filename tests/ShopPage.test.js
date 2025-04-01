const TestMethods = require('./utils/TestMethods');
const BaseTest = require('./utils/BaseTest');

describe('Shop Page Tests', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function () {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    jest.setTimeout(180000) //timer for the whole single test run, otherwise throws a timeout error
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    describe("Sailing Category Product Addition To Cart (Guest) Test", () => {

        //Test 012 -> sailing category product (Sailing course in Mazur) addition to cart test (as a guest)
        test("Sailing Category Product (Sailing course in Mazur) Addition To Cart Test (as a guest)", async function () {
            await testMethods.addSailingCategoryProductToCartGuestTest();
        });

        //Test 012a -> sailing category product (Sailing course in Mazur) addition to cart test (as a registered user)
        test("Sailing Category Product (Sailing course in Mazur) Addition To Cart Test (as a registered user)", async function () {
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
        });

    });

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});


