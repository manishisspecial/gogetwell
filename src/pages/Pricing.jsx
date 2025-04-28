import React from 'react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Starter',
    price: '$0',
    desc: 'Perfect for getting started. No credit card required.',
    features: [
      'AI Website Builder',
      'Lead Capture',
      'Basic Analytics',
      'Email Support',
    ],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$49/mo',
    desc: 'For growing facilitators who want more automation and insights.',
    features: [
      'Everything in Starter',
      'Automated Follow-ups',
      'Advanced Analytics',
      'Payment Integration',
      'Priority Support',
    ],
    cta: 'Start Pro',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    desc: 'For large teams and hospitals. Custom integrations and support.',
    features: [
      'All Pro Features',
      'Custom Integrations',
      'Dedicated Manager',
      'Onboarding & Training',
      '24/7 Phone Support',
    ],
    cta: 'Contact Sales',
    highlight: false,
  },
];

function Pricing() {
  return (
    <div className="min-h-screen bg-[#ecfeff] py-16 px-4 flex items-center justify-center">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-cyan-700 mb-8 text-center">Pricing</h1>
        <p className="text-lg text-cyan-900 mb-12 text-center max-w-2xl mx-auto">Choose the plan that fits your healthcare facilitation journey. Transparent pricing, no hidden fees, and world-class support.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`rounded-2xl shadow-lg p-8 flex flex-col items-center border-2 transition group ${plan.highlight ? 'border-cyan-600 bg-cyan-50 scale-105 shadow-2xl' : 'border-cyan-100 bg-white'}`}
              whileHover={{ scale: 1.07 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-2xl font-bold mb-2 text-cyan-700">{plan.name}</div>
              <div className="text-4xl font-extrabold mb-2 text-cyan-900">{plan.price}</div>
              <div className="mb-4 text-cyan-700">{plan.desc}</div>
              <ul className="mb-6 space-y-2 text-cyan-800 text-left">
                {plan.features.map(f => (
                  <li key={f} className="flex items-center gap-2"><span className="text-cyan-500">•</span> {f}</li>
                ))}
              </ul>
              <a href="/demo" className={`mt-auto inline-block px-6 py-2 rounded-full font-bold shadow transition ${plan.highlight ? 'bg-cyan-700 text-white hover:bg-cyan-800' : 'bg-cyan-100 text-cyan-700 hover:bg-cyan-200'}`}>{plan.cta}</a>
            </motion.div>
          ))}
        </div>
        {/* Pricing Policy Section */}
        <div className="mt-16 bg-cyan-50 rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-cyan-700 mb-4">Pricing Policy</h2>
          <div className="text-cyan-900 space-y-4 text-sm md:text-base">
            <p>Thank you for choosing gogetwell.ai. Please read our Pricing Policy carefully as it outlines the pricing structure, payment terms, and refund conditions for accessing and using our services.</p>
            <h3 className="font-bold text-cyan-700 mt-4">1. Service Pricing</h3>
            <p>gogetwell.ai offers a variety of innovative tools and services designed for the medical tourism industry. Pricing may vary based on the type of service, features included, and level of access.</p>
            <h4 className="font-semibold text-cyan-600 mt-2">1.1 Subscription Plans</h4>
            <ul className="list-disc ml-6">
              <li>Basic Plan: Limited access to essential features, primarily aimed at new medical tourism service providers.</li>
              <li>Premium Plan: Full access to all platform features, ideal for established medical service providers.</li>
              <li>Enterprise Plan: Custom plans tailored for larger medical tourism operators, offering full platform access with customization and dedicated support.</li>
            </ul>
            <h3 className="font-bold text-cyan-700 mt-4">2. Payment Terms</h3>
            <ul className="list-disc ml-6">
              <li><span className="font-semibold">Billing Information:</span> You must provide complete and accurate billing information, including a valid payment method, to process services from gogetwell.ai-US.</li>
              <li><span className="font-semibold">Subscription Payments:</span> All subscription fees are recurring based (monthly or annually) and will automatically renew unless cancelled prior to renewal.</li>
              <li><span className="font-semibold">Service Credits:</span> Credits must be purchased in advance. All service credits are subject to gogetwell.ai-US's Service Credit Terms.</li>
            </ul>
            <h3 className="font-bold text-cyan-700 mt-4">3. Price Changes</h3>
            <ul className="list-disc ml-6">
              <li>We reserve the right to change prices from time to time. We will provide at least 30 days notice before any price changes take effect.</li>
              <li>Custom pricing adjustments may be evaluated on agreed upon between gogetwell.ai-US and the customer.</li>
            </ul>
            <h3 className="font-bold text-cyan-700 mt-4">4. Refund Policy</h3>
            <p>All payments are non-refundable except where required by law in cases of service unavailability.</p>
            <h3 className="font-bold text-cyan-700 mt-4">5. Service Discontinuation</h3>
            <p>gogetwell.ai-US may discontinue services at any time with reasonable notice. If a service you paid for is discontinued, you will be refunded for the unused portion.</p>
            <h3 className="font-bold text-cyan-700 mt-4">6. Contact Us</h3>
            <p>For questions or concerns about this Pricing Policy or our services, please contact us at <a href="mailto:hello@gogetwell.ai" className="text-cyan-600 hover:underline">hello@gogetwell.ai</a>.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing; 