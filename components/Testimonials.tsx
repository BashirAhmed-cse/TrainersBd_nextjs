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
      name: "Saydujjaman",
      role: "Founder and CEO, Shonod.",
      content: "The coaching sessions completely transformed our leadership approach. We've seen a 40% increase in team productivity since implementing their strategies.",
      rating: 5,
      image: "/Members/Saydujjaman.jpg"
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
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
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
            className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-amber-600">
              WHAT OUR CLIENTS SAY
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
          >
            Hear from leaders who have transformed their organizations through our programs.
          </motion.p>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          {/* Navigation */}
          <button
            onClick={prevTestimonial}
            className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 rounded-full transition-colors shadow-md ${
              theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-amber-50'
            }`}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="text-amber-600 w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 rounded-full transition-colors shadow-md ${
              theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-amber-50'
            }`}
            aria-label="Next testimonial"
          >
            <ChevronRight className="text-amber-600 w-6 h-6" />
          </button>

          {/* Track */}
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="flex-shrink-0 w-full px-2">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className={`rounded-xl shadow-lg p-6 md:p-10 max-w-4xl mx-auto ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                  }`}
                  aria-live="polite"
                >
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    {/* Profile Image */}
                    <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-amber-200 relative">
                      <Image
                        src={testimonial.image}
                        alt={`${testimonial.name} photo`}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 text-center md:text-left">
                      <div className="flex justify-center md:justify-start mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < testimonial.rating ? 'text-amber-500 fill-amber-500' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <blockquote className={`italic mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                        “{testimonial.content}”
                      </blockquote>
                      <p className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{testimonial.name}</p>
                      <p className="text-amber-600">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-amber-500 w-6'
                    : theme === 'dark'
                    ? 'bg-gray-600'
                    : 'bg-gray-300'
                }`}
                aria-label={`Show testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
