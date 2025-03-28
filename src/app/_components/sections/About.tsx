import IsPortrait from "@/app/types/IsPortrait";

export default function About({
  items,
  ref,
  sectionsStyle,
}: {
  items: React.ReactNode;
  ref: (node?: Element | null) => void;
  sectionsStyle: React.CSSProperties;
}) {
  return (
    <section
      id="about"
      ref={ref}
      className="flex justify-center items-center max-xl:py-[20vh]"
      style={sectionsStyle}
    >
      {items}
    </section>
  );
}
