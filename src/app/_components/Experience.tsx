import SectionsProps from "./interfaces/SectionsProps";
import Paragraph, { ParagraphProps } from "./Paragraph";

export interface ExperienceItem
  extends Pick<
    ParagraphProps & SectionsProps,
    "keyWords" | "boldWords" | "description"
  > {
  header: string;
}

export default function Experience({ items }: { items: ExperienceItem[] }) {
  return (
    <section
      id="experience"
      className="flex flex-col justify-center items-center py-[30vh] gap-40 max-xl:py-[20vh]"
    >
      {items.map((item, index) => (
        <div key={`experience-${index}`}>
          <h3 className="uppercase font-medium">{item.header}</h3>
          <Paragraph
            paragraphWords={item.description}
            keyWords={item.keyWords}
            boldWords={item.boldWords}
          />
        </div>
      ))}
    </section>
  );
}
