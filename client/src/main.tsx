import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { LanguageProvider } from "@/features/language";
import { ThemeProvider } from "@/features/theme";

import "./index.css";
import { App } from "./app/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>,
);
