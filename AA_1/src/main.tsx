import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import AAC_2 from './components/AAC_2.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import NotFoundPage from "./components/NotFoundPage.tsx";

const router = createBrowserRouter([
  {
    path: "/Dist_test/AA_1/dist/",
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/Dist_test/AA_1/dist/AAC_2",
    element: <AAC_2 />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
