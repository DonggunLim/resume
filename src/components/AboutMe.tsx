const Aboutme = () => {
  return (
    <article className="flex flex-col gap-y-8 pb-36 leading-loose">
      <p>
        안녕하세요! 웹 개발자를 목표로 꾸준히 배워가고 있는 임동건입니다.
        유튜브를 통해 개발에 호기심을 가지게 되었고, 직접 웹을 만들어보는 과정이
        흥미로워 본격적으로 공부를 시작했습니다. 웹의
        <span className="text-primary-light-text dark:text-primary-dark-text font-semibold">
          시각적인 부분을 만들면서 내부 로직을 설계하는 과정
        </span>
        이 저의 호기심을 자극했습니다.
      </p>
      <p>
        현재 저는 엘리스 트랙이라는 부트 캠프 과정을 수료 중입니다. 경험 많으신
        코치님들로부터 많은 것을 배우고, 다른 수강생들과 의견을 나누는 경험이
        시야를 넓히는데 큰 도움이 되고 있습니다. 최근에는
        <span className="text-primary-light-text dark:text-primary-dark-text font-semibold">
          React로 개인 UI 라이브러리를 개발하고 배포하며, 컴포넌트 설계와 배포를
          하는 과정
        </span>
        을 경험 해 볼 수 있었습니다. 큰 흥미를 느끼고 잇는 프로젝트 입니다. 매일
        많은 시간을 투자할 수는 없겠지만 지속적으로 업데이트해 볼 계획입니다.
      </p>
      <p>
        여가 시간에는 오래 즐겨온 취미인 헬스를 꾸준히 하고 있습니다. 개발자로서
        책상에 앉아 있는 시간이 많아지면서 건강에 더욱 신경을 쓰고 있는데, 점점
        목,허리가 아픈 일이 많아지면서 걱정입니다.😂 이 글을 읽고 계신
        여러분들은 자세를 잘 유지하시고 건강을 챙기셨으면 좋겠네요!😁
      </p>
    </article>
  );
};

export default Aboutme;
