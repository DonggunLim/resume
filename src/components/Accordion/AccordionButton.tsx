import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";

interface AccordionButtonProps {
  isOpen: boolean;
  handleClickButton: () => void;
}

export default function AccordionButton({
  handleClickButton,
  isOpen,
}: AccordionButtonProps) {
  return (
    <button
      onClick={handleClickButton}
      className="group/edit invisible group-hover/item:visible 
      absolute bottom-0 left-1/2 -translate-x-1/2
      group-hover/item:text-primary-light-text
      dark:group-hover/item:text-primary-dark-text
      "
    >
      {isOpen ? (
        <RiArrowUpSFill className="w-8 h-8" />
      ) : (
        <RiArrowDownSFill className="w-8 h-8" />
      )}
    </button>
  );
}
