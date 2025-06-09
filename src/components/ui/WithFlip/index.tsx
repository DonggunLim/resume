import { PropsWithChildren, useEffect, useMemo, useRef, useState } from "react";
import { motion } from "motion/react";
import FrontSide from "./FrontSide";
import BackSide from "./BackSide";
import { cn } from "@/lib/utils";

const INTERVAL_TIME = 5000;
const CLASS_NAME = "w-4 h-4";
const FLIP_DURATION = 1.6;

interface WithFlipProps extends PropsWithChildren {
  className?: string;
  intervalTime?: number;
  duration?: number;
}

const WithFlip = ({
  children,
  className = CLASS_NAME,
  intervalTime = INTERVAL_TIME,
  duration = FLIP_DURATION,
}: WithFlipProps) => {
  const intervalId = useRef<number | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const rotateY = useMemo(() => (isFlipped ? 180 : 0), [isFlipped]);

  useEffect(() => {
    intervalId.current = window.setInterval(() => {
      setIsFlipped((prev) => !prev);
    }, intervalTime);

    return () => {
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
    };
  }, []);

  return (
    <>
      <motion.div className={cn(className)} style={{ perspective: "1000px" }}>
        <motion.div
          animate={{ rotateY }}
          transition={{ duration }}
          style={{
            width: "100%",
            height: "100%",
            transformOrigin: "center",
            transformStyle: "preserve-3d",
            position: "relative",
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    </>
  );
};

WithFlip.Front = FrontSide;
WithFlip.Back = BackSide;

export default WithFlip;
