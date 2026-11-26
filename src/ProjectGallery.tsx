import {
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type TouchEvent,
} from "react";
import type { Locale } from "./data";
import { galleryCopy, type ProjectImage } from "./project-media";

export function ProjectGallery({
  images,
  title,
  locale,
}: {
  images: ProjectImage[];
  title: string;
  locale: Locale;
}) {
  const t = galleryCopy[locale];
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState(false);
  const [failed, setFailed] = useState<Record<string, boolean>>({});
  const dialog = useRef<HTMLDialogElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const opener = useRef<HTMLButtonElement>(null);
  const swipe = useRef<{ x: number; y: number } | null>(null);
  const swipedAt = useRef(0);
  const uid = useId();
  const image = images[active];
  const multiple = images.length > 1;

  useEffect(() => {
    if (!open || !dialog.current) return;
    const modal = dialog.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    modal.showModal();
    closeButton.current?.focus();
    return () => {
      modal.close();
      document.body.style.overflow = previousOverflow;
      opener.current?.focus({ preventScroll: true });
    };
  }, [open]);
  useEffect(() => {
    setZoom(false);
  }, [active]);

  function select(index: number) {
    setActive((index + images.length) % images.length);
  }
  function trapFocus(event: KeyboardEvent<HTMLDialogElement>) {
    if (event.key !== "Tab") return;
    const controls = Array.from(
      event.currentTarget.querySelectorAll<HTMLElement>(
        'button:not([disabled]), [tabindex="0"]',
      ),
    );
    if (!controls.length) return;
    const index = controls.indexOf(document.activeElement as HTMLElement);
    event.preventDefault();
    controls[
      (index + (event.shiftKey ? -1 : 1) + controls.length) % controls.length
    ].focus();
  }
  function keyboard(event: KeyboardEvent) {
    if (!multiple || zoom) return;
    const index =
      event.key === "ArrowRight"
        ? active + 1
        : event.key === "ArrowLeft"
          ? active - 1
          : event.key === "Home"
            ? 0
            : event.key === "End"
              ? images.length - 1
              : null;
    if (index !== null) {
      event.preventDefault();
      select(index);
    }
  }
  function touchStart(event: TouchEvent) {
    swipe.current =
      event.touches.length === 1
        ? { x: event.touches[0].clientX, y: event.touches[0].clientY }
        : null;
  }
  function touchEnd(event: TouchEvent) {
    const start = swipe.current;
    swipe.current = null;
    if (!start || !multiple || zoom || !event.changedTouches[0]) return;
    const dx = event.changedTouches[0].clientX - start.x,
      dy = event.changedTouches[0].clientY - start.y;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.4) {
      select(active + (dx < 0 ? 1 : -1));
      swipedAt.current = Date.now();
    }
  }
  if (!image) return null;
  const count = `${active + 1} / ${images.length}`;
  const ratio = Math.min(...images.map((i) => i.width / i.height));
  return (
    <section
      className="project-gallery"
      aria-label={`${t.gallery}: ${title}`}
      onKeyDown={keyboard}
    >
      <div className="gallery-heading">
        <p className="eyebrow">
          {t.gallery} / {title}
        </p>
        <span className="mono">{t.crop}</span>
      </div>
      <div
        className="gallery-stage"
        style={{ aspectRatio: String(ratio) }}
        onTouchStart={touchStart}
        onTouchEnd={touchEnd}
        onTouchCancel={() => {
          swipe.current = null;
        }}
      >
        <button
          ref={opener}
          className="gallery-enlarge"
          aria-label={`${t.enlarge}: ${image.label}`}
          aria-haspopup="dialog"
          onClick={() => {
            if (Date.now() - swipedAt.current > 400) {
              setZoom(false);
              setOpen(true);
            }
          }}
        >
          {failed[image.src] ? (
            <span>{t.missing}</span>
          ) : (
            <img
              key={image.src}
              className="gallery-slide"
              src={image.src}
              srcSet={image.srcSet}
              sizes="(max-width: 700px) 100vw, 1200px"
              width={image.width}
              height={image.height}
              alt={image.alt}
              decoding="async"
              loading="eager"
              onError={() =>
                setFailed((prev) => ({ ...prev, [image.src]: true }))
              }
            />
          )}
          <span className="enlarge-label">
            {t.enlarge} <span aria-hidden="true">↗</span>
          </span>
        </button>
      </div>
      <div className="gallery-bar">
        <div className="gallery-caption">
          <p>{image.caption}</p>
          <small>{multiple ? t.hint : t.singleHint}</small>
        </div>
        <div className="gallery-controls">
          {multiple && (
            <button
              type="button"
              aria-label={t.previous}
              onClick={() => select(active - 1)}
            >
              ←
            </button>
          )}
          <span
            className="mono gallery-count"
            role="status"
            aria-live="polite"
            aria-atomic="true"
          >
            {count}
            <span className="sr-only"> — {image.label}</span>
          </span>
          {multiple && (
            <button
              type="button"
              aria-label={t.next}
              onClick={() => select(active + 1)}
            >
              →
            </button>
          )}
        </div>
      </div>
      {multiple && (
        <div
          className="gallery-thumbnails"
          role="group"
          aria-label={t.thumbnails}
        >
          {images.map((shot, i) => (
            <button
              key={shot.src}
              aria-pressed={active === i}
              aria-label={`${i + 1}. ${shot.label}`}
              onClick={() => select(i)}
            >
              <img
                src={shot.src}
                srcSet={shot.srcSet}
                sizes="160px"
                width={shot.width}
                height={shot.height}
                alt=""
                loading="lazy"
              />
              <span>
                <span className="mono">0{i + 1}</span> {shot.label}
              </span>
            </button>
          ))}
        </div>
      )}
      <dialog
        ref={dialog}
        className="screenshot-lightbox"
        aria-labelledby={`${uid}-title`}
        aria-describedby={`${uid}-caption`}
        onKeyDown={trapFocus}
        onCancel={(event) => {
          event.preventDefault();
          setOpen(false);
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) setOpen(false);
        }}
      >
        {open && (
          <>
            <div className="lightbox-toolbar">
              <h2 id={`${uid}-title`}>
                {title} <span className="mono">{count}</span>
              </h2>
              <button
                className="lightbox-zoom"
                aria-pressed={zoom}
                onClick={() => setZoom(!zoom)}
              >
                {zoom ? t.fit : t.zoom}
              </button>
              <button
                ref={closeButton}
                aria-label={t.close}
                onClick={() => setOpen(false)}
              >
                {locale === "id" ? "Tutup" : "Close"} ×
              </button>
            </div>
            <div
              className={`lightbox-image ${zoom ? "is-zoomed" : ""}`}
              tabIndex={0}
              role="region"
              aria-label={image.alt}
              onTouchStart={touchStart}
              onTouchEnd={touchEnd}
              onTouchCancel={() => {
                swipe.current = null;
              }}
            >
              <img
                key={image.src}
                src={image.src}
                width={image.width}
                height={image.height}
                alt={image.alt}
                style={
                  zoom
                    ? {
                        width: image.width,
                        maxWidth: "none",
                        maxHeight: "none",
                      }
                    : undefined
                }
              />
            </div>
            <div className="lightbox-bottom">
              <p id={`${uid}-caption`}>{image.caption}</p>
              {multiple && (
                <div className="gallery-controls">
                  <button
                    aria-label={t.previous}
                    onClick={() => select(active - 1)}
                  >
                    ←
                  </button>
                  <button
                    aria-label={t.next}
                    onClick={() => select(active + 1)}
                  >
                    →
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </dialog>
    </section>
  );
}
