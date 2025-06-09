import AnimatedLayout from "@/components/layout/AnimatedLayout";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Skill from "./components/Skill";

const MainPage = () => {
  return (
    <AnimatedLayout>
      <section>
        <Hero />
        <Skill />
        <Project />
      </section>
    </AnimatedLayout>
  );
};

export default MainPage;
