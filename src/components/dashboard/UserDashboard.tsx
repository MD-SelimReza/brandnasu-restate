// "use client";

// import React from "react";
// import {
//   FiShoppingCart,
//   FiDollarSign,
//   FiHelpCircle,
//   FiEye,
// } from "react-icons/fi";

// const UserDashboard = () => {
//   return (
//     <div className="space-y-6 flex-1 pt-6">
//       {/* Metrics Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//         <div className="bg-white rounded-xl shadow p-4 flex items-center space-x-4">
//           <FiShoppingCart className="text-4xl text-darkIndigo-600" />
//           <div>
//             <p className="text-sm text-gray-500">My Orders</p>
//             <p className="text-xl font-semibold text-gray-800">24</p>
//           </div>
//         </div>

//         <div className="bg-white rounded-xl shadow p-4 flex items-center space-x-4">
//           <FiDollarSign className="text-4xl text-green-500" />
//           <div>
//             <p className="text-sm text-gray-500">Account Balance</p>
//             <p className="text-xl font-semibold text-gray-800">$1,280.50</p>
//           </div>
//         </div>

//         <div className="bg-white rounded-xl shadow p-4 flex items-center space-x-4">
//           <FiHelpCircle className="text-4xl text-yellow-500" />
//           <div>
//             <p className="text-sm text-gray-500">Support Tickets</p>
//             <p className="text-xl font-semibold text-gray-800">2 Open</p>
//           </div>
//         </div>

//         <div className="bg-white rounded-xl shadow p-4 flex items-center space-x-4">
//           <FiEye className="text-4xl text-purple-500" />
//           <div>
//             <p className="text-sm text-gray-500">Recently Viewed</p>
//             <p className="text-xl font-semibold text-gray-800">8 Items</p>
//           </div>
//         </div>
//       </div>

//       {/* Recent Orders */}
//       <div className="bg-white rounded-xl shadow p-6">
//         <h2 className="text-lg font-semibold text-gray-800 mb-4">
//           Recent Orders
//         </h2>
//         <div className="overflow-x-auto">
//           <table className="min-w-full text-sm text-left text-gray-600">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-4 py-3">Order ID</th>
//                 <th className="px-4 py-3">Date</th>
//                 <th className="px-4 py-3">Status</th>
//                 <th className="px-4 py-3">Total</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr className="border-t">
//                 <td className="px-4 py-3">#UORD001</td>
//                 <td className="px-4 py-3">Mar 20, 2024</td>
//                 <td className="px-4 py-3">
//                   <span className="px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded">
//                     Delivered
//                   </span>
//                 </td>
//                 <td className="px-4 py-3">$89.99</td>
//               </tr>
//               <tr className="border-t">
//                 <td className="px-4 py-3">#UORD002</td>
//                 <td className="px-4 py-3">Mar 16, 2024</td>
//                 <td className="px-4 py-3">
//                   <span className="px-2 py-1 text-xs font-medium text-yellow-700 bg-yellow-100 rounded">
//                     Processing
//                   </span>
//                 </td>
//                 <td className="px-4 py-3">$45.00</td>
//               </tr>
//               <tr className="border-t">
//                 <td className="px-4 py-3">#UORD003</td>
//                 <td className="px-4 py-3">Mar 10, 2024</td>
//                 <td className="px-4 py-3">
//                   <span className="px-2 py-1 text-xs font-medium text-red-700 bg-red-100 rounded">
//                     Canceled
//                   </span>
//                 </td>
//                 <td className="px-4 py-3">$32.50</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Activity Overview */}
//       <div className="bg-white rounded-xl shadow p-4">
//         <h2 className="text-lg font-semibold text-gray-800 mb-4">
//           Account Activity
//         </h2>
//         <p className="text-sm text-gray-500">
//           You can integrate a line chart here for user activity or order trends.
//         </p>
//         <div className="h-48 flex items-center justify-center text-gray-400 border-dashed border-2 border-gray-300 rounded-lg mt-4">
//           [ Chart Placeholder ]
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserDashboard;

'use client';

import React from 'react';
import {
  FiShoppingCart,
  FiDollarSign,
  FiHelpCircle,
  FiEye,
} from 'react-icons/fi';

const UserDashboard = () => {
  return (
    <div className="space-y-6 flex-1 pt-6">
      {/* Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-indigo100 rounded-xl shadow p-4 flex items-center space-x-4">
          <FiShoppingCart className="text-4xl text-darkIndigo" />
          <div>
            <p className="text-sm text-darkGray">My Orders</p>
            <p className="text-xl font-semibold text-darkIndigo">24</p>
          </div>
        </div>

        <div className="bg-green-100 rounded-xl shadow p-4 flex items-center space-x-4">
          <FiDollarSign className="text-4xl text-green-600" />
          <div>
            <p className="text-sm text-darkGray">Account Balance</p>
            <p className="text-xl font-semibold text-green-700">$1,280.50</p>
          </div>
        </div>

        <div className="bg-yellow-100 rounded-xl shadow p-4 flex items-center space-x-4">
          <FiHelpCircle className="text-4xl text-yellow-600" />
          <div>
            <p className="text-sm text-darkGray">Support Tickets</p>
            <p className="text-xl font-semibold text-yellow-700">2 Open</p>
          </div>
        </div>

        <div className="bg-purple-100 rounded-xl shadow p-4 flex items-center space-x-4">
          <FiEye className="text-4xl text-purple-600" />
          <div>
            <p className="text-sm text-darkGray">Recently Viewed</p>
            <p className="text-xl font-semibold text-purple-700">8 Items</p>
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-lg font-semibold text-darkIndigo mb-4">
          Recent Orders
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-darkGray">
            <thead className="bg-gray100 text-darkIndigo font-medium">
              <tr>
                <th className="px-4 py-3">Order ID</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-3">#UORD001</td>
                <td className="px-4 py-3">Mar 20, 2024</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded">
                    Delivered
                  </span>
                </td>
                <td className="px-4 py-3">$89.99</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-3">#UORD002</td>
                <td className="px-4 py-3">Mar 16, 2024</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 text-xs font-medium text-yellow-700 bg-yellow-100 rounded">
                    Processing
                  </span>
                </td>
                <td className="px-4 py-3">$45.00</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-3">#UORD003</td>
                <td className="px-4 py-3">Mar 10, 2024</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 text-xs font-medium text-red-700 bg-red-100 rounded">
                    Canceled
                  </span>
                </td>
                <td className="px-4 py-3">$32.50</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Activity Overview */}
      <div className="bg-white rounded-xl shadow p-4">
        <h2 className="text-lg font-semibold text-darkIndigo mb-4">
          Account Activity
        </h2>
        <p className="text-sm text-darkGray">
          You can integrate a line chart here for user activity or order trends.
        </p>
        <div className="h-48 flex items-center justify-center text-gray-400 border-dashed border-2 border-gray100 rounded-lg mt-4">
          [ Chart Placeholder ]
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
