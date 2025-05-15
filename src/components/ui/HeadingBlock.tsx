import React from 'react';

const HeadingBlock = ({
  title = 'Title',
  description = 'Description',
  textAlignment = 'center',
  titleWidth = 'max-w-5xl',
  descriptionWidth = 'max-w-5xl',
  titleColor = 'text-lightIndigo',
  descriptionColor = 'text-gray-500',
  titleAos = 'fade-up',
  descriptionAos = 'fade-up',
  titleDelay = 50,
  descriptionDelay = 50,
  aosDuration = 400,
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
        data-aos={titleAos}
        data-aos-delay={titleDelay}
        data-aos-easing="ease"
        data-aos-duration={aosDuration}
        className={`text-3xl lg:text-4xl lg:!leading-[43px] font-bold lg:px-0 ${titleWidth} ${titleColor} ${alignmentClass}`}
      >
        {title}
      </h2>
      <p
        data-aos={descriptionAos}
        data-aos-delay={descriptionDelay}
        data-aos-easing="ease"
        data-aos-duration={aosDuration}
        className={`xl:mt-6 md:mt-5 mt-4 mx-auto ${descriptionWidth} ${descriptionColor} ${alignmentClass}`}
      >
        {description}
      </p>
    </div>
  );
};

export default HeadingBlock;
