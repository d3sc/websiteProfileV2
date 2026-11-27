import { copy, projects, type Locale } from "./data";
import { routeHref } from "./router";
import { projectImages } from "./project-media";

export function HomeProjectIndex({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <section
      className="container home-project-index"
      id="project-index"
      tabIndex={-1}
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">↳ {t.selected}</p>
          <h2>{t.work}</h2>
        </div>
        <p>{t.projectIntro}</p>
      </div>
      {[projects[locale].slice(0, 5), projects[locale].slice(5)].map(
        (group, i) => (
          <div
            id={i ? "other-projects" : undefined}
            key={i}
            className={i ? "other-projects" : ""}
          >
            {i === 1 && (
              <h3 className="eyebrow other-index-title">{t.other}</h3>
            )}
            {group.map((project) => (
              <article key={project.slug} className="home-project-row">
                <span className="mono project-row-id">{project.id}</span>
                <h3>
                  <a href={routeHref(`/projects/${project.slug}`)}>
                    {project.title}
                    <span aria-hidden="true"> ↗</span>
                  </a>
                </h3>
                <div>
                  <p>{project.summary}</p>
                  <p className="project-status">{project.statusLabel}</p>
                  {!projectImages(project.slug, locale).length && (
                    <span className="mono text-led-note">
                      {locale === "id"
                        ? "Screenshot belum tersedia"
                        : "Screenshots not yet available"}
                    </span>
                  )}
                </div>
                <ul className="tags" aria-label="Stack">
                  {project.stack.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        ),
      )}
      <a className="archive-link" href={routeHref("/projects")}>
        <span>{t.viewAll}</span>
        <span className="mono">
          {String(projects[locale].length).padStart(2, "0")} {t.count} ↗
        </span>
      </a>
    </section>
  );
}
