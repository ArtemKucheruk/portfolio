"use client";

import { motion } from "motion/react";

const SKILLS = [
  {
    category: "Languages",
    items: ["Python", "Go", "JavaScript"],
  },
  {
    category: "Frameworks",
    items: ["FastAPI", "Flask", "Django", "Echo", "Express"],
  },
  {
    category: "Automation",
    items: ["Selenium", "Playwright"],
  },
  {
    category: "Infrastructure",
    items: ["Bare metal", "Linux", "DevOps", "Security"],
  },
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
      className="grid grid-cols-1 items-baseline gap-2 border-t border-border py-8 md:grid-cols-[180px_1fr] md:gap-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
        {category}
      </span>
      <span className="text-3xl leading-relaxed text-foreground">
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
      className="flex min-h-svh items-center bg-secondary px-6 py-24"
    >
      <div className="mx-auto w-full max-w-5xl">
        <motion.p
          className="mb-16 text-sm font-medium uppercase tracking-widest text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          The stack
        </motion.p>

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
      </div>
    </section>
  );
}