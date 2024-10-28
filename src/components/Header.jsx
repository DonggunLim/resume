import { useNavigate } from "react-router-dom";
export default function Header() {
  const navigate = useNavigate();
  const handleClickMenu = (path) => navigate(path);

  return (
    <header className="app-header">
      <button onClick={() => handleClickMenu("/")}>home</button>
      <button onClick={() => handleClickMenu("/portfolio")}>portfolio</button>
      <button onClick={() => handleClickMenu("/contact")}>contact</button>
    </header>
  );
}
