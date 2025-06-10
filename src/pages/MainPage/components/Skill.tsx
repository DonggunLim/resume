type StacktsType = Record<
  "LANGUAGE" | "WEB_FRONTEND" | "WEB_BACKEND" | "TOOLS",
  { name: string; src: string }[]
>;

const STACKS: StacktsType = {
  LANGUAGE: [
    { name: "JavaScript", src: "/images/js.png" },
    { name: "TypeScript", src: "/images/ts.png" },
  ],
  WEB_FRONTEND: [
    { name: "React", src: "/images/react.png" },
    { name: "React Query", src: "/images/react_query.svg" },
    { name: "Tailwind", src: "/images/tailwind.png" },
    { name: "Zustand", src: "/images/zustand.svg" },
  ],
  WEB_BACKEND: [
    { name: "Node.js", src: "/images/node.png" },
    { name: "Express", src: "/images/express.png" },
    { name: "MongoDB", src: "/images/mongodb.svg" },
    { name: "MySQL", src: "/images/mysql.svg" },
  ],

  TOOLS: [
    { name: "Git", src: "/images/git.png" },
    { name: "Docker", src: "/images/docker.svg" },
    { name: "AWS", src: "/images/aws.webp" },
  ],
};

const Skill = () => {
  return (
    <section
      id="skill"
      className="flex h-screen flex-col items-center justify-center"
    >
      <div>
        {Object.entries(STACKS).map(([category, items]) => (
          <div key={category}>
            <p className="font- my-4 text-xl font-bold">{category}</p>
            <ul className="flex gap-8">
              {items.map(({ name, src }) => (
                <li key={name} className="flex flex-col items-center">
                  <div>
                    <img
                      src={src}
                      alt={name}
                      className="h-12 w-12 object-contain"
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
      </div>
    </section>
  );
};

export default Skill;
