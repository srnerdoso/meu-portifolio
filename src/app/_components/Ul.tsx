import NextImage from "next/image";
import { useRef } from "react";
import ElementProps from "./interfaces/ElementsProps";

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
        >
          <div className="flex gap-5">
            <NextImage
              key={`imgLine-${index}`}
              alt="line"
              width={index === activeIndex ? 200 : 100}
              height={index === activeIndex ? 2 : 1}
              src={`/images/svg/line${
                index === activeIndex ? "-strong" : 1
              }.svg`}
              priority
              className="w-auto h-auto"
            />
            {li}
          </div>
        </li>
      ))}
    </ul>
  );
}
