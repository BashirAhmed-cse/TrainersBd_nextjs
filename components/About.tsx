import React from 'react'

const About = () => {

      const stats = [
    { number: "18000+", label: "EXPERTS" },
    { number: "10000", label: "1-1 COACHES" },
    { number: "LIVE", label: "LIVE SESSIONS" },
    { number: "7500", label: "VIDEOS" },
    { number: "5000", label: "PODCASTS" },
    { number: "2500", label: "BLOGS" },
  ]

  return (
    <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">ABOUT SPEAKIN</h2>
                <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Speakin is Asia's largest digital campus for your leaders and their teams to book 1:1 Coaching and group
                  speaker sessions. Helping your learners shortcut their way to success, the sessions are delivered by a
                  highly curated network of global CxOs, SMEs, Thought Leaders and Academicians - practitioners who have
                  been-there-done-that.
                </p>
              </div>
    
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold text-yellow-500 mb-2">{stat.number}</div>
                    <div className="text-sm font-medium text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
  )
}

export default About