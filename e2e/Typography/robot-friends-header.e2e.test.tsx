import { test } from "@playwright/test";
test("should see the Robot Friends title", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  test
    .expect(
      await page
        .getByRole("heading", { name: "Robot Friends" })
        .nth(0)
        .isVisible(),
    )
    .toBe(true);
  await page.getByRole("heading", { name: "Robot Friends" }).nth(1).click();
  await page
    .locator("div")
    .filter({ hasText: "Robot FriendsRobot Friends" })
    .first()
    .click();
  await test.expect(page.locator("body")).toMatchAriaSnapshot(`
    - heading "Robot Friends" [level=2]
    - heading "Robot Friends" [level=2]
    `);
});
