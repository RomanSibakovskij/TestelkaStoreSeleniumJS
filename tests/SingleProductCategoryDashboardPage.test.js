const TestMethods = require('./utils/TestMethods');
const BaseTest = require('./utils/BaseTest');

describe('Single Product Category Dashboard Page Tests ->', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function () {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    jest.setTimeout(180000) //timer for the whole single test run, otherwise throws a timeout error
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    describe("Yoga Category Product Addition To Cart (Guest) Test", () => {

        //Test 013 -> sailing category product (Yoga in Spain) addition to cart test (as a guest)
        test("Yoga Category Product (Yoga in Spain) Addition To Cart Test (as a guest)", async function () {
            await testMethods.addYogaSpainProductToCartGuestTest();
        });

    });

    describe("Yoga Category Product Addition To Cart (Registered User) Test", () => {

        //Test 013a -> yoga category product (Yoga in Spain) addition to cart test (as a registered user)
        test("Yoga Category Product (Yoga in Spain) Addition To Cart Test (as a registered user)", async function () {
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
        });

    });

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});


