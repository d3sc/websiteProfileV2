import { defineConfig } from "@playwright/test";
import base from "./playwright.config";

// Instrumentation only: keep the original scenarios, browser, timeouts and worker count.
const run = process.env.PORTFOLIO_QA_RUN ?? "repro";
export default defineConfig(base, {
  outputDir: `docs/verification/playwright/${run}/artifacts`,
  reporter: [
    ["list"],
    [
      "json",
      { outputFile: `docs/verification/playwright/${run}/results.json` },
    ],
  ],
  use: { ...base.use, trace: "on", screenshot: "on" },
});
