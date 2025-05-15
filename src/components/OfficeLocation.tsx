'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { IoMoonSharp, IoSunny } from 'react-icons/io5';
import bd from '../../public/bd.svg';
import usa from '../../public/usa.svg';
import { FaWhatsapp } from 'react-icons/fa6';
import { FiMail } from 'react-icons/fi';
import { GrLocation } from 'react-icons/gr';

const OfficeLocation = () => {
  const [bdTime, setBdTime] = useState('');
  const [usaTime, setUsaTime] = useState('');
  const [isBdDay, setIsBdDay] = useState(true);
  const [isUsaDay, setIsUsaDay] = useState(true);

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();

      // Updated time options to remove seconds and AM/PM and use 24-hour format
      const options: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false, // 24-hour format
      };

      // Get local times in each timezone
      const bdTimeZone = new Date(
        now.toLocaleString('en-US', { timeZone: 'Asia/Dhaka' })
      );
      const usaTimeZone = new Date(
        now.toLocaleString('en-US', { timeZone: 'America/New_York' })
      );

      // Set time strings without seconds and AM/PM
      setBdTime(bdTimeZone.toLocaleTimeString('en-US', options));
      setUsaTime(usaTimeZone.toLocaleTimeString('en-US', options));

      // Determine if it's day or night
      setIsBdDay(bdTimeZone.getHours() >= 7 && bdTimeZone.getHours() < 18);
      setIsUsaDay(usaTimeZone.getHours() >= 7 && usaTimeZone.getHours() < 18);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  const TimeBlock = ({
    time,
    isDay,
    label,
  }: {
    time: string;
    isDay: boolean;
    label: string;
  }) => (
    <div className="text-4xl text-darkIndigo font-medium flex flex-col items-end max-w-[200px] w-full">
      <div className="mb-6">
        {isDay ? (
          <IoSunny size={60} className="text-yellow-500" title="Daytime" />
        ) : (
          <IoMoonSharp
            size={60}
            className="text-darkIndigo"
            title="Nighttime"
          />
        )}
      </div>
      <span>{time}</span>
      <p className="text-2xl text-darkGray font-normal">{label}</p>
    </div>
  );

  return (
    <div className="bg-white lg:pb-32 md:pb-24 pb-16">
      <div className="max-w-[1440px] px-5 mx-auto space-y-32">
        {/* Bangladesh Office */}
        <div className="flex justify-between">
          <div className="relative">
            <Image src={bd} alt="Bangladesh" width={350} height={264} />
          </div>
          <div className="text-darkGray max-w-xl w-full">
            <h1 className="text-4xl text-darkIndigo font-medium">Bangladesh</h1>
            <p className="flex items-center gap-2 text-2xl mt-6 pb-10">
              <GrLocation size={30} className="font-bold" /> H-117, Road-3,
              Chandrima Residential Area, <br />
              Rajshahi-6302, Bangladesh
            </p>
            <p className="flex items-center gap-2 mb-4 text-3xl">
              <FiMail /> <span>hello@brandnasu.com</span>
            </p>
            <p className="flex items-center gap-2 text-3xl">
              <FaWhatsapp />
              <span>(505) 575 7863</span>
            </p>
          </div>
          <TimeBlock time={bdTime} isDay={isBdDay} label="Bangladesh Time" />
        </div>

        <hr className="bg-gray-300 h-[2px]" />

        {/* USA Office */}
        <div className="flex justify-between">
          <div className="relative">
            <Image src={usa} alt="USA" width={350} height={264} />
          </div>
          <div className="text-darkGray max-w-xl w-full">
            <h1 className="text-4xl text-darkIndigo font-medium">
              United State
            </h1>
            <p className="flex items-center gap-2 text-2xl mt-6 pb-10">
              <GrLocation size={30} className="font-bold" /> H-117, Road-3,
              Chandrima Residential Area, <br />
              Rajshahi-6302, Bangladesh
            </p>
            <p className="flex items-center gap-2 mb-4 text-3xl">
              <FiMail /> <span>hello@brandnasu.com</span>
            </p>
            <p className="flex items-center gap-2 text-3xl">
              <FaWhatsapp />
              <span>(505) 575 7863</span>
            </p>
          </div>
          <TimeBlock time={usaTime} isDay={isUsaDay} label="USA Time" />
        </div>
      </div>
    </div>
  );
};

export default OfficeLocation;
