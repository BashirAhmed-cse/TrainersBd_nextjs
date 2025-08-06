"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { Search, Filter, ArrowRight, Users, Award, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const page = () => {
  const { theme } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  // Sample member data
  const allMembers = [
    // Board Members
    { 
      id: 1,
      name: "K M Hasan Ripon", 
      role: "President & Founding Member", 
      image: "/BoardMembers/KM-Hasan.jpg",
      category: "board",
      expertise: ["Leadership", "Public Speaking"],
      joined: "2020"
    },
    { 
      id: 2,
      name: "Yousuf Efti", 
      role: "Founder & Executive Vice President", 
      image: "/BoardMembers/Yousuf-Efti.jpg",
      category: "board",
      expertise: ["Entrepreneurship", "Training"],
      joined: "2020"
    },
    // Add other board members...

    // Regular Members
    { 
      id: 8,
      name: "Saydujjaman", 
      role: "Certified Trainer", 
      image: "/Members/Saydujjaman.jpg",
      category: "trainer",
      expertise: ["Soft Skills", "Communication"],
      joined: "2021"
    },
    { 
      id: 9,
      name: "Rubaiyat Jahan Lubna", 
      role: "Professional Speaker", 
      image: "/Members/RubaiyatJahanLubna.png",
      category: "speaker",
      expertise: ["Women Empowerment", "Education"],
      joined: "2021"
    },
    // Add more members...
  ];

  // Filter members based on search and active filter
  const filteredMembers = allMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         member.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'all' || member.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Members', icon: <Users className="w-4 h-4" /> },
    { id: 'board', name: 'Board Members', icon: <Award className="w-4 h-4" /> },
    { id: 'trainer', name: 'Trainers', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'speaker', name: 'Speakers', icon: <Users className="w-4 h-4" /> },
  ];

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Hero Section */}
      <section className={`relative py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-yellow-500">Members</span>
            </h1>
            <p className={`text-xl max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Meet the talented professionals who make up our diverse community of trainers and speakers.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`p-6 rounded-xl shadow-md ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search Bar */}
              <div className={`relative flex-grow max-w-2xl ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5" />
                </div>
                <input
                  type="text"
                  placeholder="Search members by name or expertise..."
                  className={`block w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                    theme === 'dark' 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Filter Buttons */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveFilter(category.id)}
                    className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeFilter === category.id
                        ? 'bg-amber-500 text-white'
                        : theme === 'dark'
                          ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.icon}
                    <span className="ml-2">{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Members Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredMembers.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {filteredMembers.map((member) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <div className={`h-full rounded-xl overflow-hidden shadow-lg transition-all ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                  }`}>
                    {/* Member Image */}
                    <div className="relative aspect-square">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${
                        theme === 'dark' ? 'from-black/60' : 'from-black/40'
                      } via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    </div>

                    {/* Member Info */}
                    <div className="p-6">
                      <h3 className={`text-xl font-bold mb-1 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>{member.name}</h3>
                      <p className={`text-sm ${
                        theme === 'dark' ? 'text-amber-400' : 'text-amber-600'
                      } font-medium mb-3`}>{member.role}</p>
                      
                      {/* Expertise Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {member.expertise.map((skill, index) => (
                          <span 
                            key={index}
                            className={`text-xs px-2 py-1 rounded-full ${
                              theme === 'dark' 
                                ? 'bg-gray-700 text-gray-300' 
                                : 'bg-gray-100 text-gray-700'
                            }`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Member Since */}
                      <div className='flex justify-between'>
                      <p className={`text-xs ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        Member since {member.joined}
                      </p>
                      <Link href="/TrainerProfile" passHref>
                    <Button
                      variant="outline"
                      className={` text-xs ${
                        theme === 'dark' ? 'border-gray-600 hover:bg-gray-700' : 'border-gray-300 hover:bg-gray-100'
                      }`}
                    >
                      View Profile
                    </Button>
                    </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className={`text-center py-16 rounded-xl ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}>
              <div className="mx-auto h-24 w-24 flex items-center justify-center rounded-full bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400 mb-6">
                <Search className="h-12 w-12" />
              </div>
              <h3 className={`text-xl font-medium ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>No members found</h3>
              <p className={`mt-2 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              }`}>
                Try adjusting your search or filter to find what you're looking for.
              </p>
              <Button 
                variant="ghost"
                className="mt-6"
                onClick={() => {
                  setSearchTerm('');
                  setActiveFilter('all');
                }}
              >
                Reset filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-16 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Ready to join our community?
          </h2>
          <p className={`text-xl max-w-3xl mx-auto mb-8 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Become part of Bangladesh's premier network of trainers and speakers.
          </p>
          <Link href="/membership-application" passHref>
          <Button size="lg" className="px-8 py-6 text-lg font-medium">
            Apply for Membership <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default page;