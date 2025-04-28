import React from 'react';

const faqs = [
  {
    q: 'What is gogetwell.ai?',
    a: 'gogetwell.ai is an AI-powered platform that helps healthcare facilitators streamline their operations, from building customized websites to managing patient leads and enhancing communication.'
  },
  {
    q: 'What is the AI Front Office for Healthcare Agents?',
    a: 'The AI Front Office is a powerful platform that helps me manage my healthcare services more efficiently. It handles patient leads, books appointments, and even builds a professional website—all using AI, so I can focus on delivering care.'
  },
  {
    q: 'How does the AI Agent assist me in my healthcare business?',
    a: 'The AI Agent works like a virtual assistant, answering patient questions, scheduling consultations, and managing appointments in real time. It helps me automate everyday tasks, saving me time and boosting my productivity.'
  },
  {
    q: 'Can I customize the website for my healthcare services?',
    a: 'Yes, I can fully customize the website to showcase my services. I get to choose the design, features, and content that best represent my brand, making it easy to attract and engage with patients.'
  },
  {
    q: 'How does this platform support independent healthcare facilitators like me?',
    a: 'The platform is designed specifically for independent facilitators or small teams. It integrates AI to automate my front-office tasks, manage patient leads, and even process payments, making it ideal for gig economy professionals.'
  },
  {
    q: 'How does the platform help me manage patient leads?',
    a: 'The AI system captures, organizes, and prioritizes patient leads for me. It follows up with patients, schedules consultations, and makes sure I never miss an opportunity to provide care.'
  },
  {
    q: 'Is it easy to integrate the platform with the hospitals I work with?',
    a: 'Yes, the platform easily connects with the hospital systems I collaborate with. It helps me manage billing, communication, and partnerships without any hassle.'
  },
  {
    q: 'Is the platform secure and compliant with healthcare regulations?',
    a: 'Absolutely. The platform is designed with top-level security measures and complies with healthcare regulations, so I know that my patients\' data is always protected.'
  },
  {
    q: 'How quickly can I get started with the platform?',
    a: 'Setting up the platform is fast and easy. I can create my AI-powered front office and website in no time, and the support team guides me through the entire process.'
  },
  {
    q: 'What kind of customer support is available if I need help?',
    a: 'I have access to 24/7 customer support, along with tutorials and live demos, to make sure I get the most out of the platform and can resolve any issues quickly.'
  },
  {
    q: 'How does the platform help me attract more patients?',
    a: 'The platform allows me to create a custom, SEO-optimized website, manage patient communication, and build a strong online reputation, all of which help me attract and retain more patients.'
  },
];

function Support() {
  return (
    <div className="min-h-screen bg-[#ecfeff] py-16 px-4 flex items-center justify-center">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-cyan-700 mb-8 text-center">Frequently Asked Questions</h1>
        <div className="divide-y divide-cyan-100 rounded-2xl">
          {faqs.map((faq, i) => (
            <details key={i} className="group p-6 cursor-pointer" open={i === 0}>
              <summary className="font-semibold text-cyan-700 text-lg flex items-center justify-between group-open:text-cyan-600 transition">
                {faq.q}
                <span className="ml-2 text-cyan-400">▼</span>
              </summary>
              <div className="mt-2 text-cyan-900 text-base">{faq.a}</div>
            </details>
          ))}
        </div>
        <div className="text-center mt-10">
          <a href="/contact" className="inline-block bg-cyan-700 text-white font-bold px-8 py-3 rounded-full shadow hover:bg-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-300 transition">Still have questions? Contact Us</a>
        </div>
      </div>
    </div>
  );
}

export default Support; 