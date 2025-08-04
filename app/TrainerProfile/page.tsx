'use client';

import { Button } from '@/components/ui/button';
import { MapPin, Star, Calendar, Clock, Mail, Phone, Globe, ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import Image from 'next/image';

const page = () => {
  const router = useRouter();
  const { theme } = useTheme();

  // Sample trainer data - in a real app this would come from props or API
  const trainer = {
    id: 1,
    name: 'Laila Naznin',
    expertise: 'Leadership Development',
    category: 'Corporate',
    location: 'Dhaka',
    rating: 4.8,
    sessions: 120,
    image: '/BoardMembers/laila-Naznin.jpg',
    bio: '10+ years experience in executive coaching and leadership training',
    detailedBio: `Laila Naznin is a renowned leadership development specialist with over a decade of experience working with Fortune 500 companies and startups alike. Her unique approach combines psychological insights with practical business strategies to help leaders at all levels unlock their full potential.

    Prior to her training career, Laila served as HR Director at ABC Corporation where she implemented award-winning leadership programs. She holds an MBA from IBA and is certified in multiple coaching methodologies including ICF and Marshall Goldsmith's Stakeholder Centered Coaching.
    
    Her clients describe her sessions as "transformational" and "practical" with immediate applicability to real-world challenges.`,
    contact: {
      email: 'laila@example.com',
      phone: '+880 1711 123456',
      website: 'www.lailanaznin.com'
    },
    specialties: [
      'Executive Coaching',
      'Team Leadership',
      'Strategic Thinking',
      'Emotional Intelligence',
      'Change Management'
    ],
    certifications: [
      'ICF Certified Coach (PCC)',
      'Marshall Goldsmith Stakeholder Centered Coaching',
      'Hogan Assessment Certified',
      'MBTI Practitioner'
    ],
    experience: [
      {
        role: 'Senior Leadership Trainer',
        company: 'Leadership Partners BD',
        duration: '2018-Present'
      },
      {
        role: 'HR Director',
        company: 'ABC Corporation',
        duration: '2012-2018'
      },
      {
        role: 'Training Manager',
        company: 'XYZ Industries',
        duration: '2008-2012'
      }
    ],
    availability: [
      {
        day: 'Monday',
        time: '9:00 AM - 5:00 PM'
      },
      {
        day: 'Wednesday',
        time: '9:00 AM - 5:00 PM'
      },
      {
        day: 'Friday',
        time: '10:00 AM - 3:00 PM'
      }
    ],
    pricing: [
      {
        type: '1-on-1 Session',
        rate: '৳5,000/hour'
      },
      {
        type: 'Group Workshop',
        rate: '৳50,000/day'
      },
      {
        type: 'Corporate Training',
        rate: 'Contact for quote'
      }
    ]
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <button
          onClick={() => router.back()}
          className={`flex items-center px-4 py-2 rounded-lg ${
            theme === 'dark' ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-white text-gray-700 hover:bg-gray-100'
          } shadow-sm`}
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Back to Trainers
        </button>
      </div>

      {/* Profile Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className={`rounded-xl shadow-lg overflow-hidden ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-white'
        }`}>
          <div className="md:flex">
            {/* Trainer Image */}
            <div className="md:w-1/3 relative h-96 md:h-auto">
              <Image
                src={trainer.image}
                alt={trainer.name}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <div className="flex items-center">
                  <Star className="w-6 h-6 text-amber-400 fill-current" />
                  <span className="ml-2 text-white text-xl font-bold">
                    {trainer.rating.toFixed(1)}
                  </span>
                  <span className="mx-3 text-white">•</span>
                  <span className="text-white">
                    {trainer.sessions}+ sessions
                  </span>
                </div>
              </div>
            </div>

            {/* Trainer Info */}
            <div className="md:w-2/3 p-8">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className={`text-3xl font-bold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {trainer.name}
                  </h1>
                  <p className={`text-xl mb-4 ${
                    theme === 'dark' ? 'text-amber-400' : 'text-amber-600'
                  }`}>
                    {trainer.expertise}
                  </p>
                  <div className={`flex items-center mb-6 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>{trainer.location}</span>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20">
                    Save
                  </Button>
                  <Button className="bg-gradient-to-r from-blue-600 to-amber-500 hover:from-blue-700 hover:to-amber-600">
                    Contact
                  </Button>
                </div>
              </div>

              {/* About Section */}
              <div className="mb-8">
                <h2 className={`text-xl font-semibold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  About
                </h2>
                <p className={`${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {trainer.detailedBio}
                </p>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className={`flex items-center p-3 rounded-lg ${
                  theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
                }`}>
                  <Mail className="w-5 h-5 mr-3 text-blue-500" />
                  <span>{trainer.contact.email}</span>
                </div>
                <div className={`flex items-center p-3 rounded-lg ${
                  theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
                }`}>
                  <Phone className="w-5 h-5 mr-3 text-blue-500" />
                  <span>{trainer.contact.phone}</span>
                </div>
                <div className={`flex items-center p-3 rounded-lg ${
                  theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
                }`}>
                  <Globe className="w-5 h-5 mr-3 text-blue-500" />
                  <span>{trainer.contact.website}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Specialties */}
            <div className={`rounded-xl shadow-lg p-6 ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}>
              <h2 className={`text-xl font-semibold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Specialties
              </h2>
              <div className="flex flex-wrap gap-3">
                {trainer.specialties.map((specialty, index) => (
                  <span
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm ${
                      theme === 'dark'
                        ? 'bg-blue-900/50 text-blue-300'
                        : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className={`rounded-xl shadow-lg p-6 ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}>
              <h2 className={`text-xl font-semibold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Professional Experience
              </h2>
              <div className="space-y-6">
                {trainer.experience.map((exp, index) => (
                  <div key={index} className="border-l-2 border-blue-500 pl-4">
                    <h3 className={`text-lg font-medium ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {exp.role}
                    </h3>
                    <p className={`${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {exp.company} • {exp.duration}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Availability */}
            <div className={`rounded-xl shadow-lg p-6 ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}>
              <h2 className={`text-xl font-semibold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Availability
              </h2>
              <div className="space-y-3">
                {trainer.availability.map((slot, index) => (
                  <div key={index} className="flex items-center">
                    <Calendar className="w-5 h-5 mr-3 text-blue-500" />
                    <span className={`flex-1 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {slot.day}
                    </span>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-blue-500" />
                      <span className={`${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {slot.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4" variant="outline">
                Request Custom Time
              </Button>
            </div>

            {/* Certifications */}
            <div className={`rounded-xl shadow-lg p-6 ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}>
              <h2 className={`text-xl font-semibold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Certifications
              </h2>
              <ul className={`space-y-3 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {trainer.certifications.map((cert, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3"></span>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing */}
            <div className={`rounded-xl shadow-lg p-6 ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}>
              <h2 className={`text-xl font-semibold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Pricing
              </h2>
              <div className="space-y-4">
                {trainer.pricing.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className={`${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {item.type}
                    </span>
                    <span className={`font-medium ${
                      theme === 'dark' ? 'text-amber-400' : 'text-amber-600'
                    }`}>
                      {item.rate}
                    </span>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-amber-500 hover:from-blue-700 hover:to-amber-600">
                Book a Session
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;