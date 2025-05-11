'use client';

import { useEffect, useState } from 'react';

interface TOCItem {
  id: string;
  label: string;
}

const tocItems: TOCItem[] = [
  { id: 'logo-design-cost', label: 'Logo Design Cost: At A Glance' },
  {
    id: 'importance-of-logo',
    label: 'Why Logo Design is Important for a Brand?',
  },
  { id: 'cost-to-design', label: 'How Much Does It Cost to Design a Logo?' },
  {
    id: 'freelancer-vs-agency',
    label: 'Freelance Graphics Designer VS Agency: Which is the Better Option?',
  },
  { id: 'pricing-factors', label: 'Pricing Factors of Designing a Logo' },
  { id: 'final-discussion', label: 'Final Discussion' },
  { id: 'faq', label: 'FAQs on Logo Design Cost' },
];

const TableOfContents = () => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      let currentId = '';
      for (const item of tocItems) {
        const section = document.getElementById(item.id);
        if (
          section &&
          section.getBoundingClientRect().top < window.innerHeight / 3
        ) {
          currentId = item.id;
        }
      }
      setActiveId(currentId);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="sticky top-32 bg-lightGray p-5 w-full md:w-72">
      <h2 className="text-2xl font-bold text-darkIndigo">Table of Contents</h2>
      <ul className="divide-y divide-gray-400 py-4">
        {tocItems.map((item) => (
          <li key={item.id} className="py-3">
            <a
              href={`#${item.id}`}
              className={`block ${
                activeId === item.id ? 'text-indigo' : 'text-darkGray'
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
