import { QueryClient } from "react-query";

export const createQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
        staleTime: Infinity,
      },
    },
  });
const defaultQueryClient = createQueryClient();

export { defaultQueryClient as queryClient };
