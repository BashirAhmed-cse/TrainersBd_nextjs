"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Users, Mic, BookOpen, MessageCircle, Facebook, Linkedin, Twitter, Instagram, Youtube } from "lucide-react"
import TopBanner from "@/components/TopBanner"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Service from "@/components/Service"
import About from "@/components/About"
import Footer from "@/components/Footer"
import Experience from "@/components/Experience"
import Client from "@/components/Client"
import QuickResponse from "@/components/QuickResponse"

export default function HomePage() {






  return (
    <div className="min-h-screen bg-white">
      {/* Top Banner */}
      <TopBanner/>

      {/* Header */}
     <Header/>

      {/* Hero Section */}
      <Hero/>

      {/* Services Section */}
      <Service/>

      {/* About Speakin Section */}
      <About/>

      {/* Clients Section */}
      
<Client/>
      {/* Experience Transformation */}
      <Experience/>

      {/* Footer */}
      <Footer/>

      {/* Quick Response Widget */}
      <QuickResponse/>
    </div>
  )
}
