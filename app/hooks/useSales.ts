
//C:\Users\DELL\OneDrive\Desktop\My-SDP2\oA\sales-dashboard\app\hooks\useSales.ts
"use client";

import { useQuery } from "@tanstack/react-query";

export function useSales(params: any) {
  return useQuery({
    queryKey: ["sales", params],
    queryFn: async () => {
      const query = new URLSearchParams(params).toString();
      const res = await fetch(`/api/sales?${query}`);
      return res.json();
    },
    // keepPreviousData: true,
    staleTime: Infinity,
  });
}
