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
import Link from "next/link";

type SectionsRef = HTMLDivElement | null;

export default function Home() {
  const aboutRef = useRef<SectionsRef>(null);
  const projectRef = useRef<SectionsRef>(null);
  const experienceRef = useRef<SectionsRef>(null);

  const ulRef = useRef<HTMLLIElement[]>([]);

  const [isVisible, setIsVisible] = useState<
    Record<"about" | "projects" | "experience", boolean>
  >({ about: true, projects: false, experience: false });

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

  return (
    <>
      <Ligth />
      <div id="container" className="relative flex flex-row max-w-7xl m-auto">
        <header className="sticky top-0 max-w-[537px] h-screen px-[110px] py-[70px] flex flex-col justify-between items-start">
          <div id="title" className="flex flex-col max-w-[317px]">
            <h1 className="text-[64px] font-semibold">Valdenor</h1>
            <p className="text-[15px] font-medium">
              Front End com experiência crescente e foco em resultados
            </p>
          </div>
          <nav className="relative">
            <Ul
              elementChildren={["Sobre", "Projetos", "Experiência"]}
              className="uppercase font-medium flex flex-col gap-5 cursor-pointer select-none"
              ulRef={ulRef}
              activeIndex={Object.values(isVisible).findIndex((value) => value)}
            />
          </nav>
          <Anchor
            elementChildren={[
              <AiFillGithub key={"iconGithub"} />,
              <AiFillLinkedin key={"iconLinkedin"} />,
              <AiFillInstagram key={"iconInstagram"} />,
            ]}
            className="text-[33px] text-white opacity-50 transition hover:opacity-100 ease-in-out duration-75"
            href={[
              "https://github.com/srnerdoso",
              "https://www.linkedin.com/in/valdenor-filho-8b4942350/",
              "https://www.instagram.com/srnerdoso/",
            ]}
          />
        </header>
        <div
          id="line"
          className="sticky top-0 flex justify-center items-center h-screen"
        >
          <hr className="w-[1px] h-[92vh] bg-white border-none" />
        </div>
        <main className="flex flex-col px-[93px] text-justify text-[0.83em]">
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
      </div>
    </>
  );
}
