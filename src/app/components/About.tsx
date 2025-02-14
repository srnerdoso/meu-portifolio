import Paragraph, { ParagraphProps } from "./Paragraph";

export default function About({
  className,
  paragraphWords,
  boldWords,
  keyWords,
}: ParagraphProps) {
  return (
    <section id="about" className={className}>
      <Paragraph
        paragraphWords={paragraphWords}
        boldWords={boldWords}
        keyWords={keyWords}
      />
    </section>
  );
}
