import { Reveal } from "@/components/Reveal";

export function Podcast() {
  return (
    <section className="relative bg-cream py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="flex flex-col items-center gap-10 rounded-[3px] border border-line bg-ivory p-10 text-center lg:flex-row lg:gap-16 lg:p-14 lg:text-left">
          <Reveal className="shrink-0">
            <div
              className="grain shadow-editorial flex h-32 w-32 items-center justify-center rounded-full"
              style={{
                background:
                  "linear-gradient(145deg, #e9d8b8 0%, #c9ae7e 50%, #8a6d3f 100%)",
              }}
            >
              <span className="font-display text-4xl text-ink/80">VS</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <p className="eyebrow">In Conversation</p>
              <h2 className="font-display mt-4 text-[clamp(2rem,3.8vw,3rem)] font-light leading-[1.05] text-ink">
                The Venue Society Podcast
              </h2>
              <p className="mt-4 max-w-xl text-ink-soft">
                Candid conversations on events, design, and the art of bringing
                people together — with the planners, owners and makers behind New
                England&rsquo;s best celebrations. Never a sales pitch.
              </p>
              <p className="mt-6 text-xs uppercase tracking-[0.28em] text-gold">
                Coming with the first issue
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
