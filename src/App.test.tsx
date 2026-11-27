import { beforeEach, describe, expect, it } from "vitest";
import { cleanup, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
beforeEach(() => {
  cleanup();
  localStorage.clear();
  location.hash = "#/";
});
describe("routed portfolio", () => {
  it("navigates from home to projects and detail", async () => {
    const u = userEvent.setup();
    render(<App />);
    await u.click(screen.getByRole("link", { name: "Proyek" }));
    expect(location.hash).toBe("#/projects");
    await u.click(screen.getAllByRole("link", { name: /Lihat detail/ })[0]);
    expect(location.hash).toBe("#/projects/zentra-digital-solution");
    expect(screen.getByRole("heading", { level: 1 }).textContent).toBe(
      "Zentra Digital Solution.",
    );
  });
  it("switches locale and preserves theme controls", async () => {
    const u = userEvent.setup();
    render(<App />);
    await u.click(screen.getByRole("button", { name: "Ganti bahasa" }));
    expect(document.documentElement.lang).toBe("en");
    await u.click(
      screen.getByRole("button", { name: "Switch to light theme" }),
    );
    expect(document.documentElement.dataset.theme).toBe("light");
  });
  it("filters source-backed projects by category", async () => {
    location.hash = "#/projects";
    const u = userEvent.setup();
    render(<App />);
    await u.click(screen.getByRole("button", { name: "Game" }));
    expect(screen.getAllByRole("article")).toHaveLength(1);
    expect(screen.getByRole("heading", { name: "Samurai Game" })).toBeDefined();
  });
  it("renders not-found routes", () => {
    location.hash = "#/missing";
    render(<App />);
    expect(screen.getByText("Halaman tidak ditemukan")).toBeDefined();
  });
  it("keeps legacy sample detail URLs explicit rather than pretending they are real projects", () => {
    location.hash = "#/projects/sample-api";
    render(<App />);
    expect(
      screen.getByText(/Ini bukan proyek portfolio terverifikasi/),
    ).toBeDefined();
  });
  it("preserves reachable contact and social destinations", () => {
    render(<App />);
    const contact = document.getElementById("contact")!;
    expect(
      within(contact)
        .getByRole("link", { name: "Tulis email" })
        .getAttribute("href"),
    ).toBe("mailto:ikbar686@gmail.com");
    expect(contact.querySelector('a[href^="tel:"]')?.getAttribute("href")).toBe(
      "tel:+" + "6281413265114",
    );
  });
});
