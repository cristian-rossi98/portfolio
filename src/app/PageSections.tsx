import type { ComponentType } from 'react'
import type { SectionId } from '../types/content'
import { SECTION_ORDER } from '../lib/sections'
import { HeroSection } from '../components/sections/HeroSection'
import { ExperienceSection } from '../components/sections/ExperienceSection'
import { ProjectsSection } from '../components/sections/ProjectsSection'
import { AboutSection } from '../components/sections/AboutSection'
import { SkillsSection } from '../components/sections/SkillsSection'

const registry: Record<Exclude<SectionId, 'footer'>, ComponentType> = {
  hero: HeroSection,
  experience: ExperienceSection,
  projects: ProjectsSection,
  about: AboutSection,
  skills: SkillsSection,
}

export function PageSections() {
  return (
    <>
      {SECTION_ORDER.filter((id) => id !== 'footer').map((id) => {
        const Comp = registry[id as Exclude<SectionId, 'footer'>]
        return <Comp key={id} />
      })}
    </>
  )
}

