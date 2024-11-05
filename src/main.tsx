import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { ThemeProvider } from "./hooks/theme-provider";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="codepen-clone-theme">
    <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);