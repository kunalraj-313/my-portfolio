import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HireMe from "./components/HireMe";
import SupabaseTest from "./components/SupabaseTest";
import { useViewTracker } from "./hooks/useViewTracker";

function App() {
  // Track page views automatically
  useViewTracker('/');

  return (
    <div className="App">
      <SupabaseTest />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Portfolio />
      <HireMe />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
