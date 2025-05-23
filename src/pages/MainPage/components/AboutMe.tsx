const AboutMe = () => {
  return (
    <article className="flex flex-col leading-relaxed">
      <p>
        웹 개발자 임동건입니다. React와 Express를 활용한 풀스택 개발을 경험하며,
        특히 UI 컴포넌트 설계와 최적화에 집중하고 있습니다.
      </p>
      <p className="my-2">
        <span className="text-primary-light-text dark:text-primary-dark-text font-semibold">
          개인 React UI 라이브러리
        </span>
        를 개발하고 NPM에 배포하며, 재사용성과 확장성을 고려한 컴포넌트 설계를
        탐구하고 있습니다. 또한{" "}
        <span className="text-primary-light-text dark:text-primary-dark-text font-semibold">
          Vite 플러그인
        </span>
        을 개발하여 빌드 과정에서 작업 효율성을 높이는 데 활용했습니다.
      </p>
      <p>
        <span className="text-primary-light-text dark:text-primary-dark-text font-semibold">
          최근에는 자바스크립트의 내부 동작 원리(실행 컨텍스트, 이벤트 루프,
          this, 스코프 체인), 브라우저 구조, 네트워크 통신
        </span>
        등 핵심 개념을 더 깊이 이해하고자 도서와 CS 강의를 통해 학습 중입니다.
      </p>
    </article>
  );
};

export default AboutMe;
