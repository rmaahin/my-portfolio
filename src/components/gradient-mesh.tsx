"use client";

import { motion } from "framer-motion";

export function GradientMesh() {
  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none -z-10"
      aria-hidden
    >
      <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-teal-500/10 via-transparent to-emerald-500/10 dark:from-teal-600/15 dark:to-emerald-600/15" />
      <div className="absolute top-1/2 -right-1/2 w-full h-full bg-gradient-to-bl from-emerald-500/5 via-transparent to-teal-500/5 dark:from-emerald-600/10 dark:to-teal-600/10" />
      <motion.div
        className="absolute top-1/3 left-1/2 w-96 h-96 rounded-full bg-teal-500/10 dark:bg-teal-600/15 blur-3xl"
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -20, 30, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
