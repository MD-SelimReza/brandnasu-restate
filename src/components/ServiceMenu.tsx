// import Image from "next/image";
// import service1 from "../../public/Icons/Services/Services-01.svg";
// import service2 from "../../public/Icons/Services/Services-02.svg";
// import service3 from "../../public/Icons/Services/Services-03.svg";
// import service4 from "../../public/Icons/Services/Services-04.svg";
// import service5 from "../../public/Icons/Services/Services-05.svg";
// import service6 from "../../public/Icons/Services/Services-06.svg";
// import service7 from "../../public/Icons/Services/Services-07.svg";
// import service8 from "../../public/Icons/Services/Services-08.svg";
// import service9 from "../../public/Icons/Services/Services-09.svg";
// import service10 from "../../public/Icons/Services/Services-10.svg";
// import service11 from "../../public/Icons/Services/Services-11.svg";
// import service12 from "../../public/Icons/Services/Services-12.svg";

// const ServiceMenu = () => (
//   <div className="w-full left-0 right-0 -top-3 bg-white  p-6 rounded-lg drop-shadow-xl border-2">
//     <div className='max-w-[1440px] mx-auto grid grid-cols-2 gap-6'>
//       <div>
//         <p className="font-bold text-darkIndigo text-lg border-b pb-2 mb-3">SERVICES</p>
//         <div className="grid grid-cols-3 items-baseline gap-x-5 text-gray-700 text-sm">
//           {[
//             { icon: service1, title: 'Custom Logo Design', desc: 'Unique, professional logo tailored to your brand identity' },
//             { icon: service2, title: 'Complete Brand Identity', desc: 'Cohesive branding, including typography, color palette, and design guidelines' },
//             { icon: service3, title: 'Digital Business Card & Email Signature', desc: 'Personalized, professional email signatures and digital cards' },
//             { icon: service4, title: 'Marketing Collateral', desc: 'Custom-designed flyers and postcards to showcase listings and promotions' },
//             { icon: service5, title: 'Branding Flyer', desc: 'High-impact flyer design to enhance your brand presence' },
//             { icon: service6, title: 'Pitch Deck', desc: 'Professionally designed presentations to impress clients and investors' },
//             { icon: service7, title: 'Signage Design', desc: 'Eye-catching real estate signage for maximum visibility' },
//             { icon: service8, title: 'Listing Video', desc: 'Engaging property video to attract potential buyers' },
//             { icon: service9, title: 'Branding Video', desc: 'Professional brand storytelling through high-quality video content' },
//             { icon: service10, title: 'Custom Website', desc: 'Fully responsive, IDX/MLS-integrated websites for realtors and agencies' },
//             { icon: service11, title: 'Landing Page', desc: 'Conversion-focused landing pages for lead generation' },
//             { icon: service12, title: 'Social Media Branding ', desc: 'Cohesive branding for Facebook, Instagram, and LinkedIn profiles' }
//           ].map(({ icon, title, desc }, index) => (
//             <div key={index} className="p-3 rounded-lg hover:bg-gray-100 transition h-full">
//               <div className='flex items-baseline gap-3'>
//                 <Image src={icon} alt={title} width={16} height={16} className="" />
//                 <strong className="block text-darkIndigo/90 text-base mb-1">{title}</strong>
//               </div>
//                 <span className="text-sm text-default">{desc}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div>
//         <p className="font-bold text-darkIndigo text-lg border-b pb-2">PLANS</p>
//         <ul className="space-y-4 text-gray-700 text-sm mt-3 bg-gray-50 p-4 rounded-lg">
//           {[
//             { title: 'Digital Ads', desc: 'Perfect for creating top-tier social media content and digital ads that elevate your online presence' },
//             { title: 'Marketing', desc: 'Ideal for comprehensive and dynamic marketing materials, including e-commerce content and Amazon listings' },
//             { title: 'Full Stack', desc: 'Built as a full suite of design services, including marketing materials, video editing, packaging, and more' }
//           ].map(({ title, desc }, index) => (
//             <li key={index} className="p-3 border-b last:border-none">
//               <strong className="block text-darkIndigo/90 text-lg mb-1">{title}</strong>
//               <span className="text-sm text-default">{desc}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   </div>
// );

