import Link from "next/link";
import ElementProps from "./interfaces/ElementsProps";

interface AnchorProps extends ElementProps {
  href: string[];
}

export default function Anchor({ children, className, href }: AnchorProps) {
  return (
    <div
      id="social"
      className="relative top-8 w-full flex flex-row gap-5 justify-center"
    >
      {children.map((component, index) => (
        <Link
          key={`link-${index * 10}`}
          href={href[index]}
          target="_blank"
          className={className}
        >
          {component}
        </Link>
      ))}
    </div>
  );
}
