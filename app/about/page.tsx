import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/client";
import { PlayVideo } from "@/components/client";
import { Badge, Head, Edge, HeroBg, Stars, FaqSection, CtaSection, ArrowUpRight, XIcon } from "@/components/ui";
import { A, team, awards, tools } from "@/lib/data";

export const metadata: Metadata = { title: "About | Falak.me" };

export default function About() {
  return (
    <>
      <section className="hero">
        <HeroBg src="lr4LSmXa1klevAvb0jf1i2zsDE.mp4" />
        <div className="wrap">
          <div className="hero-center">
            <Reveal><Badge tag="2025">Dig Deep About Us</Badge></Reveal>
            <Reveal delay={100}><h1 className="h1">Learn More About Landin<br />Let’s Deep Dive!</h1></Reveal>
            <Reveal delay={200}><p className="lead">Landin is your go-to agency for creative thinking and<br />marketing ideas. We specialize in digital business solutions.</p></Reveal>
            <Reveal delay={300}>
              <div className="btns" style={{ justifyContent: "center" }}>
                <Link href="/contact" className="btn light">Connect With Us</Link>
                <Link href="/about" className="btn dark">What is Landin?</Link>
              </div>
            </Reveal>
          </div>
          <Reveal variant="scale" delay={150}>
            <div className="frame bigvid" style={{ marginTop: 70 }}>
              <PlayVideo className="in" poster={A("bnku6hnBSYZilgRI7DsDA3HpUw.jpg")} src={A("x63grw3MJJK8pzlD0qnG8C0qVfs.mp4")} />
            </div>
          </Reveal>
        </div>
      </section>

      <div className="divider" style={{ marginTop: 100 }} />

      <section className="section">
        <div className="wrap">
          <div className="split">
            <Reveal className="sticky" variant="left">
              <div className="frame glow"><div className="in fill"><img src={A("mwSqQ9UKMvUvejak30qlmlWS8.jpeg")} alt="Man Using Laptop" /></div></div>
            </Reveal>
            <div className="txt">
              <Reveal><Badge>About Landin</Badge></Reveal>
              <Reveal delay={80}><h2 className="h2">An Agency With Classic<span className="dim">Revolutionary Skills!</span></h2></Reveal>
              <Reveal delay={160} style={{ width: "100%" }}>
                <div className="checks" style={{ gap: 6 }}>
                  <div className="text-block"><h4 style={{ marginTop: 0 }}>Your Success, Our Priority</h4><p>At Landin, we believe in empowering our clients to achieve their goals. Our team works closely with you.</p></div>
                  <div className="text-block" style={{ marginTop: 14 }}><h4>Partners You Can Rely On</h4><p>Landin is here to ensure your success with expert guidance and collaborative teamwork.</p></div>
                </div>
              </Reveal>
              <Reveal delay={240}>
                <div className="rating">
                  <Link href="/contact" className="btn primary">Book an Appointment</Link>
                  <span className="vr" />
                  <div><Stars /><small>200+ Agencies Rated</small></div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="section">
        <div className="wrap">
          <div className="split flip">
            <div className="txt">
              <Reveal><Badge>About Landin</Badge></Reveal>
              <Reveal delay={80}><h2 className="h2">Work Smarter Not Harder<span className="dim">in Every Minutes!</span></h2></Reveal>
              <Reveal delay={160} style={{ width: "100%" }}>
                <div className="checks" style={{ gap: 6 }}>
                  <div className="text-block"><h4 style={{ marginTop: 0 }}>Guided Every Step</h4><p>We ensure a smooth journey from concept to completion, providing expert support to bring your vision to life effortlessly.</p></div>
                  <div className="text-block" style={{ marginTop: 14 }}><h4>Support Beyond Delivery</h4><p>Our commitment doesn’t end at launch—Landin is here to support you with ongoing updates and expertise whenever you need it.</p></div>
                </div>
              </Reveal>
              <Reveal delay={240}>
                <div className="rating">
                  <Link href="/contact" className="btn primary">Book an Appointment</Link>
                  <span className="vr" />
                  <div><Stars /><small>900+ People Rated</small></div>
                </div>
              </Reveal>
            </div>
            <Reveal className="sticky" variant="right">
              <div className="frame glow"><div className="in fill"><img src={A("hZgGlHpPFf0bbzHL7dI9MolatA.jpeg")} alt="Man Using Laptop" /></div></div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <Head badge="Team Members" title="Meet the Team Making" dim="Things Happen Every Day"
            text="Our team is made up of passionate professionals who bring their expertise and creativity to every project." cta="Book a 15-min call" />
          <div className="team">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={(i % 3) * 90}>
                <div className="member">
                  <div className="ph">
                    <img src={A(m.img)} alt={m.name} />
                  </div>
                  <div className="nm">
                    <div><b>{m.name}</b><span>{m.role}</span></div>
                    <div className="xb"><XIcon /></div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <Edge />
      </section>

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="wrap">
          <div className="awards">
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 22 }}>
              <Reveal><Badge>Awards</Badge></Reveal>
              <Reveal delay={80}><h2 className="h2">Awards<span className="dim">&amp; Recognition</span></h2></Reveal>
              <Reveal delay={160}><p className="lead" style={{ maxWidth: 380 }}>We’re proud to have been recognized with several awards for our hard work and dedication.</p></Reveal>
            </div>
            <div className="grid2">
              {awards.map((a, i) => (
                <Reveal key={a.name} delay={(i % 2) * 100}>
                  <div className="award">
                    <div className="lg"><img src={A(a.logo)} alt="Logo" /></div>
                    <div className="ft"><div><b>{a.name}</b><span>{a.sub}</span></div><span className="ct" style={{ color: "#fff" }}>{a.n}</span></div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <Head badge="Tools" title="Tools and Technologies" dim="Powering Our Productivity"
            text="Our toolkit is made up of the latest and most reliable tech to ensure your project is executed to perfection." cta="Book an Appointment" />
          <div className="grid3" style={{ marginTop: 70 }}>
            {tools.map((t, i) => (
              <Reveal key={t.name} delay={(i % 3) * 90}>
                <div className="card tool">
                  <img className="ic" src={A(t.icon)} alt="Icon" />
                  <ArrowUpRight className="ar" strokeWidth={1.5} />
                  <h4>{t.name}{t.pro && <span className="pill">PRO</span>}</h4>
                  <div className="sub">{t.sub}</div>
                  <div className="rule" />
                  <p>{t.text}</p>
                </div>
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
