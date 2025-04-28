import React from 'react';
import { motion } from 'framer-motion';

const posts = [
  {
    title: 'How AI is Transforming Medical Tourism',
    summary: 'Discover how artificial intelligence is streamlining patient journeys and boosting facilitator success in the healthcare travel industry.',
    author: 'Dr. A. Sharma',
    date: 'May 2024',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    link: '#',
  },
  {
    title: '5 Ways to Boost Patient Conversion with GoGetWell.AI',
    summary: 'Practical tips for healthcare facilitators to increase patient engagement and grow their business using GoGetWell.AI tools.',
    author: 'Priya Mehta',
    date: 'April 2024',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
    link: '#',
  },
  {
    title: 'The Future of Healthcare Facilitation',
    summary: 'A look at upcoming trends, digital transformation, and what facilitators need to know to stay ahead.',
    author: 'Team GoGetWell',
    date: 'March 2024',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    link: '#',
  },
];

function Blog() {
  return (
    <div className="min-h-screen bg-[#ecfeff] py-16 px-4 flex items-center justify-center">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-cyan-700 mb-8 text-center">Blog</h1>
        <p className="text-lg text-cyan-900 mb-12 text-center max-w-2xl mx-auto">Insights, tips, and stories for healthcare facilitators and digital health innovators.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {posts.map((post, i) => (
            <motion.a
              key={post.title}
              href={post.link}
              className="block bg-cyan-50 rounded-xl shadow hover:shadow-xl transition group overflow-hidden"
              whileHover={{ scale: 1.04 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover group-hover:opacity-90 transition" />
              <div className="p-6">
                <div className="font-bold text-lg mb-2 text-cyan-700">{post.title}</div>
                <div className="text-cyan-800 mb-4 text-sm">{post.summary}</div>
                <div className="flex items-center justify-between text-xs text-cyan-500">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
        <div className="text-center">
          <button type="button" onClick={() => window.location='mailto:hello@gogetwell.ai?subject=Subscribe%20for%20Updates'} className="inline-block bg-cyan-700 text-white font-bold px-8 py-3 rounded-full shadow hover:bg-cyan-500 transition">Subscribe for Updates</button>
        </div>
      </div>
    </div>
  );
}

export default Blog; 