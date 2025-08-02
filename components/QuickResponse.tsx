import React, { useState } from 'react';
import { Button } from './ui/button';
import { MessageCircle, X, Send } from 'lucide-react';
import { motion } from "framer-motion";

const QuickResponse = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-18 right-6 z-50 flex flex-col items-end">
      {/* Chat Bubble */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 w-80 overflow-hidden mb-4"
        >
          {/* Animated Chat Header */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="bg-gray-800 dark:bg-gray-900 text-white p-4 text-center"
          >
            <motion.h3 
              className="font-semibold text-lg"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: 'spring',
                stiffness: 500,
                damping: 15,
                delay: 0.3
              }}
            >
              Quick Response!
            </motion.h3>
            <motion.div 
              className="w-16 h-1 bg-amber-400 mx-auto mt-2 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                delay: 0.4,
                duration: 0.3,
                type: 'spring',
                stiffness: 300
              }}
            />
          </motion.div>

          {/* Chat Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="p-4"
          >
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Hi there! How can we help you today?
            </p>
            
            {/* Quick Action Buttons with staggered animation */}
            <div className="space-y-2">
              {['Get pricing information', 'Schedule a consultation', 'Ask about our services'].map((text, i) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                >
                  <Button 
                    variant="outline" 
                    className="w-full justify-start text-left text-sm dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-600"
                  >
                    {text}
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Input Area */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="border-t border-gray-200 dark:border-gray-700 p-4"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="speakin..."
                className="w-full rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
              />
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="sm" 
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 bg-amber-500 hover:bg-amber-600 dark:bg-amber-600 dark:hover:bg-amber-700"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Floating Toggle Button */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button 
          onClick={() => setIsOpen(!isOpen)}
          className={`rounded-full p-4 shadow-lg transition-all ${isOpen ? 'bg-amber-500 hover:bg-amber-600 dark:bg-amber-600 dark:hover:bg-amber-700' : 'bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-800'}`}
        >
          {isOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <MessageCircle className="h-6 w-6 text-white" />
          )}
        </Button>
      </motion.div>
    </div>
  );
};

export default QuickResponse;