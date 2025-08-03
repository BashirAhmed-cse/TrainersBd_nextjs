"use client";

import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Menu, X, User, ChevronDown, Play, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import Link from 'next/link';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const navItems = [
    { name: 'About', id: 'about-section' },
    { name: 'Contact', id: 'contact-section' },
    { name: 'Member', id: 'member-section' },
    { name: 'Find a Trainer', id: 'learn-section' }
  ];

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  if (!mounted) return null;

  return (
    <>
      {/* Top Announcement Bar */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className={`text-white text-center py-2 text-sm font-medium ${
        theme === "dark" 
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" 
          : "bg-gradient-to-r from-amber-500 to-pink-500"
      }`}
      >
        Join our upcoming masterclass on effective communication —{' '}
        <a href="#" className="underline hover:text-amber-100 transition-colors ml-1">
          Register now
        </a>
      </motion.div>

      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-sm py-1' : 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm py-2'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <Link href="/" passHref>
              <Image
  src={theme === "dark" ? "/trainer_logo.png" : "/trainer_logo.png"}
  alt="Logo"
  width={isScrolled ? 120 : 150}
  height={isScrolled ? 40 : 50}
  className={`transition-all duration-300 ${isScrolled ? 'h-8' : 'h-10'}`}
  priority
/>
</Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <Button 
                    variant="ghost" 
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-700 dark:text-gray-300 hover:text-white dark:hover:text-white font-medium text-sm px-4 py-2 rounded-lg hover:bg-gradient-to-r from-amber-500 to-pink-500 dark:hover:bg-gray-800 transition-all"
                  >
                    {item.name}
                  </Button>
                </motion.div>
              ))}
            </nav>

            {/* Right Side Buttons */}
            <motion.div 
              className="hidden lg:flex items-center space-x-3 ml-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {/* Theme Toggle */}
              <Button
                variant="outline"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-gray-700 dark:text-gray-300 hover:bg-amber-50/50 dark:hover:bg-gray-800"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>

              {/* Login Button */}
              <Link href="/login" passHref>
              <Button 
                variant="ghost" 
                className="text-gray-700 hover:text-white dark:text-gray-300 hover:bg-gradient-to-r from-amber-500 to-pink-500 dark:hover:bg-gray-800 font-medium px-4 rounded-lg flex items-center space-x-2 group"
                onClick={() => scrollToSection('login-section')}
              >
                <User className="h-4 w-4 text-amber-600 dark:text-amber-400 group-hover:text-white dark:group-hover:text-amber-300 transition-colors" />
                <span>Login</span>
              </Button>
              </Link>
              {/* Join Free Button */}
              <Link href="/membership-application" passHref>
              <Button 
                className="relative overflow-hidden group bg-gradient-to-r from-amber-500 to-pink-500 hover:from-amber-600 hover:to-pink-600 text-white font-medium px-6 rounded-lg shadow-sm hover:shadow-md transition-all"
                
              >
                <span className="relative z-10">Join Free</span>
                <span className="absolute inset-0 bg-gradient-to-r from-amber-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>
              </Link>
            </motion.div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center space-x-2">
              {/* Mobile Theme Toggle */}
              <Button
                variant="outline"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-gray-700 dark:text-gray-300 hover:bg-amber-50/50 dark:hover:bg-gray-800"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>

              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 dark:text-gray-300 hover:bg-amber-50/50 dark:hover:bg-gray-800 rounded-full"
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-100 dark:border-gray-800"
          >
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item, index) => (
                <motion.div 
                  key={item.name} 
                  className="border-b border-gray-100 dark:border-gray-800 last:border-0"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Button 
                    variant="ghost"
                    className="w-full justify-start text-gray-700 dark:text-gray-300 hover:bg-amber-50/50 dark:hover:bg-gray-800 py-3 text-base font-medium"
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.name}
                  </Button>
                </motion.div>
              ))}
              <motion.div 
                className="pt-4 space-y-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <Link href="/login" passHref>
                <Button 
                  variant="outline" 
                  className="w-full justify-center space-x-2 py-3 border-gray-300 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-800"
                  onClick={() => scrollToSection('login-section')}
                >
                  <User className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                  <span>Login</span>
                </Button>
                </Link>
                <Link href="/membership-application" passHref>
                <Button 
                  className="w-full justify-center bg-gradient-to-r from-amber-500 to-pink-500 hover:from-amber-600 hover:to-pink-600 text-white py-3"
                  onClick={() => scrollToSection('membership-section')}
                >
                  Join Free
                </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </header>
    </>
  );
};

export default Header;