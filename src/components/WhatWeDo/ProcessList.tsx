import React from 'react';
import { Lightbulb, Target, BarChart, Rocket } from 'lucide-react';

const processes = [
  {
    icon: Lightbulb,
    title: 'Strategy Development',
    description: 'Creating comprehensive digital strategies aligned with your business goals'
  },
  {
    icon: Target,
    title: 'Implementation',
    description: 'Executing plans with precision and adapting to market dynamics'
  },
  {
    icon: BarChart,
    title: 'Analysis & Optimization',
    description: 'Continuous monitoring and improvement of campaign performance'
  },
  {
    icon: Rocket,
    title: 'Growth Scaling',
    description: 'Expanding successful strategies to achieve sustainable growth'
  }
];

export function ProcessList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
      {processes.map((process, index) => (
        <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
          <process.icon className="w-12 h-12 text-[#47296d] mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{process.title}</h3>
          <p className="text-gray-600">{process.description}</p>
        </div>
      ))}
    </div>
  );
}