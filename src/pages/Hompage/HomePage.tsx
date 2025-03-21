import Aboutme from "./components/AboutMe";
import LatestActivity from "./components/LatestActivity";
import Skills from "./components/Skills";

const HomePage = () => {
  return (
    <main className="space-y-10">
      <Aboutme />
      <Skills />
      <LatestActivity />
    </main>
  );
};

export default HomePage;
