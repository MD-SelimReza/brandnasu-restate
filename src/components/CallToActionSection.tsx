// "use client";

// import React from "react";
// import { FaArrowRight } from "react-icons/fa";

// const CallToActionSection = () => {
//   return (
//     <div className="w-full max-w-[1440px] mx-auto h-auto flex flex-col items-center rounded-2xl justify-center overflow-hidden text-white relative py-16">
//       {/* Background Gradient */}
//       <div className="absolute inset-0 bg-black rounded-2xl"></div>
//       <div className="absolute bottom-0 right-0 w-[50%] h-[100%] bg-gradient-to-tl from-blue-600/90 via-transparent to-transparent rounded-bl-2xl overflow-hidden"></div>
//       <div className="absolute bottom-0 left-0 w-[50%] h-[100%] bg-gradient-to-tr from-purple-700/90 via-transparent to-transparent rounded-br-2xl overflow-hidden"></div>

//       {/* Content */}
//       <div className="relative z-10 text-center p-6">
//         <h1 className="text-4xl md:text-5xl font-bold">
//           Ready to Transform Your <br /> Vision Into Reality?
//         </h1>
//         <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto">
//           Let’s create something extraordinary together! Become the next success story and scale your brand to new heights.
//         </p>
//         <div className="flex gap-4 mt-6 justify-center">
//           <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-full  flex items-center gap-2">
//             Get Started <FaArrowRight />
//           </button>
//           <button className="bg-white text-black font-semibold py-3 px-6 rounded-full  border border-gray-300 flex items-center gap-2">
//             Book A Demo <FaArrowRight />
//           </button>
//         </div>
//       </div>

//       {/* Floating Squares */}
//       <div className="absolute bottom-1/2 right-0 translate-x-1/2 w-40 h-40 bg-yellow-100 rounded-lg  rotate-45"></div>
//       <div className="absolute bottom-1/2 left-0 -translate-y-[60px] w-32 h-32 bg-green-200 rounded-lg  rotate-45"></div>
//       <div className="absolute top-10 right-10 w-32 h-32 bg-purple-200 rounded-lg  rotate-45"></div>
//       <div className="absolute top-10 right-40 w-36 h-36 bg-blue-500 rounded-lg  rotate-45"></div>
//     </div>
//   );
// };

// export default CallToActionSection;


"use client";

import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Container from "./Container";
import Image from "next/image";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import clutch from "../../public/clutch-icon .svg";

