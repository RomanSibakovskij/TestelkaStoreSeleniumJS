const TestMethods = require('./utils/TestMethods');
const BaseTest = require('./utils/BaseTest');

describe('Invalid Guest Checkout Confirmation Tests', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function () {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    jest.setTimeout(220000) //timer for the whole single test run, otherwise throws a timeout error
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    describe("Invalid Guest Checkout Confirmation Tests - No Singular Input", () => {

        //Test 024 -> invalid guest check out confirmation test method - no guest first name
        test("Invalid Guest Checkout Confirmation Test - No Guest First Name", async function () {
            //home page promotion product (Ferraty Climbing) addition to cart test (as a guest)
            await testMethods.addFerratyClimbingProductToCartGuestTest();
            //home page promotion product (Ferraty Climbing) addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
            //invalid guest checkout confirmation test - no guest first name
            await testMethods.invalidGuestNoFirstNameOrderCheckoutTest();
        });

        //Test 024a -> invalid guest check out confirmation test method - no guest last name
        test("Invalid Guest Checkout Confirmation Test - No Guest Last Name", async function () {
            //home page promotion product (Ferraty Climbing) addition to cart test (as a guest)
            await testMethods.addFerratyClimbingProductToCartGuestTest();
            //home page promotion product (Ferraty Climbing) addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
            //invalid guest checkout confirmation test - no guest last name
            await testMethods.invalidGuestNoLastNameOrderCheckoutTest();
        });

        //Test 024b -> invalid guest check out confirmation test method - no guest country
        test("Invalid Guest Checkout Confirmation Test - No Guest Country", async function () {
            //home page promotion product (Ferraty Climbing) addition to cart test (as a guest)
            await testMethods.addFerratyClimbingProductToCartGuestTest();
            //home page promotion product (Ferraty Climbing) addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
            //invalid guest checkout confirmation test - no guest country
            await testMethods.invalidGuestNoCountryOrderCheckoutTest();
        });

        //Test 024c -> invalid guest check out confirmation test method - no guest state
        test("Invalid Guest Checkout Confirmation Test - No Guest State", async function () {
            //home page promotion product (Ferraty Climbing) addition to cart test (as a guest)
            await testMethods.addFerratyClimbingProductToCartGuestTest();
            //home page promotion product (Ferraty Climbing) addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
            //invalid guest checkout confirmation test - no guest state
            await testMethods.invalidGuestNoStateOrderCheckoutTest();
        });

        //Test 024d -> invalid guest check out confirmation test method - no guest street
        test("Invalid Guest Checkout Confirmation Test - No Guest Street", async function () {
            //home page promotion product (Ferraty Climbing) addition to cart test (as a guest)
            await testMethods.addFerratyClimbingProductToCartGuestTest();
            //home page promotion product (Ferraty Climbing) addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
            //invalid guest checkout confirmation test - no guest street
            await testMethods.invalidGuestNoStreetOrderCheckoutTest();
        });

        //Test 024e -> invalid guest check out confirmation test method - no guest city
        test("Invalid Guest Checkout Confirmation Test - No Guest City", async function () {
            //home page promotion product (Ferraty Climbing) addition to cart test (as a guest)
            await testMethods.addFerratyClimbingProductToCartGuestTest();
            //home page promotion product (Ferraty Climbing) addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
            //invalid guest checkout confirmation test - no guest city
            await testMethods.invalidGuestNoCityOrderCheckoutTest();
        });

        //Test 024f -> invalid guest check out confirmation test method - no guest post code
        test("Invalid Guest Checkout Confirmation Test - No Guest Post Code", async function () {
            //home page promotion product (Ferraty Climbing) addition to cart test (as a guest)
            await testMethods.addFerratyClimbingProductToCartGuestTest();
            //home page promotion product (Ferraty Climbing) addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
            //invalid guest checkout confirmation test - no guest post code
            await testMethods.invalidGuestNoPostCodeOrderCheckoutTest();
        });

        //Test 024g -> invalid guest check out confirmation test method - no guest phone
        test("Invalid Guest Checkout Confirmation Test - No Guest Phone", async function () {
            //home page promotion product (Ferraty Climbing) addition to cart test (as a guest)
            await testMethods.addFerratyClimbingProductToCartGuestTest();
            //home page promotion product (Ferraty Climbing) addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
            //invalid guest checkout confirmation test - no guest phone
            await testMethods.invalidGuestNoPhoneOrderCheckoutTest();
        });

        //Test 024h -> invalid guest check out confirmation test method - no guest email
        test("Invalid Guest Checkout Confirmation Test - No Guest Email", async function () {
            //home page promotion product (Ferraty Climbing) addition to cart test (as a guest)
            await testMethods.addFerratyClimbingProductToCartGuestTest();
            //home page promotion product (Ferraty Climbing) addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
            //invalid guest checkout confirmation test - no guest email
            await testMethods.invalidGuestNoEmailOrderCheckoutTest();
        });

        //Test 024i -> invalid guest check out confirmation test method - no guest credit card number
        test("Invalid Guest Checkout Confirmation Test - No Guest Credit Card Number", async function () {
            //home page promotion product (Ferraty Climbing) addition to cart test (as a guest)
            await testMethods.addFerratyClimbingProductToCartGuestTest();
            //home page promotion product (Ferraty Climbing) addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
            //invalid guest checkout confirmation test - no guest credit card number
            await testMethods.invalidGuestNoCreditCardOrderCheckoutTest();
        });

        //Test 024j -> invalid guest check out confirmation test method - no guest credit card number expiration date
        test("Invalid Guest Checkout Confirmation Test - No Guest Credit Card Number Expiration Date", async function () {
            //home page promotion product (Ferraty Climbing) addition to cart test (as a guest)
            await testMethods.addFerratyClimbingProductToCartGuestTest();
            //home page promotion product (Ferraty Climbing) addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
            //invalid guest checkout confirmation test - no guest credit card number expiration date
            await testMethods.invalidGuestNoCreditCardExpDateOrderCheckoutTest();
        });

        //Test 024k -> invalid guest check out confirmation test method - no guest credit card CVC number
        test("Invalid Guest Checkout Confirmation Test - No Guest Credit Card CVC Number", async function () {
            //home page promotion product (Ferraty Climbing) addition to cart test (as a guest)
            await testMethods.addFerratyClimbingProductToCartGuestTest();
            //home page promotion product (Ferraty Climbing) addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
            //invalid guest checkout confirmation test - no guest credit card CVC number
            await testMethods.invalidGuestNoCreditCardCVCNumberOrderCheckoutTest();
        });

        //Test 024l -> invalid guest check out confirmation test method - no guest agreement with terms
        test("Invalid Guest Checkout Confirmation Test - No Guest Agreement With Terms", async function () {
            //home page promotion product (Ferraty Climbing) addition to cart test (as a guest)
            await testMethods.addFerratyClimbingProductToCartGuestTest();
            //home page promotion product (Ferraty Climbing) addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
            //invalid guest checkout confirmation test - no guest agreement with terms
            await testMethods.invalidGuestNoAgreeWithTermsOrderCheckoutTest();
        });

    });

    describe("Invalid Guest Checkout Confirmation Tests - Too Short Singular Input", () => {

        //Test 024m -> invalid guest check out confirmation test method - too short guest first name (1 char) (too short guest first name gets accepted, test has failed)
        test("Invalid Guest Checkout Confirmation Test - Too Short Guest First Name", async function () {
            //home page promotion product (Ferraty Climbing) addition to cart test (as a guest)
            await testMethods.addFerratyClimbingProductToCartGuestTest();
            //home page promotion product (Ferraty Climbing) addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
            //invalid guest checkout confirmation test - too short guest first name (1 char)
            await testMethods.invalidGuestTooShortFirstNameOrderCheckoutTest();
        });

        //Test 024n -> invalid guest check out confirmation test method - too short guest last name (1 char) (too short guest last name gets accepted, test has failed)
        test("Invalid Guest Checkout Confirmation Test - Too Short Guest Last Name", async function () {
            //home page promotion product (Ferraty Climbing) addition to cart test (as a guest)
            await testMethods.addFerratyClimbingProductToCartGuestTest();
            //home page promotion product (Ferraty Climbing) addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
            //invalid guest checkout confirmation test - too short guest last name (1 char)
            await testMethods.invalidGuestTooShortLastNameOrderCheckoutTest();
        });

        //Test 024o -> invalid guest check out confirmation test method - too short guest street (1 char) (too short guest street gets accepted, test has failed)
        test("Invalid Guest Checkout Confirmation Test - Too Short Guest Street", async function () {
            //home page promotion product (Ferraty Climbing) addition to cart test (as a guest)
            await testMethods.addFerratyClimbingProductToCartGuestTest();
            //home page promotion product (Ferraty Climbing) addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
            //invalid guest checkout confirmation test - too short guest street (1 char)
            await testMethods.invalidGuestTooShortStreetOrderCheckoutTest();
        });

        //Test 024p -> invalid guest check out confirmation test method - too short guest city (1 char) (too short guest city gets accepted, test has failed)
        test("Invalid Guest Checkout Confirmation Test - Too Short Guest City", async function () {
            //home page promotion product (Ferraty Climbing) addition to cart test (as a guest)
            await testMethods.addFerratyClimbingProductToCartGuestTest();
            //home page promotion product (Ferraty Climbing) addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
            //invalid guest checkout confirmation test - too short guest city (1 char)
            await testMethods.invalidGuestTooShortCityOrderCheckoutTest();
        });

        //Test 024q -> invalid guest check out confirmation test method - too short guest post code (3 digits)
        test("Invalid Guest Checkout Confirmation Test - Too Short Guest Post Code", async function () {
            //home page promotion product (Ferraty Climbing) addition to cart test (as a guest)
            await testMethods.addFerratyClimbingProductToCartGuestTest();
            //home page promotion product (Ferraty Climbing) addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
            //invalid guest checkout confirmation test - too short guest post code (3 digits)
            await testMethods.invalidGuestTooShortPostCodeOrderCheckoutTest();
        });

        //Test 024r -> invalid guest check out confirmation test method - too short guest phone (1 digit) (too short guest phone gets accepted, test has failed)
        test("Invalid Guest Checkout Confirmation Test - Too Short Guest Phone", async function () {
            //home page promotion product (Ferraty Climbing) addition to cart test (as a guest)
            await testMethods.addFerratyClimbingProductToCartGuestTest();
            //home page promotion product (Ferraty Climbing) addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
            //invalid guest checkout confirmation test - too short guest phone (1 digit)
            await testMethods.invalidGuestTooShortPhoneOrderCheckoutTest();
        });

        //Test 024s -> invalid guest check out confirmation test method - too short guest email (1 char -> name, domain) (too short guest email gets accepted, test has failed)
        test("Invalid Guest Checkout Confirmation Test - Too Short Guest Email", async function () {
            //home page promotion product (Ferraty Climbing) addition to cart test (as a guest)
            await testMethods.addFerratyClimbingProductToCartGuestTest();
            //home page promotion product (Ferraty Climbing) addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
            //invalid guest checkout confirmation test - too short guest email (1 char -> name, domain)
            await testMethods.invalidGuestTooShortEmailOrderCheckoutTest();
        });

        //Test 024t -> invalid guest check out confirmation test method - too short guest credit card number (15 digits)
        test("Invalid Guest Checkout Confirmation Test - Too Short Guest Credit Card Number", async function () {
            //home page promotion product (Ferraty Climbing) addition to cart test (as a guest)
            await testMethods.addFerratyClimbingProductToCartGuestTest();
            //home page promotion product (Ferraty Climbing) addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
            //invalid guest checkout confirmation test - too short guest credit card number (15 digits)
            await testMethods.invalidGuestTooShortCreditCardNumberOrderCheckoutTest();
        });

        //Test 024u -> invalid guest check out confirmation test method - too short guest credit card number expiration date (3 digits)
        test("Invalid Guest Checkout Confirmation Test - Too Short Guest Credit Card Number Expiration Date", async function () {
            //home page promotion product (Ferraty Climbing) addition to cart test (as a guest)
            await testMethods.addFerratyClimbingProductToCartGuestTest();
            //home page promotion product (Ferraty Climbing) addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
            //invalid guest checkout confirmation test - too short guest credit card number expiration date (3 digits)
            await testMethods.invalidGuestTooShortCreditCardExpDateOrderCheckoutTest();
        });

        //Test 024v -> invalid guest check out confirmation test method - too short guest credit card CVC number (2 digits)
        test("Invalid Guest Checkout Confirmation Test - Too Short Guest Credit Card CVC Number", async function () {
            //home page promotion product (Ferraty Climbing) addition to cart test (as a guest)
            await testMethods.addFerratyClimbingProductToCartGuestTest();
            //home page promotion product (Ferraty Climbing) addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
            //invalid guest checkout confirmation test - too short guest credit card CVC number (2 digits)
            await testMethods.invalidGuestTooShortCreditCardCVCNumberOrderCheckoutTest();
        });

    });

    describe("Invalid Guest Checkout Confirmation Tests - Too Long Singular Input", () => {

        //Test 024w -> invalid guest check out confirmation test method - too long guest first name (100 chars) (too long guest first name gets accepted, test has failed)
        test("Invalid Guest Checkout Confirmation Test - Too Long Guest First Name", async function () {
            //home page promotion product (Ferraty Climbing) addition to cart test (as a guest)
            await testMethods.addFerratyClimbingProductToCartGuestTest();
            //home page promotion product (Ferraty Climbing) addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
            //invalid guest checkout confirmation test - too long guest first name (100 chars)
            await testMethods.invalidGuestTooLongFirstNameOrderCheckoutTest();
        });

        //Test 024x -> invalid guest check out confirmation test method - too long guest last name (100 chars) (too long guest last name gets accepted, test has failed)
        test("Invalid Guest Checkout Confirmation Test - Too Long Guest Last Name", async function () {
            //home page promotion product (Ferraty Climbing) addition to cart test (as a guest)
            await testMethods.addFerratyClimbingProductToCartGuestTest();
            //home page promotion product (Ferraty Climbing) addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
            //invalid guest checkout confirmation test - too long guest last name (100 chars)
            await testMethods.invalidGuestTooLongLastNameOrderCheckoutTest();
        });

        //Test 024y -> invalid guest check out confirmation test method - too long guest street (100 chars) (too long guest street gets accepted, test has failed)
        test("Invalid Guest Checkout Confirmation Test - Too Long Guest Street", async function () {
            //home page promotion product (Ferraty Climbing) addition to cart test (as a guest)
            await testMethods.addFerratyClimbingProductToCartGuestTest();
            //home page promotion product (Ferraty Climbing) addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
            //invalid guest checkout confirmation test - too long guest street (100 chars)
            await testMethods.invalidGuestTooLongStreetOrderCheckoutTest();
        });

        //Test 024z -> invalid guest check out confirmation test method - too long guest city (100 chars) (too long guest city gets accepted, test has failed)
        test("Invalid Guest Checkout Confirmation Test - Too Long Guest City", async function () {
            //home page promotion product (Ferraty Climbing) addition to cart test (as a guest)
            await testMethods.addFerratyClimbingProductToCartGuestTest();
            //home page promotion product (Ferraty Climbing) addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
            //invalid guest checkout confirmation test - too long guest city (100 chars)
            await testMethods.invalidGuestTooLongCityOrderCheckoutTest();
        });

        //Test 024aa -> invalid guest check out confirmation test method - too long guest post code (25 digits)
        test("Invalid Guest Checkout Confirmation Test - Too Long Guest Post Code", async function () {
            //home page promotion product (Ferraty Climbing) addition to cart test (as a guest)
            await testMethods.addFerratyClimbingProductToCartGuestTest();
            //home page promotion product (Ferraty Climbing) addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
            //invalid guest checkout confirmation test - too long guest post code (25 digits)
            await testMethods.invalidGuestTooLongPostCodeOrderCheckoutTest();
        });

        //Test 024ab -> invalid guest check out confirmation test method - too long guest phone (30 digits) (too long guest phone gets accepted, test has failed)
        test("Invalid Guest Checkout Confirmation Test - Too Long Guest Phone", async function () {
            //home page promotion product (Ferraty Climbing) addition to cart test (as a guest)
            await testMethods.addFerratyClimbingProductToCartGuestTest();
            //home page promotion product (Ferraty Climbing) addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
            //invalid guest checkout confirmation test - too long guest phone (30 digits)
            await testMethods.invalidGuestTooLongPhoneOrderCheckoutTest();
        });

        //Test 024ac -> invalid guest check out confirmation test method - too long guest email (100 chars -> name, domain) (too long guest email gets accepted, test has failed)
        test("Invalid Guest Checkout Confirmation Test - Too Long Guest Email", async function () {
            //home page promotion product (Ferraty Climbing) addition to cart test (as a guest)
            await testMethods.addFerratyClimbingProductToCartGuestTest();
            //home page promotion product (Ferraty Climbing) addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
            //invalid guest checkout confirmation test - too long guest email (100 chars -> name, domain)
            await testMethods.invalidGuestTooLongEmailOrderCheckoutTest();
        });

        //Test 024ad -> invalid guest check out confirmation test method - too long guest credit card number (17 digits) (the input field doesn't allow to input greater number, test has failed)
        test("Invalid Guest Checkout Confirmation Test - Too Long Guest Credit Card Number", async function () {
            //home page promotion product (Ferraty Climbing) addition to cart test (as a guest)
            await testMethods.addFerratyClimbingProductToCartGuestTest();
            //home page promotion product (Ferraty Climbing) addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
            //invalid guest checkout confirmation test - too long guest credit card number (17 digits)
            await testMethods.invalidGuestTooLongCreditCardNumberOrderCheckoutTest();
        });

        //Test 024ae -> invalid guest check out confirmation test method - too long guest credit card number expiration date (5 digits) (the input field doesn't allow to input greater number, test has failed)
        test("Invalid Guest Checkout Confirmation Test - Too Long Guest Credit Card Number Expiration Date", async function () {
            //home page promotion product (Ferraty Climbing) addition to cart test (as a guest)
            await testMethods.addFerratyClimbingProductToCartGuestTest();
            //home page promotion product (Ferraty Climbing) addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
            //invalid guest checkout confirmation test - too long guest credit card number expiration date (5 digits)
            await testMethods.invalidGuestTooLongCreditCardExpDateOrderCheckoutTest();
        });

        //Test 024af -> invalid guest check out confirmation test method - too long guest credit card CVC number (4 digits) (the input field doesn't allow to input greater number, test has failed)
        test("Invalid Guest Checkout Confirmation Test - Too Long Guest Credit Card CVC Number", async function () {
            //home page promotion product (Ferraty Climbing) addition to cart test (as a guest)
            await testMethods.addFerratyClimbingProductToCartGuestTest();
            //home page promotion product (Ferraty Climbing) addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
            //invalid guest checkout confirmation test - too long guest credit card CVC number (4 digits)
            await testMethods.invalidGuestTooLongCreditCardCVCNumberOrderCheckoutTest();
        });

    });

    describe("Invalid Guest Checkout Confirmation Tests - Invalid Singular Input Format", () => {

        //Test 024ag -> invalid guest check out confirmation test method - invalid guest first name format (special symbols only) (invalid guest first name format gets accepted, test has failed)
        test("Invalid Guest Checkout Confirmation Test - Invalid Guest First Name Format", async function () {
            //home page promotion product (Ferraty Climbing) addition to cart test (as a guest)
            await testMethods.addFerratyClimbingProductToCartGuestTest();
            //home page promotion product (Ferraty Climbing) addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
            //invalid guest checkout confirmation test - invalid guest first name format (special symbols only)
            await testMethods.invalidGuestInvalidFirstNameFormatOrderCheckoutTest();
        });

        //Test 024ah -> invalid guest check out confirmation test method - invalid guest last name format (special symbols only) (invalid guest last name format gets accepted, test has failed)
        test("Invalid Guest Checkout Confirmation Test - Invalid Guest Last Name Format", async function () {
            //home page promotion product (Ferraty Climbing) addition to cart test (as a guest)
            await testMethods.addFerratyClimbingProductToCartGuestTest();
            //home page promotion product (Ferraty Climbing) addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
            //invalid guest checkout confirmation test - invalid guest last name format (special symbols only)
            await testMethods.invalidGuestInvalidLastNameFormatOrderCheckoutTest();
        });

        //Test 024ai -> invalid guest check out confirmation test method - invalid guest street format (special symbols only) (invalid guest street format gets accepted, test has failed)
        test("Invalid Guest Checkout Confirmation Test - Invalid Guest Street Format", async function () {
            //home page promotion product (Ferraty Climbing) addition to cart test (as a guest)
            await testMethods.addFerratyClimbingProductToCartGuestTest();
            //home page promotion product (Ferraty Climbing) addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
            //invalid guest checkout confirmation test - invalid guest street format (special symbols only)
            await testMethods.invalidGuestInvalidStreetFormatOrderCheckoutTest();
        });

        //Test 024aj -> invalid guest check out confirmation test method - invalid guest city format (special symbols only) (invalid guest city format gets accepted, test has failed)
        test("Invalid Guest Checkout Confirmation Test - Invalid Guest City Format", async function () {
            //home page promotion product (Ferraty Climbing) addition to cart test (as a guest)
            await testMethods.addFerratyClimbingProductToCartGuestTest();
            //home page promotion product (Ferraty Climbing) addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
            //invalid guest checkout confirmation test - invalid guest city format (special symbols only)
            await testMethods.invalidGuestInvalidCityFormatOrderCheckoutTest();
        });

        //Test 024ak -> invalid guest check out confirmation test method - invalid guest post code format (special symbols only)
        test("Invalid Guest Checkout Confirmation Test - Invalid Guest Post Code Format", async function () {
            //home page promotion product (Ferraty Climbing) addition to cart test (as a guest)
            await testMethods.addFerratyClimbingProductToCartGuestTest();
            //home page promotion product (Ferraty Climbing) addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
            //invalid guest checkout confirmation test - invalid guest post code format (special symbols only)
            await testMethods.invalidGuestInvalidPostCodeFormatOrderCheckoutTest();
        });

        //Test 024al -> invalid guest check out confirmation test method - invalid guest phone format (special symbols only)
        test("Invalid Guest Checkout Confirmation Test - Invalid Guest Phone Format", async function () {
            //home page promotion product (Ferraty Climbing) addition to cart test (as a guest)
            await testMethods.addFerratyClimbingProductToCartGuestTest();
            //home page promotion product (Ferraty Climbing) addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
            //invalid guest checkout confirmation test - invalid guest phone format (special symbols only)
            await testMethods.invalidGuestInvalidPhoneFormatOrderCheckoutTest();
        });

        //Test 024am -> invalid guest check out confirmation test method - invalid guest email format (special symbols only)
        test("Invalid Guest Checkout Confirmation Test - Invalid Guest Email Format", async function () {
            //home page promotion product (Ferraty Climbing) addition to cart test (as a guest)
            await testMethods.addFerratyClimbingProductToCartGuestTest();
            //home page promotion product (Ferraty Climbing) addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
            //invalid guest checkout confirmation test - invalid guest email format (special symbols only)
            await testMethods.invalidGuestInvalidEmailFormatOrderCheckoutTest();
        });

        //Test 024an -> invalid guest check out confirmation test method - invalid guest credit card number format (special symbols only) (input field doesn't allow special symbols input)
        test("Invalid Guest Checkout Confirmation Test - Invalid Credit Card Number Format", async function () {
            //home page promotion product (Ferraty Climbing) addition to cart test (as a guest)
            await testMethods.addFerratyClimbingProductToCartGuestTest();
            //home page promotion product (Ferraty Climbing) addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
            //invalid guest checkout confirmation test - invalid guest credit card number format (special symbols only)
            await testMethods.invalidGuestInvalidCreditCardNumberFormatOrderCheckoutTest();
        });

        //Test 024ao -> invalid guest check out confirmation test method - invalid guest credit card number (non-test number)
        test("Invalid Guest Checkout Confirmation Test - Invalid Credit Card Number (Non-Test Number)", async function () {
            //home page promotion product (Ferraty Climbing) addition to cart test (as a guest)
            await testMethods.addFerratyClimbingProductToCartGuestTest();
            //home page promotion product (Ferraty Climbing) addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
            //invalid guest checkout confirmation test - invalid guest credit card number (non-test number)
            await testMethods.invalidGuestInvalidCreditCardNumberOrderCheckoutTest();
        });

        //Test 024ap -> invalid guest check out confirmation test method - invalid guest credit card expiration date format (special symbols only)
        test("Invalid Guest Checkout Confirmation Test - Invalid Guest Credit Card Number Expiration Date Format", async function () {
            //home page promotion product (Ferraty Climbing) addition to cart test (as a guest)
            await testMethods.addFerratyClimbingProductToCartGuestTest();
            //home page promotion product (Ferraty Climbing) addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
            //invalid guest checkout confirmation test - invalid guest credit card expiration date format (special symbols only)
            await testMethods.invalidGuestInvalidCreditCardExpDateFormatOrderCheckoutTest();
        });

        //Test 024aq -> invalid guest check out confirmation test method - invalid guest credit card cvc number format (special symbols only) (input field doesn't allow non-int inputs)
        test("Invalid Guest Checkout Confirmation Test - Invalid Guest Credit Card CVC Number Format", async function () {
            //home page promotion product (Ferraty Climbing) addition to cart test (as a guest)
            await testMethods.addFerratyClimbingProductToCartGuestTest();
            //home page promotion product (Ferraty Climbing) addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
            //invalid guest checkout confirmation test - invalid guest credit card cvc number format (special symbols only)
            await testMethods.invalidGuestInvalidCreditCardCVCNumberFormatOrderCheckoutTest();
        });

    });


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});


