import { useEffect, useState } from "react";

export type ThemeModeType = "light" | "dark" | "system";

const useThemeMode = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const localStorageTheme = localStorage.theme || false;
    if (localStorageTheme) {
      return localStorageTheme === "dark" ? true : false;
    }
    return window.matchMedia("(prefers-color-scheme:dark)").matches;
  });
  const [selectedMode, setSelectedMode] = useState(
    () => localStorage.theme || "system"
  );

  const handleChangeThemeMode = (theme: ThemeModeType) => {
    if (theme === "system") {
      setIsDarkMode(window.matchMedia("(prefers-color-scheme:dark)").matches);
      setSelectedMode("system");
      localStorage.removeItem("theme");
    } else {
      setIsDarkMode(theme === "dark" ? true : false);
      setSelectedMode(theme);
      localStorage.theme = theme;
    }
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return { isDarkMode, selectedMode, handleChangeThemeMode };
};

export default useThemeMode;
