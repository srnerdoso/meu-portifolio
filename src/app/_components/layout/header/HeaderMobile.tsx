import Anchor from "../../Anchor";
import Ul from "./components/export";
import HeaderProps from "./props";
import getCurrentEntryId from "./utils/getCurrentEntryId";

interface HeaderMobileProps extends HeaderProps {
  containerWidth: number;
  ref: (node?: Element | null) => void;
  inView: boolean;
}

export default function Header({
  navChildrenArr,
  entryes,
  socials,
  containerWidth,
  ref,
  inView,
}: HeaderMobileProps) {
  return (
    <header
      ref={ref}
      className="flex flex-col items-center justify-center w-full"
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
          <h1 className="text-[3.5em] text-center font-semibold">Valdenor</h1>
          <p className="text-[0.8em] text-center font-medium ">
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
      <nav
        className="bg-background w-full flex items-center justify-center shadow-xl z-50"
        style={{
          paddingBottom: !inView ? "10px" : "20px",
          paddingTop: !inView ? "10px" : 0,
          position: !inView ? "fixed" : "static",
          top: !inView ? "0" : "auto",
          transition: "ease-in-out",
          transform: "translateY(0)",
          transitionDuration: "0.05s",
        }}
      >
        <Ul.Mobile
          childrenArr={navChildrenArr}
          activeSectionId={getCurrentEntryId(entryes) as string}
        />
      </nav>
    </header>
  );
}
