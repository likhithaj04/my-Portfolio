// import React from "react";

// // font import - or move this link into index.html
// const fontImport =
//   "@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Caveat:wght@400;600;700&family=Courier+Prime:wght@400;700&display=swap');";

// const skills = ["React", "Node.js", "Express", "MongoDB", "JavaScript", "REST APIs", "Tailwind", "Git"];

// /* ---------------- doodles (hand drawn style svgs) ---------------- */

// // same paper plane as the home page, with a dotted trail
// function PlaneDoodle({ className = "" }) {
//   return (
//     <svg
//       viewBox="0 0 260 110"
//       className={`text-[#1b1b1b] ${className}`}
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       {/* dotted trail with a little loop */}
//       <path d="M4 96 C 30 104, 60 98, 78 84 C 92 72, 76 58, 66 68 C 58 78, 82 84, 104 70 C 124 58, 140 46, 150 44" strokeDasharray="4 7" />
//       {/* plane */}
//       <g transform="translate(120 4)">
//         <path d="M4 40 L136 6 L96 84 L72 54 Z" transform="scale(0.95)" />
//         <path d="M4 40 L72 54 L136 6" transform="scale(0.95)" />
//         <path d="M72 54 L80 76" transform="scale(0.95)" />
//       </g>
//     </svg>
//   );
// }

// // curved arrow, rotate / flip it with classes
// function ArrowDoodle({ className = "" }) {
//   return (
//     <svg
//       viewBox="0 0 80 70"
//       className={`h-14 w-16 text-[#1b1b1b] ${className}`}
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//     >
//       <path d="M6 62 C 12 34, 38 14, 68 10" />
//       <path d="M52 3 L69 10 L58 25" />
//     </svg>
//   );
// }

// // 3 little lines that look like a "pop" / sparkle
// function BurstDoodle({ className = "" }) {
//   return (
//     <svg
//       viewBox="0 0 50 50"
//       className={`h-10 w-10 text-[#1b1b1b] ${className}`}
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2.5"
//       strokeLinecap="round"
//     >
//       <path d="M8 24 L22 24" />
//       <path d="M12 8 L24 17" />
//       <path d="M12 40 L24 31" />
//     </svg>
//   );
// }

// // wavy underline scribble
// function ScribbleLine({ className = "" }) {
//   return (
//     <svg
//       viewBox="0 0 100 14"
//       className={`h-3 w-20 text-[#1b1b1b] ${className}`}
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//     >
//       <path d="M2 4 C 30 0, 60 8, 98 3" />
//       <path d="M10 11 C 40 7, 70 13, 96 9" />
//     </svg>
//   );
// }

// // </> with a cursor, for the dev bit
// function CodeDoodle({ className = "" }) {
//   return (
//     <svg
//       viewBox="0 0 90 60"
//       className={`h-14 w-20 text-[#1b1b1b] ${className}`}
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2.5"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M22 14 L8 30 L22 46" />
//       <path d="M52 12 L40 48" />
//       <path d="M62 14 L76 30 L62 46" />
//       <path d="M70 34 L70 56 L76 50 L82 58 L86 55 L80 48 L88 47 Z" fill="#EDE9DF" />
//     </svg>
//   );
// }

// // simple star + spiral scribbles for empty corners
// function StarDoodle({ className = "" }) {
//   return (
//     <svg viewBox="0 0 40 40" className={`h-8 w-8 text-[#1b1b1b] ${className}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M20 3 L25 15 L38 16 L28 25 L31 37 L20 31 L9 37 L12 25 L2 16 L15 15 Z" />
//     </svg>
//   );
// }

// function SpiralDoodle({ className = "" }) {
//   return (
//     <svg viewBox="0 0 60 60" className={`h-12 w-12 text-[#1b1b1b] ${className}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
//       <path d="M30 30 C 30 26, 36 26, 36 31 C 36 38, 24 38, 24 29 C 24 19, 40 19, 42 31 C 44 44, 22 48, 16 32 C 10 14, 38 6, 48 24" />
//     </svg>
//   );
// }

// /* ---------------- small helpers ---------------- */

// // one letter block for the "ABOUT ME" title
// function Letter({ children, color, tilt }) {
//   const colors = {
//     yellow: "bg-[#E9A81F] text-[#141414]",
//     paper: "bg-[#EDE9DF] text-[#141414]",
//     dark: "bg-[#161616] text-[#EDE9DF]",
//   };

//   return (
//     <span
//       className={`inline-block px-2 py-1 font-['Alfa_Slab_One'] text-6xl leading-none shadow-md sm:px-3 sm:text-8xl ${colors[color]} ${tilt}`}
//     >
//       {children}
//     </span>
//   );
// }

// // little black pin
// function Pin({ className = "" }) {
//   return <span className={`absolute h-3 w-3 rounded-full bg-[#111] shadow ${className}`}></span>;
// }

// /* ---------------- page ---------------- */

// export default function About() {
//   return (
//     <section
//       id="about"
//       className="relative min-h-screen overflow-hidden bg-[#8a8a8a] px-6 py-20 font-['Courier_Prime'] text-[#1b1b1b]"
//       style={{
//         // faint dots like the reference
//         backgroundImage: "radial-gradient(rgba(0,0,0,0.18) 1px, transparent 1px)",
//         backgroundSize: "14px 14px",
//       }}
//     >
//       <style>{fontImport}</style>

