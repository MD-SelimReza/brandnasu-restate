import Image from 'next/image';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa6';
import contactHero from '../../public/Logo/3d-logo.png';
import { FiMail } from 'react-icons/fi';
import { TfiWorld } from 'react-icons/tfi';

const ContactHero = () => {
  return (
    <div className="bg-darkIndigo lg:py-32 md:py-24 py-16">
      <div className="max-w-[1440px] px-5 mx-auto space-y-10">
        <div className="space-y-6">
          <h1 className="text-3xl md:text-3xl lg:text-4xl lg:!leading-[43px] font-bold text-white">
            Let&apos;s Build Your Brand Together
          </h1>
          <p className="text-lightIndigo border-b-[0.1px] border-b-lightIndigo/25 pb-8">
            We&apos;re ready to hear from you, whether you have a clear brief or
            just an idea. Connect with us via WhatsApp, email, or through our
            website. Let&apos;s build something impactful together.
          </p>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center pt-10 lg:pt-14 gap-10">
          {/* Left side - contact info */}
          <div className="space-y-16 max-w-lg w-full px-4 lg:px-0">
            <div className="space-y-8">
              {/* WhatsApp Contact */}
              <div className="space-y-4">
                <p className="text-lightIndigo">Chat directly with our team</p>
                <h3 className="text-2xl md:text-3xl text-white flex items-center gap-2">
                  <FaWhatsapp />
                  <a
                    href="https://wa.me/15055757863"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    (505) 575 7863
                  </a>
                </h3>
              </div>

              {/* Email Contact */}
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl text-white flex items-center gap-2">
                  <FiMail />
                  <a
                    href="mailto:hello@brandnasu.com"
                    className="hover:underline"
                  >
                    hello@brandnasu.com
                  </a>
                </h3>
              </div>
            </div>

            {/* Website Link */}
            <div>
              <p className="text-lightIndigo mb-3">Explore more</p>
              <h3 className="text-2xl md:text-3xl text-white flex items-center gap-2">
                <TfiWorld />
                <a
                  href="https://www.brandnasu.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  www.brandnasu.com
                </a>
              </h3>
            </div>
          </div>

          {/* Right side - image */}
          <div className="w-full flex justify-center">
            <Image
              src={contactHero}
              alt="Contact Hero"
              width={320}
              height={320}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
