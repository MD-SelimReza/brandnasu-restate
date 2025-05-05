import React from 'react';
import Image from 'next/image';
import Container from './Container';
import careerHero from '../../public/careerhero.svg';
import Button from './ui/Button';

const CareerHero = () => {
  return (
    <div className="bg-white">
      <Container>
        <div className="flex flex-col-reverse md:flex-row justify-between lg:gap-20 gap-16 py-10">
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl lg:!leading-[57px] font-bold text-darkIndigo lg:max-w-xl mb-8">
              Grow, Create, Belong With Us
            </h2>
            <p className="text-darkGray max-w-5xl text-lg text-justify mb-6">
              At BrandNasu, we don&apos;t just build brands, we build a team
              culture where people feel inspired, supported, and empowered.
            </p>
            <p className="text-darkGray max-w-5xl text-lg text-justify mb-6">
              We work with real estate professionals around the world,
              delivering creative solutions that make a difference. But what
              makes our work truly meaningful is how we do it, together.
            </p>
            <p className="text-darkGray max-w-5xl text-lg text-justify mb-6">
              From shared brainstorms to casual snack breaks, from tough
              deadlines to team wins, we show up for each other. Your ideas
              matter here, and your growth is part of our mission.
            </p>
            <p className="text-darkGray max-w-5xl text-lg text-justify mb-16">
              If you&apos;re looking for a place where you can create boldly,
              work with purpose, and be part of something real, welcome to
              BrandNasu.
            </p>
            <Button
              bgColor="bg-indigo hover:bg-darkIndigo"
              textColor="text-white"
              label="Apply Now"
            />
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src={careerHero}
              alt="Career Hero"
              width={700}
              height={350}
              className="rounded-xl object-cover"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CareerHero;
