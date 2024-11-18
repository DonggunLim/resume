import { useLocation, useNavigate } from "react-router-dom";
import Avatar from "./Avatar";
import ThemeModeButton from "./ThemeModeButton.tsx";
import GithubIcon from "../icons/GithubIcon.tsx";

const NAVIGATION_ITEMS = [
  {
    title: "ABOUT",
    pathname: "/",
  },
  {
    title: "PORTFOLIO",
    pathname: "/portfolio",
  },
  {
    title: "CONTACT",
    pathname: "/contact",
  },
];

export default function Header() {
  const navigate = useNavigate();
  const { pathname: currentPath } = useLocation();
  console.log(currentPath);
  return (
    <header className="h-screen flex-1 py-24 sticky top-0">
      <main className="flex flex-col h-full gap-2">
        <Avatar />
        <div>
          <h1 className="text-5xl font-bold">Donggun Im </h1>
          <h2 className="text-2xl font-semibold mt-3">Web Developer</h2>
        </div>

        <nav className="flex flex-col gap-y-4 pt-10 w-fit">
          {NAVIGATION_ITEMS.map(({ title, pathname }, index) => (
            <button
              onClick={() => navigate(pathname)}
              key={`navigation-items-${index}`}
              className={`font-semibold text-right ${
                pathname === currentPath &&
                "text-primary-light-text dark:text-primary-dark-text"
              } hover:text-primary-light-text hover:dark:text-primary-dark-text`}
            >
              {title}
            </button>
          ))}
        </nav>
        <ul className="flex items-center gap-2 mt-auto">
          <li className="cursor-pointer hover:scale-105 duration-200">
            <GithubIcon />
          </li>
          <li className="">
            <ThemeModeButton />
          </li>
        </ul>
      </main>
    </header>
  );
}
