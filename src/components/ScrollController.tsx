"use client";

import { useEffect, useRef } from "react";

const SECTIONS = ["hero", "about", "skills", "projects", "contact"];
const DURATION = 1100;
const TOUCH_THRESHOLD = 40;
const BOUNDARY_TOLERANCE = 8; // px — how close to edge before triggering next section

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function scrollToY(target: number, duration: number, onDone: () => void) {
  const start = window.scrollY;
  const diff = target - start;
  const startTime = performance.now();

  function step(now: number) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, start + diff * easeInOutCubic(progress));
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      onDone();
    }
  }

  requestAnimationFrame(step);
}

function getCurrentSectionIndex(): number {
  // The current section is the last one whose top edge has scrolled at or above the viewport top
  for (let i = SECTIONS.length - 1; i >= 0; i--) {
    const el = document.getElementById(SECTIONS[i]);
    if (!el) continue;
    if (el.getBoundingClientRect().top <= 1) return i;
  }
  return 0;
}

export function ScrollController() {
  const locked = useRef(false);

  const goTo = (index: number) => {
    const el = document.getElementById(SECTIONS[index]);
    if (!el || locked.current) return;
    const target = el.getBoundingClientRect().top + window.scrollY;
    locked.current = true;
    scrollToY(target, DURATION, () => {
      locked.current = false;
    });
  };

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (locked.current) {
        e.preventDefault();
        return;
      }

      const current = getCurrentSectionIndex();
      const el = document.getElementById(SECTIONS[current]);
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const sectionHeight = el.offsetHeight;
      const vh = window.innerHeight;
      const goingDown = e.deltaY > 0;

      // For sections taller than the viewport, allow natural scroll
      // until the user reaches the top or bottom boundary
      if (sectionHeight > vh) {
        const atTop = rect.top >= -BOUNDARY_TOLERANCE;
        const atBottom = rect.bottom <= vh + BOUNDARY_TOLERANCE;
        if (goingDown && !atBottom) return;
        if (!goingDown && !atTop) return;
      }

      e.preventDefault();
      const dir = goingDown ? 1 : -1;
      const next = Math.max(0, Math.min(SECTIONS.length - 1, current + dir));
      if (next !== current) goTo(next);
    };

    let touchStartY = 0;
    const onTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    const onTouchEnd = (e: TouchEvent) => {
      if (locked.current) return;
      const delta = touchStartY - e.changedTouches[0].clientY;
      if (Math.abs(delta) < TOUCH_THRESHOLD) return;
      const current = getCurrentSectionIndex();
      const el = document.getElementById(SECTIONS[current]);
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const sectionHeight = el.offsetHeight;
      const vh = window.innerHeight;
      const goingDown = delta > 0;

      if (sectionHeight > vh) {
        const atTop = rect.top >= -BOUNDARY_TOLERANCE;
        const atBottom = rect.bottom <= vh + BOUNDARY_TOLERANCE;
        if (goingDown && !atBottom) return;
        if (!goingDown && !atTop) return;
      }

      const dir = goingDown ? 1 : -1;
      const next = Math.max(0, Math.min(SECTIONS.length - 1, current + dir));
      if (next !== current) goTo(next);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return null;
}