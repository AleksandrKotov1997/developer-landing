import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import NiceModal from "@ebay/nice-modal-react";

import { LanguageProvider } from "@/features/language";
import { ThemeProvider } from "@/features/theme";

import "./global.css";
import { App } from "./app/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NiceModal.Provider>
      <ThemeProvider>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </ThemeProvider>
    </NiceModal.Provider>
  </StrictMode>,
);
