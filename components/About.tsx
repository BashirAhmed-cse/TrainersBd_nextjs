import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTheme } from 'next-themes'

const About = () => {
  const { theme } = useTheme()
  
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gradient-to-br from-gray-50 to-white'}`}>
      <div className="max-w-8xl mx-auto px-5 sm:px-10">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={container}
          className="text-center mb-16"
        >
          {/* Animated Header with Gradient */}
          <motion.h2 
            variants={item}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-amber-600">
              ABOUT US
            </span>
          </motion.h2>
          
          {/* Animated Paragraph */}
          <motion.div 
            variants={item}
            className="relative max-w-4xl mx-auto"
          >
            <p className={`text-lg md:text-xl leading-relaxed md:leading-loose ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              TRAINERS is a dedicated platform designed to unite skilled trainers, educators, and speakers from diverse sectors. With a mission to advance professional development and contribute to national progress, we provide opportunities for individuals to enhance their skills, grow their careers, and collaborate with like-minded professionals. Our initiative is rooted in the belief that quality training and mentorship can drive significant positive change in society.
            </p>
            
            {/* Gradient Accent Line */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full opacity-80"></div>
          </motion.div>
        </motion.div>

        {/* Feature Highlights with Same Color Theme */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16"
          initial="hidden"
          animate="visible"
          variants={container}
        >
          {[
            {
              title: "International Standard Trainer",
              description: "TOT Training by Experts, Mentorship and Coaching, Certification Programs",
              icon: "/icons/expert.png",
              color: "from-amber-400 to-amber-500"
            },
            {
              title: "Professional Networking",
              description: "Creating a robust community of trainers and speakers to foster collaboration and knowledge sharing.",
              icon: "/icons/coach.png",
              color: "from-blue-400 to-blue-500"
            },
            {
              title: "Earning Opportunities",
              description: "Access income opportunities based on skills and competencies.",
              icon: "/icons/sessions.png",
              color: "from-purple-400 to-purple-500"
            },
            {
              title: "10000 Members by 2030",
              description: "Contributing to the nation, TRAINERS will create 10000 members by 2030.",
              icon: "/icons/sessions.png",
              color: "from-amber-400 to-amber-500"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative h-full"
            >
              <div className={`h-full rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden p-8 ${
                theme === 'dark' 
                  ? 'bg-gray-800 border-gray-700 hover:shadow-gray-800/50' 
                  : 'bg-white border-gray-100'
              } border`}>
                <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${feature.color}`}></div>
                
                <div className="relative flex flex-col items-center h-full">
                  {/* Icon with gradient border */}
                  <div className={`mb-6 p-1 rounded-full bg-gradient-to-tr ${feature.color}`}>
                    <div className={`p-3 rounded-full ${
                      theme === 'dark' ? 'bg-white' : 'bg-white'
                    }`}>
                      <div className="w-10 h-10 relative">
                        <Image
                          src={feature.icon}
                          alt={feature.title}
                          fill
                          className="object-contain"
                          quality={100}
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className={`text-center text-2xl font-bold mb-3 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                    {feature.title}
                  </h3>
                  <p className={`text-center ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated CTA Button */}
        <motion.div
          variants={item}
          className="mt-20 text-center"
        >
          <button className={`px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-600 text-white font-medium rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-md ${
            theme === 'dark' ? 'hover:shadow-amber-500/20' : 'hover:shadow-yellow-200/50'
          }`}>
            Explore Our Programs
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default About