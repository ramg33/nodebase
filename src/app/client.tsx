"use client";

import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
// import { useQuery } from "@tanstack/react-query";

export const Client = () => {
  const trpc = useTRPC();
  // const { data: users } = useQuery(trpc.getUsers.queryOptions());
  const { data: users } = useSuspenseQuery(trpc.getUsers.queryOptions());
  return <div>{JSON.stringify(users)}</div>;
};
