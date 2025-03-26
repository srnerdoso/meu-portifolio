"use client";

import Anchor from "./_components/Anchor";
import Ligth from "./_components/Ligth";
import Divider from "./_components/Divider";
import Sections from "./_components/sections/Sections";
import { useEffects, useRefs, useStates } from "./ts/hooks";
import {
  navChildrenArr,
  experienceItems,
  projectsItems,
  socials,
} from "./_data/data";
import ContactForm from "./_components/ContactForm";
import Header from "./_components/layout/header/Header";
import About from "./_components/sections/About";
import { aboutItems } from "./_data/sectionsData";

export default function Home() {
  const { containerRef, mainRef, headerRef, ulRef, footerRef } = useRefs();

  const {
    currentSection,
    setCurrentSection,
    headerVisible,
    setHeaderVisible,
    containerWidth,
    setContainerWidth,
    shouldRender,
    setShouldRender,
  } = useStates();

  useEffects.useVisibilityEffect(
    containerRef,
    setContainerWidth,
    mainRef,
    setCurrentSection,
    currentSection,
    ulRef
  );
  useEffects.useHeaderVisibleEffect(headerRef, setHeaderVisible, headerVisible);
  useEffects.useShouldLigth(containerWidth, setShouldRender);
  useEffects.useBodyScrollLock(containerRef);

  return (
    <div ref={containerRef} className="m-0 p-0">
      {!containerRef.current && (
        <div className="fixed inset-0 w-screen z-50 flex items-center justify-center bg-background space-x-2">
          <div className="h-3 w-3 bg-blue-600 rounded-full animate-bounce"></div>
          <div className="h-3 w-3 bg-blue-600 rounded-full animate-bounce delay-100"></div>
          <div className="h-3 w-3 bg-blue-600 rounded-full animate-bounce delay-200"></div>
        </div>
      )}

      {shouldRender && (
        <Ligth
          containerRef={containerRef}
          headerRef={headerRef}
          containerWidth={containerWidth}
        />
      )}

      <div
        id="layout"
        className="relative flex flex-row max-w-7xl m-auto max-xl:flex-col max-xl:w-full"
      >
        <Header
          headerRef={headerRef}
          containerWidth={containerWidth}
          navChildrenArr={navChildrenArr}
          ulRef={ulRef}
          currentSection={currentSection}
        />
        <div
          id="line"
          className="sticky top-0 flex justify-center items-center h-screen max-xl:hidden"
        >
          <hr className="w-[1px] h-[80vh] bg-white border-none" />
        </div>
        <main
          ref={mainRef}
          className="flex flex-col px-[93px] text-justify text-[16px] max-xl:px-10"
        >
          <About items={aboutItems} />
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
