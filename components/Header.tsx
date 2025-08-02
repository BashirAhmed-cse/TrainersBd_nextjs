import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`bg-white shadow-sm sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className={`font-bold text-gray-900 transition-all duration-300 ${isScrolled ? 'text-2xl' : 'text-3xl'}`}>
              speak<span className="text-yellow-500">in</span>
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium text-sm">
              FIND A COACH
            </a>
            <span className="text-gray-300">•</span>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium text-sm">
              SPEAKER BUREAU
            </a>
            <span className="text-gray-300">•</span>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium text-sm">
              DIALOGUES
            </a>
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-6 text-sm">
              CONTACT US
            </Button>
          </nav>

          {/* Country Selector */}
         
        </div>
      </div>
    </header>
  );
};

export default Header;