import React from 'react';

const HeadingBlock = ({
  title = 'Title',
  description = 'Description',
  textAlignment = 'center',
  titleWidth = 'max-w-5xl',
  descriptionWidth = 'max-w-5xl',
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
    <div className={`relative z-10 w-full ${alignmentClass}`}>
      <h2
        className={`text-3xl lg:text-4xl lg:!leading-[43px] font-bold lg:px-0 ${titleWidth} ${titleColor} ${alignmentClass}`}
      >
        {title}
      </h2>
      <p
        className={`xl:mt-6 md:mt-5 mt-4 mx-auto ${descriptionWidth} ${descriptionColor} ${alignmentClass}`}
      >
        {description}
      </p>
    </div>
  );
};

export default HeadingBlock;
