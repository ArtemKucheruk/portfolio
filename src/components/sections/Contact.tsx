"use client";

import { motion } from "motion/react";
import { GithubIcon, Mail, ArrowUpRight } from "lucide-react";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/placeholder",
    icon: GithubIcon,
    handle: "@placeholder",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/placeholder",
    icon: LinkedInIcon,
    handle: "placeholder",
  },
  {
    label: "Email",
    href: "mailto:placeholder@example.com",
    icon: Mail,
    handle: "placeholder@example.com",
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      data-header-theme="light"
      className="flex min-h-svh flex-col justify-between bg-secondary px-6 py-24"
    >
      <div className="mx-auto w-full max-w-5xl">
        <motion.p
          className="mb-16 text-sm font-medium uppercase tracking-widest text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get in touch
        </motion.p>

        <motion.h2
          className="text-[clamp(2.5rem,7vw,6rem)] font-bold leading-none tracking-tight text-foreground"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Let&apos;s build
          <br />
          something.
        </motion.h2>

        <div className="mt-16 flex flex-col divide-y divide-border">
          {LINKS.map(({ label, href, icon: Icon, handle }, i) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group flex items-center justify-between py-6 text-foreground transition-colors hover:text-muted-foreground"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: "easeOut" }}
            >
              <div className="flex items-center gap-5">
                <Icon className="size-6 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-2xl font-semibold">{label}</span>
                  <span className="text-base text-muted-foreground">{handle}</span>
                </div>
              </div>
              <ArrowUpRight className="size-6 opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Footer line */}
      <motion.div
        className="mx-auto w-full max-w-5xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="flex items-center justify-between border-t border-border pt-8 text-sm text-muted-foreground">
          <span>Artem Kucheruk</span>
          <span>Built with Next.js</span>
        </div>
      </motion.div>
    </section>
  );
}