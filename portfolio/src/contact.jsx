import React, { useState } from "react";
import { Mail, Linkedin, Github, MapPin, Lightbulb, Send, Megaphone, ArrowRight } from "lucide-react";

const fontImport =
  "@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Caveat:wght@400;600;700&family=Courier+Prime:wght@400;700&display=swap');";

// change these to your own details
const EMAIL = "likhitha04j@gmail.com";
const LINKEDIN = "linkedin.com/in/likhitha";
const GITHUB = "github.com/likhithaj04";

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
    <svg viewBox="0 0 50 50" className={`h-9 w-9 text-[#1b1b1b] ${className}`} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
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

// same paper plane as the home / about pages
function PlaneDoodle({ className = "" }) {
  return (
    <svg viewBox="0 0 260 110" className={`text-[#1b1b1b] ${className}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 96 C 30 104, 60 98, 78 84 C 92 72, 76 58, 66 68 C 58 78, 82 84, 104 70 C 124 58, 140 46, 150 44" strokeDasharray="4 7" />
      <g transform="translate(120 4)">
        <path d="M4 40 L136 6 L96 84 L72 54 Z" transform="scale(0.95)" />
        <path d="M4 40 L72 54 L136 6" transform="scale(0.95)" />
        <path d="M72 54 L80 76" transform="scale(0.95)" />
      </g>
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

function Word({ word, size }) {
  return (
    <div className="flex">
      {word.split("").map((letter, i) => (
        <span
          key={i}
          className={`inline-block px-1.5 py-1 font-['Alfa_Slab_One'] leading-none shadow-md sm:px-2.5 ${size} ${colors[colorOrder[(i + word.length) % 3]]} ${tiltOrder[i % 5]}`}
        >
          {letter}
        </span>
      ))}
    </div>
  );
}

function Pin({ className = "" }) {
  return <span className={`absolute h-3 w-3 rounded-full bg-[#111] shadow ${className}`}></span>;
}

// shared look for the text inputs
const inputClass =
  "w-full border-2 border-[#1b1b1b]/60 bg-transparent px-3 py-2 font-['Caveat'] text-xl placeholder:text-[#1b1b1b]/60 focus:border-[#1b1b1b] focus:outline-none";

/* ---------------- page ---------------- */

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // simple version: opens the user's mail app with everything filled in.
    // later you can replace this with a fetch() POST to your Express API.
    const body = `${form.message}\n\nFrom: ${form.name} (${form.email})`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;

    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden bg-[#8a8a8a] px-6 py-20 font-['Courier_Prime'] text-[#1b1b1b]"
      style={{
        backgroundImage: "radial-gradient(rgba(0,0,0,0.18) 1px, transparent 1px)",
        backgroundSize: "14px 14px",
      }}
    >
      <style>{fontImport}</style>

      {/* title */}
      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-1">
        <Word word="GET IN" size="text-5xl sm:text-8xl" />
        <Word word="TOUCH" size="text-5xl sm:text-8xl" />

        <Megaphone size={44} strokeWidth={1.5} className="absolute -left-20 top-0 hidden -rotate-12 md:block" />
        <BurstDoodle className="absolute -left-4 -top-2 hidden md:block" />
        <BurstDoodle className="absolute -right-4 top-0 hidden rotate-[100deg] md:block" />

        {/* sticky left */}
        <div className="absolute -left-24 top-24 hidden w-28 -rotate-6 bg-[#EDB52A] p-3 pt-5 font-['Caveat'] text-lg leading-tight shadow-lg md:block">
          <Pin className="left-2 top-2" />
          Let's build something great.
        </div>

        {/* note right */}
        <div className="absolute -right-32 top-0 hidden w-44 rotate-3 bg-[#EAE6DC] p-3 pt-5 font-['Caveat'] text-lg leading-tight shadow-lg lg:block">
          <Pin className="left-1/2 top-1.5" />
          Have a project, idea, or just want to say hi? I'd love to hear from you!
        </div>
        <ArrowDoodle className="absolute -right-24 top-40 hidden -scale-x-100 rotate-[-10deg] lg:block" />
      </div>

      {/* form + side notes */}
      <div className="mx-auto mt-16 grid max-w-5xl gap-10 lg:grid-cols-[1.2fr_1fr]">
        {/* the message form */}
        <form
          onSubmit={handleSubmit}
          className="relative bg-[#EAE5D7] px-8 pb-10 pt-10 shadow-xl"
          style={{
            // ruled paper lines + torn edge
            backgroundImage: "repeating-linear-gradient(transparent 0 27px, rgba(0,0,0,0.1) 27px 28px)",
            clipPath:
              "polygon(0 1%, 25% 0, 50% 1%, 75% 0, 100% 1%, 99% 35%, 100% 65%, 99% 100%, 70% 99%, 40% 100%, 15% 99%, 0 100%, 1% 60%, 0 30%)",
          }}
        >
          <Pin className="left-4 top-4" />
          <span className="absolute -top-1 left-1/2 h-5 w-16 rotate-2 bg-[#bdbdbd]/70"></span>

          <h3 className="inline-block font-['Caveat'] text-3xl font-bold">Send me a message</h3>
          <ScribbleLine className="-mt-1 mb-4 w-40 text-[#E9A81F]" />

          <div className="space-y-4">
            <input className={inputClass} type="text" name="name" placeholder="Name *" required value={form.name} onChange={handleChange} />
            <input className={inputClass} type="email" name="email" placeholder="Email *" required value={form.email} onChange={handleChange} />
            <input className={inputClass} type="text" name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} />
            <textarea className={`${inputClass} h-36 resize-none`} name="message" placeholder="Message *" required value={form.message} onChange={handleChange}></textarea>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <button
              type="submit"
              className="flex items-center gap-2 bg-[#161616] px-6 py-2 font-['Caveat'] text-xl text-[#EDE9DF] shadow-lg hover:bg-[#E9A81F] hover:text-[#161616]"
            >
              Send Message <ArrowRight size={18} />
            </button>
            {sent && <span className="font-['Caveat'] text-xl">Opening your mail app...</span>}
          </div>
        </form>

        {/* right column */}
        <div className="space-y-8">
          {/* let's connect sticky */}
          <div className="relative rotate-[-3deg] bg-[#EDB52A] p-6 pt-8 shadow-lg">
            <Pin className="right-4 top-3" />
            <div className="flex items-start justify-between">
              <h3 className="font-['Caveat'] text-3xl font-bold underline">Let's Connect</h3>
              <Send size={28} strokeWidth={1.5} />
            </div>
            <ul className="mt-4 space-y-3 font-['Caveat'] text-xl">
              <li className="flex items-center gap-3">
                <Mail size={20} />
                <a href={`mailto:${EMAIL}`} className="hover:underline">{EMAIL}</a>
              </li>
              <li className="flex items-center gap-3">
                <Linkedin size={20} />
                <a href={`https://${LINKEDIN}`} target="_blank" rel="noreferrer" className="hover:underline">{LINKEDIN}</a>
              </li>
              <li className="flex items-center gap-3">
                <Github size={20} />
                <a href={`https://${GITHUB}`} target="_blank" rel="noreferrer" className="hover:underline">{GITHUB}</a>
              </li>
            </ul>
          </div>

          {/* location */}
          <div className="relative bg-[#E6E1D3] p-5 shadow-lg">
            <div className="flex items-center gap-2 font-['Caveat'] text-2xl font-bold">
              <MapPin size={22} /> Location
            </div>
            <p className="mt-1 font-['Caveat'] text-xl">Bengaluru, India</p>
            <ScribbleLine className="w-14" />
          </div>

          {/* quick note */}
          <div className="relative rotate-1 bg-[#E6E1D3] p-5 shadow-lg">
            <div className="flex items-center gap-2 font-['Caveat'] text-2xl font-bold">
              <Lightbulb size={22} /> Quick Note
            </div>
            <p className="mt-2 font-['Caveat'] text-xl leading-tight">
              I'm open to opportunities, collaborations, freelance projects and interesting conversations!
            </p>
          </div>
        </div>
      </div>

      {/* bottom scribbles */}
      <div className="mx-auto mt-14 flex max-w-5xl items-end justify-between px-2">
        <div className="-rotate-6">
          <p className="font-['Caveat'] text-xl leading-tight">
            Drop a message... <br /> I'll get back to you <br /> as soon as possible.
          </p>
        </div>
        <PlaneDoodle className="hidden h-24 w-56 sm:block" />
      </div>
    </section>
  );
}