const CallToActionSection = () => {
  return (
    <Container>
      <div className="w-full flex flex-col items-center rounded-[20px] justify-center text-white relative h-auto p-6 py-10 md:p-16 lg:p-16 xl:p-20 mb-16 xl:mb-44">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-black rounded-[20px]"></div>
        <div className="absolute bottom-0 right-0 w-[50%] h-[100%] bg-gradient-to-tl from-[#451F62] via-transparent to-transparent rounded-b-[20px] overflow-hidden"></div>
        <div className="absolute bottom-0 left-0 w-[50%] h-[100%] bg-gradient-to-tr from-[#123E84] via-transparent to-transparent rounded-[20px] overflow-hidden"></div>

        {/* Content */}
        <div className="relative z-10 text-center">
          <div className="relative z-10 w-full max-w-5xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-lightIndigo lg:max-w-[940px] mx-auto lg:px- text-center">
              Your Brand, Your Listings, Your Growth, We Make It Happen.
            </h2>
            <p className="text-sm md:text-xl xl:mt-6 md:mt-5 mt-4 max-w-3xl mx-auto">
              Stop blending in—get premium branding, marketing, and web solutions for real estate professionals. From one-time designs to unlimited creative support, we help you stand out, attract leads, and close more deals.
            </p>
          </div>
          <div className="lg:mt-20 md:mt-16 mt-10 mb-5">
            <div className="flex items-center flex-col md:flex-row gap-5 w-full z-20 justify-center">
              <button className="relative inline-flex justify-between md:w-fit w-40 items-center px-11 py-2.5 text-darkIndigo overflow-hidden text-base font-medium rounded-full group bg-white">
                <span className="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                <span></span>
                <span className="absolute right-0 hidden md:flex items-center justify-center w-20 h-14 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                  <FaArrowRight className="-rotate-45" />
                </span>
                <span className="relative duration-300 text-lg flex justify-center items-center md:transform md:translate-x-0 font-bold md:group-hover:-translate-x-4 ease">
                  Book A Demo
                </span>
                <FaArrowRight className="-rotate-45 block md:hidden" />
              </button>
              <button className="relative inline-flex justify-between md:w-fit w-40 items-center px-11 py-2.5 text-white overflow-hidden text-base font-medium rounded-full group bg-indigo">
                <span className="absolute left-0 block w-full h-0 transition-all bg-indigo opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                <span></span>
                <span className="absolute right-0 hidden md:flex items-center justify-center w-20 h-14 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                  <FaArrowRight className="-rotate-45" />
                </span>
                <span className="relative duration-300 text-lg flex justify-center items-center md:transform md:translate-x-0 font-bold md:group-hover:-translate-x-4 ease">
                  Get Started
                </span>
                <FaArrowRight className="-rotate-45 block md:hidden" />
              </button>
            </div>
          </div>
        </div>
        {/* <div className="absolute bottom-[3%] flex justify-between gap-8">
          <div className="bg-gradient-to-tr from-[#4E3D5C] to-[#772DD8] rounded-[20px] w-full h-[200px] p-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <Image src={"/1.jpg"} width={60} height={60} alt="Profile pic" className="rounded-full" />
                <div>
                  <p className="text-sm font-semibold text-white">Jason Kelly</p>
                  <p className="text-xs text-gray-300">CEO, Phoenix AZ Ad Agency</p>
                </div>            
              </div>
              <div className="flex gap-1 text-yellow-400">
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <FaRegStar key={index} className="text-lg" />
                ))}
              </div>
            </div>
            <p className="text-lg mt-4 text-white">Their creativity and attention to detail are unmatched.</p>
            <div className="flex items-center mt-4 gap-1 text-yellow-400">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <FaRegStar key={index} className="text-lg" />
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-tr from-[#4E3D5C] to-[#772DD8] rounded-[20px] w-full h-[200px] p-4 opacity-70">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <Image src={"/1.jpg"} width={60} height={60} alt="Profile pic" className="rounded-full" />
                <div>
                  <p className="text-sm font-semibold text-white">Jason Kelly</p>
                  <p className="text-xs text-gray-300">CEO, Phoenix AZ Ad Agency</p>
                </div>            
              </div>
              <div className="flex gap-1 text-yellow-400">
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <FaRegStar key={index} className="text-lg" />
                ))}
              </div>
            </div>
            <p className="text-lg mt-4 text-white">Their creativity and attention to detail are unmatched.</p>
            <div className="flex items-center mt-4 gap-1 text-yellow-400">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <FaRegStar key={index} className="text-lg" />
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-tr from-[#4E3D5C] to-[#772DD8] rounded-[20px] w-full h-[200px] p-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <Image src={"/1.jpg"} width={60} height={60} alt="Profile pic" className="rounded-full" />
                <div>
                  <p className="text-sm font-semibold text-white">Jason Kelly</p>
                  <p className="text-xs text-gray-300">CEO, Phoenix AZ Ad Agency</p>
                </div>            
              </div>
              <div className="flex gap-1 text-yellow-400">
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <FaRegStar key={index} className="text-lg" />
                ))}
              </div>
            </div>
            <p className="text-lg mt-4 text-white">Their creativity and attention to detail are unmatched.</p>
            <div className="flex items-center mt-4 gap-1 text-yellow-400">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <FaRegStar key={index} className="text-lg" />
              ))}
            </div>
          </div>
        </div> */}

        {/* Floating Squares */}
        <div className="absolute xl:block hidden top-[30%] -left-[8%] z-10 w-[300px] h-fit bg-[#E1F7E1] rounded-[20px]">
          <div className="w-full h-full p-5">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-[50px] h-[50px] border-2 border-lightIndigo rounded-full overflow-hidden flex justify-center items-center">
                  <Image 
                    src={"/Jason-Kelly.jpg"} 
                    width={100} 
                    height={100} 
                    objectFit="fill"
                    alt="Jason-Kelly" 
                    className="object-cover w-[45px] h-[45px] rounded-full"
                  />
                </div>
                <div>
                  <p className="text-[16px] font-semibold text-black">Jason Kelly</p>
                  <p className="text-xs text-black">CEO, Phoenix AZ Ad Agency</p>
                </div>            
              </div>
            </div>
            <p className="text-[16px] mt-3 text-black">Consistently Outstanding – 40+ Projects of Exceptional Branding & Design with BrandNasu!</p>
            <div className="flex justify-between items-center mt-3">
              <div className="flex items-center gap-1 text-yellow-400">
                {[1, 2, 3, 4].map((_, index) => (
                  <IoIosStar key={index} className="text-lg" />
                ))}
                <IoIosStarHalf className="text-lg" />
              </div>
              <Image src={clutch} width={24} height={24} alt="Clutch icon" objectFit="fill" className="rounded-2xl" />
            </div>
          </div>
        </div>
        <div className="absolute xl:block hidden top-[10%] -right-[8%] w-[270px] h-fit bg-[#EAE4FC] rounded-[20px]">
          <div className="w-full h-full p-5">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-[50px] h-[50px] border-2 border-lightIndigo rounded-full overflow-hidden flex justify-center items-center">
                  <Image 
                    src={"/Mason-Preddy.jpg"} 
                    width={100} 
                    height={100} 
                    objectFit="fill"
                    alt="Mason-Preddy" 
                    className="object-cover w-[45px] h-[45px] rounded-full"
                  />
                </div>
                <div>
                  <p className="text-[16px] font-semibold text-black">Mason Preddy</p>
                  <p className="text-xs text-black">Founder & CEO, WhiteBrights</p>
                </div>            
              </div>
            </div>
            <p className="text-[16px] mt-3 text-black">Transformative Social Media Branding with BrandNasu!</p>
            <div className="flex justify-between items-center mt-2">
              <div className="flex items-center gap-1 text-yellow-400">
                {[1, 2, 3, 4].map((_, index) => (
                  <IoIosStar key={index} className="text-lg" />
                ))}
                <IoIosStarHalf className="text-lg" />
              </div>
              <Image src={clutch} width={24} height={24} alt="Clutch icon" objectFit="fill" className="rounded-2xl" />
            </div>
          </div>
        </div>
        <div className="absolute xl:block hidden bottom-[6%] right-[4%] w-[220px] h-[220px] bg-gradient-to-tr from-[#4E3D5C] to-[#772DD8] rounded-[20px]"></div>
        <div className="absolute xl:block hidden bottom-[7%] left-[3%] w-[235px] h-[235px] bg-gradient-to-tl from-[#4E3D5C] to-[#772DD8] rounded-[20px]"></div>
        <div className="absolute xl:block hidden -bottom-[10%] -right-[9%] w-[230px] h-fit bg-[#F9EFE3] rounded-[20px]">
          <div className="w-full h-full p-5">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="h-fit">
                  <div className="w-[50px] h-[50px] border-2 border-lightIndigo rounded-full overflow-hidden flex justify-center items-center">
                    <Image 
                      src={"/Khalil-Henry.jpg"} 
                      width={100} 
                      height={100} 
                      objectFit="fill"
                      alt="Khalil-Henry" 
                      className="object-cover w-[45px] h-[45px] rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-[16px] font-semibold text-black">Khalil Henry</p>
                  <p className="text-xs text-black">SoldByKhalil.com</p>
                </div>            
              </div>
            </div>
            <p className="text-[16px] mt-3 text-black">BrandNasu Delivers Exceptional Branding & Design Every Time!</p>
            <div className="flex justify-between items-center mt-3">
              <div className="flex items-center gap-1 text-yellow-400">
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <IoIosStar key={index} className="text-lg" />
                ))}
              </div>
              <Image src={clutch} width={24} height={24} alt="Clutch icon" objectFit="fill" className="rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CallToActionSection;
