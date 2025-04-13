'use client';

import React, { useState } from 'react';
import { FaChevronUp } from 'react-icons/fa';
import Container from './Container';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    { question: 'What types of real estate professionals do you work with?', answer: 'We work with realtors, brokers, agencies, property managers, and real estate coaches—helping them build a strong brand, attract leads, and grow their business.' },
    { question: 'What services do you offer?', answer: 'We offer branding and marketing services, including logo design, digital business cards, and website development.' },
    { question: 'What’s the difference between one-time services and subscription plans?', answer: 'Our one-time services are perfect for real estate professionals who need branding, marketing, or web solutions as a single project. Our subscription plans offer unlimited design and marketing support to keep your business growing month after month.' },
    { question: 'How does the subscription model work?', answer: 'With our subscription plans, you get unlimited branding, marketing, and design requests. Simply submit your requests, and we’ll deliver high-quality designs fast—no hourly rates or hidden fees.' },
    { question: 'How does the subscription model work?', answer: 'With our subscription plans, you get unlimited branding, marketing, and design requests. Simply submit your requests, and we’ll deliver high-quality designs fast—no hourly rates or hidden fees.' },
    { question: 'Can I request custom services that aren’t listed?', answer: 'Yes! If you need a custom branding, marketing, or web solution, let us know. We’ll work with you to create a tailored strategy that fits your goals.' },
    { question: 'How do I get started?', answer: 'It’s simple! Choose a one-time service or subscription plan, submit your request, and we’ll take care of the rest—so you can focus on closing more deals.' },
  ];

  return (
    <Container>
      <div className="w-full flex lg:gap-10 flex-col lg:flex-row my-16 xl:my-44">
        {/* Left Section (40% width) */}
        <div className="w-full lg:w-2/5 lg:text-left text-center lg:px-0 mb-10">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-darkIndigo lg:max-w-full lg:px-0 md:px-10 lg:text-left text-center">
            Frequently Asked Questions
          </h2>
          <p className="xl:mt-6 md:mt-5 mt-4 text-sm md:text-xl text-default md:px-16 lg:text-left lg:px-0 text-center">
            Get answers to some of the most commonly asked questions we receive from businesses just like yours.
          </p>
        </div>

        {/* Right Section - FAQs (60% width) */}
        <div className="w-full lg:w-3/5 space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-300 pb-3 cursor-pointer"
            >
              <div
                className="flex justify-between items-center gap-8 py-3"
                onClick={() => toggleFAQ(index)}
              >
                <p className="w-full flex justify-between gap-4 items-baseline text-black text-left font-bold text-xl py-2 focus:outline-none">{faq.question}</p>
                <FaChevronUp className={`w-5 h-5 text-gray-500 transition-all duration-300 ${openIndex === index ? "rotate-180" : ""}`} />
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-40 opacity-100 mb-4' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-default text-lg">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default FAQSection;
