import React from 'react';
import { BlogList } from './BlogList';

export function Blog() {
  return (
    <section id="blog" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Latest Insights</h2>
          <p className="mt-4 text-xl text-gray-600">
            Discover the latest trends and strategies in digital marketing
          </p>
        </div>
        <BlogList />
      </div>
    </section>
  );
}