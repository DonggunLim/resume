import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header";
import { AnimatePresence } from "motion/react";

const MainLayout = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <main className="mx-auto max-w-3xl">
        <Header />
        <Outlet key={location.pathname} />
      </main>
    </AnimatePresence>
  );
};

export default MainLayout;
