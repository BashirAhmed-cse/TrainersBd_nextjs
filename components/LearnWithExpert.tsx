import { Play, PenTool, Headphones, Video, ArrowRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const LearnWithExpert = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState("Videos");
  
  const contentData = {
    Videos: [
      { 
        title: "AI and Ethics", 
        author: "Saydujjaman", 
        image: "/Members/Saydujjaman.jpg",
        category: "TECHNOLOGY"
      },
      { 
        title: "TAIHR – The Academy to Innovate HR", 
        author: "Laila Naznin", 
        image: "/BoardMembers/laila-Naznin.jpg",
        category: "MOTIVATION"
      },
      { 
        title: "Minimum Viable Product", 
        author: "K M Hasan Ripon", 
        image: "/BoardMembers/KM-Hasan.jpg",
        category: "DIGITAL TRANSFORMATION"
      }
    ],
    Blogs: [
      { 
        title: "Digital Transformation", 
        author: "Yousuf Efti", 
        image: "/BoardMembers/Yousuf-Efti.jpg",
        category: "DIGITAL TRANSFORMATION"
      },
      { 
        title: "Human Edge", 
        author: "Mohammad Morad Hossain", 
        image: "/BoardMembers/MOhammad-Morad-Hossain.jpg",
        category: "LEADERSHIP"
      },
      { 
        title: "Zia Uddin Ahmad", 
        author: "Marketing Pro", 
        image: "/BoardMembers/Zia-Uddin-Mahmud.jpg",
        category: "BRANDING"
      }
    ],
    Podcasts: [
      { 
        title: "Technology Trends", 
        author: "Del H Khan", 
        image: "/BoardMembers/Del-H-Khan.jpg",
        category: "TECHNOLOGY"
      },
      { 
        title: "Operational Theories", 
        author: "Laila Naznin", 
         image: "/BoardMembers/laila-Naznin.jpg",
        category: "OPERATIONAL THEORIES"
      },
      { 
        title: "Motivation Matters", 
        author: "K M Hasan Ripon", 
       image: "/BoardMembers/KM-Hasan.jpg",
        category: "MOTIVATION"
      }
    ],
    "Live Learning": [
      { 
        title: "Leadership Skills", 
        author: "Laila Naznin", 
         image: "/BoardMembers/laila-Naznin.jpg",
        category: "LEADERSHIP"
      },
      { 
        title: "Innovation Talks", 
        author: "Saydujjaman.", 
       image: "/Members/Saydujjaman.jpg",
        category: "TECHNOLOGY"
      },
      { 
        title: "Career Growth", 
        author: "Del H Khan", 
       image: "/BoardMembers/Del-H-Khan.jpg",
        category: "LEADERSHIP"
      }
    ]
  };

  const categories = [
    "DIGITAL TRANSFORMATION",
    "TECHNOLOGY",
    "OPERATIONAL THEORIES",
    "LEADERSHIP",
    "MOTIVATION",
    "BRANDING"
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredContent = activeCategory === "All" 
    ? contentData[activeTab] 
    : contentData[activeTab].filter(item => item.category === activeCategory);

  const getIcon = (tabName) => {
    switch(tabName) {
      case "Videos": return <Play className="w-5 h-5" />;
      case "Blogs": return <PenTool className="w-5 h-5" />;
      case "Podcasts": return <Headphones className="w-5 h-5" />;
      case "Live Learning": return <Video className="w-5 h-5" />;
      default: return <Play className="w-5 h-5" />;
    }
  };

  return (
    <section className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${
              theme === 'dark' ? 'bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-amber-600' : 'bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-amber-600'
            }`}
          >
            Learn with Experts
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-lg max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Engage yourself in self-paced learning via curated e-learning content including videos, blogs, podcasts and Live Learning sessions.
          </motion.p>
        </div>

        {/* Tab Bar Navigation */}
        <div className="flex overflow-x-auto pb-2 mb-10 scrollbar-hide">
          <div className={`flex space-x-1 mx-auto p-1 rounded-xl ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
          }`}>
            {Object.keys(contentData).map((tabName) => (
              <button
                key={tabName}
                onClick={() => setActiveTab(tabName)}
                className={`flex items-center px-6 py-3 rounded-lg transition-all ${
                  activeTab === tabName
                    ? theme === 'dark'
                      ? 'bg-gray-700 shadow-md text-amber-400'
                      : 'bg-white shadow-md text-amber-600'
                    : theme === 'dark'
                      ? 'text-gray-300 hover:bg-gray-700'
                      : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <span className="mr-2">
                  {getIcon(tabName)}
                </span>
                <span className="whitespace-nowrap font-medium">{tabName}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-10">
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setActiveCategory("All")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === "All"
                  ? 'bg-amber-500 text-white'
                  : theme === 'dark'
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-amber-300'
              }`}
            >
              All Categories
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-amber-500 text-white'
                    : theme === 'dark'
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      : 'bg-white text-gray-700 border border-gray-200 hover:border-amber-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <div className="aspect-video relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                 className="object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="text-amber-200">{item.author}</p>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {activeTab}
                </div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className={`font-bold ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>{item.title}</h4>
                    <p className="text-amber-600 text-sm mt-1">{item.author}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded ${
                    theme === 'dark'
                      ? 'bg-amber-900/50 text-amber-300'
                      : 'bg-amber-100 text-amber-800'
                  }`}>
                    {item.category}
                  </span>
                </div>
                <button className={`mt-4 w-full flex items-center justify-center font-medium text-sm rounded-lg py-2 transition-colors ${
                  theme === 'dark'
                    ? 'border border-gray-600 text-amber-400 hover:bg-gray-700 hover:text-amber-300'
                    : 'border border-amber-200 text-amber-500 hover:bg-amber-50 hover:text-amber-600'
                }`}>
                  View {activeTab.toLowerCase()}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearnWithExpert;