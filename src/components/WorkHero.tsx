import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import image1 from '../../public/S1.png';
import image2 from '../../public/D3.png';
import image3 from '../../public/W1.png';
import image4 from '../../public/W3.png';
import BookACallSection from './BookACallSection';

const webList = [
  {
    title: 'UrbanNest - Website Development',
    description:
      'IDX-integrated real estate site crafted for seamless property search.',
    image: image1,
    slug: 'urbannest-website-development',
    tag: ['Development', 'Website Development', 'Project'],
  },
  {
    title: 'SkyVista - Landing Page Design',
    description:
      'High-converting landing page focused on generating quality leads.',
    image: image1,
    slug: 'skyvista-landing-page-design',
    tag: ['Development', 'Landing Page', 'Project'],
  },
  {
    title: 'HavenSpace - UI/UX Design',
    description:
      'Modern UI/UX optimized for intuitive browsing and engagement.',
    image: image1,
    slug: 'havenspace-ui-ux-design',
    tag: ['Development', 'UI/UX', 'Project'],
  },
  {
    title: 'MetroCity - Website Development',
    description:
      'Mobile-responsive site with listing management and lead capture.',
    image: image1,
    slug: 'metrocity-website-development',
    tag: ['Development', 'Website Development', 'Project'],
  },
  {
    title: 'GreenBrick - Landing Page Design',
    description: 'Conversion-focused landing page tailored for local realtors.',
    image: image1,
    slug: 'greenbrick-landing-page-design',
    tag: ['Development', 'Landing Page', 'Project'],
  },
  {
    title: 'VistaZone - UI/UX Design',
    description:
      'Clean and consistent interface improving user experience across devices.',
    image: image1,
    slug: 'vistazone-ui-ux-design',
    tag: ['Development', 'UI/UX', 'Project'],
  },
  {
    title: 'BoldNest - Website Development',
    description: 'Full-featured IDX-ready site designed for brand authority.',
    image: image1,
    slug: 'boldnest-website-development',
    tag: ['Development', 'Website Development', 'Project'],
  },
  {
    title: 'ElevateHaus - Landing Page Design',
    description:
      'Attention-grabbing real estate landing page for open house promotions.',
    image: image1,
    slug: 'elevatehaus-landing-page-design',
    tag: ['Development', 'Landing Page', 'Project'],
  },
  {
    title: 'PrimeNest - UI/UX Design',
    description: 'Intuitive layout and branding that elevates client trust.',
    image: image1,
    slug: 'primenest-ui-ux-design',
    tag: ['Development', 'UI/UX', 'Project'],
  },
  {
    title: 'CoreVista - Website Development',
    description:
      'Feature-rich website tailored for showcasing exclusive listings.',
    image: image1,
    slug: 'corevista-website-development',
    tag: ['Development', 'Website Development', 'Project'],
  },
];

const brandList = [
  {
    title: 'PrimeNest Realty – Logo Design',
    description: 'Bold and modern logo crafted for a premium property firm.',
    image: image2,
    slug: 'primenest-realty-logo-design',
    tag: ['Design', 'Logo Design', 'PrimeNest'],
  },
  {
    title: 'Skyline Homes – Brand Style Guide',
    description:
      'Defined brand colors, fonts, and visual rules for a consistent identity.',
    image: image2,
    slug: 'skyline-homes-brand-style-guide',
    tag: ['Design', 'Brand Style Guide', 'Skyline Homes'],
  },
  {
    title: 'UrbanVista – Brochure Design',
    description:
      'Elegant brochure highlighting key listings and agent expertise.',
    image: image2,
    slug: 'urbanvista-brochure-design',
    tag: ['Design', 'Brochure Design', 'UrbanVista'],
  },
  {
    title: 'CozyKeys – Logo Design',
    description:
      'Friendly and minimal logo to reflect a warm property experience.',
    image: image2,
    slug: 'cozykeys-logo-design',
    tag: ['Design', 'Logo Design', 'CozyKeys'],
  },
  {
    title: 'VistaEdge – Brand Style Guide',
    description:
      'Clean, strategic design system tailored for digital and print use.',
    image: image2,
    slug: 'vistaedge-brand-style-guide',
    tag: ['Design', 'Brand Style Guide', 'VistaEdge'],
  },
  {
    title: 'BrickLane Agency – Postcard Design',
    description: 'Compact marketing postcard designed for direct mail success.',
    image: image2,
    slug: 'bricklane-agency-postcard-design',
    tag: ['Design', 'Postcard Design', 'BrickLane'],
  },
  {
    title: 'NextDoor Living – Logo Design',
    description:
      'Distinctive icon and typography symbolizing neighborhood trust.',
    image: image2,
    slug: 'nextdoor-living-logo-design',
    tag: ['Design', 'Logo Design', 'NextDoor Living'],
  },
  {
    title: 'Elevate Realty – Flyer Design',
    description: 'High-converting flyer designed to boost listing inquiries.',
    image: image2,
    slug: 'elevate-realty-flyer-design',
    tag: ['Design', 'Flyer Design', 'Elevate Realty'],
  },
  {
    title: 'HavenHill – Brand Style Guide',
    description: 'Visual language crafted to unify all brand communication.',
    image: image2,
    slug: 'havenhill-brand-style-guide',
    tag: ['Design', 'Brand Style Guide', 'HavenHill'],
  },
  {
    title: 'MetroNest – Brochure & Postcard Design',
    description:
      'Dual-format materials designed for both events and mail campaigns.',
    image: image2,
    slug: 'metronest-brochure-postcard-design',
    tag: ['Design', 'Brochure & Postcard', 'MetroNest'],
  },
];

