import { FiChevronRight } from "react-icons/fi";
import Eyes from "./ui/Eyes";

function Ready() {
  return (
    <div className="overflow-hidden">
      <div
        data-scroll
        data-scroll-speed="-.8"
        className="relative flex flex-col gap-12 justify-center items-center w-full h-screen bg-[#cdea68]"
      >
        <h3 className="text-[25vh] font-bold font-['Bebas_Neue'] text-center leading-[20vh] text-zinc-800">
          Ready <br /> to start
          <br /> the project?
        </h3>
        <div>
          <button className="group bg-zinc-800 group-hover:bg-zinc-600 text-white text-XL uppercase rounded-full px-8 py-4 flex justify-between items-center gap-6 font-thin ">
            Read more
            <span className=" bg-white rounded-full group-hover:scale-150 flex items-center justify-center scale-50">
              <FiChevronRight
                className="group-hover:scale-['100%']  scale-0 text-zinc-800"
                strokeWidth={1}
              />
            </span>
          </button>
        </div>

        <Eyes className={"scale-50"} />
      </div>
    </div>
  );
}

export default Ready;
