import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <main className="flex flex-col max-w-[1600px] mx-auto h-full">
      <Header />
      <Outlet />
    </main>
  );
};

export default Layout;
