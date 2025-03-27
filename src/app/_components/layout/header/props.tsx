import { JSX } from "react";

export default interface HeaderProps {
  navChildrenArr: string[];
  entryes: (IntersectionObserverEntry | undefined)[];
  socials: (string[] | JSX.Element[])[];
}
