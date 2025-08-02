import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useDraggable } from 'react-use-draggable-scroll'

const Client = () => {
  const clients = [
    { name: "Shell", logo: "/clients/shell.png" },
    { name: "Quora", logo: "/clients/quora.png" },
    { name: "FICCI", logo: "/clients/ficci.png" },
    { name: "MARUTI SUZUKI", logo: "/clients/maruti-suzuki.png" },
    { name: "ASHOK LEYLAND", logo: "/clients/ashok-leyland.png" },
    { name: "HYUNDAI", logo: "/clients/hyundai.png" },
    { name: "BCG", logo: "/clients/bcg.png" },
    { name: "ISB", logo: "/clients/isb.png" },
    { name: "Gluf", logo: "/clients/gluf.png" },
    { name: "HDFC ERGO", logo: "/clients/hdfc.png" },
    { name: "Asian Paints", logo: "/clients/asian-paints.png" },
    { name: "Julius Bär", logo: "/clients/julius-baer.png" }
  ]

  // Duplicate clients for infinite loop effect
  const duplicatedClients = [...clients, ...clients]
  const containerRef = useRef(null)
  const { events } = useDraggable(containerRef)
  const [autoPlay, setAutoPlay] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-scroll effect
  useEffect(() => {
    if (!autoPlay) return
    
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % clients.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [autoPlay, clients.length])

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
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-8xl mx-auto px-5 sm:px-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-amber-600">
              OUR CLIENTS
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Trusted by industry leaders worldwide
          </p>
        </motion.div>

        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
        >
          {/* Gradient fade effect on sides */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <motion.div 
            ref={containerRef}
            {...events}
            className="flex gap-8 py-4 cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ right: 0, left: -1000 }}
            animate={{
              x: -currentIndex * (120 + 32) // item width + gap
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30
            }}
          >
            {duplicatedClients.map((client, index) => (
              <motion.div
                key={`${client.name}-${index}`}
                variants={item}
                className="flex-shrink-0 w-[120px]"
              >
                <div className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-amber-100">
                  <div className="relative h-16 w-full">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      className="object-contain object-center grayscale hover:grayscale-0 transition-all duration-500"
                      quality={100}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center mt-8 gap-2">
          {clients.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${currentIndex === index ? 'bg-amber-500 w-6' : 'bg-gray-300'}`}
              aria-label={`Go to client ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Client