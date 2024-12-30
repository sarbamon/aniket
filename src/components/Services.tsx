import React from 'react';
import { 
  Share2, Search, Target, PenTool, Mail, Users, Palette, Globe, 
  BarChart, Megaphone, LineChart, Calendar 
} from 'lucide-react';

const services = [
  {
    title: 'Digital Marketing',
    icon: Share2,
    items: ['Social Media Marketing', 'SEO', 'SEM', 'Content Marketing']
  },
  {
    title: 'Branding',
    icon: Palette,
    items: ['Brand Strategy', 'Visual Identity', 'Brand Guidelines', 'Rebranding']
  },
  {
    title: 'Web Development',
    icon: Globe,
    items: ['Responsive Design', 'E-commerce', 'Landing Pages', 'SEO Optimization']
  },
  {
    title: 'Analytics',
    icon: BarChart,
    items: ['Performance Tracking', 'Data Analysis', 'ROI Reporting', 'Insights']
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive marketing solutions to grow your business
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="relative group">
              <div className="h-full bg-white rounded-lg shadow-lg transition-all duration-300 transform group-hover:-translate-y-2">
                <div className="p-6">
                  <service.icon className="h-8 w-8 text-[#47296d] mb-4" />
                  <h3 className="text-lg font-medium text-gray-900">{service.title}</h3>
                  <ul className="mt-4 space-y-2">
                    {service.items.map((item) => (
                      <li key={item} className="text-gray-600">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}