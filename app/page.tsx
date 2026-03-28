import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="divider" />
      <Experience />
      <div className="divider" />
      <Skills />
      <div className="divider" />
      <Projects />
      <div className="divider" />
      <Contact />
      <Footer />
    </main>
  );
}
