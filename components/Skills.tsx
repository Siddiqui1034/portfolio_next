"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Layers,
  Server,
  Database,
  GitBranch,
  Cloud,
} from "lucide-react";

type Category = "All" | "Frontend" | "Backend" | "Infrastructure";

interface SkillCard {
  id: string;
  category: "Frontend" | "Backend" | "Infrastructure" | "Languages";
  title: string;
  description: string;
  icon: any;
  techs: { name: string; tag: string; tagColor: string }[];
}

const filterTabs: Category[] = ["All", "Frontend", "Backend", "Infrastructure"];

const skillCards: SkillCard[] = [
  {
    id: "languages",
    category: "Languages",
    title: "Languages",
    description: "Typed, maintainable code across the stack.",
    icon: Code2,
    techs: [
      {
        name: "JavaScript",
        tag: "JS",
        tagColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
      },
      {
        name: "TypeScript",
        tag: "TS",
        tagColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
      },
    ],
  },
  {
    id: "frontend",
    category: "Frontend",
    title: "Frontend",
    description: "Fast, accessible, responsive interfaces.",
    icon: Layers,
    techs: [
      {
        name: "React",
        tag: "Re",
        tagColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
      },
      {
        name: "Next.js",
        tag: "N",
        tagColor: "bg-gray-500/20 text-gray-200 border-gray-400/30",
      },
      {
        name: "Tailwind CSS",
        tag: "TW",
        tagColor: "bg-sky-500/20 text-sky-300 border-sky-500/30",
      },
    ],
  },
  {
    id: "backend",
    category: "Backend",
    title: "Backend",
    description: "Secure APIs and reliable services.",
    icon: Server,
    techs: [
      {
        name: "Node.js",
        tag: "No",
        tagColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
      },
      {
        name: "Express.js",
        tag: "EX",
        tagColor: "bg-slate-500/20 text-slate-300 border-slate-400/30",
      },
    ],
  },
  {
    id: "databases",
    category: "Backend",
    title: "Databases",
    description: "Data modelling, caching and performance.",
    icon: Database,
    techs: [
      {
        name: "MongoDB",
        tag: "DB",
        tagColor: "bg-green-500/20 text-green-300 border-green-500/30",
      },
      {
        name: "Redis",
        tag: "Rd",
        tagColor: "bg-red-500/20 text-red-300 border-red-500/30",
      },
    ],
  },
  {
    id: "queues",
    category: "Backend",
    title: "Messaging & Queues",
    description: "Async workflows and event-driven design.",
    icon: GitBranch,
    techs: [
      {
        name: "RabbitMQ",
        tag: "MQ",
        tagColor: "bg-orange-500/20 text-orange-300 border-orange-500/30",
      },
      {
        name: "Apache Kafka",
        tag: "Kf",
        tagColor: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
      },
      {
        name: "BullMQ",
        tag: "BQ",
        tagColor: "bg-pink-500/20 text-pink-300 border-pink-500/30",
      },
    ],
  },
  {
    id: "infrastructure",
    category: "Infrastructure",
    title: "Cloud & DevOps",
    description: "Containerised builds and cloud delivery.",
    icon: Cloud,
    techs: [
      {
        name: "Docker",
        tag: "Dk",
        tagColor: "bg-blue-600/20 text-blue-300 border-blue-500/30",
      },
      {
        name: "AWS",
        tag: "AWS",
        tagColor: "bg-amber-600/20 text-amber-300 border-amber-500/30",
      },
      {
        name: "Git",
        tag: "Git",
        tagColor: "bg-red-600/20 text-red-300 border-red-500/30",
      },
    ],
  },
];

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState<Category>("All");

  const isCardActive = (card: SkillCard) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Frontend")
      return card.category === "Frontend" || card.id === "languages";
    if (activeFilter === "Backend")
      return card.category === "Backend" || card.id === "languages";
    if (activeFilter === "Infrastructure")
      return card.category === "Infrastructure";
    return false;
  };

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-tight">
            The stack behind{" "}
            <span className="text-purple-400 drop-shadow-[0_0_25px_rgba(168,85,247,0.6)]">
              production-ready apps
            </span>
          </h2>

          {/* Glowing Line Under Header */}
          <div className="relative mt-5 mb-6 w-full max-w-xs h-[1px]">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/80 via-violet-400 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-violet-400 to-transparent blur-[9px]" />
          </div>

          <p className="text-gray-400 text-sm sm:text-base max-w-2xl leading-relaxed">
            From interface to infrastructure: the tools I use to design, build
            and ship reliable web products.
          </p>
        </motion.div>
        {/* 
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4"
          >
            Production-
            <span className="text-purple-400 drop-shadow-[0_0_25px_rgba(168,85,247,0.55)]">
              ready apps
            </span>
          </motion.h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            From interface to infrastructure: the tools I use to design, build
            and ship reliable web products.
          </p>
        </div> */}

        {/* 4-Button Filter */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex p-1.5 rounded-full bg-[#0a0618]/90 border border-purple-500/20 backdrop-blur-md">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className={`relative px-5 sm:px-7 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "text-white shadow-[0_0_20px_rgba(168,85,247,0.7)] font-semibold"
                      : "text-gray-400 hover:text-purple-200"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterPill"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 border border-purple-300/40"
                    />
                  )}
                  <span className="relative z-10">{tab}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 6 Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCards.map((card) => {
            const active = isCardActive(card);
            const Icon = card.icon;

            return (
              <motion.div
                key={card.id}
                layout
                transition={{ duration: 0.3 }}
                className={`relative rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between ${
                  active
                    ? "bg-[#0b071a]/95 border border-purple-500/30 opacity-100 shadow-[0_0_20px_rgba(168,85,247,0.12)] hover:border-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:-translate-y-1"
                    : "bg-[#070412]/50 border border-purple-900/20 opacity-30 cursor-not-allowed pointer-events-none grayscale-[40%]"
                }`}
              >
                {active && (
                  <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-purple-400/80 to-transparent pointer-events-none" />
                )}

                <div>
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-colors flex-shrink-0 ${
                        active
                          ? "bg-purple-950/40 border-purple-500/30 text-purple-300 shadow-[0_0_12px_rgba(168,85,247,0.25)]"
                          : "bg-slate-900/30 border-gray-800 text-gray-600"
                      }`}
                    >
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3
                        className={`text-lg font-bold ${active ? "text-white" : "text-gray-500"}`}
                      >
                        {card.title}
                      </h3>
                      <p
                        className={`text-xs mt-1 leading-relaxed ${active ? "text-gray-400" : "text-gray-600"}`}
                      >
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 mt-2 border-t border-purple-500/10">
                  {card.techs.map((tech) => (
                    <div
                      key={tech.name}
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-mono border ${
                        active
                          ? "bg-[#110b26] border-purple-500/25 text-gray-200"
                          : "bg-transparent border-gray-800 text-gray-600"
                      }`}
                    >
                      <span
                        className={`text-[10px] font-bold px-1 py-0.5 rounded border ${tech.tagColor}`}
                      >
                        {tech.tag}
                      </span>
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Glowing Line Indicator */}
        <div className="mt-20 flex items-center justify-center w-full relative">
          <div className="relative flex-1 h-[2px]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500 to-purple-400/90" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500 to-purple-400/90 blur-[3px]" />
          </div>
          <div className="relative px-5 py-1.5 mx-3 rounded-full bg-[#0b071a] border border-purple-500/40 shadow-[0_0_20px_rgba(168,85,247,0.3)] z-10 flex items-center gap-1.5 text-xs font-mono">
            <span className="font-bold text-purple-300 drop-shadow-[0_0_8px_rgba(192,132,252,0.8)]">
              15
            </span>
            <span className="text-gray-400">
              technologies across 6 disciplines
            </span>
          </div>
          <div className="relative flex-1 h-[2px]">
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-purple-500 to-purple-400/90" />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-purple-500 to-purple-400/90 blur-[3px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
