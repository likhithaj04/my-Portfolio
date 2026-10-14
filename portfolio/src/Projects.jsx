import React, { useEffect, useRef, useState } from "react";
import { Mail, PawPrint, Brain, Code, Store, ImageIcon, ArrowRight } from "lucide-react";

// project screenshots: import each one and put it in the project's `img` field below
// (fix the path to match where your assets folder is)
// import inboxly from "../src/assets/inboxly.png";
import resqheart from "../src/assets/resQheart.png";
import aianalyser from "../src/assets/analyser.png";
// import dbug from "../src/assets/dbug.png";

const fontImport =
  "@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Caveat:wght@400;600;700&family=Courier+Prime:wght@400;700&display=swap');";

// small animations. they only start once the section scrolls into view (class "page-in")
const animations = `
  .pop, .fade { opacity: 0; }
  .page-in .pop { opacity: 1; animation: letterDrop 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) backwards; }
  .page-in .fade { opacity: 1; animation: fadeUp 0.8s ease backwards; }
  .page-in .d1 { animation-delay: 0.7s; }
  .page-in .d2 { animation-delay: 0.9s; }
  .page-in .d3 { animation-delay: 1.1s; }

  .float { animation: floaty 3.5s ease-in-out infinite; }
  .twinkle { animation: twinkle 1.8s ease-in-out infinite alternate; }

  @keyframes letterDrop { from { opacity: 0; translate: 0 -40px; } to { opacity: 1; translate: 0 0; } }
  @keyframes fadeUp { from { opacity: 0; translate: 0 20px; } to { opacity: 1; translate: 0 0; } }
  @keyframes floaty { 0%, 100% { translate: 0 0; } 50% { translate: 0 -10px; } }
  @keyframes twinkle { from { opacity: 0.3; } to { opacity: 1; } }

  @media (prefers-reduced-motion: reduce) {
    .page-in .pop, .page-in .fade { animation: none; }
    .float, .twinkle { animation: none; }
  }
`;

// true once the element has been scrolled into view
function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

// 5 projects -> shows 3 in the first row and 2 in the second
// leave github as "" if there is no repo link yet, the link just won't show
const projects = [
  {
    id: 1,
    title: "Inboxly",
    kicker: "AI email assistant",
    featured: true,
    blurb: "An AI email agent that reads your Gmail and puts the important mail first.",
    stack: ["React", "Node/Express", "PostgreSQL", "Prisma", "Gmail API", "Groq", "JWT"],
    points: [
      "Behavioral scoring for email actions.",
      "On-demand Groq summaries to reduce LLM calls.",
      "Caching and pagination to reduce DB load.",
      "OAuth 2.0 + JWT Gmail security.",
    ],
    github: "",
    live: "",
    img: null, // inboxly
    icon: Mail,
  },
  {
    id: 2,
    title: "ResQHeart",
    kicker: "Pet welfare system",
    featured: false,
    blurb: "A pet welfare platform to find your fur partner, report lost pets, donate and help with their next meal.",
    stack: ["React", "Node/Express", "MongoDB", "JWT"],
    points: [
      "Post, search and match lost/found pets.",
      "Real-time updates and notifications.",
      "User authentication and secure access.",
    ],
    github: "",
    live: "https://res-q-heart.vercel.app/",
    img:  resqheart,
    icon: PawPrint,
  },
  {
    id: 3,
    title: "AIAnalyser",
    kicker: "Resume + LinkedIn analysis",
    featured: false,
    blurb: "Upload a resume or LinkedIn profile and get an AI breakdown of how strong it is.",
    stack: ["React", "Node/Express", "MongoDB", "Tailwind", "Groq", "Pinecone"],
    points: [
      "Performance, functionality, accuracy and trustability cards.",
      "RAG exploration with Pinecone + LangChain.",
      "Clean, focused UI with minimal scrollbars.",
    ],
    github: "",
    live: "",
    img:  aianalyser,
    icon: Brain,
  },
  {
    id: 4,
    title: "D-BUG",
    kicker: "AI code debugger",
    featured: false,
    blurb: "A ChatGPT-style chat where you paste broken code and get help fixing it.",
    stack: ["React", "Express", "Supabase"],
    points: [
      "Chat interface for debugging code with AI.",
      "Supabase auth with token + threadId.",
      "Reducer for message / response / loading / error.",
    ],
    github: "",
    live: "",
    img: null, // dbug
    icon: Code,
  },
  {
    id: 5,
    title: "Atlier",
    kicker: "A demo boutique",
    featured: false,
    blurb: "A demo web design for a boutique, with the designs, contact details and a nice place for customers to browse.",
    stack: ["React", "Node"],
    points: [
      "Boutique collection showcase for browsing.",
      "Contact section for customers.",
      "Responsive layout, deployed on Vercel.",
    ],
    github: "",
    live: "https://atlier-ten.vercel.app/",
    img: null, // atlier
    icon: Store,
  },
];

