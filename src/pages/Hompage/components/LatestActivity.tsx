import { Accordion } from "@imdonggun/react-ui-kit";
import eliceBrandLogo from "../../../assets/elice-track-logo.svg";
import { FaLink } from "react-icons/fa6";

export default function LatestActivity() {
  return (
    <section>
      <h1 className="text-xl font-bold text-primary-light-text dark:text-primary-dark-text pb-3">
        최근 활동
      </h1>
      <ul>
        <li
          className="group/item rounded-md p-4 
            hover:bg-slate-400/10
           dark:hover:bg-slate-700/20
           relative
           "
        >
          <div className="flex gap-x-2">
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
          <Accordion>
            <ul className="py-8 space-y-2">
              <li className="flex items-start gap-2 text-sm font-medium">
                <p>
                  7주차 : <span className="text-blue-300">React </span>
                  상태관리 Context API · Redux-toolkit · Recoil · Zustand
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
                  @imdonggun/react-ui-kit npm package 배포
                </p>
              </li>
              <li className="flex items-start gap-2 text-sm font-medium">
                <p>
                  6주차 : <span className="text-blue-300">React </span>
                  스타일링 · SPA · react-router-dom
                </p>
              </li>
              <li className="flex items-start gap-2 text-sm font-medium">
                <p>
                  5주차 : <span className="text-blue-300">React · </span>
                  <span className="text-blue-500">TypeScript</span> · React
                  Hooks 기초 · React Hooks 심화
                </p>
              </li>
              <li className="flex items-start gap-2 text-sm font-medium">
                <p>
                  4주차 : <span className="text-blue-300">React </span>개요 JSX
                  Props State 이벤트 처리 ·
                  <span className="text-blue-500"> TypeScript</span> 기초 심화
                </p>
              </li>
              <li className="flex items-start gap-2 text-sm font-medium">
                <p>
                  3주차 : <span className="text-yellow-400">JavaScript </span>
                  이벤트 루프 Promise · async/await 예외 처리 · Ajax, RestAPI
                </p>
              </li>
              <li className="flex items-start gap-2 text-sm font-medium">
                <p>
                  2주차 : <span className="text-yellow-400">JavaScript</span>{" "}
                  문법 · DOM 이벤트 · ES6 배열 메서드 · 실행 컨텍스트 this
                </p>
              </li>
              <li className="flex items-start gap-2 text-sm font-medium">
                <p>
                  1주차 : <span className="text-red-400">HTML</span> ·
                  <span className="text-yellow-400">CSS</span> · Layout · 반응형
                  웹사이트 · Git 기초
                </p>
              </li>
            </ul>
          </Accordion>
        </li>
      </ul>
    </section>
  );
}
