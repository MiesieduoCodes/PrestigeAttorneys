"use client";
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
            toggleActions: 'play none none reset',
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleScrollToBlogs = () => {
    document.getElementById('blog-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="blog-section" className="lufga">
      <div className="mx-auto max-w-7xl p-7 px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope text-5xl font-bold dark:text-gray-200 text-gray-900 text-center mb-16">Blog</h2>
        <div className="flex justify-center gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
          {blogs.map((blog, index) => (
            <motion.div 
              key={blog.id}
              ref={el => blogRefs.current[index] = el}
              className="group w-full max-lg:max-w-xl lg:w-1/3 rounded-2xl cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              onClick={() => window.location.href = `/blog/${blog.id}`} // Redirect to detail page
            >
              <div className="block">
                <div className="flex items-center">
                  <img src={blog.image} alt={blog.title} className="rounded-t-2xl w-full object-cover" />
                </div>
                <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50 dark:group-hover:bg-blue-900">
                  <h4 className="text-2xl dark:text-gray-200 capitalize text-gray-900 font-semibold leading-8 mb-5">{blog.title}</h4>
                  <p className="dark:text-gray-200 text-xl text-gray-900 leading-6 mb-10">{blog.description}</p>
                </div>
              </div>
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