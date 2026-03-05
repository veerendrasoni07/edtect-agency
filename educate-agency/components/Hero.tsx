"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const trustStats = [
  { label: "Qualified leads in 90 days", value: "2,400+" },
  { label: "Average CPL improvement", value: "-31%" },
  { label: "Courses and cohorts launched", value: "48" },
];

export default function Hero() {
  return (
    <section className="pt-10 pb-20 md:pt-12 md:pb-28">
      <div className="page-shell">
        <header className="panel px-6 py-4 md:px-8 md:py-5 flex items-center justify-between">
          <div className="text-sm font-semibold tracking-wide">Edtect Agency</div>
          <div className="flex items-center gap-3 md:gap-5">
            <nav className="hidden md:flex items-center gap-7 text-[0.95rem] text-[var(--muted)]">
              <a href="#services" className="fx-link hover:text-[var(--text)] transition-colors">Services</a>
              <a href="#work" className="fx-link hover:text-[var(--text)] transition-colors">Case Studies</a>
              <a href="#process" className="fx-link hover:text-[var(--text)] transition-colors">Process</a>
              <a href="#contact" className="fx-link hover:text-[var(--text)] transition-colors">Contact</a>
            </nav>
            <ThemeToggle />
          </div>
        </header>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 md:gap-10 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="panel grid-faint px-7 py-9 md:px-11 md:py-12"
          >
            <p className="inline-flex items-center gap-2 text-sm text-[var(--muted)] mb-5">
              <Sparkles size={15} color="var(--accent)" />
              Growth partner for online schools and coaching brands
            </p>
            <h1 className="text-4xl md:text-6xl leading-[1.02] max-w-3xl">
              Build an edtech brand people trust, enroll in, and talk about.
            </h1>
            <p className="text-lg md:text-[1.35rem] text-[var(--muted)] max-w-2xl mt-5">
              We design conversion-focused websites, paid funnels, and retention systems that turn educational expertise into predictable revenue.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="#contact"
                className="fx-button inline-flex items-center gap-2 rounded-full px-6 py-3 bg-[var(--primary)] text-[var(--primary-ink)] font-semibold hover:brightness-110 transition-all"
              >
                Book a strategy call
                <ArrowRight size={16} />
              </a>
              <a
                href="#work"
                className="fx-button inline-flex items-center gap-2 rounded-full px-6 py-3 border border-[var(--line)] text-[var(--text)] font-semibold hover:bg-[var(--secondary-hover)] transition-colors"
              >
                View recent outcomes
              </a>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="space-y-4"
          >
            <div className="panel p-7 md:p-8 soft-hover float-slow">
              <p className="text-sm text-[var(--muted)]">Campaign snapshot</p>
              <p className="text-3xl font-bold mt-2">4.3x ROAS</p>
              <p className="text-sm mt-1 text-[var(--muted)]">STEM exam prep cohort launch in 6 weeks.</p>
            </div>
            <div className="panel p-7 md:p-8 soft-hover float-mid">
              <p className="text-sm text-[var(--muted)]">What you get</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li className="flex gap-2 items-start"><CheckCircle2 size={16} color="var(--accent)" /> Positioning + messaging audit</li>
                <li className="flex gap-2 items-start"><CheckCircle2 size={16} color="var(--accent)" /> Paid acquisition creative system</li>
                <li className="flex gap-2 items-start"><CheckCircle2 size={16} color="var(--accent)" /> Funnel and retention optimization</li>
              </ul>
            </div>
          </motion.aside>
        </div>

        <div className="panel mt-7 p-6 md:p-8 grid sm:grid-cols-3 gap-4 md:gap-5">
          {trustStats.map((item) => (
            <div key={item.label} className="fx-card rounded-xl border border-[var(--line)] px-5 py-5 bg-[var(--chip-bg)]">
              <p className="text-2xl font-semibold">{item.value}</p>
              <p className="text-sm text-[var(--muted)] mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
