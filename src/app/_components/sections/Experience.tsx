export interface ExperienceItem {
  header: string;
  children: React.ReactNode;
}

export default function Experience({
  items,
  ref,
}: {
  items: ExperienceItem[];
  ref: (node?: Element | null) => void;
}) {
  return (
    <section
      id="experience"
      ref={ref}
      className="flex flex-col justify-center items-center h-screen gap-40 max-xl:py-[20vh]"
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
