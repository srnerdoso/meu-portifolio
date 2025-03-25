import NextImage from "next/image";
import { Link } from "react-scroll";

interface UlMobileProps {
  activeIndex: number;
  childrenArr: string[];
  className: string;
}

export default function UlNavPc({
  childrenArr,
  className,
  activeIndex,
}: UlMobileProps) {
  const isActiveIndex = (index: number) => index === activeIndex;

  return (
    <ul className={className}>
      {childrenArr.map((li, index) => (
        <li key={`liMobileNav-${index}`}>
          <Link
            to={
              li === "Projetos"
                ? "projects"
                : li === "Sobre"
                ? "about"
                : li === "Experiência"
                ? "experience"
                : ""
            }
            smooth={true}
            duration={500}
            className="text-white flex gap-2 scroll-smooth items-center hover:no-underline"
          >
            {li !== "Projetos" && (
              <NextImage
                alt="line"
                width={100}
                height={1}
                src={`/images/svg/line-nav.svg`}
                priority
                className="w-auto h-auto opacity-100"
              />
            )}
            <div
              className={`flex items-center ${
                isActiveIndex(index)
                  ? "transition-opacity opacity-100 ease-in-out"
                  : "transition-opacity opacity-50 ease-in-out"
              }`}
            >
              {li}
            </div>
            {li !== "Projetos" && (
              <NextImage
                alt="line"
                width={200}
                height={2}
                src={`/images/svg/line-nav.svg`}
                priority
                className="w-auto h-auto opacity-100"
              />
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}
