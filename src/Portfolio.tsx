import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Github, Linkedin, ExternalLink, Download, Sun, Moon, Menu, X, ArrowUp } from "lucide-react";

// ---------- Small UI ----------
const Preloader = ({ ready }: { ready: boolean }) => (
  <motion.div
    className={`fixed inset-0 z-[60] grid place-items-center bg-white dark:bg-slate-950 ${
      ready ? "pointer-events-none" : "pointer-events-auto"
    }`}
    initial={{ opacity: 1 }}
    animate={{ opacity: ready ? 0 : 1 }}
    transition={{ duration: 0.5 }}
    role="status"
    aria-live="polite"
  >
    <div className="flex items-end gap-2">
      <div className="h-3 w-3 rounded-full bg-emerald-500 animate-bounce [animation-delay:-0.2s]" />
      <div className="h-3 w-3 rounded-full bg-emerald-500 animate-bounce [animation-delay:-0.1s]" />
      <div className="h-3 w-3 rounded-full bg-emerald-500 animate-bounce" />
    </div>
    <span className="sr-only">Loading portfolio…</span>
  </motion.div>
);

const ScrollToTop = () => {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <motion.button
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-5 right-5 z-40 rounded-2xl border border-emerald-400/40 bg-white/90 dark:bg-slate-900/80 backdrop-blur-md p-3 shadow-lg hover:shadow-xl dark:border-emerald-700/40"
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
      animate={{ opacity: show ? 1 : 0, scale: show ? 1 : 0.9, y: show ? 0 : 10 }}
      transition={{ duration: 0.25 }}
    >
      <ArrowUp className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
    </motion.button>
  );
};

const Section = ({
  id,
  title,
  action,
  children,
}: {
  id: string;
  title: string;
  action?: React.ReactNode;
  children: React.ReactNode;
}) => (
  <section id={id} className="py-20 sm:py-28 scroll-mt-24" aria-labelledby={`${id}-title`}>
    <div className="mx-auto max-w-6xl px-4">
      <div className="mb-4 flex items-end justify-between gap-4">
        <h2 id={`${id}-title`} className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white font-['Inter',ui-sans-serif]">
          {title}
        </h2>
        {action ? <div className="shrink-0">{action}</div> : null}
      </div>
      <div className="h-px mb-8 bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent dark:via-emerald-600/50" />
      {children}
    </div>
  </section>
);


const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full border border-slate-200/70 px-3 py-1 text-xs font-medium text-slate-700 dark:text-slate-200 dark:border-slate-700/80 bg-white/70 dark:bg-slate-900/60 backdrop-blur-sm ring-1 ring-inset ring-emerald-500/10">
    {children}
  </span>
);

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`group relative rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/60 dark:bg-slate-900/50 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-xl ${className}`}>
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-transparent to-emerald-200/40 dark:to-emerald-900/20 opacity-0 group-hover:opacity-100 transition-opacity" />
    <div className="relative p-6">{children}</div>
  </div>
);

// ---------- Data ----------
export type Project = { title: string; desc: string; tech: string[]; img: string; demo: string; repo: string };

const projects: Project[] = [
  {
    title: "Client Work – Personal Portfolio ",
    desc: "A modern portfolio website built with Next.js and TailwindCSS, designed to look smooth, elegant, and full of clean animations.",
    tech: ["Next.js", "TailwindCSS", "Type Script", "React"],
    img: "/portrangga.png",
    demo: "https://rangga-portfolio-sigma.vercel.app/",
    repo: "https://github.com/xxxZino/Job-Recommender",
  },
  {
    title: "Client Work – Personal Portfolio",
    desc: "A responsive portfolio website powered by Next.js and TailwindCSS with a focus on modern design and performance.",
    tech: ["Next.js", "TailwindCSS", "Type Script", "React"],
    img: "/Preview.png",
    demo: "https://sj-portofolio.vercel.app/",
    repo: "https://github.com/xxxZino/Job-Recommender",
  },
    {
    title: "Client Work – Company Profile",
    desc: "A modern company profile system built with Next.js and TailwindCSS, designed to be dynamic and reliable.",
    tech: ["Next.js", "TailwindCSS", "Type Script", "React"],
    img: "/jambuku.png",
    demo: "https://jambuku.vercel.app/",
    repo: "https://github.com/xxxZino/Job-Recommender",
  },

  {
    title: "Job Candidate Recommender",
    desc: "NLP system to match candidates with vacancies using Sentence-BERT and Cosine similarity.",
    tech: ["Python", "Streamlit", "SBERT", "Cosine Similarity"],
    img: "/recsystem1.png",
    demo: "#",
    repo: "https://github.com/xxxZino/Job-Recommender",
  },

  
];

