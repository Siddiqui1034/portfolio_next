import Image from "next/image";
import "remixicon/fonts/remixicon.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/shared/ScrollTop";
import { ToastContainer } from "react-toastify";
import WhatsApp from "@/components/shared/WhatsApp";
import HireMe from "@/components/shared/HireMe";
import AutoDownloadCV from "@/components/AutoDownloadCV";
import ProjectsPreview from "@/components/ProjectPreview";

export default function Home() {
  const waLink =
    "https://wa.me/917376147918?text=Hello%20Nausheen,%20I%20would%20like%20to%20connect.";
  return (
    <main className="relative pb-20 md:pb-0 font-sans">
      <Navbar />
      <Hero />
      <ProjectsPreview />
      <About />
      <Skills />
      <Contact />
      <Footer />

      <ScrollTop />
      <WhatsApp />
      <HireMe />

      <AutoDownloadCV />

      <ToastContainer position="top-right" />
    </main>
  );
}
