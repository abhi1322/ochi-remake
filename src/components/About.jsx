import { FiChevronRight } from "react-icons/fi";

function About() {
  return (
    <div className="w-full  bg-[#cdea68] text-zinc-900 rounded-t-3xl">
      <div className="border-b border-zinc-600 p-20">
        <h3 className="text-6xl w-3/4">
          Ochi is a strategic partner for fast-grow­ing tech businesses that
          need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire
          great peo­ple.
        </h3>
      </div>
      <div className="flex justify-between w-full px-20 pt-12 pb-40 text-2xl border-b border-zinc-800">
        <h6>What you can expect:</h6>
        <div className="flex flex-col w-1/3 gap-10 ">
          {[
            "We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.",
            "We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.",
          ].map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>
        <div className="links flex flex-col items-end justify-end">
          {["Instagram", "Behance", "Facebook", "Linkedin"].map((text, i) => (
            <a key={i} href="/" className="underline">
              {text}
            </a>
          ))}
        </div>
      </div>

      <div className="flex justify-between al px-20 py-10">
        <div>
          <h3 className="text-6xl mb-8">Our approach:</h3>
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

        <img
          src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
          alt="Our approach"
          className="w-[50vw] object-cover rounded-3xl"
        />
      </div>
    </div>
  );
}

export default About;
