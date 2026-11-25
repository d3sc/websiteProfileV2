import { beforeEach, expect, it } from "vitest";
import { cleanup, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { projects } from "./data";
beforeEach(() => {
  cleanup();
  localStorage.clear();
  location.hash = "#/";
});
it("uses the updated full name, first-person bio and four project-linked skill groups", () => {
  render(<App />);
  expect(screen.getByRole("heading", { level: 1 }).textContent).toMatch(
    /Ikbar\s*Rabbani\s*Purwanto/,
  );
  expect(
    screen.getAllByText("Full-Stack Developer · Linux & Self-Hosting").length,
  ).toBeGreaterThan(0);
  expect(
    screen.getByText(/IT Programmer.*S1 Manajemen Informatika/),
  ).toBeDefined();
  for (const title of [
    "Backend & Database",
    "Frontend",
    "Infrastruktur",
    "Otomasi & Integrasi",
  ])
    expect(screen.getByRole("heading", { name: title })).toBeDefined();
  expect(document.querySelectorAll(".skill-projects a").length).toBeGreaterThan(
    3,
  );
});
it("orders hero and featured projects as VPS, Proxmox and LMS with correct detail destinations", async () => {
  const u = userEvent.setup();
  render(<App />);
  const tabs = screen.getAllByRole("tab");
  expect(tabs.map((t) => t.textContent)).toEqual([
    "01VPS Manager↗",
    "02Proxmox Home Lab↗",
    "03LMS Ujian Online↗",
  ]);
  for (const [index, slug] of [
    "vps-manager",
    "proxmox-home-lab",
    "lms-ujian-online",
  ].entries()) {
    await u.click(tabs[index]);
    expect(
      within(screen.getByRole("tabpanel"))
        .getByRole("link")
        .getAttribute("href"),
    ).toBe(`#/projects/${slug}`);
  }
  expect(
    document.querySelectorAll("#selected-projects .project-card"),
  ).toHaveLength(3);
  expect(
    document.querySelectorAll("#other-projects .project-card"),
  ).toHaveLength(2);
});
it("shows scoped evidence and no made-up external links on every new detail", () => {
  for (const p of projects.id) {
    cleanup();
    location.hash = `#/projects/${p.slug}`;
    render(<App />);
    expect(
      document.querySelectorAll('.detail a[target="_blank"]'),
    ).toHaveLength(0);
    expect(document.querySelector(".project-verification")).not.toBeNull();
    expect(document.querySelector(".detail-body")?.textContent).toContain(
      p.contribution,
    );
  }
});
it("publishes only the five supplied projects as current work", () => {
  expect(projects.id.map((p) => p.title)).toEqual([
    "VPS Manager",
    "Proxmox Home Lab",
    "LMS Ujian Online",
    "Helpdesk Ticketing",
    "Trading Analysis Dashboard",
  ]);
  expect(JSON.stringify(projects)).not.toMatch(
    /(?:\b(?:10|127|192\.168|172\.(?:1[6-9]|2\d|3[01]))\.\d+\.\d+|bot\d+:|chat_id|password|https?:\/\/\d)/i,
  );
});
