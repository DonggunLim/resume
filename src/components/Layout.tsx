import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <main className="mx-auto max-w-3xl">
      <Header />
      <Outlet />
    </main>
  );
};

export default Layout;
