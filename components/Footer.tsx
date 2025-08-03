'use client';

import { Linkedin, Twitter, Facebook, Instagram, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

const Footer = () => {
  const { theme } = useTheme();
  const currentTheme = theme === 'system' ? 'dark' : theme;

  const links = [
    {
      title: "Company",
      items: [
        { name: "About Us", href: "/" },
        { name: "Our Team", href: "/" },
        { name: "Careers", href: "/" },
        { name: "Contact", href: "/" }
      ]
    },
    {
      title: "Resources",
      items: [
        { name: "Blog", href: "/blogs" },
        { name: "Trainers", href: "/trainers" },
        { name: "Webinars", href: "/" },
        { name: "Case Studies", href: "/" }
      ]
    },
    {
      title: "Legal",
      items: [
        { name: "Privacy Policy", href: "/" },
        { name: "Terms of Service", href: "/" },
        { name: "Cookie Policy", href: "/" }
      ]
    }
  ];

  const socialMedia = [
    { name: "LinkedIn", icon: <Linkedin size={18} />, href: "#" },
    { name: "Twitter", icon: <Twitter size={18} />, href: "#" },
    { name: "Facebook", icon: <Facebook size={18} />, href: "#" },
    { name: "Instagram", icon: <Instagram size={18} />, href: "#" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <footer className={`relative overflow-hidden ${currentTheme === 'dark' ? 'bg-gray-900' : 'bg-gray-800'} text-gray-300`}>
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-white">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-pink-500">
                  TRAINERS
                </span>
              </h2>
              <p className="mt-4 leading-relaxed text-gray-400">
                Empowering professionals through world-class training and development programs.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <div className="p-1.5 rounded-lg bg-gradient-to-r from-amber-500/20 to-pink-500/20 group-hover:from-amber-500/30 group-hover:to-pink-500/30 transition-all">
                  <Mail className="w-5 h-5 text-amber-400 group-hover:text-amber-300 transition-colors" />
                </div>
                <a href="mailto:trainersorg@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  trainersorg@gmail.com
                </a>
              </div>
              
              <div className="flex items-start gap-3 group">
                <div className="p-1.5 rounded-lg bg-gradient-to-r from-amber-500/20 to-pink-500/20 group-hover:from-amber-500/30 group-hover:to-pink-500/30 transition-all">
                  <Phone className="w-5 h-5 text-amber-400 group-hover:text-amber-300 transition-colors" />
                </div>
                <a href="tel:+8801714057476" className="text-gray-400 hover:text-white transition-colors">
                  +8801714057476
                </a>
              </div>
              
              <div className="flex items-start gap-3 group">
                <div className="p-1.5 rounded-lg bg-gradient-to-r from-amber-500/20 to-pink-500/20 group-hover:from-amber-500/30 group-hover:to-pink-500/30 transition-all">
                  <MapPin className="w-5 h-5 text-amber-400 group-hover:text-amber-300 transition-colors" />
                </div>
                <address className="text-gray-400 hover:text-white transition-colors not-italic">
                  H-41/c GF, Dhanmondi 4/A, Dhaka 1209
                </address>
              </div>
            </div>
          </motion.div>

          {/* Link Columns */}
          {links.map((column) => (
            <motion.div key={column.title} variants={itemVariants} className="space-y-6">
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
                      className="text-gray-400 hover:text-amber-400 transition-colors flex items-start group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 opacity-0 group-hover:opacity-100 mt-2 mr-2 transition-opacity"></span>
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 my-12"
        />

        {/* Bottom Row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} TRAINERS. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialMedia.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-gray-800 text-gray-300 hover:text-white hover:bg-gradient-to-r from-amber-500 to-pink-500 transition-all shadow-sm hover:shadow-lg"
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Back to top button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 p-3 rounded-full shadow-lg bg-gradient-to-r from-amber-500 to-pink-500 text-white hover:shadow-xl transition-all z-50"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  );
};

export default Footer;