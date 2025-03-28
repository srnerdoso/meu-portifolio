export interface ExperienceItem {
  header: string;
  children: React.ReactNode;
}

export default function Experience({
  items,
  ref,
  sectionsStyle,
}: {
  items: ExperienceItem[];
  ref: (node?: Element | null) => void;
  sectionsStyle: React.CSSProperties;
}) {
  return (
    <section
      id="experience"
      ref={ref}
      className="flex flex-col justify-center items-center gap-40"
      style={sectionsStyle}
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
