import PropTypes from "prop-types";
import Button from "./ui/Button";

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

  return (
    <div className="w-full h-full py-20">
      <div className="w-full px-20 pb-10 border-b border-zinc-600">
        <h3 className="text-6xl tracking-tight">Featured Projects</h3>
      </div>
      <div className="cards w-full flex px-20 py-10 gap-10">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            imgSrc={card.imgSrc}
            tags={card.tags}
          />
        ))}
      </div>
    </div>
  );
}

export default Features;

function Card({ title, imgSrc, tags }) {
  Card.propTypes = {
    title: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  return (
    <div className="card w-1/2 h-[60vh]">
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
    </div>
  );
}
