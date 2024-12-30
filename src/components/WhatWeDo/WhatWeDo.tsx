import React from 'react';
import { ProcessList } from './ProcessList';
import { Expertise } from './Expertise';

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">What We Do</h2>
          <p className="mt-4 text-xl text-gray-600">
            Transforming businesses through strategic digital solutions
          </p>
        </div>
        <ProcessList />
        <Expertise />
      </div>
    </section>
  );
}