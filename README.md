#TestelkaStoreSeleniumJS

Selenium test suite on basic e-commerce web app functionality (various product addition to / quantity update / removal from shopping cart) The test suite captures screenshots at the end of test case run (for logging purposes).

#Tech Requirements:
 1.Java JDK 8 or higher 
 
 2.Node.js

 3.Jest
 
 4.IntelliJ IDEA (or another IDE that supports Java and Maven)

#Setup

1. Clone this repository into IntelliJ(or other IDE) workspace folder (or wherever the project can be launched by IDE)
2. Open the IDE and open the project folder
3. Install Node.js
4. Make sure JavaScript/TypeScript plugins are enabled in the IDE.
5. Install and configure Jest (enter in IDE terminal: npm install --save-dev jest)
6. Run the test suite on the IDE

## Test Case List

//Navigate to 'Register/Login' Dashboard Page Test

1.	//Test 001 -> navigate to 'Register/Login' dashboard page test


//Valid Account Creation Test

1.	//Test 002 -> valid user account creation test


//Invalid Account Creation Tests - No Singular Input

1.	//Test 002a -> invalid user account creation test - no register email
2.	//Test 002b -> invalid user account creation test - no register password

//Invalid Account Creation Tests - Too Short Singular Input

1.	//Test 002c -> invalid user account creation test - too short register email (1 char -> name, domain)
2.	//Test 002d -> invalid user account creation test - too short register password (11 chars -> single chars (different chars will pass the password))

//Invalid Account Creation Tests - Too Long Singular Input

1.	//Test 002e -> invalid user account creation test - too long register email (100 chars -> name, domain)
2.	//Test 002f -> invalid user account creation test - too long register password (100 chars) 

//Invalid Account Creation Test - Used Singular Input

1.	//Test 002h -> invalid user account creation test - invalid register email input format (missing '@')

//User Account Removal Test

1.	//Test 002i -> user account removal test


//Valid Edit Account Test

1.	//Test 003 -> valid edit user account test


//Invalid Edit Account Tests

1.	//Test 003a -> invalid edit user account test - no user first name
2.	//Test 003b -> invalid edit user account test - no user last name
3.	//Test 003c -> invalid edit user account test - no username
4.	//Test 003d -> invalid edit user account test - no user email
5.	//Test 003e -> invalid edit user account test - no user old password
6.	//Test 003f -> invalid edit user account test - no user new password
7.	//Test 003g -> invalid edit user account test - no user confirm new password


//Invalid Edit Account Test - Too Short Singular Input

1.	//Test 003h -> invalid edit user account test - too short user first name (1 char)
2.	//Test 003i -> invalid edit user account test - too short user last name (1 char)
3.	//Test 003j -> invalid edit user account test - too short username (1 char)
4.	//Test 003k -> invalid edit user account test - too short user email (1 char -> name,domain)
5.	//Test 003l -> invalid edit user account test - too short user new/confirm password (11 chars)


//Invalid Edit Account Test - Too Long Singular Input

1.	//Test 003m -> invalid edit user account test - too long user first name (100 chars)
2.	//Test 003n -> invalid edit user account test - too long user last name (100 chars)
3.	//Test 003o -> invalid edit user account test - too long username (100 chars)
4.	//Test 003p -> invalid edit user account test - too long user email (100 chars -> name,domain)
5.	//Test 003q -> invalid edit user account test - too long user new/confirm password (100 chars)


//Invalid Edit Account Test - Invalid Singular Input Format

1.	//Test 003r -> invalid edit user account test - invalid user first name input format (special symbols only)
2.	//Test 003s -> invalid edit user account test - invalid user last name format (special symbols only)
3.	//Test 003t -> invalid edit user account test - invalid username format (special symbols only)
4.	//Test 003u -> invalid edit user account test - invalid user email format (missing '@')


//Invalid Edit Account Test - Pre-Existing Singular Input

1.	//Test 003v -> invalid edit user account test - existing user email format (used beforehand in manual testing)


//Valid Shipping Address Addition Tests

