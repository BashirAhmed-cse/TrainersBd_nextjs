import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Asia's Own
                <br />
                <span className="text-yellow-500">Learning Platform</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Get access to world's top coaches and mentors
                <br />
                for individuals and businesses.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=500&text=Professional+Coach"
                alt="Professional coach"
                width={500}
                height={500}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>
  )
}

export default Hero