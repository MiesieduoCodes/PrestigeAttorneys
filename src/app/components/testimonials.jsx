"use client";
import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

const Hero = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const element = sectionRef.current;

    // GSAP Scroll Animation
    gsap.fromTo(
      element,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: "top 60%",
          end: "top 40%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="relative text-center flex justify-center items-center min-h-screen overflow-hidden">
      <AnimatePresence>
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/choose.jpg')" }}
          initial="enter"
          animate="center"
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-blue-950 opacity-30"></div>

          {/* Content Container */}
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
            <motion.div
              className="max-w-4xl w-full px-4 text-center justify-center items-center lg:px-8"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.h1
                className="text-3xl text-center font-semibold lufga text-white mb-5 leading-tight drop-shadow-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Opinions About Us
              </motion.h1>

              <p className="text-2xl text-center font-semibold lufga text-white mb-6 leading-tight drop-shadow-xl">
                What Our Clients Say About Us
              </p>
            </motion.div>

            {/* testimonials Section */}
            <section className="py-16 flex flex-col justify-center items-center">

              <div className="max-w-screen-xl flex justify-center items-center  gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-4 sm:flex sm:flex-col">

                {testimonials.map((testimonials, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col justify-center gap-10 items-center p-6 shadow-md bg-amber-50 dark:bg-[#2C3D5B] opacity-30 transition duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <p className="text-gray-700 dark:text-gray-300 text-center">
                      {testimonials.description}
                    </p>
                    <h3 className="text-xl font-semibold text-blue-950 dark:text-[#DED2BC] mb-2">
                      {testimonials.title}
                    </h3>
                  </motion.div>
                ))}

              </div>
            </section>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

const testimonials = [
  {
    "id": 1,
    "title": "Legal Compliance Solutions",
    "description": "We provide comprehensive legal compliance solutions to ensure your business adheres to all regulations.",
  },
  {
    "id": 2,
    "title": "Business Technology Integration",
    "description": "Integrate cutting-edge technology into your business "
  },
  {
    "id": 3,
    "title": "Strategic Legal Guidance",
    "description": "Our experts offer strategic legal guidance to help you navigate complex legal landscapes.",
  }
];

export default Hero;
