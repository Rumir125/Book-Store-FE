import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { queryClient } from "../src/services/queryClient";
import { RouteGuard } from "../src/guards/route.guard";

import { Provider } from "react-redux";
import store from "../src/store/store";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-quill/dist/quill.snow.css";
import { ThemeProvider } from "@mui/styles";
import { theme } from "../styles/theme";
import { Container } from "@mui/material";
import ToolbarLayout from "../src/components/ToolbarLayout";
import BackgroundImage from "../src/components/BackgroundImage";

function MyApp({ Component, pageProps }: AppProps<any>) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouteGuard>
          <section style={{ height: "100%", backgroundColor: "#ddceb6" }}>
            <ThemeProvider theme={theme}>
              <ToolbarLayout>
                <Container style={{ height: "100%" }}>
                  <Component {...pageProps} />
                  <ReactQueryDevtools initialIsOpen={false} />
                  <ToastContainer />
                </Container>
              </ToolbarLayout>
              <BackgroundImage mainPage={pageProps.mainPage} />
            </ThemeProvider>
          </section>
        </RouteGuard>
      </QueryClientProvider>
    </Provider>
  );
}

export default MyApp;
