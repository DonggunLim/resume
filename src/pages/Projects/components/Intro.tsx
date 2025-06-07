import { Project } from "@/consts/projects";
import {
  Activity,
  Calendar,
  Check,
  Github,
  Link,
  Package,
  Star,
  User,
} from "lucide-react";

interface IntroProps {
  project: Project;
}

const Intro = ({ project }: IntroProps) => {
  return (
    <section className="space-y-6 text-sm text-gray-300">
      {/* 타이틀 */}
      <div className="flex items-center gap-4">
        <img
          src={project.icon}
          alt={project.title + "_icon"}
          decoding="async"
          loading="lazy"
          className="bg-outline/25 h-14 w-14 rounded-md p-1"
        />
        <h1 className="self-end text-4xl font-bold text-white">
          {project.title}
        </h1>
      </div>

      {/* 설명 */}
      <p className="leading-relaxed">{project.description}</p>

      {/* 메타 정보 */}
      <div className="bg-outline/25 my-8 flex flex-wrap items-center justify-evenly gap-6 rounded-md p-4 text-sm text-gray-400">
        {project.period && (
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-white" />
            <span className="font-medium">{project.period}</span>
          </div>
        )}

        {project.status && (
          <div className="flex items-center gap-2">
            <Activity className="h-4 w-4 text-white" />
            <span>
              {project.status === "working" ? "개인적으로 유지보수 중" : "완료"}
            </span>
          </div>
        )}

        {project.role && (
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-white" />
            <span>{project.role}</span>
          </div>
        )}

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-highlight flex items-center gap-1 text-gray-400 transition"
          >
            <Github className="h-4 w-4" />
            <span>Github</span>
          </a>
        )}

        {project.website && (
          <a
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-highlight flex items-center gap-1 text-gray-400 transition"
          >
            <Link className="h-4 w-4" />
            <span>WebSite</span>
          </a>
        )}

        {project.npm && (
          <a
            href={project.npm}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-highlight flex items-center gap-1 text-gray-400 transition"
          >
            <Package className="h-4 w-4" />
            <span>NPM</span>
          </a>
        )}
      </div>

      {/* 기술 스택 */}
      <div className="divide-outline divide-y overflow-hidden rounded-md">
        {project.techStack.isSimple ? (
          <div className="flex items-center gap-2 px-4 py-2">
            <p className="w-24 shrink-0 font-semibold text-white">사용 기술</p>
            <p>{project.techStack.all?.join(", ")}</p>
          </div>
        ) : (
          <>
            {project.techStack.frontend?.length && (
              <div className="flex items-center gap-2 px-4 py-2">
                <p className="w-24 shrink-0 font-semibold text-white">
                  프론트엔드
                </p>
                <p className="text-sm">
                  {project.techStack.frontend.join(", ")}
                </p>
              </div>
            )}
            {project.techStack.backend?.length && (
              <div className="flex items-center gap-2 px-4 py-2">
                <p className="w-24 shrink-0 font-semibold text-white">백엔드</p>
                <p>{project.techStack.backend.join(", ")}</p>
              </div>
            )}
            {project.techStack.devops?.length && (
              <div className="flex items-center gap-2 px-4 py-2">
                <p className="w-24 shrink-0 font-semibold text-white">
                  데브옵스
                </p>
                <p>{project.techStack.devops.join(", ")}</p>
              </div>
            )}
          </>
        )}
      </div>

      {/* 주요 기능 */}
      {project.features?.length && (
        <div>
          <div className="mb-2 flex items-center gap-x-2 font-semibold text-white">
            <Star className="fill-highlight text-highlight" />
            <span className="flex items-center text-xl">
              주요 기능
              <span className="ml-2 flex self-end text-xs">
                <span className="mr-1 text-gray-300">*</span>담당 기능
                <Check className="text-highlight ml-1 h-4 w-4" />
              </span>
            </span>
          </div>
          <ul className="flex flex-col gap-y-1">
            {project.features.map((f, index) => (
              <li key={index} className="flex items-start gap-2">
                <Check
                  className={`h-4 w-4 ${f.owned ? "text-highlight" : ""}`}
                />
                <span>{f.label}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default Intro;
