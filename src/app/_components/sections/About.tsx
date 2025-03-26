export default function About({ items }: { items: React.ReactNode }) {
  return (
    <section
      id="about"
      className="py-[30vh] flex justify-center items-center max-xl:py-[20vh]"
    >
      {items}
    </section>
  );
}
