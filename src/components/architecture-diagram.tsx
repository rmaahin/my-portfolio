"use client";

import { motion } from "framer-motion";

export function ArchitectureDiagramPlaceholder() {
  return (
    <motion.div
      className="rounded-lg border border-dashed border-zinc-400 dark:border-zinc-600 p-8 bg-zinc-100/50 dark:bg-zinc-800/30"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center justify-center gap-4 text-muted-foreground">
        <svg
          className="w-16 h-16"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
          />
        </svg>
        <p className="text-sm font-mono">[Architecture diagram placeholder]</p>
        <p className="text-xs">Add your system diagram or flowchart here</p>
      </div>
    </motion.div>
  );
}
