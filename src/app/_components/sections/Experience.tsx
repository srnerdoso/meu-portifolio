export interface ExperienceItem {
  header: string;
  children: React.ReactNode;
}

export default function Experience({
  items,
  ref,
  sectionsStyle,
  styleMiddleSize,
}: {
  items: ExperienceItem[];
  ref: (node?: Element | null) => void;
  sectionsStyle: React.CSSProperties;
  styleMiddleSize: React.CSSProperties;
}) {
  return (
    <section
      id="experience"
      ref={ref}
      className="flex flex-col justify-center items-center gap-40"
      style={sectionsStyle}
    >
      {items.map((item, index) => (
        <div
          key={`experience-${index}`}
          className="flex gap-5"
          style={styleMiddleSize}
        >
          <h3 className="uppercase font-medium w-full">{item.header}</h3>
          {item.children}
        </div>
      ))}
    </section>
  );
}
