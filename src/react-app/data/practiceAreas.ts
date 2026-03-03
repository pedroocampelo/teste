import { Briefcase, ShoppingCart, Home, Scale, Building2, Coins, LucideIcon } from "lucide-react";

export interface ContentBlock {
  heading: string;
  paragraphs: string[];
}

export interface PracticeArea {
  slug: string;
  title: string;
  shortDescription: string;
  icon: LucideIcon;
  introText: string;
  responsibleLawyers: {
    name: string;
    oab: string;
    image: string;
    instagram: string;
  }[];
  contentBlocks: ContentBlock[];
  closingMethodologyText: string;
}

export const practiceAreas: PracticeArea[] = [
  {
    slug: "direito-civil",

    title: "Direito Cível",
    shortDescription:
      "Fez um contrato ruim ou está sendo cobrado errado? Sofreu prejuízo por danos? Saiba como ter respaldo legal.",
    icon: Scale,
    introText:
      "Segurança jurídica nas relações patrimoniais e pessoais do dia a dia. Atuação voltada à orientação e solução de questões contratuais, familiares e sucessórias, incluindo planejamento sucessório e resolução de conflitos, com foco na proteção dos interesses patrimoniais e pessoais.",
    responsibleLawyers: [
      {
        name: "Bruno Romero",
        oab: "OAB/CE 44.829",
        image: "/bruno romero.png",
        instagram: "https://www.instagram.com/bruno_rcl/",
      },
    ],
    contentBlocks: [
      {
        heading: "Nossos Serviços",
        paragraphs: [
          "Elaboração e análise de contratos para garantir segurança jurídica nas suas relações.",
          "Ações de cobrança e execução de títulos para recuperação de créditos.",
          "Defesa em ações de indenização por danos materiais e morais.",
          "Assessoria em questões de direito de família e sucessões.",
        ],
      },
      {
        heading: "Nossa Abordagem",
        paragraphs: [
          "Analisamos cada caso buscando identificar os melhores caminhos jurídicos.",
          "Buscamos soluções eficazes, priorizando a resolução extrajudicial quando possível.",
          "Mantemos comunicação transparente durante todo o processo.",
        ],
      },
      {
        heading: "Como Trabalhamos",
        paragraphs: [
          "Consulta inicial para entendimento detalhado do caso.",
          "Análise técnica e apresentação de possíveis estratégias.",
          "Acompanhamento contínuo com atualizações regulares.",
          "Conclusão com orientações para prevenção de problemas futuros.",
        ],
      },
    ],
    closingMethodologyText:
      "No Direito Cível, nossa metodologia se baseia na análise dos fatos, na aplicação da legislação e na busca por soluções que equilibrem seus interesses com a viabilidade jurídica. Trabalhamos para que você tenha segurança em suas relações civis e patrimoniais.",
  },
  {
    slug: "direito-do-consumidor",
    title: "Direito do Consumidor",
    shortDescription:
      "Passou por cobrança indevida ou comprou algo que não funciona como prometido? Você pode agir para reconquistar seus direitos.",
    icon: ShoppingCart,
    introText:
      "Atuação jurídica nas relações entre consumidores e fornecedores. Assessoria e defesa em demandas relacionadas a produtos e serviços que não atenderam às expectativas, incluindo situações envolvendo companhias aéreas, serviços de saúde, telefonia e outros fornecedores, sempre com base na legislação consumerista.",
    responsibleLawyers: [
      {
        name: "Lorenzo Marcello",
        oab: "OAB/CE 48.638",
        image: "/lorenzo marcello.png",
        instagram: "https://www.instagram.com/lorenzofmarcello/",
      },
    ],
    contentBlocks: [
      {
        heading: "Nossos Serviços",
        paragraphs: [
          "Defesa contra cobranças indevidas e negativação irregular.",
          "Ações por vício ou defeito em produtos e serviços.",
          "Reclamações contra publicidade enganosa ou abusiva.",
          "Assessoria em cancelamentos de contratos e planos.",
        ],
      },
      {
        heading: "Nossa Abordagem",
        paragraphs: [
          "Utilizamos os mecanismos do Código de Direito do Consumidor (CDC) para proteger seus direitos.",
          "Buscamos reparação de danos materiais e morais quando cabível.",
          "Priorizamos soluções rápidas através de negociação com as empresas.",
        ],
      },
      {
        heading: "Como Trabalhamos",
        paragraphs: [
          "Coleta de provas e documentação da relação de consumo.",
          "Notificação extrajudicial ao fornecedor.",
          "Registro em órgãos de defesa do consumidor quando necessário.",
          "Ação judicial para garantia dos seus direitos.",
        ],
      },
      {
        heading: "Nossa Metologia",
        paragraphs: [
          "No Direito do Consumidor, trabalhamos para equilibrar a relação entre você e as empresas. Nossa experiência com o CDC permite identificar violações e construir estratégias para restabelecer seus direitos.",
        ],
      },
    ],
    closingMethodologyText:
      "No Direito do Consumidor, trabalhamos para equilibrar a relação entre você e as empresas. Nossa experiência com o CDC permite identificar violações e construir estratégias para restabelecer seus direitos.",
  },
  {
    slug: "direito-empresarial",
    title: "Direito Empresarial",
    shortDescription:
      "Tem empresa ou vai abrir negócio? Evite problemas societários, contratos mal feitos ou riscos legais que podem comprometer seu crescimento.",
    icon: Building2,
    introText:
      "Estrutura jurídica e segurança nas decisões empresariais. Atuação voltada ao planejamento empresarial, com assessoria jurídica consultiva e contenciosa, com foco em compliance, abrangendo a criação, reorganização, fusão, aquisição e terminação de empresas, além de mediação e acordos entre sócios, sempre orientada à prevenção de riscos e conflitos.",
    responsibleLawyers: [
      {
        name: "Matheus Lucena",
        oab: "OAB/CE 44.968",
        image: "/matheus lucena.png",
        instagram: "https://www.instagram.com/matheuslucenaadv/",
      },
    ],
    contentBlocks: [
      {
        heading: "Nossos Serviços",
        paragraphs: [
          "Constituição de empresas e escolha da melhor estrutura societária.",
          "Elaboração e revisão de contratos comerciais.",
          "Assessoria em fusões, aquisições e reorganizações societárias.",
          "Solução de conflitos societários e recuperação de créditos.",
        ],
      },
      {
        heading: "Nossa Abordagem",
        paragraphs: [
          "Analisamos o contexto do seu negócio antes de propor soluções.",
          "Alinhamos estratégias jurídicas com objetivos empresariais.",
          "Atuamos de forma preventiva para evitar litígios futuros.",
        ],
      },
      {
        heading: "Como Trabalhamos",
        paragraphs: [
          "Diagnóstico jurídico da situação empresarial.",
          "Planejamento de ações alinhadas aos objetivos do negócio.",
          "Implementação de soluções com acompanhamento contínuo.",
          "Revisões periódicas para adequação a mudanças legislativas.",
        ],
      },
    ],
    closingMethodologyText:
      "Nossa metodologia empresarial combina conhecimento jurídico com visão de negócios. Entendemos que cada empresa tem necessidades únicas e trabalhamos para oferecer soluções que protejam seu patrimônio e facilitem seu crescimento.",
  },
  {
    slug: "direito-imobiliario",
    title: "Direito Imobiliário",
    shortDescription:
      "Comprou imóvel com documentação irregular ou tem conflito de locação? Conte com orientação especializada para evitar prejuízos.",
    icon: Home,
    introText:
      "Segurança jurídica nas relações e negócios imobiliários. Atuação na formulação e administração de contratos de compra e venda e locação, bem como na condução de conflitos na seara imobiliária, incluindo usucapião, despejo e cobranças, além de questões cartorárias, administrativas e tributárias relacionadas a imóveis e relações locatícias.",
    responsibleLawyers: [
      {
        name: "Bruno Romero",
        oab: "OAB/CE 44.829",
        image: "/bruno romero.png",
        instagram: "https://www.instagram.com/bruno_rcl/",
      },
      {
        name: "Lorenzo Marcello",
        oab: "OAB/CE 48.638",
        image: "/lorenzo marcello.png",
        instagram: "https://www.instagram.com/lorenzofmarcello/",
      },
    ],
    contentBlocks: [
      {
        heading: "Nossos Serviços",
        paragraphs: [
          "Due diligence em compra e venda de imóveis.",
          "Regularização de documentação e registro de propriedades.",
          "Assessoria em contratos de locação residencial e comercial.",
          "Defesa em ações de despejo e cobrança de aluguéis.",
        ],
      },
      {
        heading: "Nossa Abordagem",
        paragraphs: [
          "Verificamos toda a documentação para garantir segurança na transação.",
          "Identificamos riscos e irregularidades antes que se tornem problemas.",
          "Negociamos soluções que preservem seus interesses.",
        ],
      },
      {
        heading: "Como Trabalhamos",
        paragraphs: [
          "Análise da documentação do imóvel.",
          "Identificação de pendências e restrições.",
          "Orientação sobre os próximos passos e riscos envolvidos.",
          "Acompanhamento até a conclusão da transação ou resolução do conflito.",
        ],
      },
    ],
    closingMethodologyText:
      "No Direito Imobiliário, nossa metodologia prioriza a segurança jurídica das transações. Realizamos análises para que você tome decisões protegidas, seja comprando, vendendo ou locando um imóvel.",
  },
  {
    slug: "direito-previdenciario",
    title: "Direito Previdenciário",
    shortDescription:
      "Precisa solicitar aposentadoria ou benefício do INSS? Se afastou por doença ou tem dúvidas sobre pensão ou LOAS? Tenha o amparo necessário para garantir seus benefícios com segurança.",
    icon: Coins,
    introText:
      "Atuação jurídica em benefícios e proteção previdenciária. Assessoria em benefícios previdenciários relacionados a doenças graves, como câncer, fibromialgia e outras patologias que podem afastar a exigência de tempo mínimo de contribuição, bem como em aposentadorias e benefícios por incapacidade, com atuação administrativa e judicial, inclusive por meio de mandado de segurança em temas sensíveis perante o INSS.",
    responsibleLawyers: [
      {
        name: "Bruno Romero",
        oab: "OAB/CE 44.829",
        image: "/bruno romero.png",
        instagram: "https://www.instagram.com/bruno_rcl/",
      },
      {
        name: "Matheus Lucena",
        oab: "OAB/CE 44.968",
        image: "/matheus lucena.png",
        instagram: "https://www.instagram.com/matheuslucenaadv/",
      },
    ],
    contentBlocks: [
      {
        heading: "Nossos Serviços",
        paragraphs: [
          "Solicitação e revisão de aposentadorias (tempo de contribuição, idade, especial, etc).",
          "Auxílio-doença e auxílio-acidente.",
          "Pensão por morte e BPC/LOAS.",
          "Recursos administrativos e ações judiciais contra negativas do INSS.",
        ],
      },
      {
        heading: "Nossa Abordagem",
        paragraphs: [
          "Analisamos seu histórico contributivo e identificamos o melhor benefício.",
          "Calculamos o valor correto e verificamos erros do INSS.",
          "Acompanhamos todo o processo até a concessão do benefício.",
        ],
      },
      {
        heading: "Como Trabalhamos",
        paragraphs: [
          "Levantamento completo do histórico previdenciário.",
          "Planejamento previdenciário e cálculo de tempo de contribuição.",
          "Preparação de documentação e protocolo de requerimentos.",
          "Recursos e ações judiciais quando necessário.",
        ],
      },
    ],
    closingMethodologyText:
      "Nossa metodologia previdenciária é baseada em análise do seu histórico contributivo. Trabalhamos para garantir que você receba o benefício adequado no menor tempo possível, seja por via administrativa ou judicial.",
  },
  {
    slug: "direito-trabalhista",
    title: "Direito Trabalhista",
    shortDescription:
      "Foi demitido e não recebeu tudo? Trabalha sem registro ou com abusos de jornada? Assegure o cumprimento da lei e garanta o que é seu por direito.",
    icon: Briefcase,
    introText:
      "Atuação jurídica nas relações de trabalho e prevenção de conflitos. Assessoria em temas relacionados a demissões sem justa causa, assédio no ambiente de trabalho e inadimplemento de encargos e verbas trabalhistas, com atuação contenciosa na defesa de direitos.",
    responsibleLawyers: [
      {
        name: "Matheus Lucena",
        oab: "OAB/CE 44.968",
        image: "/matheus lucena.png",
        instagram: "https://www.instagram.com/matheuslucenaadv/",
      },
    ],
    contentBlocks: [
      {
        heading: "Nossos Serviços",
        paragraphs: [
          "Reclamações trabalhistas para assegurar o recebimento de verbas rescisórias.",
          "Ações de reconhecimento de vínculo empregatício.",
          "Defesa contra assédio moral e discriminação no trabalho.",
          "Assessoria em questões de jornada, horas extras e adicionais.",
        ],
      },
      {
        heading: "Nossa Abordagem",
        paragraphs: [
          "Avaliamos todos os aspectos da relação de trabalho.",
          "Orientamos sobre direitos e deveres para evitar surpresas.",
          "Atuamos de forma estratégica para maximizar seus direitos.",
        ],
      },
      {
        heading: "Como Trabalhamos",
        paragraphs: [
          "Análise da documentação trabalhista.",
          "Identificação de irregularidades e cálculo de valores devidos.",
          "Negociação ou ajuizamento de ação conforme o caso.",
          "Acompanhamento até o recebimento efetivo dos valores.",
        ],
      },
    ],
    closingMethodologyText:
      "Nossa metodologia trabalhista foca na proteção dos seus direitos como trabalhador. Utilizamos conhecimento da legislação e jurisprudência para construir casos e obter os melhores resultados possíveis.",
  },
];
