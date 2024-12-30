import React from 'react';

export function Typography() {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Primary Font</h3>
        <p className="text-gray-600">Font Family: Inter</p>
        <div className="mt-4 space-y-4">
          <div>
            <p className="text-sm text-gray-500">Heading 1</p>
            <h1 className="text-4xl font-bold">The quick brown fox jumps over the lazy dog</h1>
          </div>
          <div>
            <p className="text-sm text-gray-500">Heading 2</p>
            <h2 className="text-3xl font-semibold">The quick brown fox jumps over the lazy dog</h2>
          </div>
          <div>
            <p className="text-sm text-gray-500">Body Text</p>
            <p className="text-base">The quick brown fox jumps over the lazy dog</p>
          </div>
        </div>
      </div>
    </div>
  );
}