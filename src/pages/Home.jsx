import React from 'react';
import { motion } from 'framer-motion';
import { UserGroupIcon, BuildingOffice2Icon, DocumentChartBarIcon, ChatBubbleLeftRightIcon, GlobeAltIcon, CreditCardIcon, ChartBarIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const featureIcons = [
  <UserGroupIcon className="h-10 w-10 text-blue-500" />,
  <BuildingOffice2Icon className="h-10 w-10 text-blue-500" />,
  <DocumentChartBarIcon className="h-10 w-10 text-blue-500" />,
  <ChatBubbleLeftRightIcon className="h-10 w-10 text-blue-500" />,
  <ChartBarIcon className="h-10 w-10 text-blue-500" />,
  <GlobeAltIcon className="h-10 w-10 text-blue-500" />,
  <CreditCardIcon className="h-10 w-10 text-blue-500" />,
  <ShieldCheckIcon className="h-10 w-10 text-blue-500" />
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: 'easeOut',
    },
  }),
};

const stats = [
  { label: 'qualified doctors', value: '2100+' },
  { label: 'hospitals', value: '1000+' },
  { label: 'AI Treatment Plans', value: '800+' },
];

const features = [
  {
    title: 'Custom AI-Powered Website',
    desc: 'Intelligent, responsive websites tailored to healthcare providers with automated patient interactions.',
    icon: featureIcons[0],
  },
  {
    title: 'Enhanced Patient Conversion',
    desc: 'Smart conversion optimization tools to turn visitors into patients with personalized experiences.',
    icon: featureIcons[1],
  },
  {
    title: 'Real-Time Query Handling',
    desc: 'Instant response system for patient inquiries with AI-powered chat support.',
    icon: featureIcons[2],
  },
  {
    title: 'Medical Report Analysis',
    desc: 'Advanced AI analysis of medical reports for quick and accurate patient assessments.',
    icon: featureIcons[3],
  },
  {
    title: 'Improved Lead Generation',
    desc: 'Data-driven lead generation strategies to attract and engage potential patients.',
    icon: featureIcons[0],
  },
  {
    title: 'Comprehensive Healthcare Database',
    desc: 'Extensive medical information database for accurate patient guidance and support.',
    icon: featureIcons[1],
  },
  {
    title: 'Multilingual Support',
    desc: 'Breaking language barriers with comprehensive multilingual communication tools.',
    icon: featureIcons[2],
  },
  {
    title: 'Seamless Payment Handling',
    desc: 'Secure and efficient payment processing for medical services globally.',
    icon: featureIcons[3],
  },
  {
    title: 'Marketing And SEO Support',
    desc: 'Optimized digital presence with advanced SEO and marketing strategies.',
    icon: featureIcons[0],
  },
];

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

