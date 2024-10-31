import { useState } from "react";
import AccordionButton from "./AccordionButton";
import AccordionContent from "./AccordionContent";

export default function Accordion({ children }) {
  const [isActive, setIsActive] = useState(false);
  const handleClickButton = () => setIsActive(!isActive);
  return (
    <>
      {isActive && <AccordionContent>{children}</AccordionContent>}
      <AccordionButton handleClickButton={handleClickButton} />
    </>
  );
}
