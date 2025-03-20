import { FaGithub, FaNpm } from "react-icons/fa";
import Button from "../../components/commonui/Button";
import { personalProjects, teamProjects } from "../../consts/projects";

const PortfolioPage = () => {
  return (
    <>
      <h2 className="text-primary-light-text dark:text-primary-dark-text text-lg font-semibold mb-4">
        Team Project
      </h2>
      <ul className="space-y-4">
        {teamProjects.map((project) => (
          <li key={project.title} className="mb-6">
            <h3 className="font-bold mb-2">{project.title}</h3>
            <p className="text-sm/6 mb-2">{project.description}</p>
            <p className="text-sm mb-2">역할: {project.role}</p>
            <p className="text-sm mb-2 flex flex-wrap gap-2 items-center">
              기술 스택:{" "}
              {project.techStack.split(",").map((tech, index) => (
                <Button key={`tech-${index}`}>{tech}</Button>
              ))}
            </p>
            <p className="text-sm flex items-center gap-4 pb-2">
              <a
                href={project.repoFront}
                className="text-blue-500 hover:underline flex items-center gap-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-xl" />
                Frontend Repository
              </a>
              |
              <a
                href={project.repoBack}
                className="text-blue-500 hover:underline flex items-center gap-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-xl" />
                Backend Repository
              </a>
            </p>

            <ul className="list-none space-y-2 text-sm leading-relaxed">
              {project.tasks.map((task, index) => (
                <li key={index} className="flex items-start gap-2">
                  {task.link ? (
                    <a
                      href={task.link}
                      className="text-blue-600 font-semibold inline-flex items-center gap-2 hover:text-blue-800 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="text-gray-500">•</span> {task.title}
                    </a>
                  ) : (
                    <span className="flex items-center gap-2">
                      <span className="text-gray-500">•</span> {task.title}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <h2 className="text-primary-light-text dark:text-primary-dark-text text-lg font-semibold mb-4">
        Personal Project
      </h2>
      <ul className="space-y-4">
        {personalProjects.map((project) => (
          <li key={project.title} className="mb-6">
            <h3 className="font-bold mb-2">{project.title}</h3>
            <p className="text-sm/6 mb-2">{project.description}</p>
            <p className="text-sm mb-2 flex flex-wrap gap-2 items-center">
              기술 스택:{" "}
              {project.techStack.split(",").map((tech, index) => (
                <Button key={`tech-${index}`}>{tech}</Button>
              ))}
            </p>
            <p className="text-sm flex items-center gap-4 pb-2">
              <a
                href={project.repo}
                className="text-blue-500 hover:underline flex items-center gap-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-xl" />
                Repository
              </a>
              |
              <a
                href={project.npm}
                className="text-red-500 hover:underline flex items-center gap-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaNpm className="text-xl" />
                NPM Package
              </a>
            </p>

            <ul className="list-none space-y-2 text-sm leading-relaxed">
              {project.tasks.map((task, index) => (
                <li key={index} className="flex items-start gap-2">
                  {task.link ? (
                    <a
                      href={task.link}
                      className="text-blue-600 font-semibold inline-flex items-center gap-2 hover:text-blue-800 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="text-gray-500">•</span> {task.title}
                    </a>
                  ) : (
                    <span className="flex items-center gap-2">
                      <span className="text-gray-500">•</span> {task.title}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PortfolioPage;
