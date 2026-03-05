"use client";

import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const toggleTheme = () => {
    const current =
      (document.documentElement.getAttribute("data-theme") as "light" | "dark") || "light";
    const next: "light" | "dark" = current === "dark" ? "light" : "dark";
    const root = document.documentElement;
    root.setAttribute("data-theme", next);
    root.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--chip-bg)] text-[var(--text)] transition-all hover:-translate-y-0.5 hover:brightness-105"
    >
      <span className="theme-icon theme-icon-sun" aria-hidden="true">
        <Sun size={17} />
      </span>
      <span className="theme-icon theme-icon-moon" aria-hidden="true">
        <Moon size={17} />
      </span>
    </button>
  );
}
