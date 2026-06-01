import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { LanguageProvider } from "@/features/language";

import "./index.css";
import { App } from "./app/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>,
);
