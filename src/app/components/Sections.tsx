import ElementProps from "./interfaces/ElementsProps";

export default function Sections({ children }: ElementProps) {
  return (
    <div
      id="container-sections"
      className="flex flex-col gap-[100px] p-[93px] text-justify text-[0.83em]"
    >
      {children.map((child, index) => {
        return (
          <>
            {child}
            {index !== children.length - 1 && (
              <hr className="border-dotted opacity-25" />
            )}
          </>
        );
      })}
    </div>
  );
}
