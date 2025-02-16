import Image from 'next/image';
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP, FaYoutube } from 'react-icons/fa';
import logo from '../../public/Logo/light-logo.svg';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-[#2F1D66] text-white py-24">
      <div className="w-full max-w-[1440px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Services */}
        <div>
          <h3 className="font-medium text-xl mb-10">Services</h3>
          <ul className="space-y-2 text-base font-light text-lightIndigo">
            {[
              'Custom Logo Design', 'Complete Brand Identity', 'Digital Business Card', 'Email Signature', 'Marketing Collateral', 
              'Branding Flyer', 'Pitch Deck', 'Signage Design', 'Listing Video', 'Branding Video', 'Custom Website', 
              'Landing Page', 'Social Media Branding'
            ].map((item, index) => (
              <li key={index} className="hover:text-lightIndigo hover:underline cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>
        
        {/* Content */}
        <div>
          <h3 className="font-medium text-xl mb-10">Content</h3>
          <ul className="space-y-2 text-base font-light text-lightIndigo">
            {['Our Work', 'Pricing', 'Blog', 'FAQ', 'Contact', 'About'].map((item, index) => (
              <li key={index} className="hover:text-lightIndigo hover:underline cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>
        
        {/* Legal */}
        <div>
          <h3 className="font-medium text-xl mb-10">Legal</h3>
          <ul className="space-y-2 text-base font-light text-lightIndigo">
            {['Terms and Condition', 'Privacy Policy', 'Refund Policy'].map((item, index) => (
              <li key={index} className="hover:text-lightIndigo hover:underline cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>
        
        {/* Contact Info */}
        <div>
          <h3 className="font-medium text-2xl mb-10 flex items-center gap-2">
          <Image src={logo} alt='logo' width={100} height={100} />
          </h3>
          <p className="text-base mb-6">Join thousands of influencers, brands, creators growing their Instagram followers with Path Social.</p>
          <p className="text-base mb-4">mail@nasu.com</p>
          <p className="text-base mb-4">+0911 2345 1234</p>
          <p className="text-base">1209 Mountain Road Pl Ne Ste R, Albuquerque, NM 87110, USA</p>
          
          {/* Social Icons */}
          <div className="flex gap-3 mt-5">
            {[FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaPinterestP, FaYoutube].map((Icon, index) => (
              <a key={index} href="#" className="bg-lightIndigo/90 rounded-md p-2 hover:bg-lightIndigo">
                <Icon className="text-darkIndigo text-lg" />
              </a>
            ))}
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="text-center text-base mt-14 text-lightIndigo">
        Copyright © 2025 nasu. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
