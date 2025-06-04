import { PropsWithChildren } from "react";

interface FrontSideProps extends PropsWithChildren {}

const FrontSide = ({ children }: FrontSideProps) => {
  return <div className="absolute inset-0 backface-hidden">{children}</div>;
};

export default FrontSide;
