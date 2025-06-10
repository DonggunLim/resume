import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProjectPage from "./pages/Projects";
import ProjectLayout from "./components/layout/ProjectLayout";
import RootLayout from "./components/layout/RootLayout";
import MainLayout from "./components/layout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        element: <MainLayout />,
        children: [{ index: true, element: <MainPage /> }],
      },
      {
        path: "/projects",
        element: <ProjectLayout />,
        children: [{ path: ":title", element: <ProjectPage /> }],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
