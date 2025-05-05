import React from 'react';

const HeadingBlock = ({
  title = 'Title',
  description = 'Description',
  textAlignment = 'center',
  maxWidth = 'max-w-5xl',
  titleColor = 'text-lightIndigo',
  descriptionColor = 'text-gray-500',
}) => {
  const alignmentClass =
    textAlignment === 'left'
      ? 'text-left'
      : textAlignment === 'right'
      ? 'text-right'
      : 'text-center';

  return (
    <div
      className={`relative z-10 w-full mx-auto xl:max-w-5xl lg:max-w-2xl ${maxWidth} ${alignmentClass}`}
    >
      <h2
        className={`text-3xl lg:text-5xl xl:text-5xl lg:!leading-[57px] font-bold mx-auto lg:px-0 ${titleColor} ${alignmentClass}`}
      >
        {title}
      </h2>
      <p
        className={`xl:mt-6 md:mt-5 mt-4 mx-auto ${descriptionColor} ${alignmentClass}`}
      >
        {description}
      </p>
    </div>
  );
};

export default HeadingBlock;
