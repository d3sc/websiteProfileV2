import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import {
  achievements,
  allProjects,
  archivedProjects,
  profileName,
  categories,
  categoryLabels,
  copy,
  email,
  projects,
  skills,
  socialLinks,
  type Category,
  type Locale,
  type Project,
} from "./data";
import { readRoute, routeHref, type Route } from "./router";
import "./styles.css";
import "./gallery.css";
import { ProjectGallery } from "./ProjectGallery";
import { galleryCopy, projectImages } from "./project-media";
import { ScrollShowcase } from "./ScrollShowcase";
import { HomeProjectIndex } from "./HomeProjectIndex";
import "./home.css";

type Theme = "light" | "dark";
type Text = (typeof copy)[Locale];
function preference<T extends string>(
  key: string,
  values: readonly T[],
  fallback: T,
): T {
  try {
    const v = localStorage.getItem(key);
    return values.includes(v as T) ? (v as T) : fallback;
  } catch {
    return fallback;
  }
}
function External({
  href,
  children,
  t,
  className = "text-link",
}: {
  href: string;
  children: ReactNode;
  t: Text;
  className?: string;
}) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children} <span aria-hidden="true">↗</span>
      <span className="sr-only"> ({t.external})</span>
    </a>
  );
}
function Tags({ project }: { project: Project }) {
  return (
    <ul className="tags" aria-label="Stack">
      {project.stack.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  );
}
function Visual({
  project,
  t,
  eager = false,
}: {
  project: Project;
  t: Text;
  eager?: boolean;
}) {
  const image = projectImages(project.slug, t === copy.id ? "id" : "en")[0];
  return image ? (
    <img
      src={image.src}
      srcSet={image.srcSet}
      sizes="(max-width: 700px) 100vw, (max-width: 1100px) 60vw, 800px"
      alt={`${project.title} - ${image.alt}`}
      width={image.width}
      height={image.height}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
    />
  ) : (
    <div className="project-note">
      <span className="mono">FIELD NOTE / {project.id}</span>
      <span className="note-index" aria-hidden="true">
        {project.id}
      </span>
      <p>{project.visual?.[0] ?? project.title}</p>
      <small>{project.visual?.[1] ?? project.stack.join(" / ")}</small>
    </div>
  );
}
export default function App() {
  const [locale, setLocale] = useState<Locale>(() =>
    preference("portfolio-locale", ["id", "en"], "id"),
  );
  const [theme, setTheme] = useState<Theme>(() =>
    preference("portfolio-theme", ["dark", "light"], "dark"),
  );
  const [route, setRoute] = useState<Route>(() => readRoute());
  const [menu, setMenu] = useState(false);
  const main = useRef<HTMLElement>(null);
  const t = copy[locale];
  useEffect(() => {
    const handler = () => {
      setRoute((current) => {
        const next = readRoute();
        return JSON.stringify(current) === JSON.stringify(next)
          ? current
          : next;
      });
      setMenu(false);
    };
    addEventListener("hashchange", handler);
    return () => removeEventListener("hashchange", handler);
  }, []);
  useEffect(() => {
    if (!menu) return;
    const handler = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenu(false);
        document.querySelector<HTMLButtonElement>(".menu-toggle")?.focus();
      }
    };
    addEventListener("keydown", handler);
    return () => removeEventListener("keydown", handler);
  }, [menu]);
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("portfolio-locale", locale);
      localStorage.setItem("portfolio-theme", theme);
    } catch {
      /* storage is optional */
    }
  }, [locale, theme]);
  useLayoutEffect(() => {
    const project =
      route.kind === "detail"
        ? allProjects[locale].find((p) => p.slug === route.slug)
        : undefined;
    document.title = `${project?.title ?? (route.kind === "projects" ? t.work : route.kind === "notfound" ? t.notFoundTitle : t.home)} - ${profileName}`;
    const id = route.kind === "home" ? route.section : undefined;
    {
      const target = id ? document.getElementById(id) : main.current;
      if (!navigator.userAgent.includes("jsdom")) {
        if (id) target?.scrollIntoView({ behavior: "instant", block: "start" });
        else window.scrollTo({ top: 0, behavior: "instant" });
      }
      target?.focus({ preventScroll: true });
    }
  }, [route, locale, t]);
  const nav = [
    ["/", t.home, route.kind === "home" && !route.section],
    [
      "/projects",
      t.work,
      route.kind === "projects" ||
        route.kind === "detail" ||
        (route.kind === "home" && route.section === "selected-projects"),
    ],
    ["/#about", t.about, route.kind === "home" && route.section === "about"],
    [
      "/#contact",
      t.contact,
      route.kind === "home" && route.section === "contact",
    ],
  ] as const;
  return (
    <>
      <a
        className="skip-link"
        href="#main"
        onClick={(e) => {
          e.preventDefault();
          main.current?.focus();
        }}
      >
        {t.skip}
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href={routeHref("/")} aria-label={profileName}>
            ir<span className="brand-mark">/</span>
            <span className="brand-note">
              developer
              <br />
              field notes
            </span>
          </a>
          <button
            className="menu-toggle control"
            aria-controls="primary-nav"
            aria-expanded={menu}
            onClick={() => setMenu(!menu)}
          >
            {t.menu} <span aria-hidden="true">{menu ? "−" : "+"}</span>
          </button>
          <nav
            id="primary-nav"
            className={`nav ${menu ? "open" : ""}`}
            aria-label={t.nav}
          >
            {nav.map(([path, label, active], i) => (
              <a
                key={path}
                href={routeHref(path)}
                aria-current={active ? "page" : undefined}
                onClick={() => setMenu(false)}
              >
                <span className="nav-number" aria-hidden="true">
                  0{i + 1}
                </span>
                {label}
              </a>
            ))}
          </nav>
          <div className="controls">
            <button
              className="control"
              aria-label={t.language}
              onClick={() => setLocale(locale === "id" ? "en" : "id")}
            >
              {locale.toUpperCase()}
            </button>
            <button
              className="control theme-control"
              aria-label={theme === "dark" ? t.lightTheme : t.darkTheme}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? "☀" : "☾"}
            </button>
          </div>
        </div>
      </header>
      <main id="main" ref={main} tabIndex={-1}>
        {route.kind === "home" && <Home t={t} locale={locale} />}
        {route.kind === "projects" && <ProjectArchive t={t} locale={locale} />}
        {route.kind === "detail" && (
          <Detail
            t={t}
            project={allProjects[locale].find((p) => p.slug === route.slug)}
            legacy={route.slug.startsWith("sample-")}
          />
        )}
        {route.kind === "notfound" && <NotFound t={t} />}
      </main>
      <footer className="container footer">
        <span>
          © {new Date().getFullYear()} {profileName}
        </span>
        <span>{t.footer}</span>
        <a href={routeHref("/")}>↑ {t.home}</a>
      </footer>
    </>
  );
}
function HeroProjects({ t, locale }: { t: Text; locale: Locale }) {
  const [active, setActive] = useState(0);
  const featured = projects[locale].slice(0, 5);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  function keydown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight" || event.key === "ArrowDown")
      next = (index + 1) % featured.length;
    else if (event.key === "ArrowLeft" || event.key === "ArrowUp")
      next = (index + featured.length - 1) % featured.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = featured.length - 1;
    else return;
    event.preventDefault();
    setActive(next);
    refs.current[next]?.focus();
  }
  return (
    <div className="project-selector">
      <div className="preview-top mono">
        <span>
          <span className="status-dot" /> {t.selected}
        </span>
        <span>INDEX / 0{active + 1}</span>
      </div>
      <div className="preview-stage">
        {featured.map((p, i) => (
          <div
            className={`hero-panel ${active === i ? "is-active" : ""}`}
            id={`project-panel-${i}`}
            key={p.id}
            role="tabpanel"
            aria-labelledby={`project-tab-${i}`}
            aria-hidden={active !== i}
            inert={active !== i}
          >
            <div className="preview-image">
              <Visual project={p} t={t} eager={active === i} />
            </div>
            <div className="preview-caption">
              <span className="mono">
                {categoryLabels[locale][p.category]}
                {p.stack[0] ? ` / ${p.stack[0]}` : ""}
              </span>
              <h2>{p.title}</h2>
              <p>{p.summary}</p>
              <a className="text-link" href={routeHref(`/projects/${p.slug}`)}>
                {t.details} <span aria-hidden="true">↗</span>
              </a>
              {p.externalUrl && (
                <External href={p.externalUrl} t={t}>
                  {locale === "id" ? "Kunjungi website" : "Visit website"}
                </External>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="project-tabs" role="tablist" aria-label={t.select}>
        {featured.map((p, i) => (
          <button
            role="tab"
            id={`project-tab-${i}`}
            aria-selected={active === i}
            aria-controls={`project-panel-${i}`}
            tabIndex={active === i ? 0 : -1}
            key={p.id}
            ref={(node) => {
              refs.current[i] = node;
            }}
            onKeyDown={(e) => keydown(e, i)}
            onClick={() => setActive(i)}
          >
            <span className="mono">{p.id}</span>
            <span>{p.title}</span>
            <span aria-hidden="true">↗</span>
          </button>
        ))}
      </div>
    </div>
  );
}
function Home({ t, locale }: { t: Text; locale: Locale }) {
  const root = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState("");
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.08 },
    );
    root.current
      ?.querySelectorAll("[data-reveal]")
      .forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setStatus(t.copied);
    } catch {
      setStatus(t.copyFailed);
    }
  }
  return (
    <div ref={root} className="terminal-home">
      <section className="hero container" id="hero">
        <div className="hero-identity">
          <p className="eyebrow">
            <span className="cross" aria-hidden="true">
              +
            </span>{" "}
            {t.role}
          </p>
          <h1>
            Ikbar
            <br />
            <span>Rabbani</span>
            <br />
            <span>Purwanto</span>
            <span className="name-period">.</span>
          </h1>
          <p className="hero-copy">{t.intro}</p>
          <div className="hero-actions">
            <a
              className="button primary"
              href={routeHref("/#selected-projects")}
            >
              {t.cta}
              <span aria-hidden="true">↗</span>
            </a>
            <a className="button secondary" href={routeHref("/#contact")}>
              {t.contactCta}
              <span aria-hidden="true">↘</span>
            </a>
          </div>
          <div className="hero-footnote mono">
            <span>01 - PERSONAL PORTFOLIO</span>
            <span>BACKEND / LINUX / AUTOMATION</span>
          </div>
        </div>
        <HeroProjects t={t} locale={locale} />
      </section>
      <ScrollShowcase locale={locale} />
      <HomeProjectIndex locale={locale} />
      <section
        className="section container about-section"
        id="about"
        tabIndex={-1}
        data-reveal
      >
        <div className="about-heading">
          <p className="eyebrow">02 / {t.about}</p>
          <h2 className="linebreak">{t.aboutTitle}</h2>
          <p className="mono about-signature">
            {profileName.toUpperCase()}
            <br />
            {t.role}
          </p>
        </div>
        <div className="about-body">
          <p className="large-copy">{t.aboutText}</p>
          <div className="practice-note">
            <span className="mono">↳ {t.experience}</span>
            <p>{t.experienceText}</p>
          </div>
          <h3 className="eyebrow toolkit-label">{t.skills}</h3>
          <div className="skills-list">
            {skills.map((s, i) => (
              <div key={s.title.en}>
                <span className="mono">0{i + 1}</span>
                <h3>{s.title[locale]}</h3>
                <p>{s.tools}</p>
                <div className="skill-projects">
                  <span className="mono">{t.applied}</span>
                  {s.projects.map((slug) => {
                    const project = allProjects[locale].find(
                      (p) => p.slug === slug,
                    );
                    return project ? (
                      <a key={slug} href={routeHref(`/projects/${slug}`)}>
                        {project.title} ↗
                      </a>
                    ) : null;
                  })}
                </div>
                {s.note && <p className="skill-note">{s.note[locale]}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="container learning-section">
        <p className="eyebrow">↳ {t.learning}</p>
        <div>
          {achievements.map((a) => (
            <External key={a.href} href={a.href} t={t}>
              {a.title}
            </External>
          ))}
          <span className="learning-note mono">Laravel & Nuxt.js</span>
        </div>
      </section>
      <section
        id="contact"
        className="section container contact"
        tabIndex={-1}
        data-reveal
      >
        <p className="eyebrow">03 / {t.contact}</p>
        <div className="contact-layout">
          <h2 className="linebreak">{t.contactTitle}</h2>
          <div>
            <p>{t.contactText}</p>
            <a className="button primary" href={`mailto:${email}`}>
              {t.send} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <div className="contact-bottom">
          <div>
            <a className="email" href={`mailto:${email}`}>
              {email}
            </a>
            <button className="copy-button" onClick={copyEmail}>
              {t.copy} <span aria-hidden="true">⧉</span>
            </button>
            <p className="copy-status" role="status">
              {status}
            </p>
          </div>
          <div className="contact-options">
            <External href="https://wa.me/6281413265114" t={t}>
              WhatsApp
            </External>
            <a className="text-link" href={"tel:+" + "6281413265114"}>
              +62 81413265114
            </a>
          </div>
        </div>
        <nav className="social-links" aria-label={t.socialLabel}>
          {socialLinks.map((link) => (
            <External href={link.href} t={t} key={link.label}>
              {link.label}
            </External>
          ))}
        </nav>
      </section>
    </div>
  );
}
function ProjectCard({
  project: p,
  t,
  featured = false,
}: {
  project: Project;
  t: Text;
  featured?: boolean;
}) {
  const locale = t === copy.id ? "id" : "en";
  const media = projectImages(p.slug, locale);
  const g = galleryCopy[locale];
  return (
    <article
      className={`project-card ${featured ? "featured-card" : ""} ${media.length ? "image-led" : "text-led"}`}
    >
      <a
        className="project-visual"
        href={routeHref(`/projects/${p.slug}`)}
        aria-label={`${t.details}: ${p.title}`}
      >
        <Visual project={p} t={t} />
        {media.length > 0 && (
          <span className="cover-label mono">
            {g.preview} / {String(media.length).padStart(2, "0")}
          </span>
        )}
        <span className="visual-arrow" aria-hidden="true">
          ↗
        </span>
      </a>
      <div className="card-body">
        <p className="eyebrow">
          /{p.id} - {p.category}
        </p>
        <h3>
          <a href={routeHref(`/projects/${p.slug}`)}>{p.title}</a>
        </h3>
        <p>{p.summary}</p>
        {p.statusLabel && (
          <p className="project-status mono">{p.statusLabel}</p>
        )}
        {featured && (
          <p className="contribution">
            <strong>{t.contribution}</strong>
            <br />
            {p.contribution}
          </p>
        )}
        <Tags project={p} />
        <div className="card-links">
          <a className="text-link" href={routeHref(`/projects/${p.slug}`)}>
            {media.length ? g.open : t.details} ↗
          </a>
          {p.externalUrl && (
            <External href={p.externalUrl} t={t}>
              {p.externalLabel}
              {p.note ? " · " + (t === copy.id ? "arsip" : "archive") : ""}
            </External>
          )}
        </div>
        {p.note && <p className="link-note">{p.note}</p>}
      </div>
    </article>
  );
}
function ProjectArchive({ t, locale }: { t: Text; locale: Locale }) {
  const [category, setCategory] = useState<Category | "all">("all");
  const visible = projects[locale].filter(
    (p) => category === "all" || p.category === category,
  );
  const earlier = archivedProjects[locale].filter(
    (p) => category === "all" || p.category === category,
  );
  return (
    <section className="container section projects-page">
      <p className="eyebrow">INDEX / {t.archive}</p>
      <div className="section-heading">
        <h1>
          {t.work}
          <span className="name-period">.</span>
        </h1>
        <p>{t.projectIntro}</p>
      </div>
      <div className="filters" role="group" aria-label={t.filter}>
        {(["all", ...categories] as const).map((c) => (
          <button
            aria-pressed={category === c}
            key={c}
            onClick={() => setCategory(c)}
          >
            {c === "all" ? t.all : categoryLabels[locale][c]}
          </button>
        ))}
        <span className="mono result-count" role="status">
          {visible.length + earlier.length} {t.count}
        </span>
      </div>
      <div className="archive-grid">
        {visible.map((p, i) => (
          <ProjectCard
            key={p.id}
            project={p}
            t={t}
            featured={category === "all" && i === 0}
          />
        ))}
      </div>
      {earlier.length > 0 && (
        <section className="legacy-projects">
          <h2>{t.older}</h2>
          <div className="archive-grid">
            {earlier.map((project) => (
              <ProjectCard key={project.slug} project={project} t={t} />
            ))}
          </div>
        </section>
      )}
    </section>
  );
}
function Detail({
  project: p,
  t,
  legacy,
}: {
  project?: Project;
  t: Text;
  legacy: boolean;
}) {
  if (!p)
    return legacy ? (
      <section className="container section legacy">
        <p className="eyebrow">ARCHIVE / SAMPLE</p>
        <h1>Sample</h1>
        <p>{t.legacy}</p>
        <a className="button primary" href={routeHref("/projects")}>
          {t.back} ↗
        </a>
      </section>
    ) : (
      <NotFound t={t} />
    );
  return (
    <article className="container section detail">
      <a className="text-link back" href={routeHref("/projects")}>
        ← {t.back}
      </a>
      <p className="eyebrow">
        FIELD NOTE / {p.id} / {p.category}
      </p>
      <h1>
        {p.title}
        <span className="name-period">.</span>
      </h1>
      <p className="detail-intro">{p.summary}</p>
      <Tags project={p} />
      {projectImages(p.slug, t === copy.id ? "id" : "en").length ? (
        <ProjectGallery
          key={p.slug}
          images={projectImages(p.slug, t === copy.id ? "id" : "en")}
          title={p.title}
          locale={t === copy.id ? "id" : "en"}
        />
      ) : (
        <div className="missing-screens">
          <p className="eyebrow">FIELD NOTE / {p.id}</p>
          <h2>{galleryCopy[t === copy.id ? "id" : "en"].missing}</h2>
          <p>{galleryCopy[t === copy.id ? "id" : "en"].missingText}</p>
        </div>
      )}
      {p.problem && (
        <section className="project-problem">
          <p className="eyebrow">{t.problem}</p>
          <p>{p.problem}</p>
        </section>
      )}
      {p.status && (
        <section className="project-verification">
          <h2>{t.verification}</h2>
          <p className="project-status mono">{p.statusLabel}</p>
          <p>{p.status}</p>
        </section>
      )}
      <div className="detail-body">
        <section>
          <p className="eyebrow">01 / {t.contribution}</p>
          <h2>{p.title}</h2>
          <p>{p.contribution}</p>
        </section>
        {(p.stack.length > 0 || p.externalUrl || p.note) && (
          <section>
            {p.stack.length > 0 && <p className="eyebrow">02 / {t.stack}</p>}
            <Tags project={p} />
            {p.externalUrl && (
              <External
                href={p.externalUrl}
                t={t}
                className={p.note ? "button secondary" : "button primary"}
              >
                {p.externalLabel}
                {p.note ? " · " + (t === copy.id ? "arsip" : "archive") : ""}
              </External>
            )}
            {p.note && <p className="link-note">{p.note}</p>}
          </section>
        )}
      </div>
      <p className="source-note">{t.detailNote}</p>
    </article>
  );
}
function NotFound({ t }: { t: Text }) {
  return (
    <section className="container section not-found">
      <p className="eyebrow">ERROR / 404</p>
      <h1>{t.notFoundTitle}</h1>
      <p>{t.notFoundText}</p>
      <a className="button primary" href={routeHref("/")}>
        {t.notFoundAction} ↗
      </a>
    </section>
  );
}
