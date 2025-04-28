import React from 'react';
import { motion } from 'framer-motion';
import { FaUserPlus, FaCalendarCheck, FaDollarSign } from 'react-icons/fa';

const stats = [
  { icon: <FaUserPlus />, label: 'New Leads', value: 24 },
  { icon: <FaCalendarCheck />, label: 'Appointments', value: 12 },
  { icon: <FaDollarSign />, label: 'Revenue', value: '$2,400' },
];

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#ecfeff] py-16 px-4 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-cyan-700 mb-4 text-center">Dashboard</h1>
        <p className="text-lg text-cyan-900 mb-8 text-center">Welcome back! Here's a quick overview of your healthcare facilitation business.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-cyan-50 rounded-xl shadow p-6 flex flex-col items-center text-center hover:shadow-xl transition group"
              whileHover={{ scale: 1.06 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
            >
              <div className="text-cyan-600 text-4xl mb-2 group-hover:text-cyan-800 transition">{stat.icon}</div>
              <div className="text-2xl font-bold text-cyan-700">{stat.value}</div>
              <div className="text-cyan-800 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a href="/leads" className="inline-block bg-cyan-700 text-white font-bold px-8 py-3 rounded-full shadow hover:bg-cyan-500 transition">View All Leads</a>
        </div>
      </div>
    </div>
  );
}

export default Dashboard; 