import { useState } from "react";
import AccordionButton from "./AccordionButton";
import AccordionContent from "./AccordionContent";

interface AccordionProps {
  children: React.ReactElement;
}

export default function Accordion({ children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClickButton = () => setIsOpen(!isOpen);
  return (
    <>
      {isOpen && <AccordionContent>{children}</AccordionContent>}
      <AccordionButton handleClickButton={handleClickButton} isOpen={isOpen} />
    </>
  );
}
