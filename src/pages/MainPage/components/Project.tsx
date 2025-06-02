import GithubIcon from "../../../assets/icons/GithubIcon";
import LiveIcon from "../../../assets/icons/LiveIcon";
import { teamProjects } from "../../../consts/projects";

const Project = () => {
  return (
    <section
      id="project"
      className="min-h-screen py-16 px-6 flex flex-col items-start justify-start max-w-5xl mx-auto"
    >
      <ul className="space-y-12 w-full">
        <h2 className="text-base font-bold">Projects</h2>
        {teamProjects.map((project) => (
          <li key={project.title}>
            <div className="flex items-center gap-x-2 my-4">
              <img
                src={project.icon}
                decoding="async"
                loading="lazy"
                className="w-8 h-8 rounded-sm"
              />
              <h3 className="text-base font-semibold">{project.title}</h3>
            </div>
            <p className="text-white my-4">{project.description}</p>
            <p className="text-gray-400">{project.techStack}</p>
            <div className="flex flex-wrap gap-4 my-4">
              <a
                href={project.web}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 underline hover:text-primary/80"
                aria-label="Live Website Link"
                title="Live Website"
              >
                <LiveIcon />
              </a>
              <a
                href={project.repoFront}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 underline hover:text-primary/80"
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
