import React from 'react';
import { Check } from 'lucide-react';

const expertiseAreas = [
  'Digital Strategy Development',
  'Market Research & Analysis',
  'Campaign Management',
  'Content Creation & Optimization',
  'Performance Marketing',
  'Brand Development'
];

export function Expertise() {
  return (
    <div className="bg-[#47296d] text-white rounded-lg p-8">
      <h3 className="text-2xl font-bold mb-6 text-center">Our Expertise</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {expertiseAreas.map((area, index) => (
          <div key={index} className="flex items-center">
            <Check className="w-5 h-5 mr-2 text-purple-300" />
            <span>{area}</span>
          </div>
        ))}
      </div>
    </div>
  );
}