// Logos via devicon CDN (ringan & stabil)
const skillLogos = [
  { alt: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { alt: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { alt: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { alt: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { alt: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { alt: "TailwindCSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { alt: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { alt: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { alt: "FastAPI", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  { alt: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { alt: "Prisma", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" },
  { alt: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { alt: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
] as const;

const experiences = [
  {
    role: "Intern Fullstack Web Developer",
    org: "PT. GIT Solution – Yogyakarta",
    time: "2024 – 2025",
    bullets: [
      "Completed internship program as a Fullstack Web Developer (Oct 2024 – Dec 2024).",
      "Built and optimized web applications with a focus on responsive design and performance.",
      "Collaborated with the team to integrate APIs and develop scalable features.",
    ],
  },
] as const;

// PROJECT CAROUSEL
const ProjectsCarousel: React.FC<{
  projects: {
    title: string;
    desc: string;
    tech: string[];
    img: string;
    demo: string;
    repo: string;
  }[];
}> = ({ projects }) => {
  const trackRef = React.useRef<HTMLDivElement>(null);
  const [active, setActive] = React.useState(0);
  const rafRef = React.useRef<number | null>(null);

  // Scroll helper: ke index tertentu
  const scrollToIndex = React.useCallback((idx: number) => {
    const el = trackRef.current;
    if (!el) return;
    const items = Array.from(el.children) as HTMLElement[];
    const item = items[Math.max(0, Math.min(idx, items.length - 1))];
    if (!item) return;
    const offset = item.offsetLeft - parseInt(getComputedStyle(el).paddingLeft || "0", 10);
    el.scrollTo({ left: offset, behavior: "smooth" });
  }, []);

  // Tombol prev/next
  const scrollByAmount = (dir: "prev" | "next") => {
    const next = dir === "next" ? active + 1 : active - 1;
    scrollToIndex(next);
  };

  // Hitung slide aktif berdasarkan elemen paling dekat ke tengah viewport track
  const recalcActive = React.useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const center = el.getBoundingClientRect().left + el.clientWidth / 2;
    const items = Array.from(el.children) as HTMLElement[];
    let nearest = 0;
    let best = Number.POSITIVE_INFINITY;
    items.forEach((it, i) => {
      const rect = it.getBoundingClientRect();
      const itCenter = rect.left + rect.width / 2;
      const dist = Math.abs(itCenter - center);
      if (dist < best) {
        best = dist;
        nearest = i;
      }
    });
    setActive(nearest);
  }, []);

  // Scroll handler (throttled via rAF)
  const onScroll = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(recalcActive);
  };

  // Recalc saat resize
  React.useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    recalcActive();
    const ro = new ResizeObserver(recalcActive);
    ro.observe(el);
    return () => ro.disconnect();
  }, [recalcActive]);

  // Keyboard ← → untuk navigasi
  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollByAmount("next");
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollByAmount("prev");
    }
  };

  return (
    <div className="relative">
      {/* track scroll-snap */}
      <div
        ref={trackRef}
        role="listbox"
        aria-label="Daftar proyek"
        tabIndex={0}
        onKeyDown={onKeyDown}
        onScroll={onScroll}
        className="
          flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2
          px-1
          focus:outline-none focus:ring-2 focus:ring-emerald-400/60 rounded-xl
          [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
        "
      >
        {projects.map((p, i) => (
          <motion.article
            role="option"
            aria-selected={active === i}
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="
              snap-start shrink-0
              w-[88%] sm:w-[64%] md:w-[55%] lg:w-[46%] xl:w-[34%]
            "
          >
            <Card>
              <a href={p.demo} target="_blank" rel="noreferrer" className="block">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={p.img}
                    alt={`${p.title} screenshot`}
                    loading="lazy"
                    className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-4 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold leading-snug">{p.title}</h3>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{p.desc}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <Badge key={t}>{t}</Badge>
                      ))}
                    </div>
                  </div>
                  <ExternalLink className="h-5 w-5 shrink-0 opacity-80 text-emerald-500" />
                </div>
              </a>
              <div className="mt-4 flex items-center gap-3">
                <a href={p.demo} target="_blank" rel="noreferrer" className="text-sm underline-offset-4 hover:underline decoration-emerald-500">
                  Live Demo
                </a>
                <a href={p.repo} target="_blank" rel="noreferrer" className="text-sm underline-offset-4 hover:underline decoration-emerald-500">
                  GitHub
                </a>
              </div>
            </Card>
          </motion.article>
        ))}
      </div>

      {/* tombol prev/next */}
      <div className="mt-4 flex items-center justify-center gap-3">
        <button
          onClick={() => scrollByAmount("prev")}
          className="rounded-xl border border-slate-200 dark:border-slate-700 px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          Prev
        </button>
        <button
          onClick={() => scrollByAmount("next")}
          className="rounded-xl border border-slate-200 dark:border-slate-700 px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          Next
        </button>
      </div>

      {/* dot indicators */}
      <div className="mt-3 flex justify-center gap-2">
        {projects.map((_, i) => (
          <button
            key={i}
            aria-label={`Slide ${i + 1}`}
            onClick={() => scrollToIndex(i)}
            className={[
              "h-2.5 rounded-full transition-all",
              active === i ? "w-6 bg-emerald-500" : "w-2.5 bg-slate-300 dark:bg-slate-700",
            ].join(" ")}
          />
        ))}
      </div>
    </div>
  );
};



