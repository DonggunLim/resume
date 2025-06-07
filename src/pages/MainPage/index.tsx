import Hero from "./components/Hero";
import Project from "./components/Project";
import Skill from "./components/Skill";

const MainPage = () => {
  return (
    <section className="mx-auto max-w-3xl">
      <Hero />
      <Skill />
      <Project />
    </section>
  );
};

export default MainPage;
