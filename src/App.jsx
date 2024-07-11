import { useEffect } from "react";
import About from "./components/About";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Illustration from "./components/Illustration";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import Ready from "./components/Ready";
import Parallax from "./components/ui/Parallex";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full min-h-screen text-white bg-zinc-800">
      <Navbar />

      <Parallax speed={0.1}>
        <LandingPage />
      </Parallax>
      <Parallax speed={1}>
        <Marquee />
      </Parallax>
      <About />
      <Illustration />
      <Features />
      <Ready />
      <Footer />
    </div>
  );
}

export default App;
