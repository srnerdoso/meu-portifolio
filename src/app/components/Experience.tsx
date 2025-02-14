import Paragraph, { ParagraphProps } from "./Paragraph";

interface ExperienceProps
  extends Pick<ParagraphProps, "keyWords" | "boldWords"> {
  experienceHeader: string;
  experienceDescription: string;
}

export default function Experience({
  experienceHeader,
  experienceDescription,
  keyWords,
  boldWords,
}: ExperienceProps) {
  return (
    <section className="flex flex-row justify-between">
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
