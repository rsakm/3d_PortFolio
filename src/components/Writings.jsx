import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { styles } from "../styles";
import { writings } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import live from "../assets/live.png";

const WritingCard = ({ index, title, excerpt, tags, image, article_link, date, readTime }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full transition-transform hover:scale-[1.03] hover:shadow-xl duration-300'
      >
        <div className='relative w-full h-[230px]'>
          <img src={image} alt={title} className='w-full h-full object-cover rounded-2xl' />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(article_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              title="Read on Medium"
            >
              <img src={live} alt='medium' className='w-1/2 h-1/2 object-contain' />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{title}</h3>
          <p className='text-sm text-gray-400 mt-1'>{date} • {readTime}</p>
          <p className='mt-2 text-secondary text-[14px]'>{excerpt}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={`${title}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Writings = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredWritings = writings.filter((writing) =>
    activeFilter === "all" ? true : writing.type === activeFilter
  );

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My expressions</p>
        <h2 className={`${styles.sectionHeadText}`}>Writings.</h2>
      </motion.div>

      <div className='flex gap-4 mt-5 mb-10'>
        {["all", "poetry", "tech"].map((type) => (
          <button
            key={type}
            onClick={() => setActiveFilter(type)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeFilter === type
                ? "bg-primary text-white"
                : "bg-gray-200 text-black hover:bg-gray-300"
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      <div className='flex flex-wrap gap-7'>
        {filteredWritings.map((writing, index) => (
          <WritingCard key={`writing-${index}`} index={index} {...writing} />
        ))}
      </div>

      <div className='mt-10 flex justify-center'>
        <button
          onClick={() => window.open("https://medium.com/@rajshreee", "_blank")}
          className='bg-primary text-white px-6 py-3 rounded-full text-lg hover:bg-secondary transition-all'
        >
          View More on Medium
        </button>
      </div>
    </>
  );
};

export default SectionWrapper(Writings, "writings");
