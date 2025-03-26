import { ExperienceItem } from "../_components/sections/Experience";
import { ProjectProps } from "../_components/sections/Projects";
import Span from "../_components/Span";

const aboutItems: React.ReactElement = (
  <p>
    Sou um desenvolvedor em início de carreira, focado em criar{" "}
    <Span>soluções funcionais e bem estruturadas</Span>. Atualmente, estou
    desenvolvendo um projeto pessoal que me permite explorar e aplicar
    habilidades com <strong>NextJS</strong>, sempre buscando entregar resultados
    de qualidade. Embora este projeto ainda não esteja público, ele reflete
    minha dedicação e compromisso em aprender e crescer como profissional. Se
    você precisa de alguém criativo, detalhista e com vontade de transformar
    ideias em realidade, estou pronto para começar!
  </p>
);

const experienceItems: ExperienceItem[] = [
  {
    header: "2025 - Home-office",
    children: (
      <p>
        Estou desenvolvendo um site de agendamentos para diversos prestadores de
        serviços, incluindo <Span>barbeiros, salões e outros segmentos</Span>.
        Este foi e está sendo meu primeiro projeto com <strong>NextJS</strong>,
        onde aprofundei conhecimentos em <Span>hooks e requisições API</Span>,
        criando uma solução intuitiva e escalável para o gerenciamento de
        reservas.
      </p>
    ),
  },
];

const projectsItems: ProjectProps[] = [
  {
    name: "project1",
    title: "Mapa Paroquial - Paróquia Nossa Senhora dos Remédios",
    children: (
      <p>
        Criei um mapa municipal interativo das comunidades católicas de uma
        paróquia, com rotas dinâmicas que centralizam o trajeto selecionado.
        Desenvolvido em <strong>NextJS</strong>, o projeto utiliza{" "}
        <strong>Leaflet JS</strong> para a geração de tiles do mapa e a{" "}
        <strong>API OSRM</strong> para as rotas, proporcionando uma experiência
        prática e um <Span>aprendizado aprofundado em dados geográficos</Span>.
      </p>
    ),
    url: "https://pnsdremedios-map.vercel.app/",
  },
];

export { aboutItems, experienceItems, projectsItems };
