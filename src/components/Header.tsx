"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "History", href: "#history" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const update = () => {
      const sections = document.querySelectorAll<HTMLElement>("[data-header-theme]");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom > 0) {
          setDark(section.dataset.headerTheme === "dark");
        }
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-center px-6">
        <nav className="flex gap-4 md:gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={`text-sm transition-colors duration-500 hover:opacity-60 md:text-xl ${
                dark ? "text-white" : "text-foreground"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}