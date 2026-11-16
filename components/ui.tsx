import Link from "next/link";
import type { ReactNode } from "react";
import { Rocket, Atom, Blend, Spade, Compass, Bike, Power, ArrowUpRight, Mail, Smartphone, Pin } from "lucide-react";
import { Reveal, Faq, Subscribe, PlayVideo } from "./client";
import { A, faqs } from "@/lib/data";

export const icons: Record<string, any> = { rocket: Rocket, atom: Atom, blend: Blend, spade: Spade, compass: Compass, bike: Bike, power: Power };
export { ArrowUpRight, Mail, Smartphone, Pin };

export const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.2L2 3h6.33l4.37 5.78L17.75 3Zm-1.08 16.16h1.7L7.4 4.74H5.57l11.1 14.42Z" /></svg>
);

export const Stars = () => (
  <div className="stars">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} viewBox="0 0 24 24"><path d="m12 2 2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.7L5.8 21l1.6-7L2 9.2l7.1-.6L12 2Z" /></svg>
    ))}
  </div>
);

export const Check = ({ children, dim }: { children: ReactNode; dim?: boolean }) => (
  <div className={`check ${dim ? "dim" : ""}`}>
    <svg viewBox="0 0 20 20" fill="none">
      <path d="M10 .8l2.1 1.3 2.5-.1 1.2 2.2 2.2 1.2-.1 2.5L19.2 10l-1.3 2.1.1 2.5-2.2 1.2-1.2 2.2-2.5-.1L10 19.2l-2.1-1.3-2.5.1-1.2-2.2-2.2-1.2.1-2.5L.8 10l1.3-2.1-.1-2.5 2.2-1.2 1.2-2.2 2.5.1L10 .8Z" fill="#0055ff" />
      <path d="m6.6 10.2 2.3 2.3 4.5-4.7" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    <span>{children}</span>
  </div>
);

export const Cross = () => <img className="cross" src={A("QMirkdl4WPEe5bmSFhvVcssWj4.svg")} alt="" />;

export const Badge = ({ children, tag }: { children: ReactNode; tag?: string }) =>
  tag ? (
    <span className="badge tagged"><b>{tag}</b>{children}</span>
  ) : (
    <span className="badge">{children}</span>
  );

export function Head({ badge, tag, title, dim, text, cta, href = "/contact", left, tail }: { badge?: string; tag?: string; title: ReactNode; dim?: ReactNode; text?: ReactNode; cta?: string; href?: string; left?: boolean; tail?: ReactNode }) {
  return (
    <div className="head" style={left ? { alignItems: "flex-start", textAlign: "left" } : {}}>
      {!left && <div className="head-shapes"><i /><i /></div>}
      {badge && <Reveal><Badge tag={tag}>{badge}</Badge></Reveal>}
      <Reveal delay={80}><h2 className="h2">{title}{dim && <span className="dim">{dim}</span>}</h2></Reveal>
      {text && <Reveal delay={160}><p className="lead" style={{ maxWidth: 500 }}>{text}</p></Reveal>}
      {tail}
      {cta && <Reveal delay={240}><Link href={href} className="btn primary">{cta}</Link></Reveal>}
    </div>
  );
}

export const Edge = ({ thin }: { thin?: boolean }) => <div className={`edge ${thin ? "thin" : ""}`} />;

export const HeroBg = ({ src }: { src: string }) => (
  <div className="herobg">
    <video src={A(src)} autoPlay muted loop playsInline />
  </div>
);

export function FaqSection({ badge = "How We Work?" }: { badge?: string }) {
  return (
    <>
      <Edge />
      <section id="faq" className="section" style={{ paddingTop: 20, paddingBottom: 60 }}>
        <div className="wrap">
          <div className="faqgrid">
            <div className="faq-left">
              <Reveal><Badge>{badge}</Badge></Reveal>
              <Reveal delay={80}><h2 className="h2">Frequently<span className="dim">Asked Questions</span></h2></Reveal>
              <Reveal delay={160}><p className="lead">Have questions? Our FAQ section has you covered with quick answers to the most common inquiries.</p></Reveal>
            </div>
            <Faq items={faqs} />
          </div>
        </div>
      </section>
    </>
  );
}

export function CtaSection() {
  return (
    <section style={{ padding: "60px 0 0" }}>
      <div className="wrap">
        <Reveal variant="scale">
          <div className="cta-card">
            <video src={A("x63grw3MJJK8pzlD0qnG8C0qVfs.mp4")} autoPlay muted loop playsInline />
            <Badge>Join Us Now</Badge>
            <h2 className="h2">Each Project we Undertake<span className="dim" style={{ color: "#aaa" }}>is a Unique Opportunity.</span></h2>
            <p>Ready to take the next step? Join us now and start transforming your vision into reality with expert support.</p>
            <Link href="/contact" className="btn primary">Book an Appointment</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="bgimg" />
      <div className="wrap">
        <div className="fgrid">
          <div className="brand">
            <img src={A("l7SfJH7F12VxDrmZYgEhZS3LQ.svg")} alt="Falak" />
            <div className="rule" />
            <p>Made remotely with 💙 and passion - Westhill Studio.</p>
            <Subscribe />
          </div>
          <div>
            <h5>Template Pages</h5>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/#faq">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h5>Social</h5>
            <ul>
              <li><a href="https://x.com/MandroDesign" target="_blank" rel="noreferrer">Twitter (X)</a></li>
              <li><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a href="https://www.youtube.com/" target="_blank" rel="noreferrer">Youtube</a></li>
              <li><a href="https://www.framer.com" target="_blank" rel="noreferrer">Framer</a></li>
            </ul>
          </div>
          <div className="vcard">
            <span className="pill2">Sales - <b style={{ fontWeight: 500 }}>7,360,109</b></span>
            <PlayVideo className="vid" poster={A("bnku6hnBSYZilgRI7DsDA3HpUw.jpg")} src={A("x63grw3MJJK8pzlD0qnG8C0qVfs.mp4")} />
          </div>
        </div>
        <div className="fbottom">
          <span>© 2024 Mandro Design</span>
          <nav><Link href="/terms-conditions">Terms &amp; Conditions</Link><Link href="/privacy-policy">Privacy Policy</Link></nav>
        </div>
      </div>
    </footer>
  );
}
