import Anchor from "../../Anchor";
import Ul from "./components/export";
import HeaderProps from "./props";
import getCurrentEntryId from "./utils/getCurrentEntryId";

export default function HeaderPC({
  entryes,
  navChildrenArr,
  socials,
  ref,
}: HeaderProps) {
  return (
    <div id="header-container" className="sticky top-0 flex">
      <header
        ref={ref}
        id="header-pc"
        className="sticky top-0 max-w-[537px] h-screen px-[110px] py-[70px] flex flex-col justify-between items-start"
      >
        <div
          id="title"
          className="flex flex-col justify-end items-center max-w-[317px]"
        >
          <h1 className="text-[64px] text-center font-semibold">Valdenor</h1>
          <p className="text-[15px] font-medium">
            Front End com experiência crescente e foco em resultados
          </p>
        </div>
        <nav className="relative">
          <Ul.Pc
            childrenArr={navChildrenArr}
            activeSectionId={getCurrentEntryId(entryes) as string}
          />
        </nav>
        <Anchor
          className="text-[33px] text-white opacity-50 transition hover:opacity-100 ease-in-out duration-75"
          href={socials[1] as string[]}
          type="header-pc"
        >
          {socials[0]}
        </Anchor>
      </header>
    </div>
  );
}
