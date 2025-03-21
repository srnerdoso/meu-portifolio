import Link from "next/link";
import ElementProps from "./interfaces/ElementsProps";

interface AnchorProps extends ElementProps {
  href: string[];
  type: "footer" | "header";
}

export default function Anchor({ elementChildren, className, href, type }: AnchorProps) {
  return (
    <div
      id="social"
      className="relative top-8 w-full flex flex-row gap-5 justify-center"
      style={{
        top: type === "header" ? "8" : "auto",
      }}
    >
      {elementChildren.map((component, index) => (
        <Link
          key={`linkSocial-${index}`}
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
