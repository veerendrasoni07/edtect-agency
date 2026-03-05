"use client";

import { motion } from "framer-motion";
import { BarChart3, LayoutPanelTop, Megaphone, Repeat2 } from "lucide-react";

const services = [
  {
    title: "Enrollment Funnel Design",
    desc: "Clear messaging, landing pages, and qualification flows built for high-intent student leads.",
    icon: LayoutPanelTop,
  },
  {
    title: "Paid Acquisition",
    desc: "Meta and Google campaigns with creative testing loops tailored to education buying cycles.",
    icon: Megaphone,
  },
  {
    title: "Analytics + Attribution",
    desc: "Reliable tracking from click to checkout so budget decisions are based on true ROI.",
    icon: BarChart3,
  },
  {
    title: "Retention Systems",
    desc: "Email, community, and upsell journeys that raise LTV and improve student completion.",
    icon: Repeat2,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="page-shell">
        <div className="mb-10 md:mb-12">
          <p className="text-sm font-semibold tracking-[0.08em] uppercase text-[var(--muted)]">Services</p>
          <h2 className="text-3xl md:text-5xl mt-2 max-w-3xl">Everything required to turn traffic into enrolled, retained learners.</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="panel soft-hover p-7 md:p-9 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--surface-soft)] border border-[var(--line)] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                  <Icon size={20} color="var(--primary)" />
                </div>
                <h3 className="text-xl md:text-2xl mt-5">{service.title}</h3>
                <p className="text-[var(--muted)] mt-3 max-w-lg">{service.desc}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
