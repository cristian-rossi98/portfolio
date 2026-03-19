export type Locale = 'en' | 'pt-BR'

export type SectionId =
  | 'hero'
  | 'experience'
  | 'projects'
  | 'about'
  | 'skills'
  | 'footer'

export type IconKey =
  | 'email'
  | 'whatsapp'
  | 'github'
  | 'linkedin'
  | 'external'
  | 'download'
  | 'globe'

export type ExternalLink = {
  label: string
  ariaLabel?: string
  href: string
  icon?: IconKey
}

export type HeaderContent = {
  brandMark: string
  nav: Array<{ id: SectionId; label: string }>
  emailCta: { label: string; href: string }
  language: { label: string; options: Array<{ locale: Locale; label: string }> }
}

export type HeroContent = {
  eyebrow: string
  headline: string
  subheadline: string
  intro: string
  portraitBadges?: Array<{ label: string; value: string }>
  ctas: {
    primary: { label: string; href: string; icon?: IconKey }
    secondary?: { label: string; href: string; icon?: IconKey }
  }
  socials: ExternalLink[]
  portrait: { src: string; alt: string }
}

export type ExperienceDetails = {
  responsibilities?: string[]
  achievements?: string[]
  projects?: string[]
  technologies?: string[]
  links?: ExternalLink[]
}

export type ExperienceItem = {
  id: string
  company: string
  role: string
  start: string
  end: string
  summary: string
  location?: string
  details?: ExperienceDetails
  viewMoreLabel?: string
}

export type ExperienceSectionContent = {
  title: string
  subtitle?: string
  labels: {
    previous: string
    next: string
    viewMore: string
    responsibilities: string
    achievements: string
    projects: string
    technologies: string
  }
  items: ExperienceItem[]
}

export type ProjectItem = {
  id: string
  name: string
  description: string
  image?: { src: string; alt: string }
  demoVideo?: string
  stack: string[]
  links: ExternalLink[]
}

export type ProjectsSectionContent = {
  title: string
  subtitle?: string
  items: ProjectItem[]
}

export type AboutSectionContent = {
  title: string
  subtitle?: string
  paragraphs: string[]
  highlights?: Array<{ label: string; value: string }>
}

export type SkillGroup = {
  id: string
  title: string
  items: string[]
}

export type SkillsSectionContent = {
  title: string
  subtitle?: string
  groups: SkillGroup[]
}

export type FooterContent = {
  title: string
  note?: string
  links: ExternalLink[]
}

export type A11yContent = {
  skipToContent: string
  closeModal: string
  openNavigation: string
  closeNavigation: string
}

export type PortfolioContent = {
  meta: { title: string; description: string }
  a11y: A11yContent
  header: HeaderContent
  hero: HeroContent
  experience: ExperienceSectionContent
  projects: ProjectsSectionContent
  about: AboutSectionContent
  skills: SkillsSectionContent
  footer: FooterContent
}

