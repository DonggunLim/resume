import BarsIcon from "../../icons/BarsIcon";
interface AccordionButtonProps {
  handleClickButton: () => void;
}

export default function AccordionButton({
  handleClickButton,
}: AccordionButtonProps) {
  return (
    <button onClick={handleClickButton} className="accordion-button">
      <BarsIcon />
    </button>
  );
}
