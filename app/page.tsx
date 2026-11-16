import Link from "next/link";
import { Reveal, Marquee, StackCards } from "@/components/client";
import { Badge, Head, Edge, HeroBg, Check, Stars, Cross, FaqSection, CtaSection, ArrowUpRight, XIcon, icons } from "@/components/ui";
import { A, cases, stages, features, benefitChips, projects, services, gallery1, gallery2, plans, planList, reviews, heroLogos } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero hero-home" style={{ minHeight: 900 }}>
        <HeroBg src="x63grw3MJJK8pzlD0qnG8C0qVfs.mp4" />
        <div className="wrap">
          <div className="copy">
            <Reveal><h1 className="h1">We Turn Ideas<br />Into Infrastructure.</h1></Reveal>
            <Reveal delay={120}><p className="lead">AI technology studio based in Dubai.<br />We build apps, host platforms, and ship code that works.</p></Reveal>
            <Reveal delay={220}>
              <div className="btns">
                <Link href="/portfolio" className="btn light">See Our Work</Link>
                <Link href="/contact" className="btn dark">Contact Us</Link>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <div className="logos">
                <Marquee duration={18}>
                  {heroLogos.map((l, i) => <img key={i} src={A(l)} alt="Logo" />)}
                </Marquee>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ABOUT */}
      <section className="section">
        <div className="wrap">
          <div className="split">
            <Reveal className="sticky" variant="left">
              <div className="frame glow"><div className="in fill"><img src={A("Qnjbg5sx80zqC8P7TMF9g3DgCA.jpeg")} alt="Woman Using Laptop" /></div></div>
            </Reveal>
            <div className="txt">
              <Reveal><Badge>About Falak</Badge></Reveal>
              <Reveal delay={80}><h2 className="h2">Building Stronger Brands<span className="dim">Creating Impressions!</span></h2></Reveal>
              <Reveal delay={160}><p className="lead">Delivering high-quality, on-demand designs with precision.<br />Elevate your brand effortlessly, one snap at a time.</p></Reveal>
              <Reveal delay={220} style={{ width: "100%" }}>
                <div className="checks">
                  <Check>From $0 to $500,000 in revenue.</Check>
                  <Check>47% growth in new customers.</Check>
                </div>
              </Reveal>
              <Reveal delay={280}>
                <div className="rating">
                  <Link href="/about" className="btn primary">View About Landin</Link>
                  <span className="vr" />
                  <div><Stars /><small>200+ Agencies Rated</small></div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* RESULTS */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <Head badge="Results" title="Delivering Tangible Results" dim="That Propel Your Success"
            text="At the core of everything we do lies a commitment to delivering measurable outcomes that drive your success." cta="Book a 15-min call" />
        </div>
        <div className="cases marquee-full">
          <div className="marquee" style={{ ["--dur" as any]: "50s" }}>
            {[0, 1].map((k) => (
              <div className="track" key={k} aria-hidden={k === 1}>
                {cases.map((c) => (
                  <div className="case" key={c.name}>
                    <div className="pic">
                      <img src={A(c.img)} alt={c.name} />
                    </div>
                    <div className="info">
                      <img className="lg" src={A(c.logo)} alt="Logo" />
                      <div className="t">{c.name}{c.badge && <span className="pill">{c.badge}</span>}</div>
                      <div className="rule" />
                      <p>{c.text}</p>
                      <div className="tags">{c.tags.map((t) => <span className="chip" key={t}>{t}</span>)}</div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <Edge />
      </section>

      {/* HOW WE WORK */}
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="wrap">
          <div className="split flip">
            <div className="txt" style={{ gap: 26 }}>
              <Reveal><Badge>How We Work?</Badge></Reveal>
              <Reveal delay={80}><h2 className="h2">We Simplify The Journey<span className="dim">From Design To Launch.</span></h2></Reveal>
              <Reveal delay={160}><p className="lead">We make it easy to bring your ideas to life, guiding you from concept to a fully launched product.</p></Reveal>
              <div className="stack" style={{ marginTop: 14 }}>
                {stages.map((s, i) => {
                  const Ic = icons[s.icon];
                  return (
                    <Reveal key={s.title} delay={i * 60}>
                      <div className="card glass stage">
                        <div className="top"><div className="iconbox"><Ic /></div><span className="tag">{s.tag}</span></div>
                        <h3>{s.title}</h3>
                        <div className="rule" />
                        <p>{s.text}</p>
                        <div className="tags">{s.tags.map((t) => <span className="chip" key={t}>{t}</span>)}</div>
                        {s.cta && <Link href="/contact" className="btn primary">{s.cta}</Link>}
                        {s.cta && <Cross />}
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
            <Reveal className="sticky" variant="right">
              <div className="frame glow"><div className="in fill"><img src={A("oUAzCBZlCCsvzmsAiYQ3RDbhyg.jpeg")} alt="Man Using Laptop" /></div></div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* FEATURES */}
      <section className="section">
        <div className="wrap">
          <Head badge="Features" title="Unlimited Design Features" dim="Delivered In A Second!"
            text={<>Get unlimited design features that give you the freedom<br />to create without boundaries.</>} cta="View About Landin" href="/about" />
          <div className="grid3" style={{ marginTop: 70 }}>
            {features.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 90}>
                <div className="card feat">
                  <img className="ic" src={A(f.icon)} alt="Icon" />
                  <ArrowUpRight className="ar" strokeWidth={1.5} />
                  <h4>{f.title}{f.pro && <span className="pill">PRO</span>}</h4>
                  <div className="sub">{f.sub}</div>
                  <div className="rule" />
                  <p>{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* BENEFITS */}
      <section className="section">
        <div className="wrap">
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 24, position: "relative" }}>
            <Reveal><Badge>Landin Benefits</Badge></Reveal>
            <Reveal delay={80}><h2 className="h2">We Just Don’t Design, We Build.<span className="dim">If You Can Dream It, We Can Play It!</span></h2></Reveal>
            <Reveal delay={160}>
              <div className="chips">
                {benefitChips.map((c) => <span className="chip" key={c}>{c}</span>)}
                <Link href="/contact" className="chip white">Contact Now</Link>
              </div>
            </Reveal>
          </div>
          <div className="bento">
            <div className="col">
              <Reveal>
                <div className="card glass bc">
                  <div className="pic big"><img src={A("nt3TDX5zl4zsmwO69xL44yiUM.jpg")} alt="Blue 3D Abstract" /></div>
                  <h4 style={{ marginTop: 28 }}>Submit Unlimited Requests</h4>
                  <div className="rule" />
                  <p>Enjoy the freedom to submit unlimited requests without any restrictions. Whether you need design tweaks, we’re here to assist you at every step.</p>
                  <div className="btns">
                    <Link href="/contact" className="btn primary">Book an Appointment</Link>
                    <Link href="/about" className="btn dark" style={{ background: "#16275f" }}>What is Landin?</Link>
                  </div>
                </div>
              </Reveal>
              <div className="row2">
                <Reveal delay={80}>
                  <div className="card glass bc">
                    <div className="pic sm"><img src={A("JRAKWKlMtuarIVCJ574VvX8hUDQ.png")} alt="Stats" /></div>
                    <h4>Quick Turnaround<span className="pill">NEW</span></h4>
                    <div className="rule" />
                    <p>We prioritize efficiency without compromising quality.</p>
                  </div>
                </Reveal>
                <Reveal delay={160}>
                  <div className="card glass bc">
                    <div className="pic sm"><img src={A("ldgnQLBGvrfDRFhMWwp0l01S1M.png")} alt="UI" /></div>
                    <h4>Publish in Seconds</h4>
                    <div className="rule" />
                    <p>Publish your site in seconds with our streamlined process.</p>
                  </div>
                </Reveal>
              </div>
            </div>
            <div className="col">
              <Reveal delay={100}>
                <div className="card glass bc">
                  <div className="pic mid"><img src={A("70Cw0V8JFQzVCIhorQ15yMIaI.jpg")} alt="Mobile View" /></div>
                  <h4>Requests &amp; Revisions<span className="pill">NEW</span></h4>
                  <div className="rule" />
                  <p>Our process includes multiple rounds of requests and revisions, ensuring that your feedback is incorporated and that the final product meets your expectations.</p>
                </div>
              </Reveal>
              <Reveal delay={180}>
                <div className="card glass bc">
                  <div className="pic mid"><img src={A("QzVJof4LyYozD7Me8ArhbSZj2w.jpg")} alt="3D Abstracts" /></div>
                  <h4>Worry Free Pricing<span className="pill">NEW</span></h4>
                  <div className="rule" />
                  <p>Whether you&apos;re just starting or scaling up, our flexible pricing plans are designed to fit your needs and budget, so you can get started without any financial stress.</p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* PORTFOLIO */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <Head badge="Portfolio" title="Our Selected Projects" dim="That Propel Your Website."
            text="Explore our curated work, showcasing collaborations with visionary clients across diverse industries." cta="View Portfolio" href="/portfolio" />
          <StackCards>
            {projects.map((p) => (
              <Link href={`/portfolio/${p.slug}`} className="proj" key={p.slug} style={{ position: "relative", top: 0, marginBottom: 20 }}>
                <div className="pic">
                  <img src={A(p.img)} alt={p.name} />
                </div>
                <div className="bar">
                  <div className="nm">{p.name}<span>•&nbsp;&nbsp;{p.year}</span></div>
                  <div className="sep" />
                  <div className="prog" />
                  <div className="sep" />
                  <div className="tg">{p.tags.map((t) => <span className="chip" key={t}>{t}</span>)}</div>
                </div>
              </Link>
            ))}
          </StackCards>
        </div>
        <Edge />
      </section>

      {/* SERVICES */}
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="wrap">
          <div className="split">
            <Reveal className="sticky" variant="left">
              <div className="frame glow"><div className="in fill"><img src={A("Nx7bt7sxDAxlLsAxW9jTN1wUsY.jpeg")} alt="Man Using Tab" /></div></div>
            </Reveal>
            <div className="txt" style={{ gap: 22 }}>
              <Reveal><Badge>Our Services</Badge></Reveal>
              <Reveal delay={80}><h2 className="h2">Get High-Quality<span className="dim">Clear Services Remotely.</span></h2></Reveal>
              <Reveal delay={160}><p className="lead">Discover our range of services designed to elevate your brand<br />and propel your business to next level.</p></Reveal>
              <div className="stack" style={{ marginTop: 40 }}>
                {services.map((s, i) => {
                  const Ic = icons[s.icon];
                  return (
                    <Reveal key={s.title} delay={i * 60}>
                      <div className="card glass svc">
                        <div className="top"><div className="iconbox"><Ic /></div><span className="tag">{s.tag}</span></div>
                        <h3>{s.title}</h3>
                        <div className="rule" />
                        <p>{s.text}</p>
                        <div className="meta">
                          <span className="chip"><b>{s.price}</b>&nbsp;/ Project</span>
                          <span className="chip"><b>{s.time}</b>&nbsp;Week</span>
                        </div>
                        <div className="list">{s.list.map((l) => <Check key={l}>{l}</Check>)}</div>
                        {s.cta && <Link href="/contact" className="btn primary">Book an Appointment</Link>}
                        {s.cta && <Cross />}
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* GALLERY */}
      <section className="section" style={{ paddingBottom: 40 }}>
        <div className="wrap">
          <Head badge="Launch Your Site" title="The Trusted Rise Partner" dim="For Startups And Agencies"
            text={<>Get your site live in no time! With professional setup and<br />expert support in an easy way.</>} cta="View About Landin" href="/about" />
        </div>
        <div className="gal">
          <Marquee duration={60}>{gallery1.map((g) => <div className="tile" key={g}><img src={A(g)} alt="" /></div>)}</Marquee>
          <Marquee duration={60} reverse>{gallery2.map((g) => <div className="tile" key={g}><img src={A(g)} alt="" /></div>)}</Marquee>
        </div>
      </section>

      <div className="divider" />

      {/* PRICING */}
      <section className="section">
        <div className="wrap">
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 22 }}>
            <Reveal><Badge>Pricing</Badge></Reveal>
            <Reveal delay={80}><h2 className="h2">Plans for all businesses, Suitable for<span className="dim">Personal, Agencies, Startups.</span></h2></Reveal>
            <Reveal delay={160}><p className="lead" style={{ maxWidth: 640 }}>Our pricing plans are designed to make getting started as effortless as possible. With flexible options tailored to suit a variety of needs and budgets.</p></Reveal>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: 25, marginTop: 60 }}>
            {plans.map((p, i) => {
              const Ic = icons[p.icon];
              return (
                <Reveal key={p.name} delay={i * 100}>
                  <div className="card glass price">
                    <div className="top"><div className="iconbox"><Ic /></div><span className="chip navy">{p.tag}</span></div>
                    <h3>{p.name}</h3>
                    <div className="amt">{p.price}<small>/ Month</small>{p.old && <s>{p.old}</s>}</div>
                    <div className="rule" />
                    <p>{p.text}</p>
                    <div className="meta">
                      <span className="chip"><b>{p.a[0]}</b>&nbsp;{p.a[1]}</span>
                      <span className="chip"><b>{p.b[0]}</b>&nbsp;{p.b[1]}</span>
                    </div>
                    <div className="list">{planList.map((l, j) => <Check key={l} dim={p.dim && j > 2}>{l}</Check>)}</div>
                    <Link href="/contact" className="btn primary block">Book an Appointment</Link>
                    {i === 1 && <Cross />}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* TESTIMONIALS */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <Head badge="Testimonial" title="Customer Reviews About" dim="Work, Usability and Design."
            text={<>Hear from our happy clients! See how we’ve helped them achieve<br />their goals and create lasting impact.</>}
            tail={<Reveal delay={200}><div className="logos" style={{ width: "100%", maxWidth: 520, margin: 0, padding: 0 }}><Marquee duration={18}>{heroLogos.map((l, i) => <img key={i} src={A(l)} alt="Logo" />)}</Marquee></div></Reveal>}
            cta="View About Landin" href="/about" />
          <div className="grid3" style={{ marginTop: 60 }}>
            {reviews.map((r, i) => (
              <Reveal key={r.name} delay={(i % 3) * 90}>
                <div className="card tcard">
                  <img className="av" src={A(r.av)} alt="User" />
                  <XIcon className="x" />
                  <Stars />
                  <p>&quot;{r.text}&quot;</p>
                  <div className="rule" />
                  <div className="who">{r.name}<i /><span>{r.role}</span></div>
                  <div className="co">{r.co}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FaqSection badge="FAQ" />
      <CtaSection />
    </>
  );
}
