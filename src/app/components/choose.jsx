"use client";
import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ClockBox from '@/app/components/icons/custom1'; // Example icons
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
                Why Choose Us
              </motion.h1>

              <p className="text-2xl text-center font-semibold lufga text-white mb-6 leading-tight drop-shadow-xl">
              Our aim is to bridge the constantly emerging technological innovations with the law. We work as specialists in technological business. We help you build a business that strives on legal existence, from the very beginning to the last.
              </p>
            </motion.div>

            {/* Features Section */}
            <section className="py-16 flex flex-col items-center">

              <div className="max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-4 sm:gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center p-6 shadow-md bg-amber-50 dark:bg-[#2C3D5B] opacity-30 transition duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <feature.icon className="text-4xl text-blue-950 dark:text-orange-100  mb-4" />
                    <h3 className="text-xl font-semibold text-blue-950 dark:text-[#DED2BC] mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 text-center">
                      {feature.description}
                    </p>
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

const features = [
  { icon: ClockBox, title: "Dispute Resolution", description: "ADR streamlines the dispute resolution process, helping you reach agreements in weeks or months instead of years." },

  { icon: ClockBox, title: "Cost Efficiency", description: "Save money on legal fees, court expenses, and lengthy trials with ADR methods like mediation and arbitration." },

  { icon: ClockBox, title: "Preserve Relationships", description: "ADR promotes open communication and collaboration, preserving important personal or business relationships." },

  { icon: ClockBox, title: "Control and Flexibility", description: "Take control of the outcome and tailor solutions to your needs with ADR's flexible customized approach." }
];

export default Hero;
