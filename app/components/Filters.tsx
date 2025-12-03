


// //C:\Users\DELL\OneDrive\Desktop\My-SDP2\oA\sales-dashboard\app\components\Filters.tsx
// "use client";

// import { useState } from "react";

// export default function Filters({ onChange }: any) {
//   const [filters, setFilters] = useState({
//     startDate: "",
//     endDate: "",
//     minPrice: "",
//     customerEmail: "",
//     customerPhone: "",
//   });

//   const update = (field: string, value: string) => {
//     const newFilters = { ...filters, [field]: value };
//     setFilters(newFilters);
//     onChange(newFilters);
//   };

//   return (
//     // <div className="grid grid-cols-2 md:grid-cols-5 gap-4 bg-white p-4 rounded-lg shadow">
//     //   <h1>Start Date</h1>
//     //   <input type="date" className="input" onChange={(e) => update("startDate", e.target.value)} />
//     //   <h1>End Date</h1>
//     //   <input type="date" className="input" onChange={(e) => update("endDate", e.target.value)} />
//     //   <input type="number" placeholder="Min Price" className="input" onChange={(e) => update("minPrice", e.target.value)} />
//     //   <input type="text" placeholder="Customer Email" className="input" onChange={(e) => update("customerEmail", e.target.value)} />
//     //   <input type="text" placeholder="Phone" className="input" onChange={(e) => update("customerPhone", e.target.value)} />
//     // </div>


// <div className="w-full bg-white p-6 rounded-xl shadow-md border border-gray-100">
//   {/* <h2 className="text-lg font-semibold mb-4 text-gray-700">Filters</h2> */}

//   <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">

//     {/* Start Date */}
//     <div className="flex flex-col">
//       <label className="text-sm font-medium text-gray-600 mb-1">Start Date</label>
//       <input
//         type="date"
//         className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         onChange={(e) => update("startDate", e.target.value)}
//       />
//     </div>

//     {/* End Date */}
//     <div className="flex flex-col">
//       <label className="text-sm font-medium text-gray-600 mb-1">End Date</label>
//       <input
//         type="date"
//         className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         onChange={(e) => update("endDate", e.target.value)}
//       />
//     </div>

//     {/* Min Price */}
//     <div className="flex flex-col">
//       <label className="text-sm font-medium text-gray-600 mb-1">Min Price</label>
//       <input
//         type="number"
//         placeholder="Enter price"
//         className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         onChange={(e) => update("minPrice", e.target.value)}
//       />
//     </div>

//     {/* Customer Email */}
//     <div className="flex flex-col">
//       <label className="text-sm font-medium text-gray-600 mb-1">Customer Email</label>
//       <input
//         type="text"
//         placeholder="Email"
//         className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         onChange={(e) => update("customerEmail", e.target.value)}
//       />
//     </div>

//     {/* Phone */}
//     <div className="flex flex-col">
//       <label className="text-sm font-medium text-gray-600 mb-1">Phone Number</label>
//       <input
//         type="text"
//         placeholder="Phone"
//         className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         onChange={(e) => update("customerPhone", e.target.value)}
//       />
//     </div>

//   </div>
// </div>

//   );
// }


"use client";

import { useState } from "react";

export interface FilterValues {
  startDate: string;
  endDate: string;
  minPrice: string;
  customerEmail: string;
  customerPhone: string;
}

interface FiltersProps {
  onChange: (filters: FilterValues) => void;
}

export default function Filters({ onChange }: FiltersProps) {
  const [filters, setFilters] = useState<FilterValues>({
    startDate: "",
    endDate: "",
    minPrice: "",
    customerEmail: "",
    customerPhone: "",
  });

  const update = (field: keyof FilterValues, value: string) => {
    const newFilters = { ...filters, [field]: value };
    setFilters(newFilters);
    onChange(newFilters);
  };

  return (
    <div className="w-full bg-white p-6 rounded-xl shadow-md border border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">

        {/* Start Date */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-600 mb-1">Start Date</label>
          <input
            type="date"
            className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => update("startDate", e.target.value)}
          />
        </div>

        {/* End Date */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-600 mb-1">End Date</label>
          <input
            type="date"
            className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => update("endDate", e.target.value)}
          />
        </div>

        {/* Min Price */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-600 mb-1">Min Price</label>
          <input
            type="number"
            placeholder="Enter price"
            className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => update("minPrice", e.target.value)}
          />
        </div>

        {/* Customer Email */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-600 mb-1">Customer Email</label>
          <input
            type="text"
            placeholder="Email"
            className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => update("customerEmail", e.target.value)}
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-600 mb-1">Phone Number</label>
          <input
            type="text"
            placeholder="Phone"
            className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => update("customerPhone", e.target.value)}
          />
        </div>

      </div>
    </div>
  );
}
