import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <main className="px-48">
      <Header />
      <Outlet />
    </main>
  );
};

export default Layout;