const brandMarketList = [
  {
    title: 'Skyline Realty - Social Media Branding',
    description:
      'Created a unified brand presence across all major social platforms.',
    image: image3,
    slug: 'skyline-realty-social-media-branding',
    tag: ['Marketing', 'Social Media Branding', 'Project'],
  },
  {
    title: 'UrbanEdge - Signage Design',
    description:
      'Developed high-impact real estate signage for street visibility.',
    image: image3,
    slug: 'urbanedge-signage-design',
    tag: ['Marketing', 'Signage Design', 'Project'],
  },
  {
    title: 'BlueNest - Pitch Deck Design',
    description:
      'Investor-ready pitch deck with strong visual narrative and stats.',
    image: image3,
    slug: 'bluenest-pitch-deck-design',
    tag: ['Marketing', 'Pitch Deck Design', 'Project'],
  },
  {
    title: 'OakHill Homes - Social Media Branding',
    description:
      'Built consistent visual identity for daily social engagement.',
    image: image3,
    slug: 'oakhill-homes-social-media-branding',
    tag: ['Marketing', 'Social Media Branding', 'Project'],
  },
  {
    title: 'HomeVista - Signage Design',
    description:
      'Designed large-scale signs to promote new property developments.',
    image: image3,
    slug: 'homevista-signage-design',
    tag: ['Marketing', 'Signage Design', 'Project'],
  },
  {
    title: 'NestSure - Pitch Deck Design',
    description:
      'Professional deck showcasing business model and funding goals.',
    image: image3,
    slug: 'nestsure-pitch-deck-design',
    tag: ['Marketing', 'Pitch Deck Design', 'Project'],
  },
  {
    title: 'BrightBrick - Social Media Branding',
    description:
      'Bold, eye-catching templates for agent promotions and listings.',
    image: image3,
    slug: 'brightbrick-social-media-branding',
    tag: ['Marketing', 'Social Media Branding', 'Project'],
  },
  {
    title: 'NextDoor Living - Signage Design',
    description: 'Directional and promotional signs built for property events.',
    image: image3,
    slug: 'nextdoor-living-signage-design',
    tag: ['Design', 'Signage Design', 'Project'],
  },
  {
    title: 'EstateIQ - Pitch Deck Design',
    description: 'Polished deck tailored for tech-based real estate solution.',
    image: image3,
    slug: 'estateiq-pitch-deck-design',
    tag: ['Marketing', 'Pitch Deck Design', 'Project'],
  },
  {
    title: 'VistaLand - Social Media Branding',
    description: 'Cohesive social media kit aligning with core brand identity.',
    image: image3,
    slug: 'vistaland-social-media-branding',
    tag: ['Marketing', 'Social Media Branding', 'Project'],
  },
];

