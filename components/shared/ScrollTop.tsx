"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const checkScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={handleScroll}
      aria-label="Scroll to top"
      className="fixed bottom-24 right-5 md:bottom-28 md:right-8 z-40 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#0c081e]/80 border border-purple-500/50 text-purple-300 hover:text-white hover:border-purple-400 hover:bg-purple-950/60 backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.35)] flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer"
    >
      <ArrowUp size={20} />
    </button>
  );
}
