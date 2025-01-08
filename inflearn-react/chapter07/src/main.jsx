import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import App from "./App";

// console.log(React.version, ReactDOM);

const root = document.getElementById("react-app");

if (!root) {
  throw new Error('문서에 "#react-app" 요소가 존재하지 않습니다.');
}

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
);
