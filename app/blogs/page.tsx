'use client';

import { useState } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarDays, Clock, ArrowRight, Search, Tag } from 'lucide-react';

const page = () => {
  const { theme } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  // Sample blog data
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Corporate Training in Bangladesh',
      excerpt: 'Exploring how digital transformation is reshaping professional development in the corporate sector.',
      date: '2023-10-15',
      readTime: '5 min read',
      category: 'Corporate',
      image: '/blog/corporate-training.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Essential Soft Skills for Modern Trainers',
      excerpt: 'Discover the top 5 soft skills every trainer needs to master in 2023.',
      date: '2023-09-28',
      readTime: '4 min read',
      category: 'Skills',
      image: '/blog/soft-skills.jpg',
      featured: true
    },
    {
      id: 3,
      title: 'Digital Tools for Effective Online Training',
      excerpt: 'A comprehensive guide to the best digital tools for creating engaging online training sessions.',
      date: '2023-09-10',
      readTime: '6 min read',
      category: 'Technology',
      image: '/blog/digital-tools.jpg'
    },
    {
      id: 4,
      title: 'Building a Successful Training Business',
      excerpt: 'Practical strategies for establishing and growing your training consultancy.',
      date: '2023-08-22',
      readTime: '7 min read',
      category: 'Business',
      image: '/blog/training-business.jpg'
    },
    {
      id: 5,
      title: 'The Psychology of Adult Learning',
      excerpt: 'Understanding how adults learn differently and how to design effective training programs.',
      date: '2023-08-05',
      readTime: '8 min read',
      category: 'Education',
      image: '/blog/adult-learning.jpg'
    },
    {
      id: 6,
      title: 'Measuring Training Effectiveness',
      excerpt: 'Key metrics and methods to evaluate the impact of your training programs.',
      date: '2023-07-18',
      readTime: '5 min read',
      category: 'Corporate',
      image: '/blog/training-effectiveness.jpg'
    }
  ];

  const categories = ['All', 'Corporate', 'Skills', 'Technology', 'Business', 'Education'];

  // Filter posts based on search and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Hero Section */}
      <div className={`relative py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-amber-500">
              TRAINERS Blog
            </span>
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Insights, trends and best practices for professional trainers and educators
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter */}
        <div className={`mb-12 p-6 rounded-xl shadow-md ${
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
                placeholder="Search articles..."
                className={`block w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  theme === 'dark' 
                    ? 'bg-gray-700 border-gray-600 text-white' 
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-blue-600 to-amber-500 text-white'
                      : theme === 'dark'
                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Posts */}
        {activeCategory === 'All' && (
          <div className="mb-16">
            <h2 className={`text-2xl font-bold mb-8 flex items-center ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              <span className="w-2 h-8 bg-gradient-to-b from-blue-500 to-amber-500 rounded-full mr-3"></span>
              Featured Articles
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map(post => (
                <div 
                  key={post.id}
                  className={`group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                  }`}
                >
                  <div className="relative h-64">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${
                        theme === 'dark' ? 'bg-gray-700 text-amber-400' : 'bg-amber-100 text-amber-800'
                      }`}>
                        {post.category}
                      </span>
                      <h3 className={`text-xl font-bold mb-2 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        {post.title}
                      </h3>
                      <div className={`flex items-center text-sm ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-500'
                      }`}>
                        <CalendarDays className="w-4 h-4 mr-1" />
                        <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className={`mb-4 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {post.excerpt}
                    </p>
                    <Link 
                      href={`/blog/${post.id}`}
                      className={`inline-flex items-center font-medium ${
                        theme === 'dark' ? 'text-amber-400 hover:text-amber-300' : 'text-blue-600 hover:text-blue-500'
                      }`}
                    >
                      Read more <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Posts */}
        <div>
          <h2 className={`text-2xl font-bold mb-8 flex items-center ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            <span className="w-2 h-8 bg-gradient-to-b from-blue-500 to-amber-500 rounded-full mr-3"></span>
            {activeCategory === 'All' ? 'Latest Articles' : `${activeCategory} Articles`}
          </h2>
          
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map(post => (
                <div 
                  key={post.id}
                  className={`group rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                  }`}
                >
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mb-3 ${
                      theme === 'dark' ? 'bg-gray-700 text-amber-400' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {post.category}
                    </span>
                    <h3 className={`text-lg font-bold mb-2 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {post.title}
                    </h3>
                    <p className={`text-sm mb-4 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {post.excerpt}
                    </p>
                    <div className={`flex items-center justify-between text-sm ${
                      theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                    }`}>
                      <div className="flex items-center">
                        <CalendarDays className="w-4 h-4 mr-1" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={`text-center py-16 rounded-xl ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}>
              <div className="mx-auto h-24 w-24 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 mb-6">
                <Search className="h-12 w-12" />
              </div>
              <h3 className={`text-xl font-medium ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>No articles found</h3>
              <p className={`mt-2 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              }`}>
                Try adjusting your search or filter to find what you're looking for.
              </p>
              <button 
                className="mt-6 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-amber-500 text-white"
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('All');
                }}
              >
                Reset filters
              </button>
            </div>
          )}
        </div>

        {/* Newsletter CTA */}
        <div className={`mt-16 rounded-xl p-8 ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-gradient-to-r from-blue-50 to-amber-50'
        }`}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className={`text-2xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Stay Updated with Our Latest Articles
            </h2>
            <p className={`mb-6 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Subscribe to our newsletter to receive the latest training tips, industry insights, and blog updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className={`flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  theme === 'dark' 
                    ? 'bg-gray-700 border-gray-600 text-white' 
                    : 'bg-white border-gray-300'
                } border`}
              />
              <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-amber-500 text-white font-medium hover:from-blue-700 hover:to-amber-600 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
