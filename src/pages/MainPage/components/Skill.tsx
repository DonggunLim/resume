type StacktsType = Record<
  "LANGUAGE" | "WEB_FRONTEND" | "WEB_BACKEND" | "TOOLS",
  { name: string; src: string }[]
>;

const STACKS: StacktsType = {
  LANGUAGE: [
    { name: "JavaScript", src: "/src/assets/images/js.png" },
    { name: "TypeScript", src: "/src/assets/images/ts.png" },
  ],
  WEB_FRONTEND: [
    { name: "React", src: "/src/assets/images/react.png" },
    { name: "React Query", src: "/src/assets/images/react_query.svg" },
    { name: "Tailwind", src: "/src/assets/images/tailwind.png" },
    { name: "Zustand", src: "/src/assets/images/zustand.svg" },
  ],
  WEB_BACKEND: [
    { name: "Node.js", src: "/src/assets/images/node.png" },
    { name: "Express", src: "/src/assets/images/express.png" },
    { name: "MongoDB", src: "/src/assets/images/mongodb.svg" },
    { name: "MySQL", src: "/src/assets/images/mysql.svg" },
  ],

  TOOLS: [
    { name: "Git", src: "/src/assets/images/git.png" },
    { name: "Docker", src: "/src/assets/images/docker.svg" },
    { name: "AWS", src: "/src/assets/images/aws.webp" },
  ],
};

const Skill = () => {
  return (
    <section
      id="skill"
      className="flex h-screen flex-col items-start justify-center gap-y-4"
    >
      {Object.entries(STACKS).map(([category, items]) => (
        <div key={category}>
          <p className="my-4 text-xl font-bold">{category}</p>
          <ul className="ml-8 flex gap-4">
            {items.map(({ name, src }) => (
              <li key={name} className="flex flex-col items-center">
                <div>
                  <img
                    src={src}
                    alt={name}
                    className={"h-12 w-12 object-contain"}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <span className="mt-1 text-sm">{name}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Skill;
