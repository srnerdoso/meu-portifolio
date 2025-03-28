import Link from "next/link";
interface AnchorProps {
  href: string[];
  type: "other" | "header-pc";
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
      className="flex w-fit justify-center items-center gap-5"
      style={{
        position: type === "header-pc" ? "relative" : "static",
        top: type === "header-pc" ? "8" : "",
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
