import DivProps from "./interfaces/DivProps";
import Paragraph, { ParagraphProps } from "./Paragraph";

interface ExperienceProps
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
    // tranformar em componente dinâmico
    <section
      ref={ref}
      id="experience"
      className="flex flex-col justify-center items-center py-[30vh] gap-40 max-xl:py-[20vh]"
    >
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
