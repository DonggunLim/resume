import Button from "../../../components/commonui/Button";

const Skills = () => {
  return (
    <section>
      <h1 className="text-xl text-primary-light-text dark:text-primary-dark-text font-bold">
        Skills
      </h1>
      <div className="p-4">
        <h2 className="text-base font-semibold pb-2">Frontend development</h2>
        <ul className="flex gap-2 flex-wrap">
          <li>
            <Button>Javascript</Button>
          </li>
          <li>
            <Button>Typescript</Button>
          </li>
          <li>
            <Button>React</Button>
          </li>
          <li>
            <Button>HTML · CSS</Button>
          </li>
          <li>
            <Button>Styled-components</Button>
          </li>
          <li>
            <Button>Tailwind</Button>
          </li>
        </ul>
      </div>
      <div className="p-4">
        <h2 className="text-base font-semibold pb-2">Backend development</h2>
        <ul className="flex gap-2 flex-wrap">
          <li>
            <Button>Express · Node.js</Button>
          </li>
        </ul>
      </div>
      <div className="p-4">
        <h2 className="text-base font-semibold pb-2">Database</h2>
        <ul className="flex gap-2">
          <li>
            <Button>MongoDB</Button>
          </li>
        </ul>
      </div>
      <div className="p-4">
        <h2 className="text-base font-semibold pb-2">Tools</h2>
        <ul className="flex gap-2 flex-wrap">
          <li>
            <Button>Git</Button>
          </li>
          <li>
            <Button>Postman</Button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
