"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";

/** Scroll-triggered reveal (fade + blur + rise), like Framer's appear effect */
export function Reveal({
  children,
  delay = 0,
  variant = "",
  className = "",
  as: Tag = "div",
  style,
}: {
  children: ReactNode;
  delay?: number;
  variant?: "" | "scale" | "fade" | "left" | "right";
  className?: string;
  as?: any;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag
      ref={ref}
      className={`rv ${variant} ${on ? "in" : ""} ${className}`}
      style={{ ["--d" as any]: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  );
}

/** Infinite marquee. Content is rendered twice for a seamless loop. */
export function Marquee({
  children,
  duration = 40,
  reverse,
  className = "",
  mask = true,
}: {
  children: ReactNode;
  duration?: number;
  reverse?: boolean;
  className?: string;
  mask?: boolean;
}) {
  return (
    <div className={`marquee ${reverse ? "rev" : ""} ${mask ? "" : "nomask"} ${className}`} style={{ ["--dur" as any]: `${duration}s` }}>
      <div className="track">{children}</div>
      <div className="track" aria-hidden>
        {children}
      </div>
    </div>
  );
}

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
  { href: "/#faq", label: "FAQ" },
];

export function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [path]);
  const on = (h: string) => (h === "/" ? path === "/" : !h.includes("#") && path.startsWith(h));
  return (
    <>
      <header className="nav">
        <div className="nav-bg" />
        <div className="wrap">
          <Link href="/" className="logo" aria-label="Falak home" style={{ position: "relative", zIndex: 101 }}>
            <img src="/assets/hMEiqYspBBM8ZRKuHUTJmZq6lU.png" alt="Falak" />
          </Link>
          <span className="sep" />
          <ul>
            {links.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className={on(l.href) ? "on" : ""}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/contact" className="btn primary cta">
            Get In Touch
          </Link>
          <button className={`burger ${open ? "open" : ""}`} aria-label="Menu" onClick={() => setOpen(!open)} style={{ zIndex: 101 }}>
            <i />
            <i />
          </button>
        </div>
      </header>
      <nav className={`mobile-menu ${open ? "open" : ""}`}>
        {links.map((l) => (
          <Link key={l.label} href={l.href}>
            {l.label}
          </Link>
        ))}
        <Link href="/contact" className="btn primary">
          Get In Touch
        </Link>
      </nav>
    </>
  );
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="faq-list">
      {items.map((it, i) => (
        <Reveal key={i} delay={i * 70}>
          <div className={`q ${open === i ? "open" : ""}`} onClick={() => setOpen(open === i ? null : i)} role="button" tabIndex={0}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setOpen(open === i ? null : i)} aria-expanded={open === i}>
            <div className="qh">
              <span>{it.q}</span>
              <span className="plus" />
            </div>
            <div className="qa">
              <div>
                <p>{it.a}</p>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/** Stack-on-scroll cards: each sticky card scales down as the next one covers it */
export function StackCards({ children }: { children: ReactNode[] }) {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    const onScroll = () => {
      refs.current.forEach((el, i) => {
        const next = refs.current[i + 1];
        if (!el || !next) return;
        const r = next.getBoundingClientRect();
        const start = window.innerHeight;
        const p = Math.min(1, Math.max(0, (start - r.top) / (start - 110)));
        el.style.transform = `scale(${1 - p * 0.06})`;
        el.style.filter = `brightness(${1 - p * 0.35})`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return (
    <div className="stackwrap">
      {children.map((c, i) => (
        <div key={i} ref={(el) => { refs.current[i] = el; }} className="proj-wrap" style={{ position: "sticky", top: 110, transformOrigin: "top center", willChange: "transform" }}>
          {c}
        </div>
      ))}
    </div>
  );
}

export function Subscribe() {
  const [done, setDone] = useState(false);
  return (
    <form className="sub-form" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
      <input type="email" required placeholder={done ? "Thanks for subscribing!" : "Enter Your Email...."} disabled={done} />
      <button className="btn primary" type="submit">Subscribe Us</button>
    </form>
  );
}

export function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
      <div className="f"><label>First name*</label><input required placeholder="Jane" /></div>
      <div className="f"><label>Last Name*</label><input required placeholder="Smith" /></div>
      <div className="f full"><label>How can we reach you?*</label><input required type="email" placeholder="jane@framer.com" /></div>
      <div className="f"><label>Where Are you from?*</label>
        <select required defaultValue=""><option value="" disabled>Select your country…</option><option>Amsterdam</option><option>Barcelona</option></select></div>
      <div className="f"><label>What&apos;s the type of your company?*</label>
        <select required defaultValue=""><option value="" disabled>Select Category</option><option>Agency</option><option>SAAS</option><option>Banking</option><option>Business</option><option>Other</option></select></div>
      <div className="f full"><label>Message*</label><textarea required placeholder="Type your message…" /></div>
      <div className="f full"><button className="btn primary block" type="submit">{sent ? "Message Sent ✓" : "Submit Now"}</button></div>
      {sent && <p className="sent">Thanks! We&apos;ll get back to you shortly.</p>}
    </form>
  );
}

export function PlayVideo({ poster, src, className = "" }: { poster: string; src?: string; className?: string }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div className={className} onClick={() => setPlaying(true)}>
      {playing && src ? <video src={src} autoPlay controls loop style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : (
        <>
          <img src={poster} alt="Video" />
          <span className="play"><svg viewBox="0 0 24 24"><path d="M7 4.5v15a1 1 0 0 0 1.5.86l12.5-7.5a1 1 0 0 0 0-1.72L8.5 3.64A1 1 0 0 0 7 4.5Z" /></svg></span>
        </>
      )}
    </div>
  );
}
