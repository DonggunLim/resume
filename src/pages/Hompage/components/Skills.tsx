import Button from "../../../components/commonui/Button";

const SKILLS = [
  {
    category: "Frontend development",
    skills: [
      "Javascript",
      "Typescript",
      "React",
      "HTML · CSS",
      "Styled-components",
      "Tailwind",
      "Zustand",
      "Tanstack Query",
      "Vite",
    ],
  },
  {
    category: "Backend development",
    skills: ["Express · Node.js"],
  },
  {
    category: "Database",
    skills: ["MongoDB Atlas", "Mongoose"],
  },
  {
    category: "DevOps & Cloud",
    skills: ["Docker", "AWS (S3, EC2)", "GitLab CI/CD", "Nginx"],
  },
  {
    category: "Tools",
    skills: ["Git", "Postman"],
  },
];

const Skills = () => {
  return (
    <section>
      <h1 className="text-xl text-primary-light-text dark:text-primary-dark-text font-bold">
        Skills
      </h1>
      {SKILLS.map(({ category, skills }) => (
        <div key={category} className="p-4">
          <h2 className="text-base font-semibold pb-2">{category}</h2>
          <ul className="flex gap-2 flex-wrap">
            {skills.map((skill) => (
              <li key={skill}>
                <Button>{skill}</Button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Skills;