1.	//Test 004 -> valid add shipping address test (the webpage allows only single address creation)


//Invalid Shipping Address Addition Tests - No Singular Input

1.	//Test 004a -> invalid add shipping address test - no user first name
2.	//Test 004b -> invalid add shipping address test - no user last name
3.	//Test 004c -> invalid add shipping address test - no user country
4.	//Test 004d -> invalid add shipping address test - no user state
5.	//Test 004e -> invalid add shipping address test - no user street
6.	//Test 004f -> invalid add shipping address test - no user post code
7.	//Test 004g -> invalid add shipping address test - no user city


//Invalid Shipping Address Addition Tests - Too Short Singular Input

1.	//Test 004h -> invalid add shipping address test - too short user first name (1 char)
2.	//Test 004i -> invalid add shipping address test - too short user last name (1 char)
3.	//Test 004j -> invalid add shipping address test - too short user street (1 char)
4.	//Test 004k -> invalid add shipping address test - too short user post code (1 char)
5.	//Test 004l -> invalid add shipping address test - too short user city (1 char)


//Invalid Shipping Address Addition Tests - Too Long Singular Input

1.	//Test 004m -> invalid add shipping address test - too long user first name (100 chars)
2.	//Test 004n -> invalid add shipping address test - too long user last name (100 chars)
3.	//Test 004o -> invalid add shipping address test - too long user street (100 chars)
4.	//Test 004p -> invalid add shipping address test - too long user post code (25 digits)
5.	//Test 004q -> invalid add shipping address test - too long user city (100 chars)

//Invalid Shipping Address Addition Tests - Invalid Singular Input Format

1.	//Test 004r -> invalid add shipping address test - invalid user first name format (special symbols only)
2.	//Test 004s -> invalid add shipping address test - invalid user last name format (special symbols only)
3.	//Test 004t -> invalid add shipping address test - invalid user street format (special symbols only)
4.	//Test 004u -> invalid add shipping address test - invalid user post code format (special symbols only)
5.	//Test 004w -> invalid add shipping address test - invalid user city format (special symbols only)


//Valid Billing Address Addition Test

1.	//Test 005 -> valid add billing address test


//Invalid Billing Address Addition Tests

1.	//Test 005a -> invalid add billing address test - no user first name
2.	//Test 005b -> invalid add billing address test - no user last name
3.	//Test 005c -> invalid add billing address test - no user country
4.	//Test 005d -> invalid add billing address test - no user state
5.	//Test 005e -> invalid add billing address test - no user street
6.	//Test 005f -> invalid add billing address test - no user city
7.	//Test 005g -> invalid add billing address test - no user post code
8.	//Test 005h -> invalid add billing address test - no user phone
9.	//Test 005i -> invalid add billing address test - no user email


//Invalid Billing Address Addition Tests - Too Short Singular Input

1.	//Test 005j -> invalid add billing address test - too short user first name (1 char)
2.	//Test 005k -> invalid add billing address test - too short user last name (1 char)
3.	//Test 005l -> invalid add billing address test - too short user street (1 char)
4.	//Test 005m -> invalid add billing address test - too short user city (1 char)
5.	//Test 005n -> invalid add billing address test - too short user post code (3 digits)
6.	//Test 005o -> invalid add billing address test - too short user phone (1 char)
7.	//Test 005p -> invalid add billing address test - too short user email (1 char -> name, domain)


//Invalid Billing Address Addition Tests - Too Long Singular Input

1.	//Test 005q -> invalid add billing address test - too long user first name (100 chars)
2.	//Test 005r -> invalid add billing address test - too long user last name (100 chars)
3.	//Test 005s -> invalid add billing address test - too long user street (100 chars)
4.	//Test 005t -> invalid add billing address test - too long user city (100 chars)
5.	//Test 005u -> invalid add billing address test - too long user post code (25 digits)
6.	//Test 005v -> invalid add billing address test - too long user phone (30 digits)
7.	//Test 005w -> invalid add billing address test - too long user email (100 chars -> name, domain)

