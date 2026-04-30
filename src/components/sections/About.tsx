"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Download, ExternalLink } from "lucide-react";

const FACTS = [
  { value: "2025", label: "First production code" },
  { value: "6+", label: "Years of programming" },
  { value: "3", label: "Primary languages" },
  { value: "3", label: "Activly managing servers" },
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
      className="flex h-svh flex-col justify-center bg-background px-8 py-10 lg:px-16"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <motion.p
          className="text-sm font-medium uppercase tracking-widest text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About
        </motion.p>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_320px] lg:gap-16">
          {/* Left: all text content */}
          <div className="flex flex-col gap-5">
            <FadeIn>
              <h2 className="text-[clamp(1.8rem,3vw,3.2rem)] font-bold leading-tight tracking-tight text-foreground">
                Five years building
                <br />
                what runs underneath.
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-lg leading-relaxed text-foreground">
                I started writing code at sixteen and never really stopped. Over
                time I gravitated toward the parts of the stack most people ignore
                — systems, infrastructure, the security layer. I work primarily in
                Python, Go, and JavaScript, building backends that need to be fast,
                secure, and maintainable.
              </p>
            </FadeIn>

            <FadeIn delay={0.15} className="border-l-2 border-foreground pl-5">
              <p className="mb-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Why I do this
              </p>
              <p className="text-base leading-relaxed text-foreground">
                My first lines of code were a Python script to sort my music
                library. That small thing taught me that software is just logic
                made tangible — and I wanted to understand all of it, down to the
                OS and the network stack. That curiosity never left.
              </p>
            </FadeIn>

            {/* Stats + CV */}
            <FadeIn delay={0.2}>
              <div className="grid grid-cols-1 gap-4 border-t border-border pt-4 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="grid grid-cols-4 gap-4">
                  {FACTS.map(({ value, label }) => (
                    <div key={label} className="flex flex-col gap-0.5">
                      <span className="text-2xl font-bold text-foreground">{value}</span>
                      <span className="text-sm text-muted-foreground">{label}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-3">
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
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right: portrait photo — fixed width, natural height */}
          <FadeIn delay={0.1} className="hidden overflow-hidden rounded-xl bg-secondary lg:block">
            <Image
              src="/files/img/1764476686604.jpg"
              alt="Artem Kucheruk"
              width={320}
              height={480}
              className="w-full object-cover object-center"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
