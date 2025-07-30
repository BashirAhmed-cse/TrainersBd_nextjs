import { BookOpen, Users } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const Experience = () => {
  return (
    <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">EXPERIENCE TRANSFORMATION</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get access to world's top expert, coach and thought leaders via one-on-one coaching or group learning
              session.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-yellow-600" />
                  </div>
                  <span className="text-xl font-semibold">One-on-one Coaching</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-xl font-semibold">Group Learning</span>
                </div>
              </div>
              <Button className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-8 py-3">
                Explore 1000+ 1-1 Coaches
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <Image
                src="/placeholder.svg?height=200&width=150&text=Coach+1"
                alt="Coach 1"
                width={150}
                height={200}
                className="rounded-lg object-cover"
              />
              <Image
                src="/placeholder.svg?height=200&width=150&text=Coach+2"
                alt="Coach 2"
                width={150}
                height={200}
                className="rounded-lg object-cover"
              />
              <Image
                src="/placeholder.svg?height=200&width=150&text=Coach+3"
                alt="Coach 3"
                width={150}
                height={200}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>
  )
}

export default Experience