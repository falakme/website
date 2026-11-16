import type { Metadata } from "next";
import { Reveal, ContactForm } from "@/components/client";
import { Badge, HeroBg, Edge, FaqSection, CtaSection, Mail, Smartphone, Pin } from "@/components/ui";

export const metadata: Metadata = { title: "Contact | Falak.me" };

export default function Contact() {
  return (
    <>
      <section className="hero" style={{ minHeight: 0, paddingBottom: 20 }}>
        <HeroBg src="lr4LSmXa1klevAvb0jf1i2zsDE.mp4" />
        <div className="wrap">
          <div className="hero-center">
            <Reveal><Badge tag="24/7">Let&apos;s Work Together</Badge></Reveal>
            <Reveal delay={100}><h1 className="h1">Any Questions Rising?<br />We are All Here.</h1></Reveal>
            <Reveal delay={200}><p className="lead">Whether you have a question, need assistance,<br />or want to start a new project, our team is here to help.</p></Reveal>
            <Reveal delay={300}><a href="#form" className="btn primary">Fill The Form Out!</a></Reveal>
          </div>
          <div className="cgrid" id="form">
            <Reveal variant="scale">
              <div className="form"><ContactForm /></div>
            </Reveal>
            <div>
              <Reveal delay={100}>
                <div className="cinfo"><div>
                  <div className="t"><Mail />Email <span className="pill" style={{ fontSize: 12, lineHeight: "22px", padding: "0 8px", borderRadius: 6 }}>24/7</span></div>
                  <div className="rule" /><p>help [at] Landin.com</p>
                </div></div>
              </Reveal>
              <Reveal delay={180}>
                <div className="cinfo"><div>
                  <div className="t"><Smartphone />Phone</div>
                  <div className="rule" /><p>+1 (717) 550-1675</p>
                </div></div>
              </Reveal>
              <Reveal delay={260}>
                <div className="cinfo"><div>
                  <div className="t"><Pin />Address <span className="pill" style={{ fontSize: 12, lineHeight: "22px", padding: "0 8px", borderRadius: 6 }}>REMOTE</span></div>
                  <div className="rule" /><p>California [CA], 90011<br />49th St. Los Angeles<br />United States</p>
                </div></div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
      <FaqSection />
      <CtaSection />
    </>
  );
}
