import NextImage from "next/image";
import { Link } from "react-scroll";
import getCurrentIndex from "../utils/getCurrentIndex";

interface UlPcProps {
  activeSectionId: string;
  childrenArr: string[];
}

export default function UlNavPc({ childrenArr, activeSectionId }: UlPcProps) {
  return (
    <ul className="uppercase font-medium flex flex-col gap-5 cursor-pointer select-none">
      {childrenArr.map((li, index) => (
        <li
          key={`liPcNav-${index}`}
          style={{
            transform: getCurrentIndex(
              li,
              "translateX(2.6rem)",
              "",
              activeSectionId
            ) as string,
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
            style={{
              opacity: getCurrentIndex(
                li,
                "100%",
                "50%",
                activeSectionId
              ) as string,
            }}
          >
            <NextImage
              key={`imgLine-${index}`}
              alt="line"
              width={getCurrentIndex(li, 200, 100, activeSectionId) as number}
              height={getCurrentIndex(li, 2, 1, activeSectionId) as number}
              src={`/images/svg/line1.svg`}
              priority
              className="w-auto h-auto"
              style={{
                transform: getCurrentIndex(
                  li,
                  "scaleX(2) scaleY(2) translateX(-0.7rem)",
                  "scaleX(1)",
                  activeSectionId
                ) as string,
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
