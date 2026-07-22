"use client";

import { motion } from "motion/react";

const TECHNICAL_SKILLS = [
  { category: "Languages", items: ["Python", "Go", "Java", "C#", "C++", "C", "Rust", "Lua"] },
  { category: "APIs", items: ["REST", "GraphQL", "WebSockets", "Webhooks", "ASP.NET Core"] },
  { category: "Databases", items: ["PostgreSQL", "SQLite", "MongoDB", "Firebase", "Redis", "Valkey", "EF Core"] },
  { category: "DevOps", items: ["Docker", "Docker Compose", "Docker Swarm", "Linux", "Prometheus", "Grafana"] },
];

const SOFT_SKILLS = [
  { category: "Workflow", items: ["Agile", "Jira", "Git / GitHub"] },
  { category: "Languages", items: ["Ukrainian (native)", "English (C1)", "Dutch (A1)"] },
];

const INTERESTS = [
  "Self-hosted home servers",
  "Competitive gymnastics — 12 years",
  "International volunteering",
  "Reading security research",
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
      className="grid grid-cols-[110px_1fr] items-baseline gap-4 border-t border-border py-5"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
        {category}
      </span>
      <span className="text-xl leading-relaxed text-foreground">
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
      className="flex min-h-svh items-center bg-secondary px-6 py-20"
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

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_260px]">
          {/* Technical + Soft — left */}
          <div className="flex flex-col gap-16">
            <div>
              <p className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground/50">
                Technical
              </p>
              {TECHNICAL_SKILLS.map((group, i) => (
                <SkillRow
                  key={group.category}
                  category={group.category}
                  items={group.items}
                  delay={i * 0.08}
                />
              ))}
            </div>

            <div>
              <p className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground/50">
                Soft
              </p>
              {SOFT_SKILLS.map((group, i) => (
                <SkillRow
                  key={group.category}
                  category={group.category}
                  items={group.items}
                  delay={i * 0.08}
                />
              ))}
            </div>
          </div>

          {/* Interests — right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
          >
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-muted-foreground/50">
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