/* ---------------- doodles ---------------- */

function ArrowDoodle({ className = "" }) {
  return (
    <svg viewBox="0 0 80 70" className={`h-12 w-14 text-[#1b1b1b] ${className}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M6 62 C 12 34, 38 14, 68 10" />
      <path d="M52 3 L69 10 L58 25" />
    </svg>
  );
}

function BurstDoodle({ className = "" }) {
  return (
    <svg viewBox="0 0 50 50" className={`twinkle h-9 w-9 text-[#1b1b1b] ${className}`} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path d="M8 24 L22 24" />
      <path d="M12 8 L24 17" />
      <path d="M12 40 L24 31" />
    </svg>
  );
}

function ScribbleLine({ className = "" }) {
  return (
    <svg viewBox="0 0 100 14" className={`h-3 w-20 text-[#1b1b1b] ${className}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M2 4 C 30 0, 60 8, 98 3" />
      <path d="M10 11 C 40 7, 70 13, 96 9" />
    </svg>
  );
}

/* ---------------- helpers ---------------- */

const colors = {
  yellow: "bg-[#E9A81F] text-[#141414]",
  paper: "bg-[#EDE9DF] text-[#141414]",
  dark: "bg-[#161616] text-[#EDE9DF]",
};
const colorOrder = ["yellow", "dark", "paper"];
const tiltOrder = ["-rotate-3", "rotate-2", "-rotate-1", "rotate-3", "-rotate-2"];

// turns a word into a row of cut-out letter blocks
function Word({ word, size, delay = 0 }) {
  return (
    <div className="flex">
      {word.split("").map((letter, i) =>
        letter === " " ? (
          <span key={i} className="w-3 sm:w-6"></span>
        ) : (
          <span
            key={i}
            style={{ animationDelay: `${delay + i * 0.07}s` }}
            className={`pop inline-block px-1.5 py-1 font-['Alfa_Slab_One'] leading-none shadow-md sm:px-2.5 ${size} ${colors[colorOrder[(i + word.length) % 3]]} ${tiltOrder[i % 5]}`}
          >
            {letter}
          </span>
        )
      )}
    </div>
  );
}

function Pin({ className = "" }) {
  return <span className={`absolute h-3 w-3 rounded-full bg-[#111] shadow ${className}`}></span>;
}

// slot for the project screenshot - shows a placeholder until `img` is set
function ImageSlot({ src, title }) {
  if (src) {
    return <img src={src} alt={`${title} screenshot`} className="aspect-video w-full border-2 border-[#1b1b1b] object-cover" />;
  }
  return (
    <div className="flex aspect-video w-full flex-col items-center justify-center gap-1 border-2 border-dashed border-[#1b1b1b]/50 bg-black/5 font-['Caveat'] text-lg text-[#1b1b1b]/60">
      <ImageIcon size={26} />
      Project image here
    </div>
  );
}

function ProjectCard({ project, index }) {
  const Icon = project.icon;
  // small alternate tilt so the cards feel pinned by hand
  const tilt = index % 2 === 0 ? "-rotate-[0.8deg]" : "rotate-[0.8deg]";
  // main link: live site first, then the repo
  const mainLink = project.live || project.github;

  return (
    <article
      style={{ animationDelay: `${0.6 + index * 0.15}s` }}
      className={`fade relative flex w-full flex-col bg-[#EAE5D7] p-6 pt-8 shadow-xl transition-transform duration-300 hover:scale-[1.02] md:w-[calc(50%-1.25rem)] lg:w-[calc(33.333%-1.67rem)] ${tilt}`}
    >
      <Pin className="left-3 top-3" />

      {project.featured && (
        <span className="absolute -top-3 right-4 rotate-3 bg-[#E9A81F] px-3 py-1 font-['Caveat'] text-lg font-bold shadow">
          Featured
        </span>
      )}

      <div className="flex items-start justify-between gap-3">
        <div>
          <span className="text-[11px] uppercase tracking-widest text-[#8a5f06]">No. 0{project.id}</span>
          <h3 className="mt-1 inline-block bg-[#161616] px-3 py-1 text-xl font-bold text-[#EDE9DF]">{project.title}</h3>
          <p className="mt-1 font-['Caveat'] text-lg leading-none text-[#1b1b1b]/70">{project.kicker}</p>
        </div>
        <Icon size={30} strokeWidth={1.5} className="shrink-0" />
      </div>

      {/* tech stack tags */}
      <ul className="mt-3 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <li key={tech} className="border border-[#1b1b1b] px-2 py-0.5 text-[10px] uppercase tracking-wide">
            {tech}
          </li>
        ))}
      </ul>

      {/* image goes here */}
      <div className="mt-4">
        <ImageSlot src={project.img} title={project.title} />
      </div>

      <p className="mt-4 text-sm leading-relaxed">{project.blurb}</p>

      <ul className="mt-3 space-y-1">
        {project.points.map((point) => (
          <li key={point} className="flex gap-2 font-['Caveat'] text-lg leading-tight">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E9A81F]"></span>
            {point}
          </li>
        ))}
      </ul>

      {/* links stay at the bottom so all cards line up */}
      <div className="mt-auto flex items-center justify-between pt-5 text-sm">
        <span>
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="underline hover:text-[#b57d0a]">
              GitHub
            </a>
          )}
          {project.github && project.live && " | "}
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className="underline hover:text-[#b57d0a]">
              Live
            </a>
          )}
        </span>
        {mainLink && (
          <a
            href={mainLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 font-['Caveat'] text-xl font-bold hover:text-[#b57d0a]"
          >
            View Project <ArrowRight size={16} />
          </a>
        )}
      </div>
    </article>
  );
}

