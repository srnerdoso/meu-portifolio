interface UlProps {
  children: React.ReactNode[];
  className: string;
}

export default function Home() {
  const Ul = ({ children, className }: UlProps) => {
    return (
      <ul className={className}>
        {children.map((li, index) => (
          <li key={`li-${index}`}>
            <img key={`img-${index}`} src="/line1.svg" />
            {li}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <main>
      <header className="p-28">
        <div className="flex flex-col w-[317px]">
          <h1 className="text-[64px] w-80 font-semibold">Valdenor</h1>
          <p className="text-[15px] font-medium">
            Front End com experiência crescente e foco em resultados
          </p>
        </div>
        <nav>
          <Ul
            children={["Sobre", "Projetos", "Experiência"]}
            className="opacity-50 uppercase"
          />
        </nav>
      </header>
    </main>
  );
}
