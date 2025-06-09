import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import MainPage from "./pages/MainPage";
import ProjectLayout from "./components/layout/ProjectLayout";
import ProjectPage from "./pages/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <MainPage /> }],
  },
  {
    path: "/projects",
    element: <ProjectLayout />,
    children: [{ path: ":title", element: <ProjectPage /> }],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
