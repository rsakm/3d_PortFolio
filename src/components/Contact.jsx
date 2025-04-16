import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { 
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaEnvelope
} from 'react-icons/fa6';

// 
// 
// 
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_zi25mks','template_alw8tjq',
        {
          from_name: form.name,
          to_name: "Rajshree",
          from_email: form.email,
          to_email: "rajshreeakm@gmail.com",
          message: form.message,
        },
        'jdAfTQ7Hc57EUlsM0'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        {/* Contact Header with inline social icons */}
  <div className="flex justify-between items-center">
    <div>
      <p className={styles.sectionSubText}>Get in touch</p>
      
    </div>

    <div className="flex gap-3">
      <motion.a
        whileHover={{ y: -2 }}
        href="https://github.com/rsakm"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub className="text-xl text-white hover:text-[#6e5494] transition-colors" />
      </motion.a>

      <motion.a
        whileHover={{ y: -2 }}
        href="https://linkedin.com/in/rajshree468"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedinIn className="text-xl text-white hover:text-[#0077b5] transition-colors" />
      </motion.a>

      <motion.a
        whileHover={{ y: -2 }}
        href="https://instagram.com/rs.akm"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <FaInstagram className="text-xl text-white hover:text-[#e4405f] transition-colors" />
      </motion.a>

      <motion.a
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="https://facebook.com/shree.akm"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:shadow-lg hover:shadow-[#1877f2]/50 rounded-full p-1"
          >
            <FaFacebookF className="text-xl text-white hover:text-[#1877f2] transition-colors" />
          </motion.a>

      <motion.a
        whileHover={{ y: -2 }}
        href="https://twitter.com/Rajshre58266522"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
      >
        <FaXTwitter className="text-xl text-white hover:text-[#504d4d] transition-colors" />
      </motion.a>
      
      <motion.a
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="mailto:rajshreeakm@gmail.com"
            aria-label="Email"
            className="hover:shadow-lg hover:shadow-[#ea4335]/50 rounded-full p-1"
          >
            <FaEnvelope className="text-2xl text-white hover:text-[#ea4335] transition-colors" />
          </motion.a>

      

    </div>
  </div>
  <h3 className={styles.sectionHeadText}>Contact.</h3>
        

        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-4 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");