import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { motion } from 'framer-motion';
import blogs from '@/app/components/constants/blog.json';

gsap.registerPlugin(ScrollTrigger);

export default function BlogSection() {
  const blogRefs = useRef([]);

  useEffect(() => {
    blogRefs.current.forEach((el, index) => {
      gsap.fromTo(el, 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reset', // Reset animation on scroll up
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Cleanup ScrollTrigger instances
    };
  }, []);

  const handleScrollToBlogs = () => {
    document.getElementById('blog-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="blog-section" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope text-4xl font-bold text-gray-900 text-center mb-16">Blog</h2>
        <div className="flex justify-center gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
          {blogs.map((blog, index) => (
            <motion.div 
              key={blog.id}
              ref={el => blogRefs.current[index] = el}
              className="group w-full max-lg:max-w-xl lg:w-1/3 rounded-2xl cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }} // Allow re-triggering on scroll back
              transition={{ duration: 0.5, delay: index * 0.2 }}
              onClick={() => window.location.href = blog.link}
            >
              <a href={blog.link} className="block">
                <div className="flex items-center">
                  <img src={blog.image} alt="blogs tailwind section" className="rounded-t-2xl w-full object-cover" />
                </div>
                <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
                  <span className="text-indigo-600 font-medium mb-3 block">{blog.date}</span>
                  <h4 className="text-xl capitalize text-gray-900 font-medium leading-8 mb-5">{blog.title}</h4>
                  <p className="text-gray-500 leading-6 mb-10">{blog.description}</p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <button 
            onClick={handleScrollToBlogs}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}