import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import Image from "next/image";
import { useTheme } from 'next-themes';

const WhyChooseUs = () => {
  const { theme } = useTheme();
  
  const reasons = [
    {
      title: "Expertise and Excellence",
      description: "Collaborate with skilled trainers and expert consultants across various industries.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
        </svg>
      ),
      color: "green"
    },
    {
      title: "Comprehensive Support",
      description: "Gain access to resources, mentorship, and guidance tailored to your professional needs.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
      color: "amber"
    },
    {
      title: "A Unified Community",
      description: "Join a network of professionals sharing a vision of growth and impact.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
        </svg>
      ),
      color: "amber"
    },
    {
      title: "Strategic Vision",
      description: "Our goal of building a community of 10,000 members by 2030 ensures long-term focus.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
      color: "green"
    }
  ];

  const getColorClasses = (color: string) => {
    const base = `from-${color}-500 to-${color}-600`;
    const dark = `dark:from-${color}-600 dark:to-${color}-700`;
    return `${base} ${dark}`;
  };

  return (
    <section 
      className={`relative py-20 overflow-hidden ${theme === 'dark' ? 'bg-gray-900' : 'bg-gradient-to-br from-gray-50 to-white'}`}
      id="why-choose-us"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <motion.div
        variants={staggerContainer(0.1, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            variants={fadeIn("up", "spring", 0.2, 1)}
            className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-gradient-to-r from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-800/30 mb-6"
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Why TRAINERS
            </span>
          </motion.div>
          
          <motion.h2
            variants={fadeIn("up", "spring", 0.4, 1)}
            className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-amber-600 mb-6"
          >
            Why Choose Us
          </motion.h2>
          
          <motion.p
            variants={fadeIn("up", "spring", 0.6, 1)}
            className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            We combine world-class expertise with locally relevant solutions to drive professional growth and organizational excellence.
          </motion.p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Reasons Grid */}
          <motion.div
            variants={staggerContainer(0.1, 0.2)}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", "spring", index * 0.2, 1)}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${getColorClasses(reason.color)} opacity-90`}></div>
                <div className="relative p-6 h-full flex items-start">
                  <div className={`flex items-center justify-center w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm mr-4 shrink-0`}>
                    <div className="w-6 h-6 text-white">
                      {reason.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Image Section */}
          <motion.div
            variants={fadeIn("right", "spring", 0.8, 1)}
            className="relative w-full aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/hero/hero2.jpg"
              alt="Professional trainers collaborating"
              fill
              className="object-cover"
              priority
            />
            
            {/* Stats overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">100+</div>
                  <div className="text-sm text-white/80">Certified Trainers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">10K+</div>
                  <div className="text-sm text-white/80">Members by 2030</div>
                </div>
              </div>
            </div>
            
            {/* Quote bubble */}
            <div className="absolute top-6 right-6 bg-white dark:bg-gray-900 text-blue-600 dark:text-blue-400 rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
              <span className="text-4xl font-serif">"</span>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
       
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;