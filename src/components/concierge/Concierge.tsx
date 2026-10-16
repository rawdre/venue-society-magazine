"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Swan } from "./Swan";
import { localSuggest, type ConciergeLink } from "./local-suggest";
import { useLocale } from "@/i18n/LanguageProvider";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/cn";

// Odette — the Venue Society concierge. Answers come from the Command Center
// (magazine-concierge.js), grounded in /concierge.json. If it can't be reached,
// a local search over the venue list still sends people to the right page.
const CONCIERGE_URL =
  process.env.NEXT_PUBLIC_CONCIERGE_URL ??
  "https://comeketo-command-center.onrender.com/public/magazine-concierge";
const MAX_TURNS = 12;

interface Turn {
  role: "user" | "assistant";
  content: string;
  link?: ConciergeLink | null;
}

const COPY: Record<Locale, {
  ask: string; title: string; role: string; hello: string; placeholder: string;
  send: string; close: string; takeMe: string; offline: string; nothing: string;
  suggestions: string[];
}> = {
  en: {
    ask: "Ask Odette",
    title: "Odette",
    role: "Your Venue Society concierge",
    hello: "Welcome, I'm Odette. I know every room in this year's issue. Ask me about a venue, a guest count, advertising, or the launch, and I'll take you straight there.",
    placeholder: "Ask about a venue…",
    send: "Send",
    close: "Close",
    takeMe: "Take me there",
    offline: "My notes are out of reach for a moment, but this looks like what you're after.",
    nothing: "My notes are out of reach for a moment. The team will gladly help through the contact form.",
    suggestions: ["A castle by the sea", "Room for 300 guests", "Advertising rates", "The launch party"],
  },
  pt: {
    ask: "Fale com a Odette",
    title: "Odette",
    role: "Sua concierge Venue Society",
    hello: "Olá, eu sou a Odette. Conheço cada salão desta edição. Pergunte sobre um local, número de convidados, anúncios ou o lançamento, e eu levo você direto até lá.",
    placeholder: "Pergunte sobre um local…",
    send: "Enviar",
    close: "Fechar",
    takeMe: "Leve-me até lá",
    offline: "Minhas anotações estão fora de alcance agora, mas isto parece ser o que você procura.",
    nothing: "Minhas anotações estão fora de alcance agora. A equipe ajuda com prazer pelo formulário de contato.",
    suggestions: ["Um castelo à beira-mar", "Espaço para 300 convidados", "Preços dos anúncios", "A festa de lançamento"],
  },
  es: {
    ask: "Pregúntale a Odette",
    title: "Odette",
    role: "Su concierge de Venue Society",
    hello: "Hola, soy Odette. Conozco cada salón de esta edición. Pregúnteme por un lugar, número de invitados, publicidad o el lanzamiento, y le llevo directo allí.",
    placeholder: "Pregunte por un lugar…",
    send: "Enviar",
    close: "Cerrar",
    takeMe: "Lléveme allí",
    offline: "Mis notas no están a mano ahora, pero esto parece lo que busca.",
    nothing: "Mis notas no están a mano ahora. El equipo le ayudará con gusto por el formulario de contacto.",
    suggestions: ["Un castillo junto al mar", "Espacio para 300 invitados", "Tarifas de publicidad", "La fiesta de lanzamiento"],
  },
};

