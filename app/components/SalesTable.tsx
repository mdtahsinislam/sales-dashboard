// "use client";

// import SortIcon from "./SortIcon";

// export default function SalesTable({ data, onSort, sortBy, sortOrder }: any) {
//   return (
//     <div className="bg-white p-4 rounded-lg shadow overflow-x-auto">
//       <table className="w-full border">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="p-2">
//               Date
//               <button onClick={() => onSort("date")}>
//                 <SortIcon direction={sortBy === "date" ? sortOrder : ""} />
//               </button>
//             </th>

//             <th className="p-2">
//               Price
//               <button onClick={() => onSort("price")}>
//                 <SortIcon direction={sortBy === "price" ? sortOrder : ""} />
//               </button>
//             </th>

//             <th className="p-2">Email</th>
//             <th className="p-2">Phone</th>
//           </tr>
//         </thead>

//         <tbody>
//           {data.map((item: any) => (
//             <tr key={item._id} className="border-t">
//               <td className="p-2">{new Date(item.date).toLocaleDateString()}</td>
//               <td className="p-2">{item.price}</td>
//               <td className="p-2">{item.customerEmail}</td>
//               <td className="p-2">{item.customerPhone}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }


"use client";

import SortIcon from "./SortIcon";

export default function SalesTable({ data, onSort, sortBy, sortOrder }: any) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-lg overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-100 text-gray-700 uppercase text-sm tracking-wide">
            <th className="p-3">
              Date
              <button onClick={() => onSort("date")} className="ml-1">
                <SortIcon direction={sortBy === "date" ? sortOrder : ""} />
              </button>
            </th>

            <th className="p-3">
              Price
              <button onClick={() => onSort("price")} className="ml-1">
                <SortIcon direction={sortBy === "price" ? sortOrder : ""} />
              </button>
            </th>

            <th className="p-3">Email</th>
            <th className="p-3">Phone</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item: any, idx: number) => (
            <tr
              key={item._id}
              className={`border-b transition duration-150 hover:bg-gray-50 ${
                idx % 2 === 0 ? "bg-gray-50" : "bg-white"
              }`}
            >
              <td className="p-3">{new Date(item.date).toLocaleDateString()}</td>
              <td className="p-3 font-medium text-gray-800">${item.price}</td>
              <td className="p-3 text-gray-600">{item.customerEmail}</td>
              <td className="p-3 text-gray-600">{item.customerPhone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
