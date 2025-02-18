import DivProps from "./interfaces/DivProps";
import Paragraph, { ParagraphProps } from "./Paragraph";

export default function About({
  className,
  paragraphWords,
  boldWords,
  keyWords,
  ref,
}: ParagraphProps & DivProps) {
  return (
    <section ref={ref} id="about" className={className}>
      <h2 className="sr-only">Sobre</h2>
      <Paragraph
        paragraphWords={paragraphWords}
        boldWords={boldWords}
        keyWords={keyWords}
      />
    </section>
  );
}
