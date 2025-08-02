import React, { useState } from 'react';
import { Button } from './ui/button';
import { MessageCircle, X, Send } from 'lucide-react';
import { motion } from "framer-motion";
const QuickResponse = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Bubble */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="bg-white rounded-xl shadow-xl border border-gray-200 w-80 mb-4 overflow-hidden"
        >
          {/* Chat Header */}
          <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <MessageCircle className="h-5 w-5" />
              <h3 className="font-semibold">Quick Response</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Chat Content */}
          <div className="p-4">
            <p className="text-sm text-gray-600 mb-4">
              Hi there! How can we help you today?
            </p>
            
            {/* Quick Action Buttons */}
            <div className="space-y-2">
              <Button 
                variant="outline" 
                className="w-full justify-start text-left text-sm"
              >
                Get pricing information
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start text-left text-sm"
              >
                Schedule a consultation
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start text-left text-sm"
              >
                Ask about our services
              </Button>
            </div>
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-200 p-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Type your message..."
                className="w-full rounded-lg border border-gray-300 px-4 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <Button 
                size="sm" 
                className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 bg-amber-500 hover:bg-amber-600"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Floating Button */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button 
          onClick={() => setIsOpen(!isOpen)}
          className={`rounded-full p-4 shadow-lg transition-all ${isOpen ? 'bg-amber-500 hover:bg-amber-600' : 'bg-gray-800 hover:bg-gray-900'}`}
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