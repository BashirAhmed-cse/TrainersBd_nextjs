import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const Testimonials = () => {
  const { theme } = useTheme();
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechSolutions Inc.",
      content: "The coaching sessions completely transformed our leadership approach. We've seen a 40% increase in team productivity since implementing their strategies.",
      rating: 5,
      image: "/testimonials/sarah-johnson.jpg"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Director, InnovateX",
      content: "The expert insights we gained through these sessions were invaluable. Our company culture has improved dramatically.",
      rating: 5,
      image: "/testimonials/michael-chen.jpg"
    },
    {
      id: 3,
      name: "Priya Patel",
      role: "Founder, GreenFuture",
      content: "The personalized coaching helped me overcome specific challenges in scaling my business. Highly recommend to any entrepreneur!",
      rating: 4,
      image: "/testimonials/priya-patel.jpg"
    },
    {
      id: 4,
      name: "David Wilson",
      role: "VP Operations, GlobalCorp",
      content: "The group learning sessions provided practical frameworks we could implement immediately. Excellent return on investment.",
      rating: 5,
      image: "/testimonials/david-wilson.jpg"
    },
    {
      id: 5,
      name: "Emma Rodriguez",
      role: "Marketing Director, BrandVision",
      content: "Changed my perspective on leadership. The 1:1 coaching was tailored perfectly to my needs and growth areas.",
      rating: 5,
      image: "/testimonials/emma-rodriguez.jpg"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-amber-600">
              WHAT OUR CLIENTS SAY
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-lg max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Hear from leaders who have transformed their organizations through our programs.
          </motion.p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button 
            onClick={prevTestimonial}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full shadow-md transition-colors ${
              theme === 'dark' 
                ? 'bg-gray-700 hover:bg-gray-600' 
                : 'bg-white hover:bg-amber-50'
            }`}
          >
            <ChevronLeft className="w-6 h-6 text-amber-600" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full shadow-md transition-colors ${
              theme === 'dark' 
                ? 'bg-gray-700 hover:bg-gray-600' 
                : 'bg-white hover:bg-amber-50'
            }`}
          >
            <ChevronRight className="w-6 h-6 text-amber-600" />
          </button>

          {/* Testimonial Cards */}
          <div className="flex overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: index === currentIndex ? 1 : 0.5,
                  scale: index === currentIndex ? 1 : 0.9
                }}
                transition={{ duration: 0.5 }}
                className={`w-full flex-shrink-0 px-4 ${index === currentIndex ? 'z-10' : 'z-0'}`}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                <div className={`rounded-xl shadow-lg p-8 md:p-10 max-w-4xl mx-auto ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                }`}>
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Profile Image */}
                    <div className="flex-shrink-0">
                      <div className={`relative w-32 h-32 rounded-full overflow-hidden border-4 ${
                        theme === 'dark' ? 'border-amber-900' : 'border-amber-100'
                      }`}>
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    
                    {/* Testimonial Content */}
                    <div className="flex-1">
                      {/* Rating */}
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i}
                            className={`w-5 h-5 ${
                              i < testimonial.rating 
                                ? 'text-amber-500 fill-amber-500' 
                                : theme === 'dark' 
                                  ? 'text-gray-600' 
                                  : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      
                      {/* Testimonial Text */}
                      <blockquote className={`text-lg italic mb-6 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        "{testimonial.content}"
                      </blockquote>
                      
                      {/* Author Info */}
                      <div>
                        <p className={`font-bold ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>{testimonial.name}</p>
                        <p className="text-amber-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-amber-500 w-6' 
                    : theme === 'dark' 
                      ? 'bg-gray-600' 
                      : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Logo Cloud */}
        <div className="mt-16">
          <p className={`text-center mb-8 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
          }`}>TRUSTED BY INDUSTRY LEADERS</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-70">
            {["CompanyA", "CompanyB", "CompanyC", "CompanyD", "CompanyE"].map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`transition-all ${
                  theme === 'dark' ? 'opacity-90 hover:opacity-100' : 'grayscale hover:grayscale-0'
                }`}
              >
                <div className="h-12 w-32 relative">
                  <Image 
                    src={`/logos/${company.toLowerCase()}.svg`} 
                    alt={company}
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;