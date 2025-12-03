



//C:\Users\DELL\OneDrive\Desktop\My-SDP2\oA\sales-dashboard\app\api\sales\route.ts
import { NextResponse } from "next/server";
import salesData from "@/data/sales.json";

function applyFilters(items: any[], filters: any) {
  let filtered = [...items];

  if (filters.startDate) {
    filtered = filtered.filter(
      (s) => new Date(s.date) >= new Date(filters.startDate)
    );
  }

  if (filters.endDate) {
    filtered = filtered.filter(
      (s) => new Date(s.date) <= new Date(filters.endDate)
    );
  }

  if (filters.minPrice) {
    filtered = filtered.filter((s) => s.price >= Number(filters.minPrice));
  }

  if (filters.customerEmail) {
    filtered = filtered.filter((s) =>
      s.customerEmail.toLowerCase().includes(filters.customerEmail.toLowerCase())
    );
  }

  if (filters.customerPhone) {
    filtered = filtered.filter((s) =>
      s.customerPhone.includes(filters.customerPhone)
    );
  }

  return filtered;
}

function paginate(arr: any[], after?: string | null, before?: string | null, size = 50) {
  const index = after
    ? arr.findIndex((x) => x._id === after) + 1
    : before
    ? arr.findIndex((x) => x._id === before) - size
    : 0;

  const start = Math.max(0, index);
  const end = start + size;

  const slice = arr.slice(start, end);

  return {
    data: slice,
    beforeToken: slice.length ? slice[0]._id : null,
    afterToken: slice.length ? slice[slice.length - 1]._id : null,
  };
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const filters = {
    startDate: searchParams.get("startDate"),
    endDate: searchParams.get("endDate"),
    minPrice: searchParams.get("minPrice"),
    customerEmail: searchParams.get("customerEmail"),
    customerPhone: searchParams.get("customerPhone"),
    sortBy: searchParams.get("sortBy"),
    sortOrder: searchParams.get("sortOrder"),
    after: searchParams.get("after"),
    before: searchParams.get("before"),
  };

  let items = salesData.results.Sales;

  // Filters
  items = applyFilters(items, filters);

  // Sorting
  if (filters.sortBy) {
    const order = filters.sortOrder === "desc" ? -1 : 1;

    items = items.sort((a, b) => {
      if (filters.sortBy === "price") return (a.price - b.price) * order;
      if (filters.sortBy === "date") return (new Date(a.date).getTime() - new Date(b.date).getTime()) * order;
      return 0;
    });
  }

  // Pagination
  const paginated = paginate(items, filters.after, filters.before);

  return NextResponse.json({
    totalSales: salesData.results.TotalSales,
    ...paginated,
  });
}
