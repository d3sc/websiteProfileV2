import { expect, it } from "vitest";
import { allProjects, projects } from "./data";
import { projectImages } from "./project-media";

const slugs = [
  "zentra-digital-solution",
  "mia-crm",
  "mia-training",
  "mia-absensi",
  "mia-admin",
];
it("registers each new project once, with bilingual copy and real responsive media", () => {
  for (const locale of ["id", "en"] as const) {
    expect(projects[locale].slice(0, 5).map((p) => p.slug)).toEqual(slugs);
    for (const slug of slugs) {
      const matches = allProjects[locale].filter((p) => p.slug === slug);
      expect(matches).toHaveLength(1);
      const project = matches[0];
      expect(project.summary).toBeTruthy();
      expect(project.status).toBeTruthy();
      const shots = projectImages(slug, locale);
      expect(shots).toHaveLength(1);
      expect(shots[0].src).toBe(project.image);
      expect(shots[0].caption).toBeTruthy();
      expect(shots[0].width).toBeGreaterThan(960);
      expect(shots[0].height).toBeGreaterThan(0);
      expect(shots[0].srcSet.split(", ")).toEqual([
        `/assets/projects/${slug}-480.webp 480w`,
        `/assets/projects/${slug}-960.webp 960w`,
        `${shots[0].src} ${shots[0].width}w`,
      ]);
      if (slug.startsWith("mia-")) expect(project.externalUrl).toBeUndefined();
    }
  }
  for (const slug of slugs) {
    const id = projects.id.find((p) => p.slug === slug)!;
    const en = projects.en.find((p) => p.slug === slug)!;
    expect(id.summary).not.toBe(en.summary);
    expect(projectImages(slug, "id")[0].caption).not.toBe(
      projectImages(slug, "en")[0].caption,
    );
  }
  expect(projects.id[0].externalUrl).toBe(
    "https://zentradigitalsolution.my.id/",
  );
});
