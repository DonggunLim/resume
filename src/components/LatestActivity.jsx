import Accordion from "./Accordion/Accordion";
import BoxConatiner from "./BoxConatiner";
import eliceBrandLogo from "../assets/elice-track-logo.svg";

export default function LatestActivity() {
  return (
    <BoxConatiner>
      <div className="latest-activity-container">
        <h1 className="title">최근 활동</h1>
        <div className="latest-activity">
          <div className="img-container">
            <img src={eliceBrandLogo} alt="elice-track-logo" />
          </div>
          <div className="latest-activity-description-container">
            <p className="latest-activity-title">엘리스 트랙</p>
            <div className="latest-activity-subtitle">
              <p>수강중</p>
              <p> 2024년 10월 - 현재</p>
            </div>
            <Accordion>
              <div className="latest-activity-list-container">
                <ul className="latest-activity-list">
                  <li>
                    <p>
                      5주차 : React와 TypeScript · React Hooks 기초 · React
                      Hooks 심화
                    </p>
                  </li>
                  <li>
                    <p>
                      4주차 : React 개요 JSX Props State 이벤트 처리 ·
                      TypeScript 기초 심화
                    </p>
                  </li>
                  <li>
                    <p>
                      3주차 : JavaScript 이벤트 루프와 Promise · async/await와
                      예외 처리 · Ajax와 RestAPI사용
                    </p>
                  </li>
                  <li>
                    <p>
                      2주차 : Javascript 문번 · DOM과 이벤트 · ES6와 배열 메서드
                      · 실행 컨텍스트와 this
                    </p>
                  </li>
                  <li>
                    <p>
                      1주차 : HTML · CSS · Layout · 반응형 웹사이트 · Git 기초
                    </p>
                  </li>
                </ul>
              </div>
            </Accordion>
          </div>
        </div>
      </div>
    </BoxConatiner>
  );
}
