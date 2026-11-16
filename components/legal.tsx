import { Reveal } from "./client";
import { Badge, HeroBg } from "./ui";

export type Block =
  | { t: "h2"; v: string }
  | { t: "h3"; v: string }
  | { t: "p"; v: string }
  | { t: "ul"; v: (string | [string, string] | [string, string, string[]])[] };

export function Legal({ title, tag, sub, blocks }: { title: string; tag: string; sub: string; blocks: Block[] }) {
  return (
    <>
      <section className="hero" style={{ minHeight: 0, paddingBottom: 60 }}>
        <HeroBg src="lr4LSmXa1klevAvb0jf1i2zsDE.mp4" />
        <div className="wrap">
          <div className="legal">
            <Reveal><Badge tag="READ">{tag}</Badge></Reveal>
            <Reveal delay={100}><h1 className="h1">{title}</h1></Reveal>
            <Reveal delay={180}><p className="upd">{sub}</p></Reveal>
            {blocks.map((b, i) => {
              if (b.t === "h2") return <Reveal key={i}><h2>{b.v}</h2></Reveal>;
              if (b.t === "h3") return <Reveal key={i}><h3>{b.v}</h3></Reveal>;
              if (b.t === "p") return <Reveal key={i}><p>{b.v}</p></Reveal>;
              return (
                <Reveal key={i}>
                  <ul>
                    {b.v.map((li, j) =>
                      typeof li === "string" ? <li key={j}>{li}</li> : (
                        <li key={j}>
                          <b>{li[0]}</b>{li[1]}
                          {li[2] && <ul>{(li[2] as string[]).map((s, k) => <li key={k}>{s}</li>)}</ul>}
                        </li>
                      )
                    )}
                  </ul>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
