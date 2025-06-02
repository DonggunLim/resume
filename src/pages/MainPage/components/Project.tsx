import GithubIcon from "../../../assets/icons/GithubIcon";
import LiveIcon from "../../../assets/icons/LiveIcon";
import { teamProjects } from "../../../consts/projects";

const Project = () => {
  return (
    <section
      id="project"
      className="mx-auto flex min-h-screen max-w-5xl flex-col items-start justify-start px-6 py-16"
    >
      <ul className="w-full space-y-12">
        <h2 className="text-base font-bold">Projects</h2>
        {teamProjects.map((project) => (
          <li key={project.title}>
            <div className="my-4 flex items-center gap-x-2">
              <img
                src={project.icon}
                decoding="async"
                loading="lazy"
                className="h-8 w-8 rounded-sm"
              />
              <h3 className="text-base font-semibold">{project.title}</h3>
            </div>
            <p className="my-4 text-white">{project.description}</p>
            <p className="text-gray-400">{project.techStack}</p>
            <div className="my-4 flex flex-wrap gap-4">
              <a
                href={project.web}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary/80 text-gray-300 underline"
                aria-label="Live Website Link"
                title="Live Website"
              >
                <LiveIcon />
              </a>
              <a
                href={project.repoFront}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary/80 text-gray-300 underline"
                aria-label="Github Link"
                title="Github"
              >
                <GithubIcon />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Project;
