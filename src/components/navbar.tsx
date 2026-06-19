"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X, Home, FolderKanban, Briefcase, BookOpen, FileText, User } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/projects", label: "Projects", icon: FolderKanban },
  { href: "/experience", label: "Experience", icon: Briefcase },
  { href: "/publications", label: "Publications", icon: BookOpen },
  { href: "/resume", label: "Resume", icon: FileText },
  { href: "/about", label: "About", icon: User },
];

export function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <nav
        className={cn(
          "mx-2 sm:mx-4 mt-4 flex items-center justify-between rounded-2xl px-3 sm:px-6 py-2 sm:py-3",
          "bg-zinc-200/70 dark:bg-zinc-900/70 backdrop-blur-xl border border-white/20 dark:border-zinc-700/50 bg-zinc-200/80 dark:bg-zinc-800/60",
          "shadow-lg shadow-black/5 dark:shadow-black/20"
        )}
      >
        <div className="hidden md:block w-20" />

        <div className="hidden md:flex items-center justify-center gap-1 flex-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors rounded-lg",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon className="w-4 h-4 shrink-0" />
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="navbar-active"
                    className="absolute inset-0 -z-10 rounded-lg bg-teal-500/10 dark:bg-teal-500/20"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2 ml-auto md:ml-0 md:w-20 md:justify-end">
          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/50 dark:hover:bg-zinc-800/50 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
          >
            <div
              className={cn(
                "mx-4 mt-2 rounded-2xl py-3",
                "bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl border border-white/20 dark:border-zinc-700/50"
              )}
            >
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center gap-2 px-6 py-3 text-sm font-medium",
                      pathname === item.href ? "text-foreground" : "text-muted-foreground"
                    )}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
