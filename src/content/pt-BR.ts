import type { PortfolioContent } from '../types/content'

export const contentPtBR: PortfolioContent = {
  meta: {
    title: 'Cris Rossi',
    description: 'Desenvolvedor Front-End e Analista de Operações com experiência em front-end moderno, componentização, automação de processos e desenvolvimento de soluções internas.',
  },
  a11y: {
    skipToContent: 'Pular para o conteúdo',
    closeModal: 'Fechar diálogo',
    openNavigation: 'Abrir menu de navegação',
    closeNavigation: 'Fechar menu de navegação',
  },
  header: {
    brandMark: 'C.R.',
    nav: [
      { id: 'hero', label: 'Início' },
      { id: 'experience', label: 'Experiência' },
      { id: 'projects', label: 'Projetos' },
      { id: 'about', label: 'Sobre' },
      { id: 'skills', label: 'Habilidades' },
    ],
    emailCta: { label: 'Vamos conversar', href: 'mailto:cristian.rossicosta@gmail.com' },
    language: {
      label: 'Idioma',
      options: [
        { locale: 'pt-BR', label: 'Português' },
        { locale: 'en', label: 'English' },
      ],
    },
  },
  hero: {
    eyebrow: 'Oi, eu sou o Cris',
    headline: 'Desenvolvedor Front-End e Analista de Operações',
    subheadline:
      'Uno front-end, lógica e processo para transformar demandas do dia a dia em produtos internos úteis, escaláveis e bem estruturados.',
    intro:
      'Especialista em front-end moderno, componentização, automação de processos e desenvolvimento de soluções internas em contextos operacionais. Experiência com Zendesk, sistemas internos e fluxos integrados voltados à eficiência e escala operacional.',
    ctas: {
      primary: { label: 'Baixar CV', href: '/cv.pdf', icon: 'download' },
    },
    socials: [
      {
        label: 'LinkedIn',
        ariaLabel: 'Abrir perfil do LinkedIn em uma nova aba',
        href: 'https://www.linkedin.com/in/cristian-rossi-ccosta/',
        icon: 'linkedin',
      },
      {
        label: 'GitHub',
        ariaLabel: 'Abrir perfil do GitHub em uma nova aba',
        href: 'https://github.com/cristian-rossi98',
        icon: 'github',
      },
    ],
    portrait: {
      src: '/avatar.jpg',
      alt: 'Foto de perfil',
    },
  },
  experience: {
    title: 'Experiência',
    subtitle: 'Funções selecionadas e resultados. Arraste ou use as setas.',
    labels: {
      previous: 'Anterior',
      next: 'Próximo',
      viewMore: 'Ver mais',
      responsibilities: 'Responsabilidades',
      achievements: 'Resultados',
      projects: 'Projetos',
      technologies: 'Tecnologias',
    },
    items: [
      {
        id: 'exp-1',
        company: 'Via Consulting',
        role: 'Consultor de T.I',
        start: '2023',
        end: 'Atual',
        summary:
          'Trabalhei em projetos de clientes como Smiles e Grupo Cobra, e hoje atuo em uma frente dedicada para a Wellhub (antiga Gympass).',
        details: {
          responsibilities: [
            'Liderei iniciativas operacionais e sistêmicas, do levantamento de requisitos à validação e implementação em produção.',
            'Desenvolvi e evoluí ferramentas internas para apoiar o trabalho dos agentes, melhorar a consistência das informações e tornar os fluxos mais eficientes.',
            'Conduzi mudanças estruturais em processos de atendimento, regras operacionais e organização da operação com foco em escalabilidade e segurança.',
            'Atuei continuamente na sustentação da operação, com correções, ajustes e melhorias em ferramentas e fluxos internos.',
          ],
          achievements: [
            'Viabilizei novas operações de suporte para Romênia e Wellz Itália, com estrutura local, fluxos adaptados e preparação operacional para rollout.',
            'Entreguei revisões amplas em regras operacionais e estrutura da operação, preservando consistência entre processos relacionados.',
            'Automatizei um rollout complexo com scripts em Python, reduzindo esforço manual, tempo de execução e risco operacional.',
            'Melhorei a experiência dos agentes e a qualidade dos dados com ferramentas internas voltadas à identificação, categorização e eficiência operacional.',
          ],
          projects: [
            'Lançamento Romênia / Wellhub (7card) — estruturei a operação de suporte para um novo país após aquisição, adaptando fluxos, conteúdos e configuração da plataforma para o contexto local.',
            'Lançamento Wellz Itália — implementei a estrutura operacional necessária para suportar a entrada da operação no mercado italiano.',
            'App interno de identificação — evoluí uma ferramenta de apoio aos agentes para facilitar identificação de parceiros e melhorar a consistência dos dados no atendimento.',
            'Reestruturação operacional e revisão de SLA — conduzi mudanças amplas na organização da operação e em regras de atendimento, com rollout automatizado e plano de rollback.',
            'Zendesk QA (Klaus) — apoiei a implementação de uma frente de quality assurance para ampliar visibilidade e controle sobre a qualidade do atendimento.',
            'App Reclame Aqui para Wellhub — desenvolvi o frontend de um app interno de integração com o RA HugMe no Zendesk para centralização do atendimento.',
            'Smiles (GOL) — páginas de checkout — atuei, junto ao time da Via Consulting, no desenvolvimento de páginas de checkout para a Smiles.',
            'Grupo Cobra (Cobra Brasil) — implantação Zendesk — participei da implantação do Zendesk no cliente, apoiando a estruturação da operação na plataforma.',
          ],
          technologies: ['React', 'TypeScript', 'Zendesk', 'Python', 'Jira'],
          links: [
            {
              label: 'Site da empresa',
              ariaLabel: 'Abrir site da empresa em uma nova aba',
              href: 'https://viaconsulting.com.br/',
              icon: 'external',
            },
          ],
        },
        viewMoreLabel: 'Ver mais',
      },
      {
        id: 'exp-2',
        company: 'CYGNI Agrociência',
        role: 'Desenvolvedor Web',
        start: '2020',
        end: '2021',
        summary:
          'Desenvolvimento web em agricultura digital para sistemas agrícolas.',
        details: {
          responsibilities: [
            'Implementei páginas de alto tráfego com semântica e acessibilidade.',
            'Colaborei com backend para definir contratos de API adequados ao front-end.',
          ],
          achievements: [
            'Aumentei conclusão de formulários simplificando etapas e melhorando validação.',
          ],
          technologies: ['Vue.JS', 'Tailwind'],
          links: [
            {
              label: 'Site da empresa',
              ariaLabel: 'Abrir site da empresa em uma nova aba',
              href: 'https://cygniagroscience.com/',
              icon: 'external',
            },
          ],
        },
        viewMoreLabel: 'Ver mais',
      },
      {
        id: 'exp-3',
        company: 'CIAg -  Grupo Jacto',
        role: 'Estágio como Pesquisador Tecnológico',
        start: '2020',
        end: '2020',
        summary:
          'Desenvolvimento de sistemas web (Angular e JHipster), raciocínio lógico, back-end com SpringBoot (Java e Kotlin), banco de dados H2, controle de versão com Git e gerenciamento de repositório no GitLab.',
        details: {
          responsibilities: [
            'Assumi fluxos críticos de ponta a ponta: discovery, implementação e evolução.',
            'Criei componentes reutilizáveis e primitivas de layout para acelerar entregas.',
            'Parceria com design para refinar acessibilidade e estados de interação.',
          ],
          achievements: [
            'Reduzi regressões de UI padronizando padrões e componentes compartilhados.',
            'Melhorei a pontuação de performance (Lighthouse) com otimizações direcionadas.',
          ],
          projects: [
            'Admin Dashboard: analytics, UI por permissões e tabelas com muitos dados.',
            'Design System: tokens, componentes e padrões de documentação.',
          ],
          technologies: ['Angular', 'JHipster', 'SpringBoot', 'H2 Database', 'GitLab'],
          links: [
            {
              label: 'Site da empresa',
              ariaLabel: 'Abrir site da empresa em uma nova aba',
              href: 'https://www.ciag.org.br/',
              icon: 'external',
            },
          ],
        },
        viewMoreLabel: 'Ver mais',
      },
      {
        id: 'exp-4',
        company: 'Mirai Toyota',
        role: 'Estágio como Infraestrutura de T.I',
        start: '2019',
        end: '2019',
        summary:
          'Experiência com hardware, software e redes. Configuração e manutençãode switch, firewall e roteador. Suporte técnico remoto e presencial para solução de problemas.',
      },
      {
        id: 'exp-5',
        company: 'Consiga Cred',
        role: 'Estágio como Infraestrutura de T.I',
        start: '2019',
        end: '2019',
        summary:
          'Experiência com hardware, software e redes. Configuração e manutençãode switch, firewall e roteador. Suporte técnico remoto e presencial para solução de problemas.',
      },
      {
        id: 'exp-6',
        company: 'ONCLICK',
        role: 'Estágio como Desenvolvevor Delphi',
        start: '2018',
        end: '2019',
        summary:
          'Desenvolvimento de sistemas ERP, regras de negócio, raciocínio lógico, banco de dados, linguagem SQL, Delphi e revisão de código.',
        details: {
          responsibilities: [
            'Assumi fluxos críticos de ponta a ponta: discovery, implementação e evolução.',
            'Criei componentes reutilizáveis e primitivas de layout para acelerar entregas.',
            'Parceria com design para refinar acessibilidade e estados de interação.',
          ],
          achievements: [
            'Reduzi regressões de UI padronizando padrões e componentes compartilhados.',
            'Melhorei a pontuação de performance (Lighthouse) com otimizações direcionadas.',
          ],
          projects: [
            'Admin Dashboard: analytics, UI por permissões e tabelas com muitos dados.',
            'Design System: tokens, componentes e padrões de documentação.',
          ],
          technologies: ['Delphi', 'SQL'],
          links: [
            {
              label: 'Site da empresa',
              ariaLabel: 'Abrir site da empresa em uma nova aba',
              href: 'https://onclick.com.br/',
              icon: 'external',
            },
          ],
        },
        viewMoreLabel: 'Ver mais',
      },
      {
        id: 'exp-7',
        company: 'Assistec Informática',
        role: 'Estágio como Técnico de Computador',
        start: '2017',
        end: '2018',
        summary:
          'Experiência com hardware e instalação de softwares, formatação de computadores e otimização de sistema operacional. Experiência em receber e atender clientes.',
        details: {
          responsibilities: [
            'Assumi fluxos críticos de ponta a ponta: discovery, implementação e evolução.',
            'Criei componentes reutilizáveis e primitivas de layout para acelerar entregas.',
            'Parceria com design para refinar acessibilidade e estados de interação.',
          ],
          achievements: [
            'Reduzi regressões de UI padronizando padrões e componentes compartilhados.',
            'Melhorei a pontuação de performance (Lighthouse) com otimizações direcionadas.',
          ],
          projects: [
            'Admin Dashboard: analytics, UI por permissões e tabelas com muitos dados.',
            'Design System: tokens, componentes e padrões de documentação.',
          ],
          links: [
            {
              label: 'Site da empresa',
              ariaLabel: 'Abrir site da empresa em uma nova aba',
              href: 'https://www.assistecmarilia.com.br',
              icon: 'external',
            },
          ],
        },
        viewMoreLabel: 'Ver mais',
      },
    ],
  },
  projects: {
    title: 'Projetos',
    subtitle: 'Uma seleção curada com execução limpa e UI refinada.',
    items: [
      {
        id: 'proj-1',
        name: '[2025-2026] Requester Identification App',
        description:
          'Aplicativo interno no Zendesk desenvolvido para a Wellhub para apoiar a identificação de partners e subscribers durante o atendimento, aumentando a confiabilidade das informações e a eficiência operacional da equipe.',
        image: { src: '/ri.jpg', alt: 'Imagem de capa do projeto' },
        demoVideo: '/videos/ri-demo.mp4',
        stack: ['JavaScript', 'Zendesk App Framework ZCLI', 'MVC', 'HTML/CSS', 'i18n'],
        links: [
          {
            label: 'Ver demo',
            ariaLabel: 'Abrir projeto ao vivo em uma nova aba',
            href: '#demo',
            icon: 'external',
          },
        ],
      },
      {
        id: 'proj-2',
        name: '[2025] Reclame Aqui App',
        description:
          'Aplicativo interno no Zendesk desenvolvido para a Wellhub para integrar o fluxo de atendimentos do Reclame Aqui à operação de suporte, concentrando informações em um único ambiente e otimizando a rotina dos agentes.',
        image: { src: '/ra.jpg', alt: 'Imagem de capa do projeto' },
        demoVideo: '/videos/ra-demo.mp4',
        stack: ['React', 'TypeScript', 'Vite', 'Zendesk App Framework ZCLI', 'RA HugMe', 'Zendesk Garden', 'Tailwind', 'Datadog RUM'],
        links: [
          {
            label: 'Ver demo',
            ariaLabel: 'Abrir projeto ao vivo em uma nova aba',
            href: '#demo',
            icon: 'external',
          },
        ],
      },
      {
        id: 'proj-3',
        name: '[2024] Novo Checkout Smiles',
        description:
          'Atuação, junto ao time da Via Consulting, no desenvolvimento do novo checkout da Smiles, estruturando a experiência a partir da seleção do produto até as etapas de hospedagem, escolha de quarto, dados dos viajantes e pagamento.',
        image: { src: '/smiles.png', alt: 'Imagem de capa do projeto' },
        stack: ['React', 'Redux', 'Next.js', 'TypeScript', 'Tailwind', 'Formik', 'Zod', 'Zustand', 'Auth0', 'Google Maps API', 'Vitest'],
        links: [
          {
            label: 'Ao vivo',
            ariaLabel: 'Abrir projeto ao vivo em uma nova aba',
            href: 'https://www.smiles.com.br/home',
            icon: 'external',
          },
        ],
      },
      {
        id: 'proj-4',
        name: '[2023] E-commerce',
        description:
          'Um e-commerce simples para brincar :)',
        image: { src: '/ecommerce.jpg', alt: 'Imagem de capa do projeto' },
        stack: ['Next.js', 'Redux', 'Tailwind', 'API JSON Server'],
        links: [
          {
            label: 'Ao vivo',
            ariaLabel: 'Abrir projeto ao vivo em uma nova aba',
            href: 'https://ecommerce-cristian-rossi98.vercel.app/',
            icon: 'external',
          },
          {
            label: 'Código',
            ariaLabel: 'Abrir código-fonte em uma nova aba',
            href: 'https://github.com/cristian-rossi98/ecommerce',
            icon: 'github',
          },
        ],
      },
    ],
  },
  about: {
    title: 'Sobre',
    subtitle: 'Resumo profissional e abordagem de trabalho.',
    paragraphs: [
      'Eu desenho e construo interfaces front-end que priorizam clareza, performance e acessibilidade.',
      'Minha abordagem combina fundamentos sólidos de engenharia com atenção à hierarquia, espaçamento e microinterações.',
      'Gosto de colaborar com times para entregar UI confiável, de protótipos rápidos a sistemas em produção.',
      'De 2021 a 2023 fiz uma pausa na minha carreira para alcance de objetivos pessoais, nesse período foquei em um projeto pessoal artístico de produção musical.'
    ],
    highlights: [
      { label: 'Foco', value: 'Design systems, performance, arquitetura de UI' },
      { label: 'Stack', value: 'React + TypeScript' },
      { label: 'Colaboração', value: 'Produto, Design, Engenharia e Documentação' },
      { label: 'Formação', value: 'Bacharelado em Sistemas de Informação pela UNIVEM em 2020' },
    ],
  },
  skills: {
    title: 'Habilidades',
    subtitle: 'Um recorte estruturado das ferramentas que uso no dia a dia.',
    groups: [
      {
        id: 'frontend',
        title: 'Frontend Tech',
        items: ['React', 'TypeScript', 'Tailwind CSS', 'HTML', 'CSS', 'Vite'],
      },
      {
        id: 'design',
        title: 'Design Tools',
        items: ['Photoshop', 'Illustrator'],
      },
      {
        id: 'languages',
        title: 'Idiomas',
        items: ['Português (nativo)', 'Inglês (profissional)'],
      },
      {
        id: 'tools',
        title: 'Tools & Platforms',
        items: ['GitHub', 'Vercel', 'Zendesk', 'Jira'],
      },
    ],
  },
  footer: {
    title: 'Contato',
    note: 'Disponível para vagas CLT e PJ.',
    links: [
      {
        label: 'Email',
        ariaLabel: 'Enviar um email',
        href: 'mailto:cristian.rossicosta@gmail.com',
        icon: 'email',
      },
      {
        label: 'WhatsApp',
        ariaLabel: 'Abrir conversa no WhatsApp em uma nova aba',
        href: 'https://wa.me/+5514997973716',
        icon: 'whatsapp',
      },
      {
        label: 'Baixar CV',
        ariaLabel: 'Abrir CV em PDF em uma nova aba',
        href: '/cv.pdf',
        icon: 'download',
      },
      {
        label: 'LinkedIn',
        ariaLabel: 'Abrir perfil do LinkedIn em uma nova aba',
        href: 'https://www.linkedin.com/in/cristian-rossi-ccosta/',
        icon: 'linkedin',
      },
      {
        label: 'GitHub',
        ariaLabel: 'Abrir perfil do GitHub em uma nova aba',
        href: 'https://github.com/cristian-rossi98',
        icon: 'github',
      },
    ],
  },
}

