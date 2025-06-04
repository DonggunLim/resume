import { PropsWithChildren } from "react";

interface BackSideProps extends PropsWithChildren {}

const BackSide = ({ children }: BackSideProps) => {
  return (
    <div className="absolute inset-0 rotate-y-180 backface-hidden">
      {children}
    </div>
  );
};

export default BackSide;
