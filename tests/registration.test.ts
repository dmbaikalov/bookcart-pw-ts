import { test } from "../fixtures/fixtures";

test.use({ storageState: { cookies: [], origins: [] } });

test.fail("User is able to Register", async ({ app }) => {
    await app.shop.open();
    await app.shop.header.isLoaded();
    await app.shop.header.openLoginForm();
    await app.login.clickRegisterButton();
    await app.register.fillFirstNameField();
    await app.register.fillLastNameField();
    await app.register.fillUsernameField();
    await app.register.fillPasswordField();
    await app.register.fillConfirmPasswordField();
    await app.register.pickGender("Male");
    await app.register.wait(3000);
    await app.register.clickRegisterButton();
    await app.register.wait(3000);
    await app.register.takeScreenShot();
    await app.login.isOpen();
});

test.fail(
    "User is unable to Register with invalid password",
    async ({ app }) => {
        await app.shop.open();
        await app.shop.header.isLoaded();
        await app.shop.header.openLoginForm();
        await app.login.clickRegisterButton();
        await app.register.fillFirstNameField();
        await app.register.fillLastNameField();
        await app.register.fillUsernameField();
        await app.register.fillPasswordField();
        await app.register.fillConfirmPasswordField("123");
        await app.register.pickGender("Male");
        await app.register.clickRegisterButton();
        await app.login.isOpen();
    },
);
