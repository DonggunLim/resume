import { ChevronLeft, Users } from "lucide-react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { PROJECTS } from "@/consts/projects";

const ProjectLayout = () => {
  const navigate = useNavigate();
  const { title: currentProjectTitle } = useParams();

  return (
    <main className="mx-auto max-w-3xl">
      {/* 돌아가기 */}
      <div className="my-4 cursor-pointer">
        <button
          onClick={() => navigate("/#project")}
          className="hover:text-highlight flex cursor-pointer items-center gap-2 text-sm text-gray-500"
        >
          <ChevronLeft className="h-8 w-8" />
          Projects로 돌아가기
        </button>
      </div>
      {/* mdx 부분 */}
      <article className="prose prose-xl prose-invert max-w-none">
        <Outlet />
      </article>
      {/* 프로젝트 캐로셀 */}
      <section className="flex justify-center">
        <Carousel
          className="max-w-md"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {PROJECTS.filter(({ title }) => title !== currentProjectTitle) //
              .map(({ icon, title, type }) => (
                <CarouselItem
                  className="group my-4 inline-flex cursor-pointer items-center justify-center gap-x-2"
                  onClick={() => navigate(`/projects/${title}`)}
                >
                  <img
                    src={icon}
                    alt="project_icon"
                    decoding="async"
                    loading="lazy"
                    className="h-8 w-8"
                  />
                  <p>{title}</p>
                  <div className="group-hover:text-highlight ml-2 inline-flex items-center gap-1 text-sm text-gray-400">
                    <Users className="h-4 w-4" />
                    <span>{type}</span>
                  </div>
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </main>
  );
};

export default ProjectLayout;
