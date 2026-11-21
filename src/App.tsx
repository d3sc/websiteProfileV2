import { useEffect, useRef, useState } from "react";
import { achievements, categories, categoryLabels, copy, projects, socialLinks, type Category, type Locale, type Project } from "./data";
import { readRoute, routeHref, type Route } from "./router";
import "./styles.css";

type Theme = "light" | "dark";
type Translation = (typeof copy)[Locale];
const PREVIEW_COUNT = 3;

function preference<T extends string>(key: string, values: readonly T[], fallback: T): T {
  try {
    const value = localStorage.getItem(key);
    return value && values.includes(value as T) ? (value as T) : fallback;
  } catch { return fallback; }
}
function systemTheme(): Theme { return typeof matchMedia !== "undefined" && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"; }

function App() {
  const [locale, setLocale] = useState<Locale>(() => preference("portfolio-locale", ["id", "en"], "id"));
  const [theme, setTheme] = useState<Theme>(() => preference("portfolio-theme", ["light", "dark"], systemTheme()));
  const [route, setRoute] = useState<Route>(() => readRoute());
  const [menuOpen, setMenuOpen] = useState(false);
  const mainRef = useRef<HTMLElement>(null);
  const t = copy[locale];
  const localizedProjects = projects[locale];

  useEffect(() => {
    const onHashChange = () => { setRoute(readRoute()); setMenuOpen(false); };
    addEventListener("hashchange", onHashChange);
    return () => removeEventListener("hashchange", onHashChange);
  }, []);
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        document.querySelector<HTMLButtonElement>(".menu-toggle")?.focus();
      }
    };
    addEventListener("keydown", onKeyDown);
    return () => removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);
  useEffect(() => { const onScroll = () => { const max = document.documentElement.scrollHeight - window.innerHeight; document.documentElement.style.setProperty("--scroll-progress", `${max ? Math.round(window.scrollY / max * 100) : 0}`); }; addEventListener("scroll", onScroll, { passive: true }); onScroll(); return () => removeEventListener("scroll", onScroll); }, []);
  useEffect(() => { document.documentElement.lang = locale;
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem("portfolio-locale", locale); localStorage.setItem("portfolio-theme", theme); } catch { /* optional storage */ }
  }, [locale, theme]);
  useEffect(() => {
    const title = route.kind === "projects" ? t.pageTitles.projects : route.kind === "detail" ? t.pageTitles.detail : route.kind === "notfound" ? t.pageTitles.notFound : t.pageTitles.home;
    document.title = `${title} — Ikbar Rabbani`;
    const target = route.kind === "home" && route.section ? document.getElementById(route.section) : null;
    requestAnimationFrame(() => {
      if (target) { target.scrollIntoView({ behavior: "smooth", block: "start" }); target.focus({ preventScroll: true }); }
      else { if (!navigator.userAgent.toLowerCase().includes("jsdom")) window.scrollTo({ top: 0, behavior: "smooth" }); mainRef.current?.focus({ preventScroll: true }); }
    });
  }, [route, locale, t.pageTitles]);

  const navItems = [
    { path: "/", label: t.home, active: route.kind === "home" && !route.section },
    { path: "/projects", label: t.work, active: route.kind === "projects" || route.kind === "detail" },
    { path: "/#about", label: t.about, active: route.kind === "home" && route.section === "about" },
    { path: "/#contact", label: t.contact, active: route.kind === "home" && route.section === "contact" },
  ];
  return <>
    <div className="scroll-progress" aria-hidden="true" />
    <a className="skip-link" href="#main" onClick={(event) => { event.preventDefault(); mainRef.current?.focus({ preventScroll: true }); }}> {t.skip}</a>
    <header className="site-header"><div className="container header-inner">
      <a className="brand" href={routeHref("/")} aria-label="Ikbar Rabbani">IR<span>;</span></a>
      <button className="menu-toggle" aria-expanded={menuOpen} aria-controls="primary-nav" onClick={() => setMenuOpen((open) => !open)}>{t.menu}</button>
      <nav id="primary-nav" className={menuOpen ? "nav open" : "nav"} aria-label={t.nav}>{navItems.map((item) => <a key={item.path} href={routeHref(item.path)} aria-current={item.active ? "page" : undefined} onClick={() => setMenuOpen(false)}>{item.label}</a>)}</nav>
      <div className="controls"><button className="control" onClick={() => setLocale((current) => current === "id" ? "en" : "id")} aria-label={t.language}>{locale.toUpperCase()}</button><button className="control" onClick={() => setTheme((current) => current === "light" ? "dark" : "light")} aria-label={theme === "light" ? t.darkTheme : t.lightTheme}>{theme === "light" ? "☾" : "☀"}</button></div>
    </div></header>
    <main id="main" ref={mainRef} tabIndex={-1} key={`${route.kind}:${route.kind === "detail" ? route.slug : ""}:${route.kind === "home" ? route.section ?? "" : ""}`} className="motion-page" data-motion-view={route.kind}>
      {route.kind === "home" && <Home t={t} locale={locale} projects={localizedProjects} />}
      {route.kind === "projects" && <Projects t={t} locale={locale} projects={localizedProjects} />}
      {route.kind === "detail" && <Detail t={t} locale={locale} project={localizedProjects.find((project) => project.slug === route.slug)} />}
      {route.kind === "notfound" && <NotFound t={t} />}
    </main>
    <footer className="container footer">© {new Date().getFullYear()} Ikbar Rabbani · {t.fictionalLabel}</footer>
  </>;
}

