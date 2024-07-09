import { useState } from "react";
import { useEffect } from "react";

function Illustration() {
  const [rotate, setRotate] = useState(0);
  const [transformStyle, setTransformStyle] = useState({
    translateX: 0,
    translateY: 0,
  });

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;
      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

      setTransformStyle({
        translateX: deltaX * 0.04,
        translateY: deltaY * 0.04,
      });

      setRotate(angle - 180);
    });
  }, []);

  return (
    <div className="illustation w-full h-screen">
      <div className="relative w-full h-full bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')] bg-cover bg-no-repeat bg-center ">
        <div className="absolute w-1/2 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex justify-center gap-10">
          <div className="flex bg-zinc-100 items-center justify-center w-[15vw] h-[15vw] rounded-full ">
            <div
              className="relative w-2/3 h-2/3 rounded-full bg-zinc-900 "
              style={{
                transform: `translate(${transformStyle.translateX}px, ${transformStyle.translateY}px)`,
              }}
            >
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                  transition: "transform 0.1s ease-out",
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 flex items-center"
              >
                <div className="w-[3vw] h-[3vw] rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
          <div className="flex bg-zinc-100 items-center justify-center w-[15vw] h-[15vw] rounded-full ">
            <div
              className="relative w-2/3 h-2/3 rounded-full bg-zinc-900 "
              style={{
                transform: `translate(${transformStyle.translateX}px, ${transformStyle.translateY}px)`,
              }}
            >
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                  transition: "transform 0.1s ease-out",
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 flex items-center"
              >
                <div className="w-[3vw] h-[3vw] rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Illustration;
