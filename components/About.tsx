"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Briefcase,
  GraduationCap,
  Rocket,
  ArrowUpRight,
  MapPin,
  Laptop,
  Building,
} from "lucide-react";

const timelineData = [
  {
    year: "2023",
    title: "Completed Senior Secondary",
    description:
      "Built strong foundations in mathematics, logic, and early computer programming principles.",
    icon: GraduationCap,
  },
  {
    year: "2024",
    title: "MERN Stack Mastery",
    description:
      "Built full-stack React and Express architectures, implementing REST APIs and state lifecycles.",
    icon: Code2,
  },
  {
    year: "2025",
    title: "Enterprise Solutions & Queues",
    description:
      "Implemented asynchronous messaging with RabbitMQ/BullMQ, Redis caching layers, and Docker workflows.",
    icon: Briefcase,
  },
  {
    year: "2026 – Present",
    title: "Full Stack Developer",
    description:
      "Shipping high-performance web products, microservices, and reactive user interfaces.",
    icon: Rocket,
    isActive: true,
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          suppressHydrationWarning
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-tight">
            Turning curiosity into{" "}
            <span className="text-purple-400 drop-shadow-[0_0_25px_rgba(168,85,247,0.6)]">
              real-world code
            </span>
          </h2>

          {/* Glowing Line Under Header */}
          <div className="relative mt-5 mb-6 w-full max-w-xs h-[2px]">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/80 via-violet-400 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-violet-400 to-transparent blur-[3px]" />
          </div>

          <p className="text-gray-400 text-sm sm:text-base max-w-2xl leading-relaxed">
            Real products built around scalable architecture, clean interfaces
            and practical problem solving.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Glowing Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative group"
          >
            <div className="absolute inset-0 bg-purple-600/20 blur-2xl rounded-3xl -z-10" />
            <div className="relative rounded-3xl p-[1px] bg-gradient-to-b from-purple-400/50 via-purple-500/20 to-purple-900/10 shadow-[0_0_35px_rgba(168,85,247,0.25)]">
              <div className="absolute top-0 left-12 right-12 h-[2px] bg-gradient-to-r from-transparent via-purple-300 to-transparent shadow-[0_0_15px_rgba(192,132,252,1)] z-10 pointer-events-none" />

              <div className="relative rounded-[23px] bg-[#0c081e]/95 p-6 sm:p-8 backdrop-blur-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-purple-950/40 border border-purple-500/30 flex items-center justify-center text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                    <Code2 size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      Nausheen Siddiqui
                    </h3>
                    <p className="text-sm font-medium text-purple-400">
                      Full Stack Developer
                    </p>
                  </div>
                </div>

                <div className="space-y-4 text-gray-300/90 text-sm leading-relaxed mb-6">
                  <p>
                    I focus on hands-on software engineering, writing clean and
                    modular code across the entire stack.
                  </p>
                  <p>
                    Specialized in developing responsive interfaces, resilient
                    backend microservices, and production-ready applications.
                  </p>
                </div>

                {/* 4-Box Matrix with Cross Dividers */}
                <div className="border-y border-purple-500/15 divide-y divide-purple-500/15 mb-8">
                  <div className="grid grid-cols-2 divide-x divide-purple-500/15 py-4">
                    <div className="space-y-1 pr-4">
                      <div className="flex items-center gap-1.5 text-xs text-purple-400 font-medium">
                        <Briefcase size={14} />
                        <span>Experience</span>
                      </div>
                      <p className="text-white font-semibold text-sm">
                        2.5+ years
                      </p>
                    </div>
                    <div className="space-y-1 pl-4">
                      <div className="flex items-center gap-1.5 text-xs text-purple-400 font-medium">
                        <Building size={14} />
                        <span>Specialization</span>
                      </div>
                      <p className="text-white font-semibold text-sm truncate">
                        MERN & Cloud
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 divide-x divide-purple-500/15 py-4">
                    <div className="space-y-1 pr-4">
                      <div className="flex items-center gap-1.5 text-xs text-purple-400 font-medium">
                        <Laptop size={14} />
                        <span>Work mode</span>
                      </div>
                      <p className="text-white font-semibold text-sm">
                        Remote / Hybrid
                      </p>
                    </div>
                    <div className="space-y-1 pl-4">
                      <div className="flex items-center gap-1.5 text-xs text-purple-400 font-medium">
                        <MapPin size={14} />
                        <span>Location</span>
                      </div>
                      <p className="text-white font-semibold text-sm">
                        New Delhi, India
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 text-white font-semibold text-sm shadow-[0_0_20px_rgba(147,51,234,0.45)] border border-violet-400/30 hover:scale-[1.02] transition-all"
                >
                  <span>Let's work together</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Stepper Flow */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 pt-2 lg:pt-0"
          >
            <div className="mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                From learning to building
              </h2>
              <p className="text-purple-300/80 text-sm mt-1">
                My journey so far
              </p>
            </div>

            <div className="relative pl-6 sm:pl-10 space-y-6">
              <div className="absolute left-[19px] sm:left-[27px] top-4 bottom-8 w-[2px] bg-gradient-to-b from-purple-500/80 via-purple-500/40 to-purple-500/80 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />

              {timelineData.map((item, idx) => {
                const Icon = item.icon;
                const isCurrent = item.isActive;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.12, duration: 0.5 }}
                    className="relative flex items-start group"
                  >
                    <div
                      className={`absolute -left-[32px] sm:-left-[44px] top-1.5 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border transition-all duration-300 z-10 ${
                        isCurrent
                          ? "bg-purple-900 border-purple-400 text-purple-200 shadow-[0_0_20px_rgba(168,85,247,0.9)] scale-110"
                          : "bg-[#0c081e] border-purple-500/30 text-purple-400 group-hover:border-purple-400 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                      }`}
                    >
                      {isCurrent && (
                        <span className="absolute inset-0 rounded-full border border-purple-400 animate-ping opacity-60" />
                      )}
                      <Icon size={isCurrent ? 20 : 18} />
                    </div>

                    <div className="w-full ml-4 p-5 sm:p-6 rounded-2xl bg-[#0b071a]/80 border border-purple-500/15 group-hover:border-purple-500/35 transition-all duration-300 backdrop-blur-md">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                          {item.title}
                        </h4>
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono border border-purple-500/30 bg-purple-950/40 text-purple-300 font-medium">
                          {item.year}
                        </span>
                      </div>
                      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
