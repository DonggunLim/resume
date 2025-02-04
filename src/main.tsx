import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/Hompage/HomePage";
import PorfolioPage from "./pages/PortfolioPage/ProtfolioPage";
import ContactPage from "./pages/ContactPage/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/portfolio", element: <PorfolioPage /> },
      { path: "/contact", element: <ContactPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
