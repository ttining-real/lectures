// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const container = document.getElementById("root");

if (!container) {
  throw new Error('문서에 "#root" 요소가 존재하지 않습니다.');
}

// createRoot(container).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
createRoot(container).render(<App />);
