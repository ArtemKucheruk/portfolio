"use client";

import { motion } from "motion/react";

const SKILLS = [
  { category: "Languages", items: ["Python", "Go", "JavaScript", "Java", "Lua"] },
  { category: "Frameworks", items: ["FastAPI", "Flask", "Django", "Echo", "Express"] },
  { category: "Automation", items: ["Selenium", "Playwright"] },
  { category: "Infrastructure", items: ["Bare metal", "Linux", "DevOps", "Security"] },
];

const INTERESTS = [
  "Self-hosted home servers",
  "CTF challenges",
  "Reading security research",
  "Reading",
  "Economics",
];

function SkillRow({
  category,
  items,
  delay,
}: {
  category: string;
  items: string[];
  delay: number;
}) {
  return (
    <motion.div
      className="grid grid-cols-[140px_1fr] items-baseline gap-6 border-t border-border py-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
        {category}
      </span>
      <span className="text-2xl leading-relaxed text-foreground">
        {items.join("  ·  ")}
      </span>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      data-header-theme="light"
      className="flex h-svh items-center bg-secondary px-6 py-20"
    >
      <div className="mx-auto w-full max-w-5xl">
        <motion.p
          className="mb-12 text-sm font-medium uppercase tracking-widest text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          The stack
        </motion.p>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_260px]">
          {/* Skills */}
          <div>
            {SKILLS.map((group, i) => (
              <SkillRow
                key={group.category}
                category={group.category}
                items={group.items}
                delay={i * 0.08}
              />
            ))}
          </div>

          {/* Interests */}
          <motion.div
            className="border-t border-border pt-6 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.35, ease: "easeOut" }}
          >
            <p className="mb-6 text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Interests
            </p>
            <ul className="flex flex-col gap-4">
              {INTERESTS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-lg text-foreground">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-muted-foreground" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}