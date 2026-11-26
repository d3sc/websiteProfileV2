import { describe, expect, it } from "vitest";
import { projects, archivedProjects, allProjects } from "./data";
import { readRoute } from "./router";
describe("portfolio source integrity", () => {
  it("preserves the actual six archived entries and only assigns available screenshots", () => {
    for (const locale of ["id", "en"] as const) {
      expect(projects[locale]).toHaveLength(5);
      expect(archivedProjects[locale]).toHaveLength(6);
      expect(new Set(allProjects[locale].map((p) => p.slug)).size).toBe(11);
      expect(archivedProjects[locale].filter((p) => p.image)).toHaveLength(5);
      expect(projects[locale].filter((p) => p.image)).toHaveLength(4);
      expect(projects[locale].some((p) => p.externalUrl)).toBe(false);
      for (const p of allProjects[locale]) {
        expect(p.title).not.toMatch(/Sample/);
        if (p.externalUrl) expect(p.externalUrl).toMatch(/^https:\/\//);
        if (p.image) expect(p.image).toMatch(/^\/assets\/projects\/.+\.webp$/);
      }
    }
  });
  it("preserves hash routes including old detail slugs and safely handles malformed URLs", () => {
    expect(readRoute("#/projects/kulineran")).toEqual({
      kind: "detail",
      slug: "kulineran",
    });
    expect(readRoute("#/#contact")).toEqual({
      kind: "home",
      section: "contact",
    });
    expect(readRoute("#/projects/sample-api")).toEqual({
      kind: "detail",
      slug: "sample-api",
    });
    expect(readRoute("#/projects/%E0%A4%A")).toEqual({ kind: "notfound" });
  });
});
