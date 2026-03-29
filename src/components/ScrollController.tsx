"use client";

import { useEffect, useRef } from "react";

const SECTIONS = ["hero", "skills", "projects", "about", "contact"];
const DURATION = 1100; // ms — tune this to taste
const TOUCH_THRESHOLD = 40; // px swipe needed to trigger

// Cubic ease-in-out — slow start, fast middle, slow end
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

function getNearestSectionIndex(): number {
  let nearest = 0;
  let minDist = Infinity;
  SECTIONS.forEach((id, i) => {
    const el = document.getElementById(id);
    if (!el) return;
    const dist = Math.abs(el.getBoundingClientRect().top);
    if (dist < minDist) {
      minDist = dist;
      nearest = i;
    }
  });
  return nearest;
}

export function ScrollController() {
  const locked = useRef(false);

  const goTo = (index: number) => {
    const id = SECTIONS[index];
    const el = document.getElementById(id);
    if (!el || locked.current) return;
    const target = el.getBoundingClientRect().top + window.scrollY;
    locked.current = true;
    scrollToY(target, DURATION, () => {
      locked.current = false;
    });
  };

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (locked.current) return;
      const current = getNearestSectionIndex();
      const dir = e.deltaY > 0 ? 1 : -1;
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
      const current = getNearestSectionIndex();
      const dir = delta > 0 ? 1 : -1;
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
