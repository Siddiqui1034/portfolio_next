"use client";
import React from "react";
import { ProjectCard, ProjectData } from "./ProjectCard";

const projects: ProjectData[] = [
  {
    id: "1",
    title: "Inventory management",
    description:
      "TechSunset Inventory is inventory management software used to manage products, stock, orders, suppliers, warehouses, and fulfillment in one place.",
    url: "inventory.techsunset.com",
    previewImage: "/images/inventory.techsunset.com.png",
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
    previewImage: "/images/project.techsunset.com.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "#",
    isLive: true,
  },
  {
    id: "3",
    title: "Bookshelf",
    description:
      "A secure full-stack cloud storage and file-sharing platform featuring time-expiring downloads, encrypted storage, and real-time email delivery.",
    url: "filemoon.dev",
    previewImage: "/images/books.techsunset.com.png",
    tags: ["React", "Express", "MongoDB", "Tailwind"],
    liveUrl: "#",
    isLive: true,
  },
  {
    id: "4",
    title: "Technical school",
    description:
      "High-throughput real-time telemetry dashboard designed for microservices monitoring, error logging, and latency tracing across distributed systems.",
    url: "pulse.techsunset.com",
    previewImage: "/images/tscampus.com.png",
    tags: ["TypeScript", "Docker", "Redis", "Next.js"],
    liveUrl: "#",
    isLive: true,
  },
  {
    id: "5",
    title: "Human Resource Management",
    description:
      "High-throughput real-time telemetry dashboard designed for microservices monitoring, error logging, and latency tracing across distributed systems.",
    url: "pulse.techsunset.com",
    previewImage: "/images/hr.techsunset.com.png",
    tags: ["TypeScript", "Docker", "Redis", "Next.js"],
    liveUrl: "#",
    isLive: true,
  },
  {
    id: "6",
    title: "Customer Relationship Management",
    description:
      "High-throughput real-time telemetry dashboard designed for microservices monitoring, error logging, and latency tracing across distributed systems.",
    url: "pulse.techsunset.com",
    previewImage: "/images/crm.techsunset.com.png",
    tags: ["TypeScript", "Docker", "Redis", "Next.js"],
    liveUrl: "#",
    isLive: true,
  },
];

export const Projects: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto mt-8 ">
      {/* 2-column Grid matching reference */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};
