"use client";

import Anchor from "./_components/Anchor";
import Ligth from "./_components/Ligth";
import Divider from "./_components/Divider";
import Sections from "./_components/sections/Sections";
import Effect from "./ts/Effect";
import {
  navChildrenArr,
  experienceItems,
  projectsItems,
  socials,
} from "./_data/data";
import ContactForm from "./_components/ContactForm";
import HeaderPC from "./_components/layout/header/HeaderPC";
import About from "./_components/sections/About";
import { aboutItems } from "./_data/sectionsData";
import { useInView } from "react-intersection-observer";
import HeaderMobile from "./_components/layout/header/HeaderMobile";
import { useRef, useState } from "react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [shouldRender, setShouldRender] = useState(true);
  const [orientation, setOrientation] = useState<OrientationType>();

  // Depois que terminar, mover todas as novas funções para um arquivo separado e exportar

  const isPortrait = (whenTrue: string, whenFalse: string) => {
    return orientation === "portrait-primary" ? whenTrue : whenFalse;
  };

  const sectionsStyle = () => {
    const setSectionsStyle = (styleValue: string | number) => {
      return shouldRender ? styleValue : isPortrait("100vh", "");
    };
    const paddingY = setSectionsStyle(0);

    return {
      height: setSectionsStyle("100vh"),
      paddingTop: paddingY,
      paddingBottom: paddingY,
    } as React.CSSProperties;
  };

  Effect.useShouldLigth(containerWidth, setShouldRender);
  Effect.useBodyScrollLock(containerRef);
  Effect.useUpdateStates(containerRef, setContainerWidth, setOrientation);

  const { ref: headerRef, inView: headerInView } = useInView({
    threshold: 0.05,
  });
  const { ref: aboutRef, entry: aboutEntry } = useInView({ threshold: 0.1 });
  const { ref: projectsRef, entry: projectsEntry } = useInView({
    threshold: 0.1,
  });
  const { ref: experienceRef, entry: experienceEntry } = useInView({
    threshold: 0.1,
  });
  const { ref: contactRef, entry: contactEntry } = useInView({
    threshold: 0.1,
  });

  const obsverEntryes = [
    aboutEntry,
    projectsEntry,
    experienceEntry,
    contactEntry,
  ];

  return (
    <div ref={containerRef} className="m-0 p-0">
      {!containerRef.current && (
        <div className="fixed inset-0 w-screen z-50 flex items-center justify-center bg-background space-x-2">
          <div className="h-3 w-3 bg-blue-600 rounded-full animate-bounce"></div>
          <div className="h-3 w-3 bg-blue-600 rounded-full animate-bounce delay-100"></div>
          <div className="h-3 w-3 bg-blue-600 rounded-full animate-bounce delay-200"></div>
        </div>
      )}

      {shouldRender && <Ligth containerRef={containerRef} />}

      <div
        id="layout"
        className="relative flex flex-row max-w-7xl m-auto max-xl:flex-col max-xl:w-full"
      >
        {containerWidth > 1280 ? (
          <HeaderPC
            entryes={obsverEntryes}
            navChildrenArr={navChildrenArr}
            socials={socials}
          />
        ) : (
          <HeaderMobile
            entryes={obsverEntryes}
            navChildrenArr={navChildrenArr}
            socials={socials}
            ref={headerRef}
            inView={headerInView}
            isPortrait={isPortrait}
          />
        )}

        {shouldRender && (
          <div
            id="line"
            className="sticky top-0 flex justify-center items-center h-screen"
          >
            <hr className="w-[1px] h-[80vh] bg-white border-none" />
          </div>
        )}

        <main className="flex flex-col px-[93px] text-justify text-[16px] max-xl:px-10">
          <About
            items={aboutItems}
            ref={aboutRef}
            sectionsStyle={sectionsStyle()}
          />
          <Divider />
          <Sections.Projects
            items={projectsItems}
            ref={projectsRef}
            sectionsStyle={sectionsStyle()}
          />
          <Divider />
          <Sections.Experience
            items={experienceItems}
            ref={experienceRef}
            sectionsStyle={sectionsStyle()}
          />
          <Divider />
          <ContactForm ref={contactRef} sectionsStyle={sectionsStyle()} />
        </main>
      </div>
      {!shouldRender && (
        <footer className="flex items-center justify-center w-full py-[10px]">
          <Anchor
            className="text-[33px] text-white opacity-50 transition hover:opacity-100 ease-in-out duration-75"
            href={socials[1] as string[]}
            type="other"
          >
            {socials[0]}
          </Anchor>
        </footer>
      )}
    </div>
  );
}
