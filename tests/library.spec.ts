import { test, expect } from "@playwright/test";

test.describe("Library Component", () => {
  test("Test if zero state is not loaded if text field has some value", async ({
    page,
  }) => {
    await page.goto("http://localhost:1234");

    // Verify ZeroState is hidden
    const zeroState = page.getByTestId("zero-state");
    const searchInput = page.getByPlaceholder("Search...");

    const nonEmptyValue = "example";
    const emptyValue = "";

    await searchInput.fill(nonEmptyValue);

    await expect(zeroState).toBeHidden();
  });

  test("Test if zero state is loaded if text field has empty value", async ({
    page,
  }) => {
    await page.goto("http://localhost:1234");

    // Verify ZeroState is visible
    const zeroState = page.getByTestId("zero-state");
    const searchInput = page.getByPlaceholder("Search...");

    const emptyValue = "";

    await searchInput.fill(emptyValue);

    await expect(zeroState).toBeVisible();
  });
});
