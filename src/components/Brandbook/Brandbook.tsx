import React from 'react';
import { ColorPalette } from './ColorPalette';

export function Brandbook() {
  return (
    <section id="brandbook" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Brand Guidelines</h2>
          <p className="mt-4 text-xl text-gray-600">
            The visual identity and design system of Tyzzle
          </p>
        </div>

        <div>
          <section>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Color Palette</h3>
            <ColorPalette />
          </section>
        </div>
      </div>
    </section>
  );
}