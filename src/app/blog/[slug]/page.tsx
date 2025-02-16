import React from "react";
import Image from "next/image";
import banner from "../../../../public/default.jpg";
import img from "../../../../public/1.jpg";

const BlogPost = () => {
  return (
    <div className="p-6">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col xl:flex-row gap-10">
            <div className="w-full xl:w-1/2">        
                <h1 className="text-4xl font-bold mb-4">Introducing Sanity for Startups</h1>
                <p className="mb-4">
                    We’re now making it even easier for founders to get started with our new
                    <span className="italic"> Sanity Startup</span> program. This program provides
                    early-stage startups with free access to Sanity&apos;s powerful content
                    management tools and infrastructure.
                </p>

                <p className="text-sm text-gray-500 mb-4">Published January 28, 2025</p>
                <div className="flex items-center mb-6">
                    <Image
                    src={img}
                    alt="Author"
                    width={40}
                    height={40}
                    className="rounded-full"
                    />
                    <div className="ml-3">
                        <p className="font-semibold">Jon Eide Johnsen</p>
                        <p className="text-sm text-gray-500">Head of Growth & Data</p>
                    </div>
                </div>
            </div>
            <div className="w-full xl:w-1/2">
                <Image
                    src={banner}
                    alt="Blog banner"
                    objectFit="cover"
                    className="rounded-lg mb-6"
                />
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative mt-10">
            <div className="md:col-span-2">
                <p className="mb-4">
                    Building something ambitious? High-growth startups like
                    <a href="#" className="text-blue-500"> Linear</a>,
                    <a href="#" className="text-blue-500"> Pinecone</a>,
                    <a href="#" className="text-blue-500"> Retool</a>, and
                    <a href="#" className="text-blue-500"> Anthropic </a>
                    use Sanity to power their content operations from seed to scale.
                </p>
                <p className="mb-4">
                    We’re now making it even easier for founders to get started with our new
                    <span className="italic"> Sanity Startup</span> program. This program provides
                    early-stage startups with free access to Sanity&apos;s powerful content
                    management tools and infrastructure.
                </p>
                <h2 className="text-2xl font-semibold mb-2">Program details</h2>
                <ul className="list-disc pl-5 mb-6">
                    <li>1 year of free access to Sanity’s <a href="#" className="text-blue-500">Growth plan</a> (up to $9,000 in value)</li>
                    <li>50 user seats to collaborate on content</li>
                    <li>Private datasets to keep your content secure</li>
                    <li>User roles and permissions</li>
                    <li>Comments and tasks for content workflows</li>
                    <li>Scheduled publishing</li>
                    <li>AI-assisted content generation with Sanity AI</li>
                </ul>
            </div>
            <div className="h-fit sticky top-24">
                <h3 className="font-bold mb-3">Table of Contents</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                    <li><a href="#" className="hover:underline">Program details</a></li>
                    <li><a href="#" className="hover:underline">Who can apply?</a></li>
                    <li><a href="#" className="hover:underline">How to get started?</a></li>
                    <li><a href="#" className="hover:underline">Scaling your startup with Sanity</a></li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
