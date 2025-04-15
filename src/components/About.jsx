import React from "react";
import { Tilt } from 'react-tilt';

import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import YourImage from "../assets/d1.jpg"; // Import your image

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
        {/* Text Section (unchanged) */}
        <motion.div className="lg:w-1/2">
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Overview.</h2>
          </motion.div>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
             I'm a dedicated computer science student with a passion for data structures, algorithms, and full-stack development. With a strong foundation in computer science fundamentals and hands-on experience in developing efficient, scalable solutions, I am eager to collaborate, learn, and grow within dynamic and innovative environments to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
          </motion.p>
        </motion.div>

        {/* {My personal image} */}
        <motion.div
  variants={fadeIn("left", 0.5)}
  className="lg:w-1/2 flex justify-center lg:justify-end"
>
  <motion.div
    initial={{ y: 0 }}
    animate={{
      y: [-3, 0, -3], // Very subtle float
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }}
    whileHover={{
      scale: 1.03,
      boxShadow: "0 0 30px rgba(145, 94, 255, 0.4)", // Soft glow
      transition: { 
        duration: 0.3,
        boxShadow: { duration: 0.5 }
      }
    }}
    className="relative rounded-2xl border-4 border-[#915EFF]"
  >
    <img 
      src={YourImage}
      alt="Rajshree"
      className="rounded-xl w-full max-w-[300px] h-auto object-cover shadow-lg"
    />
    
    {/* Background glow layer (only visible on hover) */}
    <motion.div
      initial={{ opacity: 0 }}
      whileHover={{ 
        opacity: 1,
        transition: { duration: 0.4 }
      }}
      className="absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_center,_rgba(145,94,255,0.4)_0%,_transparent_70%)] -z-10"
    />
  </motion.div>
</motion.div>
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");