const AboutMe = () => {
  return (
    <article className="flex flex-col leading-relaxed mb-20">
      <p>
        안녕하세요. 웹 프론트엔드 개발자 임동건입니다. React와 Express를 활용한
        풀스택 개발 을 경험하며, 특히 UI 컴포넌트 설계와 최적화에 집중하고
        있습니다.
      </p>
      <p className="my-2">
        <span className="text-primary-light-text dark:text-primary-dark-text font-semibold">
          개인 React UI 라이브러리
        </span>
        개발 및 NPM 배포 를 진행하며, 재사용성과 확장성을 고려한 컴포넌트 설계를
        탐구하고 있습니다. 또한,
        <span className="text-primary-light-text dark:text-primary-dark-text font-semibold">
          Vite 플러그인
        </span>
        을 개발하여 빌드 과정에서 작업 효율성을 높이는 데 활용했습니다.
      </p>
      <p>
        새로운 기술을 배우고, 직접 적용하며 더 나은 개발 방식을 고민합니다.
        <span className="text-primary-light-text dark:text-primary-dark-text font-semibold">
          최근에는 성능 최적화와 디자인 패턴을 활용한 컴포넌트 아키텍처
        </span>
        에 관심을 가지고 연구하고 있습니다.
      </p>
    </article>
  );
};

export default AboutMe;
