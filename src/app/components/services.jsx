import { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { motion, useAnimation } from 'framer-motion';
import gsap from 'gsap';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import services from '@/app/components/constants/services.json';

export default function WhatWeDo() {
  const swiperRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');

    const handleScroll = () => {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          gsap.to(el, { opacity: 1, y: 0, duration: 0.6 });
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="what-we-do" className="py-20 gap-3 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="font-manrope text-4xl font-bold text-gray-900 text-center reveal"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.5 }}
        >
          Services We Provide
        </motion.h2>
        <motion.h2
          className="font-manrope text-4xl font-medium text-gray-900 text-center mb-16 reveal"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.5 }}
        >
          What We Do
        </motion.h2>

        <div className="relative">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation = {{ clickable: true }}
            pagination={{ clickable: true }}
            className="p-6"
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {services.map((service) => (
              <SwiperSlide key={service.id}>
                <motion.div
                  className="group w-full rounded-2xl overflow-hidden reveal"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center">
                    <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                  </div>
                  <div className="p-6 transition-all duration-300 group-hover:bg-gray-100">
                    <h4 className="text-xl text-gray-900 font-medium leading-8 mb-4">{service.title}</h4>
                    <p className="text-gray-500 leading-6 mb-6">{service.description}</p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <div className="absolute inset-y-0 left-0 flex items-center">
            <button className="swiper-button-prev transition-colors">

            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button className="swiper-button-next transition-colors">
    
            </button>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="swiper-pagination mt-6"></div>

        {/* Read More Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => {
              console.log('Read More clicked');
            }}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}