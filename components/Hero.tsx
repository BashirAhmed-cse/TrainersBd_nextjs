import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { useTheme } from 'next-themes';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Sample hero images - replace with your actual images
  const heroImages = [
    {
      src: "/hero/hero1.jpg",
      alt: "Professional coach in session",
      title: "Expert Coaching",
      subtitle: "Personalized guidance for your growth"
    },
    {
      src:"/hero/hero2.jpg",
      alt: "Group training workshop",
      title: "Interactive Workshops",
      subtitle: "Learn with peers in engaging sessions"
    },
    {
      src: "/hero/hero3.jpg",
      alt: "Online learning platform",
      title: "Flexible Learning",
      subtitle: "Access courses anytime, anywhere"
    }
  ];

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [theme]); // Add theme as dependency to reset timer on theme change

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  if (!mounted) return null;

  return (
    <section className="relative overflow-hidden">
      {/* Animated background gradient - changes with theme */}
      <div className={`absolute inset-0 opacity-90 ${
        theme === "dark" 
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" 
          : "bg-gradient-to-br from-amber-50 via-white to-blue-50"
      }`}></div>
      
      {/* Floating animated elements - adjust colors for dark mode */}
      <motion.div 
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute top-20 left-10 w-16 h-16 rounded-full blur-xl ${
          theme === "dark" ? "bg-amber-400/10" : "bg-amber-200/30"
        }`}
      />
      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute bottom-20 right-10 w-24 h-24 rounded-full blur-xl ${
          theme === "dark" ? "bg-blue-400/10" : "bg-blue-200/30"
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className={`inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full mb-4 ${
                theme === "dark" 
                  ? "text-amber-300 bg-amber-900/30" 
                  : "text-amber-600 bg-amber-100/80"
              }`}>
                Asia's Premier Platform
              </span>
              <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}>
                Transform Your{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">Skills</span>
                  <motion.span 
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className={`absolute bottom-1 left-0 h-3 z-0 ${
                      theme === "dark" ? "bg-amber-400/40" : "bg-amber-300/60"
                    }`}
                  />
                </span>
                <br />
                With Top{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-pink-500">
                  Industry Experts
                </span>
              </h1>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={`text-lg max-w-lg ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Access personalized coaching, interactive workshops, and cutting-edge 
              courses designed to accelerate your professional and personal growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-lg hover:shadow-amber-200/50 px-8 py-6 text-lg rounded-xl">
                Explore Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant={theme === "dark" ? "secondary" : "outline"} 
                className="px-8 py-6 text-lg rounded-xl border-2"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </motion.div>

            
          </div>

          {/* Image Slider */}
          <div className="relative h-[500px]">
            {heroImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: currentSlide === index ? 1 : 0,
                  scale: currentSlide === index ? 1 : 0.95
                }}
                transition={{ duration: 0.8 }}
                className={`absolute inset-0 rounded-2xl overflow-hidden shadow-xl ${
                  theme === "dark" ? "shadow-gray-900/50" : "shadow-gray-200/50"
                } ${currentSlide === index ? 'z-10' : 'z-0'}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority
                />
                <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t p-6 ${
                  theme === "dark" 
                    ? "from-black/80 to-transparent" 
                    : "from-black/70 to-transparent"
                }`}>
                  <h3 className="text-white text-xl font-bold">{image.title}</h3>
                  <p className="text-white/90">{image.subtitle}</p>
                </div>
              </motion.div>
            ))}

            {/* Slider Controls */}
            <div className="absolute bottom-6 right-6 z-20 flex gap-2">
              <Button 
                onClick={prevSlide}
                size="icon" 
                variant="outline" 
                className={`rounded-full backdrop-blur-sm hover:bg-white/50 ${
                  theme === "dark" 
                    ? "bg-gray-800/30 border-gray-600/30 hover:bg-gray-700/50" 
                    : "bg-white/30 border-white/20"
                }`}
              >
                <ChevronLeft className="h-5 w-5 text-white" />
              </Button>
              <Button 
                onClick={nextSlide}
                size="icon" 
                variant="outline" 
                className={`rounded-full backdrop-blur-sm hover:bg-white/50 ${
                  theme === "dark" 
                    ? "bg-gray-800/30 border-gray-600/30 hover:bg-gray-700/50" 
                    : "bg-white/30 border-white/20"
                }`}
              >
                <ChevronRight className="h-5 w-5 text-white" />
              </Button>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-6 left-6 z-20 flex gap-2">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? theme === "dark" 
                        ? "w-6 bg-amber-400" 
                        : "w-6 bg-white" 
                      : theme === "dark" 
                        ? "w-3 bg-gray-500" 
                        : "w-3 bg-white/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Add this Star component (or import from your icon library)
const Star = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
    />
  </svg>
);

export default Hero;