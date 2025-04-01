const TestMethods = require('./utils/TestMethods');
const BaseTest = require('./utils/BaseTest');

describe('Edit Account Page Tests', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function () {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    jest.setTimeout(80000) //timer for the whole single test run, otherwise throws a timeout error
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    describe('Valid Edit Account Test', () => {

        //Test 003 -> valid edit user account test
        test("Valid Edit User Account Test", async function () {
            //navigate to 'Register/Login' dashboard page test
            await testMethods.navigateToRegisterLoginDashboardTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid edit user account test
            await testMethods.validEditAccountTest();
        });

    });

    describe('Invalid Edit Account Tests', () => {

        describe('Invalid Edit Account Test - No Singular Input', () => {

            //Test 003a -> invalid edit user account test - no user first name
            test("Invalid Edit User Account Test - No User First Name", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //invalid edit user account test - no user first name
                await testMethods.invalidEditAccountNoFirstNameTest();
            });

            //Test 003b -> invalid edit user account test - no user last name
            test("Invalid Edit User Account Test - No User Last Name", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //invalid edit user account test - no user last name
                await testMethods.invalidEditAccountNoLastNameTest();
            });

            //Test 003c -> invalid edit user account test - no username
            test("Invalid Edit User Account Test - No Username", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //invalid edit user account test - no username
                await testMethods.invalidEditAccountNoUsernameTest();
            });

            //Test 003d -> invalid edit user account test - no user email
            test("Invalid Edit User Account Test - No User Email", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //invalid edit user account test - no user email
                await testMethods.invalidEditAccountNoEmailTest();
            });

            //Test 003e -> invalid edit user account test - no user old password
            test("Invalid Edit User Account Test - No User Old Password", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //invalid edit user account test - no user old password
                await testMethods.invalidEditAccountNoOldPasswordTest();
            });

            //Test 003f -> invalid edit user account test - no user new password
            test("Invalid Edit User Account Test - No User New Password", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //invalid edit user account test - no user new password
                await testMethods.invalidEditAccountNoNewPasswordTest();
            });

            //Test 003g -> invalid edit user account test - no user confirm new password
            test("Invalid Edit User Account Test - No User Confirm New Password", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //invalid edit user account test - no user confirm new password
                await testMethods.invalidEditAccountNoNewConfirmPasswordTest();
            });

        });

        describe('Invalid Edit Account Test - Too Short Singular Input', () => {

            //Test 003h -> invalid edit user account test - too short user first name (1 char) (too short first name gets accepted - test has failed)
            test("Invalid Edit User Account Test - Too Short User First Name", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //invalid edit user account test - too short user first name (1 char)
                await testMethods.invalidEditAccountTooShortFirstNameTest();
            });

            //Test 003i -> invalid edit user account test - too short user last name (1 char) (too short last name gets accepted - test has failed)
            test("Invalid Edit User Account Test - Too Short User Last Name", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //invalid edit user account test - too short user last name (1 char)
                await testMethods.invalidEditAccountTooShortLastNameTest();
            });

            //Test 003j -> invalid edit user account test - too short username (1 char) (too short username gets accepted - test has failed)
            test("Invalid Edit User Account Test - Too Short Username", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //invalid edit user account test - too short username (1 char)
                await testMethods.invalidEditAccountTooShortUsernameTest();
            });

            //Test 003k -> invalid edit user account test - too short user email (1 char -> name,domain) (too short user email gets accepted - test has failed)
            test("Invalid Edit User Account Test - Too Short User Email", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //invalid edit user account test - too short user email (1 char -> name,domain)
                await testMethods.invalidEditAccountTooShortEmailTest();
            });

            //Test 003l -> invalid edit user account test - too short user new/confirm password (11 chars)
            test("Invalid Edit User Account Test - Too Short User New Password / Confirm Password", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //invalid edit user account test - too short user new/confirm password (11 chars)
                await testMethods.invalidEditAccountTooShortNewAndConfirmPasswordTest();
            });

        });

        describe('Invalid Edit Account Test - Too Long Singular Input', () => {

            //Test 003m -> invalid edit user account test - too long user first name (100 chars) (too long first name gets accepted - test has failed)
            test("Invalid Edit User Account Test - Too Long User First Name", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //invalid edit user account test - too long user first name (100 chars)
                await testMethods.invalidEditAccountTooLongFirstNameTest();
            });

            //Test 003n -> invalid edit user account test - too long user last name (100 chars) (too long last name gets accepted - test has failed)
            test("Invalid Edit User Account Test - Too Long User Last Name", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //invalid edit user account test - too long user last name (100 chars)
                await testMethods.invalidEditAccountTooLongLastNameTest();
            });

            //Test 003o -> invalid edit user account test - too long username (100 chars) (too long username gets accepted - test has failed)
            test("Invalid Edit User Account Test - Too Long Username", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //invalid edit user account test - too long username (100 chars)
                await testMethods.invalidEditAccountTooLongUsernameTest();
            });

            //Test 003p -> invalid edit user account test - too long user email (100 chars -> name,domain) (too long user email doesn't get accepted - test has passed)
            test("Invalid Edit User Account Test - Too Long User Email", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //invalid edit user account test - too long user email (100 chars -> name,domain)
                await testMethods.invalidEditAccountTooLongEmailTest();
            });

            //Test 003q -> invalid edit user account test - too long user new/confirm password (100 chars) (too long user new password/confirm password gets accepted - test has failed)
            test("Invalid Edit User Account Test - Too Long User New Password / Confirm Password", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //invalid edit user account test - too long user new/confirm password (100 chars)
                await testMethods.invalidEditAccountTooLongNewAndConfirmPasswordTest();
            });

        });

        describe('Invalid Edit Account Test - Invalid Singular Input Format', () => {

            //Test 003r -> invalid edit user account test - invalid user first name input format (special symbols only) (invalid first name format gets accepted - test has failed)
            test("Invalid Edit User Account Test - Invalid First Name Format", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //invalid edit user account test - invalid user first name format (special symbols only)
                await testMethods.invalidEditAccountInvalidFirstNameFormatTest();
            });

            //Test 003s -> invalid edit user account test - invalid user last name format (special symbols only) (invalid last name format gets accepted - test has failed)
            test("Invalid Edit User Account Test - Invalid Last Name Format", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //invalid edit user account test - invalid user last name format (special symbols only)
                await testMethods.invalidEditAccountInvalidLastNameFormatTest();
            });

            //Test 003t -> invalid edit user account test - invalid username format (special symbols only) (invalid username format gets accepted - test has failed)
            test("Invalid Edit User Account Test - Invalid Username Format", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //invalid edit user account test - invalid username format (special symbols only)
                await testMethods.invalidEditAccountInvalidUsernameFormatTest();
            });

            //Test 003u -> invalid edit user account test - invalid user email format (missing '@') (invalid user email format doesn't get accepted - test has passed)
            test("Invalid Edit User Account Test - Invalid Email Format", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //invalid edit user account test - invalid user email format (missing '@')
                await testMethods.invalidEditAccountInvalidEmailFormatTest();
            });

        });

        describe('Invalid Edit Account Test - Pre-Existing Singular Input', () => {

            //Test 003v -> invalid edit user account test - existing user email format (used beforehand in manual testing)
            test("Invalid Edit User Account Test - Existing Email", async function () {
                //navigate to 'Register/Login' dashboard page test
                await testMethods.navigateToRegisterLoginDashboardTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //invalid edit user account test - existing user email (used beforehand in manual testing)
                await testMethods.invalidEditAccountExistingEmailTest();
            });

        });

    });

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});