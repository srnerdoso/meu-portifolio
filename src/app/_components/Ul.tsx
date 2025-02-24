import NextImage from "next/image";
import { useRef } from "react";
import ElementProps from "./interfaces/ElementsProps";
import { Link } from "react-scroll";

interface UlProps extends ElementProps {
  ulRef?: React.RefObject<HTMLLIElement[]>;
  activeIndex: number;
  windowWidth: number;
}

export default function Ul({
  elementChildren,
  className,
  ulRef,
  activeIndex,
  windowWidth,
}: UlProps) {
  const liRefs = useRef<HTMLLIElement[]>([]);

  if (ulRef) ulRef.current = liRefs.current;

  const isMaxXl = () => {
    if (windowWidth > 1280) return true;
    return false;
  };

  const isActiveIndex = (index: number) => index === activeIndex;

  return (
    <ul className={className}>
      {elementChildren.map((li, index) => (
        <li
          ref={(el) => {
            if (el) liRefs.current[index] = el;
          }}
          key={`liNav-${index}`}
          style={{
            transform: isMaxXl()
              ? isActiveIndex(index)
                ? "translateX(2.6rem)"
                : "none"
              : "none",
            transition: "transform 100ms ease-in-out",
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
              width={isMaxXl() ? 1 : isActiveIndex(index) ? 200 : 100}
              height={isMaxXl() ? 9 : isActiveIndex(index) ? 2 : 1}
              src={
                isMaxXl() ? "/images/svg/line1.svg" : "/images/svg/line-nav.svg"
              }
              priority
              className="w-auto h-auto"
              style={{
                transform:
                  isMaxXl() && isActiveIndex(index)
                    ? "scaleX(2) scaleY(2) translateX(-0.7rem)"
                    : "none",
                transition: "transform 100ms ease-in-out",
              }}
            />
            {li}
            {!isActiveIndex(index) &&
              index === elementChildren.length - 1 &&
              !isMaxXl() && (
                <NextImage
                  width={1}
                  height={9}
                  src="/images/svg/line-nav.svg"
                  alt="line"
                  className="w-auto h-auto"
                />
              )}
          </Link>
        </li>
      ))}
    </ul>
  );
}
