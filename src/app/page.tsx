"use client";

import React, { useEffect, useRef, useState } from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import About from "./_components/About";
import Anchor from "./_components/Anchor";
import Experience from "./_components/Experience";
import Projects from "./_components/Projects";
import Ul from "./_components/Ul";
import Ligth from "./_components/Ligth";
import Divider from "./_components/Divider";

type SectionsRef = HTMLDivElement | null;

export default function Home() {
  const aboutRef = useRef<SectionsRef>(null);
  const projectRef = useRef<SectionsRef>(null);
  const experienceRef = useRef<SectionsRef>(null);

  const headerRef = useRef<HTMLHeadElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const ulRef = useRef<HTMLLIElement[]>([]);
  const footerRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState<
    Record<"about" | "projects" | "experience", boolean>
  >({ about: true, projects: false, experience: false });
  const [headerVisible, setHeaderVisible] = useState(true);

  const [windowWidth, setWindowWidth] = useState<number | 390>(390);

  useEffect(() => {
    if (window !== undefined) {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [windowWidth]);

  useEffect(() => {
    const observerToggle = (ref: React.RefObject<HTMLDivElement | null>) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible((prev) => ({
            ...prev,
            [String(ref.current?.id)]: entry.isIntersecting,
          }));
        },
        { threshold: 0.7 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }
    };

    observerToggle(aboutRef);
    observerToggle(projectRef);
    observerToggle(experienceRef);

    const updateUlVisibility = (
      index: 0 | 1 | 2,
      key: keyof typeof isVisible
    ) => {
      ulRef.current[index].className = isVisible?.[key]
        ? "transition duration-300 ease-in-out opacity-100 font-medium"
        : "transition duration-300 ease-in-out opacity-50";
    };

    updateUlVisibility(0, "about");
    updateUlVisibility(1, "projects");
    updateUlVisibility(2, "experience");
  }, [isVisible]);

  useEffect(() => {
    const currentHeader = headerRef.current;

    if (!currentHeader) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeaderVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (currentHeader) {
      observer.observe(currentHeader);
    }

    if (currentHeader) {
      const nav = currentHeader.children[1];

      if (headerVisible) {
        nav.className =
          "max-xl:static max-xl:w-full max-xl:order-3 max-xl:mt-auto";
      } else {
        nav.className =
          "max-xl:fixed max-xl:transition max-xl:ease-in-out max-xl:top-0 max-xl:w-full max-xl:bg-[#475F83] max-xl:items-center max-xl:justify-center max-xl:flex max-xl:left-1/2 max-xl:-translate-x-1/2 max-xl:z-50";
      }
    }

    return () => {
      if (currentHeader) {
        console.log(headerVisible);
        observer.unobserve(currentHeader);
      }
    };
  }, [headerVisible]);

  const socials = [
    [
      <AiFillGithub key={"iconGithub"} />,
      <AiFillLinkedin key={"iconLinkedin"} />,
      <AiFillInstagram key={"iconInstagram"} />,
    ],
    [
      "https://github.com/srnerdoso",
      "https://www.linkedin.com/in/valdenor-filho-8b4942350/",
      "https://www.instagram.com/srnerdoso/",
    ],
  ];
  return (
    <>
      <Ligth titleRef={titleRef} />
      <div
        id="container"
        className="relative flex flex-row max-w-7xl m-auto max-xl:flex-col max-xl:w-full"
      >
        <div
          id="header-container"
          className="sticky top-0 flex max-xl:static max-xl:m-auto min-xl:hidden max-xl:shadow-lg max-xl:w-full"
          style={{
            height: `${windowWidth < 1280 ? `${windowWidth}px` : "100vh"}`,
          }}
        >
          <header
            ref={headerRef}
            className="sticky top-0 max-w-[537px] h-screen px-[110px] py-[70px] flex flex-col justify-between items-start max-xl:p-0 max-xl:static max-xl:w-full max-xl:h-full max-xl:justify-center"
          >
            <div
              ref={titleRef}
              id="title"
              className="flex flex-col max-w-[317px] max-xl:mt-auto max-xl:mx-auto max-xl:max-w-40"
            >
              <h1 className="text-[64px] text-center font-semibold max-xl:text-[2em]">
                Valdenor
              </h1>
              <p className="text-[15px] font-medium max-xl:text-center max-xl:text-[0.5em]">
                Front End com experiência crescente e foco em resultados
              </p>
            </div>
            <nav className="relative">
              <Ul
                elementChildren={["Sobre", "Projetos", "Experiência"]}
                className="uppercase font-medium flex flex-col gap-2 cursor-pointer select-none max-xl:flex-row max-xl:text-xs max-xl:justify-center max-xl:py-2"
                ulRef={ulRef}
                windowWidth={windowWidth ?? 390}
                activeIndex={Object.values(isVisible).findIndex(
                  (value) => value
                )}
              />
            </nav>
            <Anchor
              elementChildren={socials[0]}
              className="text-[33px] text-white opacity-50 transition hover:opacity-100 ease-in-out duration-75"
              href={socials[1] as string[]}
              type="header"
            />
          </header>
        </div>

        <div
          id="line"
          className="sticky top-0 flex justify-center items-center h-screen max-xl:hidden"
        >
          <hr className="w-[1px] h-[80vh] bg-white border-none" />
        </div>

        <main className="flex flex-col px-[93px] text-justify text-xs max-xl:px-10">
          <About
            ref={aboutRef}
            paragraphWords="Sou um desenvolvedor em início de carreira, focado em criar soluções funcionais e bem estruturadas. Atualmente, estou desenvolvendo um projeto pessoal que me permite explorar e aplicar habilidades com NextJS, sempre buscando entregar resultados de qualidade. Embora este projeto ainda não esteja público, ele reflete minha dedicação e compromisso em aprender e crescer como profissional. Se você precisa de alguém criativo, detalhista e com vontade de transformar ideias em realidade, estou pronto para começar!"
            keyWords={["NextJS,"]}
            boldWords={["soluções", "funcionais", "bem", "estruturadas."]}
            className="py-[30vh] flex justify-center items-center"
          />

          <Divider />

          <Projects
            ref={projectRef}
            projectTitle="Mapa Paroquial - Paróquia Nossa Senhora dos Remédios"
            projectDescription="Criei um mapa municipal interativo das comunidades católicas de uma paróquia, com rotas dinâmicas que centralizam o trajeto selecionado. Desenvolvido em NextJS, o projeto utiliza Leaflet JS para a geração de tiles do mapa e a API OSRM para as rotas, proporcionando uma experiência prática e um aprendizado aprofundado em dados geográficos."
            projectUrl="https://pnsdremedios-map.vercel.app/"
            projectName="project1"
            keyWords={["NextJS", "LeafletJS", "API", "OSRM"]}
            boldWords={["mapa", "municipal"]}
          />

          <Divider />

          <Experience
            ref={experienceRef}
            experienceHeader="2025 - Home-office"
            experienceDescription="Estou desenvolvendo um site de agendamentos para diversos prestadores de serviços, incluindo barbeiros, salões e outros segmentos. Este foi e está sendo meu primeiro projeto com NextJS, onde aprofundei conhecimentos em hooks e requisições API, criando uma solução intuitiva e escalável para o gerenciamento de reservas."
            keyWords={["NextJS,", "API,", "hooks"]}
            boldWords={[
              "site",
              "agendamentos",
              "solução",
              "intuitiva",
              "escalável",
            ]}
          />
        </main>

        <footer
          ref={footerRef}
          className={`hidden max-xl:${
            headerVisible ? "hidden" : "flex"
          } items-center justify-center h-10 w-full sticky bottom-0`}
        >
          <Anchor
            elementChildren={socials[0]}
            className="text-[33px] text-white opacity-50 transition hover:opacity-100 ease-in-out duration-75"
            href={socials[1] as string[]}
            type="footer"
          />
        </footer>
      </div>
    </>
  );
}
