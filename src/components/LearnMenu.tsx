'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { FaPlayCircle, FaBook, FaClipboardList, FaFileAlt } from 'react-icons/fa';
import DefaultImage from "../../public/default.jpg"

const LearnMenu = () => (
  <div className="w-full !left-0 bg-white  p-6 rounded-lg drop-shadow-xl border-2 font-sans">
    <div className='max-w-[1440px] mx-auto grid grid-cols-3 gap-6'>
      <div>
        <p className="font-bold text-darkIndigo text-lg border-b pb-2">NOLIMIT UNIVERSITY</p>
        <ul className="space-y-2 text-default text-sm mt-3">
          {[
            { icon: FaBook, title: 'Articles' },
            { icon: FaPlayCircle, title: 'Podcasts & Videos' },
            { icon: FaClipboardList, title: 'Guides, Checklists & Ebooks' },
            { icon: FaFileAlt, title: 'White Papers & Results' }
          ].map(({ icon: Icon, title }, index) => (
            <li key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition">
              <Icon className="text-purple-700 text-lg" />
              <span className="text-gray-900 text-lg">{title}</span>
            </li>
          ))}
        </ul>
        <Link href="#" className="flex items-center text-purple-600 text-sm mt-3 font-medium hover:underline">
          See All <FaArrowRight className="ml-2" />
        </Link>
      </div>
      <div>
        <p className="font-bold text-darkIndigo text-lg border-b pb-2">NEW ARTICLES</p>
        <ul className="space-y-3 text-default text-sm mt-3">
          {Array(3).fill(0).map((_, index) => (
            <li key={index} className="flex gap-3 p-3 rounded-lg hover:bg-gray-100 transition">
              <Image src={DefaultImage} alt="Article Image" className="w-16 h-16 object-cover rounded-md" />
              <div>
                <p className="text-gray-900 font-semibold text-lg mb-1">Example Article Title</p>
                <span className="text-gray-600 text-sm">Brief description of the article content goes here.</span>
              </div>
            </li>
          ))}
        </ul>
        <Link href="#" className="flex items-center text-purple-600 text-sm mt-3 font-medium hover:underline">
          See All <FaArrowRight className="ml-2" />
        </Link>
      </div>
      <div>
        <p className="font-bold text-gray-800 text-lg border-b pb-2">FREE GUIDES</p>
        <ul className="space-y-3 text-default text-sm mt-3">
          {Array(3).fill(0).map((_, index) => (
            <li key={index} className="flex gap-3 p-3 rounded-lg hover:bg-gray-100 transition">
              <Image src={DefaultImage} alt="Guide Image" className="w-16 h-16 object-cover rounded-md" />
              <div>
                <p className="text-gray-900 font-semibold text-lg mb-1">Example Guide Title</p>
                <span className="text-gray-600 text-sm">Brief description of the guide content goes here.</span>
              </div>
            </li>
          ))}
        </ul>
        <Link href="#" className="flex items-center text-purple-600 text-sm mt-3 font-medium hover:underline">
          See All <FaArrowRight className="ml-2" />
        </Link>
      </div>
    </div>
  </div>
);

export default LearnMenu;