//Invalid Billing Address Addition Tests - Invalid Singular Input Format

1.	//Test 005x -> invalid add billing address test - invalid user first name format (special symbols only)
2.	//Test 005y -> invalid add billing address test - invalid user last name format (special symbols only)
3.	//Test 005z -> invalid add billing address test - invalid user street format (special symbols only)
4.	//Test 005aa -> invalid add billing address test - invalid user city format (special symbols only)
5.	//Test 005ab -> invalid add billing address test - invalid user post code format (special symbols only)
6.	//Test 005ac -> invalid add billing address test - invalid user phone format (special symbols only)
7.	//Test 005ad -> invalid add billing address test - invalid user email format (missing '@')

//Invalid Billing Address Addition Tests - Pre-Existing Singular Input

1.	//Test 005ae -> invalid add billing address test - existing user email (used beforehand in manual testing)

//Valid User Logout Test

1.	//Test 006 -> valid user account logout test

//Valid User Login Tests

1.	//Test 007 -> valid user account login test
2.	//Test 007a -> valid user account (with edited email) login test
3.	//Test 007b -> valid user account (with edited password) login test
4.	//Test 007c -> valid user account (with valid username) login test
5.	//Test 007d -> valid user account (with edited username) login test
6.	//Test 007e -> valid user account (with edited billing email) login test

//Invalid User Login Tests - No Singular Input

1.	//Test 007f -> invalid user account login test - no login email/username
2.	//Test 007g -> invalid user account login test - no login password

//Invalid User Login Tests - Invalid Singular Input

1.	//Test 007h -> invalid user account login test - invalid login email
2.	//Test 007i -> invalid user account login test - invalid login username
3.	//Test 007j -> invalid user account login test - invalid login password


//Home Page Product Addition To Cart (Guest) Test

1.	//Test 008 -> home page promotion product (Ferraty Climbing) addition to cart test (as a guest)

//Home Page Product Addition To Cart (Registered User) Test

1.	//Test 008a -> home page news product (Lanzaroth Windsurfing) addition to cart test (as a registered user)

//Searched Product/s Addition To Cart (Guest) Test

1.	//Test 009 -> searched product (Windsurfing in Karpathos) addition to cart test (as a guest)
2.	//Test 009a -> multiple searched products (Windsurfing in Karpathos) addition to cart test (as a guest)


//Searched Product/s Addition To Cart (Registered User) Test

1.	//Test 009b -> searched product (Wspinaczka Island Peak) addition to cart test (as a registered user)
2.	//Test 009c -> multiple searched products (Wspinaczka Island Peak) addition to cart test (as a guest)


//Home Page Product Addition To Wishlist (Guest) Test

1.	//Test 010 -> home page promotion product (Vacation in Blooming Cherry Land) addition to wishlist test (as a guest)


//Home Page Product Addition To Wishlist (Registered User) Test

1.	//Test 010a -> home page bestseller product (Egipt - El Gouna) addition to cart test (as a registered user)


//Home Page Product Removal From Shopping Dropdown Cart Test

1.	//Test 011 -> home page promotion product (Ferraty Climbing) removal from shopping dropdown cart test (as a guest -> registered user will have the same output so only guest branch is tested)


//Shop Page Tests

//Sailing Category Product Addition To Cart (Guest) Test

1.	//Test 012 -> sailing category product (Sailing course in Mazur) addition to cart test (as a guest)
2.	//Test 012a -> sailing category product (Sailing course in Mazur) addition to cart test (as a registered user)


//Single Product Category Dashboard Page Tests -> Yoga Category Product Addition To Cart (Guest) Test

1.	//Test 013 -> sailing category product (Yoga in Spain) addition to cart test (as a guest)
2.	//Test 013a -> yoga category product (Yoga in Spain) addition to cart test (as a registered user)


//Wishlist Page Tests -> Home Page Promotion Category Product Addition To Cart From Wishlist (Guest) Test

1.	//Test 014 -> home page promotion category product (Vacation in Blooming Cherry Land) addition to cart test (as a guest)
2.	//Test 014a -> bestseller category product (Egipt - El Gouna) addition to cart test (as a registered user)

