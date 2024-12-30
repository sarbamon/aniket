import React from 'react';
import { Calendar, Clock, User } from 'lucide-react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
}

export function BlogCard({ title, excerpt, date, readTime, author, image }: BlogCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-1">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <div className="flex items-center text-sm text-gray-500 space-x-4">
          <span className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {date}
          </span>
          <span className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {readTime}
          </span>
          <span className="flex items-center">
            <User className="w-4 h-4 mr-1" />
            {author}
          </span>
        </div>
      </div>
    </div>
  );
}