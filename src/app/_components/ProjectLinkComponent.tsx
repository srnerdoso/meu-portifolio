import Link from "next/link";
import ElementProps from "./interfaces/ElementsProps";

interface ProjectLinkComponentProps
  extends Pick<ElementProps, "className"> {
  projectChildren: React.ReactNode;
  projectUrl: string;
}

export default function ProjectLinkComponent({
  projectChildren,
  className,
  projectUrl,
}: ProjectLinkComponentProps) {
  return (
    <Link href={projectUrl} target="_blank" className={className}>
      {projectChildren}
    </Link>
  );
}
