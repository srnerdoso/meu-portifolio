import DivProps from "./interfaces/DivProps";
import Paragraph, { ParagraphProps } from "./Paragraph";

export interface ExperienceProps
  extends Pick<ParagraphProps & DivProps, "keyWords" | "boldWords" | "ref"> {
  experienceHeader: string;
  experienceDescription: string;
}

export default function Experience({
  experienceHeader,
  experienceDescription,
  keyWords,
  boldWords,
  ref,
}: ExperienceProps) {
  return (
    <section ref={ref} id="experience" className="flex flex-row justify-between">
      <h2 className="sr-only">Experiência</h2>
      <div>
        <h3 className="uppercase font-medium">{experienceHeader}</h3>
        <Paragraph
          paragraphWords={experienceDescription}
          keyWords={keyWords}
          boldWords={boldWords}
        />
      </div>
    </section>
  );
}
