"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Diagnose",
    detail: "We audit your offer, funnel, and traffic data to identify the true bottlenecks.",
  },
  {
    step: "02",
    title: "Design",
    detail: "We structure your messaging, landing pages, and campaign framework around intent tiers.",
  },
  {
    step: "03",
    title: "Deploy",
    detail: "We launch in controlled phases, then optimize weekly based on conversion and CAC signals.",
  },
  {
    step: "04",
    title: "Scale",
    detail: "Once baseline efficiency is stable, we expand channels, offers, and retention loops.",
  },
];

export default function Insights() {
  return (
    <section id="process" className="py-20 md:py-28">
      <div className="page-shell px-2 md:px-3">

        <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface-soft)] px-5 py-6 md:px-8 md:py-9 lg:px-10 lg:py-10">
          
          <p className="text-sm font-semibold tracking-[0.08em] uppercase text-[var(--muted)]">
            How we work
          </p>

          <h2 className="text-3xl md:text-5xl mt-3 max-w-3xl leading-[1.08]">
            A practical, transparent process for education brands that need consistent growth.
          </h2>

          <div className="grid md:grid-cols-2 gap-5 md:gap-7 mt-11 md:mt-12">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="fx-card rounded-2xl border border-[var(--line)] bg-[var(--chip-bg)] p-6 md:p-7"
              >
                <p className="text-xs font-semibold text-[var(--primary)] tracking-[0.08em]">
                  STEP {item.step}
                </p>

                <h3 className="text-xl mt-3">{item.title}</h3>

                <p className="text-[var(--muted)] mt-3 leading-relaxed">
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
