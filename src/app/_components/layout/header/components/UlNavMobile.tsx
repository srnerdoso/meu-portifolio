import NextImage from "next/image";
import { Link } from "react-scroll";

interface UlMobileProps {
  activeSectionId: string;
  childrenArr: string[];
}

export default function UlNavMobile({
  childrenArr,
  activeSectionId,
}: UlMobileProps) {
  const ContainerLine = ({
    children,
    childrenId,
    style,
  }: {
    children: string;
    childrenId: string;
    style: React.CSSProperties;
  }) => {
    const Line = () => (
      <NextImage
        alt="line"
        width={1}
        height={200}
        src={`/images/svg/line-nav.svg`}
        priority
        className="w-auto h-auto"
      />
    );

    const IsProjects = childrenId === "projects";

    return (
      <li
        className="flex gap-[10px]"
        style={{
          marginLeft: IsProjects ? "10px" : "",
          marginRight: IsProjects ? "10px" : "",
        }}
      >
        {!IsProjects && <Line />}
        <Link
          to={childrenId}
          smooth={true}
          duration={500}
          className="text-white flex scroll-smooth cursor-pointer"
          style={style}
        >
          {children}
        </Link>
        {!IsProjects && <Line />}
      </li>
    );
  };

  return (
    <ul className="uppercase font-medium flex select-none">
      {childrenArr.map((children) => {
        const about = "about";
        const projects = "projects";
        const experience = "experience";

        const setOpacity = (id: string) => {
          return activeSectionId === id ? 1 : 0.5;
        };

        switch (children) {
          case "Sobre":
            return (
              <ContainerLine
                childrenId={about}
                key={`${about}-link`}
                style={{
                  opacity: setOpacity(about),
                }}
              >
                {children}
              </ContainerLine>
            );
          case "Projetos":
            return (
              <ContainerLine
                childrenId={projects}
                key={`${projects}-link`}
                style={{
                  opacity: setOpacity(projects),
                }}
              >
                {children}
              </ContainerLine>
            );
          case "Experiência":
            return (
              <ContainerLine
                childrenId={experience}
                key={`${experience}-link`}
                style={{
                  opacity: setOpacity(experience),
                }}
              >
                {children}
              </ContainerLine>
            );
          default:
            return;
        }
      })}
    </ul>
  );
}
