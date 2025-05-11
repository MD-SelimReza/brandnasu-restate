import Link from 'next/link';
import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

interface ButtonProps {
  bgColor?: string;
  textColor?: string;
  label?: string;
  width?: string;
  icon?: React.ElementType;
  href?: string;
  target?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  bgColor = 'bg-indigo',
  textColor = 'text-white',
  label = 'Apply Now',
  width = 'w-52',
  icon: Icon = FaArrowRightLong,
  href = '',
  target = '_self',
  disabled = false,
}) => {
  const baseStyles = `rounded-full block font-semibold text-lg transition duration-500 ${width}`;
  const enabledStyles = `${bgColor} ${textColor} cursor-pointer group`;
  const disabledStyles = 'bg-[#DEE0E2] text-darkGray cursor-not-allowed';

  const content = (
    <div className="relative flex justify-center items-center max-w-40 mx-auto py-2.5">
      <span
        className={`rounded-full font-bold text-lg md:flex items-center justify-center duration-500 transform translate-x-0 ${
          !disabled ? 'group-hover:-translate-x-3 ease' : ''
        }`}
      >
        {label}
      </span>
      {!disabled && (
        <Icon
          size={16}
          className="absolute opacity-0 group-hover:opacity-100 right-0 -translate-x-5 transform ease duration-500 group-hover:translate-x-0"
        />
      )}
    </div>
  );

  return disabled ? (
    <div className={`${baseStyles} ${disabledStyles}`}>{content}</div>
  ) : (
    <Link
      href={href}
      target={target}
      className={`${baseStyles} ${enabledStyles}`}
    >
      {content}
    </Link>
  );
};

export default Button;
