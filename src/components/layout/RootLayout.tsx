import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

const RootLayout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location.pathname]);
  return (
    <>
      <Outlet />
    </>
  );
};

export default RootLayout;
