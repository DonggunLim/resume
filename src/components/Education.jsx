import BoxConatiner from "./BoxConatiner";
import universityLogo from "../assets/university-logo.gif";

export default function Education() {
  return (
    <BoxConatiner>
      <div className="education-wrapper">
        <h1 className="title">학력</h1>
        <div className="education">
          <div className="img-container">
            <img src={universityLogo} alt="university-logo" />
          </div>
          <div className="education-description">
            <p>
              <a href="https://www.hannam.ac.kr/kor/main/" target="_blank">
                한남대학교 (Hannam University)
              </a>
            </p>
            <p>Public Administration 중퇴</p>
            <p>2015년 - 2018년</p>
          </div>
        </div>
      </div>
    </BoxConatiner>
  );
}
