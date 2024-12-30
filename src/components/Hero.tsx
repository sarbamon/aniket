import React from 'react';
import { ArrowRight, FileSpreadsheet } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Vector Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-[#47296d] to-purple-800">
        {/* Decorative Elements */}
        <div className="absolute inset-0" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%' height='100%' viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientTransform='rotate(45)'%3E%3Cstop offset='0' stop-color='%23ffffff10'/%3E%3Cstop offset='1' stop-color='%23ffffff00'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M0,1000 C200,900 350,800 500,700 C650,600 800,500 1000,500 L1000,1000 Z' fill='url(%23a)'/%3E%3C/svg%3E")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: '0.4'
        }} />
        <div className="absolute inset-0" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%' height='100%' viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='b' gradientTransform='rotate(-45)'%3E%3Cstop offset='0' stop-color='%23ffffff15'/%3E%3Cstop offset='1' stop-color='%23ffffff00'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M0,0 C200,100 350,200 500,300 C650,400 800,500 1000,500 L1000,0 Z' fill='url(%23b)'/%3E%3C/svg%3E")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: '0.4'
        }} />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">The art and tech of</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-purple-300">
              winning audiences with Tyzzle.in
            </span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-purple-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Comprehensive digital marketing solutions tailored to elevate your brand's online presence
            and drive meaningful results.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8 space-x-4">
            <div className="rounded-md shadow">
              <a 
                href="#contact" 
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#47296d] bg-white hover:bg-purple-50 md:py-4 md:text-lg md:px-10 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
            <div className="rounded-md shadow mt-3 sm:mt-0">
              <a 
                href="https://forms.gle/4ScmZzU5Nr8zPFuZ8" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md bg-purple-600 text-white hover:bg-purple-700 md:py-4 md:text-lg md:px-10 transition-all duration-300"
              >
                Submit Enquiry
                <FileSpreadsheet className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
    </div>
  );
}