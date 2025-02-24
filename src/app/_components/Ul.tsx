import NextImage from "next/image";
import { useRef } from "react";
import ElementProps from "./interfaces/ElementsProps";
import { Link } from "react-scroll";

interface UlProps extends ElementProps {
  ulRef?: React.RefObject<HTMLLIElement[]>;
  activeIndex: number;
}

export default function Ul({
  elementChildren,
  className,
  ulRef,
  activeIndex,
}: UlProps) {
  const liRefs = useRef<HTMLLIElement[]>([]);

  if (ulRef) ulRef.current = liRefs.current;

  return (
    <ul className={className}>
      {elementChildren.map((li, index) => (
        <li
          ref={(el) => {
            if (el) liRefs.current[index] = el;
          }}
          key={`liNav-${index}`}
          style={{
            transform: index === activeIndex ? "translateX(2.6rem)" : "",
            transition: "transform 500ms ease-in-out",
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
            className="text-white flex gap-5 scroll-smooth"
          >
            <NextImage
              key={`imgLine-${index}`}
              alt="line"
              width={index === activeIndex ? 200 : 100}
              height={index === activeIndex ? 2 : 1}
              src={`/images/svg/line1.svg`}
              priority
              className="w-auto h-auto max-xl:hidden"
              style={{
                transform:
                  index === activeIndex
                    ? "scaleX(2) scaleY(2) translateX(-0.7rem)"
                    : "scaleX(1)",
                transition: "transform 500ms ease-in-out",
              }}
            />
            {li}
          </Link>
        </li>
      ))}
    </ul>
  );
}
