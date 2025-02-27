import NextImage from "next/image";
import Paragraph, { ParagraphProps } from "./Paragraph";
import ProjectLinkComponent from "./ProjectLinkComponent";
import DivProps from "./interfaces/DivProps";
import { HiOutlineExternalLink } from "react-icons/hi";

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
      className="flex justify-center items-center py-[30vh] font-medium max-xl:py-[20vh]"
    >
      <div
        id="projects-container"
        className="flex flex-row gap-7 max-xl:flex-col"
      >
        <h2 className="sr-only">Projetos</h2>
        <ProjectLinkComponent
          projectChildren={
            <NextImage
              src={`/images/projects/${projectName}.png`}
              alt={projectName}
              width={1740}
              height={980}
              className="border-[2px] border-link"
            />
          }
          projectUrl={projectUrl}
        />
        <div id="projet-1">
          <div id="project-link-container" className="flex flex-row gap-2">
            <ProjectLinkComponent
              projectChildren={projectTitle}
              projectUrl={projectUrl}
              className="font-medium"
            />
            <HiOutlineExternalLink
              className="text-link w-4 h-4"
            />
          </div>
          <p>
            <Paragraph
              paragraphWords={projectDescription}
              boldWords={boldWords}
              keyWords={keyWords}
            />
          </p>
        </div>
      </div>
    </section>
  );
}
