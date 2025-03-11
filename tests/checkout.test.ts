import { test } from "../fixtures/fixtures";

test("E2E - user is able eto buy a product", async ({ app }) => {
    await app.shop.open();
    await app.shop.header.isLoaded();
    await app.shop.header.openLoginForm();
    await app.login.fillUsernameField();
    await app.login.fillPasswordField();
    await app.login.clickLoginButton();
    await app.login.wait(3000);
    await app.shop.isOpen();
    await app.shop.addFirstBook();
    await app.shop.wait(3000);
    await app.cart.open();
    await app.cart.proceedToCheckout();
    await app.checkout.fillAllRequiredFields();
    await app.shop.wait(3000);
    await app.checkout.clickPlaceOrderButton();
    await app.shop.wait(3000);
    await app.shop.takeScreenShot();
    await app.checkout.isOpen(`${process.env.BASE_URL}myorders`);
    await app.shop.takeScreenShot();
});
