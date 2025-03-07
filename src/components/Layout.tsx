import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="dark:text-dark dark:bg-dark">
      <div className="mx-auto md:max-w-screen-xl md:px-24 md:flex h-screen">
        <Header />
        <div className="flex flex-1 overflow-hidden py-24">
          <main className="flex flex-col flex-1 overflow-y-auto p-2">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
