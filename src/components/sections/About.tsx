"use client";

import { motion } from "motion/react";

const FACTS = [
  { value: "2019", label: "First production code" },
  { value: "5+", label: "Years of backend engineering" },
  { value: "3", label: "Primary languages" },
  { value: "0", label: "Managed cloud dependencies" },
];

export function About() {
  return (
    <section
      id="about"
      data-header-theme="light"
      className="min-h-svh bg-background px-6 py-24"
    >
      <div className="mx-auto max-w-5xl">
        <motion.p
          className="mb-16 text-sm font-medium uppercase tracking-widest text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About
        </motion.p>

        <motion.h2
          className="text-[clamp(2rem,6vw,5rem)] font-bold leading-tight tracking-tight text-foreground"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Five years building
          <br />
          what runs underneath.
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_320px]">
          <div className="flex flex-col gap-6">
            <motion.p
              className="text-lg leading-relaxed text-foreground"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              I started writing code at sixteen and never really stopped. Over time
              I gravitated toward the parts of the stack most people ignore — the
              systems, the infrastructure, the security layer. I work primarily in
              Python, Go, and JavaScript, building backends that need to be fast,
              secure, and maintainable.
            </motion.p>

            <motion.p
              className="text-lg leading-relaxed text-muted-foreground"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              These days I spend most of my time on API design, service
              architecture, and deploying directly on bare-metal Linux servers. I
              care about how things actually run — not just how they look in a demo.
            </motion.p>

            <motion.div
              className="mt-4 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {FACTS.map(({ value, label }) => (
                <div key={label} className="flex flex-col gap-1">
                  <span className="text-3xl font-bold text-foreground">{value}</span>
                  <span className="text-sm text-muted-foreground">{label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Photo placeholder — swap with <Image> later */}
          <motion.div
            className="h-80 w-full overflow-hidden rounded-xl bg-secondary lg:h-auto lg:min-h-64"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="flex h-full min-h-64 items-center justify-center text-sm text-muted-foreground">
              Photo
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}