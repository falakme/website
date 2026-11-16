import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/client";
import { Badge, HeroBg, FaqSection, CtaSection } from "@/components/ui";
import { A, projects } from "@/lib/data";

export const metadata: Metadata = { title: "Portfolio | Falak.me" };

export default function Portfolio() {
  return (
    <>
      <section className="hero" style={{ minHeight: 0, paddingBottom: 20 }}>
        <HeroBg src="lr4LSmXa1klevAvb0jf1i2zsDE.mp4" />
        <div className="wrap">
          <div className="hero-center">
            <Reveal><Badge tag="2025">Explore Our Portfolio</Badge></Reveal>
            <Reveal delay={100}><h1 className="h1">Check Out Some<br />Extra-Ordinary Work.</h1></Reveal>
            <Reveal delay={200}><p className="lead">From startups to established brands, we create<br />tailored solutions that drive success and make a real impact.</p></Reveal>
            <Reveal delay={300}><Link href="/contact" className="btn primary">Build Your Product</Link></Reveal>
          </div>
          <div className="pgrid">
            {projects.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 2) * 120} variant="scale">
                <Link href={`/portfolio/${p.slug}`} className="pitem">
                  <div className="pic">
                    <img src={A(p.img)} alt={p.name} />
                    <div className="pb">{p.name}<span>{p.year}</span></div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <FaqSection />
      <CtaSection />
    </>
  );
}
