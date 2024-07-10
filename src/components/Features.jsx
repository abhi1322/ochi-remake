import PropTypes from "prop-types";
import Button from "./ui/Button";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiChevronRight } from "react-icons/fi";

function Features() {
  const cardsData = [
    {
      title: "FYDE",
      imgSrc:
        "https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png",
      tags: ["Audit", "Copyright", "Sales Deck", "Slides Design"],
    },
    {
      title: "VISE",
      imgSrc:
        "https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg",
      tags: ["Agency", "Company presentation"],
    },
  ];

  const [isHoveredTitle, setisHoveredTitle] = useState("");

  return (
    <div className="w-full h-full py-20">
      <div className="w-full px-20 pb-10 border-b border-zinc-600">
        <h3 className="text-6xl tracking-tight">Featured Projects</h3>
      </div>
      <motion.div className="relative cards w-full flex px-20 py-10 gap-10 mb-40">
        {isHoveredTitle != "" ? (
          <div className="absolute flex justify-center items-center gap-1 top-[50%] right-[50%] translate-x-[50%] -translate-y-[50%] text-9xl z-50 uppercase font-['Bebas_Neue'] text-[#c0da63] overflow-hidden">
            {isHoveredTitle.split("").map((l, i) => (
              <motion.p
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.2,
                  ease: "easeOut",
                  delay: i * 0.11,
                }}
                key={i}
              >
                {l}
              </motion.p>
            ))}
          </div>
        ) : null}
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            imgSrc={card.imgSrc}
            tags={card.tags}
            onHovered={setisHoveredTitle}
          />
        ))}
      </motion.div>

      <div className="w-full flex items-center justify-center ">
        <button className="group bg-white group-hover:bg-neutral-200 text-zinc-800 text-xl tracking-tighter uppercase rounded-full px-8 py-4 flex justify-between items-center gap-6 fo ">
          checkout more case studies
          <span className=" bg-zinc-800 rounded-full group-hover:scale-150 flex items-center justify-center scale-50">
            <FiChevronRight
              className="group-hover:scale-['100%']  scale-0 text-white transition-all ease-in duration-100"
              strokeWidth={1}
            />
          </span>
        </button>
      </div>
    </div>
  );
}

function Card({ title, imgSrc, tags, onHovered }) {
  // Match prop name
  Card.propTypes = {
    title: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    onHovered: PropTypes.func.isRequired,
  };

  return (
    <motion.div
      className="card w-1/2 h-[60vh]"
      onMouseEnter={() => onHovered(title)}
      onMouseLeave={() => onHovered("")}
    >
      <div className="title flex gap-2 items-center mb-4">
        <div className="h-2 w-2 bg-white rounded-full"></div>
        <p className="uppercase text-lg">{title}</p>
      </div>
      <div className="group w-full h-full rounded-2xl">
        <div className="group-hover:scale-95 w-full h-full rounded-2xl transition-all ease-out duration-300 overflow-hidden">
          <img
            src={imgSrc}
            alt={title}
            className="group-hover:scale-110 w-full h-full object-cover transition-all ease-in-out duration-500"
          />
        </div>
      </div>
      <div className="tags flex gap-4 items-center flex-wrap w-full mt-4">
        {tags.map((tag, index) => (
          <Button key={index}>{tag}</Button>
        ))}
      </div>
    </motion.div>
  );
}

export default Features;
