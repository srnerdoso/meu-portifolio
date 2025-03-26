import Anchor from "../../Anchor";
import { socials } from "@/app/_data/data";
import Ul from "./components/export";
import { RefObject } from "react";

export default function Header({
  headerRef,
  containerWidth,
  navChildrenArr,
  ulRef,
  currentSection,
}: {
  headerRef: RefObject<HTMLHeadElement | null>;
  containerWidth: number;
  navChildrenArr: string[];
  ulRef: RefObject<HTMLLIElement[]>;
  currentSection: Record<"about" | "projects" | "experience", boolean>;
}) {
  return (
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
          className="flex flex-col justify-end items-center max-w-[317px] max-xl:mt-auto max-xl:mx-auto max-xl:max-w-40"
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
              activeIndex={Object.values(currentSection).findIndex(
                (value) => value
              )}
            />
          ) : (
            <Ul.Mobile
              childrenArr={navChildrenArr}
              className="uppercase font-medium flex flex-row justify-center gap-2 cursor-pointer select-none"
              activeIndex={Object.values(currentSection).findIndex(
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
  );
}
