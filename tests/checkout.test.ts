import { test } from "../fixtures/fixtures";

test("User is able eto buy a product", async ({ app }) => {
    await app.shop.open();
    await app.shop.addFirstBook();
    await app.shop.wait(3000);
    await app.cart.open();
    await app.cart.proceedToCheckout();
    await app.checkout.fillAllRequiredFields();
    await app.shop.wait(3000);
    await app.checkout.clickPlaceOrderButton();
    await app.shop.wait(3000);
    await app.checkout.isOpen(`${process.env.BASE_URL}myorders`);
});
