import Link from "next/link";
interface AnchorProps {
  href: string[];
  type: "footer" | "header";
  children: React.ReactNode[];
  className: string;
}

export default function Anchor({
  children,
  className,
  href,
  type,
}: AnchorProps) {
  return (
    <div
      id="social"
      className="relative top-8 w-full flex flex-row gap-5 justify-center"
      style={{
        top: type === "header" ? "8" : "auto",
      }}
    >
      {children.map((component, index) => (
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
