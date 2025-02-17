import ElementProps from "./interfaces/ElementsProps";

export default function Sections({ elementChildren }: ElementProps) {
  return (
    <div
      id="container-sections"
      className="flex flex-col gap-[100px] p-[93px] text-justify text-[0.83em]"
    >
      {elementChildren.map((child, index) => {
        return (
          <div key={`divLigth-${index}`}>
            {child}
            {index !== elementChildren.length - 1 && (
              <hr className="border-dotted opacity-25" />
            )}
          </div>
        );
      })}
    </div>
  );
}
