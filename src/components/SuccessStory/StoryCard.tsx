import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function StoryCard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
      <div className="relative overflow-hidden rounded-lg">
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000"
          alt="Success story"
          className="w-full h-[400px] object-cover"
        />
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          300% Growth in Online Presence
        </h3>
        <p className="text-gray-600 mb-6">
          We helped a local restaurant chain achieve remarkable growth through 
          strategic digital marketing and brand positioning. Their online 
          engagement increased by 300% within 6 months.
        </p>
        <div className="flex items-center text-[#47296d] font-semibold">
          <span>Read Case Study</span>
          <ArrowUpRight className="w-5 h-5 ml-2" />
        </div>
      </div>
    </div>
  );
}