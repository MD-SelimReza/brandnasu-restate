'use client';

import React, { useState } from 'react';
import { FaChevronUp } from 'react-icons/fa';
import Container from './Container';
import HeadingBlock from './ui/HeadingBlock';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title: string;
  description: string;
  faqs: FAQ[];
}

const FAQSection: React.FC<FAQSectionProps> = ({
  title,
  description,
  faqs,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray100">
      <Container>
        <div className="w-full flex lg:gap-10 flex-col lg:flex-row py-8 lg:pt-12">
          {/* Left Section (Title + Description) */}
          <div className="w-full lg:w-2/5 lg:text-left text-center lg:px-0 mb-10">
            <HeadingBlock
              title={title}
              description={description}
              titleColor="text-darkIndigo"
              titleWidth="max-w-sm"
              descriptionColor="text-darkGray"
              descriptionWidth="max-w-4xl"
              textAlignment="left"
            />
          </div>

          {/* Right Section (FAQs) */}
          <div className="w-full lg:w-3/5 space-y-5">
            {faqs.map((faq, index) => (
              <div
                key={index}
                data-aos="fade-up"
                // data-delay={300 + index * 100}
                data-aos-easing="ease"
                data-duration="400"
                className="border-b border-gray-300 pb-3 cursor-pointer"
              >
                <div
                  className="flex justify-between items-center gap-8 py-3"
                  onClick={() => toggleFAQ(index)}
                >
                  <p className="w-full text-left font-bold text-2xl text-darkIndigo">
                    {faq.question}
                  </p>
                  <FaChevronUp
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                <div
                  className={`transition-all overflow-hidden duration-300 ${
                    openIndex === index
                      ? 'max-h-40 opacity-100 mb-4'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-darkGray">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FAQSection;
