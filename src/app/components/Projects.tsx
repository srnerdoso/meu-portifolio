import Link from "next/link";
import ElementProps from "./interfaces/ElementsProps";
import Paragraph, { ParagraphProps } from "./Paragraph";

interface ProjectProps extends Pick<ParagraphProps, "boldWords" | "keyWords"> {
  projectName: string;
  projectUrl: string;
  projectTitle: string;
  projectDescription: string;
}
interface ProjectLinkComponentProps extends Pick<ElementProps, "className"> {
  projectChildren: React.ReactNode;
}

export default function Projects({
  projectName,
  projectUrl,
  projectTitle,
  projectDescription,
  keyWords,
  boldWords,
}: ProjectProps) {
  const ProjectLinkComponent = ({
    projectChildren,
    className,
  }: ProjectLinkComponentProps) => {
    return (
      <Link href={projectUrl} target="_blank" className={className}>
        {projectChildren}
      </Link>
    );
  };

  return (
    <section id={projectName} className="flex flex-row gap-7 font-medium">
      <ProjectLinkComponent
        projectChildren={
          <img
            src={`/images/projects/${projectName}.png`}
            alt={projectName}
            className="w-44 border-[2px] border-link"
          />
        }
      />
      <div id="projet-1" className="max-w-[407px]">
        <ProjectLinkComponent
          projectChildren={projectTitle}
          className="font-medium"
        />
        <p>
          <Paragraph
            paragraphWords={projectDescription}
            boldWords={boldWords}
            keyWords={keyWords}
          />
        </p>
      </div>
    </section>
  );
}