/* ---------------- page ---------------- */

export default function Projects() {
  const [ref, inView] = useInView(0.1);

  return (
    <section
      id="projects"
      ref={ref}
      className={`relative min-h-screen overflow-hidden bg-[#7d7d7d] px-6 py-20 font-['Courier_Prime'] text-[#1b1b1b] ${inView ? "page-in" : ""}`}
      style={{
        // same wall as Home.jsx: spotlight on top, fine dot grid, dark corner
        backgroundImage:
          "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.12) 38%, transparent 62%), radial-gradient(rgba(0,0,0,0.16) 1px, transparent 1.2px), radial-gradient(circle at 80% 80%, rgba(0,0,0,0.28), transparent 55%)",
        backgroundSize: "100% 100%, 4px 4px, 100% 100%",
      }}
    >
      <style>{fontImport}{animations}</style>

      {/* corner scribbles (desktop only) */}
      <div className="fade d2 absolute left-10 top-20 hidden lg:block">
        <p className="-rotate-6 font-['Caveat'] text-xl leading-tight">
          Build <br /> Solve <br /> Improve
        </p>
      </div>
      <div className="fade d2 absolute right-10 top-72 hidden -rotate-6 lg:block">
        <p className="font-['Caveat'] text-xl leading-tight">
          Real <br /> Projects. <br /> Real <br /> Experience.
        </p>
        <ScribbleLine className="mt-1" />
      </div>

      {/* title */}
      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-1">
        <Word word="MY" size="text-6xl sm:text-8xl" delay={0.1} />
        <Word word="PROJECTS" size="text-4xl sm:text-7xl" delay={0.35} />

        {/* sticky on the left */}
        <div className="fade d1 absolute -left-10 top-2 hidden w-28 -rotate-6 bg-[#EDB52A] p-3 pt-5 font-['Caveat'] text-lg leading-tight shadow-lg md:block">
          <Pin className="left-2 top-2" />
          Ideas into working apps.
        </div>

        {/* small lined note on the right */}
        <div className="fade d1 absolute -right-14 -top-2 hidden w-44 rotate-3 bg-[#EAE6DC] p-3 pt-5 font-['Caveat'] text-lg leading-tight shadow-lg md:block">
          <Pin className="left-1/2 top-1.5" />
          Full-Stack, Web Apps, APIs, Databases, Integrations...
        </div>

        <BurstDoodle className="absolute left-16 top-4 hidden md:block" />
        <BurstDoodle className="absolute right-20 top-2 hidden rotate-[100deg] md:block" />
        <ArrowDoodle className="absolute -right-24 top-24 hidden rotate-[20deg] lg:block" />
      </div>

      {/* project cards */}
      <div className="mx-auto mt-16 flex max-w-7xl flex-wrap justify-center gap-10">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      {/* bottom scribbles */}
      <div className="mx-auto mt-14 flex max-w-6xl items-end justify-between px-2">
        <div className="fade d3 -rotate-6">
          <ArrowDoodle className="-rotate-[100deg]" />
          <p className="font-['Caveat'] text-xl leading-tight">
            More projects <br /> coming soon...
          </p>
          <ScribbleLine />
        </div>
        <div className="fade d3 -rotate-6 text-right">
          <p className="font-['Caveat'] text-xl leading-tight">
            Turning ideas <br /> into useful <br /> things.
          </p>
          <ScribbleLine className="ml-auto" />
        </div>
      </div>
    </section>
  );
}