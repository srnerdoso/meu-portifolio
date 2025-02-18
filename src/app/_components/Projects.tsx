import Paragraph, { ParagraphProps } from "./Paragraph";
import ProjectLinkComponent from "./ProjectLinkComponent";
import DivProps from "./interfaces/DivProps";

interface ProjectProps
  extends Pick<ParagraphProps & DivProps, "boldWords" | "keyWords" | "ref"> {
  projectName: string;
  projectTitle: string;
  projectDescription: string;
  projectUrl: string;
}

export default function Projects({
  projectName,
  projectTitle,
  projectDescription,
  projectUrl,
  keyWords,
  boldWords,
  ref,
}: ProjectProps) {
  return (
    <section
      ref={ref}
      id="projects"
      className="flex flex-row gap-7 font-medium"
    >
      <h2 className="sr-only">Projetos</h2>
      <ProjectLinkComponent
        projectChildren={
          <img
            src={`/images/projects/${projectName}.png`}
            alt={projectName}
            className="w-44 border-[2px] border-link"
          />
        }
        projectUrl={projectUrl}
      />
      <div id="projet-1" className="max-w-[407px]">
        <ProjectLinkComponent
          projectChildren={projectTitle}
          projectUrl={projectUrl}
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