//Home Page Promotion Category Product Removal From Wishlist (Guest) Test

1.	//Test 014 -> home page promotion category product (Vacation in Blooming Cherry Land) removal from wishlist test (as a guest)


//Shopping Cart Page Tests

//Home Page Product/s Addition To Checkout (Guest) Tests

1.	//Test 015 -> home page promotion product (Ferraty Climbing) addition to check out test (as a guest)
2.	//Test 015a -> home page multiple promotion products (Ferraty Climbing) addition to check out test (as a guest) (updated quantity in shopping cart page)

//Home Page Product/s Addition To Checkout (Registered User) Tests

1.	//Test 015b -> home page news product (Lanzaroth Windsurfing) addition to check out test (as a registered user)
2.	//Test 015c -> home page multiple news products (Lanzaroth Windsurfing) addition to check out test (as a registered user) (quantity update in shopping cart page)

//Searched Product/s Addition To Checkout (Guest) Tests

1.	//Test 016 -> searched product (Windsurfing in Karpathos) addition to check out test (as a guest)
2.	//Test 016a -> multiple searched products (Windsurfing in Karpathos) addition to check out test (as a guest) (with product quantity update in shopping cart page)


//Searched Product/s Addition To Checkout (Registered User) Tests

1.	//Test 016b -> searched product (Wspinaczka Island Peak) addition to check out test (as a guest)
2.	//Test 016c -> multiple searched products (Wspinaczka Island Peak) addition to check out test (as a guest) (with product quantity update in shopping cart page)


//Yoga Category Product/s Addition To Checkout (Guest) Tests

1.	//Test 017 -> sailing category product (Yoga in Spain) addition to check out test (as a guest)
2.	//Test 017a -> multiple sailing category product (Yoga in Spain) addition to check out test (as a guest) (with product quantity update in shopping cart page)

//Sailing Category Product/s Addition To Checkout (Guest) Tests

1.	//Test 018 -> sailing category product (Sailing course in Mazur) addition to check out test (as a guest)
2.	//Test 018a -> multiple sailing category products (Sailing course in Mazur) addition to check out test (as a guest) (with product quantity update in shopping cart page)


//Sailing Category Product/s Addition To Checkout (Registered User) Tests

1.	//Test 018b -> sailing category product (Sailing course in Mazur) addition to check out test (as a registered user)
2.	//Test 018c -> multiple sailing category products (Sailing course in Mazur) addition to check out test (as a registered user) (with product quantity update in shopping cart page)

//Product Removal From Shopping Cart Page Test

1.	//Test 019 -> product (Sailing course in Mazur) removal from shopping cart page test (as a guest) (registered user will have the same output so only guest branch is tested)


//Checkout Page Tests

//Home Page Product/s Checkout Confirmation (Guest) Tests

1.	//Test 020 -> home page promotion product (Ferraty Climbing) check out confirmation test (as a guest)
2.	//Test 020a -> home page multiple promotion products (Ferraty Climbing) check out confirmation test (as a guest)

//Home Page Product/s Checkout Confirmation (Registered User) Tests

1.	//Test 020b -> home page news product (Lanzaroth Windsurfing) check out confirmation test (as a registered user)
2.	//Test 020c -> home page multiple news products (Lanzaroth Windsurfing) check out confirmation test (as a registered user)

//Searched Product/s Checkout Confirmation (Guest) Tests

1.	//Test 021 -> searched product (Windsurfing in Karpathos) check out confirmation test (as a guest)
2.	//Test 021a -> multiple searched products (Windsurfing in Karpathos) check out confirmation test (as a guest)

//Searched Product/s Checkout Confirmation (Registered User) Tests

1.	//Test 021b -> searched product (Wspinaczka Island Peak) check out confirmation test (as a guest)
2.	//Test 021c -> multiple searched products (Wspinaczka Island Peak) check out confirmation test (as a guest)

//Yoga Category Product/s Checkout Confirmation (Guest) Tests

