/** Dados públicos confirmados no LinkedIn. Veja CONTENT.md para fontes e limites. */
export const profile = {
  name: "Leonardo Marco",
  shortName: "Léo Marco",
  role: "Engenheiro de software",
  location: "Belo Horizonte, MG",
  company: "Luizalabs",
  linkedin: "https://www.linkedin.com/in/leonardomarco/",
  education: {
    institution: "Centro Universitário de Belo Horizonte",
    shortName: "UniBH",
    degree: "Ciência da Computação",
    period: "2015 — 2020",
  },
} as const;

export const navigation = [
  { label: "Sobre", href: "/sobre" },
  { label: "Trajetória", href: "/trajetoria" },
] as const;

type ExperienceRole = {
  title: string;
  period: string;
  summary?: string;
  highlights?: string[];
  stack?: string;
};

type Experience = {
  id: string;
  company: string;
  roles: ExperienceRole[];
};

/** Experiências transcritas dos prints do LinkedIn enviados por Leonardo. */
export const experiences: Experience[] = [
  {
    id: "luizalabs",
    company: "Luizalabs",
    roles: [
      {
        title: "Senior Software Engineer",
        period: "fev. 2025 — atualmente",
        summary:
          "Atuação em logística, no desenvolvimento de serviços backend que integram pedidos para entrega ao cliente final.",
        highlights: [
          "Desenvolvimento e manutenção de APIs e microserviços; integrações assíncronas com RabbitMQ.",
          "Investigação de problemas em produção com logs, métricas e rastreamento distribuído.",
          "Observabilidade de aplicações em Kubernetes com OpenTelemetry, Datadog e Grafana.",
          "Iniciativas de IA e evolução de ferramentas para apoiar o fluxo de desenvolvimento.",
        ],
        stack:
          "Python, Java, Go, NestJS, PostgreSQL, MongoDB, Redis, RabbitMQ e BullMQ",
      },
    ],
  },
  {
    id: "raro-labs",
    company: "Raro Labs",
    roles: [
      {
        title: "Back End Developer",
        period: "mai. 2024 — fev. 2025",
        summary: "Atuação em sustentação e observabilidade da fintech Byx.",
        highlights: [
          "Estruturação de métricas no Grafana para antecipar problemas.",
          "Manutenção da esteira de originação de empréstimos e cartão benefício.",
          "Melhorias para reduzir bugs e apoiar o time de sustentação.",
        ],
        stack:
          "Django, AWS, MySQL, Redis, Celery, Docker, Grafana, Prometheus e RabbitMQ",
      },
    ],
  },
  {
    id: "raro-academy",
    company: "Raro Academy",
    roles: [
      {
        title: "Instrutor",
        period: "jun. 2024 — dez. 2024",
        summary:
          "Professor da primeira turma de Python da Raro Academy, com aulas ao vivo de Django.",
      },
    ],
  },
  {
    id: "amo-promo",
    company: "Amo Promo",
    roles: [
      {
        title: "Tech lead",
        period: "jun. 2021 — mai. 2024",
        summary: "Liderança técnica do time de seguro viagem.",
        highlights: [
          "Apoio aos desenvolvedores e identificação de melhorias técnicas no produto e na arquitetura.",
          "Refinamento das demandas de negócio com o Product Owner.",
        ],
        stack:
          "Django, Go, React, Next.js, PostgreSQL, Kubernetes e Google Cloud Platform",
      },
      {
        title: "Full-stack Developer",
        period: "jul. 2019 — jun. 2021",
        summary: "Desenvolvimento no time de seguro viagem.",
        stack: "Django, Go, React, Next.js, PostgreSQL e Kubernetes",
      },
    ],
  },
  {
    id: "cokato",
    company: "COKATO — Gestão de Negócios sem Mistério",
    roles: [
      {
        title: "Desenvolvedor Front-end",
        period: "out. 2018 — jul. 2019",
        highlights: [
          "Desenvolvimento de aplicações web com React e mobile com React Native.",
          "Análise de requisitos para novos produtos.",
          "Criação e manutenção de sites com HTML, CSS e JavaScript e blogs em WordPress.",
        ],
      },
      {
        title: "Estagiário Front-end",
        period: "mai. 2018 — out. 2018",
        highlights: [
          "Manutenção de sistemas web e sites; criação de blogs em WordPress.",
          "Desenvolvimento de templates para e-mail marketing.",
        ],
      },
    ],
  },
  {
    id: "systemport",
    company: "Systemport Technology",
    roles: [
      {
        title: "Suporte técnico",
        period: "jun. 2017 — abr. 2018",
        highlights: [
          "Suporte aos clientes e análise de erros do Systemcommerce.",
          "Análise de bancos de dados SQL Server e migração de dados.",
        ],
      },
    ],
  },
  {
    id: "secretaria-cultura-mg",
    company: "Secretaria de Estado de Cultura e Turismo de Minas Gerais",
    roles: [
      {
        title: "Estagiário",
        period: "jun. 2016 — jun. 2017",
        highlights: [
          "Testes de qualidade de software e atendimento ao público externo.",
          "Apoio à diretoria da Lei de Incentivo à Cultura do Estado de Minas Gerais.",
        ],
      },
    ],
  },
];
