"use client";

import { motion } from "motion/react";

function AnimatedLine({
  children,
  delay,
  className,
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
}) {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <motion.span
        initial={{ color: "oklch(0.38 0 0)" }}
        animate={{ color: "oklch(0.96 0.005 80)" }}
        transition={{ duration: 1.1, delay: delay + 0.3, ease: "easeOut" }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      data-header-theme="dark"
      className="relative flex min-h-svh flex-col items-center justify-center bg-[oklch(0.11_0.008_260)] px-6"
    >
      <div className="max-w-5xl w-full">
        <div className="flex flex-col gap-2">
          <AnimatedLine
            delay={0.6}
            className="block text-[clamp(4rem,12vw,10rem)] font-bold leading-none tracking-tight"
          >
            Artem
          </AnimatedLine>
          <AnimatedLine
            delay={0.85}
            className="block text-[clamp(4rem,12vw,10rem)] font-bold leading-none tracking-tight"
          >
            Kucheruk
          </AnimatedLine>
        </div>

        <motion.p
          className="mt-12 text-[clamp(1.125rem,2.5vw,1.625rem)] leading-relaxed"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.5, ease: "easeOut" }}
        >
          <motion.span
            initial={{ color: "oklch(0.32 0 0)" }}
            animate={{ color: "oklch(0.58 0.008 260)" }}
            transition={{ duration: 1.2, delay: 1.8, ease: "easeOut" }}
          >
            I build systems that run in the dark.
          </motion.span>
        </motion.p>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 1 }}
      >
        <motion.div
          className="h-12 w-px origin-top bg-[oklch(0.96_0.005_80)]"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.4 }}
        />
      </motion.div>
    </section>
  );
}