import DivProps from "./interfaces/DivProps";
import Paragraph, { ParagraphProps } from "./Paragraph";

export interface AboutProps extends ParagraphProps, DivProps {}

export default function About({
  className,
  paragraphWords,
  boldWords,
  keyWords,
  ref,
}: AboutProps) {
  return (
    <section ref={ref} id="about" className={className}>
      <div id="about-container">
        <h2 className="sr-only">Sobre</h2>
        <Paragraph
          paragraphWords={paragraphWords}
          boldWords={boldWords}
          keyWords={keyWords}
        />
      </div>
    </section>
  );
}
