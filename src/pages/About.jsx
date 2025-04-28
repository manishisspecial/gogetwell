import React from 'react';
import challengesImg from '../images/challenges_solve-CteFwxY1.gif';

function About() {
  return (
    <div className="min-h-screen bg-[#ecfeff] py-16 px-4 flex items-center justify-center">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-cyan-700 mb-4 text-center">About GoGetWell.AI</h1>
        <p className="text-lg text-cyan-900 mb-6 text-center">Our mission is to simplify the complex medical tourism process by leveraging advanced AI tools that optimize healthcare facilitators' operations, maximize revenue opportunities, and provide patients with personalized and stress-free treatment journeys.</p>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-cyan-700 mb-2">Our Vision</h2>
          <p className="text-cyan-900 mb-2">To become the leading platform for healthcare tourism management and digital transformation, empowering facilitators and patients worldwide.</p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-cyan-700 mb-4">The Challenges We Solve</h2>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img src={challengesImg} alt="Challenges we solve" className="w-full md:w-1/2 rounded-xl shadow" />
            <div>
              <ul className="list-disc ml-6 text-cyan-700 mb-2">
                <li>Disorganization and inefficiency in medical tourism, especially in India</li>
                <li>Outdated methods leading to delayed bookings and inadequate patient support</li>
                <li>Missed growth opportunities for facilitators and hospitals</li>
              </ul>
              <p className="text-cyan-900">Our platform streamlines lead management and improves operational efficiency for facilitators and hospitals alike.</p>
            </div>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-cyan-700 mb-2">Our Values</h2>
          <ul className="list-disc ml-6 text-cyan-700">
            <li>Innovation: AI-powered solutions for real-world healthcare challenges</li>
            <li>Trust: Secure, compliant, and privacy-first platform</li>
            <li>Growth: Maximizing opportunities for all stakeholders</li>
            <li>Support: 24/7 assistance for patients and facilitators</li>
          </ul>
        </div>
        <div className="text-center mt-8">
          <a href="/demo" className="inline-block bg-cyan-700 text-white font-bold px-8 py-3 rounded-full shadow hover:bg-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-300 transition">Get Started with GoGetWell</a>
        </div>
      </div>
    </div>
  );
}

export default About; 