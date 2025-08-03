"use client"
import { Linkedin, Twitter, Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const Footer = () => {
  const { theme } = useTheme();
  const links = [
    {
      title: "Company",
      items: [
        { name: "About Us", href: "#" },
        { name: "Our Experts", href: "#" },
        { name: "Testimonials", href: "#" },
        { name: "Careers", href: "#" }
      ]
    },
    {
      title: "Resources",
      items: [
        { name: "Blog", href: "#" },
        { name: "Podcasts", href: "#" },
        { name: "Webinars", href: "#" },
        { name: "Case Studies", href: "#" }
      ]
    },
    {
      title: "Legal",
      items: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Cookie Policy", href: "#" }
      ]
    }
  ];

  const socialMedia = [
    { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, href: "#" },
    { name: "Twitter", icon: <Twitter className="w-5 h-5" />, href: "#" },
    { name: "Facebook", icon: <Facebook className="w-5 h-5" />, href: "#" },
    { name: "Instagram", icon: <Instagram className="w-5 h-5" />, href: "#" }
  ];

  return (
    <footer className={`pt-20 pb-12 relative overflow-hidden ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-800'
    } text-gray-300`}>
      {/* Floating decorative elements */}
      <motion.div 
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute top-20 left-10 w-16 h-16 rounded-full blur-xl ${
          theme === 'dark' ? 'bg-amber-500/10' : 'bg-amber-400/20'
        }`}
      />
      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute bottom-20 right-10 w-24 h-24 rounded-full blur-xl ${
          theme === 'dark' ? 'bg-pink-500/10' : 'bg-pink-400/20'
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-pink-500">
                  Trainers
                </span>
              </h2>
              <p className={`mt-4 leading-relaxed ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-300'
              }`}>
                Trainers aims to bring together experts, trainers, and learners under one umbrella to foster knowledge sharing, skill development, and career advancement across diverse sectors.
              </p>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-start space-x-3 group">
                <div className={`p-1.5 rounded-lg bg-gradient-to-r group-hover:from-amber-500/30 group-hover:to-pink-500/30 transition-all ${
                  theme === 'dark' ? 'from-amber-500/20 to-pink-500/20' : 'from-amber-400/20 to-pink-400/20'
                }`}>
                  <Mail className={`w-5 h-5 group-hover:text-amber-300 transition-colors ${
                    theme === 'dark' ? 'text-amber-400' : 'text-amber-300'
                  }`} />
                </div>
                <a href="mailto:trainersorg@gmail.com" className={`hover:text-white transition-colors ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-300'
                }`}>
                  trainersorg@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className={`p-1.5 rounded-lg bg-gradient-to-r group-hover:from-amber-500/30 group-hover:to-pink-500/30 transition-all ${
                  theme === 'dark' ? 'from-amber-500/20 to-pink-500/20' : 'from-amber-400/20 to-pink-400/20'
                }`}>
                  <Phone className={`w-5 h-5 group-hover:text-amber-300 transition-colors ${
                    theme === 'dark' ? 'text-amber-400' : 'text-amber-300'
                  }`} />
                </div>
                <a href="tel:+88 01714 057476" className={`hover:text-white transition-colors ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-300'
                }`}>
                  +8801714057476
                </a>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className={`p-1.5 rounded-lg bg-gradient-to-r group-hover:from-amber-500/30 group-hover:to-pink-500/30 transition-all ${
                  theme === 'dark' ? 'from-amber-500/20 to-pink-500/20' : 'from-amber-400/20 to-pink-400/20'
                }`}>
                  <MapPin className={`w-5 h-5 group-hover:text-amber-300 transition-colors ${
                    theme === 'dark' ? 'text-amber-400' : 'text-amber-300'
                  }`} />
                </div>
                <address className={`hover:text-white transition-colors not-italic ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-300'
                }`}>
              H-41/c GF, Dhanmondi 4/A, Dhaka 1209 , 1209
                </address>
              </div>
            </motion.div>
          </div>

          {/* Link Columns */}
          {links.map((column, index) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-lg font-semibold text-white">{column.title}</h3>
              <ul className="space-y-3">
                {column.items.map((item) => (
                  <motion.li 
                    key={item.name}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Link 
                      href={item.href} 
                      className={`hover:text-amber-400 transition-colors flex items-start group ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-300'
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 opacity-0 group-hover:opacity-100 mt-2 mr-2 transition-opacity"></span>
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`border-t my-12 ${
            theme === 'dark' ? 'border-gray-800' : 'border-gray-700'
          }`}
        />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`text-sm ${
              theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
            }`}
          >
            © {new Date().getFullYear()} Trainers. All rights reserved.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex space-x-4"
          >
            {socialMedia.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 rounded-full transition-all shadow-sm hover:shadow-lg ${
                  theme === 'dark'
                    ? 'bg-gray-800 text-gray-300 hover:text-white hover:bg-gradient-to-r from-amber-500 to-pink-500 hover:shadow-amber-500/20'
                    : 'bg-gray-700 text-gray-300 hover:text-white hover:bg-gradient-to-r from-amber-400 to-pink-400 hover:shadow-amber-400/20'
                }`}
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Back to top button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.95 }}
          className={`fixed bottom-6 right-6 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all z-50 ${
            theme === 'dark'
              ? 'bg-gradient-to-r from-amber-500 to-pink-500 hover:shadow-amber-500/30'
              : 'bg-gradient-to-r from-amber-400 to-pink-400 hover:shadow-amber-400/30'
          }`}
          aria-label="Back to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;