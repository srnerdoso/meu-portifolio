import { ExperienceItem } from "../_components/Experience";
import { ProjectProps } from "../_components/Projects";
import Span from "../_components/Span";

const experienceItems: ExperienceItem[] = [
  {
    header: "2025 - Home-office",
    children:
      <p>Estou desenvolvendo um site de agendamentos para diversos prestadores de serviços, incluindo <Span>barbeiros, salões e outros segmentos</Span>. Este foi e está sendo meu primeiro projeto com <strong>NextJS</strong>, onde aprofundei conhecimentos em <Span>hooks e requisições API</Span>, criando uma solução intuitiva e escalável para o gerenciamento de reservas.</p>
  },
];

const projectsItems: ProjectProps[] = [
  {
    name: "project1",
    title: "Mapa Paroquial - Paróquia Nossa Senhora dos Remédios",
    children:
      <p>Criei um mapa municipal interativo das comunidades católicas de uma paróquia, com rotas dinâmicas que centralizam o trajeto selecionado. Desenvolvido em <strong>NextJS</strong>, o projeto utiliza <strong>Leaflet JS</strong> para a geração de tiles do mapa e a <strong>API OSRM</strong> para as rotas, proporcionando uma experiência prática e um <Span>aprendizado aprofundado em dados geográficos</Span>.</p>,
    url: "https://pnsdremedios-map.vercel.app/",
  },
];

export { experienceItems, projectsItems };
