"use client";

import { useEffect, useRef, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export function Header() {
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y < 60 || y < lastY.current);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-center px-6">
        <NavigationMenu>
          <NavigationMenuList className="gap-4">
            <NavigationMenuItem>
              <NavigationMenuLink href="#hero" className="px-4 py-2">Home</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#projects" className="px-4 py-2">Projects</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#about" className="px-4 py-2">About</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#contact" className="px-4 py-2">Contact</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}