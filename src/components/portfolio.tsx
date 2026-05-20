"use client";

import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  GraduationCap,
  Languages,
  Link,
  Mail,
  MapPin,
  MessageSquareText,
  PenTool,
  Workflow,
} from "lucide-react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import {
  certifications,
  courses,
  education,
  experiences,
  navigation,
  profile,
  projects,
  skillGroups,
  testimonials,
} from "@/data/profile";
import { answerQuestions } from "@/lib/seo";

const mobileNavigation = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Proof", href: "#proof" },
  { label: "Contact", href: "#contact" },
];

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

const fadeEase = [0.22, 1, 0.36, 1] as const;

function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 34, filter: "blur(10px)" }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, delay, ease: fadeEase }}
    >
      {children}
    </motion.div>
  );
}

function MagneticButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 18 });
  const springY = useSpring(y, { stiffness: 180, damping: 18 });
  const isPrimary = variant === "primary";

  return (
    <motion.a
      href={href}
      style={{ x: springX, y: springY }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - rect.left - rect.width / 2) * 0.14);
        y.set((event.clientY - rect.top - rect.height / 2) * 0.14);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      whileTap={{ scale: 0.98 }}
      className={[
        "group relative inline-flex min-h-12 items-center justify-center overflow-hidden rounded-full px-6 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]",
        isPrimary
          ? "bg-[#f8f1dc] text-black shadow-[0_18px_60px_rgba(231,200,117,0.18)] hover:bg-[var(--accent)]"
          : "border border-white/18 bg-black/28 text-white backdrop-blur hover:border-[var(--gold)] hover:bg-white/[0.08]",
      ].join(" ")}
    >
      <span className="relative z-10 flex items-center gap-3">
        {children}
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </span>
      <span
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 group-hover:translate-x-full"
        aria-hidden="true"
      />
    </motion.a>
  );
}

function SectionHeading({
  label,
  title,
  copy,
  align = "center",
}: {
  label: string;
  title: string;
  copy?: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="eyebrow">{label}</p>
      <h2 className="mt-4 font-serif text-4xl leading-[0.94] text-balance text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {copy ? (
        <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)] sm:text-lg">
          {copy}
        </p>
      ) : null}
    </Reveal>
  );
}

function Navigation() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: fadeEase }}
      className="fixed left-3 right-3 top-3 z-50 sm:left-5 sm:right-5 sm:top-5"
    >
      <nav
        aria-label="Primary navigation"
        className="mx-auto w-full max-w-7xl overflow-hidden rounded-full border border-white/12 bg-black/55 shadow-2xl shadow-black/35 backdrop-blur-2xl"
      >
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 px-3 py-2">
          <a
            href="#top"
            className="flex min-h-11 items-center justify-self-start gap-3 rounded-full px-3 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
            aria-label="Go to top"
          >
            <span className="grid size-8 place-items-center rounded-full border border-[var(--gold)]/45 bg-[var(--gold)]/10 text-xs text-[var(--gold)]">
              AB
            </span>
            <span className="hidden sm:inline">Amirreza</span>
          </a>
          <div className="hidden items-center gap-1 rounded-full md:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-xs font-medium text-white/66 transition-colors hover:bg-white/8 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="inline-flex min-h-10 items-center gap-2 justify-self-end rounded-full bg-white px-4 text-sm font-semibold text-black transition-colors hover:bg-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
          >
            Contact
            <Mail className="size-4" aria-hidden="true" />
          </a>
        </div>
        <motion.div className="h-px origin-left bg-gradient-to-r from-[var(--accent)] via-[var(--gold)] to-transparent" style={{ scaleX }} />
      </nav>
      <nav
        aria-label="Mobile section navigation"
        className="mx-auto mt-2 flex max-w-sm items-center justify-between rounded-full border border-white/12 bg-black/58 p-1 shadow-2xl shadow-black/30 backdrop-blur-2xl md:hidden"
      >
        {mobileNavigation.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="rounded-full px-3 py-2 text-xs font-semibold text-white/72 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </motion.header>
  );
}

