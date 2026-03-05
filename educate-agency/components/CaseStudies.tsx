"use client";

import { motion } from "framer-motion";

const studies = [
  {
    brand: "Northstar Coding Bootcamp",
    challenge: "Low lead quality from broad campaign targeting.",
    result: "62% increase in qualified demos and 29% lower cost per enrollment.",
    highlight: "B2C Tech Education",
  },
  {
    brand: "ClinEdge Healthcare Prep",
    challenge: "Strong webinars but weak conversion from replay traffic.",
    result: "2.1x checkout conversion after funnel redesign and offer sequencing.",
    highlight: "Professional Certification",
  },
  {
    brand: "Atlas English Academy",
    challenge: "High ad spend with poor retention past month one.",
    result: "41% improvement in day-30 retention via onboarding and email lifecycle.",
    highlight: "Language Learning",
  },
];

export default function CaseStudies() {
  return (
    <section id="work" className="py-16 md:py-24">
      <div className="page-shell">
        <div className="flex flex-wrap items-end justify-between gap-3 mb-9">
          <div>
            <p className="text-sm font-semibold tracking-[0.08em] uppercase text-[var(--muted)]">Case studies</p>
            <h2 className="text-3xl md:text-5xl mt-2">Recent client outcomes</h2>
          </div>
          <p className="text-[var(--muted)] text-sm">Built with clear positioning, channel discipline, and constant iteration.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {studies.map((study, index) => (
            <motion.article
              key={study.brand}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              className="panel soft-hover p-7 md:p-8 group"
            >
              <span className="inline-block rounded-full border border-[var(--line)] bg-[var(--chip-bg)] px-3 py-1 text-xs font-semibold text-[var(--muted)] transition-all duration-300 group-hover:border-[color:color-mix(in_srgb,var(--primary)_45%,var(--line))] group-hover:text-[var(--text)]">
                {study.highlight}
              </span>
              <h3 className="text-xl mt-4 transition-colors duration-300 group-hover:text-[var(--primary)]">{study.brand}</h3>
              <p className="text-sm text-[var(--muted)] mt-3">Challenge: {study.challenge}</p>
              <p className="text-sm mt-3 font-semibold text-[var(--text)]">Result: {study.result}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
