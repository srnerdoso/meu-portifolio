import NextImage from "next/image";
import Paragraph, { ParagraphProps } from "./Paragraph";
import ProjectLinkComponent from "./ProjectLinkComponent";
import { HiOutlineExternalLink } from "react-icons/hi";
import SectionsProps from "./interfaces/SectionsProps";

export interface ProjectProps
  extends Pick<
    ParagraphProps & SectionsProps,
    "boldWords" | "keyWords" | "description"
  > {
  name: string;
  title: string;
  url: string;
}

export default function Projects({ items }: { items: ProjectProps[] }) {
  return (
    <section
      id="projects"
      className="flex justify-center items-center py-[30vh] font-medium flex-col gap-10"
    >
      {items.map(
        ({ name, title, description, url, boldWords, keyWords }, index) => (
          <div
            id={`project-${name}`}
            className="flex flex-row gap-7 max-xl:flex-col"
            key={`project-${index}`}
          >
            <ProjectLinkComponent
              projectChildren={
                <NextImage
                  src={`/images/projects/${name}.png`}
                  alt={name}
                  width={1740}
                  height={980}
                  className="border-[2px] border-link"
                />
              }
              projectUrl={url}
            />
            <div id={name}>
              <div id="project-link-container" className="flex flex-row gap-2">
                <ProjectLinkComponent
                  projectChildren={title}
                  projectUrl={url}
                  className="font-medium"
                />
                <HiOutlineExternalLink className="text-link w-4 h-4" />
              </div>
              <p>
                <Paragraph
                  paragraphWords={description}
                  boldWords={boldWords}
                  keyWords={keyWords}
                />
              </p>
            </div>
          </div>
        )
      )}
    </section>
  );
}
