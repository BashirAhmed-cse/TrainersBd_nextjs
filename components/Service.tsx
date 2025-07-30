import React from 'react'
import { Card, CardContent } from './ui/card'
import { BookOpen, Mic, Users } from 'lucide-react'

const Service = () => {
  return (
    <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-3 gap-8">
                {/* 1-ON-1 COACHING */}
                <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                  <CardContent className="space-y-4">
                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                      <Users className="w-8 h-8 text-yellow-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">1-ON-1 COACHING</h3>
                  </CardContent>
                </Card>
    
                {/* GROUP LEARNING */}
                <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                  <CardContent className="space-y-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                      <BookOpen className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">GROUP LEARNING</h3>
                  </CardContent>
                </Card>
    
                {/* SPEAKER BUREAU */}
                <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                  <CardContent className="space-y-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                      <Mic className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">SPEAKER BUREAU</h3>
                    <p className="text-gray-600">
                      Get access to a highly curated network of 18000+ global experts and thought leaders for your
                      organisational learning needs.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
  )
}

export default Service