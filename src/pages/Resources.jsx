import React from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaVideo, FaChalkboardTeacher, FaFileAlt } from 'react-icons/fa';

const resources = [
  { icon: <FaBook />, name: 'Guides', desc: 'Step-by-step guides to help you get the most from GoGetWell.AI.' },
  { icon: <FaVideo />, name: 'Tutorials', desc: 'Video tutorials for every feature and workflow.' },
  { icon: <FaChalkboardTeacher />, name: 'Webinars', desc: 'Live and recorded webinars with industry experts.' },
  { icon: <FaFileAlt />, name: 'Case Studies', desc: 'See how real facilitators are succeeding with GoGetWell.AI.' },
];

function Resources() {
  return (
    <div className="min-h-screen bg-[#ecfeff] py-16 px-4 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-cyan-700 mb-8 text-center">Resources</h1>
        <p className="text-lg text-cyan-900 mb-12 text-center max-w-2xl mx-auto">Learn, grow, and succeed with our curated resources for healthcare facilitators.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.map((r, idx) => (
            <motion.div
              key={r.name}
              className="bg-cyan-50 rounded-xl shadow p-6 flex flex-col items-center text-center hover:shadow-xl transition group"
              whileHover={{ scale: 1.06 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="text-cyan-600 text-4xl mb-4 group-hover:text-cyan-800 transition">{r.icon}</div>
              <div className="font-bold text-lg mb-2">{r.name}</div>
              <div className="text-cyan-700 text-sm">{r.desc}</div>
            </motion.div>
          ))}
        </div>
        {/* Editorial Policy Section */}
        <div className="mt-16 bg-cyan-50 rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-cyan-700 mb-4">Editorial Policy</h2>
          <div className="text-cyan-900 space-y-4 text-sm md:text-base">
            <p>GoGetWell.ai is committed to delivering authoritative healthcare and medical travel information that empowers global users to make informed healthcare decisions.</p>
            <h3 className="font-bold text-cyan-700 mt-4">Editorial Excellence</h3>
            <p>Our platform serves as a bridge between patients and healthcare providers across 15+ countries, having assisted many patients worldwide.</p>
            <h3 className="font-bold text-cyan-700 mt-4">Content Standards</h3>
            <ul className="list-disc ml-6">
              <li>Content development follows a structured framework with rigorous verification.</li>
              <li>Writing maintains clarity, accessibility, and originality.</li>
              <li>All material undergoes expert medical review.</li>
              <li>Information is supported by verified statistics and credible references.</li>
            </ul>
            <h3 className="font-bold text-cyan-700 mt-4">Content Categories</h3>
            <ul className="list-disc ml-6">
              <li><span className="font-semibold">Healthcare Provider Profiles:</span> Comprehensive doctor credentials, hospital facilities, updated hours, and accessibility details.</li>
              <li><span className="font-semibold">Medical Information:</span> Procedure guides, cost analysis, hospital stay info, success rates, and patient testimonials.</li>
              <li><span className="font-semibold">Educational Resources:</span> In-depth articles, blogs, multimedia, and social media campaigns.</li>
            </ul>
            <h3 className="font-bold text-cyan-700 mt-4">Content Development</h3>
            <ul className="list-disc ml-6">
              <li>Expert writers with healthcare knowledge.</li>
              <li>Medical professional review process.</li>
              <li>Clear structure with visual elements and internal linking.</li>
              <li>Regular updates for accuracy.</li>
            </ul>
            <h3 className="font-bold text-cyan-700 mt-4">Focus Areas</h3>
            <ul className="list-disc ml-6">
              <li>Neurosurgery, Cardiac procedures, Orthopedic treatments, and other specialized medical services.</li>
            </ul>
            <h3 className="font-bold text-cyan-700 mt-4">Cost Information</h3>
            <p>Treatment costs provided are indicative and may vary based on country, city, hospital, doctor, and care requirements.</p>
            <h3 className="font-bold text-cyan-700 mt-4">Legal Considerations</h3>
            <ul className="list-disc ml-6">
              <li><span className="font-semibold">Disclaimer:</span> The platform provides informational content only, not medical advice. Users should consult healthcare professionals for medical decisions.</li>
              <li><span className="font-semibold">Updates and Corrections:</span> Contact <a href="mailto:hello@gogetwell.ai" className="text-cyan-600 hover:underline">hello@gogetwell.ai</a> for content updates, corrections, or suggestions.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resources; 