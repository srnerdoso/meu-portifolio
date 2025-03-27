const getCurrentEntryId = (
  entryes: (IntersectionObserverEntry | undefined)[]
) => {
  const [about, projects, experience, contact] = entryes;
  if (!about || !projects || !experience || !contact) return "";

  const aboutRatio = Number(about.intersectionRatio.toFixed(3));
  const projectsRatio = Number(projects.intersectionRatio.toFixed(3));
  const experienceRatio = Number(experience.intersectionRatio.toFixed(3));
  const contactRatio = Number(contact.intersectionRatio.toFixed(3));

  switch (true) {
    case aboutRatio > projectsRatio &&
      aboutRatio > experienceRatio &&
      aboutRatio > contactRatio:
      return about.target.id;
    case projectsRatio > aboutRatio &&
      projectsRatio > experienceRatio &&
      projectsRatio > contactRatio:
      return projects.target.id;
    case experienceRatio > aboutRatio &&
      experienceRatio > projectsRatio &&
      experienceRatio > contactRatio:
      return experience.target.id;
    case contactRatio > aboutRatio &&
      contactRatio > projectsRatio &&
      contactRatio > experienceRatio:
      return contact.target.id;
    default:
      return "";
  }
};
export default getCurrentEntryId;
