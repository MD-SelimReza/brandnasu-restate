'use client';

import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const BookCallModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button
        onClick={openModal}
        className="px-4 py-2 bg-indigo text-white rounded hover:bg-darkIndigo"
      >
        Book a Strategy Call
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center p-4">
          <div className="border-2 border-red-500">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-white hover:text-gray100 text-xl font-bold"
            >
              <AiOutlineClose size={40} />
            </button>
            <iframe
              src="https://tidycal.com/brandnasu/strategy-call"
              width="100%"
              height="100%"
              allow="camera; microphone; fullscreen; clipboard-read; clipboard-write"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default BookCallModal;
