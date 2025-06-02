import { useState } from "react";
import useThemeMode, { ThemeModeType } from "../hooks/useThemeMode";
import DarkIcon from "../assets/icons/DarkIcon";
import LightIcon from "../assets/icons/LightIcon";
import SystemIcon from "../assets/icons/SystemIcon";

type ModeItemType = { icon: React.ReactNode; title: ThemeModeType };
const MODE_ITEM_LIST: ModeItemType[] = [
  { icon: <DarkIcon />, title: "dark" },
  { icon: <LightIcon />, title: "light" },
  { icon: <SystemIcon />, title: "system" },
];

const ThemeModeButton = () => {
  const { isDarkMode, selectedMode, handleChangeThemeMode } = useThemeMode();
  const [isOpen, setIsOpen] = useState(false);
  const handleClickMode = (type: ThemeModeType) => {
    handleChangeThemeMode(type);
    setIsOpen(false);
  };

  return (
    <div className="relative flex w-fit items-center justify-center">
      {isOpen && (
        <ul className="dark:highlight-white/5 absolute bottom-full -left-5 z-50 my-4 w-36 overflow-hidden rounded-lg bg-white text-sm font-semibold text-slate-700 shadow-2xl ring-1 ring-slate-900/10 dark:bg-slate-900/40 dark:text-slate-300">
          {MODE_ITEM_LIST.map(({ icon, title }, index) => (
            <li
              key={`mode-item-${index}`}
              className={`flex cursor-pointer items-center gap-2 px-2 py-1 font-semibold capitalize shadow-lg hover:bg-gray-200 dark:hover:bg-slate-700 ${
                title === selectedMode && "bg-gray-200 dark:bg-slate-700"
              }`}
              onClick={() => handleClickMode(title)}
            >
              {icon}
              <span>{title}</span>
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => setIsOpen(!isOpen)} className="w-fit">
        {isDarkMode ? <DarkIcon /> : <LightIcon />}
      </button>
    </div>
  );
};

export default ThemeModeButton;
