export type Route =
  | { kind: "home"; section?: "about" | "contact" | "selected-projects" }
  | { kind: "projects" }
  | { kind: "detail"; slug: string }
  | { kind: "notfound" };

export function readRoute(hash = window.location.hash): Route {
  const value = hash.replace(/^#/, "") || "/";
  if (value === "/#selected-projects")
    return { kind: "home", section: "selected-projects" };
  if (value === "/" || value === "/#about" || value === "/#contact") {
    return value === "/#about"
      ? { kind: "home", section: "about" }
      : value === "/#contact"
        ? { kind: "home", section: "contact" }
        : { kind: "home" };
  }
  if (value === "/projects") return { kind: "projects" };
  const detail = value.match(/^\/projects\/([^/]+)$/);
  if (detail) {
    try {
      return { kind: "detail", slug: decodeURIComponent(detail[1]) };
    } catch {
      return { kind: "notfound" };
    }
  }
  return { kind: "notfound" };
}

export function routeHref(path: string): string {
  return `#${path}`;
}
