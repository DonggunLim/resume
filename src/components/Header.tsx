const NAVIGATION_ITEMS = [
  {
    title: "Project",
    pathname: "project",
  },
  {
    title: "Skill",
    pathname: "skill",
  },
  {
    title: "Contact",
    pathname: "contact",
  },
];

export default function Header() {
  return (
    <header className="fixed top-1/2 left-10 translate-y-[-50%]">
      <nav className="flex flex-col">
        <ol className="space-y-2">
          {NAVIGATION_ITEMS.map(({ title, pathname }, index) => (
            <li>
              <a
                href={`#${pathname}`}
                key={`navigation-items-${pathname}`}
                className="text-sm"
              >
                <span className="text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                . {title}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </header>
  );
}
