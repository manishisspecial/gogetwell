import React from 'react';

function Privacy() {
  return (
    <div className="min-h-screen bg-[#ecfeff] py-16 px-4 flex items-center justify-center">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-cyan-700 mb-8 text-center">Privacy Policy</h1>
        <div className="text-cyan-900 space-y-6">
          <div>
            <div className="font-bold text-lg mb-2">Effective Date: October 4, 2024</div>
            <p>Welcome to KOLCO COMMERCE PRIVATE LIMITED ("GoGetWell AI","Go Get Well", "we," "our," or "us"). As an AI-powered platform dedicated to transforming the medical tourism industry, we are committed to protecting your privacy and personal information. This Privacy Policy explains our practices regarding the collection, use, and disclosure of personal information when you use our website, applications, and services (collectively, "Services").</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-cyan-700 mb-2">1. Personal Information We Collect</h2>
            <ul className="list-disc ml-6">
              <li><span className="font-semibold">Information You Provide:</span> Account Information, Medical Information, User Content, Communication Information, Facilitator Information.</li>
              <li><span className="font-semibold">Information We Collect Automatically:</span> Log Data, Usage Data, Device Information, Cookies, Analytics.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold text-cyan-700 mb-2">2. How We Use Personal Information</h2>
            <ul className="list-disc ml-6">
              <li>To provide AI-powered medical tourism services, including treatment recommendations and hospital matching.</li>
              <li>To create and manage AI-powered websites for healthcare facilitators.</li>
              <li>To improve our Services and conduct research on medical tourism trends.</li>
              <li>To communicate with you about updates, services, and medical tourism opportunities.</li>
              <li>To develop new features and services for the medical tourism industry.</li>
              <li>To prevent fraud, criminal activity, and protect our IT systems.</li>
              <li>To comply with legal obligations related to healthcare and tourism.</li>
              <li>Aggregated or De-Identified Information: We may aggregate or de-identify personal information for analysis, research, and improving our medical tourism services. This information will not be used to identify you.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold text-cyan-700 mb-2">3. Disclosure of Personal Information</h2>
            <ul className="list-disc ml-6">
              <li>Healthcare Providers: To facilitate medical treatments and hospital bookings.</li>
              <li>Vendors and Service Providers: To support our medical tourism operations.</li>
              <li>Business Transfers: During business transactions such as mergers or acquisitions.</li>
              <li>Legal Requirements: To comply with laws, protect rights, prevent fraud, and ensure safety.</li>
              <li>Affiliates: We may share personal information with our affiliates for purposes consistent with this Privacy Policy.</li>
              <li>Healthcare Facilitators: If you use our platform through a facilitator, they may access your information.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold text-cyan-700 mb-2">4. Your Rights</h2>
            <ul className="list-disc ml-6">
              <li>Access information about how your personal information is processed.</li>
              <li>Request deletion of your personal information.</li>
              <li>Correct inaccurate personal information.</li>
              <li>Transfer your personal information to another party.</li>
              <li>Restrict how your personal information is processed.</li>
              <li>Withdraw consent where consent is the basis for processing.</li>
              <li>Object to how your personal information is processed.</li>
              <li>File a complaint with a data protection authority.</li>
            </ul>
            <p>To exercise these rights, please contact us at <a href="mailto:hello@gogetwell.ai" className="text-cyan-600 hover:underline">hello@gogetwell.ai</a>.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-cyan-700 mb-2">5. Security</h2>
            <p>We implement robust security measures to protect your information, especially sensitive medical data. However, no method of transmission over the Internet is 100% secure.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-cyan-700 mb-2">6. Changes to This Policy</h2>
            <p>We may modify this Privacy Policy from time to time. If we make material changes, we will notify you by updating the effective date at the top of this policy.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-cyan-700 mb-2">7. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy or our medical tourism services, please contact us at <a href="mailto:hello@gogetwell.ai" className="text-cyan-600 hover:underline">hello@gogetwell.ai</a>.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Privacy; 