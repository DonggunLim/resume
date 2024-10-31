import BarsIcon from "../../icons/BarsIcon";

export default function AccordionButton({ handleClickButton }) {
  return (
    <button onClick={handleClickButton} className="accordion-button">
      <BarsIcon />
    </button>
  );
}
