import React from 'react';
import { StoryCard } from './StoryCard';
import { Metrics } from './Metrics';

export function SuccessStory() {
  return (
    <section id="success-story" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Success Stories</h2>
          <p className="mt-4 text-xl text-gray-600">
            Real results for real businesses
          </p>
        </div>
        <StoryCard />
        <Metrics />
      </div>
    </section>
  );
}