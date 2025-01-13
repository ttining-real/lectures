import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

// console.log(React.version, ReactDOM);

const root = document.getElementById("react-app");

if (!root) {
  throw new Error('문서에 "#react-app" 요소가 존재하지 않습니다.');
}

createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
