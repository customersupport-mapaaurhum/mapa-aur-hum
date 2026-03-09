import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

// Strip trailing slashes to prevent duplicate canonical URLs (SEO fix)
const { pathname, search, hash } = window.location;
if (pathname !== "/" && pathname.endsWith("/")) {
  window.history.replaceState(null, "", pathname.slice(0, -1) + search + hash);
}

const root = document.getElementById("root")!;

createRoot(root).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
