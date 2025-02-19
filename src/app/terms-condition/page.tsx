// import Container from "@/components/Container";
// import { Metadata } from "next";
// import React from "react";

// export const metadata: Metadata = {
//   title: "Terms & Condition",
//   description: "Terms and condition page",
// };

// const TermsCondition = () => {
//   return (
//     <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100">
//         <Container>
//             <div className="text-gray-800 py-10">
//             <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">
//                 Terms and Conditions
//             </h1>
//             <p className="text-lg text-gray-600 mb-12 text-center">
//                 Please read these Terms and Conditions carefully before using our
//                 website. By accessing and purchasing from Electronics E-commerce, you
//                 agree to abide by these terms.
//             </p>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
//                 <section>
//                 <h2 className="text-xl font-semibold text-gray-700 mb-2">
//                     1. Acceptance of Terms
//                 </h2>
//                 <p className="text-gray-600">
//                     By using our site, you accept these Terms and Conditions and agree
//                     to comply with all applicable laws and regulations. If you disagree
//                     with any part, please do not use our website.
//                 </p>
//                 <div className="border-b border-gray-200 my-4"></div>
//                 </section>

//                 <section>
//                 <h2 className="text-xl font-semibold text-gray-700 mb-2">
//                     2. Eligibility
//                 </h2>
//                 <p className="text-gray-600">
//                     Users must be at least 18 years old to place an order. By purchasing
//                     from our site, you confirm that you are of legal age and have the
//                     authority to form a binding contract.
//                 </p>
//                 <div className="border-b border-gray-200 my-4"></div>
//                 </section>

//                 <section>
//                 <h2 className="text-xl font-semibold text-gray-700 mb-2">
//                     3. Product Information and Pricing
//                 </h2>
//                 <p className="text-gray-600">
//                     We strive to provide accurate product descriptions and prices.
//                     However, we do not warrant that descriptions or other content are
//                     error-free. We reserve the right to correct errors and update
//                     information at any time without prior notice.
//                 </p>
//                 <div className="border-b border-gray-200 my-4"></div>
//                 </section>

//                 <section>
//                 <h2 className="text-xl font-semibold text-gray-700 mb-2">
//                     4. Orders and Payments
//                 </h2>
//                 <p className="text-gray-600">
//                     Orders are subject to availability and acceptance. Payment must be
//                     made before the order is processed, using any of the accepted
//                     methods listed at checkout.
//                 </p>
//                 <div className="border-b border-gray-200 my-4"></div>
//                 </section>

//                 <section>
//                 <h2 className="text-xl font-semibold text-gray-700 mb-2">
//                     5. Shipping and Delivery
//                 </h2>
//                 <p className="text-gray-600">
//                     We aim to process and ship orders as promptly as possible. Estimated
//                     delivery times are not guaranteed, as they depend on courier
//                     services and unforeseen delays.
//                 </p>
//                 <div className="border-b border-gray-200 my-4"></div>
//                 </section>

//                 <section>
//                 <h2 className="text-xl font-semibold text-gray-700 mb-2">
//                     6. Returns and Refunds
//                 </h2>
//                 <p className="text-gray-600">
//                     Returns are accepted within 30 days of purchase if the item is in
//                     original condition. Refunds will be processed to the original
//                     payment method. Please review our Return Policy for details.
//                 </p>
//                 <div className="border-b border-gray-200 my-4"></div>
//                 </section>

//                 <section>
//                 <h2 className="text-xl font-semibold text-gray-700 mb-2">
//                     7. Limitation of Liability
//                 </h2>
//                 <p className="text-gray-600">
//                     Electronics E-commerce is not liable for indirect, incidental, or
//                     consequential damages arising from use of our site or products. Our
//                     liability is limited to the amount paid for the product.
//                 </p>
//                 <div className="border-b border-gray-200 my-4"></div>
//                 </section>