export function Concierge() {
  const { locale } = useLocale();
  const t = COPY[locale];
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [turns, setTurns] = useState<Turn[]>([]);
  const [draft, setDraft] = useState("");
  const [thinking, setThinking] = useState(false);
  const [teaser, setTeaser] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // A one-time "Ask Odette" ribbon a few seconds in, then it gets out of the way.
  useEffect(() => {
    const show = window.setTimeout(() => setTeaser(true), 4000);
    const hide = window.setTimeout(() => setTeaser(false), 12000);
    return () => {
      window.clearTimeout(show);
      window.clearTimeout(hide);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [turns, thinking]);

  function go(link: ConciergeLink) {
    const [path, hash] = link.href.split("#");
    const samePage = (path || "/") === pathname;
    if (samePage && hash) {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      history.replaceState(null, "", `#${hash}`);
    } else {
      router.push(link.href);
    }
    // On a phone the sheet covers the page — get out of the way once we've moved.
    if (window.matchMedia("(max-width: 640px)").matches) setOpen(false);
  }

  async function ask(question: string) {
    const q = question.trim();
    if (!q || thinking) return;
    const history = [...turns, { role: "user" as const, content: q.slice(0, 600) }];
    setTurns(history);
    setDraft("");
    setThinking(true);
    try {
      const res = await fetch(CONCIERGE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          language: locale,
          messages: history.slice(-MAX_TURNS).map(({ role, content }) => ({ role, content })),
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.reply) throw new Error(data.error || `HTTP ${res.status}`);
      setTurns([...history, { role: "assistant", content: data.reply, link: data.link ?? null }]);
    } catch {
      const link = localSuggest(q, locale);
      setTurns([...history, { role: "assistant", content: link ? t.offline : t.nothing, link: link ?? { href: "/#contact", label: "Contact" } }]);
    } finally {
      setThinking(false);
    }
  }

  return (
    <div className="print:hidden">
      {/* launcher */}
      <div className="fixed right-4 bottom-4 z-[60] flex items-center gap-3 sm:right-6 sm:bottom-6">
        <span
          className={cn(
            "font-display pointer-events-none hidden rounded-full bg-ivory/95 px-5 py-2.5 text-[1.05rem] text-ink italic shadow-editorial ring-1 ring-gold/40 transition-all duration-700 sm:block",
            teaser && !open ? "translate-x-0 opacity-100" : "translate-x-3 opacity-0"
          )}
          aria-hidden
        >
          {t.ask} <span className="text-gold">✦</span>
        </span>
        <button
          type="button"
          onClick={() => {
            setOpen((o) => !o);
            setTeaser(false);
          }}
          aria-label={open ? t.close : t.ask}
          aria-expanded={open}
          className="concierge-float group relative rounded-full shadow-[0_18px_36px_-14px_rgba(125,95,46,0.65)] transition-transform duration-500 hover:scale-105"
        >
          <span className="concierge-halo absolute -inset-1.5 rounded-full" aria-hidden />
          <Swan size={66} className="relative" />
        </button>
      </div>

      {/* panel */}
      <div
        role="dialog"
        aria-label={`${t.title} — ${t.role}`}
        aria-hidden={!open}
        className={cn(
          "fixed inset-x-3 bottom-24 z-[60] flex max-h-[min(640px,calc(100svh-8rem))] flex-col bg-ivory shadow-[0_40px_80px_-30px_rgba(43,38,33,0.55)] transition-all duration-500 sm:inset-x-auto sm:right-6 sm:bottom-28 sm:w-[400px]",
          open ? "visible translate-y-0 opacity-100" : "invisible translate-y-4 opacity-0"
        )}
      >
        <div className="gilt-frame pointer-events-none absolute inset-2" />

        {/* header */}
        <div className="relative flex items-center gap-4 border-b border-gold/25 px-6 pt-6 pb-4">
          <Swan size={48} />
          <div className="min-w-0 flex-1">
            <p className="font-display foil text-[1.7rem] leading-none italic">{t.title}</p>
            <p className="mt-1.5 text-[0.56rem] font-medium uppercase tracking-[0.3em] text-gold">
              {t.role}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label={t.close}
            className="font-display -mt-3 text-2xl leading-none text-ink/40 transition-colors hover:text-gold"
          >
            ×
          </button>
        </div>

        {/* conversation */}
        <div ref={scrollRef} className="relative flex-1 space-y-4 overflow-y-auto px-6 py-5">
          <Bubble role="assistant" content={t.hello} />
          {turns.map((turn, i) => (
            <div key={i}>
              <Bubble role={turn.role} content={turn.content} />
              {turn.link && (
                <button
                  type="button"
                  onClick={() => go(turn.link!)}
                  className="btn-shine mt-2.5 ml-1 inline-flex items-center gap-2.5 bg-ink px-4 py-2.5 text-[0.62rem] font-medium uppercase tracking-[0.24em] text-ivory transition-colors hover:bg-espresso"
                >
                  <span className="text-gold-soft">✦</span>
                  {t.takeMe}: {turn.link.label}
                  <span aria-hidden>→</span>
                </button>
              )}
            </div>
          ))}
          {thinking && (
            <div className="flex gap-1.5 pl-4" aria-label="…">
              {[0, 1, 2].map((d) => (
                <span
                  key={d}
                  className="concierge-dot h-1.5 w-1.5 rounded-full bg-gold"
                  style={{ animationDelay: `${d * 0.18}s` }}
                />
              ))}
            </div>
          )}
          {turns.length === 0 && (
            <div className="flex flex-wrap gap-2 pt-1">
              {t.suggestions.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => ask(s)}
                  className="font-serif border border-gold/40 px-3.5 py-1.5 text-[0.98rem] text-ink-soft italic transition-colors hover:border-gold hover:bg-cream hover:text-ink"
                >
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* composer */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            ask(draft);
          }}
          className="relative flex items-center gap-3 border-t border-gold/25 px-6 pt-3 pb-6"
        >
          <input
            ref={inputRef}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            maxLength={600}
            placeholder={t.placeholder}
            className="font-serif min-w-0 flex-1 border-0 border-b border-gold/35 bg-transparent px-0 py-2 text-[1.1rem] text-ink italic outline-none placeholder:text-ink/35 focus:border-gold"
          />
          <button
            type="submit"
            disabled={!draft.trim() || thinking}
            aria-label={t.send}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink text-gold-soft transition-all hover:bg-espresso disabled:opacity-40"
          >
            ✦
          </button>
        </form>
      </div>
    </div>
  );
}

function Bubble({ role, content }: { role: Turn["role"]; content: string }) {
  if (role === "user") {
    return (
      <p className="ml-auto w-fit max-w-[85%] bg-espresso px-4 py-2.5 text-[0.92rem] leading-relaxed text-ivory">
        {content}
      </p>
    );
  }
  return (
    <p className="font-serif max-w-[92%] border-l border-gold/60 pl-4 text-[1.12rem] leading-[1.5] text-ink">
      {content}
    </p>
  );
}
