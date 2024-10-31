import { useNavigate } from "react-router-dom";
import Avatar from "./Avatar";
import EmailIcon from "../icons/EmailIcon";
import LinkIcon from "../icons/LinkIcon";
import BoxConatiner from "./BoxConatiner";
export default function Header() {
  const navigate = useNavigate();
  const handleClickMenu = (path) => navigate(path);

  return (
    <BoxConatiner>
      <header className="header">
        <div className="background">
          <Avatar />
        </div>
        <main className="header-main">
          <div className="header-main-info">
            <div className="title">
              <h1>Donggun Im</h1>
              <p>Web Developer</p>
            </div>
            <div className="links">
              <ul>
                <li>
                  <EmailIcon />
                  Ldonggun6766@gmail.com
                </li>
                <li>
                  <LinkIcon />
                  <a target="_blank" href="https://github.com/DonggunLim">
                    https://github.com/DonggunLim
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <nav className="page-navigation">
            <button onClick={() => handleClickMenu("/")}>홈으로</button>
            <button onClick={() => handleClickMenu("/portfolio")}>
              자기소개
            </button>
            <button onClick={() => handleClickMenu("/contact")}>연락처</button>
          </nav>
        </main>
      </header>
    </BoxConatiner>
  );
}
