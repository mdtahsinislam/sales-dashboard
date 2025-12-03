// export default function SortIcon({ direction }: any) {
//   return <span className="">{direction === "asc" ? "↑" : "↓"}</span>;
// }


// "use client";

export default function SortIcon({ direction }: any) {
  return (
    <span
      className={` w-16 h-16 ml-1 text-gray-500 font-bold transition-colors duration-200 ${
        direction === "asc" ? "text-green-500" : direction === "desc" ? "text-red-500" : "text-gray-300"
      }`}
    >
      {direction === "asc" ? "↑" : direction === "desc" ? "↓" : "↕"}
    </span>
  );
}
