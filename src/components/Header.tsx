import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const NAVIGATION_ITEMS = [
  {
    title: "Hero",
    pathname: "hero",
  },
  {
    title: "Skill",
    pathname: "skill",
  },
  {
    title: "Project",
    pathname: "project",
  },
];

const SCROLL_DELAY = 50;

const Header = () => {
  const [headerVisible, setHeaderVisible] = useState(true);
  const prevScrollY = useRef(0);

  const handleHeaderView = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY - prevScrollY.current > SCROLL_DELAY) {
      setHeaderVisible(false);
    } else if (prevScrollY.current - currentScrollY > SCROLL_DELAY) {
      setHeaderVisible(true);
    }
    prevScrollY.current = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleHeaderView);

    return () => {
      window.removeEventListener("scroll", handleHeaderView);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: headerVisible ? 0 : -24, opacity: headerVisible ? 1 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed my-4"
    >
      <nav>
        <ul className="flex justify-end">
          {NAVIGATION_ITEMS.map(({ title, pathname }, index) => (
            <li>
              <a
                href={`#${pathname}`}
                key={`navigation-items-${pathname}`}
                className="px-4 py-2"
              >
                <span className="text-highlight">
                  {String(index + 1).padStart(2, "0")}
                </span>
                . {title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
