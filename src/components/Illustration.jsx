import Eyes from "./ui/Eyes";

function Illustration() {
  return (
    <div className="illustation w-full h-screen -z-50 overflow-hidden">
      <div
        data-scroll
        data-scroll-speed="-.8"
        className="relative w-full h-full bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')] bg-cover bg-no-repeat bg-center "
      >
        <Eyes />
      </div>
    </div>
  );
}

export default Illustration;
