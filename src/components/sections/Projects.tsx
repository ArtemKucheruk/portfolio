"use client";

import { motion } from "motion/react";
import { MapPin, Link2, Users, Star, GitFork, BookMarked } from "lucide-react";

// — Replace with real data later —
const PROFILE = {
  name: "Artem Kucheruk",
  username: "ArtemKucheruk",
  bio: "Backend engineer. Building secure systems and the infrastructure behind them.",
  location: "Belgium",
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
  Lua: "#000080",
};

const PROJECTS = [
  {
    name: "portfolio",
    description: "Personal portfolio website.",
    language: "TypeScript",
    stars: 0,
    forks: 0,
  },
  {
    name: "nvim-conf",
    description: "nvim-config",
    language: "Lua",
    stars: 0,
    forks: 0,
  },
  {
    name: "AirDefenseIOT",
    description: "AirDefenceIOT",
    language: "Python",
    stars: 0,
    forks: 0,
  },
  {
    name: "detect_violation_safety",
    description: "detect_violation_safety",
    language: "Python",
    stars: 0,
    forks: 0,
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
    <motion.a
      href={`https://github.com/${PROFILE.username}/${project.name}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col gap-5 rounded-2xl border border-white/8 bg-white/4 p-9"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: "easeOut" }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
    >
      <div className="flex items-start gap-3">
        <BookMarked className="mt-0.5 size-6 shrink-0 text-white/40" />
        <span className="text-lg font-semibold text-white/90 hover:underline cursor-pointer">
          {project.name}
        </span>
      </div>

      <p className="flex-1 text-base leading-relaxed text-white/45">
        {project.description}
      </p>

      <div className="flex items-center gap-6 text-base text-white/40">
        <span className="flex items-center gap-2">
          <span
            className="size-3.5 rounded-full"
            style={{ backgroundColor: color }}
          />
          {project.language}
        </span>
        <span className="flex items-center gap-2">
          <Star className="size-4" />
          {project.stars}
        </span>
        <span className="flex items-center gap-2">
          <GitFork className="size-4" />
          {project.forks}
        </span>
      </div>
    </motion.a>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      data-header-theme="dark"
      className="min-h-svh bg-[oklch(0.11_0.008_260)] px-8 py-28"
    >
      <div className="mx-auto max-w-7xl">
        <motion.p
          className="mb-14 text-base font-medium uppercase tracking-widest text-white/40"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Work
        </motion.p>

        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          {/* Left: GitHub profile */}
          <motion.aside
            className="w-full shrink-0 lg:sticky lg:top-24 lg:w-96 lg:self-start"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img
              src="/files/img/126765923.jpg"
              alt="Artem Kucheruk"
              className="mb-6 size-36 rounded-full object-cover"
            />

            <h2 className="text-3xl font-bold leading-tight text-white/90">{PROFILE.name}</h2>
            <p className="text-xl text-white/40">{PROFILE.username}</p>

            <p className="mt-5 text-lg leading-relaxed text-white/60">
              {PROFILE.bio}
            </p>

            <div className="mt-6 flex flex-col gap-3 text-lg text-white/40">
              <span className="flex items-center gap-2.5">
                <MapPin className="size-5 shrink-0" />
                {PROFILE.location}
              </span>
              <span className="flex items-center gap-2.5">
                <Link2 className="size-5 shrink-0" />
                {PROFILE.website}
              </span>
            </div>

            <div className="mt-6 flex gap-6 text-lg text-white/40">
              <span className="flex items-center gap-2">
                <Users className="size-5" />
                <strong className="text-white/80">{PROFILE.followers}</strong>&nbsp;followers
              </span>
              <span>
                <strong className="text-white/80">{PROFILE.following}</strong>&nbsp;following
              </span>
            </div>
          </motion.aside>

          {/* Right: project cards */}
          <div className="grid flex-1 grid-cols-1 gap-5 sm:grid-cols-2">
            {PROJECTS.map((project, i) => (
              <ProjectCard key={project.name} project={project} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
