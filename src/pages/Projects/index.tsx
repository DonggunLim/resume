import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { MDXProvider } from "@mdx-js/react";
import type { ComponentType } from "react";

const ProjectPage = () => {
  const { title } = useParams();
  const [MDXContent, setMDXContent] = useState<ComponentType | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!title) return;

    import(`./contents/${title}.mdx`)
      .then((module) => {
        setMDXContent(() => module.default);
      })
      .catch(() => {
        setError("MDX 파일을 불러올 수 없습니다.");
      });
  }, [title]);

  if (error) return <div>{error}</div>;

  return <MDXProvider>{MDXContent && <MDXContent />}</MDXProvider>;
};

export default ProjectPage;
