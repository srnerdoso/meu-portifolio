"use client";

import Anchor from "./_components/Anchor";
import Ligth from "./_components/Ligth";
import Divider from "./_components/Divider";
import Sections from "./_components/Sections";
import { useEffects, useRefs, useStates } from "./ts/hooks";
import {
  navChildrenArr,
  experienceItems,
  projectsItems,
  socials,
} from "./_data/data";
import Ul from "./_components/ts/Ul";
import Span from "./_components/Span";
import ContactForm from "./_components/ContactForm";

export default function Home() {
  const { containerRef, mainRef, headerRef, ulRef, footerRef } = useRefs();
  const {
    isVisible,
    setIsVisible,
    headerVisible,
    setHeaderVisible,
    containerWidth,
    setContainerWidth,
  } = useStates();

  useEffects.useVisibilityEffect(
    containerRef,
    setContainerWidth,
    mainRef,
    setIsVisible,
    isVisible,
    ulRef
  );
  useEffects.useHeaderVisibleEffect(headerRef, setHeaderVisible, headerVisible);

  return (
    <div ref={containerRef} className="m-0 p-0">
      <Ligth containerRef={containerRef} headerRef={headerRef} />
      <div
        id="layout"
        className="relative flex flex-row max-w-7xl m-auto max-xl:flex-col max-xl:w-full"
      >
        <div
          id="header-container"
          className="sticky top-0 flex max-xl:static max-xl:m-auto min-xl:hidden max-xl:shadow-lg max-xl:w-full max-xl:h-[50vh] max-xl:justify-center"
        >
          <header
            ref={headerRef}
            className="sticky top-0 max-w-[537px] h-screen px-[110px] py-[70px] flex flex-col justify-between items-start max-xl:p-0 max-xl:static max-xl:w-full max-xl:h-full max-xl:justify-center"
          >
            <div
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
              {containerWidth > 1280 ? (
                <Ul.Pc
                  childrenArr={navChildrenArr}
                  className="uppercase font-medium flex flex-col gap-5 cursor-pointer select-none"
                  ulRef={ulRef}
                  activeIndex={Object.values(isVisible).findIndex(
                    (value) => value
                  )}
                />
              ) : (
                <Ul.Mobile
                  childrenArr={navChildrenArr}
                  className="uppercase font-medium flex flex-row justify-center gap-2 cursor-pointer select-none"
                  activeIndex={Object.values(isVisible).findIndex(
                    (value) => value
                  )}
                />
              )}
            </nav>
            <Anchor
              className="text-[33px] text-white opacity-50 transition hover:opacity-100 ease-in-out duration-75"
              href={socials[1] as string[]}
              type="header"
            >
              {socials[0]}
            </Anchor>
          </header>
        </div>

        <div
          id="line"
          className="sticky top-0 flex justify-center items-center h-screen max-xl:hidden"
        >
          <hr className="w-[1px] h-[80vh] bg-white border-none" />
        </div>

        <main
          ref={mainRef}
          className="flex flex-col px-[93px] text-justify text-xs max-xl:px-10"
        >
          <section
            id="about"
            className="py-[30vh] flex justify-center items-center max-xl:py-[20vh]"
          >
            <p>
              Sou um desenvolvedor em início de carreira, focado em criar{" "}
              <Span>soluções funcionais e bem estruturadas</Span>. Atualmente,
              estou desenvolvendo um projeto pessoal que me permite explorar e
              aplicar habilidades com <strong>NextJS</strong>, sempre buscando
              entregar resultados de qualidade. Embora este projeto ainda não
              esteja público, ele reflete minha dedicação e compromisso em
              aprender e crescer como profissional. Se você precisa de alguém
              criativo, detalhista e com vontade de transformar ideias em
              realidade, estou pronto para começar!
            </p>
          </section>
          <Divider />
          <Sections.Projects items={projectsItems} />
          <Divider />
          <Sections.Experience items={experienceItems} />
          <Divider />
          <ContactForm />
        </main>
      </div>
      <footer
        ref={footerRef}
        className={`hidden max-xl:${
          headerVisible ? "hidden" : "flex"
        } items-center justify-center h-10 w-full sticky bottom-0`}
      >
        <Anchor
          className="text-[33px] text-white opacity-50 transition hover:opacity-100 ease-in-out duration-75"
          href={socials[1] as string[]}
          type="footer"
        >
          {socials[0]}
        </Anchor>
      </footer>
    </div>
  );
}
