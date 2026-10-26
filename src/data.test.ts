import { describe, expect, it } from "vitest";
import { projects } from "./data";

describe("portfolio content", () => {
  it("contains six fictional projects in both locales", () => {
    expect(projects.id).toHaveLength(6);
    expect(projects.en).toHaveLength(6);
    expect(projects.id.map((project) => project.id)).toEqual([
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
    ]);
  });
});
