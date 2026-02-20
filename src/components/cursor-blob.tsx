"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function CursorBlob() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  const springConfig = { damping: 15, stiffness: 200 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);
  const scale = useSpring(1, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 24);
      cursorY.set(e.clientY - 24);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      const interactive = target?.closest?.(
        "a, button, [role='button'], input, textarea, .cursor-pointer"
      );
      setIsHovering(!!interactive);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY, isVisible]);

  useEffect(() => {
    scale.set(isHovering ? 1.5 : 1);
  }, [isHovering, scale]);

  if (isTouch) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          scale,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div className="w-full h-full rounded-full bg-teal-500/40 dark:bg-teal-400/30 blur-xl" />
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] rounded-full border-2 border-teal-500/60 dark:border-teal-400/50"
        style={{
          x: cursorX,
          y: cursorY,
          scale,
          opacity: isVisible ? 0.8 : 0,
        }}
      />
    </>
  );
}
