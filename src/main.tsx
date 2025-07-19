import App from "@/App";
import { ModalProvider } from "@/providers/ModalProvider";
import { RepoProvider } from "@/providers/RepoProvider";
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
    <RepoProvider>
      <ThemeProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </ThemeProvider>
    </RepoProvider>
  </StrictMode>,
);
