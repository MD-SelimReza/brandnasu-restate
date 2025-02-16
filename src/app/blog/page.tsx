// 'use client'

// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import ReactPaginate from "react-paginate";
// import img from '../../../public/1.jpg';
// import heroImage from '../../../public/default.jpg';

// // Generate at least 25 posts dynamically
// const posts = Array.from({ length: 125 }, (_, index) => ({
//   title: `Sample Blog Post ${index + 1}`,
//   description: "This is a short description of the blog post.",
//   categories: ["PRODUCT", "COMPANY"],
//   date: `FEB ${index + 1}`,
//   author: [
//     {
//       image: img,
//       name: "Simen Svale",
//     },
//     {
//       image: img,
//       name: "Magnus Hillestad",
//     },
//     {
//       image: img,
//       name: "Even Westvang",
//     },
//   ]
// }));

// const Blog = () => {
//   const [currentPage, setCurrentPage] = useState(0);
//   const postsPerPage = 21;
//   const pageCount = Math.ceil(posts.length / postsPerPage);

//   const handlePageClick = ({ selected }: { selected: number }) => {
//     setCurrentPage(selected);
//   };

//   return (
//     <div className="bg-gray-50">
//       {/* Hero Section with Background Image */}
//       <div 
//         className="w-full h-[500px] bg-cover bg-center flex justify-center items-center text-white text-3xl font-bold"
//         style={{ backgroundImage: `url(${heroImage.src})` }}
//       >
//         Blog
//       </div>
//       <div className="pb-44 pt-20">
//         <div className="w-full max-w-[1440px] mx-auto p-6">
//           {/* Category Filter Buttons */}
//           <div className="flex space-x-4 mb-6">
//             {["All posts", "Product", "Community", "Guides", "Company", "Content strategy", "Digital strategy"].map((category, index) => (
//               <button
//                 key={index}
//                 className={`px-4 py-2 rounded-lg text-sm font-medium ${category === "Company" ? "bg-gray-200 text-black" : "text-gray-500 hover:text-black"}`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>

//           {/* Blog Posts */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {posts.slice(currentPage * postsPerPage, (currentPage + 1) * postsPerPage).map((post, index) => (
//               <Link href={`/blog/${post.title}`}
//                 key={index}
//                 className="border p-4 rounded-lg hover:bg-white cursor-pointer transition-shadow shadow-sm hover:shadow-md"
//               >
//                 <div className="flex justify-between items-center mb-2">
//                   <div className="flex space-x-2">
//                     {post.categories.map((category, i) => (
//                       <span key={i} className="bg-gray-100 text-xs font-semibold px-2 py-1 rounded">
//                         {category}
//                       </span>
//                     ))}
//                   </div>
//                   <span className="text-xs text-gray-500">{post.date}</span>
//                 </div>
//                 <h2 className="text-lg font-bold mb-2">{post.title}</h2>
//                 <p className="text-sm text-gray-600 mb-4">{post.description}</p>
//                 <div className="flex items-center space-x-2">
//                   {/* <Image src={post.author[0].image} alt={post.author[0].name} width={24} height={24} className="w-6 h-6 rounded-full border border-white" />
//                   <span className="text-xs text-gray-500">{post.author[0].name}</span> */}
//                   {post.author.map((author, i) => (
//                     <div key={i} className="flex items-center space-x-2">
//                       <Image src={author.image} alt={author.name} width={24} height={24} className="w-6 h-6 rounded-full border border-white" />
//                       {i === 0 && <span className="text-xs text-gray-500">{author.name}{post.author.length > 1 ? ` and ${post.author.length - 1} more` : ''}</span>}
//                     </div>
//                   ))}
//                 </div>
//               </Link>
//             ))}
//           </div>

//           {/* Pagination Controls */}
//           <div className="pt-24 flex flex-col md:flex-row gap-6 md:gap-0 md:items-start items-center md:justify-between">
//             <div></div>
//             <ReactPaginate
//               previousLabel={<span className="flex items-center space-x-1"><FaArrowLeft /> <span>Previous</span></span>}
//               nextLabel={<span className="flex items-center space-x-1"><span>Next</span> <FaArrowRight /></span>}
//               breakLabel="..."
//               pageCount={pageCount}
//               marginPagesDisplayed={1}
//               pageRangeDisplayed={2}
//               onPageChange={handlePageClick}
//               containerClassName="flex items-center space-x-4"
//               pageClassName="px-3 py-1 rounded-lg text-gray-700 bg-white border cursor-pointer hover:bg-gray-200"
//               activeClassName="bg-gray-300"
//               previousClassName={`px-3 py-1 rounded-lg ${currentPage === 0 ? "text-gray-400 cursor-not-allowed" : "text-gray-700 border cursor-pointer hover:bg-gray-200"}`}
//               nextClassName={`px-3 py-1 rounded-lg ${currentPage === pageCount - 1 ? "text-gray-400 cursor-not-allowed" : "text-gray-700 border cursor-pointer hover:bg-gray-200"}`}
//               disabledClassName="text-gray-400 cursor-not-allowed"
//             />
//             <span className="text-gray-600">Page {currentPage + 1} of {pageCount}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Blog;
'use client';

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight, FaSearch } from "react-icons/fa";
import ReactPaginate from "react-paginate";
import img from '../../../public/1.jpg';
import heroImage from '../../../public/default.jpg';