// export default ServiceMenu;



import Image from "next/image";
import service1 from "../../public/Icons/Services/Services-01.svg";
import service2 from "../../public/Icons/Services/Services-02.svg";
import service3 from "../../public/Icons/Services/Services-03.svg";
import service4 from "../../public/Icons/Services/Services-04.svg";
import service5 from "../../public/Icons/Services/Services-05.svg";
import service6 from "../../public/Icons/Services/Services-06.svg";
import service7 from "../../public/Icons/Services/Services-07.svg";
import service8 from "../../public/Icons/Services/Services-08.svg";
import service9 from "../../public/Icons/Services/Services-09.svg";
import service10 from "../../public/Icons/Services/Services-10.svg";
import service11 from "../../public/Icons/Services/Services-11.svg";
import service12 from "../../public/Icons/Services/Services-12.svg";

const services = [
  { icon: service1, title: "Custom Logo Design", desc: "Unique, professional logo tailored to your brand identity" },
  { icon: service2, title: "Complete Brand Identity", desc: "Cohesive branding, including typography, color palette, and design guidelines" },
  { icon: service3, title: "Digital Business Card & Email Signature", desc: "Personalized, professional email signatures and digital cards" },
  { icon: service4, title: "Marketing Collateral", desc: "Custom-designed flyers and postcards to showcase listings and promotions" },
  { icon: service5, title: "Branding Flyer", desc: "High-impact flyer design to enhance your brand presence" },
  { icon: service6, title: "Pitch Deck", desc: "Professionally designed presentations to impress clients and investors" },
  { icon: service7, title: "Signage Design", desc: "Eye-catching real estate signage for maximum visibility" },
  { icon: service8, title: "Listing Video", desc: "Engaging property video to attract potential buyers" },
  { icon: service9, title: "Branding Video", desc: "Professional brand storytelling through high-quality video content" },
  { icon: service10, title: "Custom Website", desc: "Fully responsive, IDX/MLS-integrated websites for realtors and agencies" },
  { icon: service11, title: "Landing Page", desc: "Conversion-focused landing pages for lead generation" },
  { icon: service12, title: "Social Media Branding", desc: "Cohesive branding for Facebook, Instagram, and LinkedIn profiles" },
];

const plans = [
  { title: "Digital Ads", desc: "Perfect for creating top-tier social media content and digital ads that elevate your online presence" },
  { title: "Marketing", desc: "Ideal for comprehensive and dynamic marketing materials, including e-commerce content and Amazon listings" },
  { title: "Full Stack", desc: "Built as a full suite of design services, including marketing materials, video editing, packaging, and more" },
  { title: "Full Stack", desc: "Built as a full suite of design services, including marketing materials, video editing, packaging, and more" },
];

const ServiceMenu = () => (
  <div className="w-full bg-white xl:p-6 xl:rounded-lg xl:drop-shadow-xl xl:border-2 my-5 xl:my-0">
    <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 xl:gap-6 gap-y-10">
      {/* Services Section */}
      <div className="col-span-2">
        <p className="font-bold text-darkIndigo text-lg border-b pb-2 mb-3 xl:block hidden">SERVICES</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:gap-2 text-gray-700 text-sm">
          {services.map(({ icon, title, desc }, index) => (
            <div
              key={index}
              className="xl:p-3 py-5 px-1 rounded-lg hover:bg-gray-100 transition duration-300 ease-in-out h-full"
            >
              <div className="flex place-items-start gap-4">
                <Image src={icon} alt={title} width={20} height={20} />
                <div className="-mt-1 max-w-52 xl:max-w-full">
                  <p className="text-darkIndigo/90 text-base font-semibold">{title}</p>
                  <p className="text-sm text-default">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Plans Section */}
      <div className="bg-gray-100 p-5 rounded-lg">
        <p className="font-semibold text-darkIndigo/90 text-sm xl:text-lg border-b pb-2">DESIGN PLANS</p>
        <ul className="space-y-4 text-gray-700 text-sm mt-3">
          {plans.map(({ title, desc }, index) => (
            <li key={index} className="">
              <p className="text-darkIndigo/90 text-[17px] mb-1 font-semibold">{title}</p>
              <span className="text-sm text-default">{desc}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default ServiceMenu;
