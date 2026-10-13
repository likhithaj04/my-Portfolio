// import React from "react";
// import { Mail, PawPrint, Brain, Code, ImageIcon, ArrowRight } from "lucide-react";

// // to show a real screenshot, import it and put it in the `img` field below
// // import inboxly from "../src/assets/inboxly.png";

// const fontImport =
//   "@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Caveat:wght@400;600;700&family=Courier+Prime:wght@400;700&display=swap');";

// const projects = [
//   {
//     id: 1,
//     title: "Inboxly",
//     featured: true,
//     tech: "React, Node.js/Express, PostgreSQL + Prisma, Gmail API, Groq API, JWT",
//     points: [
//       "AI email agent prioritizes important Gmail.",
//       "Behavioral scoring for email actions.",
//       "On-demand Groq summaries to reduce LLM calls.",
//       "Caching/temp storage/pagination to reduce DB load.",
//       "OAuth 2.0 + JWT Gmail security.",
//     ],
//     github: "#",
//     live: "#",
//     img: null, // e.g. inboxly
//     icon: Mail,
//   },
//   {
//     id: 2,
//     title: "ResQHeart",
//     featured: false,
//     tech: "React, Node.js/Express, MongoDB, JWT",
//     points: [
//       "Emergency platform for lost & found pets.",
//       "Post, search and match lost/found pets.",
//       "Real-time updates and notifications.",
//       "User authentication and secure access.",
//     ],
//     github: "#",
//     live: "https://res-q-heart.vercel.app/",
//     img: null,
//     icon: PawPrint,
//   },
//   {
//     id: 3,
//     title: "AIAnalyser",
//     featured: false,
//     tech: "React, Node.js/Express, MongoDB, Tailwind CSS, Groq, Pinecone",
//     points: [
//       "Resume + LinkedIn analysis with AI.",
//       "Performance, functionality, accuracy, trustability cards.",
//       "RAG exploration with Pinecone + LangChain.",
//       "Clean and focused UI (minimal scrollbars).",
//     ],
//     github: "#",
//     live: "#",
//     img: null,
//     icon: Brain,
//   },
//   {
//     id: 4,
//     title: "D-BUG",
//     featured: false,
//     tech: "React, Express.js, Supabase",
//     points: [
//       "AI code debugger with chat interface.",
//       "Supabase auth with token + threadId.",
//       "Reducer for message/response/loading/error.",
//       "ChatGPT-like layout with Font Awesome.",
//     ],
//     github: "#",
//     live: "#",
//     img: null,
//     icon: Code,
//   },
// ];

// /* ---------------- doodles ---------------- */

// function ArrowDoodle({ className = "" }) {
//   return (
//     <svg viewBox="0 0 80 70" className={`h-12 w-14 text-[#1b1b1b] ${className}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
//       <path d="M6 62 C 12 34, 38 14, 68 10" />
//       <path d="M52 3 L69 10 L58 25" />
//     </svg>
//   );
// }

// function BurstDoodle({ className = "" }) {
//   return (
//     <svg viewBox="0 0 50 50" className={`h-9 w-9 text-[#1b1b1b] ${className}`} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
//       <path d="M8 24 L22 24" />
//       <path d="M12 8 L24 17" />
//       <path d="M12 40 L24 31" />
//     </svg>
//   );
// }

// function ScribbleLine({ className = "" }) {
//   return (
//     <svg viewBox="0 0 100 14" className={`h-3 w-20 text-[#1b1b1b] ${className}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
//       <path d="M2 4 C 30 0, 60 8, 98 3" />
//       <path d="M10 11 C 40 7, 70 13, 96 9" />
//     </svg>
//   );
// }

// /* ---------------- helpers ---------------- */

// const colors = {
//   yellow: "bg-[#E9A81F] text-[#141414]",
//   paper: "bg-[#EDE9DF] text-[#141414]",
//   dark: "bg-[#161616] text-[#EDE9DF]",
// };
// const colorOrder = ["yellow", "dark", "paper"];
// const tiltOrder = ["-rotate-3", "rotate-2", "-rotate-1", "rotate-3", "-rotate-2"];

// // turns a word into a row of cut-out letter blocks
// function Word({ word, size }) {
//   return (
//     <div className="flex">
//       {word.split("").map((letter, i) => (
//         <span
//           key={i}
//           className={`inline-block px-1.5 py-1 font-['Alfa_Slab_One'] leading-none shadow-md sm:px-2.5 ${size} ${colors[colorOrder[(i + word.length) % 3]]} ${tiltOrder[i % 5]}`}
//         >
//           {letter}
//         </span>
//       ))}
//     </div>
//   );
// }

// function Pin({ className = "" }) {
//   return <span className={`absolute h-3 w-3 rounded-full bg-[#111] shadow ${className}`}></span>;
// }

// // slot for the project screenshot - shows a placeholder until `img` is set
// function ImageSlot({ src, title }) {
//   if (src) {
//     return <img src={src} alt={`${title} screenshot`} className="aspect-video w-full border-2 border-[#1b1b1b] object-cover" />;
//   }
//   return (
//     <div className="flex aspect-video w-full flex-col items-center justify-center gap-1 border-2 border-dashed border-[#1b1b1b]/50 bg-black/5 font-['Caveat'] text-lg text-[#1b1b1b]/60">
//       <ImageIcon size={26} />
//       Project image here
//     </div>
//   );
// }

