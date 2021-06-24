import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

import CountriesProvider from "./components/providers/countries.provider";
import ThemeProvider from "./components/providers/theme.provider";

ReactDOM.render(
  <React.StrictMode>
    <CountriesProvider>
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </CountriesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
