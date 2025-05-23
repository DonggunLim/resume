import Header from "../../components/Header";
import Skills from "./components/Skills";
import { motion } from "framer-motion";

const MainPage = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* <Header /> */}
      </motion.div>
    </>
  );
};

export default MainPage;
