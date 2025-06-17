// import GoogleAuth from '@/components/authentication/GoogleAuth';

// const Page = () => {
//   return (
//     <div className="py-28">
//       <h1 className="text-2xl font-bold mb-4 text-center">
//         Welcome to the Dashboard
//       </h1>
//       <GoogleAuth />
//     </div>
//   );
// };

// export default Page;

import React from 'react';
import SignupPage from '@/components/authentication/SignupPage';

const page = () => {
  return (
    <div>
      <SignupPage />
    </div>
  );
};

export default page;
