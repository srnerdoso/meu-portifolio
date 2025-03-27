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

  Effect.useShouldLigth(containerWidth, setShouldRender);
  Effect.useBodyScrollLock(containerRef);
  Effect.useGetWidth(containerRef, setContainerWidth);

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
        {containerWidth > 1024 ? (
          <HeaderPC
            entryes={obsverEntryes}
            navChildrenArr={navChildrenArr}
            socials={socials}
          />
        ) : (
          <HeaderMobile
            containerWidth={containerWidth}
            entryes={obsverEntryes}
            navChildrenArr={navChildrenArr}
            socials={socials}
            ref={headerRef}
            inView={headerInView}
          />
        )}
        <div
          id="line"
          className="sticky top-0 flex justify-center items-center h-screen max-xl:hidden"
        >
          <hr className="w-[1px] h-[80vh] bg-white border-none" />
        </div>
        <main className="flex flex-col px-[93px] text-justify text-[16px] max-xl:px-10">
          <About items={aboutItems} ref={aboutRef} />
          <Divider />
          <Sections.Projects items={projectsItems} ref={projectsRef} />
          <Divider />
          <Sections.Experience items={experienceItems} ref={experienceRef} />
          <Divider />
          <ContactForm ref={contactRef} />
        </main>
      </div>
      {!shouldRender && !headerInView && (
        <footer className="flex items-center justify-center w-full fixed bottom-0 py-[10px]">
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
