import About from "./components/About";
import Illustration from "./components/Illustration";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-full min-h-screen text-white bg-zinc-800">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Illustration  />
    </div>
  );
}

export default App;
