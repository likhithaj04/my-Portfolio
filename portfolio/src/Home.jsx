import React from "react";
import { Lightbulb, ArrowDown, Mail } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  EDIT ME – all copy lives here                                      */
/* ------------------------------------------------------------------ */
const CONTENT = {
  name: "Likhitha",
  email: "likhitha04j@gmail.com",
  line1: ["M", "E", "R", "N"],
  line2: ["D", "E", "V"],
  stickyLeft: ["Clean Code,", "Real Impact"],
  stickyRight: ["Turning ideas", "into shipped", "products."],
  noteBottomLeft: ["Code is", "thinking made", "functional."],
  tornNote: {
    title: "Full-Stack Dev",
    text: "MongoDB, Express, React, Node.js, REST APIs, Auth, Deployment...",
  },
  corners: {
    frontend: {
      title: "Frontend",
      text: "React, Tailwind CSS, responsive UI, animations, state management, landing pages...",
    },
    backend: {
      title: "Backend",
      text: "Node.js, Express, REST APIs, JWT auth, validation, file uploads, payments...",
    },
    database: {
      title: "Database",
      text: "MongoDB, Mongoose schemas, indexing, aggregation, data modelling...",
    },
    about: {
      title: "About me",
      text: "Freelance MERN developer from Bengaluru building fast, clean web apps for small businesses and founders.",
    },
  },
};

/* Ragged "torn paper" edges – different shape per tile */
const TORN = [
  "polygon(1% 4%, 12% 0%, 30% 3%, 52% 0%, 74% 2%, 99% 0%, 100% 28%, 98% 52%, 100% 78%, 97% 100%, 70% 97%, 48% 100%, 26% 98%, 4% 100%, 0% 72%, 2% 46%, 0% 22%)",
  "polygon(0% 2%, 22% 0%, 46% 3%, 70% 0%, 100% 3%, 98% 30%, 100% 55%, 97% 80%, 100% 100%, 76% 97%, 50% 100%, 24% 97%, 3% 100%, 1% 70%, 0% 40%)",
  "polygon(3% 0%, 28% 3%, 55% 0%, 80% 2%, 100% 0%, 99% 35%, 100% 62%, 98% 100%, 72% 98%, 44% 100%, 20% 97%, 0% 100%, 2% 66%, 0% 34%)",
  "polygon(0% 0%, 25% 3%, 50% 0%, 78% 3%, 100% 1%, 97% 28%, 100% 54%, 98% 82%, 100% 100%, 74% 98%, 48% 100%, 22% 98%, 0% 99%, 3% 70%, 0% 42%)",
];

const TILE_STYLES = {
  yellow: "bg-[#E9A81F] text-[#141414]",
  paper: "bg-[#E8E4DA] text-[#141414]",
  dark: "bg-[#161616] text-[#E8E4DA]",
};

/* ------------------------------------------------------------------ */
/*  Small building blocks                                              */
/* ------------------------------------------------------------------ */
function Pin({ className = "" }) {
  return (
    <span
      className={`absolute z-20 block h-4 w-4 rounded-full shadow-[2px_4px_5px_rgba(0,0,0,0.5)] bg-[radial-gradient(circle_at_30%_30%,#555,#0c0c0c)] ${className}`}
    />
  );
}

function Tape({ className = "" }) {
  return (
    <span
      className={`absolute z-20 block h-5 w-16 bg-[#E9A81F]/70 ${className}`}
      style={{ clipPath: "polygon(0 8%, 6% 0, 12% 10%, 100% 0, 94% 50%, 100% 100%, 6% 92%, 0 100%, 5% 50%)" }}
    />
  );
}