const brandVideoList = [
  {
    title: 'VistaHomes - Branding Video',
    description: 'Told the brand’s story with cinematic visuals and narration.',
    image: image4,
    slug: 'vistahomes-branding-video',
    tag: ['Design', 'Branding Video', 'Project'],
  },
  {
    title: 'MetroNest - Listing Video',
    description:
      'Highlighted premium property features for prospective buyers.',
    image: image4,
    slug: 'metronest-listing-video',
    tag: ['Design', 'Listing Video', 'Project'],
  },
  {
    title: 'BlueOak Realty - Video Ads Creative',
    description: 'Crafted short-form video ads for social media campaigns.',
    image: image4,
    slug: 'blueoak-realty-video-ads-creative',
    tag: ['Design', 'Video Ads Creative', 'Project'],
  },
  {
    title: 'DreamBrick - Branding Video',
    description: 'Captured the essence of the brand through lifestyle shots.',
    image: image4,
    slug: 'dreambrick-branding-video',
    tag: ['Design', 'Branding Video', 'Project'],
  },
  {
    title: 'RealVista - Listing Video',
    description:
      'Showcased interior and neighborhood appeal with drone footage.',
    image: image4,
    slug: 'realvista-listing-video',
    tag: ['Design', 'Listing Video', 'Project'],
  },
  {
    title: 'ZenSpaces - Video Ads Creative',
    description: 'Produced engaging reels for targeted lead generation.',
    image: image4,
    slug: 'zenspaces-video-ads-creative',
    tag: ['Design', 'Video Ads Creative', 'Project'],
  },
  {
    title: 'UrbanNest - Branding Video',
    description: 'Built emotional connection through story-driven brand film.',
    image: image4,
    slug: 'urbannest-branding-video',
    tag: ['Design', 'Branding Video', 'Project'],
  },
  {
    title: 'NextDwell - Listing Video',
    description: 'Presented home walkthroughs with voiceovers and music.',
    image: image4,
    slug: 'nextdwell-listing-video',
    tag: ['Design', 'Listing Video', 'Project'],
  },
  {
    title: 'EstateWave - Video Ads Creative',
    description: 'Animated video ads to promote open house events online.',
    image: image4,
    slug: 'estatewave-video-ads-creative',
    tag: ['Design', 'Video Ads Creative', 'Project'],
  },
  {
    title: 'BrightNest - Branding Video',
    description: 'Branded visual storytelling tailored for digital platforms.',
    image: image4,
    slug: 'brightnest-branding-video',
    tag: ['Design', 'Branding Video', 'Project'],
  },
];

