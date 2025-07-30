import Image from 'next/image'
import React from 'react'

const Client = () => {
      const clients = ["Shell", "Quora", "Julius Bär", "FICCI", "Asian Paints", "MARUTI SUZUKI", "ASHOK LEYLAND", "HYUNDAI"]
  return (
    <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">OUR CLIENTS</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
            {clients.map((client, index) => (
              <div key={index} className="text-center">
                <Image
                  src={`/placeholder.svg?height=60&width=120&text=${client}`}
                  alt={client}
                  width={120}
                  height={60}
                  className="mx-auto grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Client