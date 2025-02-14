"use client"

import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import About from "./_components/About";
import Anchor from "./_components/Anchor";
import Experience from "./_components/Experience";
import Projects from "./_components/Projects";
import Sections from "./_components/Sections";
import Ul from "./_components/Ul";
import Ligth from "./_components/Ligth";

export default function Home() {
  return (
    <>
      <Ligth />
      <div id="container" className="relative flex flex-row max-w-7xl m-auto">
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
            children={[
              <AiFillGithub />,
              <AiFillLinkedin />,
              <AiFillInstagram />,
            ]}
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
                paragraphWords="Sou um desenvolvedor em início de carreira, focado em criar soluções funcionais e bem estruturadas. Atualmente, estou desenvolvendo um projeto pessoal que me permite explorar e aplicar habilidades com NextJS, sempre buscando entregar resultados de qualidade. Embora este projeto ainda não esteja público, ele reflete minha dedicação e compromisso em aprender e crescer como profissional. Se você precisa de alguém criativo, detalhista e com vontade de transformar ideias em realidade, estou pronto para começar!"
                keyWords={["NextJS,"]}
                boldWords={["soluções", "funcionais", "bem", "estruturadas."]}
              />,
              <Projects
                projectTitle="Mapa Paroquial - Paróquia Nossa Senhora dos Remédios"
                projectDescription="Criei um mapa municipal interativo das comunidades católicas de uma paróquia, com rotas dinâmicas que centralizam o trajeto selecionado. Desenvolvido em NextJS, o projeto utiliza Leaflet JS para a geração de tiles do mapa e a API OSRM para as rotas, proporcionando uma experiência prática e um aprendizado aprofundado em dados geográficos."
                projectUrl="https://pnsdremedios-map.vercel.app/"
                projectName="project1"
                keyWords={["NextJS", "LeafletJS", "OSRM"]}
                boldWords={["mapa", "municipal"]}
              />,
              <Experience
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
              />,
            ]}
          />
        </main>
      </div>
    </>
  );
}
