export const teamProjects = [
  {
    title: "Petple",
    icon: "/src/assets/images/petple_icon.png",
    status: "working",
    description:
      "반려 동물이라는 키워드로 모이는 사람들을 위해 다양한 서비스와 커뮤니티 기능을 제공하는 웹 서비스입니다.",
    role: "Full-Stack (Frontend 50% / Backend 50%)",
    techStack:
      "TypeScript, React, Express, MongoDB, Docker, Socket.io, Zustand, Tanstack-Query",
    repoFront: "https://github.com/DonggunLim/Petple_front",
    repoBack: "https://github.com/DonggunLim/Petple_back",
    web: "https://petple-front.vercel.app",
    tasks: [
      {
        title: "Socket.io를 이용한 실시간 채팅 기능 개발",
        link: "https://github.com/DonggunLim/Petple_front/wiki/%EC%8B%A4%EC%8B%9C%EA%B0%84-%EC%B1%84%ED%8C%85-%EC%84%9C%EB%B9%84%EC%8A%A4-%EA%B5%AC%ED%98%84",
      },
      {
        title: "GitLab Runner와 Docker를 이용한 CI/CD 파이프라인 구축",
        link: "https://github.com/DonggunLim/Petple_front/wiki/GitLab-CI-CD-%ED%8C%8C%EC%9D%B4%ED%94%84%EB%9D%BC%EC%9D%B8-%EA%B5%AC%EC%B6%95%EC%9D%84-%ED%86%B5%ED%95%9C-%EB%B0%B0%ED%8F%AC-%EC%9E%90%EB%8F%99%ED%99%94-%EA%B2%BD%ED%97%98",
      },
      {
        title:
          "Tanstack-Query를 이용한 데이터 캐싱 최적화 및 Optimistic updates 적용",
        link: "https://github.com/DonggunLim/Petple_front/wiki/tanstack%E2%80%90query%EB%A1%9C-%EA%B5%AC%ED%98%84%ED%95%9C-%EC%BB%A4%EB%AE%A4%EB%8B%88%ED%8B%B0-%EA%B2%8C%EC%8B%9C%ED%8C%90%EC%9D%98-%EB%8D%B0%EC%9D%B4%ED%84%B0-%ED%9D%90%EB%A6%84-%EC%A0%9C%EC%96%B4%EC%99%80-%EA%B0%9C%EC%84%A0",
      },
      {
        title:
          "Intersection Observer API와 useInfiniteQuery를 활용한 무한 스크롤 기능 구현",
        link: "https://github.com/DonggunLim/Petple_front/wiki/useInfiniteQuery%EC%99%80-Intersection-Observer%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%9C-%EB%AC%B4%ED%95%9C%EC%8A%A4%ED%81%AC%EB%A1%A4-%EA%B5%AC%ED%98%84",
      },
      {
        title: "Presigned URL을 이용한 AWS S3 이미지 업로드 방식 구현",
        link: "https://github.com/DonggunLim/Petple_front/wiki/Presigned-URL,-Lambda%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%9C-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%97%85%EB%A1%9C%EB%93%9C,-%EC%84%B1%EB%8A%A5-%EC%B5%9C%EC%A0%81%ED%99%94",
      },
      {
        title:
          "Context API와 Compound Pattern을 활용한 UI 공통 컴포넌트 설계 및 개발",
        link: "https://github.com/DonggunLim/Petple_front/wiki/UI-%EA%B3%B5%ED%86%B5-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EC%84%A4%EA%B3%84-%EB%B0%8F-%EA%B0%9C%EB%B0%9C",
      },
    ],
  },
  {
    title: "BlahBlah",
    icon: "/src/assets/images/blahblah_icon.svg",
    status: "working",
    description:
      "사용자가 직접 원하는 주제로 게시판을 만들어 커뮤니티 형성을 제공해주는 웹 서비스 입니다.",
    role: "Full-Stack (Frontend 50% / Backend 50%)",
    techStack: "TypeScript, React, Express, MongoDB, Mongoose",
    repoFront: "https://github.com/DonggunLim/Blahblah_front",
    repoBack: "https://github.com/DonggunLim/Blahblah_back",
    web: "https://blahblah-front.vercel.app",
    tasks: [
      {
        title: "Google Oauth를 이용한 사용자 인증 구현",
        link: "https://github.com/DonggunLim/Blahblah_front/wiki/Google-OAuth%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%9C-%EC%82%AC%EC%9A%A9%EC%9E%90-%EC%9D%B8%EC%A6%9D-%EA%B5%AC%ED%98%84",
      },
      {
        title: "JWT Token 및 쿠키를 활용한 API 인증 및 로그인 구현",
        link: "https://github.com/DonggunLim/Blahblah_front/wiki/JWT%EC%99%80-%EC%BF%A0%ED%82%A4-%EA%B8%B0%EB%B0%98-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EB%B0%8F-API-%EC%9D%B8%EC%A6%9D-%EA%B5%AC%ED%98%84",
      },
      {
        title: "Nodemailer를 이용한 이메일 인증 과정 구현",
        link: "https://github.com/DonggunLim/Blahblah_front/wiki/Nodemailer%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EC%9D%B4%EB%A9%94%EC%9D%BC-%EC%9D%B8%EC%A6%9D-%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84-%EB%B0%8F--%EC%9D%B4%EB%A9%94%EC%9D%BC-%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85-%EA%B5%AC%ED%98%84",
      },
      {
        title: "어드민 대시보드 및 게시판 관리 기능 개발",
        link: "https://github.com/DonggunLim/Blahblah_front/wiki/%EC%96%B4%EB%93%9C%EB%AF%BC-%EB%8C%80%EC%8B%9C%EB%B3%B4%EB%93%9C-%EB%B0%8F-%EA%B2%8C%EC%8B%9C%ED%8C%90-%EA%B4%80%EB%A6%AC-%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84",
      },
    ],
  },
  {
    title: "WorkPlus",
    icon: "/src/assets/images/workplus_icon.png",
    status: "working",
    description: "업무 지원 플랫폼이라는 주제로 진행한 웹 프로젝트 입니다.",
    role: "팀장 (Backend 100%, Frontend 50%)",
    techStack: "JavaScript, React, Express, MongoDB, Mongoose, TypeScript",
    repoFront: "https://github.com/DonggunLim/WorkPluse_front",
    repoBack: "https://github.com/DonggunLim/WorkPlus_back",
    web: "https://work-plus-front.vercel.app",
    tasks: [
      {
        title: "Express와 MongoDB, Mongoose를 활용한 RESTful API 설계 및 구현",
        link: "",
      },
      {
        title:
          "RESTful 원칙을 준수하여 CRUD API 개발 및 JWT 기반 인증 시스템 적용",
        link: "",
      },
      { title: "Mongoose 스키마 설계를 통한 데이터 구조 관리", link: "" },
      { title: "Postman을 활용한 API 테스트 및 문서화", link: "" },
    ],
  },
];