1.	//Test 022 -> sailing category product (Yoga in Spain) check out confirmation test (as a guest)
2.	//Test 022a -> multiple sailing category product (Yoga in Spain) check out confirmation test (as a guest)

//Yoga Category Product/s Checkout Confirmation (Registered User) Tests

1.	//Test 022b -> yoga category product (Yoga in Spain) check out confirmation test (as a registered user)
2.	//Test 022c -> multiple yoga category products (Yoga in Spain) check out confirmation test (as a registered user)

//Sailing Category Product/s Checkout Confirmation (Guest) Tests

1.	//Test 023 -> sailing category product (Sailing course in Mazur) check out confirmation test (as a guest)
2.	//Test 023a -> multiple sailing category products (Sailing course in Mazur) check out confirmation test (as a guest)

// Sailing Category Product/s Checkout Confirmation (Registered User) Tests

1.	//Test 023b -> sailing category product (Sailing course in Mazur) check out confirmation test (as a registered user)
2.	//Test 023c -> multiple sailing category products (Sailing course in Mazur) check out confirmation test (as a registered user)

//Invalid Guest Checkout Confirmation Tests

//Invalid Guest Checkout Confirmation Tests - No Singular Input

1.	//Test 024 -> invalid guest check out confirmation test method - no guest first name
2.	//Test 024a -> invalid guest check out confirmation test method - no guest last name
3.	//Test 024b -> invalid guest check out confirmation test method - no guest country
4.	//Test 024c -> invalid guest check out confirmation test method - no guest state
5.	//Test 024d -> invalid guest check out confirmation test method - no guest street
6.	//Test 024e -> invalid guest check out confirmation test method - no guest city
7.	//Test 024f -> invalid guest check out confirmation test method - no guest post code
8.	//Test 024g -> invalid guest check out confirmation test method - no guest phone
9.	//Test 024h -> invalid guest check out confirmation test method - no guest email
10.	//Test 024i -> invalid guest check out confirmation test method - no guest credit card number
11.	//Test 024j -> invalid guest check out confirmation test method - no guest credit card number expiration date
12.	//Test 024k -> invalid guest check out confirmation test method - no guest credit card CVC number
13.	//Test 024l -> invalid guest check out confirmation test method - no guest agreement with terms

//Invalid Guest Checkout Confirmation Tests - Too Short Singular Input

1.	//Test 024m -> invalid guest check out confirmation test method - too short guest first name (1 char)
2.	//Test 024n -> invalid guest check out confirmation test method - too short guest last name (1 char)
3.	//Test 024o -> invalid guest check out confirmation test method - too short guest street (1 char)
4.	//Test 024p -> invalid guest check out confirmation test method - too short guest city (1 char)
5.	//Test 024q -> invalid guest check out confirmation test method - too short guest post code (3 digits)
6.	//Test 024r -> invalid guest check out confirmation test method - too short guest phone (1 digit)
7.	//Test 024s -> invalid guest check out confirmation test method - too short guest email (1 char -> name, domain)
8.	//Test 024t -> invalid guest check out confirmation test method - too short guest credit card number (15 digits)
9.	//Test 024u -> invalid guest check out confirmation test method - too short guest credit card number expiration date (3 digits)
10.	//Test 024v -> invalid guest check out confirmation test method - too short guest credit card CVC number (2 digits)

//Invalid Guest Checkout Confirmation Tests - Too Long Singular Input

1.	//Test 024w -> invalid guest check out confirmation test method - too long guest first name (100 chars)
2.	//Test 024x -> invalid guest check out confirmation test method - too long guest last name (100 chars)
3.	//Test 024y -> invalid guest check out confirmation test method - too long guest street (100 chars)
4.	//Test 024z -> invalid guest check out confirmation test method - too long guest city (100 chars)
5.	//Test 024aa -> invalid guest check out confirmation test method - too long guest post code (25 digits)
6.	//Test 024ab -> invalid guest check out confirmation test method - too long guest phone (30 digits)
7.	//Test 024ac -> invalid guest check out confirmation test method - too long guest email (100 chars -> name, domain)
8.	//Test 024ad -> invalid guest check out confirmation test method - too long guest credit card number (17 digits)
9.	//Test 024ae -> invalid guest check out confirmation test method - too long guest credit card number expiration date (5 digits)
10.	//Test 024af -> invalid guest check out confirmation test method - too long guest credit card CVC number (4 digits)