// function ProjectCard({ project, index }) {
//   const Icon = project.icon;
//   // small alternate tilt so the cards feel pinned by hand
//   const tilt = index % 2 === 0 ? "-rotate-[0.8deg]" : "rotate-[0.8deg]";

//   return (
//     <article className={`relative bg-[#EAE5D7] p-6 pt-8 shadow-xl ${tilt}`}>
//       <Pin className="left-3 top-3" />

//       {project.featured && (
//         <span className="absolute -top-3 right-4 rotate-3 bg-[#E9A81F] px-3 py-1 font-['Caveat'] text-lg font-bold shadow">
//           Featured
//         </span>
//       )}

//       <div className="flex items-start justify-between gap-3">
//         <h3 className="inline-block bg-[#161616] px-3 py-1 text-xl font-bold text-[#EDE9DF]">{project.title}</h3>
//         <Icon size={30} strokeWidth={1.5} className="shrink-0" />
//       </div>

//       <p className="mt-3 text-xs leading-relaxed">{project.tech}</p>

//       {/* image goes here */}
//       <div className="mt-4">
//         <ImageSlot src={project.img} title={project.title} />
//       </div>

//       <ul className="mt-4 space-y-1">
//         {project.points.map((point) => (
//           <li key={point} className="flex gap-2 font-['Caveat'] text-lg leading-tight">
//             <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E9A81F]"></span>
//             {point}
//           </li>
//         ))}
//       </ul>

//       <div className="mt-5 flex items-center justify-between text-sm">
//         <span>
//           <a href={project.github} target="_blank" rel="noreferrer" className="underline hover:text-[#b57d0a]">
//             GitHub
//           </a>
//           {" | "}
//           <a href={project.live} target="_blank" rel="noreferrer" className="underline hover:text-[#b57d0a]">
//             Live
//           </a>
//         </span>
//         <a
//           href={project.live}
//           target="_blank"
//           rel="noreferrer"
//           className="flex items-center gap-1 font-['Caveat'] text-xl font-bold hover:text-[#b57d0a]"
//         >
//           View Project <ArrowRight size={16} />
//         </a>
//       </div>
//     </article>
//   );
// }

// /* ---------------- page ---------------- */

// export default function Projects() {
//   return (
//     <section
//       id="projects"
//       className="relative min-h-screen overflow-hidden bg-[#8a8a8a] px-6 py-20 font-['Courier_Prime'] text-[#1b1b1b]"
//       style={{
//         backgroundImage: "radial-gradient(rgba(0,0,0,0.18) 1px, transparent 1px)",
//         backgroundSize: "14px 14px",
//       }}
//     >
//       <style>{fontImport}</style>

//       {/* corner scribbles (desktop only) */}
//       <div className="absolute left-10 top-20 hidden lg:block">
//         <p className="-rotate-6 font-['Caveat'] text-xl leading-tight">
//           Build <br /> Solve <br /> Improve
//         </p>
//       </div>
//       <div className="absolute right-10 top-72 hidden -rotate-6 lg:block">
//         <p className="font-['Caveat'] text-xl leading-tight">
//           Real <br /> Projects. <br /> Real <br /> Experience.
//         </p>
//         <ScribbleLine className="mt-1" />
//       </div>

//       {/* title */}
//       <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-1">
//         <Word word="MY" size="text-6xl sm:text-8xl" />
//         <Word word="PROJECTS" size="text-4xl sm:text-7xl" />

//         {/* sticky on the left */}
//         <div className="absolute -left-10 top-2 hidden w-28 -rotate-6 bg-[#EDB52A] p-3 pt-5 font-['Caveat'] text-lg leading-tight shadow-lg md:block">
//           <Pin className="left-2 top-2" />
//           Ideas into working apps.
//         </div>

//         {/* small lined note on the right */}
//         <div className="absolute -right-14 -top-2 hidden w-44 rotate-3 bg-[#EAE6DC] p-3 pt-5 font-['Caveat'] text-lg leading-tight shadow-lg md:block">
//           <Pin className="left-1/2 top-1.5" />
//           Full-Stack, Web Apps, APIs, Databases, Integrations...
//         </div>

//         <BurstDoodle className="absolute left-16 top-4 hidden md:block" />
//         <BurstDoodle className="absolute right-20 top-2 hidden rotate-[100deg] md:block" />
//         <ArrowDoodle className="absolute -right-24 top-24 hidden rotate-[20deg] lg:block" />
//       </div>

//       {/* project cards */}
//       <div className="mx-auto mt-16 grid max-w-6xl gap-10 md:grid-cols-2">
//         {projects.map((project, i) => (
//           <ProjectCard key={project.id} project={project} index={i} />
//         ))}
//       </div>

//       {/* bottom scribbles */}
//       <div className="mx-auto mt-14 flex max-w-6xl items-end justify-between px-2">
//         <div className="-rotate-6">
//           <ArrowDoodle className="-rotate-[100deg]" />
//           <p className="font-['Caveat'] text-xl leading-tight">
//             More projects <br /> coming soon...
//           </p>
//           <ScribbleLine />
//         </div>
//         <div className="-rotate-6 text-right">
//           <p className="font-['Caveat'] text-xl leading-tight">
//             Turning ideas <br /> into useful <br /> things.
//           </p>
//           <ScribbleLine className="ml-auto" />
//         </div>
//       </div>
//     </section>
//   );
// }