import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="dark:text-dark dark:bg-dark">
      <div className="mx-auto min-h-screen max-w-screen-xl px-24 ">
        <div className="flex justify-between gap-2">
          <Header />
          <main className="flex flex-col flex-1">{/* <Outlet /> */}</main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
