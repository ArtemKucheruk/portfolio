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
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const update = () => {
      const sections = document.querySelectorAll<HTMLElement>("section[id]");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 80 && rect.bottom > 80) {
          setActiveSection(section.id);
          setDark(
            (section as HTMLElement & { dataset: DOMStringMap }).dataset.headerTheme === "dark"
          );
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
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <a
                key={href}
                href={href}
                className={`relative text-sm transition-all duration-300 md:text-xl ${
                  dark ? "text-white" : "text-foreground"
                } ${isActive ? "opacity-100" : "opacity-40 hover:opacity-70"}`}
              >
                {label}
                {isActive && (
                  <span
                    className={`absolute -bottom-1 left-0 h-px w-full ${
                      dark ? "bg-white" : "bg-foreground"
                    }`}
                  />
                )}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}