export default function About({
  items,
  ref,
}: {
  items: React.ReactNode;
  ref: (node?: Element | null) => void;
}) {
  return (
    <section
      id="about"
      ref={ref}
      className="h-screen flex justify-center items-center max-xl:py-[20vh]"
    >
      {items}
    </section>
  );
}