const months: Record<string, number> = {
  JAN: 0, FEB: 1, MAR: 2, APR: 3, MAY: 4, JUN: 5,
  JUL: 6, AUG: 7, SEP: 8, OCT: 9, NOV: 10, DEC: 11
};

const parseDate = (dateStr: string): number => {
  const [month, day] = dateStr.split(" ");
  return new Date(2024, months[month.toUpperCase()], parseInt(day)).getTime();
};

const posts = Array.from({ length: 125 }, (_, index) => ({
  title: `Sample Blog Post ${index + 1}`,
  description: "This is a short description of the blog post.",
  categories: ["PRODUCT", "COMPANY"],
  date: `FEB ${index + 1}`,
  author: [
    { image: img, name: "Simen Svale" },
    // { image: img, name: "Magnus Hillestad" },
    // { image: img, name: "Even Westvang" },
  ]
}));

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All posts");
  const postsPerPage = 21;
  const pageCount = Math.ceil(posts.length / postsPerPage);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("date-desc");

  const handlePageClick = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(0);
  };

  const filteredPosts = posts
    .filter(post => selectedCategory === "All posts" || post.categories.includes(selectedCategory))
    .filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

  filteredPosts.sort((a, b) => {
    switch (sortOption) {
      case "date-asc":
        return parseDate(a.date) - parseDate(b.date);
      case "date-desc":
        return parseDate(b.date) - parseDate(a.date);
      case "title-asc":
        return a.title.localeCompare(b.title);
      case "title-desc":
        return b.title.localeCompare(a.title);
      default:
        return 0;
    }
  });

  return (
    <div className="bg-gray-50">
      {/* Hero Section with Background Image */}
      <div 
        className="w-full h-[500px] bg-cover bg-center flex justify-center items-center text-black text-3xl font-bold bg-opacity-60"
        style={{ backgroundImage: `url(${heroImage.src})` }}
      >
        <div className="absolute inset-0 h-[584px] bg-gradient-to-b from-black/60 via-transparent to-black/60"></div>
        Blog
      </div>
      <div className="pb-44 pt-24">
        <div className="w-full max-w-[1440px] mx-auto p-6">
          {/* Category Filter Buttons and search bar and sorting */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex space-x-4 overflow-x-auto">
              {["All posts", "Product", "Community", "Guides", "Company", "Content strategy", "Digital strategy"].map((category, index) => (
                <button
                  key={index}
                  onClick={() => handleCategoryClick(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${selectedCategory === category ? "bg-gray-200 text-black" : "text-gray-500 hover:text-black transition-colors duration-300"}`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by title"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-4 py-2 pl-10 border border-gray-300 rounded-lg text-sm focus:outline-none"
              />
              {/* Search Icon */}
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
              
              {/* Sorting Dropdown */}
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none"
              >
                <option value="date-asc">Sort by Date (Asc)</option>
                <option value="date-desc">Sort by Date (Desc)</option>
                <option value="title-asc">Sort by Title (Asc)</option>
                <option value="title-desc">Sort by Title (Desc)</option>
              </select>
            </div>
          </div>

          {/* Blog Posts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(currentPage * postsPerPage, (currentPage + 1) * postsPerPage).map((post, index) => (
              <Link href={`/blog/${post.title}`} key={index} className="border p-4 rounded-lg hover:bg-white cursor-pointer hover:shadow">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex space-x-2">
                    {post.categories.map((category, i) => (
                      <span key={i} className="bg-gray-100 text-xs font-semibold px-2 py-1 rounded">
                        {category}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">{post.date}</span>
                </div>
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-sm text-gray-600 mb-4">{post.description}</p>
                <div className="flex items-center space-x-2">
                  {post.author.map((author, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <Image src={author.image} alt={author.name} width={24} height={24} className="w-6 h-6 rounded-full border border-white" />
                      {i === 0 && <span className="text-xs text-gray-500">{author.name}{post.author.length > 1 ? ` and ${post.author.length - 1} more` : ''}</span>}
                    </div>
                  ))}
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="pt-20 flex flex-col md:flex-row gap-6 md:gap-0 md:items-start items-center md:justify-between">
            <div></div>
            <ReactPaginate
              previousLabel={<span className="flex items-center space-x-1"><FaArrowLeft /> <span>Previous</span></span>}
              nextLabel={<span className="flex items-center space-x-1"><span>Next</span> <FaArrowRight /></span>}
              breakLabel="..."
              pageCount={pageCount}
              marginPagesDisplayed={1}
              pageRangeDisplayed={2}
              onPageChange={handlePageClick}
              containerClassName="flex items-center space-x-4"
              pageClassName="px-3 py-1 rounded-lg text-gray-700 bg-white border cursor-pointer hover:bg-gray-200 transition-colors duration-300"
              activeClassName="bg-gray-300"
              previousClassName={`px-3 py-1 rounded-lg ${currentPage === 0 ? "text-gray-400 cursor-not-allowed" : "text-gray-700 border cursor-pointer hover:bg-gray-200"}`}
              nextClassName={`px-3 py-1 rounded-lg ${currentPage === pageCount - 1 ? "text-gray-400 cursor-not-allowed" : "text-gray-700 border cursor-pointer hover:bg-gray-200"}`}
              disabledClassName="text-gray-400 cursor-not-allowed"
            />
            <span className="text-gray-600">Page {currentPage + 1} of {pageCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;





// import React from "react";
// import Image from "next/image";
// import img from '../../../public/1.jpg';
// import Link from "next/link";

// const posts = [
//   {
//     title: "The Sanity Winter Release 2024",
//     description: "Announcing Sanity Create w / Automatic Content Mapping, Visual Editing, and Releases",
//     categories: ["PRODUCT", "COMMUNITY", "COMPANY"],
//     date: "NOV 19",
//     author: [{
//       image: img,
//       name: "Simen Svale",
//     }]
//   },
//   {
//     title: "Sanity joins the Open Source Pledge",
//     description: "We are joining the Open Source Pledge, committing to pay $2,000 per year per full-time developer directly to open source maintainers and...",
//     categories: ["COMMUNITY", "COMPANY"],
//     date: "NOV 12",
    // author: [
    //   {
    //     image: img,
    //     name: "Simen Svale",
    //   },
    //   {
    //     image: img,
    //     name: "Magnus Hillestad",
    //   },
    //   {
    //     image: img,
    //     name: "Even Westvang",
    //   },
    // ]
//   },
//   {
//     title: "Begin Team to Join Sanity",
//     description: "Sanity welcomes the Begin.com team, enhancing our Content Operating System with powerful content compute capabilities.",
//     categories: ["PRODUCT", "COMPANY"],
//     date: "OCT 23",
//     author: [
//       {
//         image: img,
//         name: "Simen Svale",
//       },
//       {
//         image: img,
//         name: "Magnus Hillestad",
//       },
//     ]
//   },
// ];

// const Blog = () => {
//   return (
//     <Link href={`/blog/1`} className="min-h-screen bg-[#f6f6f8]">
//       <div className="w-full max-w-[1440px] mx-auto p-6">
//         <div className="flex space-x-4 mb-6">
//           {["All posts", "Product", "Community", "Guides", "Company", "Content strategy", "Digital strategy"].map((category, index) => (
//             <button
//               key={index}
//               className={`px-4 py-2 rounded-lg text-sm font-medium ${category === "Company" ? "bg-gray-200 text-black" : "text-gray-500 hover:text-black"}`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {posts.map((post, index) => (
//             <div key={index} className="border p-4 rounded-lg hover:bg-white bg-transparent hover:shadow">
//               <div className="flex justify-between items-center mb-2">
//                 <div className="flex space-x-2">
//                   {post.categories.map((category, i) => (
//                     <span key={i} className="bg-gray-100 text-xs font-semibold px-2 py-1 rounded">
//                       {category}
//                     </span>
//                   ))}
//                 </div>
//                 <span className="text-xs text-gray-500">{post.date}</span>
//               </div>
//               <h2 className="text-lg font-bold mb-2">{post.title}</h2>
//               <p className="text-sm text-gray-600 mb-4">{post.description}</p>
//               <div className="flex -space-x-2">
                // {post.author.map((author, i) => (
                //   <div key={i} className="flex items-center space-x-2">
                //     <Image src={author.image} alt={author.name} width={24} height={24} className="w-6 h-6 rounded-full border border-white" />
                //     {i === 0 && <span className="text-xs text-gray-500">{author.name}{post.author.length > 1 ? ` and ${post.author.length - 1} more` : ''}</span>}
                //   </div>
                // ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default Blog;
