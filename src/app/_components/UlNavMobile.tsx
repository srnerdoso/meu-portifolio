import NextImage from "next/image";
import { useRef } from "react";
import ElementProps from "./interfaces/ElementsProps";
import { Link } from "react-scroll";

interface UlMobileProps extends ElementProps {
  ulRef?: React.RefObject<HTMLLIElement[]>;
  activeIndex?: number;
}

export default function UlNavPc({
  elementChildren,
  className,
  ulRef,
  activeIndex,
}: UlMobileProps) {
  const liRefs = useRef<HTMLLIElement[]>([]);

  if (ulRef) ulRef.current = liRefs.current;

  const isActiveIndex = (index: number) => index === activeIndex;

  return (
    <ul className={className}>
      {elementChildren.map((li, index) => (
        <li
          key={`liMobileNav-${index}`}
          ref={(el) => {
            if (el) {
              liRefs.current[index] = el;
            }
          }}
        >
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
            className="text-white flex gap-2 scroll-smooth items-center"
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
