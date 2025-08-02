import { BookOpen, Users, ArrowRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("boardMembers");

  // Sample data
  const oneOnOneCoaches = [
    { name: "Aditya Ghosh", role: "Former CEO, IndiGo", image: "/coaches/aditya-ghosh.jpg" },
    { name: "Richard Rekhy", role: "Ex-CEO, KPMG India", image: "/coaches/richard-rekhy.jpg" },
    { name: "Paul Dupuis", role: "CEO, Randstad Japan", image: "/coaches/paul-dupuis.jpg" },
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
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-amber-600">
              EXPERIENCE TRANSFORMATION
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get access to world's top experts via one-on-one coaching or group learning sessions.
          </p>
        </div>

        {/* Modern Tab Buttons */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-gray-100 p-1 rounded-xl shadow-inner">
            
            
            <button
              onClick={() => setActiveTab('boardMembers')}
              className={`px-8 py-3 rounded-lg flex items-center space-x-3 transition-all ${
                activeTab === 'boardMembers'
                  ? 'bg-white shadow-lg text-amber-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <BookOpen className={`w-5 h-5 ${activeTab === 'boardMembers' ? 'text-amber-600' : 'text-gray-500'}`} />
              <span className="font-medium">Board Members</span>
            </button>
            <button
              onClick={() => setActiveTab('oneOnOne')}
              className={`px-8 py-3 rounded-lg flex items-center space-x-3 transition-all ${
                activeTab === 'oneOnOne'
                  ? 'bg-white shadow-lg text-amber-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Users className={`w-5 h-5 ${activeTab === 'oneOnOne' ? 'text-amber-600' : 'text-gray-500'}`} />
              <span className="font-medium">All Members</span>
            </button>
          </div>
        </div>

        {/* Enhanced Professional Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8">
          {(activeTab === 'oneOnOne' ? oneOnOneCoaches : boardMembers).map((person, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="h-full bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-amber-100">
                {/* Image with gradient overlay */}
                <div className="aspect-[3/4] relative">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Card content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{person.name}</h3>
                  <p className="text-amber-600 font-medium">{person.role}</p>
                  
                  {/* Hidden hover content */}
                 
                </div>
                
                {/* Decorative corner element */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-amber-500 opacity-10 group-hover:opacity-20 transition-opacity duration-300 -z-10" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced CTA Button */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Button className="relative overflow-hidden group bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white px-10 py-4 text-lg font-medium shadow-lg hover:shadow-xl">
            <span className="relative z-10">
              Explore {activeTab === 'oneOnOne' ? 'All Coaches' : 'Our Board'}
            </span>
            <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;