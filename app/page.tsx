"use client";

import TopBanner from "@/components/TopBanner";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Service from "@/components/Service";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import Client from "@/components/Client";
import QuickResponse from "@/components/QuickResponse";
import LearnWithExpert from "@/components/LearnWithExpert";
import Testimonials from "@/components/Testimonials";
import ContactUs from "@/components/ContactUs";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Banner */}
      <TopBanner />

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />
      {/* About Speakin Section */}
      <About />
      {/* Services Section */}
      <Service />

      {/* Clients Section */}

      <Client />
      {/* Experience Transformation */}
      <Experience />

{/* learn with expert */}
<LearnWithExpert/>
{/* Testimonials */}
<Testimonials/>
{/* Contact us */}
<ContactUs/>
      {/* Footer */}
      <Footer />

      {/* Quick Response Widget */}
      <QuickResponse />
    </div>
  );
}
