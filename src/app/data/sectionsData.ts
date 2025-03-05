import { ExperienceItem } from "../_components/Experience";
import { ProjectProps } from "../_components/Projects";

const experienceItems: ExperienceItem[] = [
  {
    header: "2025 - Home-office",
    description:
      "Estou desenvolvendo um site de agendamentos para diversos prestadores de serviços, incluindo barbeiros, salões e outros segmentos. Este foi e está sendo meu primeiro projeto com NextJS, onde aprofundei conhecimentos em hooks e requisições API, criando uma solução intuitiva e escalável para o gerenciamento de reservas.",
    keyWords: ["NextJS,", "API,", "hooks"],
    boldWords: ["site", "agendamentos", "solução", "intuitiva", "escalável"],
  },
];

const projectsItems: ProjectProps[] = [
  {
    name: "project1",
    title: "Mapa Paroquial - Paróquia Nossa Senhora dos Remédios",
    description:
      "Criei um mapa municipal interativo das comunidades católicas de uma paróquia, com rotas dinâmicas que centralizam o trajeto selecionado. Desenvolvido em NextJS, o projeto utiliza Leaflet JS para a geração de tiles do mapa e a API OSRM para as rotas, proporcionando uma experiência prática e um aprendizado aprofundado em dados geográficos.",
    url: "https://pnsdremedios-map.vercel.app/",
    keyWords: ["NextJS", "LeafletJS", "API", "OSRM"],
    boldWords: ["mapa", "municipal"],
  },
];

export { experienceItems, projectsItems };
