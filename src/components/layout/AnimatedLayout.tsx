import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

interface AnimatedLayoutProps extends PropsWithChildren {}

const AnimatedLayout = ({ children }: AnimatedLayoutProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 18,
        mass: 0.3,
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedLayout;
