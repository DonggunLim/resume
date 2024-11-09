import { useState } from "react";
import AccordionButton from "./AccordionButton";
import AccordionContent from "./AccordionContent";

interface AccordionProps {
  children: React.ReactElement;
}

export default function Accordion({ children }: AccordionProps) {
  const [isActive, setIsActive] = useState(false);
  const handleClickButton = () => setIsActive(!isActive);
  return (
    <>
      {isActive && <AccordionContent>{children}</AccordionContent>}
      <AccordionButton handleClickButton={handleClickButton} />
    </>
  );
}
