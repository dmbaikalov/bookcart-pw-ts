import { test } from "../fixtures/fixtures";

test.use({ storageState: { cookies: [], origins: [] } });

test.describe
    .parallel("Checking if user is able to pick a category in the filter", () => {
    test("User is able to pick 'All Categories' filter option", async ({
        app,
    }) => {
        await app.shop.open();
        await app.shop.filter.pickAllCategories();
        await app.shop.filter.checkingUrl("All Categories");
    });
    test("Pick 'Biography' filter option", async ({ app }) => {
        await app.shop.open();
        await app.shop.filter.pickBiography();
        await app.shop.filter.checkingUrl("biography");
    });
    test("Pick 'Fiction' filter option", async ({ app }) => {
        await app.shop.open();
        await app.shop.filter.pickFiction();
        await app.shop.filter.checkingUrl("fiction");
    });
    test("Pick 'Mystery' filter option", async ({ app }) => {
        await app.shop.open();
        await app.shop.filter.pickMystery();
        await app.shop.filter.checkingUrl("mystery");
    });
    test("Pick 'Fantasy' filter option", async ({ app }) => {
        await app.shop.open();
        await app.shop.filter.pickFantasy();
        await app.shop.filter.checkingUrl("fantasy");
    });
    test("Pick 'Romance' filter option", async ({ app }) => {
        await app.shop.open();
        await app.shop.filter.pickRomance();
        await app.shop.filter.checkingUrl("romance");
    });
});
