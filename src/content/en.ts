import type { PortfolioContent } from '../types/content'

export const contentEn: PortfolioContent = {
  meta: {
    title: 'Portfolio',
    description: 'Premium single-page portfolio for a front-end developer.',
  },
  a11y: {
    skipToContent: 'Skip to content',
    closeModal: 'Close dialog',
    openNavigation: 'Open navigation menu',
    closeNavigation: 'Close navigation menu',
  },
  header: {
    brandMark: 'cr',
    nav: [
      { id: 'hero', label: 'Home' },
      { id: 'experience', label: 'Experience' },
      { id: 'projects', label: 'Projects' },
      { id: 'about', label: 'About' },
      { id: 'skills', label: 'Skills' },
    ],
    emailCta: { label: "Let's talk", href: 'mailto:you@email.com' },
    language: {
      label: 'Language',
      options: [
        { locale: 'en', label: 'English' },
        { locale: 'pt-BR', label: 'Português' },
      ],
    },
  },
  hero: {
    eyebrow: 'Front-End Developer',
    headline: 'Building premium, fast, accessible web experiences.',
    subheadline:
      'I blend clean engineering with refined UI to ship responsive products that feel effortless.',
    intro:
      'Specialized in React, TypeScript, design systems, and performance. Comfortable collaborating with product and design teams and turning complex requirements into elegant interfaces.',
    portraitBadges: [
      { label: 'UI', value: 'Design Systems' },
      { label: 'DX', value: 'Reusable' },
      { label: 'Perf', value: 'Fast' },
    ],
    ctas: {
      primary: { label: 'Download CV', href: '/cv-en.docx.pdf', icon: 'download' },
    },
    socials: [
      {
        label: 'LinkedIn',
        ariaLabel: 'Open LinkedIn profile in a new tab',
        href: 'https://www.linkedin.com/in/your-handle/',
        icon: 'linkedin',
      },
      {
        label: 'GitHub',
        ariaLabel: 'Open GitHub profile in a new tab',
        href: 'https://github.com/your-handle',
        icon: 'github',
      },
    ],
    portrait: {
      src: '/avatar.jpg',
      alt: 'Portrait photo',
    },
  },
  experience: {
    title: 'Experience',
    subtitle: 'Selected roles and outcomes. Swipe or use arrows to explore.',
    labels: {
      previous: 'Previous',
      next: 'Next',
      viewMore: 'View more',
      responsibilities: 'Responsibilities',
      achievements: 'Achievements',
      projects: 'Projects',
      technologies: 'Technologies',
    },
    items: [
      {
        id: 'exp-1',
        company: 'Product Studio',
        role: 'Front-End Engineer',
        start: '2024',
        end: 'Present',
        summary:
          'Led UI architecture for a multi-tenant dashboard, improving perceived performance and consistency across the product.',
        details: {
          responsibilities: [
            'Owned key UI flows end-to-end: discovery, implementation, and iteration.',
            'Built reusable components and layout primitives for faster feature delivery.',
            'Partnered with design to refine accessibility and interaction states.',
          ],
          achievements: [
            'Reduced UI regressions by standardizing patterns and shared components.',
            'Improved Lighthouse performance score on core pages with targeted optimizations.',
          ],
          projects: [
            'Admin Dashboard: analytics, role-based UI, and data-heavy tables.',
            'Design System: tokens, components, and documentation patterns.',
          ],
          technologies: ['React', 'TypeScript', 'Tailwind', 'Vite', 'Testing Library'],
          links: [
            {
              label: 'Company website',
              ariaLabel: 'Open company website in a new tab',
              href: 'https://example.com',
              icon: 'external',
            },
          ],
        },
        viewMoreLabel: 'View more',
      },
      {
        id: 'exp-2',
        company: 'SaaS Platform',
        role: 'UI Developer',
        start: '2022',
        end: '2024',
        summary:
          'Delivered responsive UI features for onboarding and billing flows with a focus on clarity, a11y, and conversion.',
        details: {
          responsibilities: [
            'Implemented high-traffic pages with careful semantics and accessibility.',
            'Collaborated with backend teams to define API contracts for UI needs.',
          ],
          achievements: [
            'Increased form completion by simplifying steps and improving validation UX.',
          ],
          technologies: ['React', 'TypeScript', 'CSS', 'Node.js'],
        },
        viewMoreLabel: 'View more',
      },
      {
        id: 'exp-3',
        company: 'Agency',
        role: 'Front-End Developer',
        start: '2020',
        end: '2022',
        summary:
          'Built marketing websites and landing pages with meticulous responsiveness and animation restraint.',
      },
    ],
  },
  projects: {
    title: 'Projects',
    subtitle: 'A curated selection with clean execution and refined UI.',
    items: [
      {
        id: 'proj-1',
        name: 'Premium Portfolio',
        description:
          'Single-page portfolio with bilingual content, dynamic sections, and accessible modal flows.',
        image: { src: '/project-1.svg', alt: 'Project cover image' },
        stack: ['React', 'TypeScript', 'Tailwind'],
        links: [
          {
            label: 'Live',
            ariaLabel: 'Open live project in a new tab',
            href: 'https://example.com',
            icon: 'external',
          },
          {
            label: 'Code',
            ariaLabel: 'Open source code in a new tab',
            href: 'https://github.com/your-handle/project',
            icon: 'github',
          },
        ],
      },
      {
        id: 'proj-2',
        name: 'Design System Kit',
        description:
          'Reusable UI primitives and patterns focused on consistency, accessibility, and speed.',
        stack: ['Tokens', 'Components', 'A11y'],
        links: [
          {
            label: 'Case study',
            ariaLabel: 'Open case study in a new tab',
            href: 'https://example.com',
            icon: 'external',
          },
        ],
      },
    ],
  },
  about: {
    title: 'About',
    subtitle: 'A professional summary and working approach.',
    paragraphs: [
      'I design and build front-end interfaces that prioritize clarity, performance, and accessibility.',
      'My approach combines strong engineering fundamentals with a sharp eye for hierarchy, spacing, and interaction detail.',
      'I enjoy partnering with teams to ship reliable UI, from quick prototypes to production-grade systems.',
    ],
    highlights: [
      { label: 'Focus', value: 'Design systems, performance, UI architecture' },
      { label: 'Preferred stack', value: 'React + TypeScript' },
      { label: 'Collaboration', value: 'Product, Design, and Engineering' },
    ],
  },
  skills: {
    title: 'Skills',
    subtitle: 'A structured snapshot of the tools I use daily.',
    groups: [
      {
        id: 'frontend',
        title: 'Frontend Tech',
        items: ['React', 'TypeScript', 'Tailwind CSS', 'HTML', 'CSS', 'Vite'],
      },
      {
        id: 'design',
        title: 'Design Tools',
        items: ['Figma', 'Photoshop', 'Illustrator'],
      },
      {
        id: 'languages',
        title: 'Languages',
        items: ['Portuguese (native)', 'English (professional)'],
      },
      {
        id: 'tools',
        title: 'Tools & Platforms',
        items: ['GitHub', 'Netlify', 'Vercel', 'Zendesk', 'Jira'],
      },
    ],
  },
  footer: {
    title: 'Contact',
    note: 'Available for full-time roles and selective freelance projects.',
    links: [
      {
        label: 'Email',
        ariaLabel: 'Send an email',
        href: 'mailto:you@email.com',
        icon: 'email',
      },
      {
        label: 'WhatsApp',
        ariaLabel: 'Open WhatsApp chat in a new tab',
        href: 'https://wa.me/0000000000000',
        icon: 'whatsapp',
      },
      {
        label: 'Download CV',
        ariaLabel: 'Open CV PDF in a new tab',
        href: '/cv.pdf',
        icon: 'download',
      },
      {
        label: 'LinkedIn',
        ariaLabel: 'Open LinkedIn profile in a new tab',
        href: 'https://www.linkedin.com/in/your-handle/',
        icon: 'linkedin',
      },
      {
        label: 'GitHub',
        ariaLabel: 'Open GitHub profile in a new tab',
        href: 'https://github.com/your-handle',
        icon: 'github',
      },
    ],
  },
}

