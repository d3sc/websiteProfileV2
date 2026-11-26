import { beforeEach, expect, it } from "vitest";
import { cleanup, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

beforeEach(() => {
  cleanup();
  localStorage.clear();
  location.hash = "#/projects/helpdesk-ticketing";
});
it("provides a manually controlled gallery with truthful crop captions", async () => {
  const user = userEvent.setup();
  render(<App />);
  const gallery = screen.getByRole("region", {
    name: /Galeri.*Helpdesk Ticketing/,
  });
  expect(within(gallery).getByRole("status").textContent).toContain("1 / 2");
  await user.click(
    within(gallery).getByRole("button", { name: "Gambar berikutnya" }),
  );
  expect(within(gallery).getByRole("status").textContent).toContain("2 / 2");
  expect(
    within(gallery).getByText(/Potongan screenshot yang sama/),
  ).toBeDefined();
  await user.keyboard("{ArrowLeft}");
  expect(within(gallery).getByRole("status").textContent).toContain("1 / 2");
});
it("does not show carousel controls for a single screenshot", () => {
  location.hash = "#/projects/proxmox-home-lab";
  render(<App />);
  expect(
    screen.getByRole("button", { name: /Perbesar screenshot/ }),
  ).toBeDefined();
  expect(
    screen.queryByRole("button", { name: "Gambar berikutnya" }),
  ).toBeNull();
});
it("renders a text-led trading project instead of requesting a missing image", () => {
  location.hash = "#/projects/trading-analysis-dashboard";
  render(<App />);
  expect(document.querySelectorAll(".detail img")).toHaveLength(0);
  expect(screen.getByText(/Screenshot belum tersedia/)).toBeDefined();
});
it("links the hero CTA directly to the showcase", () => {
  location.hash = "#/";
  render(<App />);
  expect(
    screen.getByRole("link", { name: /Lihat Proyek/ }).getAttribute("href"),
  ).toBe("#/#selected-projects");
});
