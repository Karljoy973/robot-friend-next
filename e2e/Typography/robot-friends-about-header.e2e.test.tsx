import { test } from "@playwright/test";

test("it should be seen in a browser", async ({ page }) => {
  await page.goto("http://localhost:3000/about");
  test.expect(await page.getByRole("heading").nth(0).isVisible()).toBe(true);
  test.expect(await page.getByRole("heading").nth(1).isVisible()).toBe(true);

  await test.expect(page.getByRole("banner")).toMatchAriaSnapshot(`
        - heading "About This Project" [level=3]
        - heading "About This Project" [level=3]
        `);
});
