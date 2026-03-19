import { useMemo, useRef, useState } from 'react'
import { useI18n } from '../../app/providers/I18nProvider'
import type { ExperienceItem } from '../../types/content'
import { Section } from '../layout/Section'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { Modal } from '../ui/Modal'

function hasDetails(item: ExperienceItem) {
  const d = item.details
  if (!d) return false
  const keys: Array<keyof NonNullable<ExperienceItem['details']>> = [
    'responsibilities',
    'achievements',
    'projects',
    'technologies',
    'links',
  ]
  return keys.some((k) => (d[k] ? (d[k] as unknown[]).length > 0 : false))
}

export function ExperienceSection() {
  const { content } = useI18n()
  const exp = content.experience
  const trackRef = useRef<HTMLDivElement | null>(null)
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const selected = useMemo(
    () => exp.items.find((i) => i.id === selectedId) ?? null,
    [exp.items, selectedId],
  )

  const scrollByCards = (dir: -1 | 1) => {
    const el = trackRef.current
    if (!el) return
    const firstCard = el.querySelector<HTMLElement>('[data-exp-card]')
    const step = firstCard ? firstCard.getBoundingClientRect().width + 16 : 360
    el.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  return (
    <>
      <Section id="experience" title={exp.title} subtitle={exp.subtitle}>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-10 bg-gradient-to-r from-[color:var(--app-bg)] to-transparent sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-10 bg-gradient-to-l from-[color:var(--app-bg)] to-transparent sm:block" />
          <div className="absolute -top-12 right-0 z-20 hidden items-center gap-2 sm:flex">
            <Button
              variant="ghost"
              onClick={() => scrollByCards(-1)}
              aria-label={exp.labels.previous}
            >
              ←
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollByCards(1)}
              aria-label={exp.labels.next}
            >
              →
            </Button>
          </div>

          <div className="overflow-visible">
            <div
              ref={trackRef}
              className="flex snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-visible px-4 pb-8 pt-4 sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              role="list"
              aria-label={exp.title}
            >
              {exp.items.map((item) => {
                const canExpand = hasDetails(item)
                return (
                  <Card
                    key={item.id}
                    data-exp-card
                    role="listitem"
                    className="card-surface-hover min-w-[86%] snap-start p-5 sm:min-w-[420px] sm:p-6"
                    style={{ scrollSnapAlign: 'start' }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <div className="text-sm font-semibold tracking-tight text-[color:var(--app-fg)]">
                          {item.role}
                        </div>
                        <div className="mt-1 text-sm text-[color:var(--app-fgMuted)]">{item.company}</div>
                      </div>
                      <div className="shrink-0 text-right text-xs text-[color:var(--app-fgMuted)]">
                        <div>
                          {item.start} — {item.end}
                        </div>
                        {item.location ? <div className="mt-1">{item.location}</div> : null}
                      </div>
                    </div>

                    <p className="mt-4 text-pretty text-sm leading-7 text-[color:var(--app-fgMuted)]">
                      {item.summary}
                    </p>

                    {canExpand ? (
                      <div className="mt-5">
                        <Button
                          variant="secondary"
                          onClick={() => setSelectedId(item.id)}
                        >
                          {item.viewMoreLabel ?? exp.labels.viewMore}
                        </Button>
                      </div>
                    ) : null}
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </Section>

      <Modal
        open={Boolean(selected)}
        title={selected ? `${selected.role} · ${selected.company}` : ''}
        closeLabel={content.a11y.closeModal}
        onClose={() => setSelectedId(null)}
      >
        {selected ? (
          <div className="space-y-6">
            <div className="text-sm text-[color:var(--app-fgMuted)]">
              <div>
                <span className="text-[color:var(--app-fg)]">{selected.start}</span> —{' '}
                <span className="text-[color:var(--app-fg)]">{selected.end}</span>
              </div>
              {selected.location ? <div className="mt-1">{selected.location}</div> : null}
            </div>

            <p className="text-sm leading-7 text-[color:var(--app-fgMuted)]">{selected.summary}</p>

            {selected.details?.responsibilities?.length ? (
              <div>
                <div className="text-sm font-semibold text-[color:var(--app-fg)]">
                  {exp.labels.responsibilities}
                </div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[color:var(--app-fgMuted)]">
                  {selected.details.responsibilities.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {selected.details?.achievements?.length ? (
              <div>
                <div className="text-sm font-semibold text-[color:var(--app-fg)]">
                  {exp.labels.achievements}
                </div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[color:var(--app-fgMuted)]">
                  {selected.details.achievements.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {selected.details?.projects?.length ? (
              <div>
                <div className="text-sm font-semibold text-[color:var(--app-fg)]">{exp.labels.projects}</div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[color:var(--app-fgMuted)]">
                  {selected.details.projects.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {selected.details?.technologies?.length ? (
              <div>
                <div className="text-sm font-semibold text-[color:var(--app-fg)]">
                  {exp.labels.technologies}
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {selected.details.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[color:var(--app-border)] bg-[color:var(--app-surface)] px-3 py-1 text-xs text-[color:var(--app-fgMuted)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}

            {selected.details?.links?.length ? (
              <div className="flex flex-wrap gap-2">
                {selected.details.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring inline-flex items-center gap-2 rounded-xl border border-[color:var(--app-border)] bg-[color:var(--app-surface)] px-3 py-2 text-sm text-[color:var(--app-fg)] transition-colors hover:bg-[color:var(--app-surface2)]"
                    aria-label={l.ariaLabel ?? l.label}
                  >
                    <span>{l.label}</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        ) : null}
      </Modal>
    </>
  )
}

