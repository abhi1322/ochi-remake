import { motion, useTransform, useViewportScroll } from "framer-motion";
import PropTypes from "prop-types";

const Parallax = ({ children, speed }) => {
  Parallax.proptype = {
    children: PropTypes.node.isRequired,
    speed: PropTypes.number.isRequired,
  };

  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [0, 1], [0, -speed]); // Adjust speed for parallax effect

  return <motion.div style={{ y }}>{children}</motion.div>;
};

export default Parallax;
