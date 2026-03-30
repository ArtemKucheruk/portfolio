"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Download, ExternalLink } from "lucide-react";

const FACTS = [
  { value: "2019", label: "First production code" },
  { value: "5+", label: "Years of backend engineering" },
  { value: "3", label: "Primary languages" },
  { value: "0", label: "Managed cloud dependencies" },
];

const AMBITIONS = [
  "Design distributed systems at scale",
  "Contribute to open-source security tooling",
  "Build infrastructure that runs itself",
  "Work at the intersection of backend and security",
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

export function About() {
  return (
    <section
      id="about"
      data-header-theme="light"
      className="flex min-h-svh flex-col justify-center bg-background px-6 py-16"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
        {/* Label + headline */}
        <div>
          <motion.p
            className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About
          </motion.p>
          <FadeIn>
            <h2 className="text-[clamp(1.8rem,4.5vw,4rem)] font-bold leading-tight tracking-tight text-foreground">
              Five years building
              <br />
              what runs underneath.
            </h2>
          </FadeIn>
        </div>

        {/* Bio + photo */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_240px]">
          <FadeIn delay={0.1}>
            <p className="text-base leading-relaxed text-foreground">
              I started writing code at sixteen and never really stopped. Over
              time I gravitated toward the parts of the stack most people ignore
              — the systems, the infrastructure, the security layer. I work
              primarily in Python, Go, and JavaScript, building backends that
              need to be fast, secure, and maintainable. These days I spend most
              of my time on API design, service architecture, and deploying
              directly on bare-metal Linux servers.
            </p>
          </FadeIn>

          <FadeIn delay={0.15} className="h-40 w-full overflow-hidden rounded-xl bg-secondary lg:h-auto">
            <Image
              src="/files/img/1764476686604.jpg"
              alt="Artem Kucheruk"
              width={240}
              height={320}
              className="h-full w-full object-cover"
            />
          </FadeIn>
        </div>

        {/* Motivation */}
        <FadeIn delay={0.2} className="border-l-2 border-foreground pl-6">
          <p className="mb-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Why I do this
          </p>
          <p className="text-base leading-relaxed text-foreground">
            {/* Replace with your real motivation */}
            My first lines of code were a Python script to sort my music
            library. That small thing taught me that software is just logic made
            tangible — and I wanted to understand all of it, down to the OS and
            the network stack. That curiosity never left.
          </p>
        </FadeIn>

        {/* Dreams & ambitions */}
        <FadeIn delay={0.25}>
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Dreams &amp; professional ambitions
          </p>
          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {AMBITIONS.map((ambition) => (
              <li key={ambition} className="flex items-start gap-2 text-sm text-foreground">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-muted-foreground" />
                {ambition}
              </li>
            ))}
          </ul>
        </FadeIn>

        {/* Stats + CV */}
        <div className="grid grid-cols-1 gap-6 border-t border-border pt-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <FadeIn delay={0.3}>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {FACTS.map(({ value, label }) => (
                <div key={label} className="flex flex-col gap-1">
                  <span className="text-2xl font-bold text-foreground">{value}</span>
                  <span className="text-xs text-muted-foreground">{label}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.35} className="flex items-center gap-3">
            <a
              href="/files/cv/Artem_Kucheruk_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-border bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-80"
            >
              <ExternalLink className="size-4" />
              View CV
            </a>
            <a
              href="/files/cv/Artem_Kucheruk_CV.pdf"
              download
              className="flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-opacity hover:opacity-60"
            >
              <Download className="size-4" />
              Download
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}