"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function SpaceTimeWarp() {
  const [mounted, setMounted] = useState(false);
  const springConfig = { damping: 20, stiffness: 400 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  useEffect(() => {
    const isDesktop = !window.matchMedia("(pointer: coarse)").matches;
    setMounted(isDesktop);
    if (isDesktop) {
      mouseX.set(window.innerWidth / 2);
      mouseY.set(window.innerHeight / 2);
    }
  }, [mouseX, mouseY]);

  useEffect(() => {
    if (!mounted) return;

    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mounted, mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none -z-10"
      aria-hidden
    >
      {/* Dotted spacetime texture */}
      <div
        className="absolute inset-0 opacity-[0.06] dark:opacity-[0.1]"
        style={{
          backgroundImage: `radial-gradient(circle at center, rgba(20,184,166,0.9) 1.5px, transparent 1.5px)`,
          backgroundSize: "24px 24px",
        }}
      />
      {/* Gravitational well - teal warp that follows cursor */}
      <motion.div
        className="absolute w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.2] dark:opacity-[0.35] blur-3xl"
        style={{
          left: mouseX,
          top: mouseY,
          background:
            "radial-gradient(circle, rgba(20,184,166,0.6) 0%, rgba(20,184,166,0.25) 30%, transparent 55%)",
        }}
      />
      {/* Secondary emerald warp for depth */}
      <motion.div
        className="absolute w-[350px] h-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.12] dark:opacity-[0.2] blur-2xl"
        style={{
          left: mouseX,
          top: mouseY,
          background:
            "radial-gradient(circle, transparent 40%, rgba(16,185,129,0.35) 70%, transparent 100%)",
        }}
      />
    </div>
  );
}
