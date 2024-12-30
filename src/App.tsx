import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { WhatWeDo } from './components/WhatWeDo/WhatWeDo';
import { SuccessStory } from './components/SuccessStory/SuccessStory';
import { Blog } from './components/Blog/Blog';
import { Brandbook } from './components/Brandbook/Brandbook';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <WhatWeDo />
      <SuccessStory />
      <Blog />
      <Brandbook />
      <Contact />
    </div>
  );
}