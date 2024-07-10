import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useState } from "react";

function Button({ children }) {
  const [hover, setHover] = useState(false);

  Button.propTypes = {
    children: PropTypes.string.isRequired,
  };

  return (
    <motion.div
      className="group relative border px-4 py-2 rounded-full overflow-hidden"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <motion.span
        className="absolute h-full w-full bg-white bottom-0 left-0 bg-blend-"
        initial={{ translateY: "100%" }}
        animate={
          hover ? { translateY: "0%" } : { translateY: "-100%" }
        }
        exit={{translateY: "-100%" }}
        transition={
          hover
            ? { duration: 0.5, ease: "easeInOut" }
            : { duration: 0.5, ease: "easeInOut" }
        }
      ></motion.span>
      <p className="uppercase relative z-10 group-hover:text-zinc-800">
        {children}
      </p>
    </motion.div>
  );
}

export default Button;