//       {/* handwritten notes in the corners (desktop only) */}
//       <div className="absolute left-12 top-24 hidden lg:block">
//         <p className="-rotate-6 font-['Caveat'] text-xl leading-tight">
//           Better code <br /> for a kinder internet.
//         </p>
//         <ArrowDoodle className="ml-24 mt-1 rotate-[25deg] -scale-x-100" />
//       </div>

//       <div className="absolute right-12 top-24 hidden lg:block">
//         <p className="-rotate-[8deg] font-['Caveat'] text-xl leading-tight">
//           Build <br /> Learn <br /> Grow
//         </p>
//         <ScribbleLine className="-rotate-6" />
//         <StarDoodle className="ml-10 mt-6 rotate-12" />
//       </div>

//       {/* title */}
//       <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-1">
//         <div className="flex">
//           <Letter color="yellow" tilt="-rotate-3">A</Letter>
//           <Letter color="dark" tilt="rotate-2">B</Letter>
//           <Letter color="paper" tilt="-rotate-1">O</Letter>
//           <Letter color="dark" tilt="rotate-3">U</Letter>
//           <Letter color="yellow" tilt="-rotate-2">T</Letter>
//         </div>
//         <div className="flex">
//           <Letter color="yellow" tilt="rotate-2">M</Letter>
//           <Letter color="paper" tilt="-rotate-3">E</Letter>
//         </div>

//         {/* doodles around the title */}
//         <BurstDoodle className="absolute -left-16 top-4 hidden md:block" />
//         <BurstDoodle className="absolute bottom-0 right-24 hidden rotate-[160deg] md:block" />
//         <PlaneDoodle className="absolute -right-44 top-6 hidden h-28 w-64 md:block" />
//         <SpiralDoodle className="absolute -left-14 bottom-0 hidden rotate-12 md:block" />
//       </div>

//       {/* main layout: sticky | note | sticky */}
//       <div className="mx-auto mt-14 grid max-w-6xl items-end gap-10 lg:grid-cols-[1fr_1.6fr_1fr]">
//         {/* left sticky */}
//         <div className="relative order-2 mx-auto w-52 -rotate-3 bg-[#E6E1D3] p-5 pt-8 shadow-lg lg:order-1 lg:mx-0 lg:justify-self-end">
//           <Pin className="left-3 top-3" />
//           <h3 className="font-['Caveat'] text-2xl font-bold underline">Beyond code</h3>
//           <p className="mt-2 font-['Caveat'] text-xl leading-tight">
//             Curiosity, writing, and noticing the little details.
//           </p>
//           <ArrowDoodle className="absolute -right-14 -top-12 hidden -rotate-12 lg:block" />
//         </div>

//         {/* the one main note */}
//         <div className="relative order-1 lg:order-2">
//           <div
//             className="relative rotate-[0.5deg] bg-[#EDE9DF] px-8 pb-10 pt-12 shadow-xl"
//             style={{
//               // grid paper + slightly uneven torn edge
//               backgroundImage:
//                 "linear-gradient(rgba(0,0,0,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.07) 1px, transparent 1px)",
//               backgroundSize: "16px 16px",
//               clipPath:
//                 "polygon(0 2%, 20% 0, 45% 2%, 70% 0, 100% 2%, 99% 40%, 100% 70%, 98% 100%, 72% 98%, 45% 100%, 20% 98%, 0 100%, 1% 60%)",
//             }}
//           >
//             <Pin className="left-4 top-4" />

//             {/* yellow label on top */}
//             <span className="absolute left-10 top-0 -rotate-3 bg-[#E9A81F] px-4 py-1 font-['Caveat'] text-xl font-bold">
//               A little about me
//             </span>

//             <p className="mt-2 text-lg leading-relaxed">
//               Hey, I'm Likhitha, a MERN stack developer from Bengaluru who enjoys turning ideas into
//               useful, thoughtful web experiences.
//             </p>
//             <p className="mt-4 leading-relaxed">
//               I build the whole thing, from the React screens people click on to the Node and Express
//               APIs and the MongoDB data behind them. I like clean, practical UI and backend logic that
//               is easy to read, test and improve.
//             </p>

//             <h4 className="mt-6 font-bold underline">My toolkit</h4>
//             <ul className="mt-3 flex flex-wrap gap-2">
//               {skills.map((skill) => (
//                 <li
//                   key={skill}
//                   className="rounded border-2 border-[#1b1b1b] px-3 py-0.5 font-['Caveat'] text-lg"
//                 >
//                   {skill}
//                 </li>
//               ))}
//             </ul>

//             <CodeDoodle className="absolute bottom-3 right-5 hidden sm:block" />
//           </div>

//           {/* tape + doodles hanging off the note */}
//           <span className="absolute -top-2 right-10 h-5 w-16 rotate-6 bg-[#E9A81F]/70"></span>
//           <BurstDoodle className="absolute -bottom-6 -right-10 hidden rotate-[200deg] lg:block" />
//         </div>

//         {/* right sticky */}
//         <div className="relative order-3 mx-auto w-56 rotate-3 bg-[#EDB52A] p-5 pt-8 shadow-lg lg:mx-0 lg:justify-self-start">
//           <Pin className="right-3 top-3" />
//           <h3 className="font-['Caveat'] text-2xl font-bold uppercase underline">Currently exploring</h3>
//           <p className="mt-2 font-['Caveat'] text-xl leading-tight">
//             Better backend patterns, useful AI features, and products that solve real problems.
//           </p>
//           <ArrowDoodle className="absolute -left-14 -top-14 hidden -scale-x-100 rotate-[-10deg] lg:block" />
//         </div>
//       </div>
//     </section>
//   );
// }