const getCurrentEntryId = (
  entryes: (IntersectionObserverEntry | undefined)[]
) => {
  const [about, projects, experience, contact] = entryes;
  if (!about || !projects || !experience || !contact) return "";

  const aboutRatio = Number(about.intersectionRatio.toFixed(3));
  const projectsRatio = Number(projects.intersectionRatio.toFixed(3));
  const experienceRatio = Number(experience.intersectionRatio.toFixed(3));
  const contactRatio = Number(contact.intersectionRatio.toFixed(3));

  const isGreaterThan = (
    bigger: number,
    smallers: [number, number, number]
  ) => {
    const isTrues: boolean[] = [];
    smallers.forEach((smaller) => isTrues.push(bigger > smaller));

    return isTrues[0] && isTrues[1] && isTrues[2] ? true : false;
  };

  switch (true) {
    case isGreaterThan(aboutRatio, [
      projectsRatio,
      experienceRatio,
      contactRatio,
    ]):
      return about.target.id;
    case isGreaterThan(projectsRatio, [
      aboutRatio,
      experienceRatio,
      contactRatio,
    ]):
      return projects.target.id;
    case isGreaterThan(experienceRatio, [
      aboutRatio,
      projectsRatio,
      contactRatio,
    ]):
      return experience.target.id;
    case isGreaterThan(contactRatio, [
      aboutRatio,
      projectsRatio,
      experienceRatio,
    ]):
      return contact.target.id;
    default:
      return "";
  }
};
export default getCurrentEntryId;
