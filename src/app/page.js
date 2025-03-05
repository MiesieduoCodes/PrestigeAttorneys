"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Loader from '@/app/components/loader';
import Services from '@/app/components/services';
import Hero from '@/app/components/hero';
import Blog from '@/app/components/blog';
import Choose from '@/app/components/choose';
import Testimonials from '@/app/components/testimonials';

const Page = () => {
  const [loading, setLoading] = useState(true);
  const sectionRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const element = sectionRef.current;
    
    gsap.fromTo(
      element,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, scrollTrigger: element }
    );
  }, []);

  useEffect(() => {
    if (!loading) {
      gsap.from(".about-header", {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power3.out",
      });
      gsap.from(".about-text", {
        opacity: 0,
        x: -100,
        duration: 1,
        scrollTrigger: {
          trigger: ".about-text",
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      });
      gsap.from(".about-image", {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        scrollTrigger: {
          trigger: ".about-image",
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      });
    }
  }, [loading]);

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <Loader />
        </div>
      ) : (
        <>
          <Hero />
          <section className="min-h-screen flex flex-col items-center justify-center py-16 px-6 bg-white dark:bg-black">
            <div className="text-left w-full">
              <motion.h4 className="lufga text-3xl text-[#0E1E37] dark:text-[#DED2BC] text-left mb-4 about-header">
                About Us
              </motion.h4>
              <motion.h3 className="lufga text-[#0E1E37] dark:text-[#DED2BC] text-5xl text-left about-header">
                Your case is in the right hands!
              </motion.h3>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between max-w-screen-xl mx-auto">
              <motion.div className="about-text md:w-1/2 mt-2 mb-6 md:mb-0 text-lg text-[#0E1E37] dark:text-[#DED2BC]">
                <p className="lufga mb-4">
                  At FAVEN LP, we understand the intersection of technology, law, and business. As a premier IT law firm, we specialize in providing expert legal counsel to clients navigating the complexities of the digital world.
                </p>
                <p className="lufga">
                  We are dedicated to building lasting relationships founded on trust, guiding clients through challenges with unwavering support and unparalleled expertise. Whether you’re a startup, a growing business, or a seasoned tech leader, FAVEN LP serves as a safe and reliable legal partner that empowers you to innovate and thrive.
                </p>
              </motion.div>

              <motion.div className="about-image md:w-1/2 flex justify-center">
                <img
                  src="/images/aboutimage.jpg"
                  alt="About Us"
                  className="rounded-lg shadow-lg max-w-full h-auto"
                />
              </motion.div>
            </div>
            
            {/* Contact Button */}
            <motion.div
              className="mt-8 justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <a
                href="/contact"
                className="bg-[#0E1E37] dark:bg-[#FFB224] text-white px-7 py-4 rounded-full text-lg font-semibold hover:bg-[#4A6382] transition-colors shadow-lg"
              >
                Contact Us
              </a>
            </motion.div>
          </section>
          <Choose />
          <Services />
          <Testimonials />
          <section
            ref={sectionRef}
            className="py-16 bg-cover bg-center"
            style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }}
          >
            <div className="mx-auto gap-6 max-w-7xl px-4 sm:px-6 lg:px-8">
              <motion.div
                className="lg:py-14 lg:px-20 p-10 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 flex items-center justify-center flex-col"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="block text-center mb-5 lg:text-left lg:mb-0">
                  <h2 className="font-manrope text-4xl text-white font-semibold mb-5 lg:mb-2">
                    Unclear About Your Situation?
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
          <Blog />
        </>
      )}
    </div>
  );
};

export default Page;