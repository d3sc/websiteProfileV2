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
it("orders the five new hero projects with correct detail destinations", async () => {
  const u = userEvent.setup();
  render(<App />);
  const tabs = screen.getAllByRole("tab");
  expect(tabs.map((t) => t.textContent)).toEqual([
    "01Zentra Digital Solution↗",
    "02MIA CRM↗",
    "03MIA Training↗",
    "04MIA Absensi↗",
    "05MIA Admin↗",
  ]);
  for (const [index, slug] of [
    "zentra-digital-solution",
    "mia-crm",
    "mia-training",
    "mia-absensi",
    "mia-admin",
  ].entries()) {
    await u.click(tabs[index]);
    expect(
      within(screen.getByRole("tabpanel"))
        .getByRole("link", { name: /Lihat detail/ })
        .getAttribute("href"),
    ).toBe(`#/projects/${slug}`);
  }
  expect(
    document.querySelectorAll("#project-index .home-project-row"),
  ).toHaveLength(10);
  expect(
    document.querySelectorAll("#other-projects .home-project-row"),
  ).toHaveLength(5);
});
it("shows scoped evidence and no made-up external links on every new detail", () => {
  for (const p of projects.id) {
    cleanup();
    location.hash = `#/projects/${p.slug}`;
    render(<App />);
    expect(
      document.querySelectorAll('.detail a[target="_blank"]'),
    ).toHaveLength(p.externalUrl ? 1 : 0);
    expect(document.querySelector(".project-verification")).not.toBeNull();
    expect(document.querySelector(".detail-body")?.textContent).toContain(
      p.contribution,
    );
  }
});
it("prepends the five supplied projects and preserves older work", () => {
  expect(projects.id.map((p) => p.title)).toEqual([
    "Zentra Digital Solution",
    "MIA CRM",
    "MIA Training",
    "MIA Absensi",
    "MIA Admin",
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
