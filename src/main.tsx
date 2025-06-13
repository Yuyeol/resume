import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Buffer } from "buffer";
import "./index.css";
import App from "./App.tsx";
import { pdfjs } from "react-pdf";

// 1. Buffer 폴리필 추가
globalThis.Buffer = Buffer;

// 2. 워커 경로 수정
pdfjs.GlobalWorkerOptions.workerSrc = `${
  import.meta.env.BASE_URL
}pdf.worker.min.js`;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
