import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import Image from "next/image"; // Assuming you are using Next.js for Image component
import { useTheme } from 'next-themes'
const WhyChooseUs = () => {
      const { theme } = useTheme()
  const reasons = [
    {
      title: "Expertise and Excellence",
      description: "Collaborate with skilled trainers and expert consultants across various industries.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h3.75M9 15h3.75M9 18h3.75m3C10.658 18 10 18.067 10 18.25c0 .285.592.5 1.5.5s1.5-.215 1.5-.5c0-.183-.658-.25-1.5-.25S10 18.183 10 18.25Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 15L9 18.75m0 0l3 1.2V20.25l-3-1.2v-2.25z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12.75 15L12 18.75m0 0l-3 1.2V20.25l3-1.2v-2.25z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 15L15 18.75m0 0l-3 1.2V20.25l3-1.2v-2.25z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      bgColor: "bg-[#007bff]", // Blue
    },
    {
      title: "Comprehensive Support",
      description: "Gain access to resources, mentorship, and guidance tailored to your professional needs.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h3.75M9 15h3.75M9 18h3.75m3C10.658 18 10 18.067 10 18.25c0 .285.592.5 1.5.5s1.5-.215 1.5-.5c0-.183-.658-.25-1.5-.25S10 18.183 10 18.25Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 15L9 18.75m0 0l3 1.2V20.25l-3-1.2v-2.25z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12.75 15L12 18.75m0 0l-3 1.2V20.25l3-1.2v-2.25z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 15L15 18.75m0 0l-3 1.2V20.25l3-1.2v-2.25z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      bgColor: "bg-[#212529]", // Dark Blue
    },
    {
      title: "A Unified Community",
      description: "Join a network of professionals sharing a vision of growth and impact.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h3.75M9 15h3.75M9 18h3.75m3C10.658 18 10 18.067 10 18.25c0 .285.592.5 1.5.5s1.5-.215 1.5-.5c0-.183-.658-.25-1.5-.25S10 18.183 10 18.25Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 15L9 18.75m0 0l3 1.2V20.25l-3-1.2v-2.25z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12.75 15L12 18.75m0 0l-3 1.2V20.25l3-1.2v-2.25z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 15L15 18.75m0 0l-3 1.2V20.25l3-1.2v-2.25z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      bgColor: "bg-[#e2e8f0]", // Light Gray/Blue
    },
    {
      title: "Strategic Vision",
      description: "Our goal of building a community of 10,000 members by 2030 ensures a long-term focus on progress and innovation.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h3.75M9 15h3.75M9 18h3.75m3C10.658 18 10 18.067 10 18.25c0 .285.592.5 1.5.5s1.5-.215 1.5-.5c0-.183-.658-.25-1.5-.25S10 18.183 10 18.25Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 15L9 18.75m0 0l3 1.2V20.25l-3-1.2v-2.25z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12.75 15L12 18.75m0 0l-3 1.2V20.25l3-1.2v-2.25z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 15L15 18.75m0 0l-3 1.2V20.25l3-1.2v-2.25z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      bgColor: "bg-[#212529]", // Dark Blue
    },
  ];

  return (
    <section className={`py-20 sm:px-6 lg:px-8 px-4 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gradient-to-br from-gray-50 to-white'}`}
    
    >
      <motion.div
        variants={staggerContainer(0.1, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2
            variants={fadeIn("up", "spring", 0.2, 1)}
            className="text-base font-semibold text-blue-600 uppercase tracking-wide mb-2" // Smaller, blue, uppercase
          >
            THE REASONS
          </motion.h2>
          <motion.h3
            variants={fadeIn("up", "spring", 0.4, 1)}
            className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6"
          >
            Why Choose Us
          </motion.h3>
          <motion.p
            variants={fadeIn("up", "spring", 0.6, 1)}
            className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300"
          >
            Choose TRAINERS for world-class training solutions, internationally
            certified experts, customized programs, and a commitment to driving
            human capital growth and corporate excellence in Bangladesh.
          </motion.p>
        </div>

        {/* Content Grid: Reasons and Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Reasons Grid */}
          <motion.div
            variants={staggerContainer(0.1, 0.2)}
            className="grid grid-cols-1 md:grid-cols-2 gap-8" // Adjusted for 2 columns on medium screens
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", "spring", index * 0.2, 1)}
                whileHover={{ y: -10 }}
                className={`${reason.bgColor} text-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all flex items-start`}
              >
                <span className="text-white mr-4 mt-1">{reason.icon}</span>
                <div>
                  <h3 className="text-lg font-bold mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-sm">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Image Section */}
          <motion.div
            variants={fadeIn("right", "spring", 0.8, 1)}
            className="relative w-full h-[500px]" // Use w-full and a fixed height for the container
          >
            <Image
              src="/hero/hero2.jpg" // Replace with the actual path to your image
              alt="People in a training session"
              fill // Use 'fill' instead of width, height, and objectFit
              className="rounded-xl shadow-lg object-cover" // Add object-cover here
            />
            {/* Quote bubble - positioned absolutely over the image */}
            <div className="absolute bottom-4 right-4 bg-blue-600 text-white rounded-full p-4 text-5xl font-bold leading-none w-20 h-20 flex items-center justify-center">
              “
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;