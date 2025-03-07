import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="dark:text-dark dark:bg-dark min-h-screen">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8 lg:px-24 flex flex-col md:flex-row h-screen">
        <Header />
        <div className="flex flex-1 overflow-hidden lg:py-16 md:py-24">
          <main className="flex flex-col flex-1 overflow-y-auto p-4">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
