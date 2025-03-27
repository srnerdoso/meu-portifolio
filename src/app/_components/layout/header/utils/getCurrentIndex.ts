const getCurrentIndex = (
  li: string,
  whenTrue: string | number,
  whenFalse: string | number,
  activeSectionId: string
) => {
  switch (true) {
    case activeSectionId === "about" && li === "Sobre":
      return whenTrue;
    case activeSectionId === "projects" && li === "Projetos":
      return whenTrue;
    case activeSectionId === "experience" && li === "Experiência":
      return whenTrue;
    default:
      return whenFalse;
  }
};
export default getCurrentIndex;
