import React from 'react';
import { Mail, Phone, MessageSquare } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Let's discuss how we can help grow your business
          </p>
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative bg-[#47296d] p-10 text-white overflow-hidden">
              {/* Decorative Vector Background */}
              <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: 'white', stopOpacity: 0.2 }} />
                      <stop offset="100%" style={{ stopColor: 'white', stopOpacity: 0 }} />
                    </linearGradient>
                    <pattern id="pattern1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="1" cy="1" r="1" fill="white" />
                    </pattern>
                  </defs>
                  <path d="M0,0 C30,20 70,0 100,30 L100,100 L0,100 Z" fill="url(#grad1)" />
                  <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern1)" />
                </svg>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 mr-3" />
                    <span>admin@tyzzle.in</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 mr-3" />
                    <span>+91 (XXX) XXX-XXXX</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-10">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#47296d] focus:ring-[#47296d]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#47296d] focus:ring-[#47296d]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#47296d] focus:ring-[#47296d]"></textarea>
                </div>
                <button type="submit" className="w-full bg-[#47296d] text-white px-6 py-3 rounded-md hover:bg-purple-800 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}