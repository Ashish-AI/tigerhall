import { test, expect } from "@playwright/test";

test.describe("Navbar Component", () => {
  test("should render the navbar with the correct logo", async ({ page }) => {
    await page.goto("http://localhost:1234");
    const logo = page.locator('img[alt="brand-logo"]');
    await expect(logo).toBeVisible();
  });

  test("test: close icon appearance if textfield has some value", async ({
    page,
  }) => {
    await page.goto("http://localhost:1234/");
    await page.getByPlaceholder("Search...").click();
    await page.getByPlaceholder("Search...").fill("abc");
    await expect(page.getByRole("img").nth(2)).toBeVisible();
  });

  test("test: close button clears input", async ({ page }) => {
    await page.goto("http://localhost:1234/");
    await page.getByPlaceholder("Search...").click();
    await page.getByPlaceholder("Search...").fill("abc");
    await page.getByRole("navigation").getByRole("img").nth(2).click();
    await expect(page.getByPlaceholder("Search...")).toHaveValue("");
  });

  test("test: API call is made after entering a character", async ({
    page,
  }) => {
    await page.goto("http://localhost:1234/");
    let apiCallMade = false;
    page.on("request", (request) => {
      if (request.url().includes("https://api.tigerhall.net/v2/")) {
        apiCallMade = true;
      }
    });

    const searchInput = page.getByPlaceholder("Search...");
    await searchInput.click();
    await searchInput.fill("a");

    // Wait for a while to allow the API call to be made
    await page.waitForTimeout(1000);

    // Assert that the API call was made
    expect(apiCallMade).toBe(true);
  });
});