//Invalid Guest Checkout Confirmation Tests - Invalid Singular Input Format

1.	//Test 024ag -> invalid guest check out confirmation test method - invalid guest first name format (special symbols only) 
2.	//Test 024ah -> invalid guest check out confirmation test method - invalid guest last name format (special symbols only)
3.	//Test 024ai -> invalid guest check out confirmation test method - invalid guest street format (special symbols only)
4.	//Test 024aj -> invalid guest check out confirmation test method - invalid guest city format (special symbols only)
5.	//Test 024ak -> invalid guest check out confirmation test method - invalid guest post code format (special symbols only)
6.	//Test 024al -> invalid guest check out confirmation test method - invalid guest phone format (special symbols only)
7.	//Test 024am -> invalid guest check out confirmation test method - invalid guest email format (special symbols only)
8.	//Test 024an -> invalid guest check out confirmation test method - invalid guest credit card number format (special symbols only) (input field doesn't allow special symbols input)
9.	//Test 024ao -> invalid guest check out confirmation test method - invalid guest credit card number (non-test number)
10.	//Test 024ap -> invalid guest check out confirmation test method - invalid guest credit card expiration date format (special symbols only) (input field doesn't allow non-int inputs)
11.	//Test 024aq -> invalid guest check out confirmation test method - invalid guest credit card cvc number format (special symbols only) (input field doesn't allow non-int inputs)


//Order Confirmation Page Tests

//Home Page Product/s Order Confirmation (Guest) Tests

1.	//Test 025 -> home page promotion product (Ferraty Climbing) order confirmation test (as a guest)
2.	//Test 025a -> home page multiple promotion products (Ferraty Climbing) order confirmation test (as a guest) 

//Home Page Product/s Order Confirmation (Registered User) Tests

1.	//Test 025b -> home page news product (Lanzaroth Windsurfing) order confirmation test (as a registered user)
2.	//Test 025c -> home page multiple news products (Lanzaroth Windsurfing) order confirmation test (as a registered user)

//Searched Product/s Order Confirmation (Guest) Tests

1.	//Test 026 -> searched product (Windsurfing in Karpathos) order confirmation test (as a guest)
2.	//Test 026a -> multiple searched products (Windsurfing in Karpathos) order confirmation test (as a guest)

//Searched Product/s Order Confirmation (Registered User) Tests

1.	//Test 026b -> searched product (Wspinaczka Island Peak) order confirmation test (as a guest)
2.	//Test 026c -> multiple searched products (Wspinaczka Island Peak) order confirmation test (as a guest)

//Yoga Category Product/s Order Confirmation (Guest) Tests

1.	//Test 027 -> sailing category product (Yoga in Spain) order confirmation test (as a guest)
2.	//Test 027a -> multiple sailing category product (Yoga in Spain) order confirmation test (as a guest)

//Yoga Category Product/s Order Confirmation (Registered User) Tests

1.	//Test 027b -> yoga category product (Yoga in Spain) order confirmation test (as a registered user)
2.	//Test 027c -> multiple yoga category products (Yoga in Spain) order confirmation test (as a registered user)

//Sailing Category Product/s Order Confirmation (Guest) Tests

1.	//Test 028 -> sailing category product (Sailing course in Mazur) order confirmation test (as a guest)
2.	//Test 028a -> multiple sailing category products (Sailing course in Mazur) order confirmation test (as a guest)

//Sailing Category Product/s Order Confirmation (Registered User) Tests

1.	//Test 028b -> sailing category product (Sailing course in Mazur) order confirmation test (as a registered user)
2.	//Test 028c -> multiple sailing category products (Sailing course in Mazur) order confirmation test (as a registered user)
