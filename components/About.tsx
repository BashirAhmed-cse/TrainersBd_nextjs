import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const About = () => {
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
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
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
              ABOUT SPEAKIN
            </span>
          </motion.h2>
          
          {/* Animated Paragraph */}
          <motion.div 
            variants={item}
            className="relative max-w-4xl mx-auto"
          >
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed md:leading-loose">
              Speakin is Asia's largest digital campus for your leaders and their teams to book 1:1 Coaching and group
              speaker sessions. Helping your learners shortcut their way to success, the sessions are delivered by a
              highly curated network of global CxOs, SMEs, Thought Leaders and Academicians - practitioners who have
              been-there-done-that.
            </p>
            
            {/* Gradient Accent Line */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full opacity-80"></div>
          </motion.div>
        </motion.div>

        {/* Feature Highlights with Same Color Theme */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          initial="hidden"
          animate="visible"
          variants={container}
        >
          {[
            {
              title: "Expert Network",
              description: "Access to 18,000+ industry leaders and practitioners",
              icon: "/icons/expert.png",
              color: "from-amber-400 to-amber-500"
            },
            {
              title: "Personalized Coaching",
              description: "1,000+ certified coaches for 1-on-1 sessions",
              icon: "/icons/coach.png",
              color: "from-blue-400 to-blue-500"
            },
            {
              title: "Diverse Formats",
              description: "Live sessions, videos, podcasts and blogs available",
              icon: "/icons/sessions.png",
              color: "from-purple-400 to-purple-500"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative h-full"
            >
              <div className="h-full bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden p-8">
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${feature.color}"></div>
                
                <div className="relative flex flex-col items-center h-full">
                  {/* Icon with gradient border */}
                  <div className="mb-6 p-1 rounded-full bg-gradient-to-tr ${feature.color}">
                    <div className="bg-white p-3 rounded-full">
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
                  <h3 className={`text-2xl font-bold mb-3 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-center">
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
          <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-600 text-white font-medium rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-md hover:shadow-yellow-200/50">
            Explore Our Programs
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default About