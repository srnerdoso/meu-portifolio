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
    const indexesKeyWords = wordsKeys.reduce((acc, indexWord) => {
      words.forEach((word, index) => {
        if (indexWord === word) acc.push(index);
      });

      return acc;
    }, [] as number[]);
    indexesKeyWords.forEach((wordIndex, index) => {
      wordType === "span"
        ? (words[wordIndex] = (
            <span className="font-bold">{words[wordIndex]}</span>
          ))
        : (words[wordIndex] = <strong className="font-bold">{words[wordIndex]}</strong>);
    });
  };
  updateWords(boldWords, "span");
  updateWords(keyWords, "strong");

  return words.map((word, index) => <React.Fragment key={`word-${index}`}>{word} </React.Fragment>);
}
