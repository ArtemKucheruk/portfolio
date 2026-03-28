"use client";

import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [visible, setVisible] = useState(true);
  const [dark, setDark] = useState(true); // hero is dark, so start dark
  const lastY = useRef(0);

  useEffect(() => {
    const update = () => {
      const y = window.scrollY;

      // Hide on scroll down, show on scroll up
      setVisible(y < 60 || y < lastY.current);
      lastY.current = y;

      // Detect which section is currently behind the header
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
    <header
      className={`fixed top-0 z-50 w-full transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-center px-6">
        <nav className="flex gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={`text-xl transition-colors duration-500 hover:opacity-60 ${
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