import { BookOpen, Users, ArrowRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import Link from "next/link";

const Experience = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState("boardMembers");

  // Sample data
  const oneOnOneCoaches = [
    { name: "Saydujjaman", role: "Trainers Association of Bangladesh (TRAINERS)", image: "/Members/Saydujjaman.jpg" },
    { name: "Rubaiyat Jahan Lubna", role: "Trainers Association of Bangladesh (TRAINERS)", image: "/Members/RubaiyatJahanLubna.png" },
    { name: "Rawnok Jahan", role: "Trainers Association of Bangladesh (TRAINERS)", image: "/Members/RawnokJahan.jpg" },
  ];

  const boardMembers = [
    { name: "K M Hasan Ripon", role: "President & Founding Member", image: "/BoardMembers/KM-Hasan.jpg" },
    { name: "Yousuf Efti", role: "Founder & Executive Vice President", image: "/BoardMembers/Yousuf-Efti.jpg" },
    { name: "Mohammad Morad Hossain", role: "Vice president & Founding Member", image: "/BoardMembers/MOhammad-Morad-Hossain.jpg" },
    { name: "Zia Uddin Ahmad", role: "General Secretary & Founding Member", image: "/BoardMembers/Zia-Uddin.jpg" },
    { name: "Del H Khan", role: "Teasurer & Founding Member", image: "/BoardMembers/Del-H-Khan.jpg" },
    { name: "Laila Naznin", role: "Director Collaboration and Outreach & Founding Member", image: "/BoardMembers/laila-Naznin.jpg" },
    { name: "Zia Uddin Mahmud", role: "Director Strategy and Inovation & Founding Member", image: "/BoardMembers/Zia-Uddin-Mahmud.jpg" },
  ];

  return (
    <section className={`relative py-20 overflow-hidden ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-gradient-to-r from-amber-100 to-yellow-100 dark:from-amber-900/30 dark:to-yellow-800/30 mb-6">
            <span className="text-sm font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Our Leadership
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-amber-600 mb-6">
            Meet Our Team
          </h2>
          
          <p className={`max-w-2xl mx-auto text-lg md:text-xl leading-relaxed ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Get to know the passionate professionals driving our mission forward.
          </p>
        </motion.div>

        {/* Modern Tab Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <div className={`inline-flex p-1 rounded-xl shadow-inner ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
          }`}>
            <button
              onClick={() => setActiveTab('boardMembers')}
              className={`px-8 py-3 rounded-lg flex items-center space-x-3 transition-all ${
                activeTab === 'boardMembers'
                  ? theme === 'dark'
                    ? 'bg-gray-700 shadow-lg text-amber-400'
                    : 'bg-white shadow-lg text-amber-600'
                  : theme === 'dark'
                    ? 'text-gray-300 hover:bg-gray-700'
                    : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <BookOpen className={`w-5 h-5 ${
                activeTab === 'boardMembers' ? 'text-amber-600' : (
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                )
              }`} />
              <span className="font-medium">Board Members</span>
            </button>
            <button
              onClick={() => setActiveTab('oneOnOne')}
              className={`px-8 py-3 rounded-lg flex items-center space-x-3 transition-all ${
                activeTab === 'oneOnOne'
                  ? theme === 'dark'
                    ? 'bg-gray-700 shadow-lg text-amber-400'
                    : 'bg-white shadow-lg text-amber-600'
                  : theme === 'dark'
                    ? 'text-gray-300 hover:bg-gray-700'
                    : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Users className={`w-5 h-5 ${
                activeTab === 'oneOnOne' ? 'text-amber-600' : (
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                )
              }`} />
              <span className="font-medium">All Members</span>
            </button>
          </div>
        </motion.div>

        {/* Enhanced Professional Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {(activeTab === 'oneOnOne' ? oneOnOneCoaches : boardMembers).map((person, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className={`h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border ${
                theme === 'dark'
                  ? 'bg-gray-800 border-gray-700 hover:border-amber-500/30'
                  : 'bg-white border-gray-100 hover:border-amber-200'
              }`}>
                {/* Image with gradient overlay */}
                <div className="aspect-[3/4] relative">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    priority={index < 4} // Only prioritize first 4 images
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${
                    theme === 'dark' ? 'from-black/70 via-black/30' : 'from-black/50 via-black/20'
                  } to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                </div>
                
                {/* Card content */}
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>{person.name}</h3>
                  <p className={`text-sm ${
                    theme === 'dark' ? 'text-amber-400' : 'text-amber-600'
                  } font-medium`}>{person.role}</p>
                  
                  {/* Social links (hidden until hover) */}
                  <div className="flex justify-between items-center">
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-3">
                    <button className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center hover:bg-amber-100 dark:hover:bg-amber-900/50 transition-colors">
                      <svg className="w-4 h-4 text-gray-600 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                    </button>
                    <button className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center hover:bg-amber-100 dark:hover:bg-amber-900/50 transition-colors">
                      <svg className="w-4 h-4 text-gray-600 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </button>
                  </div>
                  <Link href="/TrainerProfile" passHref>
                    <Button
                      variant="outline"
                      className={`${
                        theme === 'dark' ? 'border-gray-600 hover:bg-gray-700' : 'border-gray-300 hover:bg-gray-100'
                      }`}
                    >
                      View Profile
                    </Button>
                    </Link>
                  </div>
                </div>
               
                {/* Decorative corner element */}
                <div className={`absolute top-0 right-0 w-16 h-16 ${
                  theme === 'dark' ? 'bg-amber-400' : 'bg-amber-500'
                } opacity-10 group-hover:opacity-20 transition-opacity duration-300 -z-10`} />
              </div>
              
            </motion.div>
          ))}
        </div>

        {/* Enhanced CTA Button */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link href="/members" passHref>
          <Button 
            size="lg"
            className="relative overflow-hidden group px-8 py-6 text-lg font-medium"
          >
            <span className="relative z-10 flex items-center">
              Explore {activeTab === 'oneOnOne' ? 'All Members' : 'Our Board'}
              <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-500 opacity-100 group-hover:from-amber-600 group-hover:to-yellow-600 transition-all duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;