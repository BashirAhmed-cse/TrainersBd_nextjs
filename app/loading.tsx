"use client";
import { Loader } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from 'framer-motion'

export default function Loading() {
  const { theme } = useTheme();

  return (
    <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center ${
      theme === 'dark' ? 'bg-gray-900/80' : 'bg-white/80'
    }`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col items-center justify-center space-y-4"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 1 
          }}
        >
          <Loader className={`${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`} size={48} />
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={`text-lg font-medium ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          Loading content...
        </motion.p>
        
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: 160 }}
          transition={{ delay: 0.2, duration: 1.5, repeat: Infinity }}
          className={`h-1 rounded-full ${
            theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
          }`}
        >
          <div className={`h-full w-16 rounded-full ${
            theme === 'dark' ? 'bg-amber-400' : 'bg-amber-500'
          }`} />
        </motion.div>
      </motion.div>
    </div>
  );
}