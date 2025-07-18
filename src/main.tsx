import App from "@/App";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.scss";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Не найден #root элемент для монтирования React!");
}

createRoot(rootElement).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
