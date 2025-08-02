import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Optional animation library

const Service = () => {
  const stats = [
    { number: "18,000+", label: "Experts", icon: "/icons/expert.png", color: "from-amber-400 to-amber-500" },
    { number: "1,000+", label: "1-on-1 Coaches", icon: "/icons/coach.png", color: "from-blue-400 to-blue-500" },
    { number: "750+", label: "Live Sessions", icon: "/icons/sessions.png", color: "from-purple-400 to-purple-500" },
    { number: "500+", label: "Videos", icon: "/icons/videos.png", color: "from-red-400 to-red-500" },
    { number: "250+", label: "Podcasts", icon: "/icons/podcasts.png", color: "from-green-400 to-green-500" },
    { number: "200+", label: "Blogs", icon: "/icons/blogs.png", color: "from-indigo-400 to-indigo-500" },
  ];

  // Animation variants
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-8xl mx-auto px-5 sm:px-10">
        {/* Optional Animated Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-amber-600">
              Why Join Our Community?
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Trusted by thousands worldwide for premium learning experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={item}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="group relative h-full"
            >
              <div className="h-full bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${stat.color}"></div>
                
                <div className="relative p-6 text-center flex flex-col items-center h-full">
                  {/* Icon with gradient border */}
                  <div className="mb-6 p-1 rounded-full bg-gradient-to-tr ${stat.color}">
                    <div className="bg-white p-3 rounded-full">
                      <div className="w-10 h-10 relative">
                        <Image
                          src={stat.icon}
                          alt={stat.label}
                          fill
                          className="object-contain"
                          quality={100}
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Number with gradient text */}
                  <span className={`text-4xl font-black mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.number}
                  </span>
                  
                  {/* Label */}
                  <h3 className="text-lg font-semibold text-gray-800 capitalize">
                    {stat.label}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;