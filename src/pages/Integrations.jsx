import React from 'react';
import { motion } from 'framer-motion';
import { FaHospital, FaChartLine, FaCreditCard, FaDatabase } from 'react-icons/fa';

const integrations = [
  { icon: <FaHospital />, name: 'Hospital Systems', desc: 'Seamless integration with leading hospital management systems.' },
  { icon: <FaDatabase />, name: 'CRMs', desc: 'Connect your favorite CRM for unified patient management.' },
  { icon: <FaCreditCard />, name: 'Payment Gateways', desc: 'Accept payments with Stripe, Razorpay, and more.' },
  { icon: <FaChartLine />, name: 'Analytics', desc: 'Sync with Google Analytics and other tools for insights.' },
];

function Integrations() {
  return (
    <div className="min-h-screen bg-[#ecfeff] py-16 px-4 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-cyan-700 mb-8 text-center">Integrations</h1>
        <p className="text-lg text-cyan-900 mb-12 text-center max-w-2xl mx-auto">GoGetWell.AI connects with the tools you already use, making your workflow seamless and efficient.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {integrations.map((i, idx) => (
            <motion.div
              key={i.name}
              className="bg-cyan-50 rounded-xl shadow p-6 flex flex-col items-center text-center hover:shadow-xl transition group"
              whileHover={{ scale: 1.06 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="text-cyan-600 text-4xl mb-4 group-hover:text-cyan-800 transition">{i.icon}</div>
              <div className="font-bold text-lg mb-2">{i.name}</div>
              <div className="text-cyan-700 text-sm">{i.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Integrations; 