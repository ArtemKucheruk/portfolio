"use client";

import { motion } from "motion/react";
import { MapPin, Link2, Users, Star, GitFork, BookMarked } from "lucide-react";

// — Replace with real data later —
const PROFILE = {
  name: "Artem Kucheruk",
  username: "ArtemKucheruk",
  bio: "Backend engineer. Building secure systems and the infrastructure behind them.",
  location: "Somewhere, Earth",
  website: "github.com/ArtemKucheruk",
  followers: 42,
  following: 18,
  repos: 24,
};

const LANG_COLORS: Record<string, string> = {
  Go: "#00ADD8",
  Python: "#3776AB",
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  Shell: "#89E051",
};

const PROJECTS = [
  {
    name: "http-gateway",
    description:
      "High-performance API gateway built with Go and Echo. Handles routing, rate-limiting, and auth middleware.",
    language: "Go",
    stars: 128,
    forks: 12,
  },
  {
    name: "fastapi-boilerplate",
    description:
      "Production-ready FastAPI template with async SQLAlchemy, JWT auth, and Docker Compose setup.",
    language: "Python",
    stars: 94,
    forks: 31,
  },
  {
    name: "scrape-engine",
    description:
      "Distributed web scraping engine using Playwright and asyncio. Bypasses common bot-detection patterns.",
    language: "Python",
    stars: 57,
    forks: 8,
  },
  {
    name: "deploy-scripts",
    description:
      "Shell scripts and Ansible playbooks for provisioning and deploying services on bare-metal Linux servers.",
    language: "Shell",
    stars: 33,
    forks: 5,
  },
  {
    name: "auth-service",
    description:
      "Standalone OAuth2 / OpenID Connect service written in Go with PKCE support and refresh token rotation.",
    language: "Go",
    stars: 76,
    forks: 14,
  },
  {
    name: "js-toolbox",
    description:
      "Collection of lightweight Express middlewares and utility functions used across internal projects.",
    language: "JavaScript",
    stars: 21,
    forks: 3,
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[number];
  index: number;
}) {
  const color = LANG_COLORS[project.language] ?? "#888";
  return (
    <motion.div
      className="flex flex-col gap-4 rounded-xl border border-white/8 bg-white/4 p-7"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: "easeOut" }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
    >
      <div className="flex items-start gap-2.5">
        <BookMarked className="mt-0.5 size-5 shrink-0 text-white/40" />
        <span className="text-base font-semibold text-white/90 hover:underline cursor-pointer">
          {project.name}
        </span>
      </div>

      <p className="flex-1 text-sm leading-relaxed text-white/45">
        {project.description}
      </p>

      <div className="flex items-center gap-5 text-sm text-white/40">
        <span className="flex items-center gap-1.5">
          <span
            className="size-3 rounded-full"
            style={{ backgroundColor: color }}
          />
          {project.language}
        </span>
        <span className="flex items-center gap-1.5">
          <Star className="size-3.5" />
          {project.stars}
        </span>
        <span className="flex items-center gap-1.5">
          <GitFork className="size-3.5" />
          {project.forks}
        </span>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      data-header-theme="dark"
      className="min-h-svh bg-[oklch(0.11_0.008_260)] px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <motion.p
          className="mb-12 text-sm font-medium uppercase tracking-widest text-white/40"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Work
        </motion.p>

        <div className="flex flex-col gap-10 lg:flex-row lg:gap-12">
          {/* Left: GitHub profile */}
          <motion.aside
            className="w-full shrink-0 lg:sticky lg:top-24 lg:w-80 lg:self-start"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="mb-5 flex size-28 items-center justify-center rounded-full bg-white/8 text-3xl font-bold text-white/50 select-none">
              AK
            </div>

            <h2 className="text-2xl font-bold leading-tight text-white/90">{PROFILE.name}</h2>
            <p className="text-lg text-white/40">{PROFILE.username}</p>

            <p className="mt-4 text-base leading-relaxed text-white/60">
              {PROFILE.bio}
            </p>

            <div className="mt-5 flex flex-col gap-2 text-base text-white/40">
              <span className="flex items-center gap-2">
                <MapPin className="size-4 shrink-0" />
                {PROFILE.location}
              </span>
              <span className="flex items-center gap-2">
                <Link2 className="size-4 shrink-0" />
                {PROFILE.website}
              </span>
            </div>

            <div className="mt-5 flex gap-5 text-base text-white/40">
              <span className="flex items-center gap-1.5">
                <Users className="size-4" />
                <strong className="text-white/80">{PROFILE.followers}</strong>&nbsp;followers
              </span>
              <span>
                <strong className="text-white/80">{PROFILE.following}</strong>&nbsp;following
              </span>
            </div>
          </motion.aside>

          {/* Right: project cards */}
          <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2">
            {PROJECTS.map((project, i) => (
              <ProjectCard key={project.name} project={project} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}