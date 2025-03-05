"use client";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative flex justify-start items-center min-h-screen overflow-hidden">
      <AnimatePresence>
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/bgimage.jpg')" }}
          initial="enter"
          animate="center"
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Content Container */}
          <div className="relative z-10 h-full flex flex-col justify-center items-start text-left px-4 lg:px-8">
            <motion.div
              className="max-w-4xl w-full"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.p
                className="text-lg lufga md:text-xl text-orange-100 mb-6 max-w-2xl drop-shadow-md leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Welcome to Faven LP
              </motion.p>

              <h1 className="text-2xl against md:text-4xl font-bold text-white mb-5 leading-snug drop-shadow-xl">
                Achieving <span className="text-orange-100">lasting</span> technological <span className="text-orange-100">solutions</span> through legal compliance.
              </h1>

              <motion.p
                className="text-sm lufga md:text-lg text-gray-200 mb-5 max-w-2xl drop-shadow-md leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                We bridge the gap between law, business, and technology — delivering practical legal guidance that drives results.
              </motion.p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-200 text-black px-6 py-2 rounded-full text-lg md:text-xl lufga font-semibold hover:bg-gray-400 transition-colors shadow-lg"
              >
                Book A Consultation
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Hero;