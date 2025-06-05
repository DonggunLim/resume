import { PROJECTS } from "../../../consts/projects";
import { SquareArrowOutUpRight } from "lucide-react";
import { Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Project = () => {
  const navigate = useNavigate();
  return (
    <section
      id="project"
      className="mx-auto flex min-h-screen w-fit max-w-5xl flex-col items-center justify-center"
    >
      <ul className="w-full space-y-8">
        {PROJECTS.map((project) => (
          <li
            key={project.title}
            className="group relative cursor-pointer"
            onClick={() => navigate(`/projects/${project.title}`)}
          >
            <div className="my-4 flex items-center gap-x-2">
              <img
                src={project.icon}
                decoding="async"
                loading="lazy"
                className="h-8 w-8 rounded-sm object-contain"
              />
              <h3 className="text-base font-semibold">{project.title} </h3>
              <div className="group-hover:text-highlight ml-2 flex items-center gap-1 text-sm text-gray-400">
                <Users className="h-4 w-4" />
                <span>{project.type}</span>
              </div>
            </div>
            <p className="my-4 text-white">{project.description}</p>
            {project.techStack && (
              <ul className="mb-4 flex flex-wrap gap-2 text-sm text-gray-300">
                {project.techStack.map((tech) => (
                  <li
                    key={tech}
                    className="group-hover:text-highlight rounded bg-gray-800 px-2 py-1 text-xs text-white"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            )}
            <SquareArrowOutUpRight className="group-hover:text-highlight absolute top-0 right-0" />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Project;
