"use client";

import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.fromTo(
        ".footer-section",
        { opacity: 0, y: 50 },
        {opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.3,
          scrollTrigger: {
            trigger: ".footer-section",
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }
  }, []);

 
  return (
    <div>
      <footer className="w-full bg-blue-900 text-white dark:bg-gray-900 dark:text-gray-200 justify-around transition-colors duration-300 font-montserrat">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 py-10 lg:py-12">
            {/* About Section */}
            <div className="footer-section lufga">
              <h2 className="mb-6 text-sm font-semibold text-yellow-400 uppercase tracking-wide">
            Prestige Attorneys
              </h2>
              <ul className="space-y-3">
                  <li>
                    <a href="/" className="hover:text-yellow-400 transition">
                      +2348192839898
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover:text-yellow-400 transition">
                      janegrey@gmail.com
                    </a>
                  </li>
              </ul>
            </div>

            {/* Connect Section */}
            <div className="footer-section lufga">
              <h2 className="mb-6 text-sm font-semibold text-yellow-400 uppercase tracking-wide">
                Quick Links
              </h2>
              <ul className="space-y-3">
                  <li>
                    <a href="/" className="hover:text-yellow-400 transition">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover:text-yellow-400 transition">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover:text-yellow-400 transition">
                      Videos
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover:text-yellow-400 transition">
                      Service
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover:text-yellow-400 transition">
                      Our Team
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover:text-yellow-400 transition">
                      Contact Us
                    </a>
                  </li>
              </ul>
            </div>

            {/* Legal Section */}
            <div className="footer-section">
              <h2 className="mb-6 text-sm font-semibold text-yellow-400 uppercase tracking-wide">
              Follow Us
              </h2>
              <ul className="space-y-3">

               <li>
                    <a href="/" className="hover:text-yellow-400 transition">
                     hii
                    </a>
                  </li>
              </ul>
            </div>


        </div>
      </footer>
    </div>
  );
};

export default Footer;