/* One big letter, like a cut-out of newspaper */
function Tile({ ch, variant = "paper", rot = 0, clip = 0, delay = 0, ring = false }) {
  return (
    <div
      className="tile-drop drop-shadow-[0_8px_10px_rgba(0,0,0,0.45)]"
      style={{ "--r": `${rot}deg`, "--d": `${delay}s` }}
    >
      <div
        className={`relative flex items-center justify-center px-[0.1em] pt-[0.04em] font-['Alfa_Slab_One'] leading-[1.05] ${TILE_STYLES[variant]}`}
        style={{ clipPath: TORN[clip % TORN.length] }}
      >
        <span className={ring ? "relative" : ""}>{ch}</span>
        {/* scuffed print texture */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40 mix-blend-multiply"
          style={{
            backgroundImage:
              "radial-gradient(rgba(0,0,0,.35) 0.6px, transparent 0.8px), repeating-linear-gradient(115deg, transparent 0 7px, rgba(255,255,255,.12) 7px 8px)",
            backgroundSize: "5px 5px, auto",
          }}
        />
      </div>
    </div>
  );
}

function Sticky({ lines, className = "", rot = 0, pinClass = "left-3 top-2" }) {
  return (
    <div
      className={`absolute z-20 bg-[#EDB52A] px-4 pb-5 pt-6 font-['Caveat'] text-lg leading-[1.1] text-[#1a1a1a] shadow-[0_10px_18px_rgba(0,0,0,0.4)] ${className}`}
      style={{ transform: `rotate(${rot}deg)` }}
    >
      <Pin className={pinClass} />
      {lines.map((l) => (
        <div key={l}>{l}</div>
      ))}
      <svg viewBox="0 0 80 8" className="mt-1 h-2 w-16" fill="none" stroke="#1a1a1a" strokeWidth="1.6" strokeLinecap="round">
        <path d="M2 5 C20 1, 40 7, 78 3" />
      </svg>
    </div>
  );
}

function Corner({ title, text, className = "" }) {
  return (
    <div className={`max-w-[230px] font-['Caveat'] text-[#1b1b1b] ${className}`}>
      <h3 className="text-2xl font-bold leading-none">{title}</h3>
      <p className="mt-2 text-[19px] leading-[1.15] opacity-90">{text}</p>
    </div>
  );
}

function Arrow({ className = "", flip = false, rotate = 0 }) {
  return (
    <svg
      viewBox="0 0 80 70"
      className={`h-16 w-20 text-[#1b1b1b] ${className}`}
      style={{ transform: `${flip ? "scaleX(-1)" : ""} rotate(${rotate}deg)` }}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M6 62 C 14 30, 40 14, 70 8" />
      <path d="M52 4 L71 8 L60 24" />
    </svg>
  );
}

function Splat({ className = "" }) {
  return (
    <svg viewBox="0 0 100 100" className={`pointer-events-none absolute z-10 ${className}`} fill="#0d0d0d">
      <circle cx="50" cy="50" r="16" />
      <circle cx="26" cy="40" r="6" />
      <circle cx="78" cy="58" r="8" />
      <circle cx="62" cy="22" r="4" />
      <circle cx="18" cy="72" r="3" />
      <circle cx="88" cy="30" r="2.5" />
      <circle cx="44" cy="84" r="5" />
      <path d="M50 50 L86 30 L80 44 Z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  HOME                                                               */
/* ------------------------------------------------------------------ */
export default function Home() {
  const { corners } = CONTENT;

  const goTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#7d7d7d] px-5 py-20 sm:py-24"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.12) 38%, transparent 62%), radial-gradient(rgba(0,0,0,0.16) 1px, transparent 1.2px), radial-gradient(circle at 80% 80%, rgba(0,0,0,0.28), transparent 55%)",
        backgroundSize: "100% 100%, 4px 4px, 100% 100%",
      }}
    >
      {/* fonts + the two animations Tailwind doesn't ship */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Caveat:wght@400;600;700&family=Special+Elite&display=swap');
        @keyframes tileDrop {
          0%   { opacity: 0; transform: translateY(-60px) rotate(calc(var(--r) - 10deg)) scale(1.1); }
          70%  { opacity: 1; transform: translateY(4px) rotate(calc(var(--r) + 1deg)) scale(0.99); }
          100% { opacity: 1; transform: translateY(0) rotate(var(--r)) scale(1); }
        }
        .tile-drop { opacity: 0; animation: tileDrop .65s cubic-bezier(.2,.8,.2,1) forwards; animation-delay: var(--d); }
        @keyframes noteIn { from { opacity: 0; } to { opacity: 1; } }
        .note-in { opacity: 0; animation: noteIn .6s ease 1.5s forwards; }
        @keyframes bulbGlow { 0%,100% { filter: drop-shadow(0 0 2px #E9A81F); } 50% { filter: drop-shadow(0 0 12px #FFD45C); } }
        .bulb-glow { animation: bulbGlow 2.6s ease-in-out 1.4s infinite; }
        @media (prefers-reduced-motion: reduce) {
          .tile-drop, .note-in { animation: none; opacity: 1; transform: rotate(var(--r)); }
          .bulb-glow { animation: none; }
        }
      `}</style>

      {/* ---------- corner annotations (desktop) ---------- */}
      <div className="note-in pointer-events-none absolute inset-0 hidden lg:block">
        <div className="absolute left-[7%] top-[7%]">
          <Corner {...corners.frontend} />
          <Arrow className="absolute left-[150px] top-[110px] -rotate-12" flip />
        </div>
        <div className="absolute right-[8%] top-[6%] text-right">
          <Corner {...corners.backend} className="ml-auto" />
          <Arrow className="absolute -left-20 top-[90px]" flip rotate={20} />
        </div>
        <div className="absolute bottom-[9%] left-[7%]">
          <Corner {...corners.database} />
          <Arrow className="absolute -top-14 left-[170px]" rotate={-20} />
        </div>
        <div className="absolute bottom-[9%] right-[8%]">
          <Corner {...corners.about} className="max-w-[260px]" />
          <Arrow className="absolute -left-24 -top-14" flip rotate={-8} />
        </div>

        {/* doodles: paper plane + crown */}
        <svg viewBox="0 0 140 90" className="absolute left-[20%] top-[24%] h-24 w-36 text-[#1b1b1b]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
          <path d="M4 40 L136 6 L96 84 L72 54 Z" />
          <path d="M4 40 L72 54 L136 6" />
          <path d="M72 54 L80 76" />
        </svg>
        <svg viewBox="0 0 90 60" className="absolute left-[56%] top-[26%] h-14 w-20 text-[#E9A81F]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round">
          <path d="M6 54 L10 12 L30 32 L45 6 L60 32 L80 12 L84 54 Z" />
        </svg>
      </div>

      {/* ---------- the collage ---------- */}
      <div className="relative mx-auto mt-4 w-fit">
        {/* grid-paper + torn backing sheets */}
        <div
          aria-hidden
          className="absolute -inset-x-6 -bottom-4 -top-2 -rotate-1 bg-[#DAD6CB] opacity-90 drop-shadow-[0_10px_14px_rgba(0,0,0,0.4)]"
          style={{
            clipPath: TORN[1],
            backgroundImage:
              "linear-gradient(rgba(0,0,0,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.18) 1px, transparent 1px)",
            backgroundSize: "14px 14px",
          }}
        />

        <Splat className="-left-10 bottom-2 h-20 w-20 sm:-left-20 sm:h-28 sm:w-28" />
        <Splat className="-right-8 -top-6 h-16 w-16 rotate-90 sm:-right-16 sm:h-24 sm:w-24" />

        <div className="relative z-10 flex flex-col items-center gap-1 text-[clamp(64px,13vw,180px)] sm:gap-2">
          {/* line 1 */}
          <div className="flex items-center">
            <Tile ch={CONTENT.line1[0]} variant="yellow" rot={-3} clip={0} delay={0.1} />
            <Tile ch={CONTENT.line1[1]} variant="paper" rot={2} clip={1} delay={0.2} />
            <Tile ch={CONTENT.line1[2]} variant="dark" rot={-2} clip={2} delay={0.3} />
            <Tile ch={CONTENT.line1[3]} variant="yellow" rot={4} clip={3} delay={0.4} />
          </div>
          {/* line 2 */}
          <div className="flex items-center">
            <Tile ch={CONTENT.line2[0]} variant="paper" rot={-2} clip={2} delay={0.55} />
            <Tile ch={CONTENT.line2[1]} variant="yellow" rot={3} clip={0} delay={0.65} />
            <Tile ch={CONTENT.line2[2]} variant="dark" rot={-3} clip={3} delay={0.75} />
            {/* bulb badge */}
            <div className="tile-drop" style={{ "--r": "3deg", "--d": "0.9s" }}>
              <div className="ml-1 flex h-[0.95em] w-[0.95em] items-center justify-center rounded-full border-[0.03em] border-[#DAD6CB] bg-[#161616] shadow-[0_8px_10px_rgba(0,0,0,0.45)]">
                <Lightbulb className="bulb-glow h-[55%] w-[55%] text-[#E9A81F]" strokeWidth={1.6} />
              </div>
            </div>
          </div>
        </div>

        {/* sticky: left */}
        <Sticky
          lines={CONTENT.stickyLeft}
          rot={-6}
          pinClass="left-3 top-2"
          className="note-in -left-6 top-[18%] w-28 text-base sm:-left-24 sm:w-40 sm:text-xl"
        />
        {/* sticky: right */}
        <Sticky
          lines={CONTENT.stickyRight}
          rot={4}
          pinClass="right-3 top-2"
          className="note-in -right-4 bottom-[8%] w-28 text-base sm:-right-24 sm:w-40 sm:text-xl"
        />

        {/* torn lined note, top-right */}
        <div
          className="note-in absolute -right-4 -top-20 z-20 hidden w-44 rotate-[4deg] bg-[#EAE6DC] px-4 pb-6 pt-8 font-['Caveat'] text-[#1b1b1b] shadow-[0_10px_16px_rgba(0,0,0,0.4)] md:block lg:-right-40 lg:-top-24 lg:w-52"
          style={{
            clipPath: TORN[0],
            backgroundImage: "repeating-linear-gradient(transparent 0 21px, rgba(60,90,160,.28) 21px 22px)",
          }}
        >
          <Pin className="left-1/2 top-2 -translate-x-1/2" />
          <p className="text-xl font-bold leading-none">{CONTENT.tornNote.title}</p>
          <p className="mt-2 text-[17px] leading-[22px]">{CONTENT.tornNote.text}</p>
        </div>
        <Tape className="right-2 top-[42%] hidden rotate-[28deg] lg:-right-32 lg:block" />

        {/* torn note, bottom-left */}
        <div
          className="note-in absolute -bottom-12 -left-4 z-20 hidden w-40 -rotate-[4deg] bg-[#EAE6DC] px-4 pb-5 pt-8 font-['Caveat'] text-xl leading-[1.1] text-[#1b1b1b] shadow-[0_10px_16px_rgba(0,0,0,0.4)] sm:block lg:-left-16"
          style={{ clipPath: TORN[2] }}
        >
          <Pin className="left-3 top-2" />
          {CONTENT.noteBottomLeft.map((l) => (
            <div key={l}>{l}</div>
          ))}
        </div>
      </div>

      {/* ---------- name + actions ---------- */}
      <div className="note-in relative z-30 mt-24 flex flex-col items-center gap-5 text-center sm:mt-28">
        <p className="font-['Special_Elite'] text-sm tracking-wide text-[#161616] sm:text-base">
          Hi, I&apos;m {CONTENT.name}. I build full-stack apps with MongoDB, Express, React and Node.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => goTo("projects")}
            className="inline-flex items-center gap-2 bg-[#161616] px-6 py-3 font-['Special_Elite'] text-sm tracking-wider text-[#E8E4DA] shadow-[0_8px_14px_rgba(0,0,0,0.4)] transition hover:-translate-y-0.5 hover:-rotate-1 hover:bg-[#E9A81F] hover:text-[#161616] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E9A81F]"
          >
            See my projects <ArrowDown size={16} />
          </button>
          <a
            href={`mailto:${CONTENT.email}`}
            className="inline-flex items-center gap-2 border-2 border-[#161616] px-6 py-[10px] font-['Special_Elite'] text-sm tracking-wider text-[#161616] transition hover:-translate-y-0.5 hover:rotate-1 hover:bg-[#161616] hover:text-[#E8E4DA] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E9A81F]"
          >
            <Mail size={16} /> Hire me
          </a>
        </div>
      </div>

      {/* ---------- corner annotations (mobile / tablet) ---------- */}
      <div className="note-in relative z-30 mt-14 grid w-full max-w-xl grid-cols-1 gap-6 sm:grid-cols-2 lg:hidden">
        <Corner {...corners.frontend} />
        <Corner {...corners.backend} />
        <Corner {...corners.database} />
        <Corner {...corners.about} />
      </div>
    </section>
  );
}