import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { queryClient } from "../src/services/queryClient";
import { RouteGuard } from "../src/guards/route.guard";

import { Provider } from "react-redux";
import store from "../src/store/store";
import ToolbarLayout from "../src/components/ToolbarLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouteGuard>
          <ToolbarLayout>
            <Component {...pageProps} />
            <ReactQueryDevtools initialIsOpen={false} />
          </ToolbarLayout>
        </RouteGuard>
      </QueryClientProvider>
    </Provider>
  );
}

export default MyApp;