export const personalProjects = [
  {
    title: "React-UI-Kit",
    description:
      "Headless 스타일 및 Compound Pattern을 활용한 React UI 컴포넌트 라이브러리",
    techStack: "TypeScript, React, Vite",
    repo: "https://github.com/DonggunLim/react-ui-kit",
    npm: "https://www.npmjs.com/package/@imdonggun/react-ui-kit",
    tasks: [
      {
        title:
          "재사용 가능한 UI 컴포넌트 (Carousel, Calendar, Modal, Dropdown 등) 설계 및 개발",
        link: "",
      },
      {
        title:
          "Headless UI 스타일 적용으로 사용자가 원하는 디자인을 자유롭게 커스터마이징 가능하도록 구현",
        link: "",
      },
      {
        title:
          "Context API를 활용하여 Compound Pattern 기반 컴포넌트의 확장성과 유연성 제공",
        link: "",
      },
      {
        title:
          "NPM 패키지 배포를 통한 실제 프로젝트 적용 및 유지보수, 고도화 작업",
        link: "",
      },
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
      {
        title:
          "Vite 플러그인 API를 활용하여 빌드 과정 중 `[TODO :: ...]` 형식의 주석을 분석 및 추출",
        link: "",
      },
      {
        title:
          "Node.js File System API를 사용하여 프로젝트 루트에 TODO.md 파일을 자동 생성 및 업데이트",
        link: "",
      },
      { title: "Vite 플러그인 API의 transform, buildEnd API 활용", link: "" },
    ],
  },
];
