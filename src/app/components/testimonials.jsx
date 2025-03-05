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
          start: "top center",
          end: "bottom center",
          scrub: true,
          onLeave: () => gsap.to(element, { opacity: 0, y: 50 }),
          onEnterBack: () => gsap.to(element, { opacity: 1, y: 0 }),
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative text-center flex justify-center items-center min-h-screen overflow-hidden"
    >
      <AnimatePresence>
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/bgimage.jpg')" }}
          initial="enter"
          animate="center"
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Content Container */}
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
            <motion.div
              className="max-w-4xl w-full px-4 lg:px-8"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.p
                className="lufga text-2xl font-bold text-gray-200 text-center max-w-2xl drop-shadow-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Opinions about us
              </motion.p>

              <h1 className="text-3xl md:text-6xl font-semibold text-orange-100 mb-6 leading-tight drop-shadow-xl">
                What our clients say about us
              </h1>
            </motion.div>

            <motion.div
              className="max-w-4xl w-full gap-10 px-4 flex flex-col md:flex-row justify-center items-center lg:px-8"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Testimonials */}
              <section className="flex flex-col bg-amber-50 p-4 rounded-lg shadow-md mb-4 text-center">
                <h2 className="text-blue-950 mb-2">
                  Working with Prestige Attorney has been an exceptional experience. Their dedication, expertise, and commitment to achieving the best possible outcomes are truly unparalleled in the legal field.
                </h2>
                <h1 className="font-semibold">Emeka M.</h1>
              </section>
              <section className="flex flex-col bg-amber-50 p-4 rounded-lg shadow-md mb-4 text-center">
                <h2 className="text-blue-950 mb-2">
                  Working with Prestige Attorney has been an exceptional experience. Their dedication, expertise, and commitment to achieving the best possible outcomes are truly unparalleled in the legal field.
                </h2>
                <h1 className="font-semibold">Emeka M.</h1>
              </section>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Hero;