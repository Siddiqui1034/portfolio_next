"use client";
import { ProjectCard, ProjectData } from "./ProjectCard";

const projects: ProjectData[] = [
  {
    id: "1",
    title: "Inventory management",
    description:
      "TechSunset Inventory is inventory management software used to manage products, stock, orders, suppliers, warehouses, and fulfillment in one place.",
    url: "inventory.techsunset.com",
    previewImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    tags: ["React", "Node.js", "MongoDB", "Tailwind"],
    liveUrl: "#",
    isLive: true,
  },
  {
    id: "2",
    title: "Project management",
    description:
      "TechSunset Project is project and task management software used to manage projects, tasks, deadlines, milestones, team workload, and progress in one place.",
    url: "project.techsunset.com",
    previewImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "#",
    isLive: true,
  },
  {
    id: "3",
    title: "FileMoon Cloud Drive",
    description:
      "A secure full-stack cloud storage and file-sharing platform featuring time-expiring downloads, encrypted storage, and real-time email delivery.",
    url: "filemoon.dev",
    previewImage:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80",
    tags: ["React", "Express", "MongoDB", "Tailwind"],
    liveUrl: "#",
    isLive: true,
  },
  {
    id: "4",
    title: "DevPulse Analytics",
    description:
      "High-throughput real-time telemetry dashboard designed for microservices monitoring, error logging, and latency tracing across distributed systems.",
    url: "pulse.techsunset.com",
    previewImage:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80",
    tags: ["TypeScript", "Docker", "Redis", "Next.js"],
    liveUrl: "#",
    isLive: true,
  },
];
import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { Projects } from "./Projects";
import Image from "next/image";

interface ProjectDetails {
  title: string;
  url: string;
  displayUrl: string;
  description: string;
  featured: boolean;
  isLive: boolean;
  tags: string[];
  previewImage: string;
}

const currentProject: ProjectDetails = {
  title: "crm-techsunset.com",
  url: "https://crm.techsunset.com/",
  displayUrl: "crm.techsunset.com",
  description:
    "CRM (Customer Relationship Management) is a software used to manage customers, leads, sales, and customer interactions in one place.",
  featured: true,
  isLive: true,
  tags: ["Next.js", "Node.js", "MongoDB", "Redis"],
  // Replace with your full long-scroll screenshot of the CRM or portfolio project
  previewImage: "/images/crm.techsunset.com.png",
};

export default function ProjectsPreview() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:36px_36px] -z-10" />
      {/* Ambient Purple Backdrop Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[350px] bg-purple-700/15 blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Container aligned flush with max-w-7xl */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 ">
        {/* ================= HEADER SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-tight">
            Projects I've{" "}
            <span className="text-purple-400 drop-shadow-[0_0_25px_rgba(168,85,247,0.6)]">
              shipped
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

        {/* ================= MASTER PREVIEW CARD ================= */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl p-[1px] bg-gradient-to-b from-purple-500/40 via-purple-500/15 to-transparent shadow-[0_0_40px_rgba(168,85,247,0.15)] group"
        >
          {/* Subtle Outer Neon Halo */}
          <div className="absolute inset-0 bg-purple-600/10 blur-2xl rounded-3xl -z-10 pointer-events-none" />

          {/* Inner Card Shell */}
          <div className="rounded-[23px] bg-[#090615]/95 p-6 sm:p-8 lg:p-10 backdrop-blur-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* ================= LEFT BROWSER MOCKUP (7 Cols) ================= */}
              <div className="lg:col-span-7">
                <div className="relative rounded-2xl overflow-hidden border border-purple-500/25 bg-[#030109] shadow-2xl group/mockup">
                  {/* Browser Window Header Bar */}
                  <div className="flex items-center gap-3 px-4 py-3 bg-[#0e0922] border-b border-purple-500/20">
                    {/* Three Window Dots */}
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                    </div>

                    {/* URL Pill Input Bar */}
                    <div className="flex-1 max-w-xs mx-auto text-center px-4 py-1 rounded-lg bg-[#05020d] border border-purple-500/15 text-[11px] font-mono text-gray-400 select-none truncate">
                      {currentProject.displayUrl}
                    </div>
                  </div>

                  {/* Browser Viewport with Hover-to-Scroll Effect */}
                  <div className="relative h-[280px] sm:h-[360px] md:h-[400px] overflow-hidden bg-white/5">
                    <Image
                      src={currentProject.previewImage}
                      alt={currentProject.title}
                      className="w-full object-cover object-top transition-transform duration-[6000ms] ease-in-out group-hover/mockup:-translate-y-[calc(100%-400px)]"
                      width={400}
                      height={400}
                      loading="eager"
                    />

                    {/* Bottom Pill: "Hover to scroll preview" */}
                    <div className="absolute bottom-4 left-4 z-20 pointer-events-none">
                      <span className="px-3.5 py-1.5 rounded-full text-xs font-mono text-purple-200 bg-[#0c081e]/85 border border-purple-400/30 backdrop-blur-md shadow-lg shadow-black/60">
                        Hover to scroll preview
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ================= RIGHT INFO & METRICS (5 Cols) ================= */}
              <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
                {/* Status Badges & External Link Arrow */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    {currentProject.featured && (
                      <span className="px-3 py-1 rounded-full text-xs font-medium border border-purple-500/30 bg-purple-950/40 text-purple-300">
                        Featured
                      </span>
                    )}

                    {currentProject.isLive && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-emerald-500/30 bg-emerald-950/30 text-emerald-300">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                        </span>
                        Live
                      </span>
                    )}
                  </div>

                  {/* Top-Right Arrow Link */}
                  <a
                    href={currentProject.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 text-gray-500 hover:text-purple-300 transition-colors"
                    aria-label="Open project in new tab"
                  >
                    <ArrowUpRight size={22} />
                  </a>
                </div>

                {/* Project Title */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white hover:text-purple-300 transition-colors">
                    <a
                      href={currentProject.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {currentProject.title}
                    </a>
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed mt-3">
                    {currentProject.description}
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {currentProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg text-xs font-mono font-medium border border-purple-500/25 bg-purple-950/20 text-purple-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Live Demo Glowing CTA Button */}
                <div className="pt-2">
                  <a
                    href={currentProject.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 text-white font-semibold text-sm tracking-wide shadow-[0_0_25px_rgba(147,51,234,0.55)] border border-violet-400/30 hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(147,51,234,0.8)] active:scale-[0.98] transition-all cursor-pointer"
                  >
                    <span>Live demo</span>
                    <ExternalLink size={15} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <Projects />
      </div>
    </section>
  );
}
