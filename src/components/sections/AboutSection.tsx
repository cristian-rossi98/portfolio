import { useI18n } from '../../app/providers/I18nProvider'
import { Section } from '../layout/Section'
import { Card } from '../ui/Card'

export function AboutSection() {
  const { content } = useI18n()
  const about = content.about

  return (
    <Section id="about" title={about.title} subtitle={about.subtitle}>
      <div className="grid gap-4 lg:grid-cols-12 lg:items-start">
        <Card className="lg:col-span-7 p-5 sm:p-6">
          <div className="space-y-4">
            {about.paragraphs.map((p) => (
              <p
                key={p}
                className="text-pretty text-sm leading-7 text-[color:var(--app-fgMuted)] sm:text-base"
              >
                {p}
              </p>
            ))}
          </div>
        </Card>

        {about.highlights?.length ? (
          <div className="lg:col-span-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {about.highlights.map((h) => (
              <Card key={h.label} className="p-5 sm:p-6">
                <div className="text-xs font-medium uppercase tracking-wide text-[color:var(--app-fgMuted)]">
                  {h.label}
                </div>
                <div className="mt-2 text-sm leading-7 text-[color:var(--app-fg)] whitespace-pre-line">{h.value}</div>
              </Card>
            ))}
          </div>
        ) : null}
      </div>
    </Section>
  )
}

