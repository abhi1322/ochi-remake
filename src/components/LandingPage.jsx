import { FiArrowUpRight } from "react-icons/fi";

function LandingPage() {
  return (
    <div className="w-full h-screen bg-zinc-800 pt-2">
      <div className="textStructure mt-52 px-20 font-['Bebas_Neue']">
        {["We Creare", "Eye-Opening", "Presentation"].map((text, i) => (
          <div key={i} className="masker">
            <div className="w-fit flex gap-2">
                {i === 1 && (<div className="w-[7vw] h-[5.5vw] relative -top-[.1vw] bg-red-500 rounded-md "></div>)}
              <h1 className="uppercase text-[8vw] leading-[6.2vw] tracking ">
                {text}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-zinc-700 mt-52 flex items-center justify-between pt-10 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((text, i) => (
          <p key={i} className="text-lg font-light tracking-tight leading-none">
            {text}
          </p>
        ))}
        <div className="group start flex gap-1 items-center">
          <div className="uppercase border rounded-full px-4 py-2 text-sm group-hover:bg-white group-hover:text-zinc-800 cursor-pointer transition-all ease-in-out ">
            START THE PROJECT
          </div>
          <div className="w-9 h-9 border rounded-full flex justify-center items-center group-hover:bg-white">
            <FiArrowUpRight
              className="w-full h-full group-hover:text-zinc-800"
              strokeWidth={1}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
