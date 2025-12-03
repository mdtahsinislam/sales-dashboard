

// // //C:\Users\DELL\OneDrive\Desktop\My-SDP2\oA\sales-dashboard\app\page.tsx
// // "use client";

// // import { useState } from "react";
// // import Filters from "./components/Filters";
// // import PaginationControls from "./components/PaginationControls";
// // import SalesChart from "./components/SalesChart";
// // import SalesTable from "./components/SalesTable";
// // import { useSales } from "./hooks/useSales";



// // export default function Page() {
// //   const [filters, setFilters] = useState({});
// //   const [sort, setSort] = useState({ sortBy: "", sortOrder: "asc" });
// //   const [pageTokens, setPageTokens] = useState({ before: null, after: null });

// //   const params = { ...filters, ...sort, ...pageTokens };
// //   const { data, isLoading } = useSales(params);

// //   const handleSort = (field: string) => {
// //     setSort((prev) => ({
// //       sortBy: field,
// //       sortOrder: prev.sortOrder === "asc" ? "desc" : "asc",
// //     }));
// //   };

// //   const handlePrev = () => {
// //     setPageTokens({ before: data.beforeToken, after: null });
// //   };

// //   const handleNext = () => {
// //     setPageTokens({ after: data.afterToken, before: null });
// //   };

// //   if (isLoading) return <p>Loading...</p>;

// //   return (
// //     <div className="p-6 space-y-6">
// //       <Filters onChange={setFilters} />

// //       <SalesChart data={data.totalSales} />

// //       <SalesTable
// //         data={data.data}
// //         onSort={handleSort}
// //         sortBy={sort.sortBy}
// //         sortOrder={sort.sortOrder}
// //       />

// //       <PaginationControls
// //         before={data.beforeToken}
// //         after={data.afterToken}
// //         onPrev={handlePrev}
// //         onNext={handleNext}
// //       />
// //     </div>
// //   );
// // }


// //C:\Users\DELL\OneDrive\Desktop\My-SDP2\oA\sales-dashboard\app\page.tsx

// "use client";

// import { useState } from "react";
// import Filters from "./components/Filters";
// import PaginationControls from "./components/PaginationControls";
// import SalesChart from "./components/SalesChart";
// import SalesTable from "./components/SalesTable";
// import { useSales } from "./hooks/useSales";

// export default function Page() {
//   const [filters, setFilters] = useState({});
//   const [sort, setSort] = useState({ sortBy: "", sortOrder: "asc" });
//   const [pageTokens, setPageTokens] = useState({ before: null, after: null });

//   const params = { ...filters, ...sort, ...pageTokens };
//   const { data, isLoading } = useSales(params);

//   const handleSort = (field: string) => {
//     setSort((prev) => ({
//       sortBy: field,
//       sortOrder: prev.sortOrder === "asc" ? "desc" : "asc",
//     }));
//   };

//   const handlePrev = () => {
//     setPageTokens({ before: data.beforeToken, after: null });
//   };

//   const handleNext = () => {
//     setPageTokens({ after: data.afterToken, before: null });
//   };

//   if (isLoading) return <p className="text-center py-10 text-lg">Loading...</p>;

//   return (
//     <div className=" mx-auto bg-gray-100 p-6">
//       <div className="max-w-6xl mx-auto space-y-8">

//         {/* HEADER */}
//         <h1 className="text-3xl font-bold text-gray-800">📊 Sales Dashboard</h1>

//         {/* FILTER SECTION */}
//         <div className="bg-white rounded-xl p-6 shadow-md">
//           <h2 className="text-xl font-semibold mb-4 text-gray-700">Filters</h2>
//           {/* <Filters onChange={setFilters} /> */}

//           <Filters
//   onChange={(f) => {
//     setFilters(f);
//     setPageTokens({ before: null, after: null });  // ⭐ FIX
//   }}
// />

//         </div>

//         {/* CHART SECTION */}
//         <div className="bg-white rounded-xl p-6 shadow-md">
//           <h2 className="text-xl font-semibold mb-4 text-gray-700">Sales Overview</h2>
//           <SalesChart data={data.totalSales} />
//         </div>

//         {/* TABLE SECTION */}
//         <div className="bg-white rounded-xl p-6 shadow-md">
//           <h2 className="text-xl font-semibold mb-4 text-gray-700">Sales Data</h2>
//           <SalesTable
//             data={data.data}
//             onSort={handleSort}
//             sortBy={sort.sortBy}
//             sortOrder={sort.sortOrder}
//           />
//         </div>

//         {/* PAGINATION */}
//         <div className="bg-white rounded-xl p-6 shadow-md flex justify-center">
//           <PaginationControls
//             before={data.beforeToken}
//             after={data.afterToken}
//             onPrev={handlePrev}
//             onNext={handleNext}
//           />
//         </div>

//       </div>
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import Filters, { FilterValues } from "./components/Filters";
import PaginationControls from "./components/PaginationControls";
import SalesChart from "./components/SalesChart";
import SalesTable from "./components/SalesTable";
import { useSales } from "./hooks/useSales";

export default function Page() {
  const [filters, setFilters] = useState<FilterValues | {}>({});
  const [sort, setSort] = useState({ sortBy: "", sortOrder: "asc" });
  const [pageTokens, setPageTokens] = useState({ before: null, after: null });

  const params = { ...filters, ...sort, ...pageTokens };
  const { data, isLoading } = useSales(params);

  const handleSort = (field: string) => {
    setSort((prev) => ({
      sortBy: field,
      sortOrder: prev.sortOrder === "asc" ? "desc" : "asc",
    }));
  };

  const handlePrev = () => {
    setPageTokens({ before: data.beforeToken, after: null });
  };

  const handleNext = () => {
    setPageTokens({ after: data.afterToken, before: null });
  };

  if (isLoading)
    return <p className="text-center py-10 text-lg">Loading...</p>;

  return (
    <div className="mx-auto bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto space-y-8">

        <h1 className="text-3xl font-bold text-gray-800">📊 Sales Dashboard</h1>

        <div className="bg-white rounded-xl p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Filters</h2>

          <Filters
            onChange={(f: FilterValues) => {
              setFilters(f);
              setPageTokens({ before: null, after: null });
            }}
          />
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Sales Overview</h2>
          <SalesChart data={data.totalSales} />
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Sales Data</h2>
          <SalesTable
            data={data.data}
            onSort={handleSort}
            sortBy={sort.sortBy}
            sortOrder={sort.sortOrder}
          />
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md flex justify-center">
          <PaginationControls
            before={data.beforeToken}
            after={data.afterToken}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        </div>

      </div>
    </div>
  );
}
