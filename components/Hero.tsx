"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const useTypewriter = (
  words: string[],
  typingSpeed: number = 130,
  deletingSpeed: number = 75,
  pauseTime: number = 1800,
) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const timeout = setTimeout(
      () => {
        if (isDeleting) {
          setText(currentWord.substring(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        } else {
          setText(currentWord.substring(0, text.length + 1));
          if (text.length === currentWord.length) {
            setTimeout(() => setIsDeleting(true), pauseTime);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed,
    );
    return () => clearTimeout(timeout);
  }, [
    text,
    isDeleting,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  return text;
};

const techBadges = [
  {
    name: "JavaScript",
    tag: "JS",
    color: "text-amber-400 border-amber-500/30 bg-amber-500/10",
    bgColor: "bg-amber-500",
  },
  {
    name: "TypeScript",
    tag: "TS",
    color: "text-blue-400 border-blue-500/30 bg-blue-500/10",
    bgColor: "bg-blue-500",
  },
  {
    name: "React",
    tag: "R",
    color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
    bgColor: "bg-cyan-500",
  },
  {
    name: "Next.js",
    tag: "N",
    color: "text-gray-200 border-gray-400/30 bg-gray-500/10",
    bgColor: "bg-gray-500",
  },
  {
    name: "Tailwind CSS",
    tag: "TW",
    color: "text-sky-400 border-sky-500/30 bg-sky-500/10",
    bgColor: "bg-sky-500",
  },
  {
    name: "Node.js",
    tag: "No",
    color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
    bgColor: "bg-emerald-500",
  },
  {
    name: "Express.js",
    tag: "EX",
    color: "text-gray-300 border-gray-500/30 bg-gray-500/10",
    bgColor: "bg-gray-500",
  },
  {
    name: "MongoDB",
    tag: "DB",
    color: "text-green-400 border-green-500/30 bg-green-500/10",
    bgColor: "bg-green-500",
  },
  {
    name: "Redis",
    tag: "Rd",
    color: "text-red-400 border-red-500/30 bg-red-500/10",
    bgColor: "bg-red-500",
  },
  {
    name: "Aggregation",
    tag: "Ag",
    color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
    bgColor: "bg-cyan-500",
  },
  {
    name: "RabbitMQ",
    tag: "Rq",
    color: "text-amber-400 border-amber-500/30 bg-amber-500/10",
    bgColor: "bg-amber-500",
  },

  {
    name: "Kafka",
    tag: "Kf",
    color: "text-slate-300 border-slate-500/30 bg-slate-500/10",
    bgColor: "bg-slate-500",
  },
  {
    name: "BullMQ",
    tag: "Bq",
    color: "text-green-400 border-green-500/30 bg-green-500/10",
    bgColor: "bg-green-500",
  },
  {
    name: "Microservices",
    tag: "Ms",
    color: "text-blue-400 border-blue-500/30 bg-blue-500/10",
    bgColor: "bg-blue-500",
  },
  {
    name: "API Gateway",
    tag: "AG",
    color: "text-purple-400 border-purple-500/30 bg-purple-500/10",
    bgColor: "bg-purple-500",
  },
  {
    name: "Load Balancing",
    tag: "LB",
    color: "text-pink-400 border-pink-500/30 bg-pink-500/10",
    bgColor: "bg-pink-500",
  },
  {
    name: "Docker",
    tag: "Dk",
    color: "text-blue-400 border-blue-500/30 bg-blue-500/10",
    bgColor: "bg-blue-500",
  },
  {
    name: "AWS",
    tag: "AWS",
    color: "text-amber-400 border-amber-500/30 bg-amber-500/10",
    bgColor: "bg-amber-500",
  },
  {
    name: "Git",
    tag: "Git",
    color: "text-green-400 border-green-500/30 bg-green-500/10",
    bgColor: "bg-green-500",
  },
  {
    name: "Jira",
    tag: "Jira",
    color: "text-blue-400 border-blue-500/30 bg-blue-500/10",
    bgColor: "bg-blue-500",
  },
];

export default function Hero() {
  const typingText = useTypewriter([
    "MERN Developer",
    "Full Stack Engineer",
    "Creative Coder",
  ]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:36px_36px] -z-10" />
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Left Column: order-2 on mobile, order-1 on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="order-2 lg:order-1 lg:col-span-8 space-y-6 z-10"
        >
          {/* Status Capsule */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/30 bg-purple-950/30 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono text-purple-200 tracking-wide">
              Open to new opportunities
            </span>
          </div>

          <div className="space-y-3">
            <p className="text-purple-400 font-medium tracking-wide uppercase text-xs sm:text-sm">
              Welcome to my universe
            </p>
            <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-tight">
              Hi, I'm{" "}
              <span className="whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-purple-400 to-indigo-300">
                Nausheen Siddiqui
              </span>
            </h1>

            <p className="font-mono text-xl sm:text-2xl text-purple-300/90 flex items-center gap-2">
              <span className="text-purple-400 font-bold">{">"}</span>
              <span>{typingText}</span>
              <span className="animate-pulse text-purple-400 font-light">
                |
              </span>
            </p>

            <p className="text-gray-400 text-sm sm:text-base max-w-xl leading-relaxed pt-1">
              Building fast, scalable, and responsive web applications with
              modern frontends and robust cloud architecture. Clean code, sharp
              interfaces, and backends that hold up under load.
            </p>
          </div>

          {/* Stats Counters */}
          <div className="grid grid-cols-2 sm:grid-cols-4 py-4 border-y border-purple-500/15">
            <div className="px-3 sm:px-4 py-1 border-r border-purple-500/15">
              <div className="text-2xl sm:text-3xl font-bold text-white">
                10+
              </div>
              <div className="text-xs text-gray-400">Projects built</div>
            </div>
            <div className="px-3 sm:px-4 py-1 sm:border-r border-purple-500/15">
              <div className="text-2xl sm:text-3xl font-bold text-white">
                2.5+
              </div>
              <div className="text-xs text-gray-400">Years experience</div>
            </div>
            <div className="px-3 sm:px-4 py-1 border-r border-purple-500/15">
              <div className="text-2xl sm:text-3xl font-bold text-white">
                15+
              </div>
              <div className="text-xs text-gray-400">Technologies</div>
            </div>
            <div className="px-3 sm:px-4 py-1">
              <div className="text-2xl sm:text-3xl font-bold text-white">
                100%
              </div>
              <div className="text-xs text-gray-400">Commitment</div>
            </div>
          </div>

          {/* Core Technologies Badges */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-gray-400">
                Core technologies
              </span>
              <span className="text-purple-400 text-xs">↓</span>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {techBadges.map((tech) => (
                <div
                  key={tech.name}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono border ${tech.color} hover:scale-105 transition-transform`}
                >
                  <span
                    className={`font-bold ${tech.bgColor} text-white px-1 py-0.5 rounded-sm text-[0.6rem]`}
                  >
                    {tech.tag}
                  </span>
                  <span className="font-bold opacity-80">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Photo Column: order-1 on mobile, order-2 on desktop */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="order-1 lg:order-2 lg:col-span-4 flex justify-center items-center relative"
        >
          <div className="relative p-2 flex items-center justify-center">
            <div className="absolute inset-0 bg-purple-600/30 blur-3xl rounded-full -z-10" />
            <div
              className="hover:border-purple-400 hover:shadow-[0_0_25px_rgba(168,85,247,0.65)] 
                relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full p-2 
                bg-gradient-to-b from-purple-500/40 via-purple-700/20 to-transparent border 
                border-purple-400/40 shadow-[0_0_40px_rgba(168,85,247,0.45)]"
            >
              <div className="w-full h-full bg-[#0b071a] rounded-full overflow-hidden">
                <Image
                  src="/images/nausheen.jpg"
                  alt="Nausheen Siddiqui"
                  className="w-full h-full rounded-full object-cover object-top border-2 border-[#0b071a]"
                  width={300}
                  height={300}
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
