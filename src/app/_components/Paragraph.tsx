import ElementProps from "./interfaces/ElementsProps";
import React from "react";

export interface ParagraphProps extends Pick<ElementProps, "className"> {
  paragraphWords: string;
  keyWords: string[];
  boldWords: string[];
}

export default function Paragraph({
  paragraphWords,
  keyWords,
  boldWords,
}: ParagraphProps) {
  const words: (React.ReactNode | string)[] = paragraphWords.split(" ");

  const updateWords = (wordsKeys: string[], wordType: "span" | "strong") => {
    wordsKeys.forEach((wordKey) => {
      const wordIndex = words.indexOf(wordKey);
      if (wordIndex !== -1) {
        words[wordIndex] =
          wordType === "span" ? (
            <span className="font-bold">{words[wordIndex]}</span>
          ) : (
            <strong className="font-bold">{words[wordIndex]}</strong>
          );
      }
    });
  };
  updateWords(boldWords, "span");
  updateWords(keyWords, "strong");

  return words.map((word, index) => (
    <React.Fragment key={`word-${index}`}>{word} </React.Fragment>
  ));
}
