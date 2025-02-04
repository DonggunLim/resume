import { Accordion } from "@imdonggun/react-ui-kit";
import eliceBrandLogo from "../../../assets/elice-track-logo.svg";
import { FaLink } from "react-icons/fa6";
import { RiArrowDownWideFill } from "react-icons/ri";
export default function LatestActivity() {
  return (
    <section>
      <h1 className="text-xl font-bold text-primary-light-text dark:text-primary-dark-text pb-3">
        Activity
      </h1>
      <Accordion>
        <div
          className="group/item rounded-md p-4 
            hover:bg-slate-400/10
           dark:hover:bg-slate-700/20
           relative
           "
        >
          <Accordion.Button className="w-full">
            <Accordion.Title>
              <div className="flex gap-x-2 w-full">
                <div className="flex justify-center dark:bg-gray-200/90 p-3 rounded-md shadow-md">
                  <img
                    src={eliceBrandLogo}
                    alt="elice-track-logo"
                    className="object-contain w-16 h-16"
                  />
                </div>
                <div className="">
                  <p
                    className="text-lg font-semibold pb-2 
                group-hover/item:text-primary-light-text
                dark:group-hover/item:text-primary-dark-text"
                  >
                    엘리스 트랙
                  </p>
                  <div className="text-sm font-medium">
                    <p>수강중</p>
                    <p> 2024년 10월 - 현재</p>
                  </div>
                </div>
              </div>
            </Accordion.Title>
            <RiArrowDownWideFill className="w-8 h-8 absolute top-10 right-5 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200" />
          </Accordion.Button>
          <Accordion.Content>
            <ul className="py-8 space-y-2">
              <li
                className="flex items-center gap-2 text-sm font-semibold
               group-hover/item:text-primary-light-text
                dark:group-hover/item:text-primary-dark-text
                cursor-pointer
                "
              >
                <span>
                  <FaLink />
                </span>
                <p className="flex items-center">
                  3차 프로젝트 (Full-stack react + express)
                </p>
              </li>
              <li
                className="flex items-center gap-2 text-sm font-semibold
               group-hover/item:text-primary-light-text
                dark:group-hover/item:text-primary-dark-text
                cursor-pointer
                "
              >
                <span>
                  <FaLink />
                </span>
                <p className="flex items-center">
                  vite-plugin-generate-todo (vite plugin project)
                </p>
              </li>
              <li
                className="flex items-center gap-2 text-sm font-semibold
               group-hover/item:text-primary-light-text
                dark:group-hover/item:text-primary-dark-text
                cursor-pointer
                "
              >
                <span>
                  <FaLink />
                </span>
                <p className="flex items-center">
                  Vite + SEO + SSR + FileBase Route (vite boiler project)
                </p>
              </li>
              <li className="flex items-start gap-2 text-sm font-medium">
                <p>
                  16~18주차 : react 실전 라이브러리 · Tanstack-query · Docker ·
                  ci/cd · gitLab
                </p>
              </li>
              <li
                className="flex items-center gap-2 text-sm font-semibold
               group-hover/item:text-primary-light-text
                dark:group-hover/item:text-primary-dark-text
                cursor-pointer
                "
              >
                <span>
                  <FaLink />
                </span>
                <p className="flex items-center">
                  2차 프로젝트 (Full-stack react + express)
                </p>
              </li>
              <li
                className="flex items-center gap-2 text-sm font-semibold
               group-hover/item:text-primary-light-text
                dark:group-hover/item:text-primary-dark-text
                cursor-pointer
                "
              >
                <span>
                  <FaLink />
                </span>
                <p className="flex items-center">
                  숙박앱 미니 프로젝트 (Full-stack react + express)
                </p>
              </li>
              <li className="flex items-start gap-2 text-sm font-medium">
                <p>
                  11~13주차 : DataBase 기초 (mongoDB · mongoose) Node.js ·
                  Express
                </p>
              </li>
              <li
                className="flex items-center gap-2 text-sm font-semibold
               group-hover/item:text-primary-light-text
                dark:group-hover/item:text-primary-dark-text
                cursor-pointer
                "
              >
                <span>
                  <FaLink />
                </span>
                <p className="flex items-center">
                  1차 프로젝트 (Backend express + mongoDB)
                </p>
              </li>
              <li className="flex items-start gap-2 text-sm font-medium">
                <p>
                  7~8주차 : React 상태관리 Context API · Redux-toolkit · Recoil
                  · Zustand · FireBase
                </p>
              </li>
              <li
                className="flex items-center gap-2 text-sm font-semibold
               group-hover/item:text-primary-light-text
                dark:group-hover/item:text-primary-dark-text
                cursor-pointer
                "
              >
                <span>
                  <FaLink />
                </span>
                <p className="flex items-center">
                  @imdonggun/react-ui-kit lib 배포
                </p>
              </li>
              <li className="flex items-start gap-2 text-sm font-medium">
                <p>
                  1~6주차 : React, TypeScript 기본 학습 (컴포넌트, 상태관리,
                  스타일링, React Router)
                </p>
              </li>
            </ul>
          </Accordion.Content>
        </div>
      </Accordion>
    </section>
  );
}
