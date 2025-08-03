'use client';

import { useState } from 'react';
import { useTheme } from 'next-themes';
import { Search, Filter, MapPin, Star, ChevronDown, ChevronUp, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const page = () => {
  const { theme } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [showFilters, setShowFilters] = useState(false);
  const [ratingFilter, setRatingFilter] = useState(0);

  // Sample data
  const trainers = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      expertise: 'Leadership Development',
      category: 'Corporate',
      location: 'Dhaka',
      rating: 4.8,
      sessions: 120,
      image: '/trainers/sarah-johnson.jpg',
      bio: '10+ years experience in executive coaching and leadership training'
    },
    {
      id: 2,
      name: 'Michael Chen',
      expertise: 'Digital Marketing',
      category: 'Technology',
      location: 'Chittagong',
      rating: 4.5,
      sessions: 85,
      image: '/trainers/michael-chen.jpg',
      bio: 'Certified Google Trainer with expertise in digital transformation'
    },
    {
      id: 3,
      name: 'Fatima Rahman',
      expertise: 'Communication Skills',
      category: 'Soft Skills',
      location: 'Dhaka',
      rating: 4.9,
      sessions: 150,
      image: '/trainers/fatima-rahman.jpg',
      bio: 'Award-winning communication specialist with global experience'
    },
    {
      id: 4,
      name: 'David Wilson',
      expertise: 'Project Management',
      category: 'Corporate',
      location: 'Sylhet',
      rating: 4.6,
      sessions: 95,
      image: '/trainers/david-wilson.jpg',
      bio: 'PMP certified with 15 years of corporate training experience'
    },
    {
      id: 5,
      name: 'Aisha Khan',
      expertise: 'Data Science',
      category: 'Technology',
      location: 'Dhaka',
      rating: 4.7,
      sessions: 110,
      image: '/trainers/aisha-khan.jpg',
      bio: 'Data scientist and machine learning expert'
    },
    {
      id: 6,
      name: 'Robert Smith',
      expertise: 'Sales Training',
      category: 'Business',
      location: 'Khulna',
      rating: 4.4,
      sessions: 75,
      image: '/trainers/robert-smith.jpg',
      bio: 'Helped 100+ businesses improve their sales performance'
    }
  ];

  const categories = ['All', 'Corporate', 'Technology', 'Soft Skills', 'Business', 'Education'];
  const locations = ['All', 'Dhaka', 'Chittagong', 'Sylhet', 'Khulna', 'Rajshahi'];

  // Filter trainers based on search and filters
  const filteredTrainers = trainers.filter(trainer => {
    const matchesSearch = trainer.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         trainer.expertise.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || trainer.category === selectedCategory;
    const matchesLocation = selectedLocation === 'All' || trainer.location === selectedLocation;
    const matchesRating = trainer.rating >= ratingFilter;
    
    return matchesSearch && matchesCategory && matchesLocation && matchesRating;
  });

  const clearFilters = () => {
    setSelectedCategory('All');
    setSelectedLocation('All');
    setRatingFilter(0);
    setSearchQuery('');
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Hero Section */}
      <div className={`py-16 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-amber-500">
              Find Your Perfect Trainer
            </span>
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Connect with certified professionals across various industries and specialties
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className={`rounded-xl shadow-md p-6 mb-8 ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-white'
        }`}>
          {/* Search Bar */}
          <div className={`relative mb-6 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5" />
            </div>
            <input
              type="text"
              placeholder="Search trainers by name or expertise..."
              className={`block w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                theme === 'dark' 
                  ? 'bg-gray-700 border-gray-600 text-white' 
                  : 'bg-white border-gray-300 text-gray-900'
              }`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Filter Toggle */}
          <div className="flex justify-between items-center mb-4">
            <h3 className={`font-medium ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Filters
            </h3>
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center px-3 py-1 rounded-lg ${
                theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
              }`}
            >
              <Filter className="w-4 h-4 mr-2" />
              {showFilters ? (
                <>
                  <span className="mr-1">Hide</span>
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  <span className="mr-1">Show</span>
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          </div>

          {/* Expanded Filters */}
          {showFilters && (
            <div className={`p-4 rounded-lg ${
              theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'
            }`}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Category Filter */}
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Category
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {categories.map(category => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-3 py-2 rounded-lg text-sm text-center ${
                          selectedCategory === category
                            ? 'bg-gradient-to-r from-blue-600 to-amber-500 text-white'
                            : theme === 'dark'
                              ? 'bg-gray-600 text-gray-300 hover:bg-gray-500'
                              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Location Filter */}
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Location
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {locations.map(location => (
                      <button
                        key={location}
                        onClick={() => setSelectedLocation(location)}
                        className={`px-3 py-2 rounded-lg text-sm text-center ${
                          selectedLocation === location
                            ? 'bg-gradient-to-r from-blue-600 to-amber-500 text-white'
                            : theme === 'dark'
                              ? 'bg-gray-600 text-gray-300 hover:bg-gray-500'
                              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        {location}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Rating Filter */}
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Minimum Rating
                  </label>
                  <div className="flex items-center space-x-2">
                    {[0, 3, 4, 4.5].map(rating => (
                      <button
                        key={rating}
                        onClick={() => setRatingFilter(rating)}
                        className={`flex items-center px-3 py-2 rounded-lg text-sm ${
                          ratingFilter === rating
                            ? 'bg-gradient-to-r from-blue-600 to-amber-500 text-white'
                            : theme === 'dark'
                              ? 'bg-gray-600 text-gray-300 hover:bg-gray-500'
                              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        <Star className="w-4 h-4 mr-1 fill-current" />
                        {rating === 0 ? 'Any' : rating.toFixed(1) + '+'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Clear Filters */}
              {(selectedCategory !== 'All' || selectedLocation !== 'All' || ratingFilter > 0) && (
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={clearFilters}
                    className={`flex items-center text-sm ${
                      theme === 'dark' ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'
                    }`}
                  >
                    <X className="w-4 h-4 mr-1" />
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className={`mb-6 ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
        }`}>
          Showing {filteredTrainers.length} {filteredTrainers.length === 1 ? 'trainer' : 'trainers'}
          {(selectedCategory !== 'All' || selectedLocation !== 'All' || ratingFilter > 0) && (
            <span className="ml-2">
              matching your filters
            </span>
          )}
        </div>

        {/* Trainers Grid */}
        {filteredTrainers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTrainers.map(trainer => (
              <div 
                key={trainer.id}
                className={`rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <div className="relative h-48">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-amber-400 fill-current" />
                      <span className="ml-1 text-white font-medium">
                        {trainer.rating.toFixed(1)}
                      </span>
                      <span className="mx-2 text-white">•</span>
                      <span className="text-white text-sm">
                        {trainer.sessions}+ sessions
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-1 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {trainer.name}
                  </h3>
                  <p className={`text-sm mb-2 ${
                    theme === 'dark' ? 'text-amber-400' : 'text-amber-600'
                  }`}>
                    {trainer.expertise}
                  </p>
                  <div className={`flex items-center text-sm mb-4 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{trainer.location}</span>
                  </div>
                  <p className={`text-sm mb-6 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {trainer.bio}
                  </p>
                  <div className="flex justify-between">
                    <Button
                      variant="outline"
                      className={`${
                        theme === 'dark' ? 'border-gray-600 hover:bg-gray-700' : 'border-gray-300 hover:bg-gray-100'
                      }`}
                    >
                      View Profile
                    </Button>
                    <Button className="bg-gradient-to-r from-blue-600 to-amber-500 hover:from-blue-700 hover:to-amber-600">
                      Contact
                    </Button>
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
            }`}>No trainers found</h3>
            <p className={`mt-2 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
            }`}>
              Try adjusting your search or filters
            </p>
            <button 
              className="mt-6 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-amber-500 text-white"
              onClick={clearFilters}
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
