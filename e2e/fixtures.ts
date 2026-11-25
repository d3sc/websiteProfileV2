import { test as base, expect } from "@playwright/test";

export const test = base.extend<{ browserDiagnostics: void }>({
  browserDiagnostics: [
    async ({ page, browser, baseURL }, use, info) => {
      const errors: { type: string; message: string }[] = [];
      const local = (url: string) =>
        baseURL ? url.replace(baseURL, "[portfolio]") : url;
      page.on("pageerror", (e) =>
        errors.push({ type: "pageerror", message: e.message }),
      );
      page.on("console", (m) => {
        if (m.type() === "error")
          errors.push({ type: "console", message: m.text() });
      });
      page.on("requestfailed", (r) =>
        errors.push({
          type: "requestfailed",
          message: `${local(r.url())}: ${r.failure()?.errorText}`,
        }),
      );
      page.on("response", (r) => {
        if (baseURL && r.url().startsWith(baseURL) && r.status() >= 400)
          errors.push({
            type: "http",
            message: `${r.status()} ${local(r.url())}`,
          });
      });
      await use();
      await info.attach("browser-diagnostics", {
        body: JSON.stringify(
          {
            browser: browser.browserType().name(),
            version: browser.version(),
            viewport: page.viewportSize(),
            hasTouch: info.project.use.hasTouch ?? false,
            isMobile: info.project.use.isMobile ?? false,
            url: local(page.url()),
            errors,
          },
          null,
          2,
        ),
        contentType: "application/json",
      });
      expect(errors, "no browser console/page/network/HTTP errors").toEqual([]);
    },
    { auto: true },
  ],
});
export { expect };
