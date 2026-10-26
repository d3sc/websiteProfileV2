import { beforeEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { projects } from "./data";
beforeEach(()=>{cleanup();localStorage.clear();location.hash="#/";});
describe("routed portfolio",()=>{
 it("has six projects and local images in both locales",()=>{expect(projects.id).toHaveLength(6);expect(projects.en).toHaveLength(6);expect(projects.en.every(p=>p.image.startsWith('/assets/'))).toBe(true)});
 it("navigates from home to projects and detail",async()=>{const u=userEvent.setup();render(<App/>);await u.click(screen.getByRole('link',{name:'Proyek'}));expect(location.hash).toBe('#/projects');await u.click(screen.getAllByRole('link',{name:/Lihat detail/})[0]);expect(location.hash).toContain('#/projects/');expect(screen.getByRole('heading',{name:'Ruang Kerja'})).toBeDefined()});
 it("switches locale and theme without storage",async()=>{const u=userEvent.setup();render(<App/>);await u.click(screen.getByRole('button',{name:'Ganti bahasa'}));expect(document.documentElement.lang).toBe('en');await u.click(screen.getByRole('button',{name:'Switch to dark theme'}));expect(document.documentElement.dataset.theme).toBe('dark')});
 it("renders not-found routes",()=>{location.hash='#/missing';render(<App/>);expect(screen.getByText('Halaman tidak ditemukan')).toBeDefined()});
});