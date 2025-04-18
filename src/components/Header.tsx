import { useLocation, useNavigate } from "react-router-dom";
import Avatar from "./Avatar";
import ThemeModeButton from "./ThemeModeButton.tsx";
import GithubIcon from "../icons/GithubIcon.tsx";
import { MdOutlineEmail } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { FaFilePdf } from "react-icons/fa";

const NAVIGATION_ITEMS = [
  {
    title: "ABOUT",
    pathname: "/",
  },
  {
    title: "PORTFOLIO",
    pathname: "/portfolio",
  },
];

export default function Header() {
  const navigate = useNavigate();
  const { pathname: currentPath } = useLocation();
  return (
    <header className="h-screen flex-1 py-4 flex justify-center lg:py-24 sticky top-0">
      <main className="flex flex-col h-full gap-2">
        <Avatar />
        <div className="space-y-2 font-semibold">
          <h1 className="text-4xl font-bold">Donggun Im</h1>
          <h2 className="text-xl text-gray-600 dark:text-gray-300 font-semibold">
            Web Developer
          </h2>
          <a
            href="mailto:ehdrjs130@gmail.com"
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition"
          >
            <MdOutlineEmail className="text-lg" />
            <span>Ldonggun6766@gmail.com</span>
          </a>
          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <IoMdPhonePortrait className="text-lg" />
            <span>010-8650-6766</span>
          </div>
        </div>
        <ul className="flex items-center gap-2 my-4">
          <li className="cursor-pointer hover:scale-105 duration-200">
            <GithubIcon />
          </li>
          <li className="cursor-pointer hover:scale-105 duration-200">
            <a href="/imdonggun_resume.pdf" download="imdonggun_resume.pdf">
              <FaFilePdf className="w-6 h-6 dark:text-white" />
            </a>
          </li>
          <li className="cursor-pointer hover:scale-105 duration-200">
            <ThemeModeButton />
          </li>
        </ul>
        <nav className="flex flex-col gap-y-4 w-fit">
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
      </main>
    </header>
  );
}