function Home() {
  return (
    <main className="bg-[#ecfeff]">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-br from-cyan-700 to-cyan-400 text-white py-24 px-4"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        custom={0}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <motion.div className="flex-1 md:pr-12" variants={fadeInUp} custom={1}>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg">Website Builder <span className="text-cyan-200">for healthcare facilitators</span></h1>
            <p className="text-2xl md:text-3xl mb-2 max-w-xl font-light">Create AI Store in 2 min</p>
            <p className="text-lg md:text-xl mb-8 max-w-xl font-light">Boost Patients Conversion and Earn While Sleeping</p>
            <div className="flex gap-4 mb-8">
              <motion.a href="/demo" className="inline-block bg-cyan-500 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:bg-cyan-400 focus:outline-none focus:ring-4 focus:ring-cyan-200 transition" whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.97 }}>Get Started</motion.a>
            </div>
            <div className="flex gap-8 mb-8">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-bold text-cyan-100">{stat.value}</div>
                  <div className="text-sm text-cyan-100 opacity-80">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
          {/* Animated SVG Spinner + Embedded YouTube Video */}
          <motion.div className="flex-1 flex flex-col items-center w-full gap-6" variants={fadeInUp} custom={2}>
            <div className="w-full max-w-md flex items-center justify-center">
              <svg className="animate-spin h-24 w-24 text-cyan-400" viewBox="0 0 50 50">
                <circle className="opacity-25" cx="25" cy="25" r="20" fill="none" stroke="currentColor" strokeWidth="6" />
                <path className="opacity-75" fill="currentColor" d="M25 5a20 20 0 0 1 20 20h-6a14 14 0 0 0-14-14V5z" />
              </svg>
            </div>
            <div className="w-full max-w-xl aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg border-4 border-white">
              <iframe
                src="https://www.youtube.com/embed/xQl8i2sO_Ls"
                title="GoGetWell Preview Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-72 md:h-96"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* AI Front Office Section */}
      <motion.section className="py-20 px-4 bg-gradient-to-br from-cyan-50 to-cyan-100" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} custom={1}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 md:pr-12">
            <h2 className="text-4xl font-bold mb-4 text-cyan-700">AI Front Office for Healthcare Agents</h2>
            <p className="text-lg text-cyan-900 mb-6">A powerful platform to manage your healthcare services more efficiently. The AI Front Office handles patient leads, books appointments, and even builds a professional website—all using AI, so you can focus on delivering care.</p>
            <ul className="list-disc ml-6 text-cyan-700">
              <li>Virtual AI Agent answers patient questions, schedules consultations, and manages appointments in real time.</li>
              <li>Automate everyday tasks, save time, and boost productivity.</li>
              <li>Customizable to showcase your services and brand.</li>
            </ul>
          </div>
          <div className="flex-1 flex justify-center">
            <img src="https://cdn.jsdelivr.net/gh/saadeghi/files/ai-agent-illustration.svg" alt="AI Front Office Illustration" className="w-full max-w-md rounded-2xl shadow-2xl border-4 border-white" />
          </div>
        </div>
      </motion.section>

      {/* Growth Focus & Efficient Operations Section */}
      <motion.section className="py-16 px-4 bg-white" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} custom={1}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-2 text-cyan-700">Growth Focus</h3>
            <p className="text-cyan-900 mb-4">Maximizing revenue and opportunities for healthcare facilitators and hospitals.</p>
            <ul className="list-disc ml-6 text-cyan-700">
              <li>Optimized operations with advanced technology</li>
              <li>Data-driven lead generation and conversion</li>
              <li>Comprehensive marketing and SEO support</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2 text-cyan-700">Efficient Operations</h3>
            <p className="text-cyan-900 mb-4">Streamlined booking, management, and patient communication for better outcomes.</p>
            <ul className="list-disc ml-6 text-cyan-700">
              <li>Automated patient interactions and real-time query handling</li>
              <li>Seamless payment and multilingual support</li>
              <li>24/7 support for patients and facilitators</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-cyan-50 to-cyan-100">
        <h2 className="text-4xl font-bold text-center mb-14 text-cyan-700">Our Comprehensive Solutions</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-8 text-center border-t-4 border-cyan-400 flex flex-col items-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.7, ease: 'easeOut' }}
            >
              {f.icon}
              <h3 className="font-semibold text-xl mb-2 text-cyan-700">{f.title}</h3>
              <p className="text-cyan-900">{f.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.div className="text-center mt-14" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}>
          <a href="/demo" className="inline-block bg-cyan-700 text-white font-bold px-10 py-4 rounded-full shadow-lg hover:bg-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-300 transition text-lg">Get Your Patient Ready Website Now</a>
        </motion.div>
        <div className="text-center mt-4 text-lg text-cyan-700">Use power AI to transform your online presence and automate patient interactions</div>
        <div className="text-center mt-2">
          <a href="/contact" className="inline-block bg-cyan-500 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:bg-cyan-400 focus:outline-none focus:ring-4 focus:ring-cyan-200 transition">Join the Waiting List</a>
        </div>
      </section>

      {/* Mission & Challenges Section */}
      <motion.section className="py-24 px-4 bg-white" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} custom={1}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-cyan-700">Our Mission</h2>
            <p className="text-lg text-cyan-900 mb-6">Our mission is to simplify the complex medical tourism process by leveraging advanced AI tools that optimize healthcare facilitators operations, maximize revenue opportunities, and provide patients with personalized and stress-free treatment journeys.</p>
            <p className="text-lg text-cyan-900 mb-2">We strive to become the leading platform for healthcare tourism management and digital transformation.</p>
            <ul className="list-disc ml-6 text-cyan-700">
              <li>AI-Powered Solutions: Optimizing operations with advanced technology</li>
              <li>Growth Focus: Maximizing revenue and opportunities</li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4 text-cyan-700">The Challenges We Solve</h2>
            <p className="text-lg text-cyan-900 mb-6">Medical tourism, especially in India, is plagued by disorganization and inefficiency. Facilitators often rely on outdated methods, leading to delayed bookings, inadequate patient support, and missed growth opportunities.</p>
            <p className="text-lg text-cyan-900 mb-2">Our platform addresses these pain points by streamlining lead management and improving operational efficiency for facilitators and hospitals alike.</p>
            <ul className="list-disc ml-6 text-cyan-700">
              <li>Efficient Operations: Streamlined booking and management</li>
              <li>Enhanced Support: Improved patient communication</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section className="py-24 px-4 bg-gradient-to-br from-cyan-50 to-cyan-100" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} custom={1}>
        <h2 className="text-4xl font-bold text-center mb-14 text-cyan-700">Frequently Asked Questions</h2>
        <div className="max-w-4xl mx-auto divide-y divide-cyan-100 rounded-2xl bg-white shadow-lg">
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
      </motion.section>

      {/* Testimonials Section */}
      <motion.section className="py-24 px-4 bg-gradient-to-br from-cyan-50 to-cyan-100" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} custom={1}>
        <h2 className="text-4xl font-bold text-center mb-14 text-cyan-700">What Our Users Say</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
          <motion.div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center border-l-4 border-cyan-400" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.7, ease: 'easeOut' }}>
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Alex P." className="w-16 h-16 rounded-full mb-4 border-4 border-cyan-200" />
            <p className="italic mb-4 text-cyan-900 text-lg">“GoGetWell helped me understand my health better and make smarter choices every day!”</p>
            <div className="font-semibold text-cyan-700">— Alex P.</div>
          </motion.div>
          <motion.div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center border-l-4 border-cyan-400" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}>
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Priya S." className="w-16 h-16 rounded-full mb-4 border-4 border-cyan-200" />
            <p className="italic mb-4 text-cyan-900 text-lg">“The AI recommendations are spot on and super easy to follow.”</p>
            <div className="font-semibold text-cyan-700">— Priya S.</div>
          </motion.div>
          <motion.div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center border-l-4 border-cyan-400" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}>
            <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Dr. Kumar" className="w-16 h-16 rounded-full mb-4 border-4 border-cyan-200" />
            <p className="italic mb-4 text-cyan-900 text-lg">“The AI Front Office made my clinic operations seamless and my patients love the instant responses!”</p>
            <div className="font-semibold text-cyan-700">— Dr. Kumar</div>
          </motion.div>
        </div>
      </motion.section>

      {/* Live Demo Section */}
      <motion.section className="py-24 px-4 bg-white" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} custom={1}>
        <h2 className="text-4xl font-bold text-center mb-8 text-cyan-700">See GoGetWell in Action</h2>
        <div className="max-w-4xl mx-auto bg-cyan-50 rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-2 text-cyan-700">Live Dashboard Preview</h3>
            <p className="text-cyan-900 mb-4">Experience a sample of our AI-powered dashboard. Manage patient leads, view analytics, and interact with the AI agent—all in one place.</p>
            <ul className="list-disc ml-6 text-cyan-700">
              <li>Instant patient lead capture and follow-up</li>
              <li>Real-time chat with AI agent</li>
              <li>Analytics and conversion tracking</li>
            </ul>
          </div>
          <div className="flex-1 flex justify-center">
            <img src="https://cdn.jsdelivr.net/gh/saadeghi/files/dashboard-preview.svg" alt="Dashboard Preview" className="w-full max-w-md rounded-xl shadow border-2 border-cyan-200" />
          </div>
        </div>
        <div className="text-center mt-8">
          <a href="/demo" className="inline-block bg-cyan-700 text-white font-bold px-10 py-4 rounded-full shadow-lg hover:bg-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-300 transition text-lg">Try the Live Demo</a>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section className="py-24 px-4 bg-white" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} custom={1}>
        <h2 className="text-4xl font-bold text-center mb-8 text-cyan-700">Let's get in touch!</h2>
        <div className="max-w-2xl mx-auto text-center text-lg text-cyan-900 mb-8">Got questions about GoGetWell.AI? Our team is here to help. Contact us for quick and friendly support.</div>
        <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-8 text-center">
          <div>
            <div className="font-bold text-cyan-700 mb-1">Phone</div>
            <div className="text-cyan-900 mb-4">+91 9811396858</div>
            <div className="font-bold text-cyan-700 mb-1">Email</div>
            <div className="text-cyan-900">hello@gogetwell.ai</div>
          </div>
          <div>
            <div className="font-bold text-cyan-700 mb-1">Social</div>
            <div className="flex flex-col items-center gap-2">
              <a href="https://x.com/gogetwellai" className="text-cyan-500 hover:underline" target="_blank" rel="noopener noreferrer">Twitter/X</a>
              <a href="https://www.linkedin.com/company/gogetwellai/" className="text-cyan-700 hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}

export default Home; 