"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Analytics Dashboard",
    description:
      "Enterprise SaaS metrics engine ensuring real-time streaming data flow, scalable architecture, and premium user experience.",
    tags: ["Next.js", "Gen AI", "Tailwind CSS"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    borderGlow:
      "hover:border-purple-400 hover:shadow-[0_0_25px_rgba(168,85,247,0.35)]",
  },
  {
    title: "Microservices E-Commerce API",
    description:
      "High-throughput order execution engine equipped with distributed Kafka event queues, BullMQ retry jobs, and PostgreSQL.",
    tags: ["Node.js", "Kafka", "PostgreSQL"],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    borderGlow:
      "hover:border-blue-400 hover:shadow-[0_0_25px_rgba(59,130,246,0.35)]",
  },
  {
    title: "Real-time Task Manager",
    description:
      "Collaborative project management dashboard built with persistent WebSockets, MongoDB sharding, and Docker deployments.",
    tags: ["React", "MongoDB", "AWS"],
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    borderGlow:
      "hover:border-pink-400 hover:shadow-[0_0_25px_rgba(236,72,153,0.35)]",
  },
];

export default function Works() {
  return (
    <section id="works" className="py-24 relative px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 inline-block mb-4">
            Featured Works
          </h2>
          <p className="text-gray-400 mx-auto text-base sm:text-lg max-w-2xl">
            A selection of recent projects built with modern technologies
            focusing on performance and UX.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className={`group flex flex-col justify-between rounded-3xl overflow-hidden bg-[#0e0a22]/80 border border-purple-500/15 backdrop-blur-sm transition-all duration-300 ${proj.borderGlow}`}
            >
              <div className="relative overflow-hidden aspect-[16/10] bg-black/40">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-5">
                    {proj.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-3 border-t border-purple-500/10">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono bg-purple-950/40 text-purple-300 px-2.5 py-1 rounded-md border border-purple-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
