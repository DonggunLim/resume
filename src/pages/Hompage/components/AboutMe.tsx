const AboutMe = () => {
  return (
    <article className="flex flex-col gap-y-6 leading-relaxed">
      <p>
        안녕하세요. 웹 개발자 임동건입니다. 개발에 관심을 가지게 된 후, 웹을
        직접 만들어보는 과정에서
        <span className="text-primary-light-text dark:text-primary-dark-text font-semibold">
          UI 구성과 내부 로직 설계
        </span>
        에 큰 매력을 느끼고 본격적으로 공부를 시작했습니다.
      </p>
      <p>
        현재
        <span className="text-primary-light-text dark:text-primary-dark-text font-semibold">
          React 기반의 UI 라이브러리를 개발 및 배포
        </span>
        하며, 컴포넌트 설계를 경험하고 있습니다. 꾸준히 개선하여 더 나은 사용자
        경험을 만드는 데 집중하고 있습니다.
      </p>
      <p>
        여가 시간에는 헬스를 즐기며 건강을 관리합니다. 개발과 건강의 균형을
        유지하며, 꾸준히 성장해 나가고자 합니다. 😊
      </p>
    </article>
  );
};

export default AboutMe;
