export type Project = {
  type: "team" | "personal";
  title: string;
  icon: string;
  description: string;
  status?: "working" | "done";
  period?: string;
  role?: string;
  features?: {
    label: string;
    owned: boolean;
  }[];
  techStack: {
    all?: string[];
    frontend?: string[];
    backend?: string[];
    devops?: string[];
    isSimple?: boolean;
  };
  github?: string;
  repo?: string;
  website?: string;
  npm?: string;
};

export const PROJECTS: Project[] = [
  {
    type: "team",
    title: "Petple",
    icon: "/images/petple_icon.png",
    period: "2025.02 ~ 2025.03",
    status: "working",
    description:
      "반려동물이라는 공통 관심사를 가진 사용자들을 위한 커뮤니티 및 다양한 서비스를 제공하는 웹 애플리케이션으로, 프론트엔드와 백엔드를 직접 설계하고 구현한 풀스택 프로젝트입니다.",
    features: [
      { label: "게시판 기능 CRUD", owned: true },
      { label: "위치 기반 실시간 채팅 기능", owned: true },
      { label: "공공API 활용 데이터 제공", owned: false },
      { label: "펫 산책 기록 기능", owned: false },
      { label: "유저 로그인/회원가입", owned: false },
    ],
    role: "3명, Full-Stack",
    techStack: {
      all: [
        "TypeScript",
        "React",
        "Express",
        "MongoDB",
        "Docker",
        "Socket.io",
        "Zustand",
        "Tanstack-Query",
      ],
      frontend: [
        "React",
        "TypeScript",
        "Zustand",
        "TanStack Query",
        "React-Hook-Form",
        "Zod",
        "Axios",
      ],
      backend: ["Node.js", "Express", "MongoDB", "Mysql", "Socket.io"],
      devops: ["AWS", "Docker", "Nginx", "GitLab Runner"],
    },
    github: "https://github.com/DonggunLim/Petple_front",
    website: "https://petple-front.vercel.app",
  },
  {
    type: "team",
    title: "BlahBlah",
    icon: "/images/blahblah_icon.svg",
    period: "2025.02 ~ 2025.03",
    status: "done",
    description:
      "사용자가 직접 원하는 주제로 게시판을 만들어 커뮤니티 형성을 제공해주는 웹 서비스 입니다.",
    role: "3명, 팀장, Full-Stack",
    techStack: {
      all: ["TypeScript", "React", "Express", "MongoDB", "Mongoose", "Axios"],
      frontend: ["React", "TypeScript", "Axios"],
      backend: ["Node.js", "Express", "MongoDB", "Mongoose"],
      devops: ["AWS"],
    },
    github: "https://github.com/DonggunLim/Blahblah_front",
    website: "https://blahblah-front.vercel.app",
    features: [
      { label: "유저 로그인/회원가입, 프로필", owned: true },
      { label: "사용자 게시판 대시보드 기능", owned: true },
      { label: "관리자 대시보드 기능", owned: true },
      { label: "커뮤니티 게시글 CRUD", owned: false },
      { label: "커뮤니티 생성 관리 기능", owned: false },
    ],
  },
  {
    type: "team",
    title: "WorkPlus",
    icon: "/images/workplus_icon.png",
    status: "done",
    period: "2025.02 ~ 2025.03",
    description:
      "업무 지원 플랫폼을 주제로 한 웹 프로젝트로, 사용자들의 근태 관리, 휴가 신청, 회의실 예약 기능을 제공합니다.",
    role: "4명, 팀장, (Backend 100%, Frontend 50%)",
    techStack: {
      all: [
        "JavaScript",
        "TypeScript",
        "React",
        "Express",
        "MongoDB",
        "Mongoose",
      ],
      frontend: ["React", "TypeScript", "Axios"],
      backend: ["Node.js", "Express", "MongoDB", "Mongoose"],
      devops: ["AWS"],
    },
    github: "https://github.com/DonggunLim/WorkPluse_front",
    website: "https://work-plus-front.vercel.app",
    features: [
      { label: "유저 로그인/회원가입, 프로필 백엔드 API 담당", owned: true },
      { label: "사용자 프로필 페이지 API 담당", owned: true },
      { label: "근태관리 API 담당", owned: true },
      { label: "회의 및 휴가 신청 API 담당", owned: true },
      { label: "Postman을 활용한 API 테스트 및 문서화 담당", owned: true },
    ],
  },
  {
    type: "personal",
    title: "React-UI-Kit",
    period: "2024.11 ~ 현재",
    status: "working",
    role: "개인 프로젝트",
    icon: "/images/react.png",
    description:
      "Headless 스타일 및 Compound Pattern을 활용한 React UI 컴포넌트 라이브러리 입니다.",
    techStack: {
      all: ["TypeScript", "React", "Vite"],
      frontend: ["React", "TypeScript", "Vite"],
      backend: [],
      devops: [],
      isSimple: true,
    },
    github: "https://github.com/DonggunLim/react-ui-kit",
    npm: "https://www.npmjs.com/package/@imdonggun/react-ui-kit",
    features: [
      {
        label:
          "재사용 가능한 UI컴포넌트 (Carousel, Calendar, Modal, Dropdown 등)",
        owned: true,
      },
      {
        label:
          "Headless UI 스타일 적용으로 사용자가 원하는 디자인을 자유롭게 커스터 마이징",
        owned: true,
      },
      {
        label:
          "ContextAPI를 활용하여 Compound Pattern 기반 컴포넌트의 확장성과 유연성 제공",
        owned: true,
      },
      {
        label:
          "NPM 패키지 배포를 통한 실제 프로젝트 적용 및 유지보수, 고도화 작업",
        owned: true,
      },
    ],
  },
  {
    type: "personal",
    title: "Vite-Plugin-Generate-Todo",
    icon: "/images/vite.png",
    period: "2일 소요",
    status: "done",
    role: "개인 프로젝트",
    description:
      "소스 코드 내의 주석을 자동으로 추출하여 TODO.md 파일로 생성하는 Vite 플러그인 입니다.",
    techStack: {
      all: ["TypeScript", "Vite Plugin API", "Node.js"],
      frontend: [],
      backend: ["Node.js"],
      devops: [],
      isSimple: true,
    },
    github: "https://github.com/DonggunLim/vite-plugin-generate-todo",
    npm: "https://www.npmjs.com/package/vite-plugin-generate-todo",
    features: [
      {
        label:
          "Vite 플러그인 API를 활용하여 Vite 빌드 과정 중 [TODO  ...]형식의 주석을 정적으로 분석",
        owned: true,
      },
      {
        label:
          "Node.js File System API를 사용하여 프로젝트 루트에 TODO.md 파일을 자동 생성 및 업데이트",
        owned: true,
      },
    ],
  },
];
