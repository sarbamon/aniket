import React from 'react';

const colors = [
  { name: 'Primary', hex: '#47296d', rgb: 'rgb(71, 41, 109)' },
  { name: 'Secondary', hex: '#6b3ca9', rgb: 'rgb(107, 60, 169)' },
  { name: 'Accent', hex: '#8f60d1', rgb: 'rgb(143, 96, 209)' },
  { name: 'Text Dark', hex: '#1a1a1a', rgb: 'rgb(26, 26, 26)' },
  { name: 'Text Light', hex: '#ffffff', rgb: 'rgb(255, 255, 255)' }
];

export function ColorPalette() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {colors.map((color) => (
        <div key={color.name} className="bg-white rounded-lg shadow-md p-6">
          <div 
            className="w-full h-24 rounded-lg mb-4" 
            style={{ backgroundColor: color.hex }}
          />
          <h3 className="font-semibold text-gray-900">{color.name}</h3>
          <p className="text-sm text-gray-600">HEX: {color.hex}</p>
          <p className="text-sm text-gray-600">RGB: {color.rgb}</p>
        </div>
      ))}
    </div>
  );
}