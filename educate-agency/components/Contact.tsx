"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="pt-12 pb-20 md:pt-14 md:pb-28">
      <div className="page-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="panel p-9 md:p-14 text-center"
        >
          <p className="text-sm font-semibold tracking-[0.08em] uppercase text-[var(--muted)]">Start here</p>
          <h2 className="text-3xl md:text-6xl mt-3">Need a growth partner that understands education?</h2>
          <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto mt-5">
            Bring your current funnel metrics and goals. We will map out the fastest route to better enrollments and healthier acquisition costs.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-9">
            <a
              href="mailto:hello@edtect.agency"
              className="fx-button inline-flex items-center gap-2 rounded-full px-6 py-3 bg-[var(--primary)] text-[var(--primary-ink)] font-semibold hover:brightness-110 transition-all"
            >
              Book your strategy call
              <ArrowRight size={16} />
            </a>
            <a
              href="mailto:hello@edtect.agency"
              className="fx-button inline-flex items-center rounded-full px-6 py-3 border border-[var(--line)] bg-[var(--chip-bg)] text-[var(--text)] font-semibold hover:bg-[var(--secondary-hover)] transition-colors"
            >
              hello@edtect.agency
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
