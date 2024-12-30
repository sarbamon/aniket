import React from 'react';

const metrics = [
  { value: '500+', label: 'Clients Served' },
  { value: '95%', label: 'Client Retention' },
  { value: '300%', label: 'Average ROI' },
  { value: '50+', label: 'Industry Awards' }
];

export function Metrics() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {metrics.map((metric, index) => (
        <div key={index} className="text-center">
          <div className="text-4xl font-bold text-[#47296d] mb-2">{metric.value}</div>
          <div className="text-gray-600">{metric.label}</div>
        </div>
      ))}
    </div>
  );
}