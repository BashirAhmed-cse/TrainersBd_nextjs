import React from 'react'
import { Button } from './ui/button'

const Header = () => {
  return (
     <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-3xl font-bold text-gray-900">
                speak<span className="text-yellow-500">în</span>
              </span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium text-sm">
                FIND A COACH
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium text-sm">
                SPEAKER BUREAU
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium text-sm">
                DIALOGUES
              </a>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-6 text-sm">
                CONTACT US
              </Button>
            </nav>

            {/* Country Selector */}
            <div className="flex items-center space-x-2">
              <div className="w-6 h-4 bg-red-500 relative">
                <div className="absolute top-0 left-0 w-6 h-2 bg-red-500"></div>
                <div className="absolute bottom-0 left-0 w-6 h-2 bg-white"></div>
              </div>
              <span className="text-sm font-medium">SINGAPORE</span>
              <span className="text-gray-400">▾</span>
            </div>
          </div>
        </div>
      </header>
  )
}

export default Header