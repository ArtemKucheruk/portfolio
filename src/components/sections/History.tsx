"use client";

import { motion } from "motion/react";

const HISTORY = [
  {
    period: "2020 – 2023",
    role: "Student",
    place: "Programming Academy",
    description: "Three years of structured programming education — foundations, algorithms, and applied problem solving.",
  },
  {
    period: "2022 – 2024",
    role: "Software Developer",
    place: "College",
    description: "Two-year programme — algorithms, databases, and system design.",
  },
  {
    period: "Aug 2024 – 2025",
    role: "Software Developer",
    place: "Company",
    description: "Backend services, APIs, and internal tooling in production.",
  },
  {
    period: "2024 – Present",
    role: "Student",
    place: "University",
    description: "Degree alongside professional work — computer science and engineering.",
  },
  {
    period: "2025 – Present",
    role: "Lead Developer",
    place: "Company",
    description: "Architecture decisions, mentoring, and driving delivery.",
  },
];

const AMBITIONS = [
  "I want to work on infrastructure that other engineers depend on without thinking about it — the kind of software that just runs, quietly and correctly, at scale.",
  "Security is where I keep returning. I want to turn that instinct into deep expertise in distributed systems security — shaping how teams think about trust boundaries from day one, not as an afterthought.",
  "Longer term, I want to contribute to the tools developers actually use: open-source runtimes, protocol implementations, the unglamorous plumbing that makes modern software possible.",
];

function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function History() {
  return (
    <section
      id="history"
      data-header-theme="light"
      className="flex h-svh flex-col justify-center bg-background px-8 py-10 lg:px-16"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[3fr_2fr] lg:gap-16">

          {/* Left: History timeline */}
          <FadeIn>
            <p className="mb-5 text-sm font-medium uppercase tracking-widest text-muted-foreground">
              History
            </p>
            <div className="relative flex flex-col border-l-2 border-border pl-6">
              {HISTORY.map((item, i) => (
                <div key={i} className="relative pb-6 last:pb-0">
                  <span className="absolute -left-[1.3125rem] top-1 size-2.5 rounded-full border-2 border-foreground bg-background" />
                  <p className="text-base font-medium uppercase tracking-widest text-muted-foreground">
                    {item.period}
                  </p>
                  <p className="mt-0.5 text-lg font-semibold text-foreground">
                    {item.role}{" "}
                    <span className="font-normal text-muted-foreground">· {item.place}</span>
                  </p>
                  <p className="mt-1 text-base leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Right: Ambitions */}
          <FadeIn delay={0.1}>
            <p className="mb-5 text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Dreams &amp; ambitions
            </p>
            <div className="flex flex-col gap-5">
              {AMBITIONS.map((paragraph, i) => (
                <p key={i} className="text-base leading-relaxed text-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
