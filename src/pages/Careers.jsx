import React from 'react';
import { motion } from 'framer-motion';

const roles = [
  { title: 'Frontend Developer', location: 'Remote', type: 'Full-time', desc: 'Build beautiful, scalable UIs for healthcare SaaS.' },
  { title: 'AI Product Manager', location: 'Remote', type: 'Full-time', desc: 'Lead the vision and execution of AI-powered features.' },
  { title: 'Customer Success Specialist', location: 'Remote', type: 'Full-time', desc: 'Help our customers thrive and grow with GoGetWell.AI.' },
];

const values = [
  'Innovation in healthcare',
  'Remote-first, global team',
  'Diversity & inclusion',
  'Continuous learning',
  'Making a real impact',
];

function Careers() {
  return (
    <div className="min-h-screen bg-[#ecfeff] py-16 px-4 flex items-center justify-center">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-cyan-700 mb-8 text-center">Careers</h1>
        <p className="text-lg text-cyan-900 mb-8 text-center max-w-2xl mx-auto">Join a team that's transforming healthcare with AI. We're remote, diverse, and passionate about making a difference.</p>
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-700 mb-4">Our Values</h2>
          <ul className="flex flex-wrap gap-4 justify-center mb-4">
            {values.map(v => (
              <li key={v} className="bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full font-semibold shadow">{v}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-cyan-700 mb-4">Open Roles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roles.map((role, i) => (
              <motion.div
                key={role.title}
                className="bg-cyan-50 rounded-xl shadow p-6 flex flex-col items-start hover:shadow-xl transition group"
                whileHover={{ scale: 1.04 }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="font-bold text-lg mb-2 text-cyan-700">{role.title}</div>
                <div className="text-cyan-800 mb-1 text-sm">{role.location} • {role.type}</div>
                <div className="text-cyan-700 text-sm mb-4">{role.desc}</div>
                <a href="mailto:careers@gogetwell.ai" className="mt-auto inline-block bg-cyan-700 text-white font-bold px-6 py-2 rounded-full shadow hover:bg-cyan-500 transition">Apply Now</a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Careers; 