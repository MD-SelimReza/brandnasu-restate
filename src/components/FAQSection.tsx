'use client';

import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    { question: 'How do I know which plan is best for me?', answer: 'You will first want to determine which types of designs you need on a monthly basis which helps you determine which bucket you will fall into. Then, you can choose a price point that fits your budget and volume needs. You can also book a call to speak to a NoLimit Sales Expert to help determine what plan fits your needs the best or try our free Package Selector Tool.' },
    { question: 'What services do you offer?', answer: 'We offer branding and marketing services, including logo design, digital business cards, and website development.' },
    { question: 'How can I contact support?', answer: 'You can reach our support team via email at support@nasu.com or call us at +0911 2345 1234.' },
    { question: 'Do you offer refunds?', answer: 'Yes, we have a refund policy in place. Please check our Terms and Conditions for more details.' }
  ];

  return (
    <section className="w-full max-w-[1440px] mx-auto flex gap-10 flex-col md:flex-row my-44">
      {/* Left Section (40% width) */}
      <div className="w-full md:w-2/5">
        <h2 className="text-3xl md:text-5xl font-bold text-darkIndigo">Frequently <br /> Asked Questions</h2>
        <p className="mt-10 text-xl text-default max-w-lg">Get answers to some of the most commonly asked questions we receive from businesses just like yours.
        </p>
      </div>

      {/* Right Section - FAQs (60% width) */}
      <div className="w-full md:w-3/5 space-y-5">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-[#EFEFEF] rounded-2xl p-8">
            <button
              className="w-full flex justify-between items-center text-black text-left font-semibold text-2xl py-2 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {openIndex === index ? <FaMinus size={24} className="text-black font-medium" /> : <FaPlus size={24} className="text-black font-medium" />}
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-default text-lg">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
