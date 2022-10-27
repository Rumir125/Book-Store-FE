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

function MyApp({ Component, pageProps }: AppProps<any>) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouteGuard>
          <section style={{ height: "100%", backgroundColor: "#ddceb6" }}>
            <ToolbarLayout>
              <Container style={{ height: "100%" }}>
                <ThemeProvider theme={theme}>
                  <Component {...pageProps} />
                  <ReactQueryDevtools initialIsOpen={false} />
                  <ToastContainer />
                </ThemeProvider>
              </Container>
            </ToolbarLayout>

            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: "100%",
                overflow: "hidden",
                zIndex: -1,
                backgroundColor: "#ddceb6",
              }}
            >
              {pageProps.mainPage && (
                <div
                  style={{
                    top: -150,
                    left: 180,
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src="/Books4.png"
                    style={{
                      height: "1000px",
                      width: "1000px",
                      objectFit: "cover",
                    }}
                  ></img>
                </div>
              )}
            </div>
          </section>
        </RouteGuard>
      </QueryClientProvider>
    </Provider>
  );
}

export default MyApp;
