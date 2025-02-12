import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

interface ElementProps {
  children: React.ReactNode[];
  className?: string;
}
interface AnchorProps extends ElementProps {
  href: string[];
}

interface ProjectProps {
  projectName: string;
  projectUrl: string;
  projectTitle: string;
  projectDescription: string;
  keyWords: string[];
  boldWords: string[];
}

export default function Home() {
  const Ul = ({ children, className }: ElementProps) => {
    return (
      <ul className={className}>
        {children.map((li, index) => (
          <li key={`li-${index}`}>
            <div className="flex gap-5">
              <img key={`img-${index}`} src="/images/svg/line1.svg" />
              {li}
            </div>
          </li>
        ))}
      </ul>
    );
  };

  const Anchor = ({ children, className, href }: AnchorProps) => {
    return (
      <div
        id="social"
        className="relative top-8 w-full flex flex-row gap-5 justify-center"
      >
        {children.map((component, index) => (
          <Link
            key={`link-${index * 10}`}
            href={href[index]}
            target="_blank"
            className={className}
          >
            {component}
          </Link>
        ))}
      </div>
    );
  };

  const About = ({ children, className }: ElementProps) => {
    return (
      <section id="about" className={className}>
        {children}
      </section>
    );
  };

  const Projects = ({
    projectName,
    projectUrl,
    projectTitle,
    projectDescription,
    keyWords,
    boldWords,
  }: ProjectProps) => {
    interface ProjectLinkComponentProps
      extends Pick<ElementProps, "className"> {
      projectChildren: React.ReactNode;
    }

    const ProjectLinkComponent = ({
      projectChildren,
      className,
    }: ProjectLinkComponentProps) => {
      return (
        <Link href={projectUrl} target="_blank" className={className}>
          {projectChildren}
        </Link>
      );
    };

    const Paragraph = () => {
      const words: (React.ReactNode | string)[] = projectDescription.split(" ");

      const updateWords = (wordsKeys: string[]) => {
        const indexesKeyWords = wordsKeys.reduce((acc, indexWord) => {
          words.forEach((word, index) => {
            if (indexWord === word) acc.push(index);
          });

          return acc;
        }, [] as number[]);
        indexesKeyWords.forEach((wordIndex) => {
          words[wordIndex] = <strong>{words[wordIndex]}</strong>;
        });
      };
      updateWords(boldWords);
      updateWords(keyWords);

      return words.map((word) => <React.Fragment>{word} </React.Fragment>);
    };

    return (
      <section id={projectName} className="flex flex-row gap-7 font-medium">
        <ProjectLinkComponent
          projectChildren={
            <img
              src={`/images/projects/${projectName}.png`}
              alt={projectName}
              className="w-44 border-[2px] border-link"
            />
          }
        />
        <div id="projet-1" className="max-w-[407px]">
          <ProjectLinkComponent
            projectChildren={projectTitle}
            className="font-medium"
          />
          <p>
            <Paragraph />
          </p>
        </div>
      </section>
    );
  };

  const Experience = () => {
    return (
      <section className="flex flex-row justify-between">
        <h2 className="uppercase font-medium">2025 - Home-office</h2>
        <p className="max-w-[411px]">
          Estou desenvolvendo um site de agendamentos para diversos prestadores
          de serviços, incluindo barbeiros, salões e outros segmentos. Este foi
          e está sendo meu primeiro projeto com{" "}
          <span className="font-medium">NextJS</span>, onde aprofundei
          conhecimentos em hooks e requisições API, criando uma{" "}
          <span className="font-medium">
            solução intuitiva e escalável para o gerenciamento de reservas.
          </span>
        </p>
      </section>
    );
  };

  const Sections = ({ children }: ElementProps) => {
    return (
      <div
        id="container-sections"
        className="flex flex-col gap-[100px] p-[93px] text-justify text-[0.83em]"
      >
        {children.map((child, index) => {
          return (
            <>
              {child}
              {index !== children.length - 1 && (
                <hr className="border-dotted opacity-25" />
              )}
            </>
          );
        })}
      </div>
    );
  };

  return (
    <div id="container" className="flex flex-row max-w-7xl m-auto">
      <header className="fixed w-[537px] h-screen px-[110px] py-[70px] flex flex-col justify-between items-start">
        <div id="title" className="flex flex-col max-w-[317px]">
          <h1 className="text-[64px] font-semibold">Valdenor</h1>
          <p className="text-[15px] font-medium">
            Front End com experiência crescente e foco em resultados
          </p>
        </div>
        <nav className="relative">
          <Ul
            children={["Sobre", "Projetos", "Experiência"]}
            className="opacity-50 uppercase flex flex-col gap-5"
          />
        </nav>
        <Anchor
          children={[<AiFillGithub />, <AiFillLinkedin />, <AiFillInstagram />]}
          className="text-[33px] text-white"
          href={[
            "https://github.com/srnerdoso",
            "https://www.linkedin.com/in/valdenor-filho-8b4942350/",
            "https://www.instagram.com/srnerdoso/",
          ]}
        />
      </header>
      <div
        id="line"
        className="fixed ml-[537px] flex justify-center items-center h-screen"
      >
        <hr className="w-[1px] h-[92vh] bg-white border-none" />
      </div>
      <main className="ml-[537px]">
        <Sections
          children={[
            <About
              children={[
                <p>
                  Sou um desenvolvedor em início de carreira, focado em criar
                  <span className="font-medium">
                    {" "}
                    soluções funcionais e bem estruturadas.
                  </span>{" "}
                  Atualmente, estou desenvolvendo um projeto pessoal que me
                  permite explorar e aplicar habilidades com NextJS, sempre
                  buscando entregar resultados de qualidade. Embora este projeto
                  ainda não esteja público, ele reflete minha dedicação e
                  compromisso em aprender e crescer como profissional. Se você
                  precisa de alguém criativo, detalhista e com vontade de
                  transformar ideias em realidade, estou pronto para começar!
                </p>,
              ]}
            />,
            <Projects
              projectTitle="Mapa Paroquial - Paróquia Nossa Senhora dos Remédios"
              projectDescription="Criei um mapa municipal interativo das comunidades católicas de uma paróquia, com rotas dinâmicas que centralizam o trajeto selecionado. Desenvolvido em NextJS, o projeto utiliza Leaflet JS para a geração de tiles do mapa e a API OSRM para as rotas, proporcionando uma experiência prática e um aprendizado aprofundado em dados geográficos."
              projectUrl="https://pnsdremedios-map.vercel.app/"
              projectName="project1"
              keyWords={["NextJS", "LeafletJS", "OSRM"]}
              boldWords={["mapa", "municipal"]}
            />,
            <Experience />,
          ]}
        />
      </main>
    </div>
  );
}
