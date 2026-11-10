export type PortfolioProject = {
  slug: string;
  name: string;
  category: string;
  url: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  summary: string;
  overview: string[];
  features: { title: string; description: string }[];
  technology: string;
};

/** Conteúdo conferido nos produtos e nos repositórios locais em novembro de 2026. */
export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "calculadora-de-pace",
    name: "Calculadora de Pace",
    category: "Corrida · ferramenta gratuita",
    url: "https://calculadoradepace.com.br/",
    image: {
      src: "/images/portfolio/calculadora-de-pace.png",
      alt: "Captura atual da Calculadora de Pace, com formulário, ritmo calculado e projeções de prova",
      width: 1143,
      height: 904,
    },
    summary:
      "Um conjunto de ferramentas para transformar distância, tempo e ritmo em metas claras de corrida.",
    overview: [
      "A Calculadora de Pace ajuda corredores a descobrir o ritmo por quilômetro, projetar o tempo de uma prova ou calcular a distância possível em determinado tempo. A ferramenta principal é gratuita e funciona sem cadastro.",
      "Além do cálculo básico, o site reúne parciais por quilômetro, planejamento de split negativo, previsão de prova pela fórmula de Riegel, outras calculadoras de treino, guias e um calendário de corridas.",
    ],
    features: [
      {
        title: "Três modos de cálculo",
        description:
          "Pace, tempo e distância podem ser calculados a partir dos outros dois valores.",
      },
      {
        title: "Planejamento de prova",
        description:
          "Parciais, ritmo por milha e previsão para outras distâncias ajudam a visualizar uma meta.",
      },
      {
        title: "Conteúdo para corredores",
        description:
          "Calculadoras complementares, guias e calendário de provas ampliam o uso além da conta inicial.",
      },
    ],
    technology:
      "O site principal é feito com Astro e Tailwind CSS. O calendário usa Next.js; a API e a coleta de provas usam Go e Python, respectivamente.",
  },
  {
    slug: "stoque-facil",
    name: "Stoque Fácil",
    category: "Gestão · pequenos negócios",
    url: "https://stoquefacilapp.com.br/",
    image: {
      src: "/images/portfolio/stoque-facil.webp",
      alt: "Tela real do Stoque Fácil mostrando ficha técnica, custos e precificação de um produto",
      width: 1200,
      height: 1000,
    },
    summary:
      "Estoque, custos, vendas e formação de preços reunidos para quem precisa cuidar de uma pequena operação.",
    overview: [
      "O Stoque Fácil foi pensado para pequenos negócios que precisam enxergar o que entra e sai da loja e definir preços com base nos custos reais. A proposta é trocar controles dispersos por uma visão única de produtos, movimentações, vendas e margens.",
      "Na precificação, o sistema considera custos, taxas, frete e margem de lucro. Também ajuda a acompanhar estoque mínimo e mudanças de custo que podem afetar o preço de venda.",
    ],
    features: [
      {
        title: "Controle de estoque",
        description:
          "Cadastro de produtos e registro de entradas, saídas e movimentações do dia a dia.",
      },
      {
        title: "Precificação",
        description:
          "Composição de custos e simulação de preços, taxas, descontos e margem estimada.",
      },
      {
        title: "Visão da operação",
        description:
          "Acompanhamento de vendas, saldo e estoque mínimo para apoiar decisões de reposição.",
      },
    ],
    technology:
      "A interface web usa React e Vite. A API do projeto usa Java, Spring Boot e PostgreSQL.",
  },
  {
    slug: "estantinha",
    name: "Estantinha",
    category: "Leitura · comunidade",
    url: "https://estantinha.app/",
    image: {
      src: "/images/portfolio/estantinha.png",
      alt: "Arte oficial do Estantinha com livros e a frase Faça espaço para os livros ficarem com você",
      width: 1200,
      height: 630,
    },
    summary:
      "Um lugar para organizar a biblioteca, acompanhar leituras e guardar o que cada livro deixou.",
    overview: [
      "O Estantinha é uma aplicação para registrar livros, acompanhar o progresso de leitura e escrever resumos e resenhas. A experiência procura dar espaço ao hábito de ler e às ideias que permanecem depois da última página.",
      "Quem quiser pode criar um perfil na comunidade e compartilhar o início ou a conclusão de uma leitura. A estante completa, o progresso e os rascunhos ficam privados por padrão; a pessoa escolhe o que publicar.",
    ],
    features: [
      {
        title: "Biblioteca pessoal",
        description:
          "Livros organizados por estado de leitura, com registro de páginas e progresso.",
      },
      {
        title: "Reflexões",
        description:
          "Espaço para escrever resumos e resenhas de cada livro, primeiro de forma privada.",
      },
      {
        title: "Comunidade opcional",
        description:
          "Perfil e publicações permitem compartilhar leituras e descobrir outras pessoas leitoras.",
      },
    ],
    technology:
      "O projeto reúne uma aplicação web em React e TypeScript, uma API em Go com Gin e MySQL e um aplicativo mobile em React Native com Expo.",
  },
];

export function getPortfolioProject(slug: string) {
  return portfolioProjects.find((project) => project.slug === slug);
}
