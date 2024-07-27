import { test, expect } from "@playwright/test";

test.describe("App Component", () => {
  const urls = ["http://localhost:1234", "http://localhost:1234/home"];

  urls.forEach((url) => {
    test(`should render the App component with the navbar when visiting ${url}`, async ({
      page,
    }) => {
      await page.goto(url);

      // Ensure the navbar is present
      const navbar = page.getByRole("navigation");
      await expect(navbar).toBeVisible();

      // Ensure the logo is present within the navbar
      const logo = navbar.locator('img[alt="brand-logo"]');
      await expect(logo).toBeVisible();
    });
  });
});