function Hero() {
  const { scrollYProgress } = useScroll();
  const imageY = useTransform(scrollYProgress, [0, 0.35], [0, 120]);
  const reduceMotion = useReducedMotion();

  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: reduceMotion ? 0 : imageY }} aria-hidden="true">
        <Image
          src="/visuals/hero-image2.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="scale-110 object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_42%,rgba(94,234,212,0.18),transparent_26rem),linear-gradient(90deg,rgba(5,5,6,0.97)_0%,rgba(5,5,6,0.82)_42%,rgba(5,5,6,0.34)_100%)]" aria-hidden="true" />
      <div className="portfolio-grid absolute inset-0" aria-hidden="true" />
      <div className="noise-layer absolute inset-0" aria-hidden="true" />
      <motion.div
        aria-hidden="true"
        className="absolute right-[9%] top-32 hidden size-72 rounded-full border border-[var(--accent)]/20 lg:block"
        animate={{ rotate: 360, scale: [1, 1.08, 1] }}
        transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
      />
      <div className="relative mx-auto grid min-h-screen max-w-7xl items-end px-5 pb-14 pt-36 sm:px-8 lg:px-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: fadeEase }}
            className="mb-7 inline-flex flex-wrap items-center gap-3 rounded-full border border-white/12 bg-black/45 px-4 py-2 text-sm text-white/82 backdrop-blur-xl"
          >
            <MapPin className="size-4 text-[var(--accent)]" aria-hidden="true" />
            {profile.location}
            <span className="h-1 w-1 rounded-full bg-white/35" aria-hidden="true" />
            {profile.followerCount} followers
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 38 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.08, ease: fadeEase }}
            className="font-serif text-[clamp(4rem,10vw,9.5rem)] leading-[0.82] tracking-[-0.06em] text-white"
          >
            {profile.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: fadeEase }}
            className="mt-8 max-w-2xl text-xl leading-8 text-white/82 sm:text-2xl sm:leading-10"
          >
            {profile.headline}. Practical AI systems for businesses that want faster operations and calmer customer communication.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.32, ease: fadeEase }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <MagneticButton href="#projects">View My Work</MagneticButton>
            <MagneticButton href="#contact" variant="secondary">Contact Me</MagneticButton>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.45, ease: fadeEase }}
          className="mt-14 grid gap-3 rounded-[1.75rem] border border-white/12 bg-black/36 p-3 backdrop-blur-2xl sm:grid-cols-2 lg:grid-cols-4"
        >
          {profile.stats.map((stat) => (
            <div key={stat.label} className="rounded-[1.2rem] border border-white/8 bg-white/[0.045] p-5">
              <p className="font-serif text-4xl text-white">{stat.value}</p>
              <p className="mt-2 text-sm leading-6 text-white/68">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-shell px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
        <Reveal className="order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/[0.04] p-4">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/12 via-transparent to-[var(--gold)]/10" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[1.75rem]">
              <Image
                src={profile.profileImage}
                alt="Amirreza Bagherzadeh"
                width={900}
                height={900}
                className="aspect-[0.92] w-full object-cover"
                unoptimized
              />
            </div>
            <div className="relative mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/36 p-4">
                <p className="text-sm text-white/64">Connections</p>
                <p className="mt-1 font-serif text-3xl text-white">{profile.connectionCount}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/36 p-4">
                <p className="text-sm text-white/64">Focus</p>
                <p className="mt-1 text-base font-semibold text-white">Voice AI Automation</p>
              </div>
            </div>
          </div>
        </Reveal>
        <div className="order-1 lg:order-2">
          <SectionHeading
            label="About"
            title="AI automation with a business-first and human-aware lens."
            align="left"
          />
          <Reveal className="mt-10 space-y-6 text-lg leading-9 text-white/76">
            <p>{profile.summary}</p>
            <p>{profile.positioning}</p>
            <p>
              The work is intentionally grounded: remove operational friction, improve customer response,
              and make digital systems easier for teams to trust and use.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {profile.strengths.map((strength, index) => (
              <Reveal key={strength} delay={index * 0.04}>
                <div className="group flex min-h-20 items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition-colors hover:border-[var(--accent)]/45 hover:bg-white/[0.06]">
                  <CheckCircle2 className="mt-1 size-5 shrink-0 text-[var(--accent)]" aria-hidden="true" />
                  <p className="text-sm leading-6 text-white/78">{strength}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section-shell px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Experience"
          title="A career path from web design to AI automation leadership."
          copy="The sequence is practical: build web experiences, understand growth, automate workflows, then lead technology efforts around business problems."
        />
        <div className="relative mt-16">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-[var(--gold)] via-[var(--accent)]/45 to-transparent md:block" aria-hidden="true" />
          <div className="space-y-6">
            {experiences.map((item, index) => (
              <Reveal key={`${item.company}-${item.title}`} delay={index * 0.07}>
                <motion.article
                  whileHover={{ y: -5 }}
                  className="group relative grid gap-5 rounded-[1.6rem] border border-white/10 bg-white/[0.045] p-5 transition-colors hover:border-[var(--gold)]/45 hover:bg-white/[0.07] md:ml-12 md:grid-cols-[0.38fr_1fr] md:p-7"
                >
                  <div className="absolute -left-[3.05rem] top-8 hidden size-5 rounded-full border border-[var(--gold)] bg-black shadow-[0_0_0_8px_rgba(231,200,117,0.08)] md:block" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--gold)]">{item.dates}</p>
                    <p className="mt-2 text-sm text-white/58">{item.duration}</p>
                    <p className="mt-4 text-sm text-white/66">{item.type}</p>
                    <p className="mt-3 flex items-center gap-2 text-sm text-white/66">
                      <MapPin className="size-4" aria-hidden="true" />
                      {item.location}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-base text-white/70">{item.company}</p>
                    <p className="mt-5 leading-8 text-white/74">{item.description}</p>
                    <ul className="mt-5 grid gap-3">
                      {item.responsibilities.map((responsibility) => (
                        <li key={responsibility} className="flex gap-3 text-sm leading-6 text-white/72">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.tools.map((tool) => (
                        <span key={tool} className="rounded-full border border-white/10 bg-black/24 px-3 py-1 text-xs font-medium text-white/68">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const marqueeSkills = skillGroups.flatMap((group) => group.skills);
  const icons = [Bot, PenTool, Workflow, BrainCircuit];

  return (
    <section id="skills" className="section-shell overflow-hidden px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Capability Map"
          title="Technical enough to build, strategic enough to make it useful."
        />
        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group, index) => {
            const Icon = icons[index] ?? BriefcaseBusiness;
            return (
              <Reveal key={group.title} delay={index * 0.05}>
                <motion.div
                  whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
                  className="card-sheen min-h-80 rounded-[1.6rem] border border-white/10 bg-white/[0.045] p-6 transition-colors hover:border-[var(--accent)]/45"
                >
                  <div className="grid size-12 place-items-center rounded-2xl bg-[var(--accent)]/12 text-[var(--accent)]">
                    <Icon className="size-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-white">{group.title}</h3>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span key={skill} className="rounded-full bg-white/[0.065] px-3 py-2 text-xs font-medium text-white/70">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
      <div className="mt-14 flex overflow-hidden border-y border-white/10 py-5">
        <div className="skill-marquee flex min-w-max gap-3">
          {[...marqueeSkills, ...marqueeSkills].map((skill, index) => (
            <span key={`${skill}-${index}`} className="rounded-full border border-white/10 bg-white/[0.035] px-5 py-3 text-sm text-white/68">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section-shell px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Selected Work"
          title="Confirmed public work, current AI focus, and featured delivery."
          copy="The project cards use verified LinkedIn/Apify information only. Private details stay concise until metrics and screenshots are approved for public release."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={index * 0.07}>
              <motion.article
                whileHover={{ y: -8 }}
                className="group card-sheen flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.045] transition-colors hover:border-[var(--gold)]/45"
              >
                <div className="relative aspect-[1.28] overflow-hidden border-b border-white/10 bg-black/35">
                  <Image
                    src={project.image}
                    alt={`${project.name} preview visual`}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    style={{ objectPosition: project.imagePosition }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" aria-hidden="true" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                      {project.status}
                    </p>
                    <a
                      href={project.link}
                      target={project.link.startsWith("http") ? "_blank" : undefined}
                      rel={project.link.startsWith("http") ? "noreferrer" : undefined}
                      aria-label={`Open ${project.name}`}
                      className="grid size-10 place-items-center rounded-full border border-white/10 text-white/64 transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                    >
                      <ArrowUpRight className="size-4" aria-hidden="true" />
                    </a>
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold text-white">{project.name}</h3>
                  <p className="mt-4 leading-7 text-white/72">{project.description}</p>
                  <p className="mt-5 text-sm text-white/66">Role: {project.role}</p>
                  <p className="mt-3 text-sm leading-6 text-white/68">Outcome: {project.outcome}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span key={tool} className="rounded-full bg-white/[0.06] px-3 py-1 text-xs text-white/74">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Proof() {
  return (
    <section id="proof" className="section-shell px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Proof"
          title="Recommendations, credentials, and learning history."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-5">
            {testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.person} delay={index * 0.06}>
                <blockquote className="rounded-[1.6rem] border border-white/10 bg-white/[0.045] p-7">
                  <MessageSquareText className="size-7 text-[var(--accent)]" aria-hidden="true" />
                  <p className="mt-6 text-xl leading-9 text-white/82">&quot;{testimonial.quote}&quot;</p>
                  <footer className="mt-8 border-t border-white/10 pt-5">
                    <p className="font-semibold text-white">{testimonial.person}</p>
                    <p className="mt-1 text-sm text-white/64">{testimonial.role} · {testimonial.date}</p>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
          <div className="grid gap-5">
            <Reveal>
              <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.045] p-7">
                <Award className="size-7 text-[var(--gold)]" aria-hidden="true" />
                <h3 className="mt-5 text-2xl font-semibold text-white">Certifications</h3>
                <div className="mt-6 grid gap-3">
                  {certifications.map((item) => (
                    <a
                      key={item.url}
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-2xl border border-white/10 bg-black/20 p-4 transition-colors hover:border-[var(--accent)]/45 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                    >
                      <span className="block text-sm font-semibold text-white">{item.name}</span>
                      <span className="mt-1 block text-xs text-white/64">{item.issuer} · {item.date}</span>
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.045] p-7">
                <Languages className="size-7 text-[var(--accent)]" aria-hidden="true" />
                <h3 className="mt-5 text-2xl font-semibold text-white">Languages and Courses</h3>
                <div className="mt-6 flex flex-wrap gap-2">
                  {profile.languages.map((language) => (
                    <span key={language.name} className="rounded-full bg-white/[0.06] px-3 py-2 text-xs text-white/76">
                      {language.name}: {language.level}
                    </span>
                  ))}
                  {courses.map((course) => (
                    <span key={course} className="rounded-full border border-white/10 px-3 py-2 text-xs text-white/68">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="section-shell px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Education"
          title="Business, cognition, and science behind the technology lens."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {education.map((item, index) => (
            <Reveal key={item.school} delay={index * 0.05}>
              <div className="h-full rounded-[1.6rem] border border-white/10 bg-white/[0.045] p-6 transition-colors hover:border-[var(--gold)]/40">
                <GraduationCap className="size-7 text-[var(--gold)]" aria-hidden="true" />
                <h3 className="mt-6 text-xl font-semibold text-white">{item.school}</h3>
                <p className="mt-4 leading-7 text-white/74">{item.degree}</p>
                <p className="mt-5 text-sm font-semibold text-[var(--accent)]">{item.dates}</p>
                <p className="mt-3 text-sm leading-6 text-white/64">{item.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section-shell px-5 py-24 sm:px-8 lg:px-10">
      <Reveal>
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/[0.055] p-7 sm:p-10 lg:p-14">
          <div className="absolute right-0 top-0 h-80 w-80 translate-x-1/3 -translate-y-1/3 rounded-full bg-[var(--accent)]/12 blur-3xl" aria-hidden="true" />
          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="eyebrow">Contact</p>
              <h2 className="mt-5 font-serif text-5xl leading-none text-white sm:text-6xl">
                Build useful AI systems for real business work.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/74">
                Reach out for Voice AI Receptionist work, AI automation, premium web experience, or collaboration opportunities.
              </p>
            </div>
            <div className="grid gap-3">
              {profile.email ? (
                <InfoLink title={profile.email} detail="Email" href={`mailto:${profile.email}`} icon={<Mail className="size-5" aria-hidden="true" />} />
              ) : (
                <InfoBlock title="Email shared on request" detail="Public address not listed on LinkedIn" icon={<Mail className="size-5" aria-hidden="true" />} />
              )}
              <InfoLink title="LinkedIn profile" detail="Primary public professional profile" href={profile.linkedin} icon={<Link className="size-5" aria-hidden="true" />} />
              <InfoLink title="Personal website" detail="Public portfolio link from LinkedIn" href={profile.website} icon={<ArrowUpRight className="size-5" aria-hidden="true" />} />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function SearchAnswers() {
  return (
    <section id="answers" className="section-shell px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Search Answers"
          title="Direct answers for search engines, AI assistants, and business inquiries."
          copy="Concise, factual answers help people and answer engines understand the profile without changing the visual tone of the site."
        />
        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {answerQuestions.map((item, index) => (
            <Reveal key={item.question} delay={index * 0.05}>
              <article className="h-full rounded-[1.6rem] border border-white/10 bg-white/[0.045] p-6">
                <h3 className="text-xl font-semibold leading-7 text-white">{item.question}</h3>
                <p className="mt-5 leading-8 text-white/74">{item.answer}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function InfoLink({
  title,
  detail,
  href,
  icon,
}: {
  title: string;
  detail: string;
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="flex min-h-16 items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/24 px-5 py-4 text-white transition-colors hover:border-[var(--accent)] hover:bg-black/38 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
    >
      <span className="inline-flex items-center gap-3">
        <span className="text-[var(--accent)]">{icon}</span>
        <span>
          <span className="block text-base font-semibold">{title}</span>
          <span className="block text-sm text-white/66">{detail}</span>
        </span>
      </span>
      <ArrowUpRight className="size-4 text-white/68" aria-hidden="true" />
    </a>
  );
}

function InfoBlock({
  title,
  detail,
  icon,
}: {
  title: string;
  detail: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex min-h-16 items-center justify-between gap-4 rounded-2xl border border-dashed border-white/18 bg-black/18 px-5 py-4 text-white/78">
      <span className="inline-flex items-center gap-3">
        <span className="text-[var(--accent)]">{icon}</span>
        <span>
          <span className="block text-base font-semibold text-white">{title}</span>
          <span className="block text-sm text-white/66">{detail}</span>
        </span>
      </span>
    </div>
  );
}

export function PortfolioPage() {
  return (
    <main id="main-content" className="relative overflow-hidden">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Proof />
      <Education />
      <SearchAnswers />
      <Contact />
      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-white/58">
        <p>{profile.name} · Voice AI Automation Specialist</p>
      </footer>
    </main>
  );
}
