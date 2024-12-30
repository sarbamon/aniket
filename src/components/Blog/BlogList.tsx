import React from 'react';
import { BlogCard } from './BlogCard';

const samplePosts = [
  {
    title: "The Future of Digital Marketing in 2024",
    excerpt: "Explore the emerging trends that will shape digital marketing strategies in the coming year...",
    date: "Mar 15, 2024",
    readTime: "5 min read",
    author: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Mastering Social Media Marketing",
    excerpt: "Learn the essential strategies to build a strong social media presence for your brand...",
    date: "Mar 12, 2024",
    readTime: "7 min read",
    author: "Michael Chen",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "SEO Best Practices for 2024",
    excerpt: "Stay ahead of the competition with these proven SEO techniques and strategies...",
    date: "Mar 10, 2024",
    readTime: "6 min read",
    author: "Alex Turner",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800"
  }
];

export function BlogList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {samplePosts.map((post, index) => (
        <BlogCard key={index} {...post} />
      ))}
    </div>
  );
}