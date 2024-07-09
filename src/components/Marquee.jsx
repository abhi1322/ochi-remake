import { motion } from "framer-motion";

function Marquee() {
  return (
    <div>
      <div className="w-full py-40 bg-[#004d43] rounded-t-3xl overflow-x-hidden ">
        <div className="text flex font-extrabold text-[400px] uppercase whitespace-nowrap  font-['Bebas_Neue'] border-t-2 border-b-2 border-zinc-200 leading-none pt-8">
          <motion.div
            className="flex gap-9]"
            // initial={{ x: 0 }}
            // animate={{ x: "-100%" }}
            // transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          >
            <h3>We are Ochi</h3>
            <h3>We are Ochi</h3>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Marquee;
