import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaUserSecret, FaLock, FaClipboardCheck } from 'react-icons/fa';

const features = [
  { icon: <FaShieldAlt />, title: 'HIPAA Compliant', desc: 'We meet the highest standards for healthcare data privacy and security.' },
  { icon: <FaLock />, title: 'Data Encryption', desc: 'All patient and business data is encrypted in transit and at rest.' },
  { icon: <FaUserSecret />, title: 'Privacy-First', desc: 'Your data is never sold or shared. Privacy is our promise.' },
  { icon: <FaClipboardCheck />, title: 'Regular Audits', desc: 'We conduct regular security audits and updates to keep your data safe.' },
];

function Security() {
  return (
    <div className="min-h-screen bg-[#ecfeff] py-16 px-4 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-cyan-700 mb-8 text-center">Security</h1>
        <p className="text-lg text-cyan-900 mb-12 text-center max-w-2xl mx-auto">Your trust is our top priority. GoGetWell.AI is built with industry-leading security and privacy standards.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              className="bg-cyan-50 rounded-xl shadow p-6 flex flex-col items-center text-center hover:shadow-xl transition group"
              whileHover={{ scale: 1.06 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
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

export default Security; 