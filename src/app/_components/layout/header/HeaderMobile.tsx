import Anchor from "../../Anchor";
import Ul from "./components/export";
import HeaderProps from "./props";
import getCurrentEntryId from "./utils/getCurrentEntryId";

interface HeaderMobileProps extends HeaderProps {
  containerWidth: number;
}

export default function Header({
  navChildrenArr,
  entryes,
  socials,
  containerWidth,
}: HeaderMobileProps) {
  return (
    <header
      className="flex flex-col items-center justify-center w-full shadow-xl"
      style={{
        height: `${containerWidth}px`,
      }}
    >
      <div
        id="title-anchors-container"
        className="flex flex-col items-center justify-center gap-[50px] h-full"
      >
        <div
          id="title"
          className="px-[50px] flex flex-col items-center justify-center gap-5 leading-none"
        >
          <h1 className="text-[64px] text-center font-semibold">Valdenor</h1>
          <p className="text-[16px] text-center font-medium ">
            Front End com experiência crescente e foco em resultados
          </p>
        </div>
        <Anchor
          className="text-[33px] w-[33px] h-[33px] text-white opacity-50 transition hover:opacity-100 ease-in-out duration-75 flex"
          href={socials[1] as string[]}
          type="other"
        >
          {socials[0]}
        </Anchor>
      </div>
      <nav>
        <Ul.Mobile
          type="about"
          childrenArr={navChildrenArr}
          activeSectionId={getCurrentEntryId(entryes) as string}
        />
      </nav>
    </header>
  );
}