const WorkHero = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto text-center pt-8 lg:pt-16 xl:pt-24">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl xl:!leading-[57px] lg:!leading-[48px] font-bold mx-auto lg:px-0 max-w-4xl text-darkIndigo">
          Explore what our team has executed for real estate
        </h2>
        <p className="xl:mt-6 md:mt-5 mt-4 mx-auto text-darkGray max-w-6xl text-lg">
          Each project in this section reflects the strategic thinking and
          creative execution of our team. These works are not for sale, but
          presented to demonstrate the quality, precision, and results we
          consistently deliver for real estate brands.
        </p>
      </div>

      <div className="space-y- mx-auto max-w-[1920px]">
        {/* Web Development */}
        <div id="website" className="pt-32">
          <div className="w-full flex flex-col items-start px-6 mb-4">
            <h1 className="text-2xl text-darkIndigo font-bold mb-6 border-l-4 border-l-indigo pl-2">
              Web Development
            </h1>
            <h3 className="text-3xl md:text-4xl font-semibold mb-6 text-darkIndigo">
              Smart, scalable websites tailored for real estate brands to
              convert visitors into leads.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:gap-x-6 xl:gap-y-24 gap-y-20 md:gap-x-5 gap-x-10 xl:px-6 px-5">
            {webList.slice(0, 5).map((web) => (
              <div key={web.slug}>
                <Link href={`/work/${web.slug}`} className="block mb-10">
                  <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
                    <Image
                      src={web.image}
                      alt={web.title}
                      layout="fill"
                      className="object-cover rounded-xl hover:scale-105 transition duration-300"
                    />
                  </div>
                </Link>
                <Link href={`/work/${web.slug}`}>
                  <h2 className="text-2xl font-semibold text-darkIndigo">
                    {web.title}
                  </h2>
                </Link>
                <p className="mt-4 text-darkGray truncate-one-line">
                  {web.description}
                </p>
                <div className="mt-6 gap-3 flex flex-wrap">
                  {web.tag.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-lightGray text-darkGray px-4 py-2 rounded-full font-regular"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              // <Link
              //   href={`/work/${work.slug}`}
              //   key={work.slug}
              //   className="bg-white rounded-xl overflow-hidden"
              // >
              //   <Image
              //     src={work.image}
              //     alt={work.title}
              //     className="w-full h-48 object-cover"
              //   />
              //   <div className="p-4">
              //     <h2 className="text-xl font-semibold text-darkGray">
              //       {work.title}
              //     </h2>
              //     <p className="mt-2 text-darkGray">{work.description}</p>
              //   </div>
              // </Link>
            ))}
          </div>
        </div>

        {/* Web Design */}
        <div id="brand-design" className="pt-32">
          <div className="w-full flex flex-col items-start px-6 mb-4">
            <h1 className="text-2xl text-darkIndigo font-bold mb-6 border-l-4 border-l-indigo pl-2">
              Brand Design
            </h1>
            <h3 className="text-3xl md:text-4xl font-semibold mb-6 text-darkIndigo">
              Visually compelling brand identities that create trust and set
              your business apart.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:gap-x-6 xl:gap-y-24 gap-y-20 md:gap-x-5 gap-x-10 xl:px-6 px-5">
            {brandList.slice(0, 8).map((brand) => (
              <div key={brand.slug}>
                <Link href={`/work/${brand.slug}`} className="block mb-10">
                  <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
                    <Image
                      src={brand.image}
                      alt={brand.title}
                      layout="fill"
                      className="object-cover rounded-xl hover:scale-105 transition duration-300"
                    />
                  </div>
                </Link>
                <Link href={`/work/${brand.slug}`}>
                  <h2 className="text-2xl font-semibold text-darkIndigo">
                    {brand.title}
                  </h2>
                </Link>
                <p className="mt-4 text-darkGray truncate-one-line">
                  {brand.description}
                </p>
                <div className="mt-6  gap-3 flex flex-wrap">
                  {brand.tag.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-lightGray text-darkGray px-4 py-2 rounded-full font-regular"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Marketing */}
        <div id="brand-marketing" className="pt-32">
          <div className="w-full flex flex-col items-start px-6 mb-4">
            <h1 className="text-2xl text-darkIndigo font-bold mb-6 border-l-4 border-l-indigo pl-2">
              Brand Marketing
            </h1>
            <h3 className="text-3xl md:text-4xl font-semibold mb-6 text-darkIndigo">
              Strategic campaigns and content that grow your brand visibility
              across platforms.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:gap-x-6 xl:gap-y-24 gap-y-20 md:gap-x-5 gap-x-10 xl:px-6 px-5">
            {brandMarketList.slice(0, 6).map((brand) => (
              <div key={brand.slug}>
                <Link href={`/work/${brand.slug}`} className="block mb-10">
                  <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
                    <Image
                      src={brand.image}
                      alt={brand.title}
                      layout="fill"
                      className="object-cover rounded-xl hover:scale-105 transition duration-300"
                    />
                  </div>
                </Link>
                <Link href={`/work/${brand.slug}`}>
                  <h2 className="text-2xl font-semibold text-darkIndigo">
                    {brand.title}
                  </h2>
                </Link>
                <p className="mt-4 text-darkGray truncate-one-line">
                  {brand.description}
                </p>
                <div className="mt-6  gap-3 flex flex-wrap">
                  {brand.tag.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-lightGray text-darkGray px-4 py-2 rounded-full font-regular"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Video */}
        <div id="brand-video" className="pt-32 pb-32">
          <div className="w-full flex flex-col items-start px-6 mb-4">
            <h1 className="text-2xl text-darkIndigo font-bold mb-6 border-l-4 border-l-indigo pl-2">
              Brand Video
            </h1>
            <h3 className="text-3xl md:text-4xl font-semibold mb-6 text-darkIndigo">
              High-quality visuals and storytelling that connect emotionally and
              sell effectively.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:gap-x-6 xl:gap-y-24 gap-y-20 md:gap-x-5 gap-x-10 xl:px-6 px-5">
            {brandVideoList.slice(0, 6).map((brand) => (
              <div key={brand.slug}>
                <Link href={`/work/${brand.slug}`} className="block mb-10">
                  <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
                    <Image
                      src={brand.image}
                      alt={brand.title}
                      layout="fill"
                      className="object-cover rounded-xl hover:scale-105 transition duration-300"
                    />
                  </div>
                </Link>
                <Link href={`/work/${brand.slug}`}>
                  <h2 className="text-2xl font-semibold text-darkIndigo">
                    {brand.title}
                  </h2>
                </Link>
                <p className="mt-4 text-darkGray truncate-one-line">
                  {brand.description}
                </p>
                <div className="mt-6  gap-3 flex flex-wrap">
                  {brand.tag.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-lightGray text-darkGray px-4 py-2 rounded-full font-regular"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-indigo100">
        <div className="text-center max-w-[1440px] w-full mx-auto lg:py-32 py-20 px-5">
          <BookACallSection />
        </div>
      </div>
    </section>
  );
};

export default WorkHero;