function Home({ t, locale, projects }: { t: Translation; locale: Locale; projects: Project[] }) {
  const [active, setActive] = useState("hero"); const [status, setStatus] = useState("");
  const ids = ["hero", "about", "capabilities", "tools", "selected-projects", "game", "achievements", "contact"]; const l = locale === "en" ? { about:"About", capabilities:"Capabilities", tools:"Tools", selected:"Selected projects", game:"Game work", achievements:"Achievements", contact:"Contact", copy:"Copy email", copied:"Email copied", fallback:"Copy unavailable — select the email manually" } : { about:"Tentang", capabilities:"Kapabilitas", tools:"Alat", selected:"Proyek pilihan", game:"Karya game", achievements:"Pencapaian", contact:"Kontak", copy:"Salin email", copied:"Email tersalin", fallback:"Penyalinan tidak tersedia — pilih email secara manual" };
  useEffect(() => { if (typeof IntersectionObserver === "undefined") return; const observer = new IntersectionObserver(entries => entries.forEach(entry => entry.isIntersecting && setActive(entry.target.id)), { rootMargin: "-25% 0px -60%" }); ids.map(id => document.getElementById(id)).filter(Boolean).forEach(node => observer.observe(node!)); return () => observer.disconnect(); }, []);
  useEffect(() => { if (typeof IntersectionObserver === "undefined") { document.querySelectorAll("[data-reveal]").forEach(node => node.classList.add("is-visible")); return; } const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); } }), { threshold: .08 }); document.querySelectorAll("[data-reveal]").forEach(node => observer.observe(node)); return () => observer.disconnect(); }, []);
  const copyEmail = async () => { try { await navigator.clipboard.writeText(t.email); setStatus(l.copied); } catch { setStatus(l.fallback); } };
  const nav = ids.map(id => ({ id, label: id === "hero" ? "01" : id === "selected-projects" ? l.selected : id === "about" ? l.about : id === "capabilities" ? l.capabilities : id === "tools" ? l.tools : id === "game" ? l.game : id === "achievements" ? l.achievements : l.contact }));
  return <><nav className="section-nav" aria-label={locale === "en" ? "Home sections" : "Bagian beranda"}>{nav.map(item => <span key={item.id} className={active === item.id ? "active" : ""} aria-current={active === item.id ? "location" : undefined}>{item.label}</span>)}</nav>
  <section id="hero" data-motion="section" data-reveal className="hero container"><p className="eyebrow">{locale === "en" ? "FullStack Programmer · Web Developer" : "Programmer FullStack · Pengembang Web"} · 01</p><h1>Ikbar<br /><em>Rabbani.</em></h1><p className="hero-copy">{t.intro}</p><p className="hero-positioning">Learning · Evolving · Innovating in Technology</p><a className="button primary" href={routeHref("/projects")}>{t.cta} ↘</a></section>
  <section id="about" tabIndex={-1} data-motion="section" data-reveal className="section container split"><div><p className="eyebrow">02 · {l.about}</p><h2>{t.aboutTitle}</h2></div><p className="large-copy">{t.aboutText}</p></section>
  <section id="capabilities" data-motion="section" data-reveal className="section container"><div className="section-heading"><div><p className="eyebrow">03 · {l.capabilities}</p><h2>{t.capTitle}</h2></div></div><div className="cap-grid">{[[t.capFrontend, t.capFrontendText], [t.capBackend, t.capBackendText], [t.capTools, t.capToolsText]].map(([title, text]) => <article className="cap" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></section>
  <section id="tools" data-motion="section" data-reveal className="section container tools-section"><p className="eyebrow">04 · {l.tools}</p><div className="tools-list">JavaScript · React JS · json-web-server · CSS · HTML · Bootstrap 5 · Godot 3</div></section>
  <section id="selected-projects" data-motion="section" data-reveal className="section container"><div className="section-heading"><div><p className="eyebrow">05 · {l.selected}</p><h2>{t.work}</h2></div><p className="notice">{t.previewDisclaimer}</p></div><div className="project-grid preview">{projects.slice(0, PREVIEW_COUNT).map(project => <Card key={project.id} project={project} t={t} />)}</div><a className="text-button" href={routeHref("/projects")}>{t.viewAll} ↗</a></section>
  <section id="game" data-motion="section" data-reveal className="section container split"><div><p className="eyebrow">06 · {l.game}</p><h2>{t.currentTitle}</h2></div><p className="large-copy">{t.gameIntro}</p></section>
  <section id="achievements" data-motion="section" data-reveal className="section container"><div className="section-heading"><div><p className="eyebrow">07 · {l.achievements}</p><h2>{t.achievementsTitle}</h2></div><p className="notice">{t.achievementsIntro}</p></div><div className="achievement-list">{achievements[locale].map(item => <details key={item.title}><summary>{item.title}</summary><p>{item.description}</p></details>)}</div></section>
  <section id="contact" tabIndex={-1} data-motion="section" data-reveal className="contact container"><div><p className="eyebrow">08 · {l.contact}</p><h2>{t.contactTitle}</h2><p>{t.contactText}</p><p>{t.location}</p><p><a href={`tel:${t.phone}`}>{t.phone}</a></p><p><a className="email" href={`mailto:${t.email}`}>{t.email}</a> <button className="copy-button" onClick={copyEmail}>{l.copy}</button></p><p className="copy-status" role="status" aria-live="polite">{status}</p><nav aria-label={t.socialLabel}>{socialLinks.map(link => <a key={link.label} href={link.href} target="_blank" rel="noreferrer" aria-label={`${link.label} (${t.external})`}>{link.label}</a>)}</nav></div></section></>;
}

function Card({ project, t }: { project: Project; t: Translation }) { const locale: Locale = t === copy.en ? "en" : "id"; return <article data-motion="card" className="card"><img data-motion="image" src={project.image} alt={project.alt} width="640" height="360" /><div className="card-body"><div className="card-top"><span>/{project.id}</span><span>{categoryLabels[locale][project.category]}</span></div><h3>{project.title}</h3><p>{project.summary}</p><div className="tags">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div><a className="text-button" href={routeHref(`/projects/${project.slug}`)}>{t.details} ↗</a>{project.externalUrl && <a className="text-button" href={project.externalUrl} target="_blank" rel="noreferrer" aria-label={`${project.externalLabel} (${t.external})`}>{project.externalLabel} ↗</a>}</div></article>; }

function Projects({ t, locale, projects }: { t: Translation; locale: Locale; projects: Project[] }) {
  const [category, setCategory] = useState<Category | "all">("all");
  const featured = projects[0];
  const visible = projects.filter((project) => category === "all" || project.category === category);
  return <section data-motion="section" id="projects" className="section container projects-page">
    <div className="section-heading"><div><p className="eyebrow">02 · {t.explore}</p><h1>{t.work}</h1></div><p className="notice">{t.fictional}</p></div>
    <section className="featured-project" aria-labelledby="featured-heading"><div className="featured-image-wrap"><img src={featured.image} alt={featured.alt} width="1280" height="720" /><span className="corner corner-top" aria-hidden="true" /><span className="corner corner-bottom" aria-hidden="true" /></div><div className="featured-copy"><p className="eyebrow">{t.featuredLabel} · /{featured.id}</p><h2 id="featured-heading">{featured.title}</h2><p>{featured.summary}</p><div className="tags">{featured.stack.map((tag) => <span key={tag}>{tag}</span>)}</div><a className="button primary" href={routeHref(`/projects/${featured.slug}`)}>{t.details} ↗</a>{featured.externalUrl && <a className="button" href={featured.externalUrl} target="_blank" rel="noreferrer" aria-label={`${featured.externalLabel} (${t.external})`}>{featured.externalLabel} ↗</a>}</div></section>
    <section className="current-work" aria-labelledby="current-heading"><div><p className="eyebrow">03 · {t.currentLabel}</p><h2 id="current-heading">{t.currentTitle}</h2></div><div className="current-panel"><span className="status-dot" aria-hidden="true" /><div><p className="current-status">{t.currentStatus}</p><h3>{t.currentProject}</h3><p>{t.currentNote}</p><p className="current-phase"><strong>{t.currentPhaseLabel}:</strong> {t.currentPhase}</p><a className="text-button" href={routeHref(`/projects/${projects[3].slug}`)}>{t.currentLink} ↗</a></div></div></section>
    <section className="all-projects" aria-labelledby="all-heading"><div className="section-heading"><div><p className="eyebrow">04 · {t.allProjectsLabel}</p><h2 id="all-heading">{t.allProjectsTitle}</h2></div></div><div className="filters" role="group" aria-label={t.filter}><button className={category === "all" ? "selected" : ""} aria-pressed={category === "all"} onClick={() => setCategory("all")}>{t.all}</button>{categories.map((item) => <button key={item} className={category === item ? "selected" : ""} aria-pressed={category === item} onClick={() => setCategory(item)}>{categoryLabels[locale][item]}</button>)}</div><p className="result-count">{visible.length} {t.count}</p><div className="project-grid">{visible.map((project) => <Card key={project.id} project={project} t={t} />)}</div></section>
  </section>;
}

function Detail({ t, locale, project }: { t: Translation; locale: Locale; project?: Project }) { if (!project) return <NotFound t={t} />; const date = new Intl.DateTimeFormat(locale === "id" ? "id-ID" : "en-US", { dateStyle: "long" }).format(new Date(`${project.date}T12:00:00`)); const sections = [[t.detailOverview, project.overview], [t.detailChallenge, project.challenge], [t.detailApproach, project.approach], [t.detailOutcome, project.outcome]]; return <article data-motion="section" className="detail container"><a className="back" href={routeHref("/projects")}>← {t.back}</a><img data-motion="detail-image" className="detail-image" src={project.image} alt={project.alt} width="1280" height="720" /><p className="eyebrow">{t.sample} · {categoryLabels[locale][project.category]}</p><h1>{project.title}</h1><div className="meta"><time dateTime={project.date}>{t.date}: {date}</time><span>{t.duration}: {project.duration}</span></div><div className="tags">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div><p className="notice">{t.fictional}</p>{project.externalUrl && <p><a className="button primary" href={project.externalUrl} target="_blank" rel="noreferrer" aria-label={`${project.externalLabel} (${t.external})`}>{project.externalLabel} ↗</a></p>}{sections.map(([heading, text]) => <section className="detail-section" key={heading}><h2>{heading}</h2><p>{text}</p></section>)}</article>; }
function NotFound({ t }: { t: Translation }) { return <section data-motion="section" className="section container not-found"><p className="eyebrow">404</p><h1>{t.notFoundTitle}</h1><p>{t.notFoundText}</p><a className="button primary" href={routeHref("/")}>{t.notFoundAction}</a></section>; }
export default App;