import { FaGithub, FaNpm } from "react-icons/fa";
const teamProjects = [
  {
    title: "PetPle",
    description:
      "반려 동물이라는 키워드로 모이는 사람들을 위해 다양한 서비스와 커뮤니티 기능을 제공하는 웹 서비스",
    role: "Full-Stack (Frontend 50% / Backend 50%)",
    techStack:
      "TypeScript, React, Express, MongoDB, Docker, Socket.io, Zustand, Tanstack-Query",
    repoFront: "https://github.com/DonggunLim/Petple_front",
    repoBack: "https://github.com/DonggunLim/Petple_back",
    tasks: [
      "Tanstack-Query를 이용한 데이터 캐싱 최적화 및 Optimistic updates 적용",
      "Intersection Observer API와 useInfiniteQuery를 활용한 무한 스크롤 기능 구현",
      "Context API와 Compound Pattern을 적용한 UI 공통 컴포넌트 개발",
      "Presigned URL을 이용한 AWS S3 이미지 업로드 방식 구현",
      "GitLab Runner와 Docker를 이용한 CI/CD 파이프라인 구축",
      "Kakao Map API 및 MongoDB GeoJSON을 활용한 위치 기반 데이터 처리",
      "Socket.io를 이용한 실시간 채팅 기능 개발",
    ],
  },
  {
    title: "BlahBlah",
    description:
      "사용자가 직접 원하는 주제로 게시판을 만들고 커뮤니티를 제공해주는 웹 서비스",
    role: "Full-Stack (Frontend 50% / Backend 50%)",
    techStack: "TypeScript, React, Express, MongoDB, Mongoose",
    repoFront: "https://github.com/DonggunLim/Blahblah_front",
    repoBack: "https://github.com/DonggunLim/Blahblah_back",
    tasks: [
      "Google Oauth를 이용한 사용자 인증 구현",
      "JWT Token 및 쿠키를 활용한 API 인증 및 로그인 구현",
      "Nodemailer를 이용한 이메일 인증 과정 구현",
      "React + Express를 활용한 게시판 CRUD 기능 개발",
      "GCP VM과 Nginx를 이용한 백엔드 및 프론트엔드 배포",
    ],
  },
  {
    title: "WorkPlus",
    description: "업무 지원 플랫폼이라는 주제로 진행한 미니 프로젝트",
    role: "팀장 (Backend 100%, Frontend 50%)",
    techStack: "JavaScript, React, Express, MongoDB, Mongoose, TypeScript",
    repoFront: "https://github.com/DonggunLim/WorkPluse_front",
    repoBack: "https://github.com/DonggunLim/WorkPlus_back",
    tasks: [
      "Express와 MongoDB, Mongoose를 활용한 RESTful API 설계 및 구현",
      "RESTful 원칙을 준수하여 CRUD API 개발 및 JWT 기반 인증 시스템 적용",
      "Mongoose 스키마 설계를 통한 데이터 구조 관리",
      "Postman을 활용한 API 테스트 및 문서화",
    ],
  },
];

const personalProjects = [
  {
    title: "React-UI-Kit",
    description:
      "Headless 스타일 및 Compound Pattern을 활용한 React UI 컴포넌트 라이브러리",
    techStack: "TypeScript, React, Vite",
    repo: "https://github.com/DonggunLim/react-ui-kit",
    npm: "https://www.npmjs.com/package/@imdonggun/react-ui-kit",
    tasks: [
      "재사용 가능한 UI 컴포넌트 (Carousel, Calendar, Modal, Dropdown 등) 설계 및 개발",
      "Headless UI 스타일 적용으로 사용자가 원하는 디자인을 자유롭게 커스터마이징 가능하도록 구현",
      "Context API를 활용하여 Compound Pattern 기반 컴포넌트의 확장성과 유연성 제공",
      "NPM 패키지 배포를 통한 실제 프로젝트 적용 및 유지보수, 고도화 작업",
    ],
  },
  {
    title: "Vite-Plugin-Generate-Todo",
    description:
      "소스 코드 내의 주석을 자동으로 추출하여 TODO.md 파일로 생성하는 Vite 플러그인",
    techStack: "TypeScript, Vite, Vite Plugin API, Node.js",
    repo: "https://github.com/DonggunLim/vite-plugin-generate-todo",
    npm: "https://www.npmjs.com/package/vite-plugin-generate-todo",
    tasks: [
      "Vite 플러그인 API를 활용하여 빌드 과정 중 `[TODO :: ...]` 형식의 주석을 분석 및 추출",
      "Node.js File System API를 사용하여 프로젝트 루트에 TODO.md 파일을 자동 생성 및 업데이트",
      "Vite 플러그인 API의 transform, buildEnd API 활용",
    ],
  },
];
const PortfolioPage = () => {
  return (
    <>
      <h2 className="text-primary-light-text dark:text-primary-dark-text text-lg font-semibold mb-4">
        Team Project
      </h2>
      <ul>
        {teamProjects.map((project) => (
          <li key={project.title} className="mb-6">
            <h3 className="font-bold mb-2">{project.title}</h3>
            <p className="text-sm/6 mb-2">{project.description}</p>
            <p className="text-sm mb-2">역할: {project.role}</p>
            <p className="text-sm mb-2">기술 스택: {project.techStack}</p>
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
            <ul className="list-disc list-inside text-sm space-y-1 mb-4">
              {project.tasks.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <h2 className="text-primary-light-text dark:text-primary-dark-text text-lg font-semibold mb-4">
        Personal Project
      </h2>
      <ul>
        {personalProjects.map((project) => (
          <li key={project.title} className="mb-6">
            <h3 className="font-bold mb-2">{project.title}</h3>
            <p className="text-sm/6 mb-2">{project.description}</p>
            <p className="text-sm mb-2">기술 스택: {project.techStack}</p>
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
            <ul className="list-disc list-inside text-sm space-y-1 mb-4">
              {project.tasks.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PortfolioPage;
