import { useState } from "react";
import useThemeMode, { ThemeModeType } from "../hooks/useThemeMode";
import DarkIcon from "../icons/DarkIcon";
import LightIcon from "../icons/LightIcon";
import SystemIcon from "../icons/SystemIcon";

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
    <div className="absolute top-3 right-3">
      <button onClick={() => setIsOpen(!isOpen)} className="w-fit">
        {isDarkMode ? <DarkIcon /> : <LightIcon />}
      </button>
      {isOpen && (
        <ul
          className="absolute z-50 top-full right-0 bg-white 
          rounded-lg ring-1 ring-slate-900/10 shadow-lg 
        overflow-hidden w-36 py-1 text-sm text-slate-700 font-semibold
         dark:bg-slate-800 dark:ring-0 dark:highlight-white/5 dark:text-slate-300 mt-4"
        >
          {MODE_ITEM_LIST.map(({ icon, title }, index) => (
            <li
              key={`mode-item-${index}`}
              className={`flex items-center gap-2 py-1 px-2 font-semibold 
              hover:bg-gray-200 dark:hover:bg-slate-700 cursor-pointer capitalize shadow-lg ${
                title === selectedMode && "bg-gray-200 dark:bg-slate-700 "
              }`}
              onClick={() => handleClickMode(title)}
            >
              {icon}
              <span>{title}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ThemeModeButton;
