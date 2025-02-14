import Paragraph, { ParagraphProps } from "./Paragraph";

export default function About({
  className,
  paragraphWords,
  boldWords,
  keyWords,
}: ParagraphProps) {
  return (
    <section id="about" className={className}>
      <h2 className="sr-only">Sobre</h2>
      <Paragraph
        paragraphWords={paragraphWords}
        boldWords={boldWords}
        keyWords={keyWords}
      />
    </section>
  );
}
