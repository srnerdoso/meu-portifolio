import NextImage from "next/image";
import ProjectLinkComponent from "./ProjectLinkComponent";
import { HiOutlineExternalLink } from "react-icons/hi";

export interface ProjectProps {
  children: React.ReactNode;
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
      {items.map(({ name, title, children, url }, index) => (
        <div
          id={`project-${name}`}
          className="flex flex-row gap-7 max-xl:flex-col"
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
