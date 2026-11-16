import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Reveal } from "@/components/client";
import { Badge, HeroBg, Cross, FaqSection, CtaSection } from "@/components/ui";
import { A, projectDetails, projects } from "@/lib/data";

export function generateStaticParams() {
  return Object.keys(projectDetails).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const d = projectDetails[slug];
  return { title: d ? `${d.title} | Falak.me` : "Falak.me" };
}

export default async function Project({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const d = projectDetails[slug];
  if (!d) notFound();
  const more = d.more.map((s: string) => projects.find((p) => p.slug === s)!);
  return (
    <>
      <section className="hero" style={{ minHeight: 0, paddingBottom: 20 }}>
        <HeroBg src="lr4LSmXa1klevAvb0jf1i2zsDE.mp4" />
        <div className="wrap">
          <div className="pj-hero">
            <div>
              <Reveal><span className="badge tagged"><b>DATE</b>{d.date}</span></Reveal>
              <Reveal delay={100}><h1 className="h1">{d.title}</h1></Reveal>
              <Reveal delay={200}><p className="lead">{d.desc}</p></Reveal>
              <Reveal delay={300}><div className="btns">{d.tags.map((t: string) => <span className="chip navy" key={t}>{t}</span>)}</div></Reveal>
            </div>
            <Reveal delay={200} variant="right">
              <div className="card glass pj-info">
                <dl>
                  <div><dt>Services</dt><dd>{d.services}</dd></div>
                  <div><dt>Category</dt><dd>{d.category}</dd></div>
                  <div><dt>Client</dt><dd>{d.client}</dd></div>
                </dl>
                <a href="#" className="btn primary">View Live Website</a>
                <Cross />
              </div>
            </Reveal>
          </div>
          <Reveal variant="scale" delay={100}>
            <div className="frame" style={{ marginTop: 70 }}><div className="in" style={{ aspectRatio: "1178/678" }}><img src={A(d.hero)} alt={d.title} /></div></div>
          </Reveal>

          <div className="pj-body" style={{ marginTop: 80 }}>
            <Reveal>
              <h3>Analysis - Performance and Responsiveness</h3>
              <p>We prioritize optimal performance and seamless responsiveness across all devices. Our approach ensures fast loading times and smooth navigation, providing an excellent user experience on both desktop and mobile.</p>
              <h4>Performance <span className="pill">SEO</span></h4>
              <ul>
                <li>• Fast Loading Speed: We optimize images, scripts, and resources to ensure quick load times.</li>
                <li>• Optimized Code: Clean and efficient coding practices are employed to reduce unnecessary elements.</li>
                <li>• Scalability:Our performance-focused design ensures your website can handle increased traffic.</li>
              </ul>
              <h4>Responsiveness</h4>
              <p>Responsiveness is key to delivering an exceptional user experience across all devices. We ensure that your website adjusts seamlessly to different screen sizes, from mobile phones to desktops, providing a consistent and intuitive interface. With fast load times and optimized navigation, users will enjoy smooth interactions no matter how they access your site.</p>
            </Reveal>
          </div>

          <div className="pj-two">
            {d.two.map((img: string, i: number) => (
              <Reveal key={img} delay={i * 120} variant="scale">
                <div className="frame"><div className="in"><img src={A(img)} alt="" style={{ aspectRatio: "566/478" }} /></div></div>
              </Reveal>
            ))}
          </div>

          <div className="pj-body">
            <Reveal>
              <h3>Problem - Site and Service Improvement</h3>
              <p>Identifying and addressing areas for improvement is essential to maintaining a high-quality user experience. Whether it&apos;s optimizing site speed, enhancing service offerings, or refining design elements, continuous improvement is key.</p>
              <h4>Site and Service Improvement <span className="pill">SEO</span></h4>
              <p>To stay ahead in a competitive market, it&apos;s vital to constantly assess and improve your website and services. We dive deep into performance analytics, user behavior, and customer feedback to uncover pain points and areas for enhancement. From optimizing load times and refining user interfaces to improving service features and functionality.</p>
            </Reveal>
          </div>

          <Reveal variant="scale">
            <div className="frame" style={{ margin: "70px 0" }}><div className="in" style={{ aspectRatio: "1178/678" }}><img src={A(d.wide)} alt="" /></div></div>
          </Reveal>

          <div className="pj-body">
            <Reveal>
              <h3>Solution - Communication and Deployment</h3>
              <p>Effective communication and smooth deployment are at the heart of our process. We keep you informed every step of the way, ensuring your vision is brought to life exactly as you imagined. Our team collaborates closely with you to address any questions or concerns.</p>
              <h4>Communication <span className="pill">EMAIL</span></h4>
              <p>Clear communication and efficient deployment are essential to the success of any project. We maintain open lines of communication throughout the entire process, ensuring your goals and expectations are met. Our team actively listens and collaborates with you to refine details and offer guidance. When it’s time to deploy, we ensure a smooth transition, handling all technical aspects to guarantee a flawless launch.</p>
            </Reveal>
          </div>

          <div style={{ marginTop: 120, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, flexWrap: "wrap" }}>
            <Reveal><h2 className="h2">More Other cases</h2></Reveal>
            <Reveal delay={100}><Link href="/portfolio" className="btn primary">View more works</Link></Reveal>
          </div>
          <div className="pgrid" style={{ marginTop: 40 }}>
            {more.map((p: any, i: number) => (
              <Reveal key={p.slug} delay={i * 120} variant="scale">
                <Link href={`/portfolio/${p.slug}`} className="pitem">
                  <div className="pic"><img src={A(p.img)} alt={p.name} /><div className="pb">{p.name}<span>{p.year}</span></div></div>
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
