// components/ConnectWithUs.jsx
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

export default function ConnectWithUs() {
  const sectionRef = useRef(null);



  return (
    <section
      ref={sectionRef}
      className="py-16 bg-cover bg-center"
      style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="lg:py-14 lg:px-20 p-10 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 flex items-center justify-center flex-col lg:flex-row"
          whileHover={{ scale: 1.05 }} // Hover animation
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="block text-center mb-5 lg:text-left lg:mb-0">
            <h2 className="font-manrope text-4xl text-white font-semibold mb-5 lg:mb-2">
             Unclear About Your Situation ?
            </h2>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 bg-white rounded-full shadow-sm text-lg text-indigo-600 font-semibold py-4 px-8 transition-all duration-500 mt-5 lg:mt-0 hover:bg-indigo-600 hover:text-white"
          >
            Contact Us
            <svg
              width="19"
              height="14"
              viewBox="0 0 19 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.75 7L16.4167 7M11.8333 12.5L16.6852 7.64818C16.9907 7.34263 17.1435 7.18985 17.1435 7C17.1435 6.81015 16.9907 6.65737 16.6852 6.35182L11.8333 1.5"
                stroke="#4F46E5"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}