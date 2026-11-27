import { useLayoutEffect, useRef, useState } from "react";
import { projects, type Locale } from "./data";
import { projectImages } from "./project-media";
import { ProjectGallery } from "./ProjectGallery";
import { routeHref } from "./router";

export function ScrollShowcase({ locale }: { locale: Locale }) {
  const items = projects[locale].flatMap((project) =>
    projectImages(project.slug, locale).map((image, index) => ({
      project,
      image,
      index,
    })),
  );
  const section = useRef<HTMLElement>(null);
  const viewport = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const restoring = useRef(false);
  const metrics = useRef({ start: 0, travel: 0, padding: 0 });
  const [mode, setMode] = useState<"pinned" | "manual" | "static">("static");
  const [current, setCurrent] = useState(0);
  const [selection, setSelection] = useState<{
    slug: string;
    index: number;
    opener: HTMLButtonElement;
  } | null>(null);
  const id = locale === "id";
  const title = id ? "Proyek terpilih" : "Selected work";
  const selected =
    selection && projects[locale].find((p) => p.slug === selection.slug);

  useLayoutEffect(() => {
    const root = section.current,
      windowEl = viewport.current,
      rail = track.current;
    if (!root || !windowEl || !rail || !window.matchMedia) return;
    const desktop = matchMedia("(min-width: 1000px) and (min-height: 580px)");
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0,
      live = true;
    const getMode = () =>
      reduced.matches ? "static" : desktop.matches ? "pinned" : "manual";
    const nearest = (x: number) => {
      let nearest = 0,
        delta = Infinity;
      [...rail.children].forEach((child, i) => {
        const d = Math.abs(
          (child as HTMLElement).offsetLeft - metrics.current.padding - x,
        );
        if (d < delta) {
          delta = d;
          nearest = i;
        }
      });
      setCurrent((old) => (old === nearest ? old : nearest));
    };
    const paint = () => {
      frame = 0;
      if (!live) return;
      if (getMode() === "pinned") {
        // Absolute position is recomputed: hero reflow/font loading cannot leave stale bounds.
        const header =
          document.querySelector<HTMLElement>(".site-header")?.offsetHeight ??
          0;
        metrics.current.start =
          root.getBoundingClientRect().top + scrollY - header;
        const x = Math.max(
          0,
          Math.min(metrics.current.travel, scrollY - metrics.current.start),
        );
        rail.style.transform = `translate3d(${-x}px,0,0)`;
        root.style.setProperty(
          "--rail-progress",
          String(metrics.current.travel ? x / metrics.current.travel : 0),
        );
        nearest(x);
      } else nearest(windowEl.scrollLeft);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(paint);
    };
    const measure = () => {
      const next = getMode();
      root.dataset.mode = next;
      setMode(next);
      const header =
        document.querySelector<HTMLElement>(".site-header")?.offsetHeight ?? 0;
      root.style.setProperty("--rail-top", `${header}px`);
      const travel = Math.max(0, rail.scrollWidth - windowEl.clientWidth);
      metrics.current = {
        start: root.getBoundingClientRect().top + scrollY - header,
        travel,
        padding: parseFloat(getComputedStyle(rail).paddingLeft) || 0,
      };
      root.style.height =
        next === "pinned"
          ? `${(root.querySelector(".rail-viewport") as HTMLElement).offsetHeight + travel}px`
          : "";
      if (next !== "pinned") rail.style.transform = "none";
      else windowEl.scrollLeft = 0;
      schedule();
    };
    const observer =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(measure)
        : null;
    observer?.observe(rail);
    observer?.observe(windowEl);
    const header = document.querySelector<HTMLElement>(".site-header");
    if (header) observer?.observe(header);
    addEventListener("scroll", schedule, { passive: true });
    addEventListener("resize", measure);
    windowEl.addEventListener("scroll", schedule, { passive: true });
    desktop.addEventListener("change", measure);
    reduced.addEventListener("change", measure);
    document.fonts?.ready.then(() => {
      if (live) measure();
    });
    measure();
    return () => {
      live = false;
      cancelAnimationFrame(frame);
      observer?.disconnect();
      removeEventListener("scroll", schedule);
      removeEventListener("resize", measure);
      windowEl.removeEventListener("scroll", schedule);
      desktop.removeEventListener("change", measure);
      reduced.removeEventListener("change", measure);
    };
  }, [locale]);

  function reveal(index: number, keyboard = false) {
    const child = track.current?.children[index] as HTMLElement | undefined;
    if (!child || !viewport.current) return;
    const x = Math.max(
      0,
      Math.min(
        metrics.current.travel,
        child.offsetLeft - metrics.current.padding,
      ),
    );
    if (mode === "pinned") {
      if (keyboard)
        window.scrollTo({
          top: metrics.current.start + x,
          behavior: "instant",
        });
    } else if (mode === "manual")
      viewport.current.scrollTo({
        left: x,
        behavior: keyboard ? "instant" : "smooth",
      });
  }
  function skip(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    const index = document.getElementById("project-index");
    index?.scrollIntoView({ behavior: "instant", block: "start" });
    index?.focus({ preventScroll: true });
  }
  return (
    <>
      <section
        id="selected-projects"
        ref={section}
        className="scroll-gallery"
        data-mode="static"
        tabIndex={-1}
        aria-label={title}
      >
        <div className="rail-viewport">
          <div className="rail-heading">
            <div>
              <p className="eyebrow">01 / {title}</p>
              <h2>{id ? "Dibuat untuk digunakan." : "Built to be used."}</h2>
            </div>
            <a className="rail-skip mono" href="#project-index" onClick={skip}>
              {id ? "Lewati galeri" : "Skip gallery"}{" "}
              <span aria-hidden="true">↘</span>
            </a>
          </div>
          <div className="rail-window" ref={viewport}>
            <div className="rail-track" ref={track} role="list">
              {items.map(({ project, image, index }, i) => (
                <figure
                  role="listitem"
                  className={`rail-frame ${index ? "rail-detail" : "rail-overview"}`}
                  key={image.src}
                >
                  <button
                    className="rail-image"
                    aria-haspopup="dialog"
                    aria-label={`${project.title} — ${image.label}`}
                    onFocus={(e) => {
                      if (
                        !restoring.current &&
                        e.currentTarget.matches(":focus-visible")
                      )
                        reveal(i, true);
                    }}
                    onClick={(e) =>
                      setSelection({
                        slug: project.slug,
                        index,
                        opener: e.currentTarget,
                      })
                    }
                  >
                    <img
                      src={image.src}
                      srcSet={image.srcSet}
                      sizes={
                        index
                          ? "(min-width:1000px) 40vw, 86vw"
                          : "(min-width:1000px) 70vw, 86vw"
                      }
                      width={image.width}
                      height={image.height}
                      alt={image.alt}
                      loading={
                        mode === "static" || i <= current + 2 ? "eager" : "lazy"
                      }
                      decoding="async"
                    />
                    <span className="rail-open mono" aria-hidden="true">
                      {id ? "Perbesar" : "Enlarge"} ↗
                    </span>
                  </button>
                  <figcaption>
                    <div className="rail-caption-title">
                      <strong>{project.title}</strong>
                      <span className="mono">
                        {String(i + 1).padStart(2, "0")} /{" "}
                        {index ? (id ? "DETAIL" : "DETAIL") : "OVERVIEW"}
                      </span>
                    </div>
                    <span className="rail-feature mono">{image.label}</span>
                    <p>{image.caption}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
          <div className="rail-footer mono">
            <span>
              {mode === "pinned"
                ? id
                  ? "Gulir untuk menjelajah →"
                  : "Scroll to explore →"
                : mode === "static"
                  ? id
                    ? "Semua screenshot · gerakan dikurangi"
                    : "All screenshots · reduced motion"
                  : id
                    ? "Geser untuk menjelajah →"
                    : "Swipe to explore →"}
            </span>
            {mode === "manual" && (
              <div className="rail-arrows">
                <button
                  aria-label={
                    id ? "Screenshot sebelumnya" : "Previous screenshot"
                  }
                  disabled={current === 0}
                  onClick={() => reveal(current - 1)}
                >
                  ←
                </button>
                <span aria-live="polite">
                  {current + 1} / {items.length}
                </span>
                <button
                  aria-label={id ? "Screenshot berikutnya" : "Next screenshot"}
                  disabled={current === items.length - 1}
                  onClick={() => reveal(current + 1)}
                >
                  →
                </button>
              </div>
            )}
            {mode === "pinned" && (
              <span>
                {String(current + 1).padStart(2, "0")} /{" "}
                {String(items.length).padStart(2, "0")}
              </span>
            )}
          </div>
        </div>
      </section>
      {selected && selection && (
        <ProjectGallery
          key={selected.slug}
          title={selected.title}
          images={projectImages(selected.slug, locale)}
          locale={locale}
          viewerOnly
          openAt={selection}
          onViewerClose={() => {
            restoring.current = true;
            requestAnimationFrame(() => {
              restoring.current = false;
            });
          }}
          caseStudyHref={routeHref(`/projects/${selected.slug}`)}
        />
      )}
    </>
  );
}
