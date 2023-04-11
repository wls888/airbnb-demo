import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { ThemeProvider as MThemeProvider } from "@mui/material";
import App from "./App";
import "normalize.css";
import "@/assets/css/index.less";
import store from "./store";
import theme,{materialTheme} from "./assets/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback="loading">
    <Provider store={store}>
      <MThemeProvider theme={materialTheme}>
        <ThemeProvider theme={theme}>
          <HashRouter>
            <App />
          </HashRouter>
        </ThemeProvider>
      </MThemeProvider>
    </Provider>
  </Suspense>
);
