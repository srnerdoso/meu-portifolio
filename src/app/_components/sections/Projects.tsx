import NextImage from "next/image";
import ProjectLinkComponent from "./projects-components/ProjectLinkComponent";
import { HiOutlineExternalLink } from "react-icons/hi";

export interface ProjectProps {
  children: React.ReactNode;
  name: string;
  title: string;
  url: string;
}

export default function Projects({
  items,
  ref,
  sectionsStyle,
  styleMiddleSize,
}: {
  items: ProjectProps[];
  ref: (node?: Element | null) => void;
  sectionsStyle: React.CSSProperties;
  styleMiddleSize: React.CSSProperties;
}) {
  return (
    <section
      id="projects"
      ref={ref}
      className="flex justify-center items-center font-medium flex-col gap-10"
      style={sectionsStyle}
    >
      {items.map(({ name, title, children, url }, index) => (
        <div
          id={`project-${name}`}
          className="flex flex-row gap-7 max-xl:flex-col"
          style={styleMiddleSize}
          key={`project-${index}`}
        >
          <ProjectLinkComponent projectUrl={url}>
            <NextImage
              src={`/images/projects/${name}.png`}
              alt={name}
              width={1740}
              height={980}
              className="border-[2px] border-link"
            />
          </ProjectLinkComponent>
          <div id={name}>
            <div id="project-link-container" className="flex flex-row gap-2">
              <ProjectLinkComponent
                projectUrl={url}
                className="font-medium flex gap-2"
              >
                {title}
                <HiOutlineExternalLink className="text-link w-4 h-4" />
              </ProjectLinkComponent>
            </div>
            {children}
          </div>
        </div>
      ))}
    </section>
  );
}
