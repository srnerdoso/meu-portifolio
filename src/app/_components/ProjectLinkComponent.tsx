import Link from "next/link";

interface ProjectLinkComponentProps {
  className?: string;
  children: React.ReactNode;
  projectUrl: string;
}

export default function ProjectLinkComponent({
  children,
  className,
  projectUrl,
}: ProjectLinkComponentProps) {
  return (
    <Link href={projectUrl} target="_blank" className={className}>
      {children}
    </Link>
  );
}
