import React from 'react';
import { FaRobot, FaUserFriends, FaSyncAlt, FaLock, FaChartBar, FaPlug, FaHeadset, FaCreditCard } from 'react-icons/fa';
import { motion } from 'framer-motion';

const features = [
  { icon: <FaRobot />, title: 'AI Website Builder', desc: 'Launch a beautiful, conversion-optimized website in minutes with AI.' },
  { icon: <FaUserFriends />, title: 'Lead Management', desc: 'Capture, organize, and nurture patient leads with ease.' },
  { icon: <FaSyncAlt />, title: 'Automated Follow-ups', desc: 'Never miss a patient. Automated reminders and follow-ups built in.' },
  { icon: <FaCreditCard />, title: 'Secure Payments', desc: 'Accept payments securely and manage billing with confidence.' },
  { icon: <FaChartBar />, title: 'Analytics', desc: 'Track performance, patient engagement, and growth with real-time analytics.' },
  { icon: <FaPlug />, title: 'Integrations', desc: 'Connect with hospital systems, CRMs, and more.' },
  { icon: <FaHeadset />, title: '24/7 Support', desc: 'Get help anytime with our dedicated support team.' },
  { icon: <FaLock />, title: 'Privacy & Security', desc: 'HIPAA-compliant, privacy-first platform for peace of mind.' },
];

function Features() {
  return (
    <div className="min-h-screen bg-[#ecfeff] py-16 px-4 flex items-center justify-center">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-cyan-700 mb-8 text-center">Features</h1>
        <p className="text-lg text-cyan-900 mb-12 text-center max-w-2xl mx-auto">GoGetWell.AI gives you everything you need to grow your healthcare facilitation business—powered by AI, designed for results.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="bg-cyan-50 rounded-xl shadow p-6 flex flex-col items-center text-center hover:shadow-xl transition group"
              whileHover={{ scale: 1.06 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
            >
              <div className="text-cyan-600 text-4xl mb-4 group-hover:text-cyan-800 transition">{f.icon}</div>
              <div className="font-bold text-lg mb-2">{f.title}</div>
              <div className="text-cyan-700 text-sm">{f.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features; 