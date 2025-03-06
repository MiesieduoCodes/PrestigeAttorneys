import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { motion } from 'framer-motion';
import services from '@/app/components/constants/services.json';

gsap.registerPlugin(ScrollTrigger);

export default function serviceSection() {
  const serviceRefs = useRef([]);

  useEffect(() => {
    serviceRefs.current.forEach((el, index) => {
      gsap.fromTo(el, 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          scrollTrigger: {
            trigger: el,
            start: 'top 70%',
            end: 'bottom 30%',
            toggleActions: 'play none none reset', // Reset animation on scroll up
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Cleanup ScrollTrigger instances
    };
  }, []);

  const handleScrollToservices = () => {
    document.getElementById('service-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="service-section" className="lufga">
      <div className="mx-auto max-w-7xl p-7 px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope lufga text-xl font-bold dark:text-gray-200
         text-gray-900 text-center mb-6">Our Practice Areas</h2>
         
         <h2 className="font-manrope lufga text-5xl font-bold dark:text-gray-200 text-black text-center mb-16">What We Do</h2>

         <div className="gap-10 flex flex-col">
        <div className="flex justify-center gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              ref={el => serviceRefs.current[index] = el}
              className="group w-full max-lg:max-w-xl lg:w-1/3 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }} // Allow re-triggering on scroll back
              transition={{ duration: 0.5, delay: index * 0.2 }}
              onClick={() => window.location.href = service.link}>
            
                <div className="flex items-center">
                  <img src={service.image} alt="services tailwind section" className=" w-full object-cover" />
                </div>
                <div className="p-4 lg:p-6 transition-all duration-300  group-hover:bg-gray-50 dark:group-hover:bg-blue-950">
                  <h4 className="text-2xl text-left dark:text-gray-200 uppercase text-black font-semibold leading-8 mb-5">{service.title}</h4>
                  <p className="dark:text-gray-200 text-xl text-gray-900 leading-6">{service.description}</p>
                </div>
            
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center">
          <button 
            onClick={handleScrollToservices}
            className="bg-blue-950 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors"
          >
            Read More
          </button>
        </div>
        </div>
      </div>
    </section>
  );
}