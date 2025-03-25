export interface ExperienceItem {
  header: string;
  children: React.ReactNode;
}

export default function Experience({ items }: { items: ExperienceItem[] }) {
  return (
    <section
      id="experience"
      className="flex flex-col justify-center items-center py-[30vh] gap-40 max-xl:py-[20vh]"
    >
      {items.map((item, index) => (
        <div key={`experience-${index}`}>
          <h3 className="uppercase font-medium">{item.header}</h3>
          {item.children}
        </div>
      ))}
    </section>
  );
}
