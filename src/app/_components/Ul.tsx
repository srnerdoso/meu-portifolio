import { useRef } from "react";
import ElementProps from "./interfaces/ElementsProps";

interface UlProps extends ElementProps {
  ulRef?: React.RefObject<HTMLLIElement[]>;
  activeIndex: number;
}

export default function Ul({ elementChildren, className, ulRef, activeIndex }: UlProps) {
  const liRefs = useRef<HTMLLIElement[]>([]);

  if (ulRef) ulRef.current = liRefs.current;

  return (
    <ul className={className}>
      {elementChildren.map((li, index) => (
        <li
          ref={(el) => {
            if (el) liRefs.current[index] = el;
          }}
          key={`li-${index}`}
        >
          <div className="flex gap-5">
            <img key={`img-${index}`} src={`/images/svg/line${index === activeIndex ? "-strong" : 1}.svg`} />
            {li}
          </div>
        </li>
      ))}
    </ul>
  );
}
