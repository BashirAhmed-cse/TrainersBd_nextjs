import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import { Input } from './ui/input'
import { Checkbox } from './ui/checkbox'
import { Button } from './ui/button'

const Footer = () => {
      const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [agreed, setAgreed] = useState(false)
  return (
    <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <span className="text-3xl font-bold">
                  speak<span className="text-yellow-500">în</span>
                </span>
                <p className="text-gray-300 mt-2">Making expert learning accessible to businesses and individuals.</p>
              </div>

              <div className="space-y-4">
                <p className="text-lg font-semibold">
                  Reach out to us for your learning or speaker session requirements.
                </p>
                <div className="space-y-2">
                  <p>For immediate assistance, call us at</p>
                  <p>+65 9372 6990 (Global)</p>
                  <p>+91 96250 02763 (India)</p>
                  <p>+60 10 234 4265 (Malaysia)</p>
                  <p className="text-sm text-gray-400">(M-F: 9:00 am-6:00 pm)</p>
                  <p>or e-mail us at lets.speak@speakin.co</p>
                </div>
              </div>

              {/* Certifications */}
              <div className="flex items-center space-x-4 mt-8">
                <Image src="/placeholder.svg?height=40&width=60&text=AICPA" alt="AICPA" width={60} height={40} />
                <Image src="/placeholder.svg?height=40&width=60&text=SOC" alt="SOC" width={60} height={40} />
                <Image src="/placeholder.svg?height=40&width=60&text=ICF" alt="ICF" width={60} height={40} />
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Subscribe to our newsletter</h3>
              <p className="text-gray-300 mb-4">
                Subscribe to our newsletter to receive the latest updates from Speakin
              </p>
              <div className="space-y-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-800 border-gray-700 text-white"
                />
                <Input
                  type="tel"
                  placeholder="Phone No."
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-gray-800 border-gray-700 text-white"
                />
                <div className="flex items-start space-x-2">
                  <Checkbox id="terms" checked={agreed} onCheckedChange={setAgreed} />
                  <label htmlFor="terms" className="text-xs text-gray-300 leading-tight">
                    I authorize Speakin and its representative to contact me with updates and notifications via Email,
                    SMS, WhatsApp, and Call. This will override the registry on DND / NDNC.
                  </label>
                </div>
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">Subscribe</Button>
              </div>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Useful links</h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-300 hover:text-white">
                  &gt; FIND A COACH
                </a>
                <a href="#" className="block text-gray-300 hover:text-white">
                  &gt; EXPERTS
                </a>
                <a href="#" className="block text-gray-300 hover:text-white">
                  &gt; ABOUT US
                </a>
                <a href="#" className="block text-gray-300 hover:text-white">
                  &gt; BLOGS
                </a>
                <a href="#" className="block text-gray-300 hover:text-white">
                  &gt; CAREERS
                </a>
                <a href="#" className="block text-gray-300 hover:text-white">
                  &gt; CONTACT US
                </a>
                <a href="#" className="block text-gray-300 hover:text-white">
                  &gt; TERMS OF USE
                </a>
                <a href="#" className="block text-gray-300 hover:text-white">
                  &gt; PRIVACY POLICY
                </a>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <Facebook className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer" />
                  <Linkedin className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer" />
                  <Twitter className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer" />
                  <Instagram className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer" />
                  <Youtube className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer" />
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">2025 Copyright © SCPL Asia. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer