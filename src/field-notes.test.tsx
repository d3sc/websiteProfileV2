import { beforeEach, expect, it } from "vitest";
import { cleanup, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
beforeEach(() => {
  cleanup();
  localStorage.clear();
  location.hash = "#/";
});
it("lets visitors select a hero project with keyboard and updates the preview link", async () => {
  const user = userEvent.setup();
  render(<App />);
  const group = screen.getByRole("tablist", { name: "Pilih proyek" });
  const tabs = within(group).getAllByRole("tab");
  expect(tabs[0].getAttribute("aria-selected")).toBe("true");
  tabs[0].focus();
  await user.keyboard("{ArrowRight}");
  expect(tabs[1].getAttribute("aria-selected")).toBe("true");
  expect(document.activeElement).toBe(tabs[1]);
  expect(
    within(screen.getByRole("tabpanel"))
      .getByRole("link", { name: /Lihat detail/ })
      .getAttribute("href"),
  ).toBe("#/projects/proxmox-home-lab");
});
it("keeps placeholder entries out of the public work selection", () => {
  render(<App />);
  expect(screen.queryByText("Sample Notes Interface")).toBeNull();
  expect(
    screen.getByRole("link", { name: /Hubungi Saya/ }).getAttribute("href"),
  ).toBe("#/#contact");
});
