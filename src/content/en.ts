import type { PortfolioContent } from '../types/content'

export const contentEn: PortfolioContent = {
  meta: {
    title: 'Cris Rossi',
    description:
      'Front-End Developer and Operations Analyst with experience in modern front-end, componentization, process automation, and internal solutions development.',
  },
  a11y: {
    skipToContent: 'Skip to content',
    closeModal: 'Close dialog',
    openNavigation: 'Open navigation menu',
    closeNavigation: 'Close navigation menu',
  },
  header: {
    brandMark: 'C.R.',
    nav: [
      { id: 'hero', label: 'Home' },
      { id: 'experience', label: 'Experience' },
      { id: 'projects', label: 'Projects' },
      { id: 'about', label: 'About' },
      { id: 'skills', label: 'Skills' },
    ],
    emailCta: { label: "Let's talk", href: 'mailto:cristian.rossicosta@gmail.com' },
    language: {
      label: 'Language',
      options: [
        { locale: 'pt-BR', label: 'Português' },
        { locale: 'en', label: 'English' },
      ],
    },
  },
  hero: {
    eyebrow: "Hi, I'm Cris",
    headline: 'Front-End Developer and Operations Analyst',
    subheadline:
      'I combine front-end, logic, and process to turn day-to-day demands into useful, scalable, and well-structured internal products.',
    intro:
      'Specialized in modern front-end, componentization, process automation, and internal solutions development in operational contexts. Experience with Zendesk, internal systems, and integrated workflows focused on efficiency and operational scale.',
    ctas: {
      primary: { label: 'Download CV', href: '/cv-en.docx.pdf', icon: 'download' },
    },
    socials: [
      {
        label: 'LinkedIn',
        ariaLabel: 'Open LinkedIn profile in a new tab',
        href: 'https://www.linkedin.com/in/cristian-rossi-ccosta/',
        icon: 'linkedin',
      },
      {
        label: 'GitHub',
        ariaLabel: 'Open GitHub profile in a new tab',
        href: 'https://github.com/cristian-rossi98',
        icon: 'github',
      },
    ],
    portrait: {
      src: '/avatar.jpg',
      alt: 'Profile photo',
    },
  },
  experience: {
    title: 'Experience',
    subtitle:
      'My professional journey in technology, spanning different contexts, challenges, and areas of expertise.',
    labels: {
      previous: 'Previous',
      next: 'Next',
      viewMore: 'View more',
      responsibilities: 'Responsibilities',
      achievements: 'Results',
      projects: 'Projects',
      technologies: 'Technologies',
    },
    items: [
      {
        id: 'exp-1',
        company: 'Via Consulting ∙ Full-time',
        role: 'IT Consultant',
        start: '2023',
        end: 'Present',
        summary:
          'I worked on client projects such as Smiles and Grupo Cobra, and today I operate in a dedicated front for Wellhub (formerly Gympass).',
        details: {
          responsibilities: [
            'Led operational and systems initiatives, from requirements gathering to validation and production implementation.',
            'Developed and evolved internal tools to support agent workflows, improve data consistency, and make processes more efficient.',
            'Drove structural changes in support processes, operational rules, and organizational setup with a focus on scalability and security.',
            'Continuously supported the operation through bug fixes, adjustments, and improvements in internal tools and workflows.',
          ],
          achievements: [
            'Enabled new support operations for Romania and Wellz Italy, with local structure, adapted workflows, and operational readiness for rollout.',
            'Delivered broad reviews of operational rules and organizational structure, preserving consistency across related processes.',
            'Automated a complex rollout with Python scripts, reducing manual effort, execution time, and operational risk.',
            'Improved agent experience and data quality with internal tools focused on identification, categorization, and operational efficiency.',
          ],
          projects: [
            'Romania / Wellhub (7card) launch — structured the support operation for a new country after acquisition, adapting workflows, content, and platform configuration to the local context.',
            'Wellz Italy launch — implemented the operational structure required to support the operation’s entry into the Italian market.',
            'Internal identification app — evolved an internal support tool to help agents identify partners and improve data consistency during support flows.',
            'Operational restructuring and SLA review — led broad changes in operational organization and service rules, with automated rollout and rollback planning.',
            'Zendesk QA (Klaus) — supported the implementation of a quality assurance initiative to increase visibility and control over support quality.',
            'Reclame Aqui App for Wellhub — developed the frontend of an internal Zendesk app integrating with RA HugMe to centralize support handling.',
            'Smiles (GOL) — checkout pages — worked alongside the Via Consulting team on the development of Smiles’ new checkout pages.',
            'Grupo Cobra (Cobra Brasil) — Zendesk implementation — participated in the Zendesk implementation for the client, supporting the structuring of the operation on the platform.',
          ],
          technologies: ['React', 'TypeScript', 'Zendesk', 'Python', 'Jira'],
          links: [
            {
              label: 'Company website',
              ariaLabel: 'Open company website in a new tab',
              href: 'https://viaconsulting.com.br/',
              icon: 'external',
            },
          ],
        },
        viewMoreLabel: 'View more',
      },
      {
        id: 'exp-2',
        company: 'CYGNI Agroscience ∙ Full-time',
        role: 'Web Developer',
        start: '2020',
        end: '2021',
        summary:
          'Web development in digital agriculture for agricultural systems.',
        details: {
          technologies: ['Vue.JS', 'Tailwind'],
          links: [
            {
              label: 'Company website',
              ariaLabel: 'Open company website in a new tab',
              href: 'https://cygniagroscience.com/',
              icon: 'external',
            },
          ],
        },
        viewMoreLabel: 'View more',
      },
      {
        id: 'exp-3',
        company: 'CIAg (Grupo Jacto) ∙ Internship',
        role: 'Technology Researcher',
        start: '2020',
        end: '2020',
        summary:
          'Development of web systems (Angular and JHipster), logical reasoning, backend with SpringBoot (Java and Kotlin), H2 database, version control with Git, and repository management with GitLab.',
        details: {
          technologies: ['Angular', 'JHipster', 'SpringBoot', 'H2 Database', 'GitLab'],
          links: [
            {
              label: 'Company website',
              ariaLabel: 'Open company website in a new tab',
              href: 'https://www.ciag.org.br/',
              icon: 'external',
            },
          ],
        },
        viewMoreLabel: 'View more',
      },
      {
        id: 'exp-4',
        company: 'Mirai Toyota ∙ Internship',
        role: 'IT Infrastructure',
        start: '2019',
        end: '2019',
        summary:
          'Experience with hardware, software, and networks. Configuration and maintenance of switches, firewalls, and routers. Remote and on-site technical support for problem solving.',
        details: {
          links: [
            {
              label: 'Company website',
              ariaLabel: 'Open company website in a new tab',
              href: 'https://miraitoyota.com.br',
              icon: 'external',
            },
          ],
        },
        viewMoreLabel: 'View more',
      },
      {
        id: 'exp-5',
        company: 'Consiga Cred ∙ Internship',
        role: 'IT Infrastructure',
        start: '2019',
        end: '2019',
        summary:
          'Experience with hardware, software, and networks. Configuration and maintenance of switches, firewalls, and routers. Remote and on-site technical support for problem solving.',
        details: {
          links: [
            {
              label: 'Company website',
              ariaLabel: 'Open company website in a new tab',
              href: 'https://consigacred.com.br/',
              icon: 'external',
            },
          ],
        },
        viewMoreLabel: 'View more',
      },
      {
        id: 'exp-6',
        company: 'ONCLICK ∙ Internship',
        role: 'Delphi Developer',
        start: '2018',
        end: '2019',
        summary:
          'ERP systems development, business rules, logical reasoning, databases, SQL, Delphi, and code review.',
        details: {
          technologies: ['Delphi', 'SQL'],
          links: [
            {
              label: 'Company website',
              ariaLabel: 'Open company website in a new tab',
              href: 'https://onclick.com.br/',
              icon: 'external',
            },
          ],
        },
        viewMoreLabel: 'View more',
      },
      {
        id: 'exp-7',
        company: 'Assistec Informática ∙ Internship',
        role: 'Computer Technician',
        start: '2017',
        end: '2018',
        summary:
          'Experience with hardware and software installation, computer formatting, and operating system optimization. Experience in receiving and assisting customers.',
        details: {
          links: [
            {
              label: 'Company website',
              ariaLabel: 'Open company website in a new tab',
              href: 'https://www.assistecmarilia.com.br',
              icon: 'external',
            },
          ],
        },
        viewMoreLabel: 'View more',
      },
    ],
  },
  projects: {
    title: 'Projects',
    subtitle:
      'Selected projects that reflect the way I think, build, and deliver solutions.',
    items: [
      {
        id: 'proj-1',
        name: '[2025-2026] Requester Identification App',
        description:
          'Internal Zendesk app developed for Wellhub to support partner and subscriber identification during support interactions, increasing information reliability and operational efficiency.',
        image: { src: '/ri.jpg', alt: 'Project cover image' },
        demoVideo: '/videos/ri-demo.mp4',
        stack: ['JavaScript', 'Zendesk App Framework ZCLI', 'MVC', 'HTML/CSS', 'i18n'],
        links: [
          {
            label: 'View demo',
            ariaLabel: 'Open project demo in a modal',
            href: '#demo',
            icon: 'external',
          },
        ],
      },
      {
        id: 'proj-2',
        name: '[2025] Reclame Aqui App',
        description:
          'Internal Zendesk app developed for Wellhub to integrate Reclame Aqui support flows into the operation, centralizing information in a single environment and optimizing the agents’ workflow.',
        image: { src: '/ra.jpg', alt: 'Project cover image' },
        demoVideo: '/videos/ra-demo.mp4',
        stack: ['React', 'TypeScript', 'Vite', 'Zendesk App Framework ZCLI', 'RA HugMe', 'Zendesk Garden', 'Tailwind', 'Datadog RUM'],
        links: [
          {
            label: 'View demo',
            ariaLabel: 'Open project demo in a modal',
            href: '#demo',
            icon: 'external',
          },
        ],
      },
      {
        id: 'proj-3',
        name: '[2024] New Smiles Checkout',
        description:
          'Worked alongside the Via Consulting team on the development of Smiles’ new checkout, structuring the experience from product selection through lodging, room selection, traveler details, and payment.',
        image: { src: '/smiles.png', alt: 'Project cover image' },
        stack: ['React', 'Redux', 'Next.js', 'TypeScript', 'Tailwind', 'Formik', 'Zod', 'Zustand', 'Auth0', 'Google Maps API', 'Vitest'],
        links: [
          {
            label: 'Live',
            ariaLabel: 'Open live project in a new tab',
            href: 'https://www.smiles.com.br/home',
            icon: 'external',
          },
        ],
      },
      {
        id: 'proj-4',
        name: '[2026] Portfolio',
        description:
          'Personal portfolio developed to present my background, projects, and skills through a modern, responsive, and bilingual interface.',
        image: { src: '/portfolio.png', alt: 'Project cover image' },
        stack: ['React', 'TypeScript', 'Tailwind', 'Vite', 'Responsive Design', 'i18n Architecture'],
        links: [
          {
            label: 'Live',
            ariaLabel: 'Open live project in a new tab',
            href: 'https://cristianrossi.com.br/',
            icon: 'external',
          },
          {
            label: 'Code',
            ariaLabel: 'Open source code in a new tab',
            href: 'https://github.com/cristian-rossi98/portfolio',
            icon: 'github',
          },
        ],
      },
      {
        id: 'proj-5',
        name: '[2023] E-commerce',
        description:
          'A simple e-commerce project built for practice :)',
        image: { src: '/ecommerce.jpg', alt: 'Project cover image' },
        stack: ['Next.js', 'Redux', 'Tailwind', 'JSON Server API'],
        links: [
          {
            label: 'Live',
            ariaLabel: 'Open live project in a new tab',
            href: 'https://ecommerce-cristian-rossi98.vercel.app/',
            icon: 'external',
          },
          {
            label: 'Code',
            ariaLabel: 'Open source code in a new tab',
            href: 'https://github.com/cristian-rossi98/ecommerce',
            icon: 'github',
          },
        ],
      },
    ],
  },
  about: {
    title: 'About',
    subtitle:
      'An overview of who I am, how I work, and the principles that guide my development.',
    paragraphs: [
      'My name is Cristian, and I work in technology from a foundation that combines development, internal systems, and operations. Throughout my career, I have moved across different contexts, which gave me a broader perspective on how to structure solutions in a clear, useful, and sustainable way.',
      'Today, I work mainly on front-end and operational efficiency initiatives, combining logic, organization, and attention to user experience. At the same time, I carry a strong connection to aesthetics, visual sensitivity, and creative processes, which directly influences the way I think about interfaces, details, and product building.',
      'Between 2021 and 2023, I took a career break to pursue personal goals and dedicate myself to an independent music production project, a period that also expanded my creative perspective, repertoire, and the way I approach problems with greater depth.',
    ],
    highlights: [
      {
        label: 'Education',
        value: 'Bachelor’s degree in Information Systems from UNIVEM, completed in 2020.',
      },
      {
        label: 'Hobbies',
        value: 'Music production, design, guitar, drums, boxing, and exploring cultural and creative references.',
      },
      {
        label: 'Personal Development',
        value:
          '∙ Vice President of Interact Club of Marília, sponsored by Rotary, during the 2016/17 term\n∙ Member of DeMolay, supported by Freemasonry, since 2016\n∙ Participated in the Hoffman Process, an intensive self-awareness program, in 2021\n∙ Participated in Master PH, an advanced stage of the Hoffman methodology focused on self-awareness and self-leadership, in 2021',
      },
    ],
  },
  skills: {
    title: 'Skills',
    subtitle:
      'Technologies, tools, and knowledge that support my day-to-day work.',
    groups: [
      {
        id: 'frontend',
        title: 'Technologies',
        items: ['React', 'TypeScript', 'Zendesk', 'Next.js', 'Python', 'JavaScript', 'Vite', 'Tailwind', 'Git'],
      },
      {
        id: 'design',
        title: 'Design',
        items: ['Adobe Photoshop', 'Adobe Illustrator'],
      },
      {
        id: 'languages',
        title: 'Languages',
        items: ['Portuguese (native)', 'English (professional)'],
      },
      {
        id: 'tools',
        title: 'Soft Skills',
        items: ['Communication', 'Creativity', 'Empathy', 'Proactivity', 'Leadership'],
      },
    ],
  },
  footer: {
    title: 'Contact',
    note: 'Available for full-time, contractor, and selected freelance opportunities.',
    links: [
      {
        label: 'Email',
        ariaLabel: 'Send an email',
        href: 'mailto:cristian.rossicosta@gmail.com',
        icon: 'email',
      },
      {
        label: 'WhatsApp',
        ariaLabel: 'Open WhatsApp chat in a new tab',
        href: 'https://wa.me/+5514997973716',
        icon: 'whatsapp',
      },
      {
        label: 'Download CV',
        ariaLabel: 'Open CV PDF in a new tab',
        href: '/cv-en.docx.pdf',
        icon: 'download',
      },
      {
        label: 'LinkedIn',
        ariaLabel: 'Open LinkedIn profile in a new tab',
        href: 'https://www.linkedin.com/in/cristian-rossi-ccosta/',
        icon: 'linkedin',
      },
      {
        label: 'GitHub',
        ariaLabel: 'Open GitHub profile in a new tab',
        href: 'https://github.com/cristian-rossi98',
        icon: 'github',
      },
    ],
  },
}