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
import MembershipForm from "@/components/MembershipForm";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
  
    

      {/* Hero Section */}
      <Hero />
      {/* About Speakin Section */}
      <section id="about-section">
        <About />
      </section>
      {/* whay choose us */}
<WhyChooseUs/>
      {/* membership registration */}
      
      {/* Services Section */}
      <Service />

      
      {/* Experience Transformation */}
      <section id="member-section">
      <Experience />
</section>
{/* learn with expert */}
<section id="learn-section">
        <LearnWithExpert/>
      </section>

{/* Contact us */}
 <section id="contact-section">
        <ContactUs/>
      </section>
      {/* Footer */}
   {/* Clients Section */}

      <Client />
      {/* Testimonials */}
<Testimonials/>

      {/* Quick Response Widget */}
      <QuickResponse />
    </div>
  );
}
