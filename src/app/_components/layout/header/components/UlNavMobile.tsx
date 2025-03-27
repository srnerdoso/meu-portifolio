import NextImage from "next/image";
import { Link } from "react-scroll";

interface UlMobileProps {
  activeSectionId: string;
  childrenArr: string[];
  type: "about";
}

export default function UlNavMobile({
  childrenArr,
  activeSectionId,
}: UlMobileProps) {
  const ContainerLine = ({
    children,
    childrenId,
  }: {
    children: string;
    childrenId: string;
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
      <li className="flex gap-[10px] mb-5" style={{
        marginLeft: IsProjects ? "10px" : "",
        marginRight: IsProjects ? "10px" : "",
      }}>
        {!IsProjects && <Line />}
        <Link
          to={childrenId}
          smooth={true}
          duration={500}
          className="text-white flex scroll-smooth cursor-pointer"
          style={{
            opacity: activeSectionId === "about" ? 1 : 0.5,
          }}
        >
          {children}
        </Link>
        {!IsProjects && <Line />}
      </li>
    );
  };

  return (
    <ul className="uppercase font-medium flex select-none">
      {childrenArr.map((children, index) => {
        switch (children) {
          case "Sobre":
            return <ContainerLine childrenId="about">{children}</ContainerLine>;
          case "Projetos":
            return (
              <ContainerLine childrenId="projects">Projetos</ContainerLine>
            );
          case "Experiência":
            return (
              <ContainerLine childrenId="experience">Experiência</ContainerLine>
            );
          default:
            return;
        }
      })}
    </ul>
  );
}