// ---------- Component ----------
export default function Portfolio() {
  // Theme & mobile menu
  const [isDark, setIsDark] = React.useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  const [menuOpen, setMenuOpen] = React.useState(false);

  // Preloader flag – ready setelah window load
  const [isReady, setIsReady] = React.useState(false);
  React.useEffect(() => {
    const onLoaded = () => setIsReady(true);
    if (document.readyState === "complete") setIsReady(true);
    else window.addEventListener("load", onLoaded);
    return () => window.removeEventListener("load", onLoaded);
  }, []);

  React.useEffect(() => {
    const root = document.documentElement;
    if (isDark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [isDark]);

  // Slider
  const [showAllProjects, setShowAllProjects] = React.useState(false);


  // Smooth scroll + active section highlight
  const navIds = React.useMemo(() => ["projects", "case-studies", "skills", "services", "experience", "contact"], []);
  const [activeId, setActiveId] = React.useState<string>("");

  const scrollToId = React.useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const header = document.querySelector("header");
    const offset = (header?.clientHeight ?? 64) + 8;
    const y = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }, []);

  const closeMenuAfterScroll = React.useCallback(
    (id: string) => {
      scrollToId(id);
      setMenuOpen(false);
    },
    [scrollToId]
  );

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) setActiveId(en.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0.01 }
    );

    navIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [navIds]);

  // Contact form handler (mailto)
  const onSubmitContact = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const message = String(formData.get("message") || "");

    const to = "egasaputraaa12@gmail.com";
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  };


  return (
    <div className="min-h-screen scroll-smooth bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950 dark:text-slate-100 selection:bg-emerald-600 selection:text-white font-['Inter',ui-sans-serif]">
      <Preloader ready={isReady} />
      <ScrollToTop />

      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 dark:bg-slate-900/50 border-b border-slate-200/80 dark:border-slate-800/80">
        <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
          <a href="#" className="font-extrabold tracking-tight text-lg font-['Inter']">
            zino<span className="text-emerald-500">.lab</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            {navIds.map((id) => {
              const isActive = activeId === id;
              return (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToId(id);
                  }}
                  className={`capitalize relative hover:text-emerald-600 dark:hover:text-emerald-400 ${
                    isActive ? "text-emerald-600 dark:text-emerald-400" : ""
                  }`}
                >
                  {id.replace("-", " ")}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                      isActive ? "w-full bg-emerald-500" : "w-0 bg-transparent"
                    }`}
                    aria-hidden
                  />
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            {/* Mobile menu button */}
            <button
              className="sm:hidden inline-flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700 p-2 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Open menu"
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>

            {/* Theme + CV (desktop only) */}
            <button
              onClick={() => setIsDark((v) => !v)}
              aria-label="Toggle theme"
              className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-700 px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {isDark ? (
                <>
                  <Sun className="h-4 w-4" /> <span className="hidden md:inline">Light</span>
                </>
              ) : (
                <>
                  <Moon className="h-4 w-4" /> <span className="hidden md:inline">Dark</span>
                </>
              )}
            </button>
            <a
              href="/CV.pdf"
              className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-2 text-sm shadow-lg hover:shadow-xl transition"
            >
              <Download className="h-4 w-4" /> <span className="hidden md:inline">Download CV</span>
            </a>
          </div>
        </div>

        {/* Mobile panel */}
        {menuOpen && (
          <div className="sm:hidden border-t border-slate-200/80 dark:border-slate-800/80 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl">
            <div className="mx-auto max-w-6xl px-4 py-3 grid gap-1">
              {navIds.map((id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    closeMenuAfterScroll(id);
                  }}
                  className="py-2 capitalize hover:text-emerald-600 dark:hover:text-emerald-400"
                >
                  {id.replace("-", " ")}
                </a>
              ))}
              <div className="flex items-center gap-2 pt-2">
                <button
                  onClick={() => setIsDark((v) => !v)}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-700 px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  {isDark ? (
                    <>
                      <Sun className="h-4 w-4" /> Light
                    </>
                  ) : (
                    <>
                      <Moon className="h-4 w-4" /> Dark
                    </>
                  )}
                </button>
                <a
                  href="/CV.pdf"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-3 py-2 text-sm shadow-lg hover:shadow-xl transition"
                >
                  <Download className="h-4 w-4" /> CV
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute -inset-x-10 -top-40 h-80 blur-3xl opacity-50">
          <div className="h-full w-full bg-[radial-gradient(ellipse_at_top_left,theme(colors.emerald.300/.3),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_top_left,theme(colors.emerald.700/.2),transparent_70%)]" />
        </div>

        <div className="mx-auto max-w-6xl px-4 pt-20 sm:pt-28 pb-16">
          <div className="grid items-center gap-10 sm:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <p className="mb-3 text-xs tracking-widest uppercase text-emerald-600 dark:text-emerald-400">Available for freelance</p>
              <motion.h1
                className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.05 }}
              >
                Crafting modern, scalable, and user friendly digital solutions.
              </motion.h1>
              <motion.p
                className="mt-4 text-slate-600 dark:text-slate-300 max-w-prose"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                I’m Ega, a full-stack developer passionate about crafting clean UIs and robust backends. My focus is on performance, accessibility, and elegant design.
              </motion.p>
              <motion.div
                className="mt-6 flex flex-wrap items-center gap-3"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
              >
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToId("projects");
                  }}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-5 py-2.5 text-sm shadow-lg hover:translate-y-[-1px] transition-all"
                >
                  View Projects <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToId("contact");
                  }}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  Contact Me
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
                <motion.img
                  src="/me.jpg"
                  alt="Portrait of Ega Saputra"
                  className="rounded-3xl shadow-xl ring-1 ring-emerald-500/20"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="mx-auto max-w-6xl px-4 -mt-8 sm:-mt-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { k: "Projects", v: "4+" },
            { k: "Satisfied Clients", v: "3" },
            { k: "Avg. LCP", v: "<2.0s" },
            { k: "Stack", v: "React/TS" },
          ].map((s, i) => (
            <motion.div
              key={s.k}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/40 p-4 text-center shadow-md"
            >
              <div className="text-xl font-bold text-emerald-600 dark:text-emerald-400">{s.v}</div>
              <div className="text-xs text-slate-500 mt-1">{s.k}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Projects */}
   <Section
  id="projects"
  title="Featured Projects"
  action={
    <button
      onClick={() => setShowAllProjects(true)}
      className="rounded-xl border border-slate-200 dark:border-slate-700 px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800"
    >
      See all
    </button>
  }
>
  <ProjectsCarousel projects={projects} />
</Section>

{/* Modal Semua Project */}
{showAllProjects && (
  <div className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm grid place-items-center px-4" role="dialog" aria-modal="true">
    <div className="max-w-6xl w-full max-h-[85vh] overflow-y-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 sm:p-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold">All Projects</h3>
        <button
          onClick={() => setShowAllProjects(false)}
          className="rounded-xl border border-slate-200 dark:border-slate-700 px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          Tutup
        </button>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <Card key={p.title}>
            <a href={p.demo} target="_blank" rel="noreferrer" className="block">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={p.img}
                  alt={`${p.title} screenshot`}
                  loading="lazy"
                  className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-4 flex items-start justify-between gap-3">
                <div>
                  <h4 className="font-semibold leading-snug">{p.title}</h4>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{p.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tech.map((t) => <Badge key={t}>{t}</Badge>)}
                  </div>
                </div>
                <ExternalLink className="h-5 w-5 shrink-0 opacity-80 text-emerald-500" />
              </div>
            </a>
            <div className="mt-4 flex items-center gap-3">
              <a href={p.demo} target="_blank" rel="noreferrer" className="text-sm underline-offset-4 hover:underline decoration-emerald-500">Live Demo</a>
              <a href={p.repo} target="_blank" rel="noreferrer" className="text-sm underline-offset-4 hover:underline decoration-emerald-500">GitHub</a>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </div>
)}


      {/* Case Studies */}
      <Section id="case-studies" title="Case Studies (Impact)">
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            {
              title: "Hiring Recommender MVP",
              context: "University research | 8 weeks",
              impact: [
                "Hybrid SBERT+TF-IDF for matching",
                "Top-k retrieval <200ms on 5k profiles",
                "Streamlit dashboard for HR insights",
              ],
            },
          ].map((c) => (
            <Card key={c.title}>
              <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-400">{c.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{c.context}</p>
              <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 dark:text-slate-300 space-y-2">
                {c.impact.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* Skills & Tools (logo-based) */}
      <Section id="skills" title="Skills & Tools">
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-4">
          {skillLogos.map((l) => (
            <motion.div
              key={l.alt}
              className="flex items-center justify-center rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/60 dark:bg-slate-900/50 p-3 shadow-md"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -4, scale: 1.03 }}
            >
              <img src={l.src} alt={l.alt} className="h-8 sm:h-10" loading="lazy" />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Services */}
      <Section id="services" title="Services">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            {
              h: "Web Development",
              p: "Custom websites and web apps built with modern frameworks like React, Next.js, and Tailwind CSS.",
            },
            {
              h: "UI/UX & Branding System",
              p: "End-to-end service from modern UI/UX design to a consistent branding system. Delivering professional websites and apps with a strong and unique brand identity.",
            },
            {
              h: "API & Backend Development",
              p: "Robust REST or GraphQL APIs, database design, and secure server-side integrations.",
            },
          ].map((s) => (
            <motion.div
              key={s.h}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45 }}
            >
              <Card>
                <h3 className="font-medium">{s.h}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{s.p}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience">
        <div className="space-y-6">
          {experiences.map((e, idx) => (
            <motion.div
              key={e.role}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
            >
              <Card>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold">{e.role}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{e.org}</p>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{e.time}</p>
                </div>
                <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 dark:text-slate-300 space-y-2">
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact">
        <div className="grid gap-8 sm:grid-cols-2">
          <Card>
            <h3 className="text-lg font-medium">Let’s build something great</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Email me directly or use the form. I usually reply within 24 hours.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
              <a
                href="mailto:egasaputraaa12@gmail.com"
                className="inline-flex items-center gap-2 underline-offset-4 hover:underline decoration-emerald-500"
              >
                <Mail className="h-4 w-4" /> egasaputraaa12@gmail.com
              </a>
              <span className="opacity-50">|</span>
              <a
                href="https://www.linkedin.com/in/lucillewsd/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 underline-offset-4 hover:underline decoration-emerald-500"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href="https://github.com/xxxZino"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 underline-offset-4 hover:underline decoration-emerald-500"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
            </div>
          </Card>

          <Card>
            <form className="grid gap-3" onSubmit={onSubmitContact} aria-label="Contact form">
              <label className="grid gap-1 text-sm">
                <span>Name</span>
                <input
                  name="name"
                  className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-900/60 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-300 dark:focus:ring-emerald-700"
                  required
                />
              </label>
              <label className="grid gap-1 text-sm">
                <span>Email</span>
                <input
                  name="email"
                  type="email"
                  className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-900/60 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-300 dark:focus:ring-emerald-700"
                  required
                />
              </label>
              <label className="grid gap-1 text-sm">
                <span>Message</span>
                <textarea
                  name="message"
                  rows={5}
                  className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-900/60 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-300 dark:focus:ring-emerald-700"
                  required
                />
              </label>
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-2 text-sm shadow-lg hover:translate-y-[-1px] transition-all"
              >
                Send Message
              </button>
              <p className="text-xs text-slate-500 mt-1">This opens your email app with the message pre‑filled.</p>
            </form>
          </Card>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-slate-200/70 dark:border-slate-800/70">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500">© {new Date().getFullYear()} Zino. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:underline underline-offset-4">
              Privacy
            </a>
            <a href="#" className="hover:underline underline-offset-4">
              Imprint
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
