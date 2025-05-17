import React, { useEffect, useRef } from 'react';

interface ConfirmDeleteDialogProps {
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

export default function ConfirmDeleteDialog({
  isOpen,
  onCancel,
  onConfirm,
}: ConfirmDeleteDialogProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onCancel();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onCancel]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div ref={modalRef}>
        <div
          data-aos="zoom-in"
          data-aos-duration="100"
          className="bg-white p-10 rounded-lg shadow-lg text-center max-w-sm"
        >
          <p className="text-2xl font-semibold mb-10">
            Are you sure you want to delete this project?
          </p>
          <div className="flex justify-between">
            <button
              onClick={onCancel}
              className="flex-1 mr-2 bg-gray100 text-darkGray py-2 rounded-md hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="flex-1 ml-2 bg-[#f62447] text-white py-2 rounded-md hover:bg-[#e02141] transition duration-300"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
