import { useI18n } from '../../app/providers/I18nProvider'
import { Section } from '../layout/Section'
import { Card } from '../ui/Card'

export function SkillsSection() {
  const { content } = useI18n()
  const skills = content.skills

  return (
    <Section id="skills" title={skills.title} subtitle={skills.subtitle}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.groups.map((g) => (
          <Card key={g.id} className="p-5 sm:p-6">
            <h3 className="text-sm font-semibold tracking-tight text-[color:var(--app-fg)]">{g.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[color:var(--app-border)] bg-[color:var(--app-surface)] px-3 py-1 text-xs text-[color:var(--app-fgMuted)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}

