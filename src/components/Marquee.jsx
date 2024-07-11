import { motion } from "framer-motion";

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.05"
      className="z-30"
    >
      <div className="w-full py-40 bg-[#004d43] rounded-t-3xl overflow-hidden">
        <div className="text flex  border-t-2 border-b-2 border-zinc-200 leading-none pt-8">
          <motion.h1
            className="pr-20 font-extrabold text-[400px] uppercase whitespace-nowrap font-['Bebas_Neue']"
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "linear",
            }}
          >
            We are Ochi
          </motion.h1>
          <motion.h1
            className="pr-20 font-extrabold text-[400px] uppercase whitespace-nowrap font-['Bebas_Neue']"
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "linear",
            }}
          >
            We are Ochi
          </motion.h1>
        </div>
      </div>
    </div>
  );
}

export default Marquee;
