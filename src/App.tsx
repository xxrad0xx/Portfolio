import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Background } from "@/components/layout/Background";
import { BootIntro } from "@/components/layout/BootIntro";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Technologies } from "@/components/sections/Technologies";

function Landing() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <Background />
      <Header
        sidebarOpen={sidebarOpen}
        onSidebarOpenChange={setSidebarOpen}
      />
      <div
        className={`min-h-screen transition-[padding-left] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          sidebarOpen ? "md:pl-60" : "md:pl-0"
        }`}
      >
        <main>
          <Hero />
          <About />
          <Technologies />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default function App() {
  const [landingVisible, setLandingVisible] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {!landingVisible ? (
        <BootIntro
          key="boot-intro"
          onComplete={() => setLandingVisible(true)}
        />
      ) : (
        <motion.div
          key="landing"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="min-h-screen"
        >
          <Landing />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
