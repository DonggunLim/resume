import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="wrraper">
      <Header />
      <main className="main-contaienr">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
