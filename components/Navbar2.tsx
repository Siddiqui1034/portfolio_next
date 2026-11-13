"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Closes mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 py-4 ${
          scrolled
            ? "bg-[#0b071a]/85 backdrop-blur-md shadow-lg shadow-purple-950/30 border-b border-purple-500/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight text-white flex items-center gap-1"
          >
            <span>Nausheen</span>
            <span className="text-purple-400 drop-shadow-[0_0_12px_rgba(168,85,247,0.8)]">
              Siddiqui
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 items-center text-sm font-medium">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3.5 py-1.5 rounded-xl transition-all duration-200 ${
                    isActive
                      ? "text-purple-200 border border-purple-500/40 shadow-[0_0_15px_rgba(168,85,247,0.35)] bg-purple-950/40 font-semibold"
                      : "text-gray-400 hover:text-purple-300"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <Link
              href="/contact"
              className="px-6 py-2 rounded-full bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 text-white font-semibold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(147,51,234,0.45)] border border-violet-400/30 hover:scale-105 active:scale-95 transition-all"
            >
              Hire me ↗
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-gray-300 hover:text-white p-2 rounded-xl bg-purple-950/30 border border-purple-500/20"
            onClick={() => setIsOpen(true)}
            aria-label="Open Navigation Drawer"
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 260 }}
              className="fixed top-0 right-0 h-screen h-[100dvh] w-[80%] max-w-[320px] bg-[#0c081e] border-l border-purple-500/20 flex flex-col p-6 shadow-[-15px_0_35px_rgba(0,0,0,0.8)] z-10"
            >
              <div className="flex items-center justify-between pb-4 border-b border-purple-500/10">
                <span className="text-lg font-bold text-white">
                  Nausheen <span className="text-purple-400">Siddiqui</span>
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-full border border-purple-500/20 text-gray-400 hover:text-white bg-purple-950/30"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="mt-6 flex flex-col space-y-2">
                {navItems.map((item) => {
                  const isActive =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        isActive
                          ? "bg-purple-900/40 text-purple-200 border border-purple-500/40 shadow-[0_0_15px_rgba(168,85,247,0.25)]"
                          : "text-gray-400 hover:bg-purple-900/15 hover:text-white"
                      }`}
                    >
                      <span>{item.name}</span>
                      {isActive && (
                        <span className="h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.9)]" />
                      )}
                    </Link>
                  );
                })}
              </div>

              <div className="mt-auto pt-6 border-t border-purple-500/10">
                <Link
                  href="/contact"
                  className="flex items-center justify-center w-full py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 shadow-[0_0_20px_rgba(147,51,234,0.45)] border border-violet-400/30"
                >
                  ✨ Hire me
                </Link>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
