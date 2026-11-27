import { cleanup, render, screen } from "@testing-library/react";
import { beforeEach, expect, it } from "vitest";
import App from "./App";
beforeEach(() => {
  cleanup();
  localStorage.clear();
  window.location.hash = "#/";
});
it("places the real screenshot sequence between hero and compact project index", () => {
  const { container } = render(<App />);
  const gallery = container.querySelector(".scroll-gallery");
  expect(gallery).not.toBeNull();
  expect(gallery?.querySelectorAll(".rail-image")).toHaveLength(7);
  expect(gallery?.querySelectorAll("img")).toHaveLength(7);
  expect(container.querySelector("#project-index")).not.toBeNull();
  expect(screen.getByRole("link", { name: "Lewati galeri" })).toBeTruthy();
  expect(container.querySelector(".hero-copy")?.textContent).toContain("Saya");
});
