import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-full h-screen text-white">
      <Navbar />
      <LandingPage />
      <Marquee />
    </div>
  );
}

export default App;
