"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Services from '@/app/components/services';
import Hero from '@/app/components/hero';
import Blog from '@/app/components/blog';
import Testimonials from '@/app/components/testimonials';

const Page = () => {  // ✅ Changed to uppercase "Page"
  useEffect(() => {
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
  }, []);

  return (
    <div>
      <Hero />
      <section className="min-h-screen flex flex-col items-center justify-center py-16 px-6 bg-gray-100">
        <div className="text-left">
        <motion.h4 className="text-2xl md:text-6xl text-left mb-10 about-header">
          About Us
        </motion.h4>
        <motion.h3 className="text-3xl md:text-6xl font-semibold text-left mb-10 about-header">
          Your case is in the right hands
        </motion.h3>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between max-w-screen-xl mx-auto">
          {/* Text Section */}
          <motion.div className="about-text md:w-1/2 mb-6 md:mb-0 text-lg text-gray-700">
            <p className="mt-4">
            At FAVEN LP, we understand the intersection of technology, law, and business. As a premier IT law firm, we specialize in providing expert legal counsel to clients navigating the complexities of the digital world. With a focus on tech, law, and representation, our firm delivers strategic solutions while maintaining a soft touch to ensure clients feel heard, valved, and understood. We are dedicated to building lasting relationships founded on trust, guiding clients through challenges with unwavering support and unparalleled expertise Whether you&apos;re a startup, a growing business, or a seasoned tech leader, FAVEN LP serves a safe and reliable legal partner that empowers you to innovate and thrive in today&apos;s fast-paced, tech-driven landscape. Let us provide the comfort and security you need to move forward, with confidence.
            </p>
          </motion.div>

          {/* Image Section */}
          <motion.div className="about-image md:w-1/2 flex justify-center">
            <img
              src="/images/aboutimage.jpg"
              alt="About Us"
              className=" rounded-lg shadow-lg max-w-full h-auto"
            />
          </motion.div>
        </div>

        {/* Contact Button */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a
            href="/contact"
            className="bg-blue-400 text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-300 transition-colors shadow-lg"
          >
            Contact Us
          </a>
        </motion.div>
      </section>
      <Services/>
      <Testimonials/>
      <Blog/>
    </div>
  );
};

export default Page;  