//                 <section>
//                 <h2 className="text-xl font-semibold text-gray-700 mb-2">
//                     8. Intellectual Property
//                 </h2>
//                 <p className="text-gray-600">
//                     All content on our site, including text, graphics, and images, is
//                     our property or that of our content suppliers and is protected by
//                     intellectual property laws.
//                 </p>
//                 <div className="border-b border-gray-200 my-4"></div>
//                 </section>

//                 <section>
//                 <h2 className="text-xl font-semibold text-gray-700 mb-2">
//                     9. Governing Law
//                 </h2>
//                 <p className="text-gray-600">
//                     These Terms are governed by the laws of [Your State/Country].
//                     Disputes will be resolved in the courts of [Your Jurisdiction].
//                 </p>
//                 <div className="border-b border-gray-200 my-4"></div>
//                 </section>

//                 <section>
//                 <h2 className="text-xl font-semibold text-gray-700 mb-2">
//                     10. Changes to Terms and Conditions
//                 </h2>
//                 <p className="text-gray-600">
//                     We may update these Terms periodically. Changes will be posted on
//                     this page, and your continued use of the site constitutes acceptance
//                     of updated terms.
//                 </p>
//                 <div className="border-b border-gray-200 my-4"></div>
//                 </section>

//                 <section>
//                 <h2 className="text-xl font-semibold text-gray-700 mb-2">
//                     11. Contact Us
//                 </h2>
//                 <p className="text-gray-600">
//                     For questions about these Terms, contact us:
//                 </p>
//                 <p className="mt-4 text-gray-700 font-medium">
//                     Email: support@electronics-ecommerce.com
//                 </p>
//                 <p className="text-gray-700 font-medium">Phone: (123) 456-7890</p>
//                 <p className="text-gray-700 font-medium">
//                     Address: 123 Tech Avenue, Silicon City, CA
//                 </p>
//                 </section>
//             </div>

//             <p className="text-sm text-gray-500 mt-10 text-center">
//                 Last Updated: [Insert Date]
//             </p>
//             </div>
//         </Container>
//     </div>
//   );
// };

// export default TermsCondition;

'use client';

import Container from '@/components/Container';
import React from 'react';

const TermsAndConditions = () => {
  return (
      <div className="relative min-h-screen bg-gradient-to-b from-[#CDE3FECC] to-white text-darkIndigo  py-16">
        <Container>
            {/* Heading */}
            <h1 className="text-4xl font-bold text-center mb-10">Terms of Use</h1>
            
            {/* Content */}
            <div className="max-w-4xl mx-auto space-y-8 text-lg">
                {/* Section 1: Collaboration & Communication */}
                <div>
                <h2 className="text-2xl font-semibold">1. Collaboration & Communication</h2>
                <p><strong>1.1 - Service Delivery:</strong> Softriver strives to deliver the highest quality logo and branding services in a timely manner...</p>
                <p><strong>1.2 - Logo Design Process & Deliverables:</strong></p>
                <ul className="list-disc ml-5 space-y-1">
                    <li>All logos are created as original works</li>
                    <li>Final delivery includes multiple formats (AI, EPS, SVG, PNG, and JPG)</li>
                    <li>Full copyright ownership transfer upon final payment</li>
                </ul>
                <p><strong>1.3 - Design Originality:</strong> We do not use templates, pre-made designs, or stock graphics...</p>
                </div>

                {/* Section 2: Refund Policy */}
                <div>
                <h2 className="text-2xl font-semibold">2. Refund Policy</h2>
                <p>By signing up, you accept our refund policy. We have a refund guarantee, meaning that if you are not happy with the results, you don’t pay.</p>
                </div>

                {/* Section 3: Softriver Obligations */}
                <div>
                <h2 className="text-2xl font-semibold">3. Softriver Obligations</h2>
                <p>3.1 - Softriver provides services according to our standard policies and procedures. We reserve the right to reject clients for any reason.</p>
                </div>

                {/* Section 4: Fees & Payment */}
                <div>
                <h2 className="text-2xl font-semibold">4. Fees & Payment</h2>
                <p>4.1 - Fees for services are payable in full, in advance. A valid credit card must be on file.</p>
                </div>
            </div>
        </Container>
    </div>
  );
};

export default TermsAndConditions;
